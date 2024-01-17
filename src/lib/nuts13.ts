export type ISORegion = "bk" | "ta" | "tc" | "ni" | "zi" | "bc" | "pv" | "ki";
export type Slovakia = "zapadne" | "stredne" | "vychodne";
type Nuts13 =
  | "Bratislavský kraj"
  | "Trnavský kraj"
  | "Trenčiansky kraj"
  | "Nitriansky kraj"
  | "Žilinský kraj"
  | "Banskobystrický kraj"
  | "Prešovský kraj"
  | "Košický kraj"
  | "Západné Slovensko"
  | "Stredné Slovensko"
  | "Východné Slovensko";

export function mapToNuts13(mappable: ISORegion | Slovakia): Nuts13 {
  switch (mappable) {
    case "bk":
      return "Bratislavský kraj";
    case "ta":
      return "Trnavský kraj";
    case "tc":
      return "Trenčiansky kraj";
    case "ni":
      return "Nitriansky kraj";
    case "zi":
      return "Žilinský kraj";
    case "bc":
      return "Banskobystrický kraj";
    case "pv":
      return "Prešovský kraj";
    case "ki":
      return "Košický kraj";
    case "zapadne":
      return "Západné Slovensko";
    case "stredne":
      return "Stredné Slovensko";
    case "vychodne":
      return "Východné Slovensko";
    default:
      throw new Error(`Unknown mappable: ${mappable}`);
  }
}
