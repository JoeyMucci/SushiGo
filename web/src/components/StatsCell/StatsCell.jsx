import { SToHMS } from 'web/src/pages/PlayPage/PlayPage.jsx'

export const QUERY = gql`
  query StatsQuery($difficulty: String!) {
    stats: getStats(difficulty: $difficulty) {
      name
      easyScore
      easyDessert
      normalScore
      normalDessert
      hardScore
      hardDessert
      toxicScore
      toxicDessert
      bestSpeedrun
    }
  }
`

export const Loading = () => (
  <p className="text-center font-cal text-6xl text-[color:var(--color-nature)]">
    Loading...
  </p>
)

export const Empty = () => (
  <p className="text-center font-cal text-6xl text-[color:var(--color-nature)]">
    No entries... be the first?
  </p>
)

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ stats }) => {
  let lastScore = -1
  let lastDessert = -1
  let lastFinishTime = -1
  let rank = 0
  return (
    <div className="flex flex-col space-y-10 p-5">
      {stats.map((stat, i) => {
        let score
        let dessert
        let finishTime = -1
        if (stat.easyScore) {
          score = stat.easyScore
          dessert = stat.easyDessert
        } else if (stat.normalScore) {
          score = stat.normalScore
          dessert = stat.normalDessert
        } else if (stat.hardScore) {
          score = stat.hardScore
          dessert = stat.hardDessert
        } else if (stat.toxicScore) {
          score = stat.toxicScore
          dessert = stat.toxicDessert
        } else finishTime = stat.bestSpeedrun

        // Only increase the rank if the next user is not tied with the previous
        if (finishTime == -1) {
          if (lastScore != score || lastDessert != dessert) rank = i + 1
        } else if (lastFinishTime != finishTime) rank = i + 1

        lastScore = score
        lastDessert = dessert
        lastFinishTime = finishTime

        let className = ''
        if (rank == 1)
          className =
            'text-center font-cal text-6xl text-[color:var(--color-gold)]'
        else if (rank == 2)
          className =
            'text-center font-cal text-6xl text-[color:var(--color-silver)]'
        else if (rank == 3)
          className =
            'text-center font-cal text-6xl text-[color:var(--color-bronze)]'
        else
          className =
            'text-center font-cal text-6xl text-[color:var(--color-nature)]'

        if (finishTime == -1)
          return (
            <p key={i} className={className}>
              {rank}. {stat.name}: {score} ({dessert})
            </p>
          )
        else {
          let [hours, minutes, seconds] = SToHMS(finishTime)
          if (seconds < 10) seconds = '0' + seconds
          if (minutes < 10) minutes = '0' + minutes

          return (
            <p key={i} className={className}>
              {rank}. {stat.name}: {hours}:{minutes}:{seconds}
            </p>
          )
        }
      })}
    </div>
  )
}
