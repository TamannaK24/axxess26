import { useNavigate } from "react-router";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Heart, Home, ChevronLeft, ChevronRight } from "lucide-react";

interface FeatureNavProps {
  currentFeature: number;
  totalFeatures: number;
  title: string;
  description: string;
}

export default function FeatureNav({ currentFeature, totalFeatures, title, description }: FeatureNavProps) {
  const navigate = useNavigate();

  const goToPrevious = () => {
    if (currentFeature > 1) {
      navigate(`/feature${currentFeature - 1}`);
    }
  };

  const goToNext = () => {
    if (currentFeature < totalFeatures) {
      navigate(`/feature${currentFeature + 1}`);
    }
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Diagnostic Assistant</h1>
                <p className="text-xs text-gray-500">Feature {currentFeature} of {totalFeatures}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => navigate("/features")}>
                All Features
              </Button>
              <Button variant="outline" onClick={() => navigate("/")}>
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Feature Title Bar */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="text-sm font-medium mb-2 opacity-90">Feature {currentFeature}</div>
              <h2 className="text-3xl font-bold mb-2">{title}</h2>
              <p className="text-purple-100">{description}</p>
            </div>
            <div className="flex gap-2 ml-4">
              <Button
                variant="secondary"
                size="icon"
                onClick={goToPrevious}
                disabled={currentFeature === 1}
                className="bg-white/20 hover:bg-white/30 text-white border-0"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                onClick={goToNext}
                disabled={currentFeature === totalFeatures}
                className="bg-white/20 hover:bg-white/30 text-white border-0"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-2 bg-gray-200 rounded-full">
            <div 
              className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300"
              style={{ width: `${(currentFeature / totalFeatures) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
