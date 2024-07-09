import { useState } from 'react'

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
import finalscore from 'web/public/finalscore.jpg'
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
import nextround from 'web/public/nextround.jpg'
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
import { pickComputerCard } from 'web/src/pages/PlayPage/ComputerActions.jsx'
import {
  countCard,
  scoreNigiri,
  scoreMaki,
  scoreTemaki,
  scoreLeftovers,
  scoreTea,
  scoreSoysauce,
  scoreDumpling,
  scoreTempura,
  scoreSashimi,
  scoreMiso,
  scoreEdamame,
  scoreEel,
  scoreTofu,
  scoreOnigiri,
  scorePudding,
  scoreGTIC,
  scoreFruit,
} from 'web/src/pages/PlayPage/Scoring.jsx'

import { Label, Form, CheckboxField, Submit } from '@redwoodjs/forms'
import { toast, Toaster } from '@redwoodjs/web/toast'

export const guides = Object.freeze({
  MAKI: {
    type: 1,
    picpath: maki,
    text: 'maki',
  },
  TEMAKI: {
    type: 2,
    picpath: temakiguide,
    text: 'temaki',
  },
  URAMAKI: {
    type: 3,
    picpath: uramaki,
    text: 'uramaki',
  },
  CHOPSTICKS: {
    type: 4,
    picpath: chopsticks,
    text: 'chopsticks',
  },
  SPOON: {
    type: 5,
    picpath: spoon,
    text: 'spoon',
  },
  MENU: {
    type: 6,
    picpath: menu,
    text: 'menu',
  },
  TAKEOUT: {
    type: 7,
    picpath: takeoutbox,
    text: 'takeout box',
  },
  TEA: {
    type: 8,
    picpath: teaguide,
    text: 'tea',
  },
  WASABI: {
    type: 9,
    picpath: wasabiguide,
    text: 'wasabi',
  },
  SOYSAUCE: {
    type: 10,
    picpath: soysauceguide,
    text: 'soysauce',
  },
  SPECIALO: {
    type: 11,
    picpath: specialguide,
    text: 'special order',
  },
  DUMPLING: {
    type: 12,
    picpath: dumplingguide,
    text: 'dumpling',
  },
  TEMPURA: {
    type: 13,
    picpath: tempuraguide,
    text: 'tempura',
  },
  SASHIMI: {
    type: 14,
    picpath: sashimiguide,
    text: 'sashimi',
  },
  MISO: {
    type: 15,
    picpath: misoguide,
    text: 'miso soup',
  },
  EDAMAME: {
    type: 16,
    picpath: edamameguide,
    text: 'edamame',
  },
  EEL: {
    type: 17,
    picpath: eelguide,
    text: 'eel',
  },
  TOFU: {
    type: 18,
    picpath: tofuguide,
    text: 'tofu',
  },
  ONIGIRI: {
    type: 19,
    picpath: onigiri,
    text: 'onigiri',
  },
  PUDDING: {
    type: 20,
    picpath: puddingguide,
    text: 'pudding',
  },
  GTIC: {
    type: 21,
    picpath: gticguide,
    text: 'green tea ice cream',
  },
  FRUIT: {
    type: 22,
    picpath: fruit,
    text: 'fruit',
  },
})

export const cards = Object.freeze({
  EGG: {
    type: 1,
    text: 'egg nigiri',
    picpath: eggnigiri,
    color: 'yellow',
    count: 4,
  },
  SALMON: {
    type: 2,
    text: 'salmon nigiri',
    picpath: salmonnigiri,
    color: 'yellow',
    count: 5,
  },
  SQUID: {
    type: 3,
    text: 'squid nigiri',
    picpath: squidnigiri,
    color: 'yellow',
    count: 3,
  },
  MAKIONE: {
    type: 4,
    text: 'one maki roll',
    picpath: maki1,
    color: 'red',
    count: 4,
  },
  MAKITWO: {
    type: 5,
    text: 'two maki rolls',
    picpath: maki2,
    color: 'red',
    count: 5,
  },
  MAKITHREE: {
    type: 6,
    text: 'three maki rolls',
    picpath: maki3,
    color: 'red',
    count: 3,
  },
  TEMAKI: {
    type: 7,
    text: 'temaki',
    picpath: temaki,
    color: 'plum',
    count: 12,
  },
  URAMAKITHREE: {
    type: 8,
    text: 'three uramaki rolls',
    picpath: uramaki3,
    color: 'lime',
    count: 4,
  },
  URAMAKIFOUR: {
    type: 9,
    text: 'four uramaki rolls',
    picpath: uramaki4,
    color: 'lime',
    count: 4,
  },
  URAMAKIFIVE: {
    type: 10,
    text: 'five uramaki rolls',
    picpath: uramaki5,
    color: 'lime',
    count: 4,
  },
  CHOPSTICKSONE: {
    type: 11,
    text: 'chopsticks',
    picpath: chopsticks1,
    color: 'sky blue',
    count: 1,
  },
  CHOPSTICKSTWO: {
    type: 12,
    text: 'chopsticks',
    picpath: chopsticks2,
    color: 'sky blue',
    count: 1,
  },
  CHOPSTICKSTHREE: {
    type: 13,
    text: 'chopsticks',
    picpath: chopsticks3,
    color: 'sky blue',
    count: 1,
  },
  SPOONFOUR: {
    type: 14,
    text: 'spoon',
    picpath: spoon4,
    color: 'gray',
    count: 1,
  },
  SPOONFIVE: {
    type: 15,
    text: 'spoon',
    picpath: spoon5,
    color: 'gray',
    count: 1,
  },
  SPOONSIX: {
    type: 16,
    text: 'spoon',
    picpath: spoon6,
    color: 'gray',
    count: 1,
  },
  MENUSEVEN: {
    type: 17,
    text: 'menu',
    picpath: menu7,
    color: 'off white',
    count: 1,
  },
  MENUEIGHT: {
    type: 18,
    text: 'menu',
    picpath: menu8,
    color: 'off white',
    count: 1,
  },
  MENUNINE: {
    type: 19,
    text: 'menu',
    picpath: menu9,
    color: 'off white',
    count: 1,
  },
  TAKEOUTTEN: {
    type: 20,
    text: 'takeout box',
    picpath: takeoutbox10,
    color: 'tan',
    count: 1,
  },
  TAKEOUTELEVEN: {
    type: 21,
    text: 'takeout box',
    picpath: takeoutbox11,
    color: 'tan',
    count: 1,
  },
  TAKEOUTTWELVE: {
    type: 22,
    text: 'takeout box',
    picpath: takeoutbox12,
    color: 'tan',
    count: 1,
  },
  TEA: { type: 23, text: 'tea', picpath: tea, color: 'brown', count: 3 },
  WASABI: {
    type: 24,
    text: 'wasabi',
    picpath: wasabi,
    color: 'yellow',
    count: 3,
  },
  SOYSAUCE: {
    type: 25,
    text: 'soysauce',
    picpath: soysauce,
    color: 'orange',
    count: 3,
  },
  SPECIALO: {
    type: 26,
    text: 'special order',
    picpath: specialorder,
    color: 'rainbow',
    count: 3,
  },
  DUMPLING: {
    type: 27,
    text: 'dumpling',
    picpath: dumpling,
    color: 'indigo',
    count: 8,
  },
  TEMPURA: {
    type: 28,
    text: 'tempura',
    picpath: tempura,
    color: 'light purple',
    count: 8,
  },
  SASHIMI: {
    type: 29,
    text: 'sashimi',
    picpath: sashimi,
    color: 'light green',
    count: 8,
  },
  MISO: {
    type: 30,
    text: 'miso soup',
    picpath: misosoup,
    color: 'teal',
    count: 8,
  },
  EDAMAME: {
    type: 31,
    text: 'edamame',
    picpath: edamame,
    color: 'purple',
    count: 8,
  },
  EEL: { type: 32, text: 'eel', picpath: eel, color: 'poison', count: 8 },
  TOFU: { type: 33, text: 'tofu', picpath: tofu, color: 'green', count: 8 },
  ONICIRCLE: {
    type: 34,
    text: 'circle onigiri',
    picpath: onigiricircle,
    color: 'hot pink',
    count: 2,
  },
  ONISQUARE: {
    type: 35,
    text: 'square onigiri',
    picpath: onigirisquare,
    color: 'hot pink',
    count: 2,
  },
  ONITRI: {
    type: 36,
    text: 'triangle onigiri',
    picpath: onigiritriangle,
    color: 'hot pink',
    count: 2,
  },
  ONIFLAT: {
    type: 37,
    text: 'flat onigiri',
    picpath: onigiriflat,
    color: 'hot pink',
    count: 2,
  },
  PUDDING: {
    type: 38,
    text: 'pudding',
    picpath: pudding,
    color: 'pink',
    count: 15,
  },
  GTIC: {
    type: 39,
    text: 'green tea ice cream',
    picpath: greenteaicecream,
    color: 'blue',
    count: 15,
  },
  FRUITDUBWAT: {
    type: 40,
    text: 'two watermelons',
    picpath: fruitdoublewatermelon,
    color: 'peach',
    count: 2,
  },
  FRUITDUBPINE: {
    type: 41,
    text: 'two pineapples',
    picpath: fruitdoublepineapple,
    color: 'peach',
    count: 2,
  },
  FRUITDUBO: {
    type: 42,
    text: 'two oranges',
    picpath: fruitdoubleorange,
    color: 'peach',
    count: 2,
  },
  FRUITWATERO: {
    type: 43,
    text: 'one watermelon and one orange',
    picpath: fruitwatermelonorange,
    color: 'peach',
    count: 3,
  },
  FRUITPINEO: {
    type: 44,
    text: 'one pineapple and one orange',
    picpath: fruitpineappleorange,
    color: 'peach',
    count: 3,
  },
  FRUITWATERPINE: {
    type: 45,
    text: 'one watermlon and one pineapple',
    picpath: fruitwatermelonpineapple,
    color: 'peach',
    count: 3,
  },
  TOC: {
    type: 46,
    text: 'turned over card',
    picpath: turnedovercard,
    color: null,
    count: 0,
  },
  NEXT: {
    type: 47,
    text: 'next round',
    picpath: nextround,
    color: 'transparent',
    count: 0,
  },
  FINAL: {
    type: 48,
    text: 'final score',
    picpath: finalscore,
    color: 'transparent',
    count: 0,
  },
})

