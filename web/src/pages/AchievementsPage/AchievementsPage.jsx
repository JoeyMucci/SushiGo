import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const AchievementsPage = () => {
  return (
    <>
      <Metadata title="Achievements" description="Achievements page" />

      <h1>AchievementsPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/AchievementsPage/AchievementsPage.jsx</code>
      </p>
      <p>
        My default route is named <code>achievements</code>, link to me with `
        <Link to={routes.achievements()}>Achievements</Link>`
      </p>
    </>
  )
}

export default AchievementsPage
