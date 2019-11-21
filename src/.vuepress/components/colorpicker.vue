<template>    
    <div class="colorpicker">
        <div class="colorpicker-style" ref="defaultStyle"></div>
    </div>
</template>

<script>
import { Color, create as ColorPickerCreate } from 'codemirror-colorpicker'
import 'codemirror-colorpicker/dist/codemirror-colorpicker.css'

export default {
    props: [ 
        'type'
    ],
    mounted () {

        ColorPickerCreate({
            position: 'inline',
            type: this.type,
            color: 'blue',
            container: this.$refs.defaultStyle,
            onChange: (c) => {
                console.log(this, c);
            }
        })
    }
}
</script>

