import sk from 'web/public/sushiking.png'

import { Link, routes } from '@redwoodjs/router'

const RollLayout = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <ul className="flex flex-row items-center bg-[color:var(--color-nightwing)]">
            <li>
              <Link to={routes.home()}>
                <img src={sk} alt="sushi king" className="h-10 w-10" />
              </Link>
            </li>
            <li>
              <Link
                className="m-2 px-4 py-2 font-cal text-[color:var(--color-salmon)]"
                to={routes.play()}
              >
                Play
              </Link>
            </li>
            <li>
              <Link
                className="m-2 px-4 py-2 font-cal text-[color:var(--color-salmon)]"
                to={routes.instructions()}
              >
                Instructions
              </Link>
            </li>
            <li>
              <Link
                className="m-2 px-4 py-2 font-cal text-[color:var(--color-salmon)]"
                to={routes.achievements()}
              >
                Achievements
              </Link>
            </li>
            <li>
              <Link
                className="m-2 px-4 py-2 font-cal text-[color:var(--color-salmon)]"
                to={routes.leaderboard()}
              >
                Leaderboard
              </Link>
            </li>
            <li>
              <Link
                className="m-2 px-4 py-2 font-cal text-[color:var(--color-salmon)]"
                to={routes.account()}
              >
                Account
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default RollLayout
