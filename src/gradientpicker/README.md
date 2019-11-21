---
home: false
# layout: false
#actionText: Get Started →
#actionLink: /guide/
---

# GradientPicker

GradientPicker is a UI for managing various colors at the same time.


## What is GradientPicker

<div>&nbsp;</div>

<ClientOnly>
<gradientpicker />
</ClientOnly>

## How does it work?

CSS is support 6 gradient types.

```
linear-gradient
repeating-linear-gradient
radial-gradient
repeating-radial-gradient
conic-gradient
repeating-conic-gradient 
```

:::warning
conic is currently only supported for chrome.
:::

You can use css gradient string.

```css
linear-gradient(to right, red 10%, white 10%)
```


:::tip
connected 속성은 ColorStop을 서로 이어주는 역할을 합니다. 
:::

### Linear Gradient 


```css
linear-gradient(to right, red 10%, white 100%)
```

<div style='width: 200px;height:100px;background-image:linear-gradient(to right, red 10%, white 100%)'></div>


#### angle


```css
linear-gradient(45deg, gray 10%, white 100%)
```

<div style='width: 200px;height:100px;background-image:linear-gradient(45deg, gray 10%, white 100%)'></div>


### Repeating Linear Gradient


```css
repeating-linear-gradient(to right, gray 0%, white 10%)
```

<div style='width: 200px;height:100px;background-image:repeating-linear-gradient(to right, gray 0%, white 10%)'></div>

#### angle 


```css
repeating-linear-gradient(45deg, gray 0%, white 10%)
```

<div style='width: 200px;height:100px;background-image:repeating-linear-gradient(45deg, gray 0%, white 10%)'></div>


### Radial Gradient 


```css
radial-gradient(circle, red 10%, white 100%)
```

<div style='width: 200px;height:100px;background-image:radial-gradient(circle, red 10%, white 100%)'></div>

#### radial shape 

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


#### center point


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


```css
repeating-radial-gradient(circle, red 0%, white 20px)
```

<div style='width: 200px;height:100px;background-image:repeating-radial-gradient(circle, red 0%, white 20px)'></div>


### Conic Gradient 


:::tip
You can also use polyfill if you want. https://leaverou.github.io/conic-gradient/
This site does not currently use polyfill, so you can only see them on a Chrome-based browser.
:::


```css
conic-gradient(#f06, gold);
```

<div style='width: 200px;height:100px;background-image:conic-gradient(#f06, gold);'></div>

```css
conic-gradient(red, yellow, lime, aqua, blue, magenta, red);
```

<div style='width: 200px;height:100px;background-image:conic-gradient(red, yellow, lime, aqua, blue, magenta, red)'></div>


```css
conic-gradient(
    at 50% 100%, red, yellow, lime, aqua, blue, magenta, red
);
```

<div style='width: 200px;height:100px;background-image:conic-gradient(at 50% 100%, red, yellow, lime, aqua, blue, magenta, red)'></div>



```css
conic-gradient(
    from 10deg at 50% 50%, red, yellow, lime, aqua, blue, magenta, red
);
```

<div style='width: 200px;height:100px;background-image:conic-gradient(from 90deg at 50% 50%, red, yellow, lime, aqua, blue, magenta, red)'></div>


```css
conic-gradient(
    from 10deg at 50% 50%, red, yellow 10deg, lime .5turn, aqua, blue, magenta, red
);
```

<div style='width: 200px;height:100px;background-image:conic-gradient(from 90deg at 50% 50%, red, yellow 10deg, lime .5turn, aqua, blue, magenta, red)'></div>


### Repeating Conic Gradient 


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
