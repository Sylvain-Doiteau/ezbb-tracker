import { useBottleStore } from '@/store/bottleStore'
import { calculateStats } from '@/services/statsService'
import { StatsCard } from '@/components/StatsCard/StatsCard'
import './StatsPage.css'

export const StatsPage = () => {
  const bottles = useBottleStore((state) => state.bottles)
  const babyProfile = useBottleStore((state) => state.babyProfile)
  const stats = calculateStats(bottles)

  return (
    <div className="stats-page">
      <h1>Statistiques</h1>
      <div className="stats-grid">
        <StatsCard
          title="Aujourd'hui"
          total={stats.today.total}
          count={stats.today.count}
          average={stats.today.average}
          goal={babyProfile?.dailyGoal}
        />
        <StatsCard
          title="Cette semaine"
          total={stats.week.total}
          count={stats.week.count}
          average={stats.week.average}
        />
        <StatsCard
          title="Ce mois"
          total={stats.month.total}
          count={stats.month.count}
          average={stats.month.average}
        />
      </div>
    </div>
  )
}
