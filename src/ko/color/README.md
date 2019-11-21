---
home: false
# layout: false
#actionText: Get Started →
#actionLink: /guide/
---

# Color

색을 정의하는 방법에는 무수히 많은 방법이 존재하고 그런 이론을 사용한 많은 컬러피커들이 존재합니다. 

여기에는 크롬개발자도구 컬러피커를 기준으로 지원하는 색에 대해서 설명을 합니다. 

## RGB (red, green, blue)

일반적으로 Red, Green, Blue 3가지 색을 합쳐서 하나의 색을 만듭니다. 각각의 색을 더 할 수록 밝은 색이 되고 흰색에 가까워집니다.  

아래와 같이 몇가지 형태로 사용 할 수 있습니다. 

```css
#ffffff
rgb(255, 0, 0);
rgba(255, 0, 0, 0.5)
```

RGB 형태로 각각의 숫치를 정하고 `#`을 지정해서 16진수 숫자형태로 문자열을 만들 수 도 있고 rgb() 라는 함수 형태의 색상 문자열로 나타낼 수 있습니다.  


## HSL (Hue, Saturation, Lightness)

색을 만드는 방법 중에 HSL 이라는 방식이 있습니다. 

Hue 는 360도로 이루어진 color wheel 을 의미합니다. 0 은 빨강(red), 120도는 초록(green) is red, 240도는 파랑(blue) 계통으로 번지고 다시 360도는 빨강으로 0도와 같이 합쳐집니다.

Saturation(채도)는 백분율 값입니다. 0%는 회색 음영을, 100%는 원래 컬러(Hue 에서 지정한 컬러값)를 의미합니다.

Lightness(밝기)도 백분율 값을 가집니다. 0%는 검은색, 100%는 흰색에 가까워집니다.

표시 방법에 대해서 알아봅시다.

```css
hsl(220, 30%, 30%)
hsla(220, 30%, 60%, 0.5)
```

## Alpha에 관하여 

위의 코드 들 중에 보면 rgba, hsla 같은 형태가 있습니다. 마지막 a 는 Alpha 값이라는 투명도 값을 나타내고 있습니다. 

```css
rgba(255, 0, 0, 0.5)
hsla(200, 30%, 50%, 0.5)
```

0은 투명, 1은 불투명을 뜻하고 그 사이 소수점으로 투명도를 나타냅니다. 

투명하다는 것은 다른 색과 합칠 수 있다는 말이고 다른 색과 겹쳐서 전혀 다른 색을 만들어 낼 수 있습니다. 


## 색의 변환 

rgb, hsl 같은 색을 표시하는 방법이 있는 것을 알았으니 색의 변환에 대해서 알아볼게요. 

```
rgb -> hsl 로 변환할 수 있다. (O)
hsl -> rgb 로 변환할 수 있다. (O)
```

두 개는 모두 가능한 이야기입니다. 

```js
Color.RGBtoHSL(r, g, b) => { h, s, l }
Color.HSLtoRGB(h, s, l) => { r, g, b }
```

색상은 모두 RGB 기준으로 변환이 가능합니다. 그래야 좀 더 사람이 인지하기 쉽기 때문입니다. 

색은 좀 더 다양한 형태로도 변환 할 수 있습니다. 

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

여기에 적혀 있는 함수에 대한 자세한 이야기 들은  [여기](/ko/color/api.html) 에서 확인 하시면 됩니다. 

## 색의 합성 

합성은 두 가지 색을 섞어서 새로운 색을 만들어 내는 것을 말합니다. 

합성에 대한 함수도 제공하고 있습니다. 

```js
Color.blend(startColor, endColor, ratio = 0.5, format = 'hex')
Color.mix = Color.blend 
```

<span class="rect red"> red</span>, <span class="rect yellow"> yellow</span>  를  0.5 범위 내에서 두 색을 섞으면  <span class="rect orange">주황색</span> 이 나오게 됩니다. 

