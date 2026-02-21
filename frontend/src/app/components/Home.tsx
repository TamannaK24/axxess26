import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Activity, Heart, MessageSquare } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-semibold text-gray-900">Diagnostic Assistant</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Capture, visualize, and act on your health conversations
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Your voice-first patient advocacy tool for women's health. Record your medical visits, 
            identify potential bias, and get actionable insights to advocate for yourself.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6 text-lg"
              onClick={() => navigate("/record")}
            >
              Start Visit Recording
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg border-2 border-purple-500 text-purple-600 hover:bg-purple-50"
              onClick={() => navigate("/features")}
            >
              View All Features
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Voice Recording
            </h3>
            <p className="text-gray-600">
              Capture your doctor's visit conversations with easy-to-use voice recording.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
              <Activity className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              AI Analysis
            </h3>
            <p className="text-gray-600">
              Identify potential bias, misdiagnosis risks, and key symptoms automatically.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Patient Insights
            </h3>
            <p className="text-gray-600">
              Compare with similar cases and get actionable questions for your clinician.
            </p>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-purple-600">98%</div>
              <div className="text-sm text-gray-600 mt-1">Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">5k+</div>
              <div className="text-sm text-gray-600 mt-1">Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">50k+</div>
              <div className="text-sm text-gray-600 mt-1">Visits Analyzed</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}