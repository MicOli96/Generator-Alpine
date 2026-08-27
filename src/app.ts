import { workouts } from "./data/workouts";
import type { Workout } from "./categories/workout-categories";
import type { Category } from "./categories/workout-categories";
import type { Difficulty } from "./categories/workout-categories";

export default function app() {
  return {
    workouts: workouts as Workout[],
    category: "Alla" as Category | "Alla",
    generated: [] as Workout[],
    difficulty: "Alla" as Difficulty | "Alla",

    generateWorkout() {
      const byCategory =
        this.category === "Alla"
          ? this.workouts
          : this.workouts.filter((w) => w.category === this.category);

      const byDifficulty =
      this.difficulty === "Alla"
      ? byCategory
      : byCategory.filter((w) => w.difficulty === this.difficulty);

      this.generated = byDifficulty;
    },
  };
}