색을 합친다는 것은 특정한 두 색 사이의 색을 구할 수 있게 됩니다. ratio 만 다르게 설정하면 좀 더 다양한 색을 뽑아낼 수 있습니다. 

## 색상 늘리기 

색을 합치는 방식을 사용해서 ratio 를 다양하게 조절 할 수 있게 해주는 함수 입니다. 

두개 이상의 특정 색상 중에 중간 색상을 만들어준다. 

```js
Color.scale([colors], count = 5) => [ 'xxx', .... ] 
```

기본 적으로 colors 로 지정된 각각의 색상을 count 로 나눠서 최종 배열로 만들어준다. 

예를 들어  <span class="rect red"> red</span> 와 <span class="rect yellow"> yellow</span> 의 색을 기준으로 중간 색을 구해서 나열 할려면 어떻게 해야할까요? 

```js
Color.blend('red', 'yellow', 0.1)
Color.blend('red', 'yellow', 0.2)
Color.blend('red', 'yellow', 0.3)
....
Color.blend('red', 'yellow', 0.9)
Color.blend('red', 'yellow', 1)
```

이런식으로 색에 대한 비율을 조정해서 여러개로 나열 할 수도 있지만  간단하게 scale 함수를 사용해서 구할 수 있습니다. 

```js
Color.scale(['red', 'yellow'], 10) => [ '#xxx', ... ] 
```

이 함수는 <span class="rect red"> red</span> 와 <span class="rect yellow"> yellow </span> 사이에 10가지 색을 만들어줍니다.  색상 리스트가 배열형태로 들어가기 때문에 다양한 색을 한번에 지정해서 사용 할 수도 있습니다. 

이런 형태로 미리 만들어둔 scale 함수들이 있습니다. 

```js 
Color.scale.parula(count)
color.scale.jet(count) 
color.scale.hsv(count) 
color.scale.hot(count) 
color.scale.pink(count)
color.scale.bone(count)
color.scale.copper(count)
```

각각의 함수는 들어온 count 에 따라 scale 될 색상을 지정해놨습니다. 

```js
color.scale.parula = function (count) {
    return color.scale(['#352a87', '#0f5cdd', '#00b5a6', '#ffc337', '#fdff00'], count);
};
```

이렇게 하면 자신 만의 색을 미리 만들어서 단계별로 분류해서 사용할 수 있게 됩니다. 

::: tip
차트 같은 곳에서 단계별로 다른 색을 보여 줄 때 유용합니다. 
:::

뜨거움을 표현 할려면 아래와 같은 형태로 해볼 수 있습니다. 

```js
Color.scale.hot(20);
```

<ClientOnly>
<color-template-scale :colors="['hot']" :count="20" />
</ClientOnly>


## 대표색(K-means) 뽑아오기 

가끔 내가 가지고 있는 무수히 많은 색 중에 가장 많이 쓰이는 색을 알고 싶을 때가 있습니다. 

그럴 때는 아래의 함수를 사용하면 됩니다. 

```js
Color.palette(colors, k = 6, format = 'hex') 
```

colors 는 색상 배열이 들어가고 k 는 최종적으로 고를 색상의 개수를 적습니다. 

colors 에 100개의 색상이 있을 때 k 개수 만큼의 집단을 만들어서 최종 색상을 뽑아냅니다.

::: tip
내부적으로 [K-means](http://norman3.github.io/prml/docs/chapter09/1.html) 알고리즘을 사용하여 최종 색상을 뽑습니다. 

픽셀로 이루어진 이미지에서 색을 뽑아 낼 때 유용하게 사용할 수 있습니다. 
:::

아래 코드는 실제 이미지에서 pixel 을 palette 함수로 넘겨서 실제로 16가지의 색을 선택합니다.

```js
Color.ImageToRGB(blob, { maxWidth: 100 }, function (results) {
    const colors = Color.palette(results, 16);

    console.log(colors)
})
```