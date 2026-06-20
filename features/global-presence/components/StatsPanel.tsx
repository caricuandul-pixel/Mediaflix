"use client";

interface StatsPanelProps {
  regions: number;
  countries: number;
  projects: number;
}

export default function StatsPanel({
  regions,
  countries,
  projects,
}: StatsPanelProps) {
  return (
    <div
      className="
        grid
        grid-cols-3
        gap-4
      "
    >
      <div className="border rounded-lg p-4">
        <div className="text-sm text-neutral-500">
          Regions
        </div>

        <div className="text-2xl font-bold">
          {regions}
        </div>
      </div>

      <div className="border rounded-lg p-4">
        <div className="text-sm text-neutral-500">
          Countries
        </div>

        <div className="text-2xl font-bold">
          {countries}
        </div>
      </div>

      <div className="border rounded-lg p-4">
        <div className="text-sm text-neutral-500">
          Projects
        </div>

        <div className="text-2xl font-bold">
          {projects}
        </div>
      </div>
    </div>
  );
}