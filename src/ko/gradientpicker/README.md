---
home: false
# layout: false
#actionText: Get Started →
#actionLink: /guide/
---

# GradientPicker

GradientPicker 는  동시에 여러가지 색을 관리하기 위한 UI 이다. 



## 그라디언트피커는 무엇인가요?

CSS 에서 사용되는 gradient 형태를 컬러피커 UI 와 결합해서 쉽게 사용 할 수 있는 UI 를 만들었습니다. 

<ClientOnly>
<gradientpicker />
</ClientOnly>

## 어떤 식으로 동작할가요?

CSS 에서 현재 지원하는 gradient 형식은  모두 6가지이다. 

```
linear-gradient
repeating-linear-gradient
radial-gradient
repeating-radial-gradient
conic-gradient
repeating-conic-gradient 
```

conic 의 경우 Chrome은 지원되지만 다른 브라우저에서는 지원이 안될 수 있다. 

CSS 의 형식 그대로를 사용하기 때문에 아래와 같은 문자열로 gradient 를 지정할 수 있다. 

```css
linear-gradient(to right, red 10%, white 10%)
```


:::tip
connected 속성은 ColorStop을 서로 이어주는 역할을 합니다. 
:::

### Linear Gradient 

Linear Gradient 는 색의 변화가 직선인 것을 의미한다. 

```css
linear-gradient(to right, red 10%, white 100%)
```

<div style='width: 200px;height:100px;background-image:linear-gradient(to right, red 10%, white 100%)'></div>

여기에 angle 옵션을 줘서 방향을 설정할 수 있다. 


```css
linear-gradient(45deg, gray 10%, white 100%)
```

<div style='width: 200px;height:100px;background-image:linear-gradient(45deg, gray 10%, white 100%)'></div>


### Repeating Linear Gradient 

Repeating Linear Gradient 는 본질 적으로 Linear Gradient 와 같다. 다만 color 들의 지정된 위치에 따라 반복 패턴이 정해진다. 


```css
repeating-linear-gradient(to right, gray 0%, white 10%)
```

<div style='width: 200px;height:100px;background-image:repeating-linear-gradient(to right, gray 0%, white 10%)'></div>

angle 도 동일하게 설정 할 수 있다. 


```css
repeating-linear-gradient(45deg, gray 0%, white 10%)
```

<div style='width: 200px;height:100px;background-image:repeating-linear-gradient(45deg, gray 0%, white 10%)'></div>


### Radial Gradient 

Radial Gradient 는  색의 변화가 원형인 것을 의미합니다. 

```css
radial-gradient(circle, red 10%, white 100%)
```

<div style='width: 200px;height:100px;background-image:radial-gradient(circle, red 10%, white 100%)'></div>

여기에 circle 은 radial 의 모양을 뜻합니다.  여기에는 몇가지 옵션들이 올 수 있습니다. 

```css
circle
circle closest-side
circle closest-corner
circle farthest-side
circle farthest-corner
ellipse
ellipse closest-side
ellipse closest-corner
ellipse farthest-side 
ellipse farthest-corner 
```

closest, farthest 는 상대적인 거리에 대한 키워드이고 side, coner 는 거리를 어느 기준으로 정할지에 대한 기준입니다. 

간단한 예제를 한번 보시죠. 


```css
radial-gradient(circle, gray 90%, black 90% 100%)
```

<div style='width: 200px;height:100px;background-image:radial-gradient(circle, gray 90%, black 90% 100%)'></div>



```css
radial-gradient(circle closest-side, gray 90%, black 90% 100%)
```

<div style='width: 200px;height:100px;background-image:radial-gradient(circle closest-side, gray 90%, black 90% 100%)'></div>


```css
radial-gradient(ellipse closest-side, gray 90%, black 90% 100%)
```

<div style='width: 200px;height:100px;background-image:radial-gradient(ellipse closest-side, gray 90%, black 90% 100%)'></div>


이제는 Radial Gradient 의 중심점을 알아볼 차례 입니다. 중심점을 어디에 두느냐에 따라 위에서 보았던 closest-side, farthest-corner 같은 
옵션을 이해하실 수 있게 됩니다. 


```css
radial-gradient( ellipse closest-side at 50% 50%, gray 90%, black 90% 100%)
```

<div style='width: 200px;height:100px;background-image:radial-gradient(ellipse closest-side at 50% 50%, gray 0%, black 100%)'></div>

