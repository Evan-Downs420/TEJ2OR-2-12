/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Evan
 * Created on: Mar 2026
 * This program will turn all the neopixels to red, if the distance is < 10 cm and also turn the neopixels to green, if the distance is >= 10 cm
*/

// variable
let neopixelStrip: neopixel.Strip = null
let distance = 0

// clean
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

// press a
input.onButtonPressed(Button.A, function(){
    if (distance = 10) {0
      basic.clearScreen()
      neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
      neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
      neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
      neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
      neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
      neopixelStrip.show()
  } else {
    
}    
})
