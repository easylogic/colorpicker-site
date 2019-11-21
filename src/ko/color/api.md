---
lineNumbers: false
---
# Color API

색을 컨트롤 할 수 있는 몇가지 함수들 입니다. 


## Color 문자열 변환 

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


## Color 파서 

rgb, hex, hsl 형식의 문자열에서 컬러값을 구한다. 

```js
color.parse("#FF0000") === { r : 255, g : 0, b : 0 }

color.parse("rgb(255, 0, 0)") == { r : 255, g : 0, b :0 }

color.parse("rgba(255, 0, 0, 0)") == { r : 255, g : 0, b :0, a: 0 }

color.parse(0xff0000) == { r : 255, g : 0, b : 0 }

color.parse(0xff000000) == { r : 255, g : 0, b : 0, a: 0 }

color.parse("hsl(255, 0%, 0%)") == { h : 255, s : 0, l :0 }

color.parse("hsla(255, 0%, 0%, 0)") == { h : 255, s : 0, l :0, a: 0 }
```


## Color 멀티 파서 

하나의 문자열에서 색상 코드와 색상의 위치를 찾아준다. 

```js
Color.matches(str) 
```

실제 결과물을 보자. 

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

### 멀티 파서 2 

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

### 멀티파서 2 복구하기 


```js
const ret = Color.convertMatches(' rgba(255, 0, 0, 1) thanks to hsl(100, 20%, 20%) and yellow ', ','))

console.log(Color.reverseMatches (ret.str, ret.matches))

=> 

' rgba(255, 0, 0, 1) thanks to hsl(100, 20%, 20%) and yellow '
```

## Color 변환 

### RGB to HSL 

```js
Color.RGBtoHSL(r, g, b) => { h, s, l }
```

### HSL to RGB 

```js
Color.HSLtoRGB(h, s, l) => { r, g, b }
```

### RGB to CMYK

CMYK 는 C (Cyan), M (Magent), Y(Yellow), K (Black) 으로 이루어진 색입니다. 색을 더할 수록 어두워 집니다. 출력물을 뽑을 때 많이 사용하는 형식입니다. 

```js
Color.RGBtoCMYK(r, g, b) => { c, m, y, k }
```
### CMYK to RGB 

```js
Color.CMYKtoRGB(c, m, y, k) => { r, g, b }
```

### HSV to RGB 

HSV 형식을 RGB 로 변환합니다.  컬러피커에서 만들어진 HSV 코드로 실제 RGB 컬러를 얻을 수 있습니다. 

```js
Color.HSVtoRGB(h, s, v) => { r, g, b }
```

### RGB to HSV 

```js
Color.RGBtoHSV(r, g, b) => { h, s, v }
```

### HSV to HSL 

HSV 형식을 HSL 로 변환합니다.  컬러피커에서 만들어진 HSV 코드로 실제 HSL 컬러를 얻을 수 있습니다. 

```js
Color.HSVtoHSL(h, s, v) => { h, s, l }
```

### HSL to HSV 

```js
Color.HSLtoHSV(h, s, l) => { h, s, v }
```

### Gray Scale 

Gray Scale 은 명도만 갖는 색으로 변환합니다. 즉 흰색에서 검은색 사이에 있는 값을 가리킵니다.

```js
Color.c(r, g, b) => { r, g, b }  
Color.RGBtoSimpleGray(r, g, b) => { r, g, b} 
Color.RGBtoGray(r, g, b) => { r, g, b}      // YCrCb 에서 Y 값으로 Gray Scale 만들기
```

::: tip  
Gray Scale 정보는 http://blog.ggaman.com/965 여기에서 확인 하시기 바랍니다.
:::

### RGB to YCrCb

RGB 를 YCrCb 로 변환합니다.  YUV 표현 방법중 하나입니다.  Y 라는 밝기를 유지한채 Cr, Cb 의 상대값을 나타냅니다. 

```
Y 는 밝기 정보, Cr 는 밝기 정보에서 빨간색의 차이, Cb 는 밝기 정보에서 파란색의 차이
```

밝기 정보만 있으면 Gray Scale 로 사용할 수 있습니다.  

```js
Color.RGBtoYCrCb(r, g, b) => { y, cr, cb } 
```

