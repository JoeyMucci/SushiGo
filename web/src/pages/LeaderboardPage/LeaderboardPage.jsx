import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const LeaderboardPage = () => {
  return (
    <>
      <Metadata title="Leaderboard" description="Leaderboard page" />

      <h1>LeaderboardPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/LeaderboardPage/LeaderboardPage.jsx</code>
      </p>
      <p>
        My default route is named <code>leaderboard</code>, link to me with `
        <Link to={routes.leaderboard()}>Leaderboard</Link>`
      </p>
    </>
  )
}

export default LeaderboardPage
