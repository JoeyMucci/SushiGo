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

import { Label, Form, Submit, CheckboxField } from '@redwoodjs/forms'

const HomePage = () => {
  return (
    <>
      <Form>
        <div className="flex flex-col items-center">
          <div className="flex flex-row">
            <Label className="m-2">
              <CheckboxField id="maki" name="Roll" />
              <img src={maki} alt="maki roll" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField id="temaki" name="Roll" />
              <img src={temaki} alt="temaki roll" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField id="uramaki" name="Roll" />
              <img src={uramaki} alt="uramaki roll" className="h-48 w-36" />
            </Label>
          </div>
          <div className="flex flex-row">
            <Label className="m-2">
              <CheckboxField id="chopsticks" name="Spec" />
              <img src={chopsticks} alt="chopsticks" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField id="spoon" name="Spec" />
              <img src={spoon} alt="spoon" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField id="menu" name="Spec" />
              <img src={menu} alt="menu" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField id="takeoutbox" name="Spec" />
              <img src={takeoutbox} alt="takeout box" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField id="tea" name="Spec" />
              <img src={tea} alt="tea" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField id="wasabi" name="Spec" />
              <img src={wasabi} alt="wasabi" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField id="soysauce" name="Spec" />
              <img src={soysauce} alt="soysauce" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField id="specialorder" name="Spec" />
              <img
                src={specialorder}
                alt="special order"
                className="h-48 w-36"
              />
            </Label>
          </div>
          <div className="flex flex-row">
            <Label className="m-2">
              <CheckboxField id="dumpling" name="App" />
              <img src={dumpling} alt="dumpling" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField id="tempura" name="App" />
              <img src={tempura} alt="tempura" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField id="sashimi" name="App" />
              <img src={sashimi} alt="sashimi" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField id="misosoup" name="App" />
              <img src={misosoup} alt="miso soup" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField id="edamame" name="App" />
              <img src={edamame} alt="edamame" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField id="specieellorder" name="App" />
              <img src={eel} alt="eel" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField id="tofu" name="App" />
              <img src={tofu} alt="tofu" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField id="onigiri" name="App" />
              <img src={onigiri} alt="onigiri" className="h-48 w-36" />
            </Label>
          </div>
          <div className="flex flex-row">
            <Label className="m-2">
              <CheckboxField id="pudding" name="Dessert" />
              <img src={pudding} alt="pudding" className="h-48 w-36" />
            </Label>
            <Label className="m-2">
              <CheckboxField id="greenteaicecream" name="Dessert" />
              <img
                src={greenteaicecream}
                alt="green tea ice cream"
                className="h-48 w-36"
              />
            </Label>
            <Label className="m-2">
              <CheckboxField id="fruit" name="Dessert" />
              <img src={fruit} alt="fruit" className="h-48 w-36" />
            </Label>
          </div>
        </div>
      </Form>
    </>
  )
}

export default HomePage
