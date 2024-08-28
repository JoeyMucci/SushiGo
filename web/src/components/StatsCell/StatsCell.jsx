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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ stats }) => {
  return (
    <div className="flex flex-col space-y-10 p-5">
      {stats.map((stat, i) => {
        return <p key={i}>{stat.easyScore}</p>
      })}
    </div>
  )
}
