import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { Heart, Upload, Mic, Loader2 } from "lucide-react";

export default function RecordVisit() {
  const navigate = useNavigate();
  const [transcription, setTranscription] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      // Simulate transcription
      setTimeout(() => {
        setTranscription(
          "Doctor: Good morning, what brings you in today?\n\n" +
          "Patient: I've been experiencing severe abdominal pain for the past two weeks, especially on my lower right side. It's been getting worse, and I also have nausea and fatigue.\n\n" +
          "Doctor: Hmm, that sounds like it could be related to stress. Have you been under a lot of stress lately?\n\n" +
          "Patient: Well, yes, but the pain is really intense. It's not just stress-related discomfort. I'm also experiencing irregular periods.\n\n" +
          "Doctor: Many women experience abdominal discomfort during their cycle. Let's see if some ibuprofen helps. Come back if it doesn't improve in a couple of weeks.\n\n" +
          "Patient: But what about endometriosis or ovarian cysts? My mother had endometriosis.\n\n" +
          "Doctor: Let's not jump to conclusions. Try the pain medication first and focus on stress management. You're probably just anxious."
        );
      }, 1000);
    }
  };

  const handleAnalyze = () => {
    if (!transcription) {
      alert("Please upload a recording or enter a transcription first.");
      return;
    }
    setIsProcessing(true);
    // Simulate AI processing
    setTimeout(() => {
      setIsProcessing(false);
      navigate("/analysis");
    }, 2000);
  };

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
              <h1 className="text-2xl font-semibold text-gray-900">Diagnostic Assistant</h1>
            </div>
            <Button variant="ghost" onClick={() => navigate("/")}>
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Record Your Visit</h2>
          <p className="text-gray-600">
            Upload an audio recording of your doctor's visit or paste a transcription below
          </p>
        </div>

        {/* Recording Section */}
        <Card className="p-8 mb-6">
          <div className="space-y-6">
            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Upload Audio Recording (MVP: File Upload)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 transition-colors">
                <input
                  type="file"
                  accept="audio/*"
                  className="hidden"
                  id="audio-upload"
                  onChange={handleFileUpload}
                />
                <label
                  htmlFor="audio-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Upload className="w-8 h-8 text-purple-600" />
                  </div>
                  <p className="text-gray-900 font-medium mb-1">
                    Click to upload audio file
                  </p>
                  <p className="text-sm text-gray-500">
                    MP3, WAV, M4A up to 50MB
                  </p>
                  {fileName && (
                    <p className="text-sm text-purple-600 mt-2 font-medium">
                      📁 {fileName}
                    </p>
                  )}
                </label>
              </div>
            </div>

            {/* Voice Recording Placeholder */}
            <div className="relative">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-100 opacity-50 rounded-lg pointer-events-none" />
              <div className="flex items-center justify-center gap-4 py-8 relative">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <Mic className="w-8 h-8 text-gray-400" />
                </div>
                <div className="text-gray-500">
                  <p className="font-medium">Voice Recording</p>
                  <p className="text-sm">(Coming Soon)</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">OR</span>
              </div>
            </div>

            {/* Transcription Textarea */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Simulated Transcription Display
              </label>
              <Textarea
                value={transcription}
                onChange={(e) => setTranscription(e.target.value)}
                placeholder="The transcription will appear here after uploading audio, or you can paste text directly for testing..."
                className="min-h-[300px] font-mono text-sm"
              />
            </div>
          </div>
        </Card>

        {/* Action Button */}
        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8"
            onClick={handleAnalyze}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Analyzing Conversation...
              </>
            ) : (
              "Analyze Conversation"
            )}
          </Button>
        </div>
      </main>
    </div>
  );
}