// Return counts in the following order: watermelon, pineapple, orange
export const parseFruit = (fruitNumber) => {
  let watermelon = Math.floor(fruitNumber / 11 / 11)
  let dessertLeft = fruitNumber - watermelon * 11 * 11
  let pineapple = Math.floor(dessertLeft / 11)
  let orange = dessertLeft - pineapple * 11
  return [watermelon, pineapple, orange]
}

const PlayPage = () => {
  const [showGame, setShowGame] = useState(false)
  const [roll, setRoll] = useState([])
  const [spec, setSpec] = useState([])
  const [app, setApp] = useState([])
  const [dess, setDess] = useState([])
  const [diff, setDiff] = useState([])
  const ROLLCAP = 1
  const SPECCAP = 2
  const APPCAP = 3
  const DESSCAP = 1
  const DIFFCAP = 1

  const Card = ({ numberName, info, action, opacityOn, fullDisplay }) => {
    if (fullDisplay)
      if (opacityOn)
        return (
          // CSS shows cursor so it should be clear to user that this is an interactive element although it isn't technically
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <img
            name={numberName}
            src={info.picpath}
            alt={info.text}
            onClick={action}
            onKeyDown={action}
            className="h-36 w-24"
          />
        )
      else
        return (
          // CSS shows cursor so it should be clear to user that this is an interactive element although it isn't technically
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <img
            name={numberName}
            src={info.picpath}
            alt={info.text}
            onClick={action}
            onKeyDown={action}
            className="h-36 w-24 opacity-50"
          />
        )
    return (
      // leaving clickableness for now
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <img
        name={numberName}
        src={info.picpath}
        alt={info.text}
        onClick={action}
        onKeyDown={action}
        className="h-9 w-24 object-cover object-top"
      />
    )
  }

  const OrderScreen = () => {
    const updateScreen = () => {
      if (
        roll.length == ROLLCAP &&
        spec.length == SPECCAP &&
        app.length == APPCAP &&
        dess.length == DESSCAP &&
        diff.length == DIFFCAP
      )
        setShowGame(true)
    }

    const clickRoll = (e) => {
      if (roll.includes(e.target.name))
        setRoll(roll.toSpliced(roll.indexOf(e.target.name), 1))
      else if (roll.length < ROLLCAP) setRoll([...roll, e.target.name])
    }

    const clickSpec = (e) => {
      if (spec.includes(e.target.name))
        setSpec(spec.toSpliced(spec.indexOf(e.target.name), 1))
      else if (spec.length < SPECCAP) setSpec([...spec, e.target.name])
    }

    const clickApp = (e) => {
      if (app.includes(e.target.name))
        setApp(app.toSpliced(app.indexOf(e.target.name), 1))
      else if (app.length < APPCAP) setApp([...app, e.target.name])
    }

    const clickDess = (e) => {
      if (dess.includes(e.target.name))
        setDess(dess.toSpliced(dess.indexOf(e.target.name), 1))
      else if (dess.length < DESSCAP) setDess([...dess, e.target.name])
    }

    const clickDiff = (e) => {
      if (diff.includes(e.target.id))
        setDiff(diff.toSpliced(diff.indexOf(e.target.id), 1))
      else if (diff.length < DIFFCAP) setDiff([...diff, e.target.id])
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
        <Form onSubmit={updateScreen}>
          <div className="flex flex-col items-center">
            <div className="flex flex-row">
              <Card
                info={guides.MAKI}
                numberName={guides.MAKI.type}
                action={clickRoll}
                opacityOn={roll.includes(guides.MAKI.type.toString())}
                fullDisplay={true}
              />

              <Card
                info={guides.TEMAKI}
                numberName={guides.TEMAKI.type}
                action={clickRoll}
                opacityOn={roll.includes(guides.TEMAKI.type.toString())}
                fullDisplay={true}
              />

              <Card
                info={guides.URAMAKI}
                numberName={guides.URAMAKI.type}
                action={clickRoll}
                opacityOn={roll.includes(guides.URAMAKI.type.toString())}
                fullDisplay={true}
              />
            </div>
            <div className="flex flex-row">
              <Card
                info={guides.CHOPSTICKS}
                numberName={guides.CHOPSTICKS.type}
                action={clickSpec}
                opacityOn={spec.includes(guides.CHOPSTICKS.type.toString())}
                fullDisplay={true}
              />

              <Card
                info={guides.SPOON}
                numberName={guides.SPOON.type}
                action={clickSpec}
                opacityOn={spec.includes(guides.SPOON.type.toString())}
                fullDisplay={true}
              />

              <Card
                info={guides.MENU}
                numberName={guides.MENU.type}
                action={clickSpec}
                opacityOn={spec.includes(guides.MENU.type.toString())}
                fullDisplay={true}
              />

              <Card
                info={guides.TAKEOUT}
                numberName={guides.TAKEOUT.type}
                action={clickSpec}
                opacityOn={spec.includes(guides.TAKEOUT.type.toString())}
                fullDisplay={true}
              />

              <Card
                info={guides.TEA}
                numberName={guides.TEA.type}
                action={clickSpec}
                opacityOn={spec.includes(guides.TEA.type.toString())}
                fullDisplay={true}
              />

              <Card
                info={guides.WASABI}
                numberName={guides.WASABI.type}
                action={clickSpec}
                opacityOn={spec.includes(guides.WASABI.type.toString())}
                fullDisplay={true}
              />

              <Card
                info={guides.SOYSAUCE}
                numberName={guides.SOYSAUCE.type}
                action={clickSpec}
                opacityOn={spec.includes(guides.SOYSAUCE.type.toString())}
                fullDisplay={true}
              />

              <Card
                info={guides.SPECIALO}
                numberName={guides.SPECIALO.type}
                action={clickSpec}
                opacityOn={spec.includes(guides.SPECIALO.type.toString())}
                fullDisplay={true}
              />
            </div>
            <div className="flex flex-row">
              <Card
                info={guides.DUMPLING}
                numberName={guides.DUMPLING.type}
                action={clickApp}
                opacityOn={app.includes(guides.DUMPLING.type.toString())}
                fullDisplay={true}
              />

              <Card
                info={guides.TEMPURA}
                numberName={guides.TEMPURA.type}
                action={clickApp}
                opacityOn={app.includes(guides.TEMPURA.type.toString())}
                fullDisplay={true}
              />

              <Card
                info={guides.SASHIMI}
                numberName={guides.SASHIMI.type}
                action={clickApp}
                opacityOn={app.includes(guides.SASHIMI.type.toString())}
                fullDisplay={true}
              />

              <Card
                info={guides.MISO}
                numberName={guides.MISO.type}
                action={clickApp}
                opacityOn={app.includes(guides.MISO.type.toString())}
                fullDisplay={true}
              />

              <Card
                info={guides.EDAMAME}
                numberName={guides.EDAMAME.type}
                action={clickApp}
                opacityOn={app.includes(guides.EDAMAME.type.toString())}
                fullDisplay={true}
              />

              <Card
                info={guides.EEL}
                numberName={guides.EEL.type}
                action={clickApp}
                opacityOn={app.includes(guides.EEL.type.toString())}
                fullDisplay={true}
              />

              <Card
                info={guides.TOFU}
                numberName={guides.TOFU.type}
                action={clickApp}
                opacityOn={app.includes(guides.TOFU.type.toString())}
                fullDisplay={true}
              />

              <Card
                info={guides.ONIGIRI}
                numberName={guides.ONIGIRI.type}
                action={clickApp}
                opacityOn={app.includes(guides.ONIGIRI.type.toString())}
                fullDisplay={true}
              />
            </div>
            <div className="flex flex-row">
              <Card
                info={guides.PUDDING}
                numberName={guides.PUDDING.type}
                action={clickDess}
                opacityOn={dess.includes(guides.PUDDING.type.toString())}
                fullDisplay={true}
              />

              <Card
                info={guides.GTIC}
                numberName={guides.GTIC.type}
                action={clickDess}
                opacityOn={dess.includes(guides.GTIC.type.toString())}
                fullDisplay={true}
              />

              <Card
                info={guides.FRUIT}
                numberName={guides.FRUIT.type}
                action={clickDess}
                opacityOn={dess.includes(guides.FRUIT.type.toString())}
                fullDisplay={true}
              />
            </div>
            <div className="flex flex-row">
              <Label className="m-2">
                <CheckboxField id="easy" name="diff" onChange={clickDiff} />
                <p
                  name="easy"
                  className={
                    diff.includes('easy')
                      ? 'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)]'
                      : 'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)] opacity-50'
                  }
                >
                  Easy
                </p>
              </Label>
              <Label className="m-2">
                <CheckboxField id="normal" name="diff" onChange={clickDiff} />
                <p
                  name="normal"
                  className={
                    diff.includes('normal')
                      ? 'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)]'
                      : 'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)] opacity-50'
                  }
                >
                  Normal
                </p>
              </Label>
              <Label className="m-2">
                <CheckboxField id="hard" name="diff" onChange={clickDiff} />
                <p
                  name="hard"
                  className={
                    diff.includes('hard')
                      ? 'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)]'
                      : 'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)] opacity-50'
                  }
                >
                  Hard
                </p>
              </Label>
            </div>
            <Submit
              name="START"
              className={
                roll.length == ROLLCAP &&
                spec.length == SPECCAP &&
                app.length == APPCAP &&
                dess.length == DESSCAP &&
                diff.length == DIFFCAP
                  ? 'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)]'
                  : 'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)] opacity-50'
              }
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
    // DECK PREPERATION
    const DESSERTCOUNTONE = 5
    const DESSERTCOUNTTWO = 3
    const DESSERTCOUNTTHREE = 2

    let round = 1
    // let priority = 1
    let uramakiPoints = 8
    let usingMenu = false
    let savedHand = []
    let takeoutBoxFreeze = false
    let takeoutCount = 0
    let takeoutCards = []
    let specialOrderFreeze = false
    let misoAllowed = true
    let firstMisoIndex = -1
    let deck = {
      pile: [],
      dessertPile: [],
      discardPile: [],
    }

    const addNigiri = () => {
      for (let i = 0; i < cards.EGG.count; i++) deck.pile.push(cards.EGG)
      for (let i = 0; i < cards.SALMON.count; i++) deck.pile.push(cards.SALMON)
      for (let i = 0; i < cards.SQUID.count; i++) deck.pile.push(cards.SQUID)
    }

    const addRolls = (rollName) => {
      if (rollName == guides.MAKI.type.toString()) {
        for (let i = 0; i < cards.MAKIONE.count; i++)
          deck.pile.push(cards.MAKIONE)
        for (let i = 0; i < cards.MAKITWO.count; i++)
          deck.pile.push(cards.MAKITWO)
        for (let i = 0; i < cards.MAKITHREE.count; i++)
          deck.pile.push(cards.MAKITHREE)
      } else if (rollName == guides.TEMAKI.type.toString())
        for (let i = 0; i < cards.TEMAKI.count; i++)
          deck.pile.push(cards.TEMAKI)
      else {
        for (let i = 0; i < cards.URAMAKITHREE.count; i++)
          deck.pile.push(cards.URAMAKITHREE)
        for (let i = 0; i < cards.URAMAKIFOUR.count; i++)
          deck.pile.push(cards.URAMAKIFOUR)
        for (let i = 0; i < cards.URAMAKIFIVE.count; i++)
          deck.pile.push(cards.URAMAKIFIVE)
      }
    }

    const addSpecials = (specialName) => {
      if (specialName == guides.CHOPSTICKS.type.toString()) {
        for (let i = 0; i < cards.CHOPSTICKSONE.count; i++)
          deck.pile.push(cards.CHOPSTICKSONE)
        for (let i = 0; i < cards.CHOPSTICKSTWO.count; i++)
          deck.pile.push(cards.CHOPSTICKSTWO)
        for (let i = 0; i < cards.CHOPSTICKSTHREE.count; i++)
          deck.pile.push(cards.CHOPSTICKSTHREE)
      } else if (specialName == guides.SPOON.type.toString()) {
        for (let i = 0; i < cards.SPOONFOUR.count; i++)
          deck.pile.push(cards.SPOONFOUR)
        for (let i = 0; i < cards.SPOONFIVE.count; i++)
          deck.pile.push(cards.SPOONFIVE)
        for (let i = 0; i < cards.SPOONSIX.count; i++)
          deck.pile.push(cards.SPOONSIX)
      } else if (specialName == guides.MENU.type.toString()) {
        for (let i = 0; i < cards.MENUSEVEN.count; i++)
          deck.pile.push(cards.MENUSEVEN)
        for (let i = 0; i < cards.MENUEIGHT.count; i++)
          deck.pile.push(cards.MENUEIGHT)
        for (let i = 0; i < cards.MENUNINE.count; i++)
          deck.pile.push(cards.MENUNINE)
      } else if (specialName == guides.TAKEOUT.type.toString()) {
        for (let i = 0; i < cards.TAKEOUTTEN.count; i++)
          deck.pile.push(cards.TAKEOUTTEN)
        for (let i = 0; i < cards.TAKEOUTELEVEN.count; i++)
          deck.pile.push(cards.TAKEOUTELEVEN)
        for (let i = 0; i < cards.TAKEOUTTWELVE.count; i++)
          deck.pile.push(cards.TAKEOUTTWELVE)
      } else if (specialName == guides.TEA.type.toString())
        for (let i = 0; i < cards.TEA.count; i++) deck.pile.push(cards.TEA)
      else if (specialName == guides.WASABI.type.toString())
        for (let i = 0; i < cards.WASABI.count; i++)
          deck.pile.push(cards.WASABI)
      else if (specialName == guides.SOYSAUCE.type.toString())
        for (let i = 0; i < cards.SOYSAUCE.count; i++)
          deck.pile.push(cards.SOYSAUCE)
      else
        for (let i = 0; i < cards.SPECIALO.count; i++)
          deck.pile.push(cards.SPECIALO)
    }

    const addApps = (appName) => {
      if (appName == guides.DUMPLING.type.toString())
        for (let i = 0; i < cards.DUMPLING.count; i++)
          deck.pile.push(cards.DUMPLING)
      else if (appName == guides.TEMPURA.type.toString())
        for (let i = 0; i < cards.TEMPURA.count; i++)
          deck.pile.push(cards.TEMPURA)
      else if (appName == guides.SASHIMI.type.toString())
        for (let i = 0; i < cards.SASHIMI.count; i++)
          deck.pile.push(cards.SASHIMI)
      else if (appName == guides.MISO.type.toString())
        for (let i = 0; i < cards.MISO.count; i++) deck.pile.push(cards.MISO)
      else if (appName == guides.EDAMAME.type.toString())
        for (let i = 0; i < cards.EDAMAME.count; i++)
          deck.pile.push(cards.EDAMAME)
      else if (appName == guides.EEL.type.toString())
        for (let i = 0; i < cards.EEL.count; i++) deck.pile.push(cards.EEL)
      else if (appName == guides.TOFU.type.toString())
        for (let i = 0; i < cards.TOFU.count; i++) deck.pile.push(cards.TOFU)
      else {
        for (let i = 0; i < cards.ONICIRCLE.count; i++)
          deck.pile.push(cards.ONICIRCLE)
        for (let i = 0; i < cards.ONISQUARE.count; i++)
          deck.pile.push(cards.ONISQUARE)
        for (let i = 0; i < cards.ONITRI.count; i++)
          deck.pile.push(cards.ONITRI)
        for (let i = 0; i < cards.ONIFLAT.count; i++)
          deck.pile.push(cards.ONIFLAT)
      }
    }

    const fillDessertPile = (dessertName) => {
      if (dessertName == guides.PUDDING.type.toString())
        for (let i = 0; i < cards.PUDDING.count; i++)
          deck.dessertPile.push(cards.PUDDING)
      else if (dessertName == guides.GTIC.type.toString())
        for (let i = 0; i < cards.GTIC.count; i++)
          deck.dessertPile.push(cards.GTIC)
      else {
        for (let i = 0; i < cards.FRUITDUBWAT.count; i++)
          deck.dessertPile.push(cards.FRUITDUBWAT)
        for (let i = 0; i < cards.FRUITDUBPINE.count; i++)
          deck.dessertPile.push(cards.FRUITDUBPINE)
        for (let i = 0; i < cards.FRUITDUBO.count; i++)
          deck.dessertPile.push(cards.FRUITDUBO)
        for (let i = 0; i < cards.FRUITWATERO.count; i++)
          deck.dessertPile.push(cards.FRUITWATERO)
        for (let i = 0; i < cards.FRUITPINEO.count; i++)
          deck.dessertPile.push(cards.FRUITPINEO)
        for (let i = 0; i < cards.FRUITWATERPINE.count; i++)
          deck.dessertPile.push(cards.FRUITDUBO)
      }
    }

    const shuffle = (neatPile) => {
      for (let i = neatPile.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = neatPile[i]
        neatPile[i] = neatPile[j]
        neatPile[j] = temp
      }
    }

    // PLAYER INITIALIZATION
    const STARTCARDS = 9

    // players[0] is the user
    let players = [
      {
        name: 'Joey',
        hand: [],
        stash: [],
        score: 0,
        dessert: 0,
        uramakiScored: false,
      },
      {
        name: 'cpu one',
        hand: [],
        willPlayIndex: -1,
        stash: [],
        score: 0,
        dessert: 0,
        uramakiScored: false,
      },
      {
        name: 'cpu two',
        hand: [],
        willPlayIndex: -1,
        stash: [],
        score: 0,
        dessert: 0,
        uramakiScored: false,
      },
      {
        name: 'cpu three',
        hand: [],
        willPlayIndex: -1,
        stash: [],
        score: 0,
        dessert: 0,
        uramakiScored: false,
      },
    ]

    // Fruit count is stored as an undecimal number (watermelon is most significant, orange is least significant)
    // Since fruit is stored weirdly adding these methods for abstraction

    // PRECONDITION: fruitCard.color == 'peach'
    const addFruit = (fruitCard, player) => {
      if (fruitCard.type == cards.FRUITDUBWAT.type)
        player.dessert += 2 * 11 * 11
      else if (fruitCard.type == cards.FRUITDUBPINE.type)
        player.dessert += 2 * 11
      else if (fruitCard.type == cards.FRUITDUBO.type) player.dessert += 2
      else if (fruitCard.type == cards.FRUITWATERO.type) {
        player.dessert += 11 * 11
        player.dessert++
      } else if (fruitCard.type == cards.FRUITPINEO.type) {
        player.dessert += 11
        player.dessert++
      } else if (fruitCard.type == cards.FRUITWATERPINE.type) {
        player.dessert += 11 * 11
        player.dessert += 11
      }
    }

    const buildDeck = () => {
      // Add all necessary cards
      addNigiri()
      for (let i = 0; i < roll.length; i++) addRolls(roll[i])
      for (let i = 0; i < spec.length; i++) addSpecials(spec[i])
      for (let i = 0; i < app.length; i++) addApps(app[i])
      for (let i = 0; i < dess.length; i++) fillDessertPile(dess[i])

      // Fruit is the only dessert card that is heterogeneous, so its the only one that needs to be shuffled
      if (dess.includes('fruit')) shuffle(deck.dessertPile)

      // Add dessert cards for first round
      for (let i = 0; i < DESSERTCOUNTONE; i++)
        deck.pile.push(deck.dessertPile.pop())

      // Shuffle full deck
      shuffle(deck.pile)
    }

    const dealToPlayers = () => {
      for (let i = 0; i < STARTCARDS; i++)
        for (let j = 0; j < players.length; j++)
          players[j].hand.push(deck.pile.pop())
    }

    buildDeck()
    dealToPlayers()

    const CardDisplay = () => {
      const [showResults, setShowResults] = useState(false)
      const [userHand, setUserHand] = useState(players[0].hand)
      const [userStash, setUserStash] = useState(players[0].stash)
      const [cpuOneStash, setCpuOneStash] = useState(players[1].stash)
      const [cpuTwoStash, setCpuTwoStash] = useState(players[2].stash)
      const [cpuThreeStash, setCpuThreeStash] = useState(players[3].stash)
      const [userScore, setUserScore] = useState(0)
      const [cpuOneScore, setCpuOneScore] = useState(0)
      const [cpuTwoScore, setCpuTwoScore] = useState(0)
      const [cpuThreeScore, setCpuThreeScore] = useState(0)

      // Fruit is stored as a 3 undigit base-11 number (watermelon is most significant, orange is least significant)
      // This is possible because for each fruit type the max icons is 10: 15 fruit cards * 2 icons/card / 3 icon types = 10
      // e.g. 2 watermelon, 1 pineapple, 3 orange is represented as 2 * 11 * 11 + 1 * 11 + 3 = 256
      const [userDessert, setUserDessert] = useState(players[0].dessert)
      const [cpuOneDessert, setCpuOneDessert] = useState(players[1].dessert)
      const [cpuTwoDessert, setCpuTwoDessert] = useState(players[2].dessert)
      const [cpuThreeDessert, setCpuThreeDessert] = useState(players[3].dessert)

      // A cornerstone of SushiGO gameplay is that players swap hands after playing cards, this is done here
      const swapCards = () => {
        let tempCards = players[0].hand
        for (let i = 0; i < players.length - 1; i++)
          players[i].hand = players[i + 1].hand
        players[players.length - 1].hand = tempCards
      }

      const opps = (excludedIndex) => {
        return [
          players[(excludedIndex + 1) % 4],
          players[(excludedIndex + 2) % 4],
          players[(excludedIndex + 3) % 4],
        ]
      }

      const notify = (message, emoji, area) => {
        let location
        if (area == 0) location = 'bottom-left'
        else if (area == 1) location = 'bottom-right'
        else if (area == 2) location = 'top-right'
        else location = 'top-left'

        toast(message, {
          icon: emoji,
          position: location,
          style: {
            background: '#004', // nightwing
            color: '#ff917d', // salmon
          },
          className: 'font-cal text-2xl',
        })
      }

      const cleanupMenu = () => {
        for (let i = players[0].hand.length - 1; i >= 0; i--)
          deck.pile.push(players[0].hand.pop())
        shuffle(deck.pile)
        players[0].hand = savedHand
        usingMenu = false
      }

      const scoreUramakiDuring = () => {
        // Remove uramaki by removing every card, and putting it in discard
        // pile if it's a uramaki or putting it back if it's not
        const cleanUramaki = (playerCards) => {
          for (let i = playerCards.length - 1; i >= 0; i--) {
            let removedCard = playerCards.pop()
            if (removedCard.color == 'lime')
              // Uramaki is lime colored
              deck.discardPile.push(removedCard)
            else playerCards.unshift(removedCard)
          }
        }

        // Check from 14 to 10 for scoring uramaki since ten is the minimum to score and
        // 5 is the max that can be played in a round, so the max unscored amount is 10 - 1 + 5 = 14
        for (let goal = 14; goal >= 10; goal--) {
          if (uramakiPoints < 2) break
          let decrease = 0
          for (let i = 0; i < players.length; i++) {
            let uramakiCount =
              3 * countCard(players[i].stash, cards.URAMAKITHREE) +
              4 * countCard(players[i].stash, cards.URAMAKIFOUR) +
              5 * countCard(players[i].stash, cards.URAMAKIFIVE)

            // It is not possible to score twice in a round by reaching 10+ rolls, hence the second condition
            // However, it is possible to score uramaki again at the end of the round
            if (uramakiCount == goal && !players[i].uramakiScored) {
              players[i].score += uramakiPoints
              cleanUramaki(players[i].stash)
              notify(
                'Ate ' + goal + ' uramaki for ' + uramakiPoints + ' points',
                '😋',
                i
              )
              players[i].uramakiScored = true
              decrease += 3 // Do not decrease right away so tied players receive the same points
            }
          }
          uramakiPoints -= decrease
        }
      }

      const scoreUramakiEnd = (playerCards, oppsCards) => {
        if (uramakiPoints < 2) return
        let uramakiCount =
          3 * countCard(playerCards, cards.URAMAKITHREE) +
          4 * countCard(playerCards, cards.URAMAKIFOUR) +
          5 * countCard(playerCards, cards.URAMAKIFIVE)

        for (let oppCards of oppsCards) {
          if (
            uramakiCount <
            3 * countCard(oppCards, cards.URAMAKITHREE) +
              4 * countCard(oppCards, cards.URAMAKIFOUR) +
              5 * countCard(oppCards, cards.URAMAKIFIVE)
          )
            return 0
        }
        return uramakiPoints
      }

      const setAsideDessert = () => {
        for (let i = 0; i < players.length; i++)
          for (let j = players[i].stash.length - 1; j >= 0; j--) {
            // i.e. If this is a dessert card
            let removedCard = players[i].stash.pop()
            if (['pink', 'blue', 'peach'].includes(removedCard.color))
              if (removedCard.color == cards.FRUITDUBWAT.color)
                addFruit(removedCard, players[i])
              else players[i].dessert++
            else players[i].stash.unshift(removedCard)
          }
      }

      // Changes turned over cards back into their original
      const takeoutBoxReplace = () => {
        for (let i = 0; i < deck.pile.length; i++)
          if (deck.pile[i].type == cards.TOC.type)
            deck.pile[i] = takeoutCards.pop()
      }

      // Changes special order cards that were transformed back
      const specialOrderReplace = () => {
        let specialOrderCount = countCard(deck.pile, cards.SPECIALO)

        if (specialOrderCount == cards.SPECIALO.count) return

        for (let i = 0; i < deck.pile; i++)
          if (countCard(deck.pile, deck.pile[i]) > deck.pile[i].count) {
            deck.pile[i] = cards.SPECIALO
            specialOrderCount++
            if (specialOrderCount == cards.SPECIALO.count) return
          }
      }

      // PRECONDITION: Desserts are cleaned from stashes
      // Rebuilds the deck by grabbing all the played/discarded cards
      const replenishDeck = (moreDes) => {
        for (let i = 0; i < players.length; i++)
          for (let j = players[i].stash.length - 1; j >= 0; j--)
            deck.pile.push(players[i].stash.pop())

        for (let i = deck.discardPile.length - 1; i >= 0; i--)
          deck.pile.push(deck.discardPile.pop())

        for (let i = 0; i < moreDes; i++) deck.pile.push(deck.dessertPile.pop())

        if (spec.includes(guides.TAKEOUT.type.toString())) takeoutBoxReplace()

        if (spec.includes(guides.TAKEOUT.type.toString())) specialOrderReplace()

        shuffle(deck.pile)

        if (dess.includes('')) {
          let allFruitCounts = [
            parseFruit(players[0].dessert),
            parseFruit(players[1].dessert),
            parseFruit(players[2].dessert),
            parseFruit(players[3].dessert),
          ]
          let sum = 0
          for (let i = 0; i < allFruitCounts.length; i++)
            for (let j = 0; j < allFruitCounts[i].length; j++)
              sum += allFruitCounts[i][j]
          console.log(deck.pile.length + deck.dessertPile.length + sum)
        } else
          console.log(
            deck.pile.length +
              deck.dessertPile.length +
              players[0].dessert +
              players[1].dessert +
              players[2].dessert +
              players[3].dessert
          )

        console.log(deck.pile)
      }

      // Scores a player's cards, only accounts for end of turn (i.e. no uramaki reaching 10 or dessert)
      const scoreRegular = (playerCards, oppsCards) => {
        let runningScore = 0

        // NIGIRI
        runningScore += scoreNigiri(playerCards)

        // ROLLS
        if (roll.includes('maki'))
          runningScore += scoreMaki(playerCards, oppsCards)
        else if (roll.includes('temaki'))
          runningScore += scoreTemaki(playerCards, oppsCards)
        else runningScore += scoreUramakiEnd(playerCards, oppsCards)

        // SPECIALS
        if (spec.includes('takeoutbox'))
          runningScore += scoreLeftovers(playerCards)
        else if (spec.includes('tea')) runningScore += scoreTea(playerCards)
        else if (spec.includes('soysauce'))
          runningScore += scoreSoysauce(playerCards, oppsCards)

        // APPETIZERS
        if (app.includes('dumpling')) runningScore += scoreDumpling(playerCards)
        else if (app.includes('tempura'))
          runningScore += scoreTempura(playerCards)
        else if (app.includes('sashimi'))
          runningScore += scoreSashimi(playerCards)
        else if (app.includes('misosoup'))
          runningScore += scoreMiso(playerCards)
        else if (app.includes('edamame'))
          runningScore += scoreEdamame(playerCards, oppsCards)
        else if (app.includes('eel')) runningScore += scoreEel(playerCards)
        else if (app.includes('tofu')) runningScore += scoreTofu(playerCards)
        else runningScore += scoreOnigiri(playerCards)

        return runningScore
      }

      const scoreDessert = (playerDessert, oppsDessert) => {
        for (let i = 0; i < dess.length; i++)
          if (dess[i] == 'pudding')
            return scorePudding(playerDessert, oppsDessert)
          else if (dess[i] == 'greenteaicecream')
            return scoreGTIC(playerDessert)
          else return scoreFruit(playerDessert)
      }

      const scoreRound = () => {
        players[0].score += scoreRegular(players[0].stash, [
          (players[1].stash, players[2].stash, players[3].stash),
        ])
        players[1].score += scoreRegular(players[1].stash, [
          (players[0].stash, players[2].stash, players[3].stash),
        ])
        players[2].score += scoreRegular(players[2].stash, [
          (players[0].stash, players[1].stash, players[3].stash),
        ])
        players[3].score += scoreRegular(players[3].stash, [
          (players[0].stash, players[1].stash, players[2].stash),
        ])
      }

      const scoreDesserts = () => {
        players[0].score += scoreDessert(players[0].stash, [
          (players[1].stash, players[2].stash, players[3].stash),
        ])
        players[1].score += scoreDessert(players[1].stash, [
          (players[0].stash, players[2].stash, players[3].stash),
        ])
        players[2].score += scoreDessert(players[2].stash, [
          (players[0].stash, players[1].stash, players[3].stash),
        ])
        players[3].score += scoreDessert(players[3].stash, [
          (players[0].stash, players[1].stash, players[2].stash),
        ])
      }

      const updateData = (updateScores) => {
        setUserHand([...players[0].hand])
        setUserStash([...players[0].stash])
        setCpuOneStash([...players[1].stash])
        setCpuTwoStash([...players[2].stash])
        setCpuThreeStash([...players[3].stash])
        if (updateScores || roll.includes(guides.URAMAKI.type.toString())) {
          setUserScore(players[0].score)
          setCpuOneScore(players[1].score)
          setCpuTwoScore(players[2].score)
          setCpuThreeScore(players[3].score)
        }
      }

      const incrementRound = () => {
        // Reset uramaki
        uramakiPoints = 8
        for (let i = 0; i < players.length; i++)
          players[i].uramakiScored = false

        round++
      }

      const reorderMaki = (index) => {
        if (
          players[index].stash.length == 0 ||
          players[index].stash[players[index].stash.length - 1].color !=
            cards.MAKIONE.color
        )
          return

        if (
          players[index].stash[players[index].stash.length - 1].type ==
          cards.MAKIONE.type
        )
          return

        if (
          players[index].stash[players[index].stash.length - 1].type ==
          cards.MAKITWO.type
        ) {
          for (let i = 0; i < players[index].stash.length; i++)
            if (players[index].stash[i].type == cards.MAKIONE.type) {
              players[index].stash[i] = cards.MAKITWO
              players[index].stash[players[index].stash.length - 1] =
                cards.MAKIONE
              break
            }
          return
        }

        for (let i = 0; i < players[index].stash.length; i++)
          if (players[index].stash[i].type == cards.MAKITWO.type) {
            players[index].stash[i] = cards.MAKITHREE
            players[index].stash[players[index].stash.length - 1] =
              cards.MAKITWO
            break
          }

        if (
          players[index].stash[players[index].stash.length - 1] == cards.MAKITWO
        )
          reorderMaki(index)
      }

      const reorderUramaki = (index) => {
        if (
          players[index].stash.length == 0 ||
          players[index].stash[players[index].stash.length - 1].color !=
            cards.URAMAKITHREE.color
        )
          return

        if (
          players[index].stash[players[index].stash.length - 1].type ==
          cards.URAMAKITHREE.type
        )
          return

        if (
          players[index].stash[players[index].stash.length - 1].type ==
          cards.URAMAKIFOUR.type
        ) {
          for (let i = 0; i < players[index].stash.length; i++)
            if (players[index].stash[i].type == cards.URAMAKITHREE.type) {
              players[index].stash[i] = cards.URAMAKIFOUR
              players[index].stash[players[index].stash.length - 1] =
                cards.URAMAKITHREE
              break
            }
          return
        }

        for (let i = 0; i < players[index].stash.length; i++)
          if (players[index].stash[i].type == cards.URAMAKIFOUR.type) {
            players[index].stash[i] = cards.URAMAKIFIVE
            players[index].stash[players[index].stash.length - 1] =
              cards.URAMAKIFOUR
            break
          }

        if (
          players[index].stash[players[index].stash.length - 1] ==
          cards.URAMAKIFOUR
        )
          reorderUramaki(index)
      }

      // If more than one miso soup is played all are removed
      const handleMiso = (index) => {
        if (
          players[index].stash[players[index].stash.length - 1].type !=
          cards.MISO.type
        )
          return

        if (misoAllowed) {
          misoAllowed = false
          firstMisoIndex = index
          return
        }

        deck.discardPile.push(players[index].stash.pop())
        notify('Gave up non-unique miso soup', '😩', index)

        if (firstMisoIndex != -1) {
          deck.discardPile.push(players[firstMisoIndex].pop())
          notify('Gave up non-unique miso soup', '😩', firstMisoIndex)
          firstMisoIndex = -1
        }
        // let misoCount = 0
        // for (let i = 0; i < players.length; i++)
        //   if (
        //     players[i].stash[players[i].stash.length - 1].type ==
        //     cards.MISO.type
        //   )
        //     misoCount++

        // if (misoCount > 1) {
        //   for (let i = 0; i < players.length; i++) {
        //     if (
        //       players[i].stash[players[i].stash.length - 1].type ==
        //       cards.MISO.type
        //     ) {
        //       deck.discardPile.push(players[i].stash.pop())
        //       notify('Gave up non-unique miso soup', '😩', i)
        //     }
        //   }
        // }
      }

      // Display message for successful usage and swap for display
      const handleWasabi = (index) => {
        // Move on in if nigiri is not most recently played
        if (
          ![cards.EGG.type, cards.SALMON.type, cards.SQUID.type].includes(
            players[index].stash[players[index].stash.length - 1].type
          )
        )
          return

        let wasabiLoc

        // If an unclaimed wasabi is found, insert nigiri immediately after wasabi
        for (
          wasabiLoc = 0;
          wasabiLoc < players[index].stash.length - 1;
          wasabiLoc++
        )
          if (
            players[index].stash[wasabiLoc].type == cards.WASABI.type &&
            (wasabiLoc == players[index].stash.length - 2 ||
              ![cards.EGG.type, cards.SALMON.type, cards.SQUID.type].includes(
                players[index].stash[wasabiLoc + 1].type
              ))
          ) {
            players[index].stash.splice(
              wasabiLoc + 1,
              0,
              players[index].stash.pop()
            )
            notify(
              'Tripled ' +
                players[index].stash[wasabiLoc + 1].text +
                ' with wasabi',
              '💥',
              index
            )

            break
          }
      }

      const playCard = (cardIndex, playerIndex, checkUramaki) => {
        let card = players[playerIndex].hand.splice(cardIndex, 1)[0]
        players[playerIndex].stash.push(card)
        if (card.type == cards.SPECIALO.type)
          if (playerIndex == 0)
            if (players[0].stash.length == 1) {
              // player special order
              notify('Played special order without copying', '🌈', 0)
              deck.discardPile.push(players[0].stash.pop())
            } else {
              specialOrderFreeze = true
              // setUserHand([...players[0].hand])
              // setUserStash([...players[0].stash])
              return
            }
          else if (players[playerIndex].stash.length == 1) {
            // cpu special order
            notify('Played special order without copying', '🌈', playerIndex)
            deck.discardPile.push(players[playerIndex].stash.pop())
          } else {
            notify(
              'Copied ' +
                players[playerIndex].stash[0].text +
                ' with special order',
              '🌈',
              playerIndex
            )
            players[playerIndex].stash[players[playerIndex].stash.length - 1] =
              players[playerIndex].stash[0]
          }

        if (roll.includes(guides.MAKI.type.toString())) reorderMaki(playerIndex)

        if (roll.includes(guides.URAMAKI.type.toString()))
          reorderUramaki(playerIndex)

        if (spec.includes(guides.WASABI.type.toString()))
          handleWasabi(playerIndex)

        if (app.includes(guides.MISO.type.toString())) handleMiso()

        if (checkUramaki && roll.includes(guides.URAMAKI.type.toString()))
          scoreUramakiDuring()
      }

      const advanceRound = () => {
        players[0].hand = []
        scoreRound()

        setAsideDessert()

        if (round == 1) replenishDeck(DESSERTCOUNTTWO)
        else if (round == 2) replenishDeck(DESSERTCOUNTTHREE)

        setUserDessert(players[0].dessert)
        setCpuOneDessert(players[1].dessert)
        setCpuTwoDessert(players[2].dessert)
        setCpuThreeDessert(players[3].dessert)

        if (round == 3) {
          scoreDesserts()
          updateData(true)
          setShowResults(true)
        } else {
          dealToPlayers()
          updateData(true)
          incrementRound()
        }
      }

      /*
      const handlePostPlayerActions = () => {
        players[1].stash.push(players[1].hand.pop())
        players[2].stash.push(players[2].hand.pop())
        players[3].stash.push(players[3].hand.pop())

        if (spec.includes(guides.WASABI.type.toString())) handleWasabi()

        if (roll.includes(guides.URAMAKI.type.toString())) scoreUramakiDuring()

        // Miso is bugging we leacing it out for now
        // if (app.includes(guides.MISO.type.toString())) handleMiso()

        if (players[0].hand.length == 0)
          if (round < 3) players[0].hand.push(cards.NEXT)
          else players[0].hand.push(cards.FINAL)
        else swapCards()

        updateData(false)
      }
      */

      const resolveTurn = (playComputerCards) => {
        // CHOPSTICKS -> SPOON -> MENU -> TAKEOUT BOX
        const handleSpecials = () => {
          const handleMenu = (index) => {
            let tempHand = [
              deck.pile.pop(),
              deck.pile.pop(),
              deck.pile.pop(),
              deck.pile.pop(),
            ]

            savedHand = players[index].hand
            players[index].hand = tempHand

            if (index == 0) {
              usingMenu = true
              // setUserHand([...players[0].hand])
              // setUserStash([...players[0].stash])
              return
            }

            deck.discardPile.push(players[0].stash.pop())

            let choice = pickComputerCard(
              tempHand,
              [
                players[(index + 1) % 4],
                players[(index + 2) % 4],
                players[(index + 3) % 4],
              ],
              round,
              diff[0]
            )

            notify('Played ' + tempHand[choice].text + ' with menu', '📖', 0)

            for (let i = players[index].hand.length - 1; i >= 0; i--)
              deck.pile.push(players[index].hand.pop())
            shuffle(deck.pile)
            players[index].hand = savedHand
          }

          const handleTakeout = (index) => {
            if (players[index].stash.length == 1) {
              notify('Took out 0 items with takeout box', '🥡', 0)
              deck.discardPile.push(players[0].stash.pop())
              return
            }

            if (index == 0) {
              takeoutBoxFreeze = true
              // setUserHand([...players[0].hand])
              // setUserStash([...players[0].stash])
              return
            }

            // Computer takeout behavior to be determined, just don't use for now
            notify('Took out 0 items with takeout box', '🥡', index)
            deck.discardPile.push(players[index].stash.pop())
          }

          // SPOON

          // CHOPSTICKS

          for (let i = 0; i < players.length; i++)
            if (
              players[i].stash.length > 0 &&
              players[i].stash[players[i].stash.length - 1].type ==
                cards.MENUSEVEN.type
            )
              handleMenu(i)

          if (usingMenu) return

          for (let i = 0; i < players.length; i++)
            if (
              players[i].stash.length > 0 &&
              players[i].stash[players[i].stash.length - 1].type ==
                cards.MENUEIGHT.type
            )
              handleMenu(i)

          if (usingMenu) return

          for (let i = 0; i < players.length; i++)
            if (
              players[i].stash.length > 0 &&
              players[i].stash[players[i].stash.length - 1].type ==
                cards.MENUNINE.type
            )
              handleMenu(i)

          if (usingMenu) return

          for (let i = 0; i < players.length; i++)
            if (
              players[i].stash.length > 0 &&
              players[i].stash[players[i].stash.length - 1].type ==
                cards.TAKEOUTTEN.type
            )
              handleTakeout(i)

          if (takeoutBoxFreeze) return

          for (let i = 0; i < players.length; i++)
            if (
              players[i].stash.length > 0 &&
              players[i].stash[players[i].stash.length - 1].type ==
                cards.TAKEOUTELEVEN.type
            )
              handleTakeout(i)

          if (takeoutBoxFreeze) return

          for (let i = 0; i < players.length; i++)
            if (
              players[i].stash.length > 0 &&
              players[i].stash[players[i].stash.length - 1].type ==
                cards.TAKEOUTTWELVE.type
            )
              handleTakeout(i)
        }

        // Have computers play their predetermined cards
        if (playComputerCards)
          for (let i = 1; i < players.length; i++)
            playCard(players[i].willPlayIndex, i, false)

        handleSpecials()

        if (usingMenu || takeoutBoxFreeze) return

        if (players[0].hand.length == 0)
          if (round < 3) players[0].hand.push(cards.NEXT)
          else players[0].hand.push(cards.FINAL)
        else swapCards()
      }

      const handClick = (e) => {
        // During special order or takeout box use, cannot play from hand
        if (specialOrderFreeze || takeoutBoxFreeze) return

        // User menu handling
        if (usingMenu) {
          let clicked = players[0].hand[parseInt(e.target.name)]
          if (clicked.color == cards.MENUSEVEN.color) {
            notify('Cannot play menu from menu', '📖', 0)
            return
          }

          deck.discardPile.push(players[0].stash.pop()) // Pop the menu from stash
          playCard(parseInt(e.target.name), 0, false) // Play the card played

          notify('Played ' + clicked.text + ' with menu', '📖', 0)

          // Break out if user played special order
          if (specialOrderFreeze) {
            updateData(false)
            return
          }

          cleanupMenu()
        }

        // Probably going to change this but it checks for end of round press
        if (players[0].hand[0].color == cards.NEXT.color) {
          advanceRound()
          return
        }

        // REGULAR START
        // Have the computers make up their mind
        for (let i = 1; i < players.length; i++)
          players[i].willPlayIndex = pickComputerCard(
            players[i].hand,
            opps[i],
            round,
            diff[0]
          )

        // Play the user card
        playCard(parseInt(e.target.name), 0, false)

        // Break out if user played special order
        if (specialOrderFreeze) {
          updateData(false)
          return
        }

        resolveTurn(true)
        updateData(false)
      }

      /*
      const handClickOld = (e) => {
        if (specialOrderFreeze || takeoutBoxFreeze) return

        // If the user is actually playing a card
        if (players[0].hand[0].color != cards.NEXT.color) {
          // The name serves as an index within the hand
          let played = players[0].hand.splice(parseInt(e.target.name), 1)[0]
          if (usingMenu) {
            if (played.color == cards.MENUSEVEN.color) {
              notify('Cannot play menu from menu', '📖', 0)
              return
            }
            deck.discardPile.push(players[0].stash.pop()) // Pop the menu that is pushed for visuals
            notify('Played ' + played.text + ' with menu', '📖', 0)
          }
          players[0].stash.push(played)
          if (played.color == cards.MENUSEVEN.color) {
            // Make a hand for the menu selection
            let tempHand = [
              deck.pile.pop(),
              deck.pile.pop(),
              deck.pile.pop(),
              deck.pile.pop(),
            ]
            savedHand = players[0].hand
            players[0].hand = tempHand
            usingMenu = true
            setUserHand([...players[0].hand])
            setUserStash([...players[0].stash])
            return
          } else if (played.color == cards.TAKEOUTTEN.color)
            if (players[0].stash.length == 1) {
              notify('Took out 0 items with takeout box', '🥡', 0)
              deck.discardPile.push(players[0].stash.pop())
            } else {
              takeoutBoxFreeze = true
              setUserHand([...players[0].hand])
              setUserStash([...players[0].stash])
              return
            }
          else if (played.type == cards.SPECIALO.type)
            if (players[0].stash.length == 1) {
              notify('Played special order without copying', '🌈', 0)
              deck.discardPile.push(players[0].stash.pop())
            } else {
              specialOrderFreeze = true
              setUserHand([...players[0].hand])
              setUserStash([...players[0].stash])
              return
            }
          if (usingMenu) {
            // Add unpicked menu cards back to deck and shuffle
            for (let i = players[0].hand.length - 1; i >= 0; i--)
              deck.pile.push(players[0].hand.pop())
            shuffle(deck.pile)
            players[0].hand = savedHand
            usingMenu = false
          }
          handlePostPlayerActions()
        } else {
          players[0].hand = []
          scoreRound()

          setAsideDessert()

          if (round == 1) replenishDeck(DESSERTCOUNTTWO)
          else if (round == 2) replenishDeck(DESSERTCOUNTTHREE)

          setUserDessert(players[0].dessert)
          setCpuOneDessert(players[1].dessert)
          setCpuTwoDessert(players[2].dessert)
          setCpuThreeDessert(players[3].dessert)

          if (round == 3) {
            scoreDesserts()
            updateData(true)
            setShowResults(true)
          } else {
            dealToPlayers()
            updateData(true)
            incrementRound()
          }
        }
      }
      */

      const stashClick = (e) => {
        // Ends the selection process
        const takeoutPressed = () => {
          if (usingMenu) cleanupMenu()
          deck.discardPile.push(players[0].stash.pop()) // Move takeout box to discard pile
          let itemString = takeoutCount == 1 ? ' item' : ' items'
          notify(
            'Took out ' + takeoutCount + itemString + ' with takeout box',
            '🥡',
            0
          )
          takeoutCount = 0
          takeoutBoxFreeze = false
          resolveTurn(false)
          updateData(false)
        }

        if (takeoutBoxFreeze) {
          if (e.target.alt == 'takeout box') takeoutPressed()
          /* turning over a card */ else {
            for (let i = 0; i < players[0].stash.length; i++)
              if (
                e.target.alt == players[0].stash[i].text &&
                e.target.alt != 'turned over card'
              ) {
                takeoutCards.push(players[0].stash[i])
                players[0].stash[i] = cards.TOC
                setUserStash(userStash.toSpliced(i, 1, cards.TOC))
                takeoutCount++
                // If there are no more cards to turn over automatically end selection
                if (players[0].stash.length == takeoutCount + 1)
                  takeoutPressed()
                break
              }
          }
        } else if (specialOrderFreeze) {
          if (usingMenu) cleanupMenu()
          players[0].stash.pop() // Pop the special order from stash
          if (e.target.alt == 'special order') {
            notify('Played special order without copying', '🌈', 0)
            deck.discardPile.push(cards.SPECIALO)
            specialOrderFreeze = false

            resolveTurn(!usingMenu)
            updateData(false)
            return
          }
          for (let i = 0; i < players[0].stash.length; i++)
            if (e.target.alt == players[0].stash[i].text) {
              players[0].stash.push(players[0].stash[i])
              notify(
                'Copied ' + players[0].stash[i].text + ' with special order',
                '🌈',
                0
              )
              break
            }
          specialOrderFreeze = false
          resolveTurn(!usingMenu)
          updateData(false)
        }
      }

      const Hand = ({ selection }) => {
        return (
          <div className="flex flex-row justify-center">
            {selection.map((card, i) => {
              if (specialOrderFreeze || takeoutBoxFreeze)
                return (
                  <Card
                    key={i}
                    numberName={i}
                    info={card}
                    action={handClick}
                    opacityOn={false}
                    fullDisplay={true}
                  />
                )
              else
                return (
                  <Card
                    key={i}
                    numberName={i}
                    info={card}
                    action={handClick}
                    opacityOn={true}
                    fullDisplay={true}
                  />
                )
            })}
          </div>
        )
      }

      const Stash = ({ platter, alignLeft, interactable }) => {
        let columnColors = []
        let cardColumns = []
        let classStringsLeft = [
          'absolute bottom-0 left-0',
          'absolute bottom-0 left-24',
          'absolute bottom-0 left-48',
          'absolute bottom-0 left-72',
          'absolute bottom-0 left-96',
          'absolute bottom-36 left-0',
          'absolute bottom-36 left-24',
          'absolute bottom-36 left-48',
          'absolute bottom-36 left-72',
        ]
        let classStringsRight = [
          'absolute bottom-0 right-0',
          'absolute bottom-0 right-24',
          'absolute bottom-0 right-48',
          'absolute bottom-0 right-72',
          'absolute bottom-0 right-96',
          'absolute bottom-36 right-0',
          'absolute bottom-36 right-24',
          'absolute bottom-36 right-48',
          'absolute bottom-36 right-72',
        ]

        // Group the cards by color for display
        for (let i = 0; i < platter.length; i++) {
          if (columnColors.indexOf(platter[i].color) == -1) {
            columnColors.push(platter[i].color)
            cardColumns.push([platter[i]])
          } else
            cardColumns[columnColors.indexOf(platter[i].color)].unshift(
              platter[i]
            )
        }

        if (alignLeft)
          return (
            <div>
              {cardColumns.map((cardColumn, i) => {
                return (
                  <div key={i} className={classStringsLeft[i]}>
                    {cardColumn.map((card, j) => {
                      if (interactable)
                        return (
                          <Card
                            key={j}
                            info={card}
                            action={stashClick}
                            fullDisplay={false}
                          />
                        )
                      else
                        return <Card key={j} info={card} fullDisplay={false} />
                    })}
                  </div>
                )
              })}
            </div>
          )
        else
          return (
            <div>
              {cardColumns.map((cardColumn, i) => {
                return (
                  <div key={i} className={classStringsRight[i]}>
                    {cardColumn.map((card, j) => {
                      if (interactable)
                        return (
                          <Card
                            key={j}
                            numberName={j}
                            info={card}
                            action={stashClick}
                            fullDisplay={false}
                          />
                        )
                      else
                        return (
                          <Card
                            key={j}
                            numberName={j}
                            info={card}
                            fullDisplay={false}
                          />
                        )
                    })}
                  </div>
                )
              })}
            </div>
          )
      }

      const Scoreline = ({ name, score, dessert }) => {
        if (dess.includes(guides.PUDDING.type.toString()))
          return (
            <div className="basis-1/2 text-center font-cal text-2xl text-[color:var(--color-nature)]">
              {name}: Score: {score}; Pudding: {dessert}
            </div>
          )
        else if (dess.includes(guides.GTIC.type.toString()))
          return (
            <div className="basis-1/2 text-center font-cal text-2xl text-[color:var(--color-nature)]">
              {name}: Score: {score}; Green Tea Ice Cream: {dessert}
            </div>
          )
        else {
          let [watermelon, pineapple, orange] = parseFruit(dessert)

          return (
            <div className="basis-1/2 text-center font-cal text-2xl text-[color:var(--color-nature)]">
              {name}: Score: {score}; Watermelon: {watermelon}, Pineapple:{' '}
              {pineapple}, Orange: {orange}
            </div>
          )
        }
      }

      if (!showResults)
        return (
          <>
            <div className="flex h-screen flex-col">
              <div className="relative basis-2/5">
                <Stash
                  platter={cpuThreeStash}
                  alignLeft={true}
                  interactable={false}
                />
                <Stash
                  platter={cpuTwoStash}
                  alignLeft={false}
                  interactable={false}
                />
              </div>
              <div className="basis-1/5">
                <div className="flex flex-row">
                  <Scoreline
                    name={players[3].name}
                    score={cpuThreeScore}
                    dessert={cpuThreeDessert}
                  />
                  <Scoreline
                    name={players[2].name}
                    score={cpuTwoScore}
                    dessert={cpuTwoDessert}
                  />
                </div>
                <Hand selection={userHand} />
                <div className="flex flex-row">
                  <Scoreline
                    name={players[0].name}
                    score={userScore}
                    dessert={userDessert}
                  />
                  <Scoreline
                    name={players[1].name}
                    score={cpuOneScore}
                    dessert={cpuOneDessert}
                  />
                </div>
              </div>
              <div className="basis-2/5">
                <Stash
                  platter={userStash}
                  alignLeft={true}
                  interactable={true}
                />
                <Stash
                  platter={cpuOneStash}
                  alignLeft={false}
                  interactable={false}
                />
              </div>
            </div>
          </>
        )
      else {
        const comparePlayers = (a, b) => {
          if (a.score != b.score) return a.score - b.score
          if (a.dessert != b.dessert) return a.dessert - b.dessert
          return a.tiebreak - b.tiebreaker
        }

        let userDessertCount = userDessert
        let cpuOneDessertCount = cpuOneDessert
        let cpuTwoDessertCount = cpuTwoDessert
        let cpuThreeDessertCount = cpuThreeDessert

        // Change dessertCount to number of cards played for fruit
        if (dess[0] == 'fruit') {
          let userFruitCounts = parseFruit(userDessert)
          userDessertCount =
            (userFruitCounts[0] + userFruitCounts[1] + userFruitCounts[2]) / 2
          let cpuOneFruitCounts = parseFruit(cpuOneDessert)
          cpuOneDessertCount =
            (cpuOneFruitCounts[0] +
              cpuOneFruitCounts[1] +
              cpuOneFruitCounts[2]) /
            2
          let cpuTwoFruitCounts = parseFruit(cpuTwoDessert)
          cpuTwoDessertCount =
            (cpuTwoFruitCounts[0] +
              cpuTwoFruitCounts[1] +
              cpuTwoFruitCounts[2]) /
            2
          let cpuThreeFruitCounts = parseFruit(cpuThreeDessert)
          cpuThreeDessertCount =
            (cpuThreeFruitCounts[0] +
              cpuThreeFruitCounts[1] +
              cpuThreeFruitCounts[2]) /
            2
        }

        // Tiebreak is cpuTwo > cpuThree > cpuOne > user
        let displayInfo = [
          {
            name: players[0].name,
            score: userScore,
            dessert: userDessertCount,
            tiebreak: 0,
          },
          {
            name: players[1].name,
            score: cpuOneScore,
            dessert: cpuOneDessertCount,
            tiebreak: 1,
          },
          {
            name: players[2].name,
            score: cpuTwoScore,
            dessert: cpuTwoDessertCount,
            tiebreak: 3,
          },
          {
            name: players[3].name,
            score: cpuThreeScore,
            dessert: cpuThreeDessertCount,
            tiebreak: 2,
          },
        ]

        displayInfo.sort(comparePlayers)

        return (
          <div className="flex h-screen flex-col justify-center">
            <p className="text-center font-cal text-6xl text-[color:var(--color-gold)]">
              {displayInfo[3].name}: {displayInfo[3].score} (
              {displayInfo[3].dessert})
            </p>
            <br></br>
            <p className="text-center font-cal text-6xl text-[color:var(--color-silver)]">
              {displayInfo[2].name}: {displayInfo[2].score} (
              {displayInfo[2].dessert})
            </p>
            <br></br>
            <p className="text-center font-cal text-6xl text-[color:var(--color-bronze)]">
              {displayInfo[1].name}: {displayInfo[1].score} (
              {displayInfo[1].dessert})
            </p>
            <br></br>
            <p className="text-center font-cal text-6xl text-[color:var(--color-nature)]">
              {displayInfo[0].name}: {displayInfo[0].score} (
              {displayInfo[0].dessert})
            </p>
          </div>
        )
      }
    }

    return <CardDisplay />
  }

  if (!showGame)
    return (
      <>
        <OrderScreen />
        <Toaster />
      </>
    )
  else
    return (
      <>
        <GameScreen />
        <Toaster />
      </>
    )
}

export default PlayPage
