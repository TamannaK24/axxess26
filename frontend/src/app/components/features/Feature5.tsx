import FeatureNav from "./FeatureNav";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Flag, AlertTriangle, Clock } from "lucide-react";

export default function Feature5() {
  const redFlags = [
    {
      flag: "Pain worsening over 2 weeks",
      risk: "Critical",
      reasoning: "Progressive pain indicates potential underlying condition that requires urgent investigation. Not self-limiting.",
      action: "Demand imaging tests within 48 hours"
    },
    {
      flag: "Localized pain (lower right abdomen)",
      risk: "Critical",
      reasoning: "Specific location suggests organ involvement: appendix, ovary, fallopian tube. Could be appendicitis, ovarian cyst, or ectopic pregnancy.",
      action: "Physical examination + ultrasound required"
    },
    {
      flag: "Symptoms dismissed as stress/anxiety",
      risk: "High",
      reasoning: "Common gender bias pattern. Physical symptoms attributed to mental health without investigation dismisses real medical conditions.",
      action: "Request second opinion from different provider"
    },
    {
      flag: "Night-waking pain (severity 7-9/10)",
      risk: "Critical",
      reasoning: "Pain severe enough to disrupt sleep indicates high pain level. Body's rest is interrupted, suggesting serious condition.",
      action: "Document pain levels, request pain management referral"
    },
    {
      flag: "Loss of appetite + nausea",
      risk: "High",
      reasoning: "Systemic symptoms suggest condition is affecting overall health. Combination indicates more than localized issue.",
      action: "Request comprehensive bloodwork (CBC, CRP, ESR)"
    },
    {
      flag: "No diagnostic tests ordered",
      risk: "Critical",
      reasoning: "Severe, localized, worsening pain requires investigation. No tests ordered despite clear symptoms is medical negligence.",
      action: "Explicitly request ultrasound, bloodwork, physical exam"
    },
    {
      flag: "Family history ignored",
      risk: "High",
      reasoning: "Endometriosis has genetic component. First-degree relative with condition significantly increases patient risk (40-50%).",
      action: "Bring family medical records, request specialist referral"
    },
  ];

  const urgencyLevels = {
    critical: redFlags.filter(f => f.risk === "Critical").length,
    high: redFlags.filter(f => f.risk === "High").length,
  };

  const immediateActions = [
    "Request imaging (ultrasound or CT scan) within 48 hours",
    "Ask for referral to gynecologist or gastroenterologist",
    "Document all symptoms with dates and severity levels",
    "Request copy of visit notes and add your own corrections",
    "Consider seeking second opinion if concerns dismissed",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <FeatureNav 
        currentFeature={5}
        totalFeatures={8}
        title="Red Flag Detection"
        description="Critical alerts for symptoms that require immediate attention"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 text-center border-2 border-red-200 bg-red-50">
            <div className="text-3xl font-bold text-red-600">{redFlags.length}</div>
            <div className="text-sm text-gray-600 mt-1">Total Red Flags</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-red-600">{urgencyLevels.critical}</div>
            <div className="text-sm text-gray-600 mt-1">Critical Risk</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-orange-600">{urgencyLevels.high}</div>
            <div className="text-sm text-gray-600 mt-1">High Risk</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-purple-600">48hrs</div>
            <div className="text-sm text-gray-600 mt-1">Action Timeframe</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Critical Alert Banner */}
            <Card className="p-6 bg-gradient-to-r from-red-500 to-orange-500 text-white border-0">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    🚨 Urgent Action Required
                  </h3>
                  <p className="text-red-50 mb-3">
                    {urgencyLevels.critical} critical red flags detected. This visit shows concerning patterns of symptom dismissal and lack of diagnostic investigation. Immediate follow-up is strongly recommended.
                  </p>
                  <Badge className="bg-white text-red-600 font-semibold">
                    Follow up within 48 hours
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Red Flags List */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Identified Red Flags
              </h3>
              <div className="space-y-4">
                {redFlags.map((item, idx) => (
                  <Card key={idx} className="p-5 border-l-4 border-red-500 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3">
                      <Flag className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        item.risk === "Critical" ? "text-red-600" : "text-orange-600"
                      }`} />
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="font-semibold text-gray-900 text-lg">
                            {item.flag}
                          </h4>
                          <Badge className={
                            item.risk === "Critical" 
                              ? "bg-red-600 text-white flex-shrink-0" 
                              : "bg-orange-600 text-white flex-shrink-0"
                          }>
                            {item.risk}
                          </Badge>
                        </div>
                        
                        <div className="mb-3">
                          <div className="text-sm font-medium text-gray-700 mb-1">Why This Matters:</div>
                          <p className="text-sm text-gray-600">{item.reasoning}</p>
                        </div>

                        <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                          <div className="text-sm font-medium text-green-900 mb-1">
                            ✓ Recommended Action:
                          </div>
                          <p className="text-sm text-green-800 font-medium">{item.action}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6 bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-300">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-red-600" />
                <h4 className="font-semibold text-gray-900">⏰ Immediate Actions</h4>
              </div>
              <div className="space-y-2">
                {immediateActions.map((action, idx) => (
                  <div key={idx} className="p-3 bg-white rounded border-l-4 border-red-500 text-sm text-gray-700">
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-red-600">{idx + 1}.</span>
                      <span>{action}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-yellow-50 border-2 border-yellow-300">
              <h4 className="font-semibold text-gray-900 mb-3">⚠️ When to Seek Emergency Care</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span>Pain suddenly becomes severe (9-10/10)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span>Fever above 101°F (38.3°C)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span>Vomiting or inability to eat/drink</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span>Fainting, dizziness, or weakness</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span>Abnormal vaginal bleeding</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-gray-900 mb-3">📊 Risk Levels Explained</h4>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 rounded border-l-4 border-red-600">
                  <div className="font-semibold text-red-900 mb-1">Critical</div>
                  <p className="text-xs text-red-800">Requires immediate medical attention. Potential for serious complications if ignored.</p>
                </div>
                <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-600">
                  <div className="font-semibold text-orange-900 mb-1">High</div>
                  <p className="text-xs text-orange-800">Significant concern that should be addressed within days. Strong advocacy needed.</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded border-l-4 border-yellow-600">
                  <div className="font-semibold text-yellow-900 mb-1">Medium</div>
                  <p className="text-xs text-yellow-800">Should be monitored and addressed at next visit. Document carefully.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-blue-50 border-2 border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-3">💡 How Detection Works</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Pattern matching against medical guidelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Temporal analysis of symptom progression</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Detection of care gaps (missing tests/exams)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Family history risk calculation</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
