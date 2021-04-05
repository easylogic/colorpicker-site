<template>    
    <div class="colorpicker">
        <div class="colorpicker-style" ref="defaultStyle"></div>
    </div>
</template>

<script>
import ColorPickerUI from '@easylogic/colorpicker'
import 'codemirror-colorpicker/dist/codemirror-colorpicker.css'

export default {
    props: [ 
        'type'
    ],
    mounted () {
        ColorPickerUI.create({
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

