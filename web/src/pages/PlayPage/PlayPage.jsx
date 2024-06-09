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

export const SelectionScreen = () => {
  const ROLLCAP = 1
  const SPECCAP = 3
  const APPCAP = 3
  const DESSCAP = 1

  let order = {
    roll: [],
    spec: [],
    app: [],
    dess: [],
  }

  // Populates order, which tracks what cards are being used in the game
  // Also limits the user from entering too many of a particular card type
  // Finally, updates the opacity variable if everything is full
  const registerSelection = (e) => {
    let orderList = []
    let cap = 0

    if (e.target.name == 'Roll') {
      orderList = order.roll
      cap = ROLLCAP
    } else if (e.target.name == 'Spec') {
      orderList = order.spec
      cap = SPECCAP
    } else if (e.target.name == 'App') {
      orderList = order.app
      cap = APPCAP
    } else {
      orderList = order.dess
      cap = DESSCAP
    }

    if (orderList.includes(e.target.id))
      orderList.splice(orderList.indexOf(e.target.id), 1)
    else if (orderList.length < cap) orderList.push(e.target.id)
    else e.target.checked = false

    // If all the info is selected, show START button fully, otherwise show it transparently
    if (
      order.roll.length == ROLLCAP &&
      order.spec.length == SPECCAP &&
      order.app.length == APPCAP &&
      order.dess.length == DESSCAP
    )
      document.getElementsByName('START')[0].className =
        'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)]'
    else
      document.getElementsByName('START')[0].className =
        'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)] opacity-50'
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
      <Form>
        <div className="flex flex-col items-center">
          <div className="flex flex-row">
            <Label className="m-2">
              <CheckboxField
                id="maki"
                name="Roll"
                onChange={registerSelection}
              />
              <img src={maki} alt="maki roll" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField
                id="temaki"
                name="Roll"
                onChange={registerSelection}
              />
              <img src={temaki} alt="temaki roll" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField
                id="uramaki"
                name="Roll"
                onChange={registerSelection}
              />
              <img src={uramaki} alt="uramaki roll" className="h-48 w-36" />
            </Label>
          </div>
          <div className="flex flex-row">
            <Label className="m-2">
              <CheckboxField
                id="chopsticks"
                name="Spec"
                onChange={registerSelection}
              />
              <img src={chopsticks} alt="chopsticks" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField
                id="spoon"
                name="Spec"
                onChange={registerSelection}
              />
              <img src={spoon} alt="spoon" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField
                id="menu"
                name="Spec"
                onChange={registerSelection}
              />
              <img src={menu} alt="menu" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField
                id="takeoutbox"
                name="Spec"
                onChange={registerSelection}
              />
              <img src={takeoutbox} alt="takeout box" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField
                id="tea"
                name="Spec"
                onChange={registerSelection}
              />
              <img src={tea} alt="tea" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField
                id="wasabi"
                name="Spec"
                onChange={registerSelection}
              />
              <img src={wasabi} alt="wasabi" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField
                id="soysauce"
                name="Spec"
                onChange={registerSelection}
              />
              <img src={soysauce} alt="soysauce" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField
                id="specialorder"
                name="Spec"
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
                name="App"
                onChange={registerSelection}
              />
              <img src={dumpling} alt="dumpling" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField
                id="tempura"
                name="App"
                onChange={registerSelection}
              />
              <img src={tempura} alt="tempura" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField
                id="sashimi"
                name="App"
                onChange={registerSelection}
              />
              <img src={sashimi} alt="sashimi" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField
                id="misosoup"
                name="App"
                onChange={registerSelection}
              />
              <img src={misosoup} alt="miso soup" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField
                id="edamame"
                name="App"
                onChange={registerSelection}
              />
              <img src={edamame} alt="edamame" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField id="eel" name="App" onChange={registerSelection} />
              <img src={eel} alt="eel" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField
                id="tofu"
                name="App"
                onChange={registerSelection}
              />
              <img src={tofu} alt="tofu" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField
                id="onigiri"
                name="App"
                onChange={registerSelection}
              />
              <img src={onigiri} alt="onigiri" className="h-48 w-36" />
            </Label>
          </div>
          <div className="flex flex-row">
            <Label className="m-2">
              <CheckboxField
                id="pudding"
                name="Dess"
                onChange={registerSelection}
              />
              <img src={pudding} alt="pudding" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField
                id="greenteaicecream"
                name="Dess"
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
                name="Dess"
                onChange={registerSelection}
              />
              <img src={fruit} alt="fruit" className="h-48 w-36" />
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

export const GameScreen = () => {
  return <p>PPP</p>
}

const PlayPage = () => {
  const screens = Object.freeze({
    SELECTION: 0,
    GAME: 1,
  })

  let screen = screens.SELECTION

  return (
    <>{screens.SELECTION - screen ? <GameScreen /> : <SelectionScreen />}</>
  )
}

export default PlayPage
