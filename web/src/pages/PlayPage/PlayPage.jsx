import chopsticks from 'web/public/chopsticks.jpg'
import dumpling from 'web/public/dumplingguide.jpg'
import edamame from 'web/public/edamameguide.jpg'
import eel from 'web/public/eelguide.jpg'
import fruit from 'web/public/fruit.jpg'
import greenteaicecream from 'web/public/gticguide.jpg'
import maki from 'web/public/maki.jpg'
import menu from 'web/public/menu.jpg'
import misosoup from 'web/public/misoguide.jpg'
import onigiri from 'web/public/onigiri.jpg'
import pudding from 'web/public/puddingguide.jpg'
import sashimi from 'web/public/sashimiguide.jpg'
import soysauce from 'web/public/soysauceguide.jpg'
import specialorder from 'web/public/specialguide.jpg'
import spoon from 'web/public/spoon.jpg'
import takeoutbox from 'web/public/takeout_box.jpg'
import tea from 'web/public/teaguide.jpg'
import temaki from 'web/public/temakiguide.jpg'
import tempura from 'web/public/tempuraguide.jpg'
import tofu from 'web/public/tofuguide.jpg'
import uramaki from 'web/public/uramaki.jpg'
import wasabi from 'web/public/wasabiguide.jpg'

import { Label, Form, CheckboxField, Submit } from '@redwoodjs/forms'

