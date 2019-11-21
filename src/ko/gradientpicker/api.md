---
lineNumbers: false
---

# GradientPicker API

간단하게 GradientPicker를 사용 하는 방법을 알아봅시다. 


### es6 style 

```js
import '@easylogic/colorpicker/dist/colorpicker.css';
import ColorPickerUI from '@easylogic/colorpicker'


 this.gradientPicker = ColorPickerUI.createGradientPicker({
   position: "inline",
   container: this.refs.$color.el,
   gradient: 'linear-gradient(to right, white 0%, black 100%)',
   onChange: (gradientString) => {
     console.log(gradientString);
   }
 });


 // set value 
 this.gradientPicker.setValue('radial-gradient(circle, white 0%, black 100%'));

 // get value
 var gradientString = this.gradientPicker.getValue()
```


## GradientPicker 보여주기

원하는 위치로 지정할 수 있어요. left, top 은 css 에서 사용하는 left, top 그대로 입니다. 

```js
gradientPicker.show({
    left : pos.left,
    top : pos.bottom,
    hideDelay : 2000    // 컬러피커가 열렸다가 숨겨질 타이밍을 지정합니다. 기본값은 2000 (2초) 
})
```


## Gradient 초기화 하기  

```js
gradientPicker.setValue('linear-gradient(to right, red 10%, white 100%)')
```


## 현재 Gradient 구하기 

```js
colorpicker.getValue()   // return linear-gradient(....)
```
