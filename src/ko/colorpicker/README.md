---
home: false
# layout: false
#actionText: Get Started →
#actionLink: /guide/
---

# ColorPicker

UI 와 차트를 계속 만들어 오면서 가장 만들어지지 않는 UI 가 하나 있다면 컬러피커일 것이다. 

일단 색이라고 하면 개발자에게는 낯설다. 왜냐하면 지금까지와는 전혀 다른 유형의 개념을 익혀야 하기 때문이다. 

좀 더 정확히 이야기 하면 색을 다룰 수 있는 프로젝트가 거의 없다. 

덕분에 누군가가 이미 정해준 색만 사용할 가능성이 많다.  

그래서 굳이 내가 색을 고를 필요가 없었던 것이다. 



## 컬러피커는 무엇인가요?

컬러피커는 특정한 영역의 색을 선택할 수 있게 만들어 주는 도구이다.  

이쯤에서 어떤 색이 있으면 좋겠는데  RGB 로 숫자로 표현해서 하나 하나 맞추자니 너무 조합해야할 색상이 많다. 

그래서 화면에서 색의 구조를 보고 마우스나 기타 도구로 원하는 색을 가지고 올 수 있도록 한다. 

<ClientOnly>
<colorpicker />
</ClientOnly>

## 어떤 식으로 동작할가요?

색을 고르는 방법은 무수히 많이 있다. 

그 중에 우리는 주로 RGB 라는 색 공간을 쓰게 되는데 아래와 보통 아래와 같이 표시한다. 

```js
#ffffff         // white
rgb(0, 0, 0)    // black 
rgb(255, 0, 0)  // red 
rgb(255, 255, 255) // white
rgb(0, 255, 0)  // green
rgb(0, 0, 255)  // blue
rgb(23, 203, 120)   // ? 
```

그런데 RGB 만으로는 사람이 인지하는 색을 완전히 조합하기는 힘들다. 

그래서 아래와 같은 형태로 새로 구성한다.   

<ClientOnly>
<colorpicker-structure />
</ClientOnly>

Please mouse over in colorpicker.

왼쪽부터 Hue, Saturation, Value (or Brightness) 라는 수치를 가지고 실제로 표시될 RGB 를 계산한다. 

이제부터 소개하는 컬러피커도 H, S, V 3 값을 가지고 여러가지 색상을 선택할 수 있게 만드는 것이다. 


## HSV 형식과 와 RGB 형식 

색상(Hue), 채도(Saturation), 명도(Value) 를 기준으로 색을 만들어서 RGB 로 변환할 수 있다.   
이렇게 하는 이유는 좀 더 사람이 인지하기 쉬운 형태의 색 공간이기 때문이다. 

### HSVtoRGB

HSV 를 구했으면 RGB 로 변환할 수 있다. 

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

HSV 원리를 통해서  RGB 로 변환할 수 있기 때문에 최종적으로 원하는 영역의 RGB 색상을 선택할 수 있게 된다.  

::: tip
HSV 는 RGB 영역을 완전히 커버 할 수 없습니다. 색을 최종적으로 결정할때는 RGB 기준으로 하는 것이 좋습니다. 
:::

### RGBtoHSV

거꾸로 가지고 있는 RGB 가 있으면 HSV 로 변환해서 실제로 UI 상에 상태를 표시해줄 수 있다. 

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
HSV 가 RGB 를 완전히 커버 할 수 없는 것처럼 RGB 에서 HSV 로 변환 할 때 정확한 값이 떨어지지 않을 수 있습니다. 
:::


### Hue 색상 만들기 

Hue 색상은 기본적으로 7가지 색상으로 기준으로 Gradient 효과를 준 것과 같다. 

아래와 같이 간단하게 CSS 로 효과를 줄 수 있다. 

```css
background: linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);
```

<ClientOnly>
<hue-color />
</ClientOnly>

0 ~ 360 까지의 값일 가지고 있기 때문에  마우스 포인터 위치에 따라  값이 정해진다. 

### Saturation(채도) 영역 만들기 

Saturation 은 채도를 말하는데 채도는 색의 진함 정도를 말한다.   0% 일 때는 무채색이고 100%일 때 가장 진한 값을 가진다. 

<ClientOnly>
<colorpicker-structure :saturation="true" />
</ClientOnly>

마우스를 올려봅시다. 

왼쪽이 가능 연한 색이고 오른쪽이 원래의 색(가장 진한)입니다. 

### Value(명도) 영역 만들기 

Value 는  명도를 말하는데 명도는 색의 밝기 정도를 말한다.  위(색, 100%)로 갈 수록 밝아지고 아래(검정, 0%)로 갈 수록 어두워진다. 

<ClientOnly>
<colorpicker-structure :value="true" />
</ClientOnly>

마우스를 올려봅시다. 
