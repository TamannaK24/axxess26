import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { User } from "lucide-react";

interface PatientCardProps {
  name: string;
  age: number;
  symptoms: string[];
}

export default function PatientCard({ name, age, symptoms }: PatientCardProps) {
  return (
    <Card className="min-w-[280px] p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
          <User className="w-6 h-6 text-gray-600" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">Age: {age}</p>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-xs font-medium text-gray-600 mb-2">Similar Symptoms:</p>
        <div className="flex flex-wrap gap-2">
          {symptoms.map((symptom, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs bg-purple-50 text-purple-700 hover:bg-purple-100"
            >
              {symptom}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
