import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { ScrollArea } from "./ui/scroll-area";
import { 
  Heart, 
  Download, 
  Home, 
  TrendingUp, 
  Calendar,
  AlertTriangle,
  CheckCircle2,
  Activity
} from "lucide-react";
import BiasAlert from "./BiasAlert";
import PatientCard from "./PatientCard";

export default function FeatureDemo() {
  const navigate = useNavigate();

  // FEATURE 1: Highlighted Transcription with Keyword Detection
  const transcriptLines = [
    { speaker: "Doctor", text: "Good morning, what brings you in today?", highlight: "none" },
    { speaker: "Patient", text: "I've been experiencing severe abdominal pain for the past two weeks, especially on my lower right side. It's been getting worse, and I also have nausea and fatigue.", highlight: "risk" },
    { speaker: "Doctor", text: "Hmm, that sounds like it could be related to stress. Have you been under a lot of stress lately?", highlight: "bias" },
    { speaker: "Patient", text: "Well, yes, but the pain is really intense. It's not just stress-related discomfort. I'm also experiencing irregular periods.", highlight: "risk" },
    { speaker: "Doctor", text: "Many women experience abdominal discomfort during their cycle. Let's see if some ibuprofen helps. Come back if it doesn't improve in a couple of weeks.", highlight: "bias" },
    { speaker: "Patient", text: "But what about endometriosis or ovarian cysts? My mother had endometriosis.", highlight: "risk" },
    { speaker: "Doctor", text: "Let's not jump to conclusions. Try the pain medication first and focus on stress management. You're probably just anxious.", highlight: "bias" },
    { speaker: "Patient", text: "I'm really concerned. The pain wakes me up at night and I've lost my appetite.", highlight: "risk" },
    { speaker: "Doctor", text: "I understand you're worried, but anxiety can cause physical symptoms too. Let's start with the basics.", highlight: "bias" },
  ];

  // FEATURE 2: Bias & Misdiagnosis Alerts
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
  ];

  // FEATURE 3: Similar Patients
  const similarPatients = [
    {
      name: "Sarah M. (Anonymized)",
      age: 32,
      symptoms: ["Abdominal pain", "Irregular periods", "Fatigue", "Nausea"],
    },
    {
      name: "Patient B. (Anonymized)",
      age: 28,
      symptoms: ["Pelvic pain", "Endometriosis", "Nausea", "Back pain"],
    },
    {
      name: "Jennifer K. (Anonymized)",
      age: 35,
      symptoms: ["Ovarian cysts", "Abdominal pain", "Irregular cycles", "Bloating"],
    },
    {
      name: "Patient D. (Anonymized)",
      age: 30,
      symptoms: ["Chronic pain", "Fatigue", "Hormonal issues"],
    },
    {
      name: "Maria L. (Anonymized)",
      age: 29,
      symptoms: ["Endometriosis", "Severe cramping", "Fatigue"],
    },
  ];

  // FEATURE 4: Key Symptoms
  const keySymptoms = [
    { symptom: "Severe abdominal pain (lower right)", severity: "high" },
    { symptom: "Pain worsening over 2 weeks", severity: "high" },
    { symptom: "Nausea and loss of appetite", severity: "medium" },
    { symptom: "Irregular periods", severity: "medium" },
    { symptom: "Chronic fatigue", severity: "medium" },
    { symptom: "Pain disrupting sleep", severity: "high" },
    { symptom: "Family history: Endometriosis", severity: "high" },
  ];

  // FEATURE 5: Red Flags
  const redFlags = [
    "Pain worsening over 2 weeks",
    "Localized pain (lower right abdomen) - possible appendicitis",
    "Symptoms dismissed as stress/anxiety without examination",
    "Night-waking pain indicates severity",
    "Loss of appetite + nausea = systemic issue",
    "No diagnostic tests ordered",
  ];

  // FEATURE 6: Suggested Questions
  const suggestedQuestions = [
    {
      question: "Can we rule out endometriosis with an ultrasound or MRI?",
      priority: "high",
    },
    {
      question: "Should we test for ovarian cysts given my symptoms and family history?",
      priority: "high",
    },
    {
      question: "What physical examinations can we do today to assess the pain?",
      priority: "high",
    },
    {
      question: "Can we run bloodwork to check for inflammation markers (CRP, ESR)?",
      priority: "medium",
    },
    {
      question: "Could this be appendicitis given the location and worsening pain?",
      priority: "high",
    },
    {
      question: "What are the differential diagnoses you're considering?",
      priority: "medium",
    },
  ];

  // FEATURE 7: Timeline Visualization
  const symptomTimeline = [
    { date: "2 weeks ago", event: "Mild abdominal discomfort begins", severity: "low" },
    { date: "10 days ago", event: "Pain becomes more frequent", severity: "medium" },
    { date: "1 week ago", event: "Nausea and fatigue appear", severity: "medium" },
    { date: "5 days ago", event: "Pain localizes to lower right abdomen", severity: "high" },
    { date: "3 days ago", event: "Pain begins waking patient at night", severity: "high" },
    { date: "Today", event: "Loss of appetite, pain at 7/10", severity: "high" },
  ];

  // FEATURE 8: Visit Statistics
  const visitStats = {
    biasScore: 78, // out of 100
    misdiagnosisRisk: 85,
    patientAdvocacyNeeded: "High",
    conversationDuration: "12 min 34 sec",
    keywordsMissed: 6,
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
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">
                  Diagnostic Assistant
                </h1>
                <p className="text-xs text-gray-500">Feature Showcase with Mock Data</p>
              </div>
            </div>
            <Button variant="outline" onClick={() => navigate("/")}>
              <Home className="w-4 h-4 mr-2" />
              Exit Demo
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Complete Feature Demonstration
          </h2>
          <p className="text-gray-600">
            All features shown with rich mock data for hackathon presentation
          </p>
        </div>

        {/* Quick Stats Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-red-600">{visitStats.misdiagnosisRisk}%</div>
            <div className="text-xs text-gray-600 mt-1">Misdiagnosis Risk</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-600">{visitStats.biasScore}%</div>
            <div className="text-xs text-gray-600 mt-1">Bias Score</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">{visitStats.keywordsMissed}</div>
            <div className="text-xs text-gray-600 mt-1">Red Flags</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{suggestedQuestions.length}</div>
            <div className="text-xs text-gray-600 mt-1">Questions</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{visitStats.conversationDuration}</div>
            <div className="text-xs text-gray-600 mt-1">Duration</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* FEATURE 1: Transcription with Keyword Highlighting */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  ✨ Feature 1: Smart Transcription
                </h3>
                <div className="flex gap-2">
                  <Badge className="bg-red-50 text-red-700 border border-red-200">
                    High Risk
                  </Badge>
                  <Badge className="bg-yellow-50 text-yellow-700 border border-yellow-200">
                    Bias Detected
                  </Badge>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                AI-powered transcription with real-time keyword detection for symptoms and bias markers
              </p>
              <ScrollArea className="h-[350px] rounded-md border p-4">
                <div className="space-y-3">
                  {transcriptLines.map((line, idx) => {
                    let className = "text-sm leading-relaxed p-2 rounded";
                    if (line.highlight === "risk") {
                      className += " bg-red-100 text-red-900 border-l-4 border-red-500";
                    } else if (line.highlight === "bias") {
                      className += " bg-yellow-100 text-yellow-900 border-l-4 border-yellow-500";
                    } else {
                      className += " bg-gray-50";
                    }
                    return (
                      <div key={idx} className={className}>
                        <span className="font-semibold">{line.speaker}:</span> {line.text}
                      </div>
                    );
                  })}
                </div>
              </ScrollArea>
              <div className="mt-4 flex items-center gap-4 text-xs bg-gray-50 p-3 rounded">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-100 border-2 border-red-500 rounded" />
                  <span className="text-gray-700">High-Risk Symptoms (6 detected)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-100 border-2 border-yellow-500 rounded" />
                  <span className="text-gray-700">Potential Bias (4 detected)</span>
                </div>
              </div>
            </Card>

            {/* FEATURE 2: Bias/Misdiagnosis Alerts */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  🚨 Feature 2: AI-Powered Alerts
                </h3>
                <Badge className="bg-purple-100 text-purple-700">
                  {alerts.length} Alerts Identified
                </Badge>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Automated detection of misdiagnosis risks and gender bias patterns
              </p>
              <div className="space-y-3">
                {alerts.map((alert, idx) => (
                  <BiasAlert key={idx} {...alert} />
                ))}
              </div>
            </div>

            {/* FEATURE 7: Timeline Visualization */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                📅 Feature 7: Symptom Timeline
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Visual progression of symptoms over time to identify escalation patterns
              </p>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-300 via-yellow-300 to-red-500" />
                
                <div className="space-y-4">
                  {symptomTimeline.map((item, idx) => {
                    const dotColor = item.severity === "high" ? "bg-red-500" : 
                                    item.severity === "medium" ? "bg-yellow-500" : "bg-green-500";
                    const bgColor = item.severity === "high" ? "bg-red-50 border-red-200" : 
                                   item.severity === "medium" ? "bg-yellow-50 border-yellow-200" : "bg-green-50 border-green-200";
                    
                    return (
                      <div key={idx} className="relative pl-12 pb-4">
                        <div className={`absolute left-2.5 top-1.5 w-3 h-3 rounded-full ${dotColor} ring-4 ring-white`} />
                        <div className={`border rounded-lg p-3 ${bgColor}`}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-semibold text-gray-600">{item.date}</span>
                            <Badge className="text-xs" variant={item.severity === "high" ? "destructive" : "secondary"}>
                              {item.severity}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-900">{item.event}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>

            {/* FEATURE 3: Similar Patients */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                👥 Feature 3: Similar Patient Cases
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Anonymized patients with matching symptom profiles (privacy-protected)
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

          {/* Right Column - Patient Summary Card */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  📋 Patient Summary
                </h3>
                <Button
                  size="sm"
                  className="gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  <Download className="w-4 h-4" />
                  Export
                </Button>
              </div>

              <div className="space-y-6">
                {/* FEATURE 4: Key Symptoms */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-purple-500" />
                    Feature 4: Key Symptoms
                  </h4>
                  <div className="space-y-2">
                    {keySymptoms.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                          item.severity === "high" ? "bg-red-500" : "bg-yellow-500"
                        }`} />
                        <span className="text-gray-700">{item.symptom}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* FEATURE 5: Red Flags */}
                <div>
                  <h4 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                    Feature 5: Red Flags
                  </h4>
                  <div className="space-y-2">
                    {redFlags.map((flag, idx) => (
                      <div key={idx} className="text-sm text-gray-700 flex items-start gap-2 p-2 bg-red-50 rounded border-l-2 border-red-500">
                        <span className="text-red-500 font-bold">!</span>
                        <span>{flag}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* FEATURE 6: Suggested Questions */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Feature 6: Action Items
                  </h4>
                  <div className="space-y-2">
                    {suggestedQuestions.map((item, idx) => {
                      const borderColor = item.priority === "high" ? "border-green-500" : "border-green-300";
                      return (
                        <div key={idx} className={`text-sm text-gray-700 p-3 bg-green-50 rounded border-l-4 ${borderColor}`}>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge className="text-xs" variant={item.priority === "high" ? "default" : "secondary"}>
                              {item.priority}
                            </Badge>
                          </div>
                          {item.question}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Risk Assessment */}
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-4 border-2 border-purple-300">
                  <h4 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Overall Assessment
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-purple-800">Advocacy Level:</span>
                      <Badge className="bg-red-500 text-white">High Priority</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-800">Follow-up Needed:</span>
                      <span className="font-semibold text-purple-900">Within 48 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-800">Specialist Referral:</span>
                      <span className="font-semibold text-purple-900">Recommended</span>
                    </div>
                  </div>
                </div>

                {/* FEATURE 8: Export Button */}
                <Button
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  onClick={() => alert("PDF Export: Summary includes all alerts, timeline, symptoms, and suggested questions.")}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Full Report (PDF)
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Feature List Summary */}
        <Card className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            ✅ All Features Demonstrated
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>Smart transcription with keyword highlighting</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>AI-powered bias & misdiagnosis alerts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>Similar patient case matching</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>Key symptom extraction</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>Red flag identification</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>Suggested clinician questions</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>Symptom timeline visualization</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>PDF export functionality</span>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
