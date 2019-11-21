---
home: false
# layout: false
#actionText: Get Started →
#actionLink: /guide/
---

# Color

There are many ways to define colors, and there are many color pickers that use such a theory. It describes colors that are supported by the Chrome Developer Tools color picker.

## RGB (red, green, blue)

Red, Green, Blue combines three colors to create one color. The more each color, the brighter the color and closer to white. It can be used in several forms as shown below.

```css
#ffffff
rgb(255, 0, 0);
rgba(255, 0, 0, 0.5)
```

You can create a string in hexadecimal digits by specifying each number in RGB format and specifying `#`, or it can be represented as a color string in the form of a function called rgb ().

## HSL (Hue, Saturation, Lightness)

There is a method called HSL in the way of making color. Hue stands for the color wheel which is 360 degrees. 0 is red, 120 is green is red, 240 is blue, and 360 is red and 0 is combined. Saturation is a percentage value. 0% means grayscale and 100% means original color (the color value specified in Hue). Lightness also has a percentage value. 0% is black and 100% is white. Let's see how to display it.

```css
hsl(220, 30%, 30%)
hsla(220, 30%, 60%, 0.5)
```

## About Alpha

Among the above codes are rgba and hsla. The last a represents the transparency value called Alpha value.


```css
rgba(255, 0, 0, 0.5)
hsla(200, 30%, 50%, 0.5)
```

0 means transparency, 1 means opaque, and the decimal point represents transparency. Transparency means that you can combine with other colors and overlap with other colors to create a completely different color.

## Color conversion
 
Let's look at converting rgb and hsl.

```
rgb -> hsl (O)
hsl -> rgb (O)
```

Both are possible stories.

```js
Color.RGBtoHSL(r, g, b) => { h, s, l }
Color.HSLtoRGB(h, s, l) => { r, g, b }
```

All colors can be converted to RGB standard. This is because it is easier for people to recognize. Colors can also be converted to more various forms.

```js
Color.CMYKtoRGB(c, m, y, k) => { r, g, b }
Color.RGBtoCMYK(r, g, b) => { c, m, y, k }
Color.HSVtoRGB(h, s, v) => { r, g, b }
Color.RGBtoHSV(r, g, b) => { h, s, v }
Color.HSVtoHSL(h, s, v) => { h, s, l }
Color.HSLtoHSV(h, s, l) => { h, s, v }
Color.RGBtoHSL(r, g, b) => { h, s, l }
Color.HSLtoRGB(h, s, l) => { r, g, b }
Color.c(r, g, b) => { r, g, b }  // gray scale 
Color.RGBtoSimpleGray(r, g, b) => { r, g, b} // gray scale 
Color.RGBtoGray(r, g, b) => { r, g, b} // gray scale 
Color.RGBtoYCrCb(r, g, b) => { y, cr, cb } 
Color.YCrCbtoRGB(y, cr, cb, bit)  => { r, g, b }
Color.XYZtoRGB(x, y, z) => { r, g, b }
Color.RGBtoXYZ(r, g, b) => { x, y, z }
Color.LABtoXYZ(l, a, b) => { x, y, z }
Color.XYZtoLAB(x, y, z)  => { l, a, b }
Color.RGBtoLAB(r, g, b) => { l, a, b }
Color.LABtoRGB(l, a, b) => { r, g, b}

```

For more information on the functions listed here, please see [here](/colorpicker/api.html).

## Color composite

Composite refers to mixing two colors to create a new color. It also provides functions for compositing.


```js
Color.blend(startColor, endColor, ratio = 0.5, format = 'hex')
Color.mix = Color.blend 
```

<span class="rect red"> red</span>, and <span class="rect yellow"> yellow</span> in the range of 0.5, <span class="rect orange">orange</span> color will appear.

Combining colors means that you can get the color between two specific colors. 
By setting the ratio to a different value, you can extract more colors.


## Scaling color

This is a function that allows you to vary the ratio by using the color matching method. Makes a neutral color among two or more specific colors.

```js
Color.scale([colors], count = 5) => [ 'xxx', .... ] 
```

By default, each color specified by colors is divided into counts to make the final array. For example, what if you want to get a neutral color based on the colors of <span class="rect red">red</span> and <span class="rect yellow">yellow</span>?


```js
Color.blend('red', 'yellow', 0.1)
Color.blend('red', 'yellow', 0.2)
Color.blend('red', 'yellow', 0.3)
....
Color.blend('red', 'yellow', 0.9)
Color.blend('red', 'yellow', 1)
```

In this way, you can list multiple colors by scaling them, but you can get them simply by using the scale function.

```js
Color.scale(['red', 'yellow'], 10) => [ '#xxx', ... ] 
```

This function creates 10 colors between <span class="rect red">red</span> and <span class="rect yellow">yellow</span>. 
Since the color list is arranged in an array, you can specify various colors at once.

There are some scale functions we have made in this way.

```js 
Color.scale.parula(count)
color.scale.jet(count) 
color.scale.hsv(count) 
color.scale.hot(count) 
color.scale.pink(count)
color.scale.bone(count)
color.scale.copper(count)
```

Each function specifies the color to be scaled according to the incoming count.

```js
color.scale.parula = function (count) {
    return color.scale(['#352a87', '#0f5cdd', '#00b5a6', '#ffc337', '#fdff00'], count);
};
```

This will allow you to pre-create your own colors and use them in stages.

::: tip
This is useful when you want to show different colors step by step, such as in a chart.
:::

To express the heat, you can use the following form.

```js
Color.scale.hot(20);
```

<ClientOnly>
<color-template-scale :colors="['hot']" :count="20" />
</ClientOnly>


## K-means 

Sometimes I want to know the color that is the most used among the myriad colors I have. You can use the function below.


```js
Color.palette(colors, k = 6, format = 'hex') 
```

colors is the color array and k is the number of colors to be finalized. When there are 100 colors in colors, you can create as many groups as k and draw the final color.

::: tip
Internally, use the [K-means](http://norman3.github.io/prml/docs/chapter09/1.html) algorithm to extract the final color.

This is useful for extracting colors from a pixel image.
:::

The following code actually passes 16 pixels to the palette function in the actual image.

```js
Color.ImageToRGB(blob, { maxWidth: 100 }, function (results) {
    const colors = Color.palette(results, 16);

    console.log(colors)
})
```