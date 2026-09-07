import Link from "next/link";
import { ArrowLeft, Images } from "lucide-react";
import { Initiative } from "@/types";
import { SafeImage } from "./SafeImage";
import { Badge } from "./Badge";
import { pickInitiativeIcon } from "@/lib/initiative-visuals";


export function InitiativeCard({ initiative }: { initiative: Initiative }) {
  const Icon = pickInitiativeIcon(initiative);
  const isGallery = initiative.displayType === "gallery";
  const number = String(initiative.id).padStart(2, "0");
  const primaryStat = initiative.stats?.[0];

  return (
    <Link
      href={`/initiatives/${initiative.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-md border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
    >
   
      <div className="relative h-48 w-full shrink-0 overflow-hidden">
        {isGallery ? (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary to-primary-light">
            <Images className="h-10 w-10 text-white/80" aria-hidden="true" />
          </div>
        ) : (
          <SafeImage
            src={initiative.images[0] ?? ""}
            alt={initiative.title}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <span className="absolute right-3 top-3 rounded-sm bg-white/90 px-2 py-1 text-xs font-bold text-primary backdrop-blur">
          {number}
        </span>
       
      </div>

      {}
      <div className="flex flex-1 flex-col p-5">
        <Badge tone="muted" className="mb-2 w-fit">
          {initiative.category}
        </Badge>

        <h3 className="h4 mb-2 line-clamp-2 min-h-[4rem] text-text">{initiative.title}</h3>

        <p className="body-sm mb-4 line-clamp-3 min-h-[4rem]">{initiative.shortDescription}</p>

        <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
          {primaryStat ? (
            <div>
              <div className="text-lg font-bold text-primary">{primaryStat.displayValue}</div>
              <p className="caption line-clamp-1">{primaryStat.label}</p>
            </div>
          ) : (
            <span className="caption">{isGallery ? "مكتبة صور" : initiative.year}</span>
          )}
          <span className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-primary group-hover:text-primary-dark">
            المزيد عن المبادرة
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
