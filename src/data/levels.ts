import { Level } from "@/types";

// Import mix challenge level
import { mixChallenge } from "./levels/mix-challenge";

// Import 是 pattern sub-levels
import { shi01Basics } from "./levels/shi/shi-01-basics";
import { shi02Professions } from "./levels/shi/shi-02-professions";
import { shi03Identity } from "./levels/shi/shi-03-identity";

// Import 很 pattern sub-levels
import { hen01Basics } from "./levels/hen/hen-01-basics";
import { hen02FoodTaste } from "./levels/hen/hen-02-food-taste";
import { hen03PeopleFeelings } from "./levels/hen/hen-03-people-feelings";

// Import 应该 pattern sub-levels
import { yinggai01Basics } from "./levels/yinggai/yinggai-01-basics";
import { yinggai02Health } from "./levels/yinggai/yinggai-02-health";
import { yinggai03DailyLife } from "./levels/yinggai/yinggai-03-daily-life";

// Import 还是 pattern sub-levels
import { haishi01FoodDrink } from "./levels/haishi/haishi-01-food-drink";
import { haishi02PeopleRoles } from "./levels/haishi/haishi-02-people-roles";
import { haishi03Choices } from "./levels/haishi/haishi-03-choices";

// Import 或者 pattern sub-levels
import { huozhe01FoodDrink } from "./levels/huozhe/huozhe-01-food-drink";
import { huozhe02PeopleRoles } from "./levels/huozhe/huozhe-02-people-roles";
import { huozhe03Descriptions } from "./levels/huozhe/huozhe-03-descriptions";

// Import SVO pattern sub-levels
import { svo01Eat } from "./levels/svo/svo-01-eat";
import { svo02Drink } from "./levels/svo/svo-02-drink";
import { svo03Watch } from "./levels/svo/svo-03-watch";
import { svo04Buy } from "./levels/svo/svo-04-buy";
import { svo05Make } from "./levels/svo/svo-05-make";
import { svo06Go } from "./levels/svo/svo-06-go";

// Import 有 pattern sub-levels
import { you01Possessions } from "./levels/you/you-01-possessions";
import { you02Family } from "./levels/you/you-02-family";
import { you03Places } from "./levels/you/you-03-places";

// Import 在 pattern sub-levels
import { zai01PeoplePlaces } from "./levels/zai/zai-01-people-places";
import { zai02ThingsLocations } from "./levels/zai/zai-02-things-locations";
import { zai03Activities } from "./levels/zai/zai-03-activities";

// Import 了 (completed action) pattern sub-levels
import { le01EatingDrinking } from "./levels/le/le-01-eating-drinking";
import { le02DailyActivities } from "./levels/le/le-02-daily-activities";
import { le03GoingComing } from "./levels/le/le-03-going-coming";

// Import 正在...呢 pattern sub-levels
import { zhengzai01EatingDrinking } from "./levels/zhengzai/zhengzai-01-eating-drinking";
import { zhengzai02DailyActivities } from "./levels/zhengzai/zhengzai-02-daily-activities";
import { zhengzai03ActionsMovement } from "./levels/zhengzai/zhengzai-03-actions-movement";

// Import 要 pattern sub-levels
import { yao01FoodDrink } from "./levels/yao/yao-01-food-drink";
import { yao02Things } from "./levels/yao/yao-02-things";
import { yao03Actions } from "./levels/yao/yao-03-actions";

// Import 想 pattern sub-levels
import { xiang01FoodDrink } from "./levels/xiang/xiang-01-food-drink";
import { xiang02Activities } from "./levels/xiang/xiang-02-activities";
import { xiang03Places } from "./levels/xiang/xiang-03-places";

// Import 需要 pattern sub-levels
import { xuyao01BasicNeeds } from "./levels/xuyao/xuyao-01-basic-needs";
import { xuyao02WorkStudy } from "./levels/xuyao/xuyao-02-work-study";
import { xuyao03HealthLife } from "./levels/xuyao/xuyao-03-health-life";

// All levels in order
export const allLevels: Level[] = [
  mixChallenge,
  shi01Basics,
  shi02Professions,
  shi03Identity,
  hen01Basics,
  hen02FoodTaste,
  hen03PeopleFeelings,
  yinggai01Basics,
  yinggai02Health,
  yinggai03DailyLife,
  haishi01FoodDrink,
  haishi02PeopleRoles,
  haishi03Choices,
  huozhe01FoodDrink,
  huozhe02PeopleRoles,
  huozhe03Descriptions,
  svo01Eat,
  svo02Drink,
  svo03Watch,
  svo04Buy,
  svo05Make,
  svo06Go,
  you01Possessions,
  you02Family,
  you03Places,
  zai01PeoplePlaces,
  zai02ThingsLocations,
  zai03Activities,
  le01EatingDrinking,
  le02DailyActivities,
  le03GoingComing,
  zhengzai01EatingDrinking,
  zhengzai02DailyActivities,
  zhengzai03ActionsMovement,
  yao01FoodDrink,
  yao02Things,
  yao03Actions,
  xiang01FoodDrink,
  xiang02Activities,
  xiang03Places,
  xuyao01BasicNeeds,
  xuyao02WorkStudy,
  xuyao03HealthLife,
];

// Index levels by ID for quick lookup
export const levelMap: Record<string, Level> = {};
for (const level of allLevels) {
  levelMap[level.id] = level;
}

export function getLevelById(id: string): Level | undefined {
  return levelMap[id];
}

export function getLevels(): Level[] {
  return allLevels;
}

export function getLevelsByPattern(patternId: string): Level[] {
  return allLevels.filter((l) => l.pattern.id === patternId);
}

// For future backend: this function simulates async loading
export async function loadLevel(id: string): Promise<Level | undefined> {
  return Promise.resolve(getLevelById(id));
}

export async function loadAllLevels(): Promise<Level[]> {
  return Promise.resolve(getLevels());
}
