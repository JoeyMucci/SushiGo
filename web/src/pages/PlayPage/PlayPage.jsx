import chopsticks1 from 'web/public/chopsticks(1).jpg'
import chopsticks2 from 'web/public/chopsticks(2).jpg'
import chopsticks3 from 'web/public/chopsticks(3).jpg'
import chopsticks from 'web/public/chopsticks.jpg'
import dumpling from 'web/public/dumpling.jpg'
import dumplingguide from 'web/public/dumplingguide.jpg'
import edamame from 'web/public/edamame.jpg'
import edamameguide from 'web/public/edamameguide.jpg'
import eel from 'web/public/eel.jpg'
import eelguide from 'web/public/eelguide.jpg'
import eggnigiri from 'web/public/egg_nigiri.jpg'
import fruitdoubleorange from 'web/public/fruit(double_orange).jpg'
import fruitdoublepineapple from 'web/public/fruit(double_pineapple).jpg'
import fruitdoublewatermelon from 'web/public/fruit(double_watermelon).jpg'
import fruitpineappleorange from 'web/public/fruit(pineapple_orange).jpg'
import fruitwatermelonorange from 'web/public/fruit(watermelon_orange).jpg'
import fruitwatermelonpineapple from 'web/public/fruit(watermelon_pineapple).jpg'
import fruit from 'web/public/fruit.jpg'
import greenteaicecream from 'web/public/green_tea_ice_cream.jpg'
import gticguide from 'web/public/gticguide.jpg'
import maki1 from 'web/public/maki(1).jpg'
import maki2 from 'web/public/maki(2).jpg'
import maki3 from 'web/public/maki(3).jpg'
import maki from 'web/public/maki.jpg'
import menu7 from 'web/public/menu(7).jpg'
import menu8 from 'web/public/menu(8).jpg'
import menu9 from 'web/public/menu(9).jpg'
import menu from 'web/public/menu.jpg'
import misosoup from 'web/public/miso_soup.jpg'
import misoguide from 'web/public/misoguide.jpg'
import onigiricircle from 'web/public/onigiri(circle).jpg'
import onigiriflat from 'web/public/onigiri(flat).jpg'
import onigirisquare from 'web/public/onigiri(square).jpg'
import onigiritriangle from 'web/public/onigiri(triangle).jpg'
import onigiri from 'web/public/onigiri.jpg'
import pudding from 'web/public/pudding.jpg'
import puddingguide from 'web/public/puddingguide.jpg'
import salmonnigiri from 'web/public/salmon_nigiri.jpg'
import sashimi from 'web/public/sashimi.jpg'
import sashimiguide from 'web/public/sashimiguide.jpg'
import soysauce from 'web/public/soysauce.jpg'
import soysauceguide from 'web/public/soysauceguide.jpg'
import specialorder from 'web/public/special_order.jpg'
import specialguide from 'web/public/specialguide.jpg'
import spoon4 from 'web/public/spoon(4).jpg'
import spoon5 from 'web/public/spoon(5).jpg'
import spoon6 from 'web/public/spoon(6).jpg'
import spoon from 'web/public/spoon.jpg'
import squidnigiri from 'web/public/squid_nigiri.jpg'
import takeoutbox10 from 'web/public/takeout_box(10).jpg'
import takeoutbox11 from 'web/public/takeout_box(11).jpg'
import takeoutbox12 from 'web/public/takeout_box(12).jpg'
import takeoutbox from 'web/public/takeout_box.jpg'
import tea from 'web/public/tea.jpg'
import teaguide from 'web/public/teaguide.jpg'
import temaki from 'web/public/temaki.jpg'
import temakiguide from 'web/public/temakiguide.jpg'
import tempura from 'web/public/tempura.jpg'
import tempuraguide from 'web/public/tempuraguide.jpg'
import tofu from 'web/public/tofu.jpg'
import tofuguide from 'web/public/tofuguide.jpg'
import turnedovercard from 'web/public/turned_over_card.jpg'
import uramaki3 from 'web/public/uramaki(3).jpg'
import uramaki4 from 'web/public/uramaki(4).jpg'
import uramaki5 from 'web/public/uramaki(5).jpg'
import uramaki from 'web/public/uramaki.jpg'
import wasabi from 'web/public/wasabi.jpg'
import wasabiguide from 'web/public/wasabiguide.jpg'

import { Label, Form, CheckboxField, Submit } from '@redwoodjs/forms'

