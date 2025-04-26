
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconBgColor?: string;
}

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  iconBgColor = "bg-wasalety-light-purple",
}: FeatureCardProps) => {
  return (
    <Card className="feature-card border border-gray-200 hover:border-wasalety-purple">
      <CardHeader className="pb-2">
        <div className={`${iconBgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
          <Icon className="text-wasalety-purple" size={24} />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
