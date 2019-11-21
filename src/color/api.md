---
lineNumbers: false
---
# Color API

There are several functions that can control color.

## Color format

```js
// hex
color.format({ r : 255, g : 255, b : 255 }, 'hex')  // #FFFFFF
=
color.hex(255, 255, 255)

// rgb
color.format({ r : 255, g : 255, b : 255 }, 'rgb') // rgba(255, 255, 255, 0.5);

// rgba
color.format({ r : 255, g : 255, b : 255, a : 0.5 }, 'rgb') // rgba(255, 255, 255, 0.5);

// hsl 
color.format({ h: 220, s: 10, l: 10}, 'hsl') // hsl(220, 10%, 10%)

// hsla 
color.format({ h: 220, s: 10, l: 10, a: 0.5}, 'hsl') // hsla(220, 10%, 10%, 0.5)

```


## Color parser 

Obtain the color value from a string of the form rgb, hex, hsl.

```js
color.parse("#FF0000") === { r : 255, g : 0, b : 0 }

color.parse("rgb(255, 0, 0)") == { r : 255, g : 0, b :0 }

color.parse("rgba(255, 0, 0, 0)") == { r : 255, g : 0, b :0, a: 0 }

color.parse(0xff0000) == { r : 255, g : 0, b : 0 }

color.parse(0xff000000) == { r : 255, g : 0, b : 0, a: 0 }

color.parse("hsl(255, 0%, 0%)") == { h : 255, s : 0, l :0 }

color.parse("hsla(255, 0%, 0%, 0)") == { h : 255, s : 0, l :0, a: 0 }
```


## Color multi parser

Find the location of the color code and color in one string.

```js
Color.matches(str) 
```

Let's look at the actual output.

```js

console.log(Color.matches(' rgba(255, 0, 0, 1) thanks to hsl(100, 20%, 20%) and yellow '))

=>

[
    {
        "color": "rgba(255, 0, 0, 1)",
        "startIndex": 1,
        "endIndex": 19
    },
    {
        "color": "hsl(100, 20%, 20%)",
        "startIndex": 30,
        "endIndex": 48
    },
    {
        "color": "yellow",
        "nameColor": "rgb(255, 255, 0)",
        "startIndex": 53,
        "endIndex": 59
    }
]

```

### second multi parser 

```js
console.log(Color.convertMatches(' rgba(255, 0, 0, 1) thanks to hsl(100, 20%, 20%) and yellow ', ','))

=> 

{
    str: ' @0 thanks to @1 and @2 ',
    matches : [
        {
            "color": "rgba(255, 0, 0, 1)",
            "startIndex": 1,
            "endIndex": 19
        },
        {
            "color": "hsl(100, 20%, 20%)",
            "startIndex": 30,
            "endIndex": 48
        },
        {
            "color": "yellow",
            "nameColor": "rgb(255, 255, 0)",
            "startIndex": 53,
            "endIndex": 59
        }
    ]
}
```

### Recover multi parser 2


```js
const ret = Color.convertMatches(' rgba(255, 0, 0, 1) thanks to hsl(100, 20%, 20%) and yellow ', ','))

console.log(Color.reverseMatches (ret.str, ret.matches))

=> 

' rgba(255, 0, 0, 1) thanks to hsl(100, 20%, 20%) and yellow '
```

## Color conversion

### RGB to HSL 

```js
Color.RGBtoHSL(r, g, b) => { h, s, l }
```

### HSL to RGB 

```js
Color.HSLtoRGB(h, s, l) => { r, g, b }
```

### RGB to CMYK

CMYK is a color consisting of C (Cyan), M (Magent), Y (Yellow), and K (Black). The more colors, the darker it becomes. This is the format most commonly used when extracting output.

```js
Color.RGBtoCMYK(r, g, b) => { c, m, y, k }
```
### CMYK to RGB 

```js
Color.CMYKtoRGB(c, m, y, k) => { r, g, b }
```

### HSV to RGB 

Converts HSV format to RGB. You can get the actual RGB color with the HSV code made in the color picker.

```js
Color.HSVtoRGB(h, s, v) => { r, g, b }
```

### RGB to HSV 

```js
Color.RGBtoHSV(r, g, b) => { h, s, v }
```

### HSV to HSL 

Converts HSV format to HSL. You can get the actual HSL color with the HSV code made in the color picker.

```js
Color.HSVtoHSL(h, s, v) => { h, s, l }
```

### HSL to HSV 

```js
Color.HSLtoHSV(h, s, l) => { h, s, v }
```

### Gray Scale 

Gray Scale converts to a color with only brightness. That is, the value between white and black.

```js
Color.c(r, g, b) => { r, g, b }  
Color.RGBtoSimpleGray(r, g, b) => { r, g, b} 
Color.RGBtoGray(r, g, b) => { r, g, b}      // YCrCb 에서 Y 값으로 Gray Scale 만들기
```

::: tip  
Gray Scale information can be found at http://blog.ggaman.com/965 here.
:::

### RGB to YCrCb

Converts RGB to YCrCb. YUV is one of the expression methods. Relative value of Cr and Cb is displayed while maintaining brightness of Y.

```
Y is brightness information, Cr is difference of red in brightness information, Cb is difference of blue in brightness information,
```

If you only have brightness information, you can use it as a gray scale.

```js
Color.RGBtoYCrCb(r, g, b) => { y, cr, cb } 
```

::: tip
It is a kind of color space used in YCrCb imaging system. Y is a luminance component, and Cb and Cr are chrominance components. YCrCb is sometimes abbreviated as YCC. YCrCb is not an absolute color space and is one of the methods of encoding RGB information. The color of the actually visible image depends on the original RGB information used to display the signal. Therefore, the value represented by YCrCb can be predicted only when a standard RGB color is used, or when an ICC profile to be used for color conversion is attached.

