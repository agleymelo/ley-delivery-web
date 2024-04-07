import { type ElementType } from "react";

type BenefitItemProps = {
  description: string;
  icon: ElementType;
}

export function BenefitItems({ description, icon: Icon }: BenefitItemProps) {
  return (
    <div className="flex items-center justify-start gap-2">
      <Icon className="h-5 w-5" />
      <span className="text-xs font-normal">{description}</span>
    </div>
  )
}