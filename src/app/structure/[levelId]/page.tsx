// Server component — handles static params generation
import StructureClient from "./StructureClient";
import { allLevels } from "@/data/levels";

export function generateStaticParams() {
  const patternIds = [...new Set(allLevels.map((l) => l.pattern.id))];
  return patternIds.map((patternId) => ({
    levelId: patternId,
  }));
}

export default function StructureDetailPage() {
  return <StructureClient />;
}