const PlayPage = () => {
  const screens = Object.freeze({
    SELECTION: 1,
    GAME: 2,
  })

  const SelectionScreen = () => {
    const ROLLCAP = 1
    const SPECCAP = 2
    const APPCAP = 3
    const DESSCAP = 1
    const DIFFCAP = 1

    const BUTTONCLASS =
      'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)]'

    let order = {
      roll: [],
      spec: [],
      app: [],
      dess: [],
      diff: [],
    }

    let allowSelection = false

    const changeSelectionToGame = () => {
      if (allowSelection) {
        document.getElementsByName(screens.SELECTION.toString())[0].className =
          'hidden'
        document.getElementsByName(screens.GAME.toString())[0].className = ''
      }
    }

    // Populates order, which tracks what cards are being used in the game
    // Also limits the user from entering too many of a particular card type
    // Finally, updates the opacity variable and allows submission if everything is full
    const registerSelection = (e) => {
      let orderList = []
      let cap = 0

      if (e.target.name == 'roll') {
        orderList = order.roll
        cap = ROLLCAP
      } else if (e.target.name == 'spec') {
        orderList = order.spec
        cap = SPECCAP
      } else if (e.target.name == 'app') {
        orderList = order.app
        cap = APPCAP
      } else if (e.target.name == 'dess') {
        orderList = order.dess
        cap = DESSCAP
      } else {
        orderList = order.diff
        cap = DIFFCAP
      }

      if (orderList.includes(e.target.id))
        orderList.splice(orderList.indexOf(e.target.id), 1)
      else if (orderList.length < cap) orderList.push(e.target.id)
      else e.target.checked = false

      // Show the difficulty button fully if it is selected
      if (e.target.name == 'diff')
        if (e.target.checked)
          document.getElementsByName(e.target.id)[0].className = BUTTONCLASS
        else
          document.getElementsByName(e.target.id)[0].className =
            BUTTONCLASS + ' opacity-50'

      // If all the info is selected, show START button fully and allow submission
      if (
        order.roll.length == ROLLCAP &&
        order.spec.length == SPECCAP &&
        order.app.length == APPCAP &&
        order.dess.length == DESSCAP &&
        order.diff.length == DIFFCAP
      ) {
        document.getElementsByName('START')[0].className = BUTTONCLASS
        allowSelection = true
      } else {
        document.getElementsByName('START')[0].className =
          BUTTONCLASS + ' opacity-50'
        allowSelection = false
      }
    }

    return (
      <>
        <p className="text-center font-cal text-6xl text-[color:var(--color-nature)]">
          Choose Your Meal
        </p>
        <p className="text-center font-cal text-2xl text-[color:var(--color-nature)]">
          {ROLLCAP} roll, {SPECCAP} specials, {APPCAP} appetizers, {DESSCAP}{' '}
          dessert
        </p>
        <Form onSubmit={changeSelectionToGame}>
          <div className="flex flex-col items-center">
            <div className="flex flex-row">
              <Label className="m-2">
                <CheckboxField
                  id="maki"
                  name="roll"
                  onChange={registerSelection}
                />
                <img src={maki} alt="maki roll" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="temaki"
                  name="roll"
                  onChange={registerSelection}
                />
                <img src={temaki} alt="temaki roll" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="uramaki"
                  name="roll"
                  onChange={registerSelection}
                />
                <img src={uramaki} alt="uramaki roll" className="h-48 w-36" />
              </Label>
            </div>
            <div className="flex flex-row">
              <Label className="m-2">
                <CheckboxField
                  id="chopsticks"
                  name="spec"
                  onChange={registerSelection}
                />
                <img src={chopsticks} alt="chopsticks" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="spoon"
                  name="spec"
                  onChange={registerSelection}
                />
                <img src={spoon} alt="spoon" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="menu"
                  name="spec"
                  onChange={registerSelection}
                />
                <img src={menu} alt="menu" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="takeoutbox"
                  name="spec"
                  onChange={registerSelection}
                />
                <img src={takeoutbox} alt="takeout box" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="tea"
                  name="spec"
                  onChange={registerSelection}
                />
                <img src={tea} alt="tea" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="wasabi"
                  name="spec"
                  onChange={registerSelection}
                />
                <img src={wasabi} alt="wasabi" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="soysauce"
                  name="spec"
                  onChange={registerSelection}
                />
                <img src={soysauce} alt="soysauce" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="specialorder"
                  name="spec"
                  onChange={registerSelection}
                />
                <img
                  src={specialorder}
                  alt="special order"
                  className="h-48 w-36"
                />
              </Label>
            </div>
            <div className="flex flex-row">
              <Label className="m-2">
                <CheckboxField
                  id="dumpling"
                  name="app"
                  onChange={registerSelection}
                />
                <img src={dumpling} alt="dumpling" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="tempura"
                  name="app"
                  onChange={registerSelection}
                />
                <img src={tempura} alt="tempura" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="sashimi"
                  name="app"
                  onChange={registerSelection}
                />
                <img src={sashimi} alt="sashimi" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="misosoup"
                  name="app"
                  onChange={registerSelection}
                />
                <img src={misosoup} alt="miso soup" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="edamame"
                  name="app"
                  onChange={registerSelection}
                />
                <img src={edamame} alt="edamame" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="eel"
                  name="app"
                  onChange={registerSelection}
                />
                <img src={eel} alt="eel" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="tofu"
                  name="app"
                  onChange={registerSelection}
                />
                <img src={tofu} alt="tofu" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="onigiri"
                  name="app"
                  onChange={registerSelection}
                />
                <img src={onigiri} alt="onigiri" className="h-48 w-36" />
              </Label>
            </div>
            <div className="flex flex-row">
              <Label className="m-2">
                <CheckboxField
                  id="pudding"
                  name="dess"
                  onChange={registerSelection}
                />
                <img src={pudding} alt="pudding" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="greenteaicecream"
                  name="dess"
                  onChange={registerSelection}
                />
                <img
                  src={greenteaicecream}
                  alt="green tea ice cream"
                  className="h-48 w-36"
                />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="fruit"
                  name="dess"
                  onChange={registerSelection}
                />
                <img src={fruit} alt="fruit" className="h-48 w-36" />
              </Label>
            </div>
            <div className="flex flex-row">
              <Label className="m-2">
                <CheckboxField
                  id="easy"
                  name="diff"
                  onChange={registerSelection}
                />
                <p
                  name="easy"
                  className="rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)] opacity-50"
                >
                  Easy
                </p>
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="normal"
                  name="diff"
                  onChange={registerSelection}
                />
                <p
                  name="normal"
                  className="rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)] opacity-50"
                >
                  Normal
                </p>
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="hard"
                  name="diff"
                  onChange={registerSelection}
                />
                <p
                  name="hard"
                  className="rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)] opacity-50"
                >
                  Hard
                </p>
              </Label>
            </div>
            <Submit
              name="START"
              className="rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)] opacity-50"
            >
              START
            </Submit>
            <br></br>
            <br></br>
          </div>
        </Form>
      </>
    )
  }

  const GameScreen = () => {
    return <p>PPP</p>
  }

  return (
    <>
      <div name={screens.SELECTION}>
        <SelectionScreen className="" />
      </div>
      <div name={screens.GAME} className="hidden">
        <GameScreen className="hidden" />
      </div>
    </>
  )
}

export default PlayPage
