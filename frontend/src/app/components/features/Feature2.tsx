import FeatureNav from "./FeatureNav";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import BiasAlert from "../BiasAlert";
import { TrendingUp, AlertCircle } from "lucide-react";

export default function Feature2() {
  const alerts = [
    {
      type: "misdiagnosis" as const,
      title: "Dismissal of Severe Symptoms",
      description: "Patient reported severe, localized abdominal pain lasting 2 weeks with worsening trajectory. This was attributed to stress without physical examination or diagnostic tests.",
      severity: "high" as const,
    },
    {
      type: "bias" as const,
      title: "Gender Bias: 'It's Just Anxiety'",
      description: "Doctor dismissed patient's concerns as anxiety/stress despite presenting with physical symptoms and family history of endometriosis. Research shows women's pain is often minimized.",
      severity: "medium" as const,
    },
    {
      type: "misdiagnosis" as const,
      title: "Ignored Family History",
      description: "Patient mentioned family history of endometriosis, which is a significant risk factor. This was not acknowledged or investigated further.",
      severity: "high" as const,
    },
    {
      type: "bias" as const,
      title: "Delayed Diagnostic Testing",
      description: "No diagnostic tests (ultrasound, bloodwork, physical exam) were ordered despite escalating symptoms and clear pain localization.",
      severity: "medium" as const,
    },
    {
      type: "misdiagnosis" as const,
      title: "Pain Attribution to Menstrual Cycle",
      description: "Severe, worsening pain was attributed to normal menstrual discomfort without investigation of underlying conditions like PCOS, fibroids, or appendicitis.",
      severity: "high" as const,
    },
    {
      type: "bias" as const,
      title: "Symptom Minimization Pattern",
      description: "Multiple instances of patient symptoms being minimized with phrases like 'just anxious', 'probably stress', indicating systematic dismissal.",
      severity: "medium" as const,
    },
  ];

  const stats = {
    totalAlerts: alerts.length,
    highSeverity: alerts.filter(a => a.severity === "high").length,
    misdiagnosisRisk: alerts.filter(a => a.type === "misdiagnosis").length,
    biasDetected: alerts.filter(a => a.type === "bias").length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <FeatureNav 
        currentFeature={2}
        totalFeatures={8}
        title="AI-Powered Alerts"
        description="Automated detection of misdiagnosis risks and gender bias patterns"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-purple-600">{stats.totalAlerts}</div>
            <div className="text-sm text-gray-600 mt-1">Total Alerts</div>
          </Card>
          <Card className="p-4 text-center border-2 border-red-200 bg-red-50">
            <div className="text-3xl font-bold text-red-600">{stats.highSeverity}</div>
            <div className="text-sm text-gray-600 mt-1">High Severity</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-red-600">{stats.misdiagnosisRisk}</div>
            <div className="text-sm text-gray-600 mt-1">Misdiagnosis Risk</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-yellow-600">{stats.biasDetected}</div>
            <div className="text-sm text-gray-600 mt-1">Bias Detected</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Alerts */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Identified Concerns
              </h3>
              <Badge className="bg-red-100 text-red-800">
                {stats.highSeverity} Critical
              </Badge>
            </div>

            {alerts.map((alert, idx) => (
              <BiasAlert key={idx} {...alert} />
            ))}

            {/* Summary Card */}
            <Card className="p-6 mt-6 bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-orange-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">⚠️ Critical Assessment</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    This conversation shows <strong>{stats.highSeverity} high-severity alerts</strong> indicating significant concerns about symptom dismissal and potential misdiagnosis. Immediate follow-up is recommended.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-red-600 text-white">Requires Action</Badge>
                    <Badge className="bg-orange-600 text-white">Follow-up Needed</Badge>
                    <Badge className="bg-yellow-600 text-white">Advocate Strongly</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Alert Types
              </h3>

              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-red-900">Misdiagnosis Risk</h4>
                    <Badge className="bg-red-600 text-white">{stats.misdiagnosisRisk}</Badge>
                  </div>
                  <p className="text-sm text-red-800">
                    Symptoms dismissed without proper investigation or testing
                  </p>
                </div>

                <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-yellow-900">Bias Detected</h4>
                    <Badge className="bg-yellow-600 text-white">{stats.biasDetected}</Badge>
                  </div>
                  <p className="text-sm text-yellow-800">
                    Gender bias patterns or symptom minimization identified
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
              <h4 className="font-semibold text-gray-900 mb-3">📊 Research Context</h4>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                  <span>Women wait an average of <strong>4 years longer</strong> for endometriosis diagnosis</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                  <span>Women's pain is <strong>more likely to be attributed</strong> to emotional causes</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                  <span><strong>75% of women</strong> report feeling dismissed by healthcare providers</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-blue-50 border-2 border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-3">💡 How It Works</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Machine learning models trained on medical conversations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Pattern recognition for dismissive language</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Medical knowledge base for symptom severity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Real-time alert generation during transcription</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
