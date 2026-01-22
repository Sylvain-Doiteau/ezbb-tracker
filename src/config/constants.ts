export const APP_CONFIG = {
  name: 'EZBB Tracker',
  version: '1.0.0',
  description: 'Tracker de biberons pour bébé',
} as const

export const BOTTLE_TYPES = {
  MILK: 'milk',
  WATER: 'water',
  FORMULA: 'formula',
} as const

export const BOTTLE_TYPE_LABELS: Record<string, string> = {
  [BOTTLE_TYPES.MILK]: 'Lait',
  [BOTTLE_TYPES.WATER]: 'Eau',
  [BOTTLE_TYPES.FORMULA]: 'Préparation',
}

export const STORAGE_KEYS = {
  BOTTLE_STORAGE: 'bottle-storage',
} as const

export const ROUTES = {
  HOME: '/',
  HISTORY: '/history',
  STATS: '/stats',
} as const

export const DEFAULT_DAILY_GOAL = 800 // ml
