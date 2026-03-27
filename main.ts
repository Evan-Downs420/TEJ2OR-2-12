/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Evan
 * Created on: Mar 2026
 * This program will turn all the neopixels to red, if the distance is < 10 cm and also turn the neopixels to green, if the distance is >= 10 cm
*/

// variable
const strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
let distance = 0

strip.clear()
strip.show()

basic.showIcon(IconNames.Happy)

// press a
input.onButtonPressed(Button.A, function(){
    sonar.ping(DigitalPin.P8, DigitalPin.P12, PingUnit.Centimeters)
    if (distance < 10) {
      strip.showColor(neopixel.colors(NeoPixelColors.Red))
  } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
  }
  strip.show()
  basic.showNumber(distance)
})
