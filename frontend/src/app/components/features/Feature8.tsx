import FeatureNav from "./FeatureNav";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { 
  Download, 
  FileText, 
  Mail, 
  Printer, 
  Share2,
  CheckCircle2,
  Activity,
  AlertTriangle,
  Flag,
  Users
} from "lucide-react";

export default function Feature8() {
  const handleExport = (format: string) => {
    alert(`Exporting report as ${format.toUpperCase()}...\n\nIn production, this would:\n- Generate professional PDF/DOC with all data\n- Include charts and visualizations\n- Add medical disclaimer\n- Allow sharing with providers`);
  };

  const reportSections = [
    { icon: FileText, title: "Full Transcription", included: true, pages: 2 },
    { icon: AlertTriangle, title: "Bias & Misdiagnosis Alerts", included: true, pages: 1 },
    { icon: Users, title: "Similar Patient Cases", included: true, pages: 1 },
    { icon: Activity, title: "Key Symptoms Analysis", included: true, pages: 1 },
    { icon: Flag, title: "Red Flags Identified", included: true, pages: 1 },
    { icon: CheckCircle2, title: "Action Items & Questions", included: true, pages: 2 },
    { icon: Activity, title: "Symptom Timeline", included: true, pages: 1 },
  ];

  const summary = {
    visitDate: "February 21, 2026",
    duration: "12m 34s",
    provider: "Dr. [Provider Name]",
    chiefComplaint: "Severe abdominal pain, worsening over 2 weeks",
    assessmentRisk: "High",
    biasScore: 78,
    misdiagnosisRisk: 85,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <FeatureNav 
        currentFeature={8}
        totalFeatures={4}
        title="Complete Summary & Export"
        description="Comprehensive patient report with all insights, exportable as PDF"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Export Actions Bar */}
        <Card className="p-6 mb-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">📋 Your Complete Report is Ready</h3>
              <p className="text-purple-100">
                Export and share your comprehensive health advocacy report
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button 
                className="bg-white text-purple-600 hover:bg-purple-50"
                onClick={() => handleExport("pdf")}
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button 
                variant="secondary"
                className="bg-white/20 hover:bg-white/30 text-white border-0"
                onClick={() => handleExport("doc")}
              >
                <FileText className="w-4 h-4 mr-2" />
                Word Doc
              </Button>
              <Button 
                variant="secondary"
                className="bg-white/20 hover:bg-white/30 text-white border-0"
                onClick={() => alert("Email sharing coming soon!")}
              >
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Report Preview */}
          <div className="lg:col-span-2 space-y-6">
            {/* Executive Summary */}
            <Card className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Executive Summary
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-gray-50 rounded">
                  <div className="text-sm text-gray-600 mb-1">Visit Date</div>
                  <div className="font-semibold text-gray-900">{summary.visitDate}</div>
                </div>
                <div className="p-4 bg-gray-50 rounded">
                  <div className="text-sm text-gray-600 mb-1">Duration</div>
                  <div className="font-semibold text-gray-900">{summary.duration}</div>
                </div>
                <div className="p-4 bg-gray-50 rounded">
                  <div className="text-sm text-gray-600 mb-1">Provider</div>
                  <div className="font-semibold text-gray-900">{summary.provider}</div>
                </div>
                <div className="p-4 bg-gray-50 rounded">
                  <div className="text-sm text-gray-600 mb-1">Chief Complaint</div>
                  <div className="font-semibold text-gray-900">{summary.chiefComplaint}</div>
                </div>
              </div>

              <Separator className="my-6" />

              {/* Risk Metrics */}
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="p-4 border-2 border-red-200 bg-red-50">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-1">
                      {summary.misdiagnosisRisk}%
                    </div>
                    <div className="text-sm text-gray-700">Misdiagnosis Risk</div>
                    <Badge className="mt-2 bg-red-600 text-white">Critical</Badge>
                  </div>
                </Card>
                <Card className="p-4 border-2 border-yellow-200 bg-yellow-50">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-1">
                      {summary.biasScore}%
                    </div>
                    <div className="text-sm text-gray-700">Bias Score</div>
                    <Badge className="mt-2 bg-yellow-600 text-white">High</Badge>
                  </div>
                </Card>
                <Card className="p-4 border-2 border-purple-200 bg-purple-50">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">
                      {summary.assessmentRisk}
                    </div>
                    <div className="text-sm text-gray-700">Overall Risk</div>
                    <Badge className="mt-2 bg-purple-600 text-white">Action Needed</Badge>
                  </div>
                </Card>
              </div>
            </Card>

            {/* Key Findings */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🔍 Key Findings
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-900 mb-2">Primary Concern</h4>
                  <p className="text-sm text-red-800">
                    Severe, localized abdominal pain worsening over 2 weeks was dismissed as stress-related without physical examination or diagnostic testing. This represents a significant care gap.
                  </p>
                </div>
                
                <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-yellow-900 mb-2">Bias Pattern Detected</h4>
                  <p className="text-sm text-yellow-800">
                    Multiple instances of symptoms being attributed to anxiety/stress despite physical evidence. Classic gender bias in medical care was observed.
                  </p>
                </div>

                <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-semibold text-orange-900 mb-2">Family History Ignored</h4>
                  <p className="text-sm text-orange-800">
                    Patient's family history of endometriosis (40-50% increased risk) was not acknowledged or factored into differential diagnosis.
                  </p>
                </div>
              </div>
            </Card>

            {/* Recommendations */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                ✅ Recommended Next Steps
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded border-l-4 border-green-500">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-green-900">Schedule Diagnostic Testing</div>
                    <div className="text-sm text-green-800">Request pelvic ultrasound and bloodwork (CBC, CRP, ESR) within 48 hours</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded border-l-4 border-green-500">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-green-900">Seek Specialist Referral</div>
                    <div className="text-sm text-green-800">Request referral to gynecologist or gastroenterologist for specialized evaluation</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded border-l-4 border-green-500">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-green-900">Consider Second Opinion</div>
                    <div className="text-sm text-green-800">Given the dismissal of symptoms, a second opinion from another provider is recommended</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-green-50 rounded border-l-4 border-green-500">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-green-900">Document Everything</div>
                    <div className="text-sm text-green-800">Request visit notes, document symptoms daily, and keep pain diary</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Report Contents */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                📄 Report Contents
              </h3>
              <div className="space-y-2">
                {reportSections.map((section, idx) => {
                  const Icon = section.icon;
                  return (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-purple-600" />
                        <span className="font-medium text-gray-900">{section.title}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-600">{section.pages} page{section.pages > 1 ? 's' : ''}</span>
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 p-3 bg-purple-50 rounded text-sm text-gray-700">
                <strong>Total Pages:</strong> {reportSections.reduce((sum, s) => sum + s.pages, 0)} pages of comprehensive analysis
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
              <h4 className="font-semibold text-gray-900 mb-3">✨ Export Options</h4>
              <div className="space-y-3">
                <Button 
                  className="w-full justify-start bg-white hover:bg-gray-50 text-gray-900 border"
                  onClick={() => handleExport("pdf")}
                >
                  <Download className="w-4 h-4 mr-2" />
                  PDF (Recommended)
                </Button>
                <Button 
                  className="w-full justify-start bg-white hover:bg-gray-50 text-gray-900 border"
                  onClick={() => handleExport("doc")}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Word Document
                </Button>
                <Button 
                  className="w-full justify-start bg-white hover:bg-gray-50 text-gray-900 border"
                  onClick={() => handleExport("print")}
                >
                  <Printer className="w-4 h-4 mr-2" />
                  Print Report
                </Button>
                <Button 
                  className="w-full justify-start bg-white hover:bg-gray-50 text-gray-900 border"
                  onClick={() => alert("Sharing feature coming soon!")}
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share with Provider
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-gray-900 mb-3">📋 What's Included</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Full conversation transcription</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>AI-detected alerts and red flags</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Similar patient case data</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Symptom timeline visualization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Suggested questions for clinician</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Advocacy tips and next steps</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Medical references and research</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-blue-50 border-2 border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-3">💡 How to Use Your Report</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">1.</span>
                  <span>Print or download the PDF version</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">2.</span>
                  <span>Bring to your next medical appointment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">3.</span>
                  <span>Reference specific sections when advocating</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">4.</span>
                  <span>Share with specialists or second opinion doctors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">5.</span>
                  <span>Keep for your personal medical records</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-yellow-50 border-2 border-yellow-200">
              <h4 className="font-semibold text-gray-900 mb-2">⚠️ Important Disclaimer</h4>
              <p className="text-xs text-gray-700">
                This report is generated by AI and is intended as an advocacy tool, not medical advice. Always consult qualified healthcare professionals for diagnosis and treatment. This report does not replace professional medical judgment.
              </p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
