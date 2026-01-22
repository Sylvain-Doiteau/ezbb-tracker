import { useBottleStore } from '@/store/bottleStore'
import { useMemo } from 'react'
import { Bottle } from '@/types'

export const useBottles = () => {
  const bottles = useBottleStore((state) => state.bottles)

  const sortedBottles = useMemo(() => {
    return [...bottles].sort((a, b) => b.date.getTime() - a.date.getTime())
  }, [bottles])

  const todayBottles = useMemo(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return sortedBottles.filter((bottle) => {
      const bottleDate = new Date(bottle.date)
      bottleDate.setHours(0, 0, 0, 0)
      return bottleDate.getTime() === today.getTime()
    })
  }, [sortedBottles])

  return {
    bottles,
    sortedBottles,
    todayBottles,
  }
}
