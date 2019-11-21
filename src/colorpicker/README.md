---
home: false
# layout: false
#actionText: Get Started →
#actionLink: /guide/
---

# ColorPicker

If you have a UI that is not created the most while creating UI and charts, it would be a color picker.

Once you say color, you are unfamiliar with the developer. This is because we have to learn a completely different type of concept.

There are few projects that can handle colors more accurately.

Thanks to that, there is a lot of possibility that someone will use only the color that is already set.

So I did not have to pick a color.


## What is ColorPicker 

A color picker is a tool that allows you to select a color for a specific area.

I would like to have some color at this point, but I have to color it so that it can be combined with RGB one by one.

So you can see the structure of the color on the screen and bring the color you want with the mouse or other tools.

<ClientOnly>
<colorpicker />
</ClientOnly>

## How does it work?

There are countless ways to pick colors.

Among them, we mainly use the RGB color space.

```js
#ffffff         // white
rgb(0, 0, 0)    // black 
rgb(255, 0, 0)  // red 
rgb(255, 255, 255) // white
rgb(0, 255, 0)  // green
rgb(0, 0, 255)  // blue
rgb(23, 203, 120)   // ? 
```

However, with RGB alone, it is difficult to fully combine colors that people perceive.

So we construct the new form as below.

<ClientOnly>
<colorpicker-structure />
</ClientOnly>

Please mouse over in colorpicker.

From the left, calculate the RGB to be actually displayed with the values ​​Hue, Saturation, Value (or Brightness).

The color picker that we introduce from now on will also be able to select various colors with H, S, V 3 values.

## HSV & RGB 

You can create a color based on Hue, Saturation, and Value and convert it to RGB.
The reason for doing this is because it is a color space that is more easily perceived by people.

### HSVtoRGB

Once HSV is obtained, it can be converted to RGB.

```js
HSVtoRGB(h, s, v) {
    if (arguments.length == 1) {
        var { h, s, v } = arguments[0];
    }

    var H = h;
    var S = s;
    var V = v;

    if (H == 360) {
        H = 0;
    }

    const C = S * V;
    const X = C * (1 - Math.abs((H / 60) % 2 - 1));
    const m = V - C;

    let temp = [];

    if (0 <= H && H < 60) { temp = [C, X, 0]; }
    else if (60 <= H && H < 120) { temp = [X, C, 0]; }
    else if (120 <= H && H < 180) { temp = [0, C, X]; }
    else if (180 <= H && H < 240) { temp = [0, X, C]; }
    else if (240 <= H && H < 300) { temp = [X, 0, C]; }
    else if (300 <= H && H < 360) { temp = [C, 0, X]; }

    return {
        r: Math.round((temp[0] + m) * 255),
        g: Math.round((temp[1] + m) * 255),
        b: Math.round((temp[2] + m) * 255)
    };
}
```

Since it can be converted to RGB through the HSV principle, finally, the RGB color of the desired area can be selected.

::: tip
HSV can not completely cover the RGB area. It is better to use RGB as the final color.
:::

### RGBtoHSV

If you have RGB, you can convert it to HSV and actually display the status on the UI.

```js
 RGBtoHSV(r, g, b) {

    if (arguments.length == 1) {
        var { r, g, b } = arguments[0];
    }

    const R1 = r / 255;
    const G1 = g / 255;
    const B1 = b / 255;

    const MaxC = Math.max(R1, G1, B1);
    const MinC = Math.min(R1, G1, B1);

    const DeltaC = MaxC - MinC;

    var H = 0;

    if (DeltaC == 0) { H = 0; }
    else if (MaxC == R1) {
        H = 60 * (((G1 - B1) / DeltaC) % 6);
    } else if (MaxC == G1) {
        H = 60 * (((B1 - R1) / DeltaC) + 2);
    } else if (MaxC == B1) {
        H = 60 * (((R1 - G1) / DeltaC) + 4);
    }

    if (H < 0) {
        H = 360 + H;
    }

    var S = 0;

    if (MaxC == 0) S = 0;
    else S = DeltaC / MaxC;

    var V = MaxC;

    return { h: H, s: S, v: V };
}
```

::: tip
As the HSV can not completely cover RGB, the correct value may not drop when converting from RGB to HSV.
:::


###  How to make Hue color

Hue is just another word for color.

You can make it with CSS in the following simple way.

```css
background: linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);
```

<ClientOnly>
<hue-color />
</ClientOnly>

Since it has a value from 0 to 360, the value is determined according to the position of the mouse pointer.

### How to make Saturation

`Saturation` defines the brilliance and intensity of a color.  When it is 100%, it is the original color.

<ClientOnly>
<colorpicker-structure :saturation="true" />
</ClientOnly>

Please mouse over in colorpicker.

### How to make Value

`Value` is color's brightness. The closer to the upper (100%), the closer to the original color, and the lower (0%) the darker.

<ClientOnly>
<colorpicker-structure :value="true" />
</ClientOnly>

Please mouse over in colorpicker.

