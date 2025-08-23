export const XP_PER_CHECKIN = 10;
export const XP_PER_STREAK_MILESTONE = 50; // Bonus XP for hitting a milestone

// The amount of XP required to reach the next level.
// Level 1 -> Level 2 requires 100 XP.
// Level 2 -> Level 3 requires 200 XP.
export const LEVEL_THRESHOLDS = [
  0,     // Level 1
  100,   // Level 2
  200,   // Level 3
  350,   // Level 4
  550,   // Level 5
  800,   // Level 6
  1100,  // Level 7
  1500,  // Level 8
  2000,  // Level 9
  2600,  // Level 10
  // Add more levels as needed
];

export const getLevelFromXp = (xp: number): number => {
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_THRESHOLDS[i]) {
      return i + 1;
    }
  }
  return 1;
};

export const getXpForNextLevel = (currentLevel: number): number => {
    if (currentLevel >= LEVEL_THRESHOLDS.length) {
        return LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1];
    }
    return LEVEL_THRESHOLDS[currentLevel];
}

export const getXpForCurrentLevel = (currentLevel: number): number => {
    if (currentLevel <= 1) {
        return 0;
    }
    if (currentLevel > LEVEL_THRESHOLDS.length) {
        return LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1];
    }
    return LEVEL_THRESHOLDS[currentLevel - 1];
}
