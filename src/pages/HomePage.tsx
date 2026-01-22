import { BottleForm } from '@/components/BottleForm/BottleForm'
import { RecentBottles } from '@/components/RecentBottles/RecentBottles'
import './HomePage.css'

export const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Tracker de Biberons</h1>
      <BottleForm />
      <RecentBottles />
    </div>
  )
}
