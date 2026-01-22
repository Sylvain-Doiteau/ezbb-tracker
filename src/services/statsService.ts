import { Bottle, Stats } from '@/types'
import { startOfDay, startOfWeek, startOfMonth, isAfter, isBefore } from 'date-fns'

export const calculateStats = (bottles: Bottle[]): Stats => {
  const now = new Date()
  const todayStart = startOfDay(now)
  const weekStart = startOfWeek(now, { weekStartsOn: 1 })
  const monthStart = startOfMonth(now)

  // S'assurer que toutes les dates sont des objets Date
  const bottlesWithDates = bottles.map((bottle) => ({
    ...bottle,
    date: bottle.date instanceof Date ? bottle.date : new Date(bottle.date),
  }))

  const todayBottles = bottlesWithDates.filter(
    (bottle) => isAfter(bottle.date, todayStart) && isBefore(bottle.date, now)
  )
  const weekBottles = bottlesWithDates.filter(
    (bottle) => isAfter(bottle.date, weekStart) && isBefore(bottle.date, now)
  )
  const monthBottles = bottlesWithDates.filter(
    (bottle) => isAfter(bottle.date, monthStart) && isBefore(bottle.date, now)
  )

  const calculatePeriodStats = (periodBottles: Bottle[]) => {
    const total = periodBottles.reduce((sum, bottle) => sum + bottle.amount, 0)
    const count = periodBottles.length
    const average = count > 0 ? total / count : 0
    return { total, count, average }
  }

  return {
    today: calculatePeriodStats(todayBottles),
    week: calculatePeriodStats(weekBottles),
    month: calculatePeriodStats(monthBottles),
  }
}
