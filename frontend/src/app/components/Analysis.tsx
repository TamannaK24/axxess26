import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { ScrollArea } from "./ui/scroll-area";
import { Heart, Download, Home, ArrowLeft } from "lucide-react";
import BiasAlert from "./BiasAlert";
import PatientCard from "./PatientCard";

export default function Analysis() {
  const navigate = useNavigate();

  // Dummy data
  const transcription = `Doctor: Good morning, what brings you in today?

Patient: I've been experiencing severe abdominal pain for the past two weeks, especially on my lower right side. It's been getting worse, and I also have nausea and fatigue.

Doctor: Hmm, that sounds like it could be related to stress. Have you been under a lot of stress lately?

Patient: Well, yes, but the pain is really intense. It's not just stress-related discomfort. I'm also experiencing irregular periods.

Doctor: Many women experience abdominal discomfort during their cycle. Let's see if some ibuprofen helps. Come back if it doesn't improve in a couple of weeks.

Patient: But what about endometriosis or ovarian cysts? My mother had endometriosis.

Doctor: Let's not jump to conclusions. Try the pain medication first and focus on stress management. You're probably just anxious.`;

  const highlightedTranscription = transcription.split("\n").map((line, idx) => {
    if (line.includes("stress") || line.includes("anxious")) {
      return { text: line, highlight: "bias", key: idx };
    } else if (
      line.includes("severe abdominal pain") ||
      line.includes("endometriosis") ||
      line.includes("irregular periods")
    ) {
      return { text: line, highlight: "risk", key: idx };
    }
    return { text: line, highlight: "none", key: idx };
  });

  const biasAlerts = [
    {
      type: "misdiagnosis" as const,
      title: "Dismissal of Severe Symptoms",
      description:
        "Patient reported severe, localized abdominal pain lasting 2 weeks with worsening trajectory. This was attributed to stress without physical examination or diagnostic tests.",
      severity: "high" as const,
    },
    {
      type: "bias" as const,
      title: "Gender Bias: 'It's Just Anxiety'",
      description:
        "Doctor dismissed patient's concerns as anxiety/stress despite presenting with physical symptoms and family history of endometriosis.",
      severity: "medium" as const,
    },
    {
      type: "misdiagnosis" as const,
      title: "Ignored Family History",
      description:
        "Patient mentioned family history of endometriosis, which is a significant risk factor. This was not acknowledged or investigated.",
      severity: "high" as const,
    },
  ];

  const similarPatients = [
    {
      name: "Patient A. (Anonymized)",
      age: 32,
      symptoms: ["Abdominal pain", "Irregular periods", "Fatigue"],
    },
    {
      name: "Patient B. (Anonymized)",
      age: 28,
      symptoms: ["Pelvic pain", "Endometriosis", "Nausea"],
    },
    {
      name: "Patient C. (Anonymized)",
      age: 35,
      symptoms: ["Ovarian cysts", "Abdominal pain", "Irregular cycles"],
    },
    {
      name: "Patient D. (Anonymized)",
      age: 30,
      symptoms: ["Chronic pain", "Fatigue", "Hormonal issues"],
    },
  ];

  const keySymptoms = [
    "Severe abdominal pain (lower right)",
    "Nausea and fatigue",
    "Irregular periods",
    "Family history: Endometriosis",
  ];

  const redFlags = [
    "Pain worsening over 2 weeks",
    "Localized pain (lower right abdomen)",
    "Symptoms dismissed as stress",
  ];

  const suggestedQuestions = [
    "Can we rule out endometriosis with an ultrasound or MRI?",
    "Should we test for ovarian cysts given my symptoms and family history?",
    "What physical examinations can we do today to assess the pain?",
    "Can we run bloodwork to check for inflammation markers?",
  ];

  const handleDownload = () => {
    alert("PDF export functionality would be implemented here. For MVP, this simulates the download.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Diagnostic Assistant
              </h1>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => navigate("/record")}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button variant="outline" onClick={() => navigate("/")}>
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Visit Analysis
          </h2>
          <p className="text-gray-600">
            AI-powered insights from your healthcare conversation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Transcription */}
          <div className="lg:col-span-2 space-y-6">
            {/* Transcription Display */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Full Transcription
                </h3>
                <div className="flex gap-2">
                  <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                    High Risk
                  </Badge>
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                    Bias Detected
                  </Badge>
                </div>
              </div>
              <ScrollArea className="h-[400px] rounded-md border p-4">
                <div className="space-y-3 font-mono text-sm">
                  {highlightedTranscription.map((line) => {
                    let className = "leading-relaxed";
                    if (line.highlight === "risk") {
                      className += " bg-red-100 text-red-900 px-2 py-1 rounded";
                    } else if (line.highlight === "bias") {
                      className += " bg-yellow-100 text-yellow-900 px-2 py-1 rounded";
                    }
                    return (
                      <p key={line.key} className={className}>
                        {line.text}
                      </p>
                    );
                  })}
                </div>
              </ScrollArea>
              <div className="mt-4 flex items-center gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-100 border border-red-300 rounded" />
                  <span className="text-gray-600">High-Risk Symptoms</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-100 border border-yellow-300 rounded" />
                  <span className="text-gray-600">Potential Bias</span>
                </div>
              </div>
            </Card>

            {/* Bias/Misdiagnosis Alerts */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Alerts & Concerns
              </h3>
              <div className="space-y-3">
                {biasAlerts.map((alert, idx) => (
                  <BiasAlert key={idx} {...alert} />
                ))}
              </div>
            </div>

            {/* Similar Patients */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Similar Patient Cases
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Anonymized patients with similar symptom profiles
              </p>
              <ScrollArea className="w-full">
                <div className="flex gap-4 pb-4">
                  {similarPatients.map((patient, idx) => (
                    <PatientCard key={idx} {...patient} />
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>

          {/* Right Column - Patient Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Patient Summary
                </h3>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleDownload}
                  className="gap-2"
                >
                  <Download className="w-4 h-4" />
                  Export
                </Button>
              </div>

              <div className="space-y-6">
                {/* Key Symptoms */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    Key Symptoms
                  </h4>
                  <ul className="space-y-2">
                    {keySymptoms.map((symptom, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                {/* Red Flags */}
                <div>
                  <h4 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    Red Flags
                  </h4>
                  <ul className="space-y-2">
                    {redFlags.map((flag, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>{flag}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                {/* Suggested Questions */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    Questions for Your Clinician
                  </h4>
                  <ul className="space-y-3">
                    {suggestedQuestions.map((question, idx) => (
                      <li key={idx} className="text-sm text-gray-700 p-2 bg-green-50 rounded border-l-2 border-green-400">
                        {question}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  onClick={handleDownload}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Full Report (PDF)
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
