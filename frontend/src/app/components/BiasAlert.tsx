import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { AlertTriangle, AlertCircle } from "lucide-react";

interface BiasAlertProps {
  type: "misdiagnosis" | "bias";
  title: string;
  description: string;
  severity: "high" | "medium";
}

export default function BiasAlert({ type, title, description, severity }: BiasAlertProps) {
  const isHighSeverity = severity === "high";
  const isMisdiagnosis = type === "misdiagnosis";

  const bgColor = isHighSeverity ? "bg-red-50" : "bg-yellow-50";
  const borderColor = isHighSeverity ? "border-red-200" : "border-yellow-200";
  const iconColor = isHighSeverity ? "text-red-600" : "text-yellow-600";
  const textColor = isHighSeverity ? "text-red-900" : "text-yellow-900";
  const badgeBg = isHighSeverity ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800";

  return (
    <Card className={`p-4 border-l-4 ${bgColor} ${borderColor}`}>
      <div className="flex items-start gap-3">
        <div className={`mt-0.5 ${iconColor}`}>
          {isHighSeverity ? (
            <AlertTriangle className="w-5 h-5" />
          ) : (
            <AlertCircle className="w-5 h-5" />
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h4 className={`font-semibold ${textColor}`}>{title}</h4>
            <Badge className={`${badgeBg} text-xs`}>
              {isMisdiagnosis ? "Risk Alert" : "Bias Detected"}
            </Badge>
          </div>
          <p className={`text-sm ${textColor.replace("900", "700")}`}>
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}
