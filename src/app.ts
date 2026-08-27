import { workouts } from "./data/workouts";
import type { Workout } from "./categories/workout-categories";
import type { Category } from "./categories/workout-categories";

export default function app() {
  return {
    workouts: workouts as Workout[],
    category: "Alla" as Category | "Alla",
    generated: [] as Workout[],

    generateWorkout() {
      const filtered =
        this.category === "Alla"
          ? this.workouts
          : this.workouts.filter((w) => w.category === this.category);

        this.generated = filtered;
    },
  };
}
