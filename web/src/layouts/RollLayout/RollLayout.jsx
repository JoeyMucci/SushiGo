import sk from 'web/public/sushiking.png'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

const RollLayout = ({ children }) => {
  const { logOut, isAuthenticated, currentUser, loading } = useAuth()

  if (loading) {
    return <></>
  }

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
                className="m-2 rounded px-4 py-2 font-cal text-[color:var(--color-salmon)] transition duration-100 hover:bg-[color:var(--color-oak)] hover:text-[color:var(--color-nature)]"
                to={routes.play()}
              >
                Play
              </Link>
            </li>
            <li>
              <Link
                className=" m-2 rounded px-4 py-2 font-cal  text-[color:var(--color-salmon)] transition duration-100 hover:bg-[color:var(--color-oak)] hover:text-[color:var(--color-nature)]"
                to={routes.instructions()}
              >
                Instructions
              </Link>
            </li>
            <li>
              <Link
                className="m-2 rounded px-4 py-2 font-cal text-[color:var(--color-salmon)] transition duration-100 hover:bg-[color:var(--color-oak)] hover:text-[color:var(--color-nature)]"
                to={routes.achievements()}
              >
                Achievements
              </Link>
            </li>
            <li>
              <Link
                className="m-2 rounded px-4 py-2 font-cal text-[color:var(--color-salmon)] transition duration-100 hover:bg-[color:var(--color-oak)] hover:text-[color:var(--color-nature)]"
                to={routes.leaderboard()}
              >
                Leaderboard
              </Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link
                  className="m-2 rounded px-4 py-2 font-cal text-[color:var(--color-salmon)] transition duration-100 hover:bg-[color:var(--color-oak)] hover:text-[color:var(--color-nature)]"
                  to={routes.account()}
                >
                  {currentUser.name}
                </Link>
              </li>
            )}
            <li>
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    logOut()
                    window.location.href = '/'
                  }}
                  className="m-2 rounded px-4 py-1 font-cal text-[color:var(--color-salmon)] transition duration-100 hover:bg-[color:var(--color-oak)] hover:text-[color:var(--color-nature)]"
                >
                  Log Out
                </button>
              ) : (
                <button
                  onClick={() => (window.location.href = '/login')}
                  className="m-2 rounded px-4 py-1 font-cal text-[color:var(--color-salmon)] transition duration-100 hover:bg-[color:var(--color-oak)] hover:text-[color:var(--color-nature)]"
                >
                  Log In
                </button>
              )}
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default RollLayout
