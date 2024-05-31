import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const InstructionsPage = () => {
  return (
    <>
      <Metadata title="Instructions" description="Instructions page" />

      <h1>InstructionsPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/InstructionsPage/InstructionsPage.jsx</code>
      </p>
      <p>
        My default route is named <code>instructions</code>, link to me with `
        <Link to={routes.instructions()}>Instructions</Link>`
      </p>
    </>
  )
}

export default InstructionsPage
