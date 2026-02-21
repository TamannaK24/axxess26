import FeatureNav from "./FeatureNav";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Activity, AlertTriangle, Info } from "lucide-react";

export default function Feature4() {
  const symptoms = [
    { 
      symptom: "Severe abdominal pain (lower right)", 
      severity: "high",
      category: "Primary Complaint",
      duration: "2 weeks",
      progression: "Worsening"
    },
    { 
      symptom: "Pain worsening over time", 
      severity: "high",
      category: "Progression",
      duration: "2 weeks",
      progression: "Escalating"
    },
    { 
      symptom: "Pain disrupting sleep", 
      severity: "high",
      category: "Severity Indicator",
      duration: "3+ days",
      progression: "Recent"
    },
    { 
      symptom: "Family history: Endometriosis", 
      severity: "high",
      category: "Risk Factor",
      duration: "N/A",
      progression: "Genetic"
    },
    { 
      symptom: "Nausea", 
      severity: "medium",
      category: "Associated Symptom",
      duration: "1 week",
      progression: "Stable"
    },
    { 
      symptom: "Loss of appetite", 
      severity: "medium",
      category: "Associated Symptom",
      duration: "3+ days",
      progression: "Recent"
    },
    { 
      symptom: "Irregular periods", 
      severity: "medium",
      category: "Reproductive Health",
      duration: "Ongoing",
      progression: "Chronic"
    },
    { 
      symptom: "Chronic fatigue", 
      severity: "medium",
      category: "Systemic",
      duration: "2+ weeks",
      progression: "Persistent"
    },
  ];

  const highSeverity = symptoms.filter(s => s.severity === "high");
  const mediumSeverity = symptoms.filter(s => s.severity === "medium");

  const categories = Array.from(new Set(symptoms.map(s => s.category)));

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <FeatureNav 
        currentFeature={4}
        totalFeatures={8}
        title="Key Symptoms Extraction"
        description="Automated identification and prioritization of reported symptoms"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-green-600">{symptoms.length}</div>
            <div className="text-sm text-gray-600 mt-1">Total Symptoms</div>
          </Card>
          <Card className="p-4 text-center border-2 border-red-200 bg-red-50">
            <div className="text-3xl font-bold text-red-600">{highSeverity.length}</div>
            <div className="text-sm text-gray-600 mt-1">High Severity</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-yellow-600">{mediumSeverity.length}</div>
            <div className="text-sm text-gray-600 mt-1">Medium Severity</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-purple-600">{categories.length}</div>
            <div className="text-sm text-gray-600 mt-1">Categories</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* High Severity Symptoms */}
            <Card className="p-6 border-2 border-red-200 bg-red-50">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <h3 className="text-xl font-semibold text-red-900">
                  High Severity Symptoms ({highSeverity.length})
                </h3>
              </div>
              <p className="text-sm text-red-800 mb-4">
                These symptoms require immediate medical attention and should not be dismissed.
              </p>
              <div className="space-y-3">
                {highSeverity.map((item, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full" />
                        <h4 className="font-semibold text-gray-900">{item.symptom}</h4>
                      </div>
                      <Badge className="bg-red-600 text-white">High</Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-sm mt-3">
                      <div>
                        <div className="text-gray-500 text-xs">Category</div>
                        <div className="font-medium text-gray-900">{item.category}</div>
                      </div>
                      <div>
                        <div className="text-gray-500 text-xs">Duration</div>
                        <div className="font-medium text-gray-900">{item.duration}</div>
                      </div>
                      <div>
                        <div className="text-gray-500 text-xs">Progression</div>
                        <div className="font-medium text-gray-900">{item.progression}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Medium Severity Symptoms */}
            <Card className="p-6 border-2 border-yellow-200 bg-yellow-50">
              <div className="flex items-center gap-3 mb-4">
                <Activity className="w-6 h-6 text-yellow-600" />
                <h3 className="text-xl font-semibold text-yellow-900">
                  Medium Severity Symptoms ({mediumSeverity.length})
                </h3>
              </div>
              <p className="text-sm text-yellow-800 mb-4">
                Supporting symptoms that provide important context for diagnosis.
              </p>
              <div className="space-y-3">
                {mediumSeverity.map((item, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                        <h4 className="font-semibold text-gray-900">{item.symptom}</h4>
                      </div>
                      <Badge className="bg-yellow-600 text-white">Medium</Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-sm mt-3">
                      <div>
                        <div className="text-gray-500 text-xs">Category</div>
                        <div className="font-medium text-gray-900">{item.category}</div>
                      </div>
                      <div>
                        <div className="text-gray-500 text-xs">Duration</div>
                        <div className="font-medium text-gray-900">{item.duration}</div>
                      </div>
                      <div>
                        <div className="text-gray-500 text-xs">Progression</div>
                        <div className="font-medium text-gray-900">{item.progression}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Symptom Categories */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Symptoms by Category
              </h3>
              <div className="space-y-3">
                {categories.map((category, idx) => {
                  const categorySymptoms = symptoms.filter(s => s.category === category);
                  return (
                    <div key={idx} className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{category}</h4>
                        <Badge className="bg-purple-600 text-white">
                          {categorySymptoms.length} symptoms
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {categorySymptoms.map((symptom, sIdx) => (
                          <Badge 
                            key={sIdx}
                            className={symptom.severity === "high" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}
                          >
                            {symptom.symptom}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6 bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200">
              <h4 className="font-semibold text-gray-900 mb-3">⚠️ Critical Findings</h4>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Localized pain</strong> in lower right abdomen may indicate appendicitis or ovarian issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Worsening progression</strong> over 2 weeks requires urgent evaluation</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Sleep disruption</strong> indicates severe pain level (7-9/10)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Family history</strong> of endometriosis significantly increases risk</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-gray-900 mb-3">📊 Severity Scale</h4>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 rounded border-l-4 border-red-500">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <span className="font-semibold text-red-900">High</span>
                  </div>
                  <p className="text-xs text-red-800">Requires immediate attention, potential emergency</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded border-l-4 border-yellow-500">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <span className="font-semibold text-yellow-900">Medium</span>
                  </div>
                  <p className="text-xs text-yellow-800">Important context, should be investigated</p>
                </div>
                <div className="p-3 bg-green-50 rounded border-l-4 border-green-500">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="font-semibold text-green-900">Low</span>
                  </div>
                  <p className="text-xs text-green-800">Mild symptoms, monitor over time</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-blue-50 border-2 border-blue-200">
              <div className="flex items-start gap-2 mb-3">
                <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900">💡 How It Works</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>NLP extracts symptoms from transcription</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Medical knowledge base assigns severity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Temporal analysis tracks progression</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Categorization aids differential diagnosis</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
