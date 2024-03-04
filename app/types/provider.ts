import Schedule from "./schedule";

export default interface Provider {
  id: number;
  name: string;
  schedule: Schedule[];
}
