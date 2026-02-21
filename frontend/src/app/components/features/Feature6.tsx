import FeatureNav from "./FeatureNav";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { CheckCircle, Copy, Star } from "lucide-react";
import { useState } from "react";

export default function Feature6() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const questions = [
    {
      question: "Can we rule out endometriosis with an ultrasound or MRI?",
      priority: "high",
      category: "Diagnostic Testing",
      reasoning: "Family history of endometriosis increases risk by 40-50%. Imaging can detect cysts, adhesions, or tissue growth.",
      expectedResponse: "Doctor should explain why imaging is/isn't needed and discuss alternative diagnostic methods if declined."
    },
    {
      question: "Should we test for ovarian cysts given my symptoms and family history?",
      priority: "high",
      category: "Diagnostic Testing",
      reasoning: "Lower abdominal pain + irregular periods are classic symptoms. Ultrasound is non-invasive and definitive.",
      expectedResponse: "Yes, transvaginal ultrasound is standard for evaluating ovarian health with these symptoms."
    },
    {
      question: "What physical examinations can we do today to assess the pain?",
      priority: "high",
      category: "Physical Examination",
      reasoning: "Pelvic exam, abdominal palpation, and rebound tenderness test can provide immediate diagnostic clues.",
      expectedResponse: "Doctor should perform physical exam immediately. If they refuse, ask why and document the refusal."
    },
    {
      question: "Can we run bloodwork to check for inflammation markers (CRP, ESR)?",
      priority: "medium",
      category: "Diagnostic Testing",
      reasoning: "Elevated inflammatory markers could indicate infection, autoimmune condition, or other inflammatory processes.",
      expectedResponse: "Blood tests can be ordered immediately. Results available in 24-48 hours."
    },
    {
      question: "Could this be appendicitis given the location and worsening pain?",
      priority: "high",
      category: "Differential Diagnosis",
      reasoning: "Lower right abdominal pain with progression is classic appendicitis presentation. Requires immediate evaluation.",
      expectedResponse: "Doctor should explain why they're ruling out appendicitis or order appropriate tests (CT scan)."
    },
    {
      question: "What are the differential diagnoses you're considering?",
      priority: "medium",
      category: "Diagnostic Process",
      reasoning: "Understanding doctor's thought process helps you advocate. Should include multiple possibilities beyond 'stress'.",
      expectedResponse: "Should list 3-5 potential diagnoses: endometriosis, ovarian cysts, appendicitis, PID, IBS, etc."
    },
    {
      question: "Why is stress the primary diagnosis when I have localized, worsening physical pain?",
      priority: "high",
      category: "Challenging Bias",
      reasoning: "Directly challenges dismissal. Physical symptoms require physical investigation before psychological attribution.",
      expectedResponse: "Doctor should acknowledge your concern and explain medical reasoning with evidence."
    },
    {
      question: "Can I get a referral to a gynecologist or gastroenterologist?",
      priority: "medium",
      category: "Specialist Referral",
      reasoning: "Specialist consultation appropriate for persistent, unexplained symptoms. Don't need PCP permission in many plans.",
      expectedResponse: "Referral should be provided if requested. Check your insurance for self-referral options."
    },
    {
      question: "What is the follow-up plan if my symptoms don't improve?",
      priority: "medium",
      category: "Care Plan",
      reasoning: "Establishes clear next steps and accountability. Prevents prolonged suffering without escalation.",
      expectedResponse: "Specific timeframe (e.g., 'Come back in 1 week if no improvement for imaging') should be provided."
    },
  ];

  const highPriority = questions.filter(q => q.priority === "high");
  const mediumPriority = questions.filter(q => q.priority === "medium");

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <FeatureNav 
        currentFeature={6}
        totalFeatures={8}
        title="Action Items Generator"
        description="Suggested questions to ask your clinician with priority levels"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-green-600">{questions.length}</div>
            <div className="text-sm text-gray-600 mt-1">Total Questions</div>
          </Card>
          <Card className="p-4 text-center border-2 border-green-200 bg-green-50">
            <div className="text-3xl font-bold text-green-600">{highPriority.length}</div>
            <div className="text-sm text-gray-600 mt-1">High Priority</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-blue-600">{mediumPriority.length}</div>
            <div className="text-sm text-gray-600 mt-1">Medium Priority</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-purple-600">5</div>
            <div className="text-sm text-gray-600 mt-1">Categories</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Instructions */}
            <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    💪 How to Use These Questions
                  </h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• <strong>Start with high-priority questions</strong> - these address critical concerns</li>
                    <li>• <strong>Click to copy</strong> questions directly to use during your visit</li>
                    <li>• <strong>Don't be intimidated</strong> - you have the right to ask questions and understand your care</li>
                    <li>• <strong>Take notes</strong> on the responses you receive</li>
                    <li>• <strong>If dismissed</strong>, use the "challenging bias" questions to advocate</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* High Priority Questions */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  🔥 High Priority Questions
                </h3>
                <Badge className="bg-green-600 text-white">
                  Ask These First
                </Badge>
              </div>
              <div className="space-y-4">
                {highPriority.map((item, idx) => (
                  <Card key={idx} className="p-5 border-l-4 border-green-500 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h4 className="font-semibold text-gray-900 text-lg flex-1">
                        {item.question}
                      </h4>
                      <div className="flex gap-2 flex-shrink-0">
                        <Badge className="bg-green-600 text-white">High</Badge>
                        <button
                          onClick={() => copyToClipboard(item.question, idx)}
                          className="p-1.5 hover:bg-gray-100 rounded transition-colors"
                          title="Copy question"
                        >
                          {copiedIndex === idx ? (
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-600" />
                          )}
                        </button>
                      </div>
                    </div>

                    <Badge className="mb-3 bg-purple-100 text-purple-700">
                      {item.category}
                    </Badge>

                    <div className="space-y-3 text-sm">
                      <div>
                        <div className="font-medium text-gray-700 mb-1">📌 Why Ask This:</div>
                        <p className="text-gray-600">{item.reasoning}</p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-400">
                        <div className="font-medium text-blue-900 mb-1">💡 What to Expect:</div>
                        <p className="text-blue-800">{item.expectedResponse}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Medium Priority Questions */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  📋 Medium Priority Questions
                </h3>
                <Badge className="bg-blue-600 text-white">
                  Important Context
                </Badge>
              </div>
              <div className="space-y-4">
                {mediumPriority.map((item, idx) => (
                  <Card key={idx + highPriority.length} className="p-5 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h4 className="font-semibold text-gray-900 text-lg flex-1">
                        {item.question}
                      </h4>
                      <div className="flex gap-2 flex-shrink-0">
                        <Badge className="bg-blue-600 text-white">Medium</Badge>
                        <button
                          onClick={() => copyToClipboard(item.question, idx + highPriority.length)}
                          className="p-1.5 hover:bg-gray-100 rounded transition-colors"
                          title="Copy question"
                        >
                          {copiedIndex === idx + highPriority.length ? (
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-600" />
                          )}
                        </button>
                      </div>
                    </div>

                    <Badge className="mb-3 bg-purple-100 text-purple-700">
                      {item.category}
                    </Badge>

                    <div className="space-y-3 text-sm">
                      <div>
                        <div className="font-medium text-gray-700 mb-1">📌 Why Ask This:</div>
                        <p className="text-gray-600">{item.reasoning}</p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-400">
                        <div className="font-medium text-blue-900 mb-1">💡 What to Expect:</div>
                        <p className="text-blue-800">{item.expectedResponse}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300">
              <div className="flex items-start gap-2 mb-3">
                <Star className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                <h4 className="font-semibold text-gray-900">✨ Advocacy Tips</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-0.5 font-bold">→</span>
                  <span><strong>Bring a support person</strong> to help advocate and take notes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-0.5 font-bold">→</span>
                  <span><strong>Record the visit</strong> (if legal in your state) or take detailed notes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-0.5 font-bold">→</span>
                  <span><strong>Don't apologize</strong> for asking questions - it's your right</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-0.5 font-bold">→</span>
                  <span><strong>If dismissed</strong>, say: "I'd like you to document in my chart that I requested [test] and you declined"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-0.5 font-bold">→</span>
                  <span><strong>Request visit summary</strong> and medical records after appointment</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-gray-900 mb-3">📂 Question Categories</h4>
              <div className="space-y-2">
                {["Diagnostic Testing", "Physical Examination", "Differential Diagnosis", "Challenging Bias", "Specialist Referral", "Care Plan"].map((category, idx) => {
                  const count = questions.filter(q => q.category === category).length;
                  return (
                    <div key={idx} className="flex items-center justify-between p-2 bg-gray-50 rounded text-sm">
                      <span className="text-gray-700">{category}</span>
                      <Badge variant="secondary">{count}</Badge>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="p-6 bg-red-50 border-2 border-red-200">
              <h4 className="font-semibold text-gray-900 mb-3">🚩 Red Flags in Responses</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">!</span>
                  <span>"It's all in your head"</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">!</span>
                  <span>"You're too young for that"</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">!</span>
                  <span>"Just lose weight"</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">!</span>
                  <span>"Come back if it gets worse"</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">!</span>
                  <span>"I don't think that test is necessary"</span>
                </div>
                <p className="text-xs text-red-800 mt-3 italic">
                  If you hear these phrases, strongly consider seeking a second opinion.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-blue-50 border-2 border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-3">💡 How It Works</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>AI analyzes conversation for care gaps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Medical guidelines inform question generation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Prioritization based on symptom severity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Expected responses help you evaluate answers</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
