import FeatureNav from "./FeatureNav";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  Download,
  FileText,
  Printer,
  Share2,
  Activity,
  AlertTriangle,
  ClipboardList,
  Stethoscope,
} from "lucide-react";

export default function ClinicalDashboard() {
  const handleExport = (format: string) => {
    alert(
      `Generating ${format.toUpperCase()} clinical report...\n\nIncludes:\n- Structured SOAP summary\n- Diagnostic flags\n- Symptom timeline\n- Supporting references`
    );
  };

  const summary = {
    visitDate: "February 21, 2026",
    duration: "12m 34s",
    provider: "Dr. [Provider Name]",
    chiefComplaint: "Progressive abdominal pain (2 weeks)",
    diagnosticRisk: 85,
    clinicalVariance: 78,
    overallSeverity: "High",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <FeatureNav
        currentFeature={8}
        totalFeatures={4}
        title="Clinical Review Dashboard"
        description="Structured appointment summary and diagnostic support overview"
      />

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* KPI Overview */}
        <div className="grid md:grid-cols-4 gap-4">
          {/* Visit Duration - Left Most */}
          <Card className="p-5 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="text-sm text-slate-500">Visit Duration</div>
            <div className="text-3xl font-bold text-slate-900 mt-2">
              {summary.duration}
            </div>
          </Card>

          <Card className="p-5 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="text-sm text-slate-500">
              Diagnostic Risk Indicator
            </div>
            <div className="text-3xl font-bold text-slate-900 mt-2">
              {summary.diagnosticRisk}%
            </div>
            <Badge className="mt-2 bg-slate-800 text-white">Elevated</Badge>
          </Card>

          <Card className="p-5 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="text-sm text-slate-500">
              Clinical Variance Index
            </div>
            <div className="text-3xl font-bold text-slate-900 mt-2">
              {summary.clinicalVariance}%
            </div>
            <Badge className="mt-2 bg-slate-700 text-white">Moderate</Badge>
          </Card>

          <Card className="p-5 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="text-sm text-slate-500">Overall Severity</div>
            <div className="text-3xl font-bold text-slate-900 mt-2">
              {summary.overallSeverity}
            </div>
            <Badge className="mt-2 bg-slate-900 text-white">
              Review Advised
            </Badge>
          </Card>
        </div>

        {/* Appointment Summary */}
        <Card className="p-6 bg-white shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            Appointment Summary
          </h3>

          <Separator className="mb-6" />

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-slate-500">Visit Date</div>
              <div className="font-semibold text-slate-800">
                {summary.visitDate}
              </div>
            </div>
            <div>
              <div className="text-sm text-slate-500">Provider</div>
              <div className="font-semibold text-slate-800">
                {summary.provider}
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="text-sm text-slate-500">Chief Complaint</div>
              <div className="font-semibold text-slate-800">
                {summary.chiefComplaint}
              </div>
            </div>
          </div>
        </Card>

        {/* Clinical Findings */}
        <Card className="p-6 bg-white shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            Clinical Review Flags
          </h3>

          <Separator className="mb-6" />

          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-red-50 border border-red-300 hover:shadow-sm transition">
              <div className="flex items-center gap-2 font-semibold text-red-800">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                Incomplete Physical Examination Documentation
              </div>
              <p className="text-sm text-red-700 mt-2">
                No documented abdominal palpation findings or diagnostic imaging
                orders despite progressive symptom escalation.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-red-50 border border-red-300 hover:shadow-sm transition">
              <div className="flex items-center gap-2 font-semibold text-red-800">
                <ClipboardList className="w-5 h-5 text-red-600" />
                Differential Diagnosis Not Fully Explored
              </div>
              <p className="text-sm text-red-700 mt-2">
                Family history of endometriosis not reflected in documented
                assessment or diagnostic plan.
              </p>
            </div>
          </div>
        </Card>

        {/* Recommended Clinical Actions */}
        <Card className="p-6 bg-white shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            Suggested Clinical Actions
          </h3>

          <Separator className="mb-6" />

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-lg border hover:shadow-sm transition">
              <Stethoscope className="w-5 h-5 text-slate-700 mt-1" />
              <div>
                <div className="font-semibold text-slate-800">
                  Consider Diagnostic Imaging
                </div>
                <div className="text-sm text-slate-600">
                  Pelvic ultrasound recommended to evaluate structural causes.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg border hover:shadow-sm transition">
              <Activity className="w-5 h-5 text-slate-700 mt-1" />
              <div>
                <div className="font-semibold text-slate-800">
                  Order Inflammatory Markers
                </div>
                <div className="text-sm text-slate-600">
                  CBC, CRP, ESR to assess underlying inflammatory process.
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Export Controls */}
        <Card className="p-6 bg-white shadow-sm">
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => handleExport("pdf")}
              className="bg-slate-900 hover:bg-slate-800 text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Export PDF
            </Button>
            <Button
              variant="outline"
              onClick={() => handleExport("doc")}
              className="hover:bg-slate-100"
            >
              <FileText className="w-4 h-4 mr-2" />
              Export DOC
            </Button>
            <Button variant="outline" className="hover:bg-slate-100">
              <Printer className="w-4 h-4 mr-2" />
              Print
            </Button>
            <Button variant="outline" className="hover:bg-slate-100">
              <Share2 className="w-4 h-4 mr-2" />
              Share Securely
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
}