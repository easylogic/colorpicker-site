---
home: true
# layout: false
actionText: Get Started →
actionLink: /colorpicker/
features:
 - title: Color Picker & Gradient
   details: You can simply use color picker in Codemirror. Or you can use it alone.
 - title: Color manipulation
   details: Provides a function for handling colors. You can create your own color.
 - title: Image Filter & WebGL
   details: Provides a simple image filter concept using color. Also support WebGL image filter for speed. Let's make the image freely.
footer: Copyright © 2018 CodeMirror ColorPicker - easylogic
---

<colorpicker-standalone-version />  <iframe src="https://ghbtns.com/github-btn.html?user=easylogic&repo=colorpicker&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>


<div></div>


<colorpicker-version />  <iframe src="https://ghbtns.com/github-btn.html?user=easylogic&repo=codemirror-colorpicker&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>


# Colorpicker Styles
 
<ClientOnly>
<colorpicker-all />
</ClientOnly>




# ColorPicker for Standalone


<ClientOnly>
<colorpicker type="sketch" />
</ClientOnly>

```js
import '@easylogic/colorpicker/dist/colorpicker.css';
import ColorPickerUI from '@easylogic/colorpicker'
// Standalone 
var colorpicker = ColorPickerUI.create({
    color: 'blue', // init color code 
    position: 'inline',   // default show 
    container : '#color-container'
    type : 'sketch', // or 'sketch',  default type is 'chromedevtool'
    onHide: () => {
      console.log('hide');
    },
    onChange: color => {
      console.log(color);
    },
    onLastUpdate: color => {
      console.log(color);
    }
}) 
```

# GradientPicker for Standalone 

You can make css gradient simply.

Support gradient format :  linear-gradient, repeating-linear-gradient, radial-gradient, repeating-radial-gradient, conic-gradient, repeating-conic-gradient



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
