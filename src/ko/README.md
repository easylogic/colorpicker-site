---
home: true
# layout: false
actionText: 시작하기 →
actionLink: /ko/colorpicker/
features:
 - title: Color Picker 와 Gradient
   details: CodeMirro 또는 단독으로 간단하게 컬러피커를 사용 할 수 있습니다. 
 - title: Color manipulation
   details: 색을 활용 할 수 있는 함수를 제공합니다. 자신만의 색을 만들어 보세요.
 - title: Image Filter & WebGL
   details: 색을 사용한 몇 가지 이미지 필터도 제공합니다. 또한 속도를 위해서 WebGL 이미지 필터를 지원합니다. 이미지를 자유롭게 바꿔보세요.

footer: Copyright © 2018 CodeMirror ColorPicker - easylogic
---


<colorpicker-standalone-version />  <iframe src="https://ghbtns.com/github-btn.html?user=easylogic&repo=colorpicker&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>


<div></div>


<colorpicker-version />  <iframe src="https://ghbtns.com/github-btn.html?user=easylogic&repo=codemirror-colorpicker&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>


# 다양한 ColorPicker 스타일

<ClientOnly>
<colorpicker-all />
</ClientOnly>


# ColorPicker 


<ClientOnly>
<colorpicker />
</ClientOnly>

```js
import '@easylogic/colorpicker/dist/colorpicker.css';
import ColorPickerUI from '@easylogic/colorpicker'
// Standalone 
var ColorPicker = EasyLogicColorPicker.ColorPicker;
var colorpicker = ColorPickerUI.create({
    color: 'blue', // init color code 
    position: 'inline',   // default show 
    container : '#color-container'
    type : 'palette', // or 'sketch',  default type is 'chromedevtool'
    onChange: color => {
      console.log(color);
    }
}) 
```

# GradientPicker 

css의 gradient 를 손쉽게 편집할 수 있습니다.

 linear-gradient, repeating-linear-gradient, radial-gradient, repeating-radial-gradient, conic-gradient, repeating-conic-gradient 을 지원합니다. 


<ClientOnly>
<gradientpicker />
</ClientOnly>

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

# CodeMirror ColorPicker Addon

CodeMirror 에서도 Addon 으로 사용하실 수 있습니다.  (코드미러 용은 npm codemirror-colorpicker 패키지를 이용해주세요.)

<ClientOnly>
<colorpicker-codemirror />
</ClientOnly>

```js
// CodeMirror Addon 
var cm = CodeMirror.fromTextArea(document.getElementById("sample_text_area"), {
    colorpicker : {
        mode : 'edit'
    }
});
```