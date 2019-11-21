<template>    
    <div class="colorpicker-list">
        <div class="colorpicker-type">
            <h3>Chrome Devtool Style</h3>
            <div class="colorpicker-style" ref="defaultStyle" data-type="default"></div>
        </div>
        <div class="colorpicker-type">
            <h3>Sketch Style</h3>
            <div class="colorpicker-style" ref="sketchStyle" data-type="sketch"></div>
        </div>
        <div class="colorpicker-type">
            <h3>Only Palette Style</h3>
            <div class="colorpicker-style" ref="paletteStyle" data-type="palette"></div>
        </div>    
    </div>
</template>

<script>
import { Color, ColorPicker} from 'codemirror-colorpicker'
import 'codemirror-colorpicker/dist/codemirror-colorpicker.css'

export default {
    mounted () {

        new ColorPicker({
            position: 'inline',
            type: 'default',
            color: 'blue',
            container: this.$refs.defaultStyle,
            onChange: (c) => {
                console.log(this, c);
            }
        })

        new ColorPicker({
            position: 'inline',
            type: 'sketch',
            color: 'blue',
            container: this.$refs.sketchStyle,
            onChange: (c) => {
                console.log(this, c);
            }
        })

        new ColorPicker({
            position: 'inline',
            type: 'palette',
            color: 'blue',
            container: this.$refs.paletteStyle,
            onChange: (c) => {
                console.log(this, c);
            }
        })
    }
}
</script>

<style lang="stylus" scoped>
.colorpicker-list {
    display: flex;

    .colorpicker-type {
        flex: 1;
        align-items: center;
        vertical-align: top;
        margin-top: 20px;

        h3 {
            text-align: left;
        }

    }
}
 
</style>
