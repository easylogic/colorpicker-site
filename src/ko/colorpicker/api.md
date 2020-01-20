---
lineNumbers: false
---

# ColorPicker API

간단하게 컬러피커를 사용 하는 방법을 알아봅시다. 


## Code Mirror 에서 사용하기 

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
        onChange: function (color) { // 색을 선택했을 때 호출 됩니다. 
            console.log(color);
        }
    }
});
```

### script 로드 형식

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
        onChange: function (color) { // 색을 선택할 때 호출됩니다. 
            console.log(color);
        }
    }
});
</script>
```

## 단독으로 컬러피커 사용하기 

### es6 style 
```js
import {ColorPicker} from 'codemirror-colorpicker' 

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

## 컬러피커 보여주기

원하는 위치로 지정할 수 있어요. left, top 은 css 에서 사용하는 left, top 그대로 입니다. 

```js
colorpicker.show({
    left : pos.left,
    top : pos.bottom,
    hideDelay : 2000    // 컬러피커가 열렸다가 숨겨질 타이밍을 지정합니다. 기본값은 2000 (2초) 
}, color, function (newColor) {
    console.log(newColor)
})
```

## 인라인 형태로 보여주기 

절대위치가 아니라 어딘가에 포함되어서 바로 보여 줄 때 사용합니다. 

```js
var colorpicker = new ColorPicker({
    position: 'inline',   
    container : document.getElementById('color-container')
})
```

## 숨기기

```js
colorpicker.hide()

```


## Callback 함수 정의 

```js
var colorpicker = new ColorPicker({
    onChange (color) {
        console.log('색이 변경 되었을 때', color);
    },
    onLastUpdate (color) {
        console.log('드래그 이후 마우스업을 했을 때, 마지막 시점의 색', color);
    },
    onHide (color) {
        console.log('컬러피커가 숨겨졌을 때', color);
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


## 색상 초기화 하기 

```js
colorpicker.initColor('blue')
```


## 현재 색상 구하기 

```js
colorpicker.getColor('rgb')   // hex, hsl 도 사용 가능 
```

## 컬러피커 스타일

컬러피커는 몇가지 스타일을 가지고 있습니다. `chromedeveltool`, `sketch`, `palette`, `macos`, `mini`, `mini-vertical`, `ring`

`type` 변수를 지정함으로써 사용 할 수 있습니다. 기본값은 `chromedevtool` 스타일입니다. 

```js
{
    colorpicker : {
        type : 'palette' // or 'sketch',  default type is 'chromedevtool'
    }    
}
```

또는 아래의 create 함수를 이용해서 생성할 수도 있습니다.

```js
import { create } from 'codemirror-colorpicker'

var colorpicker = create({
    type: 'sketch',
    ...
})
```

::: tip  ColorPicker Class 리스트

`ColorPicker`   // 기본적으로 ChromeDevToolColorPicker 와 같습니다.

`ChromeDevToolColorPicker`

`MacOSColorPicker`

`MiniColorPicker`

`MiniVerticalColorPicker`

`RingColorPicker`

`VSCodePicker`

:::

<ClientOnly>
<colorpicker-all />
</ClientOnly>

::: warning 스토리
처음 컬러피커 만들 때 대상이 크롬 개발자도구에 있는 컬러피커를 대상으로 했습니다. 크롬 개발자 도구는 가장 많이 쓰고 있는 도구였기 때문이었습니다. 그리고 크롬 개발자 도구가 소스 에디팅 도구로 CodeMirror 를 사용하고 있었는데 여기서도 궁금점이 생겼습니다. 그래서 CodeMirror 에서 사용할 수 있는 컬러피커를 만들게 되었습니다. 
:::

## CodeMirror 단축키로 컬러피커 열기

CodeMirror 단축키를 적용해서 컬러피커를 열 수 있습니다. colorview(색이 표시되는 상자)를 클릭하지 않고 현재 커서가 있는 곳 에서 바로 컬러피커를 열 수있습니다. 현재 커서를 기준으로 색생코드를 인지해서 바로 컬러피커를 적용할 수 있습니다. 

```js
 var cm = CodeMirror.fromTextArea(document.getElementById("sample_text_area"), {
    lineNumbers: true, 
    mode : "css",
    extraKeys : {
        'Ctrl-K' : function (cm, event) {   // Ctrl+K 를 누르면 
            cm.state.colorpicker.popup_color_picker();
        }
    },
    colorpicker : {
        mode : 'edit'
    }
});
```


## 출력포맷 설정하기  

onChange, onHide 같은 이벤트에서 출력 포맷을 설정할 수 있습니다. 

```js
{
    outputFormat : 'hex'    // 이것은 항상 hexcode 색상을 출력합니다. 
}
```

## 컬러 팔레트 만들기 

컬러 팔레트는 미리 정해진 색상 리스트를 보여주고 선택 할 수 있게 해줍니다. 이렇게 하면 사용자가 색을 좀 더 쉽게 고를 수 있게 해줍니다. 

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

### 현재 팔레트 색상 설정하기 

```js
// set to colors in current sets that you see 
colorpicker.setColorsInPalette(['yellow', 'red']) 
```

### 전채 팔레트 설정하기 

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

### 기본 팔레트 적용하기 

정해진 색상 리스트를 그대로 보여줍니다. 

```js
{ 
    name : "Material",  
    colors: [ 
        '#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4',  '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722',  '#795548', '#9E9E9E', '#607D8B' 
    ]
}
```

### 수정 가능한 팔레트 적용하기 

`edit` 옵션이 true 로 설정되면 색상 코드를 컬리피커 기준으로 적용하고 사용할 수 있게 해줍니다. 

```js
{ 
    name : "Custom", "edit" : true, "colors" : []
}
```

![Editable Color Palette](/codemirror-colorpicker/images/edit-color-palette.png)

::: danger 잠시만
수정 가능한 팔레트의 경우 메모리에만 저장이 됩니다. 차후에 localStorage 에 저장할 수 있도록 할 계획입니다. 
:::

### 쉽게 확장 가능한 팔레트 

컬러피커 내에서 제공하는 scale 함수를 사용해서 팔레트에서 사용할 수 있는 색상 리스트를 만들어 냅니다. 

```js
{
    name: "Color Scale", "scale" : ['red', 'yellow', 'black' ], count : 5
}
```

![Scalable Color Palette](/codemirror-colorpicker/images/scale-color-palette.png)

예제는  <span class="rect red"></span> red 부터 <span class="rect yellow"></span> yellow 까지 5단계로 나누고, 다시 <span class="rect yellow"></span> yellow 부터 <span class="rect black"></span> black 까지 5단계로 나눠서 팔레트에 색상으로 보여주게 됩니다. 