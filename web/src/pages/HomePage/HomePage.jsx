import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

const HomePage = () => {
  const { isAuthenticated } = useAuth()

  return (
    <>
      <p className="text-center font-cal text-6xl text-[color:var(--color-nature)]">
        Hello there! This a website where you can play SushiGo, a board game
        developed by Gamewright. Please log in or sign up if you have not
        already (it is easy). While you can play as a guest, the achievement and
        high score features will be disabled. Regardless, you can play against
        three computers. To become Sushi King, one must complete all the
        achievements and then defeat the toxic Jeff. Have fun playing and try to
        enshrine yourself on the leaderboard!
      </p>

      <br />
      <br />

      <div className="flex flex-col">
        <div className="flex flex-row">
          <Link to={routes.play()}>
            <span className="rounded bg-[color:var(--color-nightwing)] px-2 py-2 text-center font-cal text-6xl text-[color:var(--color-salmon)]">
              🍣
            </span>
          </Link>
          <p className="text-center font-cal text-6xl text-[color:var(--color-nature)]">
            Engage in three rounds of Sushi selecting to determine champion
          </p>
        </div>

        <br />

        <div className="flex flex-row">
          <Link to={routes.instructions()}>
            <span className="rounded bg-[color:var(--color-nightwing)] px-2 py-2 text-center font-cal text-6xl text-[color:var(--color-salmon)]">
              📄
            </span>
          </Link>
          <p className="text-center font-cal text-6xl text-[color:var(--color-nature)]">
            Learn or brush up on Sushi dining etiquette
          </p>
        </div>

        {isAuthenticated && (
          <>
            <br />
            <div className="flex flex-row">
              <Link to={routes.achievements()}>
                <span className="rounded bg-[color:var(--color-nightwing)] px-2 py-2 text-center font-cal text-6xl text-[color:var(--color-salmon)]">
                  🏆
                </span>
              </Link>
              <p className="text-center font-cal text-6xl text-[color:var(--color-nature)]">
                Measure progress on your journey to become Sushi King
              </p>
            </div>
          </>
        )}

        <br />

        <div className="flex flex-row">
          <Link to={routes.leaderboard()}>
            <span className="rounded bg-[color:var(--color-nightwing)] px-2 py-2 text-center font-cal text-6xl text-[color:var(--color-salmon)]">
              🥇
            </span>
          </Link>
          <p className="text-center font-cal text-6xl text-[color:var(--color-nature)]">
            See how you compare to the legends of Sushi
          </p>
        </div>

        <br />

        {!isAuthenticated ? (
          <div className="flex flex-row">
            <Link to={routes.signup()}>
              <span className="rounded bg-[color:var(--color-nightwing)] px-2 py-2 text-center font-cal text-6xl text-[color:var(--color-salmon)]">
                ⚙️
              </span>
            </Link>
            <p className="text-center font-cal text-6xl text-[color:var(--color-nature)]">
              Become a true Sushi squire
            </p>
          </div>
        ) : (
          <div className="flex flex-row">
            <Link to={routes.account()}>
              <span className="rounded bg-[color:var(--color-nightwing)] px-2 py-2 text-center font-cal text-6xl text-[color:var(--color-salmon)]">
                ⚙️
              </span>
            </Link>
            <p className="text-center font-cal text-6xl text-[color:var(--color-nature)]">
              Alter your name or other Sushi preferences
            </p>
          </div>
        )}
      </div>
    </>
  )
}

export default HomePage
