import FeatureNav from "./FeatureNav";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Calendar, TrendingUp, Clock } from "lucide-react";

export default function Feature7() {
  const timeline = [
    { 
      date: "Feb 7, 2026",
      daysAgo: 14,
      event: "Mild abdominal discomfort begins",
      severity: "low",
      painLevel: 3,
      details: "Occasional cramping, manageable with normal activities"
    },
    { 
      date: "Feb 11, 2026",
      daysAgo: 10,
      event: "Pain becomes more frequent",
      severity: "low",
      painLevel: 4,
      details: "Occurring 3-4 times per day, lasting 15-30 minutes"
    },
    { 
      date: "Feb 14, 2026",
      daysAgo: 7,
      event: "Nausea and fatigue appear",
      severity: "medium",
      painLevel: 5,
      details: "New symptoms emerging, affecting appetite and energy"
    },
    { 
      date: "Feb 16, 2026",
      daysAgo: 5,
      event: "Pain localizes to lower right abdomen",
      severity: "high",
      painLevel: 6,
      details: "Pain now concentrated in specific area, more intense"
    },
    { 
      date: "Feb 18, 2026",
      daysAgo: 3,
      event: "Pain begins waking patient at night",
      severity: "high",
      painLevel: 7,
      details: "Sleep disrupted 2-3 times per night due to pain intensity"
    },
    { 
      date: "Feb 21, 2026",
      daysAgo: 0,
      event: "Doctor visit: Current state",
      severity: "high",
      painLevel: 7,
      details: "Loss of appetite, pain at 7/10, affecting daily function"
    },
  ];

  const insights = {
    duration: "14 days",
    progression: "Escalating",
    currentPainLevel: 7,
    initialPainLevel: 3,
    painIncrease: "+133%",
    newSymptoms: 3,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <FeatureNav 
        currentFeature={7}
        totalFeatures={8}
        title="Symptom Timeline"
        description="Visual progression of symptoms over time to identify escalation patterns"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-purple-600">{insights.duration}</div>
            <div className="text-sm text-gray-600 mt-1">Symptom Duration</div>
          </Card>
          <Card className="p-4 text-center border-2 border-red-200 bg-red-50">
            <div className="text-3xl font-bold text-red-600">{insights.painIncrease}</div>
            <div className="text-sm text-gray-600 mt-1">Pain Increase</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-orange-600">{insights.newSymptoms}</div>
            <div className="text-sm text-gray-600 mt-1">New Symptoms</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-yellow-600">{insights.currentPainLevel}/10</div>
            <div className="text-sm text-gray-600 mt-1">Current Pain Level</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Timeline */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-purple-600" />
                <h3 className="text-2xl font-semibold text-gray-900">
                  Symptom Progression Timeline
                </h3>
              </div>

              <div className="relative">
                {/* Vertical timeline line with gradient */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-yellow-400 to-red-500" />
                
                <div className="space-y-6">
                  {timeline.map((item, idx) => {
                    const dotColor = item.severity === "high" ? "bg-red-500 ring-red-200" : 
                                    item.severity === "medium" ? "bg-yellow-500 ring-yellow-200" : 
                                    "bg-green-500 ring-green-200";
                    const bgColor = item.severity === "high" ? "bg-red-50 border-red-300" : 
                                   item.severity === "medium" ? "bg-yellow-50 border-yellow-300" : 
                                   "bg-green-50 border-green-300";
                    
                    return (
                      <div key={idx} className="relative pl-20">
                        {/* Timeline dot */}
                        <div className={`absolute left-6 top-6 w-5 h-5 rounded-full ${dotColor} ring-4 ring-white shadow-lg z-10`} />
                        
                        {/* Content card */}
                        <Card className={`border-2 ${bgColor} p-5`}>
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <div className="text-sm font-semibold text-gray-600 mb-1">
                                {item.date} {item.daysAgo > 0 && `(${item.daysAgo} days ago)`}
                                {item.daysAgo === 0 && "(Today)"}
                              </div>
                              <h4 className="text-lg font-bold text-gray-900">{item.event}</h4>
                            </div>
                            <div className="flex gap-2">
                              <Badge 
                                className={
                                  item.severity === "high" ? "bg-red-600 text-white" :
                                  item.severity === "medium" ? "bg-yellow-600 text-white" :
                                  "bg-green-600 text-white"
                                }
                              >
                                {item.severity}
                              </Badge>
                            </div>
                          </div>
                          
                          <p className="text-sm text-gray-700 mb-3">{item.details}</p>
                          
                          {/* Pain level indicator */}
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-medium text-gray-600">Pain Level:</span>
                            <div className="flex-1 flex items-center gap-1">
                              {[...Array(10)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`h-2 flex-1 rounded ${
                                    i < item.painLevel
                                      ? i < 3 ? "bg-green-500" :
                                        i < 6 ? "bg-yellow-500" :
                                        "bg-red-500"
                                      : "bg-gray-200"
                                  }`}
                                />
                              ))}
                              <span className="ml-2 font-bold text-gray-900 min-w-[30px]">
                                {item.painLevel}/10
                              </span>
                            </div>
                          </div>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>

            {/* Pain Trend Graph */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                📈 Pain Level Trend
              </h3>
              <div className="relative h-64 bg-gray-50 rounded-lg p-4">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-gray-600 py-4">
                  <span>10</span>
                  <span>8</span>
                  <span>6</span>
                  <span>4</span>
                  <span>2</span>
                  <span>0</span>
                </div>
                
                {/* Graph area */}
                <div className="ml-12 h-full relative">
                  <svg className="w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                    {/* Grid lines */}
                    {[0, 2, 4, 6, 8, 10].map((val, idx) => (
                      <line
                        key={idx}
                        x1="0"
                        y1={200 - (val * 20)}
                        x2="500"
                        y2={200 - (val * 20)}
                        stroke="#e5e7eb"
                        strokeWidth="1"
                      />
                    ))}
                    
                    {/* Trend line */}
                    <polyline
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="4"
                      points={timeline.map((item, idx) => 
                        `${(idx / (timeline.length - 1)) * 500},${200 - (item.painLevel * 20)}`
                      ).join(" ")}
                    />
                    
                    {/* Data points */}
                    {timeline.map((item, idx) => (
                      <circle
                        key={idx}
                        cx={(idx / (timeline.length - 1)) * 500}
                        cy={200 - (item.painLevel * 20)}
                        r="6"
                        fill={item.painLevel >= 7 ? "#ef4444" : item.painLevel >= 5 ? "#f59e0b" : "#10b981"}
                        stroke="white"
                        strokeWidth="2"
                      />
                    ))}
                    
                    {/* Gradient definition */}
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="50%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#ef4444" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                {/* X-axis labels */}
                <div className="ml-12 flex justify-between text-xs text-gray-600 mt-2">
                  {timeline.map((item, idx) => (
                    <span key={idx} className="text-center" style={{ width: `${100 / timeline.length}%` }}>
                      Day {14 - item.daysAgo}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6 bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-300">
              <div className="flex items-start gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-red-600 flex-shrink-0" />
                <h4 className="font-semibold text-gray-900">🚨 Critical Pattern</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="p-3 bg-white rounded border-l-4 border-red-500">
                  <div className="font-semibold text-red-900 mb-1">Escalating Pain</div>
                  <p className="text-red-800">Pain increased from 3/10 to 7/10 over 2 weeks (133% increase)</p>
                </div>
                <div className="p-3 bg-white rounded border-l-4 border-orange-500">
                  <div className="font-semibold text-orange-900 mb-1">Pain Localization</div>
                  <p className="text-orange-800">Pain moved from general to specific location (lower right)</p>
                </div>
                <div className="p-3 bg-white rounded border-l-4 border-yellow-500">
                  <div className="font-semibold text-yellow-900 mb-1">Sleep Disruption</div>
                  <p className="text-yellow-800">New symptom indicating severity has reached critical level</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-gray-900 mb-3">📊 Progression Analysis</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Initial Pain</span>
                    <span className="font-semibold text-green-600">3/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "30%" }} />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Current Pain</span>
                    <span className="font-semibold text-red-600">7/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: "70%" }} />
                  </div>
                </div>

                <div className="pt-3 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Rate of Increase</span>
                    <Badge className="bg-red-600 text-white">
                      +0.29 points/day
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-yellow-50 border-2 border-yellow-300">
              <div className="flex items-start gap-2 mb-3">
                <Clock className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                <h4 className="font-semibold text-gray-900">⏰ Time Indicators</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-0.5">•</span>
                  <span><strong>Day 0-4:</strong> Mild symptoms, manageable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-0.5">•</span>
                  <span><strong>Day 5-7:</strong> Frequency increased, new symptoms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-0.5">•</span>
                  <span><strong>Day 8-10:</strong> Pain localization (critical sign)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5">•</span>
                  <span><strong>Day 11-14:</strong> Sleep disruption (urgent care needed)</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-blue-50 border-2 border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-3">💡 Why Timeline Matters</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Shows symptom progression objectively</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Helps doctors see full picture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Identifies escalation patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Provides evidence for advocacy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Documents duration for insurance</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
