import { Gift, PlaneLanding, TrainFront, HeartPulse, Baby, Images, GraduationCap, LucideIcon } from "lucide-react";
import { Initiative } from "@/types";

export function pickInitiativeIcon(initiative: Initiative): LucideIcon {
  if (initiative.displayType === "distribution") return Gift;
  if (initiative.displayType === "gallery") return Images;
  if (initiative.displayType === "training") return GraduationCap;
  if (initiative.displayType === "hospitality") return Baby;
  if (initiative.title.includes("مستشف")) return HeartPulse;
  if (initiative.title.includes("طفال")) return Baby;
  if (initiative.title.includes("قطار")) return TrainFront;
  if (initiative.title.includes("مطار")) return PlaneLanding;
  return Gift;
}
