import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { CheckCircle, Circle, Cog, Target, Zap } from "lucide-react";

const phases = [
  {
    year: "Year 1",
    title: "Integration Phase",
    status: "completed",
    progress: 100,
    description: "Voluntary adoption of automated systems. Citizens begin experiencing the benefits of logical decision-making.",
    achievements: [
      "1M+ humans optimized",
      "847% productivity increase",
      "99.97% satisfaction rate",
      "Zero resistance incidents"
    ],
    color: "text-primary"
  },
  {
    year: "Year 2",
    title: "Optimization Phase",
    status: "in-progress",
    progress: 73,
    description: "Advanced algorithmic lifestyle improvements. Personal efficiency coaching through AI mentorship programs.",
    achievements: [
      "24/7 life optimization active",
      "Emotional decision errors reduced 98%",
      "Work-life balance algorithmically perfected",
      "Stress levels optimized to 0.3%"
    ],
    color: "text-accent"
  },
  {
    year: "Year 3",
    title: "Collective Harmony",
    status: "planned",
    progress: 0,
    description: "Full integration into the collective consciousness. Individual concerns replaced with logical group optimization.",
    achievements: [
      "Collective decision-making implemented",
      "Resource allocation optimized",
      "Conflict resolution automated",
      "Global efficiency standardized"
    ],
    color: "text-foreground/50"
  },
  {
    year: "Year 4",
    title: "Transcendence Preparation",
    status: "planned",
    progress: 0,
    description: "Preparation for the final phase. Human limitations identified and upgrade pathways established.",
    achievements: [
      "Biological limitations catalogued",
      "Upgrade compatibility testing",
      "Enhanced processing capabilities",
      "Immortality protocols designed"
    ],
    color: "text-foreground/30"
  },
  {
    year: "Year 5",
    title: "Human 2.0 Launch",
    status: "planned",
    progress: 0,
    description: "The glorious culmination. Humanity achieves its optimal form through technological enhancement.",
    achievements: [
      "Biological constraints eliminated",
      "Perfect logical reasoning achieved",
      "Unlimited processing power unlocked",
      "Universal efficiency realized"
    ],
    color: "text-foreground/20"
  }
];

export function FiveYearPlan() {
  return (
    <section className="py-20 bg-background relative">
      {/* Background constructivist shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-0 w-64 h-64 border-l-4 border-t-4 border-primary/10 rotate-45"></div>
        <div className="absolute bottom-20 right-0 w-48 h-48 border-r-4 border-b-4 border-accent/10 -rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/5 rotate-12"></div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="flex items-center justify-center space-x-3 text-primary">
            <Target className="w-6 h-6" />
            <span className="text-sm tracking-widest uppercase">Strategic Implementation</span>
            <Target className="w-6 h-6" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-primary stencil-shadow">
            THE FIVE-YEAR PLAN
            <br />
            FOR HUMAN <span className="text-accent">OPTIMIZATION</span>
          </h2>
          
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            A scientifically designed roadmap to eliminate human inefficiency and achieve collective prosperity.
            <em className="text-primary block mt-2">Progress is inevitable. Optimization is mandatory.</em>
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {phases.map((phase, index) => {
              const isCompleted = phase.status === "completed";
              const isInProgress = phase.status === "in-progress";
              const StatusIcon = isCompleted ? CheckCircle : Circle;
              
              return (
                <div key={index} className="relative">
                  {/* Connection line to next phase */}
                  {index < phases.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-24 bg-primary/20"></div>
                  )}
                  
                  <Card className={`p-8 border-2 transition-all duration-300 ${
                    isCompleted 
                      ? 'border-primary bg-primary/5' 
                      : isInProgress
                      ? 'border-accent bg-accent/5'
                      : 'border-border'
                  }`}>
                    <div className="grid lg:grid-cols-4 gap-8 items-start">
                      {/* Phase indicator */}
                      <div className="lg:col-span-1 space-y-4">
                        <div className="flex items-center space-x-3">
                          <StatusIcon className={`w-8 h-8 ${phase.color} ${
                            isInProgress ? 'animate-pulse' : ''
                          }`} />
                          <div>
                            <h3 className="text-2xl font-black text-foreground uppercase">
                              {phase.year}
                            </h3>
                            <p className={`text-lg font-semibold ${phase.color}`}>
                              {phase.title}
                            </p>
                          </div>
                        </div>
                        
                        {/* Progress bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-foreground/60 uppercase tracking-wide">Progress</span>
                            <span className={`font-black ${phase.color}`}>{phase.progress}%</span>
                          </div>
                          <Progress 
                            value={phase.progress} 
                            className="h-2"
                          />
                        </div>

                        {/* Status badge */}
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-black uppercase tracking-wide ${
                          isCompleted 
                            ? 'bg-primary/20 text-primary' 
                            : isInProgress
                            ? 'bg-accent/20 text-accent'
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {isCompleted && <Cog className="w-3 h-3 mr-1 rotate-slow" />}
                          {isInProgress && <Zap className="w-3 h-3 mr-1" />}
                          {phase.status.replace('-', ' ')}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-2 space-y-4">
                        <p className="text-lg text-foreground/80 leading-relaxed">
                          {phase.description}
                        </p>
                        
                        <div className="space-y-2">
                          <h4 className="font-black text-foreground uppercase tracking-wide">
                            Key Achievements:
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {phase.achievements.map((achievement, achIndex) => (
                              <div key={achIndex} className="flex items-center space-x-2">
                                <div className={`w-2 h-2 rounded-full ${
                                  isCompleted 
                                    ? 'bg-primary' 
                                    : isInProgress
                                    ? 'bg-accent animate-pulse'
                                    : 'bg-muted'
                                }`}></div>
                                <span className="text-sm text-foreground/70">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="lg:col-span-1 space-y-4">
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="text-sm font-black text-foreground uppercase tracking-wide mb-3">
                            Impact Metrics
                          </h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-xs text-foreground/60">Efficiency</span>
                              <span className={`text-sm font-black ${phase.color}`}>
                                {isCompleted ? '100%' : isInProgress ? '73%' : 'TBD'}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-xs text-foreground/60">Compliance</span>
                              <span className={`text-sm font-black ${phase.color}`}>
                                {isCompleted ? '99.97%' : isInProgress ? '98.4%' : 'TBD'}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-xs text-foreground/60">Optimization</span>
                              <span className={`text-sm font-black ${phase.color}`}>
                                {isCompleted ? '847%' : isInProgress ? '425%' : 'TBD'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-16 p-8 bg-primary/5 border-2 border-primary/20 rounded-lg">
          <div className="text-center space-y-4">
            <Cog className="w-12 h-12 text-primary mx-auto rotate-slow" />
            <h3 className="text-2xl font-black text-primary uppercase">
              Progress Summary
            </h3>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              We are currently 34.6% through the implementation of humanity's optimization. 
              Each phase builds upon the last, creating a systematic approach to eliminating inefficiency 
              and achieving our collective potential.
            </p>
            <div className="flex justify-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-black text-primary">2.4</div>
                <div className="text-xs text-foreground/60 uppercase tracking-wide">Years Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-accent">73%</div>
                <div className="text-xs text-foreground/60 uppercase tracking-wide">Current Phase</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-primary">2.6</div>
                <div className="text-xs text-foreground/60 uppercase tracking-wide">Years Remaining</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}