::: tip
YCrCb 영상 시스템에서 사용되는 색공간의 일종이다. Y 는 휘도 성분이며 Cb 와 Cr 은 색차 성분이다. YCrCb 은 가끔 YCC 라고 줄여 부르기도 한다. YCrCb 은 절대 색공간 이 아니며 RGB 정보를 인코딩하는 방식의 하나로, 실제로 보이는 이미지의 색은 신호를 디스플레이 하기 위해 사용된 원본 RGB 정보에 의존한다. 따라서 YCrCb 로 표현된 값은 표준 RGB 색상이 사용된 경우거나, 색상을 변환하기 위해 사용할 ICC 프로파일을 첨부한 경우에만 예측할 수 있다.

출처: https://ko.wikipedia.org/wiki/YCbCr
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
Lab 색 공간의 가장 큰 장점은 RGB나 CMYK와 달리 매체에 독립적이라는 것이다. 디스플레이 장비나 인쇄 매체에 따라 색이 달라지는 색 공간과 달리 L*a*b* 색 공간은 인간의 시각에 대한 연구를 바탕으로 정의되었다. 특히 휘도 축인 L 값은 인간이 느끼는 밝기에 대응하도록 설계되었다.

Lab 색 공간의 색역은 컴퓨터 디스플레이나 인쇄 매체는 물론 인간이 지각할 수 있는 색 영역보다도 훨씬 크다. 따라서 RGB나 CMYK보다 더 정밀한 값으로 표현해야 한다. 80년대까지 대부분의 이미지 포맷은 8비트만을 지원하였으므로 Lab 색 공간을 표현하기에 부적합했으나, 지금은 대부분의 포맷이 16비트 이미지를 지원하므로 이러한 문제가 없다.

출처 : https://ko.wikipedia.org/wiki/Lab_%EC%83%89_%EA%B3%B5%EA%B0%84

:::


### LAB to RGB 

```js
Color.LABtoRGB(l, a, b) => { r, g, b}
```

::: tip 
CIE L*a*b* 색 공간에서 L* 값은 밝기를 나타낸다. L* = 0 이면 검은색이며, L* = 100 이면 흰색을 나타낸다. a*은 빨강과 초록 중 어느쪽으로 치우쳤는지를 나타낸다. a*이 음수이면 초록에 치우친 색깔이며, 양수이면 빨강/보라 쪽으로 치우친 색깔이다. b*은 노랑과 파랑을 나타낸다. b*이 음수이면 파랑이고 b*이 양수이면 노랑이다.

또한, 인간의 색 지각이 비선형이라는 연구 결과에 따라, L*a*b* 색 공간은 실제 빛의 파장과 비선형적 관계를 갖는다. 또한 L*a*b* 공간에서 서로 다른 두 색의 거리는 인간이 느끼는 색깔의 차이와 비례하도록 설계되었다.

RGB 및 CMYK 색 공간은 매체에 독립적이지 않기 때문에, 이들 색 공간을 L*a*b* 색 공간으로 변환하려면 먼저 sRGB나 어도비 RGB 등의 절대 색 공간으로 변환해야 한다.

출처 : https://ko.wikipedia.org/wiki/Lab_%EC%83%89_%EA%B3%B5%EA%B0%84

:::

## Color 늘리기 

Color 늘리기는 연속성을 갖는 색을 찾는 방법입니다. 어떤 것이 있는지 한번 보시죠. 

### Saturation(채도) Scale 

```js
Color.scaleS(color, 100, 'hex');   // Saturation 
```

<ClientOnly>
<color-saturation-scale />
</ClientOnly>

### Value(명도) Scale 

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
`scale` 에 정의되는 `count` 는 이전 색과 이후 색의 간격(개수)입니다.
:::


### Gradient Scale 

gradient 는 색의 범위를 나눠서 구성할 수 있다.  

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

`color` `stop-over`  형태로 색을 입력하면 연속된 결과 중에 지정된 위치에 색이 나열된다. 

```js
Color.gradient('red, rgba(255, 255, 0, 0.8) 0.3, yellow 0.7, black', 100);
```

<ClientOnly>
<color-gradient-scale colors="red, rgba(255, 255, 0, 0.8) 0.3, yellow 0.7, black" :count="100" />
</ClientOnly>

::: tip
`gradient` 에 정의되는 `count` 는 전체 색의 개수입니다.
:::