const PlayPage = () => {
  const screens = Object.freeze({
    SELECTION: 1,
    GAME: 2,
  })

  const types = Object.freeze({
    EGG: 1,
    SALMON: 2,
    SQUID: 3,
    MAKIONE: 4,
    MAKITWO: 5,
    MAKITHREE: 6,
    TEMAKI: 7,
    URAMAKITHREE: 8,
    URAMAKIFOUR: 9,
    URAMAKIFIVE: 10,
    CHOPSTICKSONE: 11,
    CHOPSTICKSTWO: 12,
    CHOPSTICKSTHREE: 13,
    SPOONFOUR: 14,
    SPOONFIVE: 15,
    SPOONSIX: 16,
    MENUSEVEN: 17,
    MENUEIGHT: 18,
    MENUNINE: 19,
    TAKEOUTTEN: 20,
    TAKEOUTELEVEN: 21,
    TAKEOUTTWELVE: 22,
    TEA: 23,
    WASABI: 24,
    SOYSAUCE: 25,
    SPECIALO: 26,
    DUMPLING: 27,
    TEMPURA: 28,
    SASHIMI: 29,
    MISO: 30,
    EDAMAME: 31,
    EEL: 32,
    TOFU: 33,
    ONICIRCLE: 34,
    ONISQUARE: 35,
    ONITRI: 36,
    ONIFLAT: 37,
    PUDDING: 38,
    GTIC: 39,
    FRUITDUBWAT: 40,
    FRUITDUBPINE: 41,
    FRUITDUBO: 42,
    FRUITWATERO: 43,
    FRUITPINEO: 44,
    FRUITWATERPINE: 45,
  })

  let order = {
    roll: [],
    spec: [],
    app: [],
    dess: [],
    diff: [],
  }

  const SelectionScreen = () => {
    const ROLLCAP = 1
    const SPECCAP = 2
    const APPCAP = 3
    const DESSCAP = 1
    const DIFFCAP = 1

    const BUTTONCLASS =
      'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)]'

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
                <img
                  src={temakiguide}
                  alt="temaki roll"
                  className="h-48 w-36"
                />
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
                <img src={teaguide} alt="tea" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="wasabi"
                  name="spec"
                  onChange={registerSelection}
                />
                <img src={wasabiguide} alt="wasabi" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="soysauce"
                  name="spec"
                  onChange={registerSelection}
                />
                <img src={soysauceguide} alt="soysauce" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="specialorder"
                  name="spec"
                  onChange={registerSelection}
                />
                <img
                  src={specialguide}
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
                <img src={dumplingguide} alt="dumpling" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="tempura"
                  name="app"
                  onChange={registerSelection}
                />
                <img src={tempuraguide} alt="tempura" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="sashimi"
                  name="app"
                  onChange={registerSelection}
                />
                <img src={sashimiguide} alt="sashimi" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="misosoup"
                  name="app"
                  onChange={registerSelection}
                />
                <img src={misoguide} alt="miso soup" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="edamame"
                  name="app"
                  onChange={registerSelection}
                />
                <img src={edamameguide} alt="edamame" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="eel"
                  name="app"
                  onChange={registerSelection}
                />
                <img src={eelguide} alt="eel" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="tofu"
                  name="app"
                  onChange={registerSelection}
                />
                <img src={tofuguide} alt="tofu" className="h-48 w-36" />
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
                <img src={puddingguide} alt="pudding" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="greenteaicecream"
                  name="dess"
                  onChange={registerSelection}
                />
                <img
                  src={gticguide}
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
    let player = {
      cards: [1, 2, 3],
      score: 0,
      dessert: 0,
    }

    const Hand = ({ cardTypes }) => {
      const Card = ({ type }) => {
        let picpath
        let text
        switch (type) {
          case types.EGG:
            picpath = eggnigiri
            text = 'egg nigiri'
            break
          case types.SALMON:
            picpath = salmonnigiri
            text = 'salmon nigiri'
            break
          case types.SQUID:
            picpath = squidnigiri
            text = 'squid nigiri'
            break
          case types.MAKIONE:
            picpath = maki1
            text = 'one maki roll'
            break
          case types.MAKITWO:
            picpath = maki2
            text = 'two maki rolls'
            break
          case types.MAKITHREE:
            picpath = maki3
            text = 'three maki rolls'
            break
          case types.TEMAKI:
            picpath = temaki
            text = 'temaki'
            break
          case types.URAMAKITHREE:
            picpath = uramaki3
            text = 'three uramaki rolls'
            break
          case types.URAMAKIFOUR:
            picpath = uramaki4
            text = 'four uramaki rolls'
            break
          case types.URAMAKIFIVE:
            picpath = uramaki5
            text = 'five uramaki rolls'
            break
          case types.CHOPSTICKSONE:
            picpath = chopsticks1
            text = 'chopsticks'
            break
          case types.CHOPSTICKSTWO:
            picpath = chopsticks2
            text = 'chopsticks'
            break
          case types.CHOPSTICKSTHREE:
            picpath = chopsticks3
            text = 'chopsticks'
            break
          case types.SPOONFOUR:
            picpath = spoon4
            text = 'spoon'
            break
          case types.SPOONFIVE:
            picpath = spoon5
            text = 'spoon'
            break
          case types.SPOONSIX:
            picpath = spoon6
            text = 'spoon'
            break
          case types.MENUSEVEN:
            picpath = menu7
            text = 'menu'
            break
          case types.MENUEIGHT:
            picpath = menu8
            text = 'menu'
            break
          case types.MENUNINE:
            picpath = menu9
            text = 'menu'
            break
          case types.TAKEOUTTEN:
            picpath = takeoutbox10
            text = 'takeout box'
            break
          case types.TAKEOUTELEVEN:
            picpath = takeoutbox11
            text = 'takeout box'
            break
          case types.TAKEOUTTWELVE:
            picpath = takeoutbox12
            text = 'takeout box'
            break
          case types.TEA:
            picpath = tea
            text = 'tea'
            break
          case types.WASABI:
            picpath = wasabi
            text = 'wasabi'
            break
          case types.SOYSAUCE:
            picpath = soysauce
            text = 'soysauce'
            break
          case types.SPECIALO:
            picpath = specialorder
            text = 'special order'
            break
          case types.DUMPLING:
            picpath = dumpling
            text = 'dumpling'
            break
          case types.TEMPURA:
            picpath = tempura
            text = 'tempura'
            break
          case types.SASHIMI:
            picpath = sashimi
            text = 'sashimi'
            break
          case types.MISO:
            picpath = misosoup
            text = 'miso soup'
            break
          case types.EDAMAME:
            picpath = edamame
            text = 'edamame'
            break
          case types.EEL:
            picpath = eel
            text = 'eel'
            break
          case types.TOFU:
            picpath = tofu
            text = 'tofu'
            break
          case types.ONICIRCLE:
            picpath = onigiricircle
            text = 'circle onigiri'
            break
          case types.ONISQUARE:
            picpath = onigirisquare
            text = 'square onigiri'
            break
          case types.ONITRI:
            picpath = onigiritriangle
            text = 'triangle onigiri'
            break
          case types.ONIFLAT:
            picpath = onigiriflat
            text = 'flat onigiri'
            break
          case types.PUDDING:
            picpath = pudding
            text = 'pudding'
            break
          case types.GTIC:
            picpath = greenteaicecream
            text = 'green tea ice cream'
            break
          case types.FRUITDUBWAT:
            picpath = fruitdoublewatermelon
            text = 'two watermelons'
            break
          case types.FRUITDUBPINE:
            picpath = fruitdoublepineapple
            text = 'two pineapples'
            break
          case types.FRUITDUBO:
            picpath = fruitdoubleorange
            text = 'two oranges'
            break
          case types.FRUITWATERO:
            picpath = fruitwatermelonorange
            text = 'one watermelon and one orange'
            break
          case types.FRUITPINEO:
            picpath = fruitpineappleorange
            text = 'one pineapple and one orange'
            break
          case types.FRUITWATERPINE:
            picpath = fruitwatermelonpineapple
            text = 'one watermlon and one pineapple'
            break
          case types.TOC:
            picpath = turnedovercard
            text = 'turned over card'
        }

        return <img src={picpath} alt={text} className="h-36 w-24" />
      }

      return (
        <div className="flex basis-1/2 flex-row items-center justify-center">
          {cardTypes.map((cardType, i) => {
            return <Card key={i} type={cardType} />
          })}
        </div>
      )
    }

    return (
      <>
        <div className="flex h-screen flex-col">
          <div className="flex basis-1/4 flex-row">
            <p className="w-1/2 text-center font-cal text-2xl text-[color:var(--color-nature)]">
              Score: {player.score}
            </p>
            <p className="w-1/2 text-center font-cal text-2xl text-[color:var(--color-nature)]">
              Score: {player.score}
            </p>
          </div>
          <div className="flex basis-1/4 flex-row">
            <p className="w-1/2 text-center font-cal text-2xl text-[color:var(--color-nature)]">
              Dessert: {player.dessert}
            </p>
            <p className="w-1/2 text-center font-cal text-2xl text-[color:var(--color-nature)]">
              Dessert: {player.dessert}
            </p>
          </div>
          <Hand cardTypes={player.cards} />
        </div>
      </>
    )
  }

  return (
    <>
      <div name={screens.SELECTION} className="hidden">
        <SelectionScreen />
      </div>
      <div name={screens.GAME} className="">
        <GameScreen />
      </div>
    </>
  )
}

export default PlayPage
