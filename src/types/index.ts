export interface Bottle {
  id: string
  date: Date
  amount: number // en ml
  type: 'milk' | 'water' | 'formula'
  notes?: string
}

export interface BabyProfile {
  id: string
  name: string
  birthDate: Date
  dailyGoal: number // objectif quotidien en ml
}

export interface Stats {
  today: {
    total: number
    count: number
    average: number
  }
  week: {
    total: number
    count: number
    average: number
  }
  month: {
    total: number
    count: number
    average: number
  }
}
