---
lineNumbers: false
---

# GradientPicker API


### es6 style  

```js
import '@easylogic/colorpicker/dist/colorpicker.css';
import ColorPickerUI from '@easylogic/colorpicker'


 const radientPicker = ColorPickerUI.createGradientPicker({
   position: "inline",
   container: this.refs.$color.el,
   gradient: 'linear-gradient(to right, white 0%, black 100%)',
   onChange: (gradientString) => {
     console.log(gradientString);
   }
 });


 // set value 
 gradientPicker.setValue('radial-gradient(circle, white 0%, black 100%'));

 // get value
 var gradientString = gradientPicker.getValue()
```


## show GradientPicker

```js
gradientPicker.show({
    left : pos.left,
    top : pos.bottom,
    hideDelay : 2000    // 컬러피커가 열렸다가 숨겨질 타이밍을 지정합니다. 기본값은 2000 (2초) 
})
```


## setValue

```js
gradientPicker.setValue('linear-gradient(to right, red 10%, white 100%)')
```


## getValue

```js
gradientPicker.getValue()   // return linear-gradient(....)
```