Source: https://www.wikipedia.org/wiki/YCbCr
:::

### YCrCb to RGB 

```js
Color.YCrCbtoRGB(y, cr, cb, bit)  => { r, g, b }
```

### XYZ to RGB 

```js
Color.XYZtoRGB(x, y, z) => { r, g, b }
```

### RGB to XYZ 

```js
Color.RGBtoXYZ(r, g, b) => { x, y, z }
```

### LAB to XYZ 

```js
Color.LABtoXYZ(l, a, b) => { x, y, z }
```

### XYZ to LAB 

```js
Color.XYZtoLAB(x, y, z)  => { l, a, b }
```

### RGB to LAB 

```js
Color.RGBtoLAB(r, g, b) => { l, a, b }
```

::: tip 
Lab The biggest advantage of color space is that it is independent of media, unlike RGB or CMYK. L * a * b * color space is defined based on the study of human vision, unlike the color space where color differs depending on the display equipment or print medium. In particular, the L value, the luminance axis, is designed to correspond to the brightness felt by humans.

The color gamut of the Lab color space is much larger than the color gamut that can be perceived by humans as well as computer displays and print media. Therefore, it should be expressed more precisely than RGB or CMYK. Until the 1980s, most image formats supported only 8 bits, which made them unsuitable for representing Lab color space, but nowadays most of the formats support 16-bit images.

Source: https://www.wikipedia.org/wiki/Lab_%EC%83%89_%EA%B3%B5%EA%B0%84

:::


### LAB to RGB 

```js
Color.LABtoRGB(l, a, b) => { r, g, b}
```

::: tip 
CIE L * a * b * In the color space, the L * value represents brightness. When L * = 0, it is black, and when L * = 100, it represents white. a * indicates whether it is red or green. If a * is negative, it is a greenish color; if positive, it is a red / violet color. b * represents yellow and blue. If b * is negative and blue is positive b * is positive.

Also, according to the result that human color perception is nonlinear, the L * a * b * color space has a nonlinear relationship with the wavelength of actual light. Also, the distances of two different colors in the L * a * b * space are designed to be proportional to the difference in color felt by humans.

Since the RGB and CMYK color spaces are not media independent, they must first be converted to absolute color spaces such as sRGB or Adobe RGB to convert them to L * a * b * color space.

Source: https://www.wikipedia.org/wiki/Lab_%EC%83%89_%EA%B3%B5%EA%B0%84

:::

## Color Scale 

Scaling Color is a way of finding colors with continuity. Let's see what it is.

### Saturation Scale 

```js
Color.scaleS(color, 100, 'hex');   // Saturation 
```

<ClientOnly>
<color-saturation-scale />
</ClientOnly>

### Value Scale 

```js
Color.scaleV(color, 100, 'hex');   // Value 
```

<ClientOnly>
<color-value-scale />
</ClientOnly>

### Template Scale 

```js
Color.scale.hsv(40);
```
<ClientOnly>
<color-template-scale :colors="['hsv']" :count="40" />
</ClientOnly>

```js
Color.scale.parula(20);
```

<ClientOnly>
<color-template-scale :colors="['parula']" :count="20" />
</ClientOnly>

```js
Color.scale.jet(20);
```

<ClientOnly>
<color-template-scale :colors="['jet']" :count="20" />
</ClientOnly>

```js
Color.scale.hot(20);
```

<ClientOnly>
<color-template-scale :colors="['hot']" :count="20" />
</ClientOnly>

```js
Color.scale.pink(20);
```

<ClientOnly>
<color-template-scale :colors="['pink']" :count="20" />
</ClientOnly>

```js
Color.scale.bone(20);
```

<ClientOnly>
<color-template-scale :colors="['bone']" :count="20" />
</ClientOnly>

```js
Color.scale.copper(20);
```

<ClientOnly>
<color-template-scale :colors="['copper']" :count="20" />
</ClientOnly>

### Custom Scale 

```js
Color.scale(['red', 'rgba(255, 255, 0, 0.5)'], 50);
```

<ClientOnly>
<color-template-scale :colors="['red', 'rgba(255, 255, 0, 0.5)']" :count="50" />
</ClientOnly>

```js
Color.scale(['red', 'blue'], 25);
```

<ClientOnly>
<color-template-scale :colors="['red', 'blue']" :count="25" />
</ClientOnly>

```js
Color.scale(['red', 'black'], 105);
```

<ClientOnly>
<color-template-scale :colors="['red', 'black']" :count="105" />
</ClientOnly>

::: tip
`count` defined in` scale` is the interval (count) between the previous color and the subsequent color.
:::


### Gradient Scale 

A gradient can be constructed by dividing the range of colors.

```js
Color.gradient('red, black', 30);
```

<ClientOnly>
<color-gradient-scale colors="red, black" :count="30" />
</ClientOnly>

#### alpha scale

```js
Color.gradient('red, rgba(255, 255, 0, 0.5)', 30);
```

<ClientOnly>
<color-gradient-scale colors="red, rgba(255, 255, 0, 0.5)" :count="30" />
</ClientOnly>

#### color stop  

`color` If you enter a color in the form` stop-over`, the color is listed at the specified position in the sequence.

```js
Color.gradient('red, rgba(255, 255, 0, 0.8) 0.3, yellow 0.7, black', 100);
```

<ClientOnly>
<color-gradient-scale colors="red, rgba(255, 255, 0, 0.8) 0.3, yellow 0.7, black" :count="100" />
</ClientOnly>

::: tip
`count` defined in` gradient` is the total number of colors.
:::