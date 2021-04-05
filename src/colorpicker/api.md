---
lineNumbers: false
---

# ColorPicker API

You can use colorpicker in codemirror or browser simply. 


## Use for CodeMirror

<ClientOnly>
<colorpicker-codemirror />
</ClientOnly>


### es6 style 

```js
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/css/css'
import 'codemirror-colorpicker/dist/codemirror-colorpicker.css'
import 'codemirror-colorpicker'

// CodeMirror Addon 
var cm = CodeMirror.fromTextArea(document.getElementById("sample_text_area"), {
    colorpicker : {
        mode : 'edit',
        onChange: function (color) { // Called when a color is selected.
            console.log(color);
        }
    }
});
```

### script load style 

```html
<!-- CodeMirror codes -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.23.0/codemirror.css" />
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.23.0/codemirror.js" ></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.23.0/mode/css/css.js" ></script>

<!-- ColorPicker codes -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/codemirror-colorpicker@1.7.3/addon/codemirror-colorpicker.css" />
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/codemirror-colorpicker@1.7.3/addon/codemirror-colorpicker.js" ></script>

<script>
// CodeMirror Addon 
var cm = CodeMirror.fromTextArea(document.getElementById("sample_text_area"), {
    colorpicker : {
        mode : 'edit',
        onChange: function (color) { // Called when a color is selected.
            console.log(color);
        }
    }
});
</script>
```

## Use for standalone

### es6 style 
```js
import {ColorPicker} from '@easylogic/colorpicker' 

var colorpicker = new ColorPicker({
    color: 'blue', // init color code 
    type : 'palette' // or 'sketch',  default type is 'chromedevtool'
})

```

### browser load style 

```js
// use CodeMirrorColorPicker as global object 
var ColorPicker = CodeMirrorColorPicker.ColorPicker;
var colorpicker = new ColorPicker({
    color: 'blue', // init color code 
    type : 'palette' // or 'sketch',  default type is 'chromedevtool'
})
```

## Show Color Picker 

You can show in your wanted position

```js
colorpicker.show({
    left : pos.left,
    top : pos.bottom,
    hideDelay : 2000    // default value is 2000.  color picker don't hide automatically when hideDelay is zero
}, color, function (newColor) {
    console.log(newColor)
})
```

## Show inline 

You can set fixed position for color picker. 

```js
var colorpicker = new ColorPicker({
    position: 'inline',   
    container : document.getElementById('color-container')
})
```

## Hide Color Picker 

```js
colorpicker.hide()
```


## Callback for change and hide 

```js
var colorpicker = new ColorPicker({
    onChange (color) {
        console.log('when color is changed', color);
    },
    onLastUpdate (color) {
        console.log('last updated color is ', color);
    },
    onHide (color) {
        console.log('when colorpicker is hide', color);
    }
})
```

or 

```js
colorpicker.show({
    ...
}, color, function /* change callback */ (color) {
    console.log('change callback', color)
}, function /* hide callback */ (color) {
    console.log('hide callback', color)
}, function /* last update callback */ (color) {
    console.log('last update callback', color)
})
```

::: tip
hideCallback is called only one when colorpicker is hide 
:::


## Initialize Color 

```js
colorpicker.initColor('blue')
```

## How to get current color 

```js
colorpicker.getColor('rgb')   // you also use hex or hsl 
```

## ColorPicker Style 

ColoPicker has `chromedeveltool`, `sketch`, `macos`, `mini`, `mini-vertical`, `ring` and `palette` styles.

```js
{
    colorpicker : {
        type : 'palette' // or 'sketch',  default type is 'chromedevtool'
    }    
}
```

or 

```js
import { create } from 'codemirror-colorpicker'

var colorpicker = create({
    type: 'sketch',
    ...
})
```

::: tip  ColorPicker Class List

`ColorPicker`   // is equals to ChromeDevToolColorPicker,

`ChromeDevToolColorPicker`

`MacOSColorPicker`

`MiniColorPicker`

`MiniVerticalColorPicker`

`RingColorPicker`

:::

<ClientOnly>
<colorpicker-all />
</ClientOnly>

## Popup Color Picker for keyboard 

you can open color picker by codemirror shortcut.

```js
 var cm = CodeMirror.fromTextArea(document.getElementById("sample_text_area"), {
    lineNumbers: true, 
    mode : "css",
    extraKeys : {
        'Ctrl-K' : function (cm, event) {   // when Ctrl+K is pressed
            cm.state.colorpicker.popup_color_picker();
        }
    },
    colorpicker : {
        mode : 'edit'
    }
});
```

## Set outputFormat 

you can set any output color format.

```js
{
    outputFormat : 'hex'    // get only hexcode in  both onChange and onHide  callbacks
}
```

## How to make your color palette 

```js
// CodeMirror Addon 
var cm = CodeMirror.fromTextArea(document.getElementById("sample_text_area"), {
    colorpicker : {
        mode : 'edit',
        colorSets: [
            { 
                name : "Material",  
                colors: [ 
                    '#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4',  '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722',  '#795548', '#9E9E9E', '#607D8B' 
                ]
            },
            { 
                name : "Custom", "edit" : true, "colors" : []
            },
            {
                name: "Color Scale", "scale" : ['red', 'yellow', 'black' ], count : 5
            }
        ]
        
    }
});
```

### Set current colors in palette

```js
// set to colors in current sets that you see 
colorpicker.setColorsInPalette(['yellow', 'red']) 
```

### Set all colors in whole palette

```js
picker.setUserPalette([
    { 
        name : "MyNewPalette",  
        colors: [ 
            '#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4',  '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722',  '#795548', '#9E9E9E', '#607D8B' 
        ]
    },
    { 
        name : "Custom", "edit" : true, "colors" : []
    },
    {
        name: "Color Scale", "scale" : ['red', 'yellow', 'black' ], count : 5
    }
])
```


### Basic Palette 

Displays all specified colors.

```js
{ 
    name : "Material",  
    colors: [ 
        '#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4',  '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722',  '#795548', '#9E9E9E', '#607D8B' 
    ]
}
```

### Editable Palette 

when `edit` option is true, you can save your color in colorpicker.  

```js
{ 
    name : "Custom", "edit" : true, "colors" : []
}
```

![Editable Color Palette](/codemirror-colorpicker/images/edit-color-palette.png)

::: danger STOP
Currently, it is only stored in memory, and we plan to save the color in localStorage in the future.
:::

### Scalable Palette

you are available color scale for palette. 

```js
{
    name: "Color Scale", "scale" : ['red', 'yellow', 'black' ], count : 5
}
```

![Scalable Color Palette](/codemirror-colorpicker/images/scale-color-palette.png)

Five colors is from <span class="rect red"></span> `red` to <span class="rect yellow"></span> `yellow`.
Other five colors is from <span class="rect yellow"></span> `yellow` to <span class="rect black"></span> `black`