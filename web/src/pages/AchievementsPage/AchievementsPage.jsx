import Blinker from 'web/src/components/Blinker/Blinker.jsx'
import ResumeCell from 'web/src/components/ResumeCell/ResumeCell.jsx'

import { useAuth } from 'src/auth'

const AchievementsPage = () => {
  const { isAuthenticated, currentUser, loading } = useAuth()

  if (loading) {
    return <></>
  }

  if (!isAuthenticated)
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
          <progress id="achievements" value={0} max="100" className="mx-2" />
          <span className="font-cal text-2xl text-[color:var(--color-nature)]">
            {0}%
          </span>
        </div>
        <p className="text-center font-cal text-xl text-[color:var(--color-nature)]">
          Cannot get achievements without account
        </p>
        <Blinker
          achName="Modest Maki"
          achDescription="Get 2nd place for maki in all 3 rounds of a game"
          isCompleted={false}
        />
        <Blinker
          achName="Long Term Player"
          achDescription="Score 18 points from temaki/pudding in a game"
          isCompleted={false}
        />
        <Blinker
          achName="Speed Eater"
          achDescription="Score from uramaki within the first 2 cards played in all 3 rounds of a game"
          isCompleted={false}
        />
        <Blinker
          achName="Fork Forgetter"
          achDescription="Use chopsticks at least 4 times in a game"
          isCompleted={false}
        />
        <Blinker
          achName="Sushi Thief"
          achDescription="Request successfully with a spoon at least 4 times in a game, without requesting unsuccessfully"
          isCompleted={false}
        />
        <Blinker
          achName="Demanding Customer"
          achDescription="Use menu at least 4 times in a game"
          isCompleted={false}
        />
        <Blinker
          achName="Leftover Lover"
          achDescription="Use takeout box to takeout at least one item at least 4 times in a game"
          isCompleted={false}
        />
        <Blinker
          achName="Wasabi Warrior"
          achDescription="Score at least 40 points from wasabi/nigiri combos in a game"
          isCompleted={false}
        />
        <Blinker
          achName="Tea Time"
          achDescription="Score at least 6 points from a single tea card"
          isCompleted={false}
        />
        <Blinker
          achName="Soysauce Savant"
          achDescription="Score at least 12 points from soysauce in a round"
          isCompleted={false}
        />
        <Blinker
          achName="Going for Seconds"
          achDescription="Use special order on the same card 3 times in a round"
          isCompleted={false}
        />
        <Blinker
          achName="Dumpling Disciple"
          achDescription="Score 45 points from dumpling in a game"
          isCompleted={false}
        />
        <Blinker
          achName="Tempura Titan"
          achDescription="Score at least 15 points from tempura in a round"
          isCompleted={false}
        />
        <Blinker
          achName="Sashimi Sensei"
          achDescription="Score at least 20 points from sashimi in a round"
          isCompleted={false}
        />
        <Blinker
          achName="Miso Master"
          achDescription="Play miso at least 6 times in a game without failing"
          isCompleted={false}
        />
        <Blinker
          achName="Edamame Expert"
          achDescription="Score at least 15 points from edamame in a round"
          isCompleted={false}
        />
        <Blinker
          achName="An Unlikely Friendship"
          achDescription="Score 39 points from tofu/eel in a game"
          isCompleted={false}
        />
        <Blinker
          achName="Onigiri Guru"
          achDescription="Score a complete set of onigiri in all 3 rounds of a game"
          isCompleted={false}
        />
        <Blinker
          achName="Green Tea Eight Cream"
          achDescription="Score at least 24 points from green tea ice cream in a game"
          isCompleted={false}
        />
        <Blinker
          achName="Fruit Fiend"
          achDescription="Score 30 points from fruit in a game"
          isCompleted={false}
        />
        <Blinker
          achName="Sushi Low"
          achDescription="Score less than 0 points in a game"
          isCompleted={false}
        />
        <Blinker
          achName="Flash of Brilliance"
          achDescription="Score at least 30 points in a round and place last in the game"
          isCompleted={false}
        />
        <Blinker
          achName="Head Chef"
          achDescription="Score at least 80 points in a game"
          isCompleted={false}
        />
        <Blinker
          title={'Still needed: easy, medium, hard'}
          achName="Seasoned Competitor"
          achDescription="Win on easy, normal, and hard difficulty"
          isCompleted={false}
        />
        <Blinker
          title={
            'Still needed: maki, temaki, uramaki, chopsticks, spoon, menu, takeout box, tea, wasabi, soysauce, special order, dumpling, tempura, sashimi, miso soup, edamame, eel, tofu, onigiri, pudding, green tea ice cream, fruit'
          }
          achName="Mature Palate"
          achDescription="Win with every card on any difficulty"
          isCompleted={false}
        />
      </>
    )

  let currentId = currentUser.id

  return (
    <>
      <ResumeCell id={currentId} />
    </>
  )
}

export default AchievementsPage
