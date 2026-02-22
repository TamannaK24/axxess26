import { useNavigate } from "react-router";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { 
  Heart, 
  Home,
  MessageSquare,
  Users,
  Calendar,
  Download
} from "lucide-react";

export default function FeatureList() {
  const navigate = useNavigate();

  const features = [
    {
      number: 1,
      title: "Smart Transcription",
      description: "AI-powered transcription with real-time keyword detection for symptoms and bias markers",
      icon: MessageSquare,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      number: 3,
      title: "Similar Patient Cases",
      description: "Anonymized patients with matching symptom profiles (privacy-protected)",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      number: 7,
      title: "Symptom Timeline",
      description: "Visual progression of symptoms over time to identify escalation patterns",
      icon: Calendar,
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
    {
      number: 8,
      title: "Complete Summary & Export",
      description: "Comprehensive patient report with all insights, exportable as PDF",
      icon: Download,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Diagnostic Assistant</h1>
                <p className="text-xs text-gray-500">Feature Showcase</p>
              </div>
            </div>
            <Button variant="outline" onClick={() => navigate("/")}>
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            All Features with Mock Data
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Click on any feature to see a detailed demonstration with realistic mock data
          </p>
          <div className="flex gap-3 justify-center">
            <Badge className="bg-purple-100 text-purple-700 px-4 py-2">
              4 Features Total
            </Badge>
            <Badge className="bg-green-100 text-green-700 px-4 py-2">
              Ready to Present
            </Badge>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.number}
                className="p-6 hover:shadow-xl transition-all cursor-pointer group"
                onClick={() => navigate(`/feature${feature.number}`)}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className="bg-gray-100 text-gray-700">
                        Feature {feature.number}
                      </Badge>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      {feature.description}
                    </p>
                    <Button 
                      className={`bg-gradient-to-r ${feature.color} text-white group-hover:shadow-lg transition-shadow`}
                      size="sm"
                    >
                      View Demo →
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Quick Start Guide */}
        <Card className="mt-12 p-8 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            💡 Presentation Tips
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">→</span>
              <span>Navigate between features using arrow buttons or the feature list</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">→</span>
              <span>Each feature has realistic mock data pre-loaded for instant demos</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">→</span>
              <span>Progress bar shows your position in the presentation flow</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">→</span>
              <span>All features are mobile-responsive for different screen sizes</span>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
