import FeatureNav from "./FeatureNav";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import PatientCard from "../PatientCard";
import { ScrollArea } from "../ui/scroll-area";
import { Users, Shield, TrendingUp } from "lucide-react";

export default function Feature3() {
  const similarPatients = [
    {
      name: "Sarah M. (Anonymized)",
      age: 32,
      symptoms: ["Abdominal pain", "Irregular periods", "Fatigue", "Nausea"],
    },
    {
      name: "Patient B. (Anonymized)",
      age: 28,
      symptoms: ["Pelvic pain", "Endometriosis", "Nausea", "Back pain"],
    },
    {
      name: "Jennifer K. (Anonymized)",
      age: 35,
      symptoms: ["Ovarian cysts", "Abdominal pain", "Irregular cycles", "Bloating"],
    },
    {
      name: "Patient D. (Anonymized)",
      age: 30,
      symptoms: ["Chronic pain", "Fatigue", "Hormonal issues"],
    },
    {
      name: "Maria L. (Anonymized)",
      age: 29,
      symptoms: ["Endometriosis", "Severe cramping", "Fatigue"],
    },
    {
      name: "Patient F. (Anonymized)",
      age: 33,
      symptoms: ["Lower back pain", "Abdominal pain", "Irregular periods"],
    },
    {
      name: "Ashley R. (Anonymized)",
      age: 31,
      symptoms: ["PCOS", "Pelvic pain", "Weight changes", "Fatigue"],
    },
    {
      name: "Patient H. (Anonymized)",
      age: 27,
      symptoms: ["Chronic fatigue", "Abdominal cramping", "Nausea"],
    },
  ];

  const matchingCriteria = [
    { criterion: "Age Range (25-35)", match: "100%", color: "text-green-600" },
    { criterion: "Abdominal Pain", match: "87.5%", color: "text-green-600" },
    { criterion: "Irregular Periods", match: "75%", color: "text-yellow-600" },
    { criterion: "Fatigue", match: "62.5%", color: "text-yellow-600" },
    { criterion: "Family History", match: "37.5%", color: "text-orange-600" },
  ];

  const insights = [
    {
      title: "Common Diagnosis: Endometriosis",
      percentage: 62.5,
      description: "5 out of 8 similar patients were eventually diagnosed with endometriosis",
    },
    {
      title: "Average Time to Diagnosis",
      percentage: 100,
      description: "3.2 years average from first symptoms to confirmed diagnosis",
    },
    {
      title: "Initial Misdiagnosis Rate",
      percentage: 75,
      description: "6 out of 8 were initially told symptoms were stress-related",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <FeatureNav 
        currentFeature={3}
        totalFeatures={8}
        title="Similar Patient Cases"
        description="Anonymized patients with matching symptom profiles (privacy-protected)"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-purple-600">{similarPatients.length}</div>
            <div className="text-sm text-gray-600 mt-1">Similar Cases</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-green-600">87.5%</div>
            <div className="text-sm text-gray-600 mt-1">Symptom Match</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-blue-600">28-35</div>
            <div className="text-sm text-gray-600 mt-1">Age Range</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-orange-600">62.5%</div>
            <div className="text-sm text-gray-600 mt-1">Had Endometriosis</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Matching Patient Profiles
              </h3>
              <p className="text-gray-600 mb-6">
                These anonymized patients have similar symptom patterns to yours. Understanding their journeys can help you advocate more effectively.
              </p>

              {/* Scrollable Patient Cards */}
              <div className="mb-6">
                <ScrollArea className="w-full">
                  <div className="flex gap-4 pb-4">
                    {similarPatients.map((patient, idx) => (
                      <PatientCard key={idx} {...patient} />
                    ))}
                  </div>
                </ScrollArea>
              </div>

              {/* Grid View of Patients */}
              <div className="grid md:grid-cols-2 gap-4">
                {similarPatients.map((patient, idx) => (
                  <Card key={idx} className="p-4 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 truncate">{patient.name}</h4>
                        <p className="text-sm text-gray-500 mb-2">Age: {patient.age}</p>
                        <div className="flex flex-wrap gap-1">
                          {patient.symptoms.slice(0, 3).map((symptom, sIdx) => (
                            <Badge
                              key={sIdx}
                              variant="secondary"
                              className="text-xs bg-purple-50 text-purple-700"
                            >
                              {symptom}
                            </Badge>
                          ))}
                          {patient.symptoms.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{patient.symptoms.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Insights from Similar Cases */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                📈 Insights from Similar Cases
              </h3>
              <div className="space-y-4">
                {insights.map((insight, idx) => (
                  <div key={idx} className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{insight.title}</h4>
                      <Badge className="bg-purple-600 text-white">
                        {insight.percentage}%
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{insight.description}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all"
                        style={{ width: `${insight.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Matching Criteria
              </h3>
              <div className="space-y-3">
                {matchingCriteria.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm text-gray-700">{item.criterion}</span>
                    <span className={`text-sm font-semibold ${item.color}`}>
                      {item.match}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-green-50 border-2 border-green-200">
              <div className="flex items-start gap-3 mb-3">
                <Shield className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">🔒 Privacy Protected</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>All patient data is fully anonymized</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>HIPAA-compliant encryption</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>No personal identifiers stored</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>Aggregated data only</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-blue-50 border-2 border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-3">💡 How Matching Works</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span>AI analyzes symptom patterns and demographics</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Weighted matching algorithm prioritizes key symptoms</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Considers family history and progression timeline</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Updates database with new verified cases</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-yellow-50 border-2 border-yellow-200">
              <h4 className="font-semibold text-gray-900 mb-2">⚠️ Important Note</h4>
              <p className="text-sm text-gray-700">
                Similar cases provide context but are not medical advice. Every patient is unique. Always consult with qualified healthcare professionals.
              </p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
