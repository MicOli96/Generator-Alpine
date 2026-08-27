export interface Workout {
    name: string,
    category: Category,
    difficulty: Difficulty,
    reps: number,
};

export type Category = "Styrka" | "Kondition" | "Rörlighet";

export type Difficulty = "Lätt" | "Medel" | "Svårt"