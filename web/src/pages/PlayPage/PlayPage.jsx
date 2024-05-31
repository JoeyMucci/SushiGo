import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const PlayPage = () => {
  return (
    <>
      <Metadata title="Play" description="Play page" />

      <h1>PlayPage</h1>
      <p>
        Find me in <code>./web/src/pages/PlayPage/PlayPage.jsx</code>
      </p>
      <p>
        My default route is named <code>play</code>, link to me with `
        <Link to={routes.play()}>Play</Link>`
      </p>
    </>
  )
}

export default PlayPage
