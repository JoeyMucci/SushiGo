import Blinker from 'web/src/components/Blinker/Blinker.jsx'

export const QUERY = gql`
  query FindResumeQuery($id: Int!) {
    resume: getResume(id: $id) {
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
      easyClear
      normalClear
      hardClear
      makiClear
      temakiClear
      uramakiClear
      chopsticksClear
      spoonClear
      menuClear
      takeoutBoxClear
      wasabiClear
      teaClear
      soysauceClear
      specialOrderClear
      dumplingClear
      tempuraClear
      sashimiClear
      misoSoupClear
      edamameClear
      eelClear
      tofuClear
      onigiriClear
      puddingClear
      gticClear
      fruitClear
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ resume }) => {
  let progress = 0

  // Seasoned competitor is achieved after winning on all three available difficulties
  let seasonedCompetitor =
    resume.easyClear && resume.normalClear && resume.hardClear

  // Mature palate is achieved after winning with each card
  let maturePalate =
    resume.makiClear &&
    resume.temakiClear &&
    resume.uramakiClear &&
    resume.chopsticksClear &&
    resume.spoonClear &&
    resume.menuClear &&
    resume.takeoutBoxClear &&
    resume.wasabiClear &&
    resume.teaClear &&
    resume.soysauceClear &&
    resume.specialOrderClear &&
    resume.dumplingClear &&
    resume.tempuraClear &&
    resume.sashimiClear &&
    resume.misoSoupClear &&
    resume.edamameClear &&
    resume.eelClear &&
    resume.tofuClear &&
    resume.onigiriClear &&
    resume.puddingClear &&
    resume.gticClear &&
    resume.fruitClear

  // 25 achievements, so each achievement counts for 4% towards completion
  for (let bool of [
    resume.modestMaki,
    resume.longTermPlayer,
    resume.speedEater,
    resume.forkForgetter,
    resume.sushiThief,
    resume.demandingCustomer,
    resume.leftoverLover,
    resume.wasabiWarrior,
    resume.teaTime,
    resume.soysauceSavant,
    resume.goingForSeconds,
    resume.dumplingDisciple,
    resume.tempuraTitan,
    resume.sashimiSensei,
    resume.misoMaster,
    resume.edamameExpert,
    resume.unlikelyFriendship,
    resume.onigiriGuru,
    resume.greenTeaEightCream,
    resume.fruitFiend,
    resume.sushiLow,
    resume.flashOfBrilliance,
    resume.headChef,
    seasonedCompetitor,
    maturePalate,
  ])
    if (bool) progress += 4

  return (
    <>
      <p className="text-center font-cal text-6xl text-[color:var(--color-nature)]">
        Achievements
      </p>
      <div className="flex flex-row items-center justify-center">
        <label
          htmlFor="achievements"
          className="font-cal text-2xl text-[color:var(--color-nature)]"
        >
          Progress
        </label>
        <progress
          id="achievements"
          value={progress}
          max="100"
          className="mx-2"
        />
        <span className="font-cal text-2xl text-[color:var(--color-nature)]">
          {progress}%
        </span>
      </div>
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
      <Blinker
        achName="Speed Eater"
        achDescription="Score from uramaki within the first 2 cards played in all 3 rounds of a game"
        isCompleted={resume.speedEater}
      />
      <Blinker
        achName="Fork Forgetter"
        achDescription="Use chopsticks at least 4 times in a game"
        isCompleted={resume.forkForgetter}
      />
      <Blinker
        achName="Sushi Thief"
        achDescription="Request successfully with a spoon at least 4 times in a game, without requesting unsuccessfully"
        isCompleted={resume.sushiThief}
      />
      <Blinker
        achName="Demanding Customer"
        achDescription="Use menu at least 4 times in a game"
        isCompleted={resume.demandingCustomer}
      />
      <Blinker
        achName="Leftover Lover"
        achDescription="Use takeout box to takeout at least one item at least 4 times in a game"
        isCompleted={resume.leftoverLover}
      />
      <Blinker
        achName="Wasabi Warrior"
        achDescription="Score at least 40 points from wasabi/nigiri combos in a game"
        isCompleted={resume.wasabiWarrior}
      />
      <Blinker
        achName="Tea Time"
        achDescription="Score at least 6 points from a single tea card"
        isCompleted={resume.teaTime}
      />
      <Blinker
        achName="Soysauce Savant"
        achDescription="Score at least 12 points from soysauce in a round"
        isCompleted={resume.soysauceSavant}
      />
      <Blinker
        achName="Going for Seconds"
        achDescription="Use special order on the same card 3 times in a round"
        isCompleted={resume.goingForSeconds}
      />
      <Blinker
        achName="Dumpling Disciple"
        achDescription="Score 45 points from dumpling in a game"
        isCompleted={resume.dumplingDisciple}
      />
      <Blinker
        achName="Tempura Titan"
        achDescription="Score at least 15 points from tempura in a round"
        isCompleted={resume.tempuraTitan}
      />
      <Blinker
        achName="Sashimi Sensei"
        achDescription="Score at least 20 points from sashimi in a round"
        isCompleted={resume.sashimiSensei}
      />
      <Blinker
        achName="Miso Master"
        achDescription="Play miso at least 6 times in a game without failing"
        isCompleted={resume.misoMaster}
      />
      <Blinker
        achName="Edamame Expert"
        achDescription="Score at least 15 points from edamame in a round"
        isCompleted={resume.edamameExpert}
      />
      <Blinker
        achName="An Unlikely Friendship"
        achDescription="Score 39 points from tofu/eel in a game"
        isCompleted={resume.unlikelyFriendship}
      />
      <Blinker
        achName="Onigiri Guru"
        achDescription="Score a complete set of onigiri in all 3 rounds of a game"
        isCompleted={resume.onigiriGuru}
      />
      <Blinker
        achName="Green Tea Eight Cream"
        achDescription="Score at least 24 points from green tea ice cream in a game"
        isCompleted={resume.greenTeaEightCream}
      />
      <Blinker
        achName="Fruit Fiend"
        achDescription="Score 30 points from fruit in a game"
        isCompleted={resume.fruitFiend}
      />
      <Blinker
        achName="Sushi Low"
        achDescription="Score less than 0 points in a game"
        isCompleted={resume.sushiLow}
      />
      <Blinker
        achName="Flash of Brilliance"
        achDescription="Score at least 30 points in a round and place last in the game"
        isCompleted={resume.flashOfBrilliance}
      />
      <Blinker
        achName="Head Chef"
        achDescription="Score at least 80 points in a game"
        isCompleted={resume.headChef}
      />
      <Blinker
        achName="Seasoned Competitor"
        achDescription="Win on easy, normal, and hard difficulty"
        isCompleted={seasonedCompetitor}
      />
      <Blinker
        achName="Mature Palate"
        achDescription="Win with every card on any difficulty"
        isCompleted={maturePalate}
      />
    </>
  )
}
