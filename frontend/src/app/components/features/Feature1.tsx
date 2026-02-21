import FeatureNav from "./FeatureNav";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";

export default function Feature1() {
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
    { speaker: "Patient", text: "Okay, but if it doesn't get better, what should I do?", highlight: "none" },
    { speaker: "Doctor", text: "Just come back in two weeks if you're still having issues. Try to relax and reduce stress in your life.", highlight: "bias" },
  ];

  const keywords = {
    risk: ["severe abdominal pain", "worsening", "nausea", "fatigue", "irregular periods", "endometriosis", "pain wakes me up", "lost appetite"],
    bias: ["stress", "anxiety", "anxious", "relax", "cycle discomfort", "just", "probably"],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <FeatureNav 
        currentFeature={1}
        totalFeatures={8}
        title="Smart Transcription"
        description="AI-powered transcription with real-time keyword detection for symptoms and bias markers"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-blue-600">11</div>
            <div className="text-sm text-gray-600 mt-1">Total Exchanges</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-red-600">8</div>
            <div className="text-sm text-gray-600 mt-1">Risk Keywords</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-yellow-600">7</div>
            <div className="text-sm text-gray-600 mt-1">Bias Keywords</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-purple-600">12m 34s</div>
            <div className="text-sm text-gray-600 mt-1">Duration</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Transcription */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Full Conversation Transcript
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

              <ScrollArea className="h-[600px] rounded-md border p-4 bg-gray-50">
                <div className="space-y-3">
                  {transcriptLines.map((line, idx) => {
                    let className = "text-sm leading-relaxed p-3 rounded";
                    if (line.highlight === "risk") {
                      className += " bg-red-100 text-red-900 border-l-4 border-red-500 shadow-sm";
                    } else if (line.highlight === "bias") {
                      className += " bg-yellow-100 text-yellow-900 border-l-4 border-yellow-500 shadow-sm";
                    } else {
                      className += " bg-white border-l-4 border-gray-200";
                    }
                    return (
                      <div key={idx} className={className}>
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-gray-700 min-w-[80px]">{line.speaker}:</span>
                          <span className="flex-1">{line.text}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </ScrollArea>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Legend:</h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-red-100 border-l-4 border-red-500 rounded" />
                    <div>
                      <div className="font-medium text-gray-900">High-Risk Symptoms</div>
                      <div className="text-gray-600">Severe symptoms requiring attention</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-yellow-100 border-l-4 border-yellow-500 rounded" />
                    <div>
                      <div className="font-medium text-gray-900">Potential Bias</div>
                      <div className="text-gray-600">Dismissive or minimizing language</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Keywords Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Detected Keywords
              </h3>

              <div className="space-y-6">
                {/* Risk Keywords */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <h4 className="font-semibold text-red-900">High-Risk Symptoms ({keywords.risk.length})</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {keywords.risk.map((keyword, idx) => (
                      <Badge key={idx} className="bg-red-100 text-red-800 border border-red-300">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Bias Keywords */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <h4 className="font-semibold text-yellow-900">Bias Indicators ({keywords.bias.length})</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {keywords.bias.map((keyword, idx) => (
                      <Badge key={idx} className="bg-yellow-100 text-yellow-800 border border-yellow-300">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-3">💡 How It Works</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Voice recording is automatically transcribed using AI speech-to-text</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>NLP algorithms detect medical keywords and symptoms in real-time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Bias detection identifies dismissive or minimizing language patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Color-coded highlights make it easy to spot concerns at a glance</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