기본 위치는 중심점이 x: 50%, y: 50% 으로 해서 중간에 위치하게 되는데요.  중심점을 옮기면 전혀 다른 모양으로 보이게 됩니다. 

```css
radial-gradient( ellipse closest-side at 50% 70%, white 0%, black 100%)
```

<div style='width: 200px;height:100px;background-image:radial-gradient(ellipse closest-side at 50% 70%, white 0%, black 100%)'></div>


### Repeating Radial Gradient 

Repeating Radial Gradient 는  Radial Gradient 의 색을 반복해서 나타내줍니다. 나머지 형식은 Radial Gradient 와 같습니다. 

```css
repeating-radial-gradient(circle, red 0%, white 20px)
```

<div style='width: 200px;height:100px;background-image:repeating-radial-gradient(circle, red 0%, white 20px)'></div>


### Conic Gradient 

이제 마지막으로 Conic Gradient 에 대해서 알아보겠습니다. 

현재는 크롬만 지원 하고 있지만 W3C 표준 스펙에는 들어가 있는 기능입니다.  [참고](https://drafts.csswg.org/css-images-4/#conic-gradients)

필요하면 폴리필을 사용해서 볼 수도 있습니다. https://leaverou.github.io/conic-gradient/

이 사이트에서는 현재 폴리필을 사용하고 있지 않기 때문에 Chrome 기반 브라우저에서만 보실 수 있습니다. 


Conic Gradient 는 색의 변화가 원형으로 이루어진 Gradient 입니다. 예제르 보시면 바로 이해 되실거에요.

```css
conic-gradient(#f06, gold);
```

<div style='width: 200px;height:100px;background-image:conic-gradient(#f06, gold);'></div>

```css
conic-gradient(red, yellow, lime, aqua, blue, magenta, red);
```

<div style='width: 200px;height:100px;background-image:conic-gradient(red, yellow, lime, aqua, blue, magenta, red)'></div>

이 예제는 원형 컬러피커 만들 때 사용하면 좋겠네요. 

Conic 은 원형으로 이루어져 있기 때문에  원의 중심을 설정할 수 있습니다. Radial Gradient 와 같은 방식입니다.  

```css
conic-gradient(
    at 50% 100%, red, yellow, lime, aqua, blue, magenta, red
);
```

<div style='width: 200px;height:100px;background-image:conic-gradient(at 50% 100%, red, yellow, lime, aqua, blue, magenta, red)'></div>

Conic 의 모양을 자세히 보시면 시작 지점에 가운데 위쪽으로 되어 있는데요. 이건 from 속성을 통해서 원의 시작지점도 설정할 수 있습니다. 


```css
conic-gradient(
    from 10deg at 50% 50%, red, yellow, lime, aqua, blue, magenta, red
);
```

<div style='width: 200px;height:100px;background-image:conic-gradient(from 90deg at 50% 50%, red, yellow, lime, aqua, blue, magenta, red)'></div>


Conic 의 Color 들은 원형으로 이루어지기 때문에 기본적으로 Color 의 위치도 각도를 가집니다. 
CSS 에서 각도를 가지는 단위들이 몇가지 있는데요. 

%, rad, turn, deg  등등을 사용해서 표시 할 수 있습니다. 



```css
conic-gradient(
    from 10deg at 50% 50%, red, yellow 10deg, lime .5turn, aqua, blue, magenta, red
);
```

<div style='width: 200px;height:100px;background-image:conic-gradient(from 90deg at 50% 50%, red, yellow 10deg, lime .5turn, aqua, blue, magenta, red)'></div>


### Repeating Conic Gradient 

Repeating Conic Gradient 는  Conic Gradient 를 반복해서 표시합니다. 


```css
repeating-conic-gradient(
    from 10deg at 50% 50%, red 10%, yellow 20%
);
```

<div style='width: 200px;height:100px;background-image:repeating-conic-gradient(from 10deg at 50% 50%, red 10%, yellow 20%);'></div>


```css
repeating-conic-gradient(
    from 10deg at 50% 50%, red 10%, yellow 10% 20%, red 20% 30%
);
```

<div style='width: 200px;height:100px;background-image:repeating-conic-gradient(from 10deg at 50% 50%, red 10%, yellow 10% 20%, red 20% 30%);'></div>
