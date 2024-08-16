import Blinker from 'web/src/components/Blinker/Blinker.jsx'

export const QUERY = gql`
  query FindResumeQuery($email: String!) {
    resume: getResume(email: $email) {
      modestMaki
      longTermPlayer
      speedEater
      forkForgetter
      sushiThief
      demandingCustomer
      leftoverLover
      wasabiWarrior
      teaTime
      soysauceSavant
      goingForSeconds
      dumplingDisciple
      tempuraTitan
      sashimiSensei
      misoMaster
      edamameExpert
      unlikelyFriendship
      onigiriGuru
      greenTeaEightCream
      fruitFiend
      sushiLow
      flashOfBrilliance
      headChef
      seasonedCompetitor
      maturePalate
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ resume }) => {
  console.log(resume)
  return (
    <>
      <Blinker
        achName="Modest Maki"
        achDescription="Get 2nd place for maki in all 3 rounds of a game"
        isCompleted={resume.modestMaki}
      />
      <Blinker
        achName="Long Term Player"
        achDescription="Score 18 points from temaki/pudding in a game"
        isCompleted={resume.longTermPlayer}
      />
    </>
  )
}
