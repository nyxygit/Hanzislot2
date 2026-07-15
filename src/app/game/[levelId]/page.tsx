// Server component — handles static params generation
import GameClient from "./GameClient";
import { allLevels } from "@/data/levels";

export function generateStaticParams() {
  return allLevels.map((level) => ({
    levelId: level.id,
  }));
}

export default function GamePage() {
  return <GameClient />;
}
