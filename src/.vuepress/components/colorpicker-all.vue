<template>    
    <div class="colorpicker">

        <div>
            <h3>ChromeDevTool</h3>
            <div class="colorpicker-style" ref="defaultStyle1" data-type="chromedevtool"></div>
        </div>

        <div>
            <h3>Sketch</h3>
        <div class="colorpicker-style" ref="defaultStyle2" data-type="sketch"></div>
        </div>

        <div>
            <h3>Adobe XD</h3>
        <div class="colorpicker-style" ref="defaultStyle3" data-type="xd"></div>
        </div>


        <div>
            <h3>Mac OS</h3>        
        <div class="colorpicker-style" ref="defaultStyle4" data-type="macos"></div>        
        </div>


        <div>
            <h3>Ring</h3>        
        <div class="colorpicker-style" ref="defaultStyle5" data-type="ring"></div>        
        </div>


        <div>
            <h3>Only Palette</h3>        
        <div class="colorpicker-style" ref="defaultStyle6" data-type="palette"></div>
        </div>

        <div>
            <h3>Mini</h3>        
        <div class="colorpicker-style" ref="defaultStyle7" data-type="mini"></div>
        </div>

        <div>
            <h3>Mini Vertical</h3>        
            <div class="colorpicker-style" ref="defaultStyle8" data-type="mini-vertical"></div>
        </div>

        <div>
            <h3>VSCode</h3>        
            <div class="colorpicker-style" ref="defaultStyle9" data-type="vscode"></div>
        </div>        

    </div>
</template>

<script>
import { Color, create as ColorPickerCreate } from '@easylogic/colorpicker'
import '@easylogic/colorpicker/dist/colorpicker.css'

export default {
    mounted () {

        for(var i = 1; i <= 9; i++) {
            ColorPickerCreate({
                position: 'inline',
                type: this.$refs['defaultStyle' + i].getAttribute('data-type'),
                color: 'blue',
                container: this.$refs['defaultStyle' + i],
                onChange: (c) => {
                    console.log(this, c);
                }
            })
        }

    }
}
</script>

<style lang="stylus" scoped>
.colorpicker {
    display: flex; 
    flex-wrap: wrap;

    > div {
        width: 30%;
        display:inline-block;
        margin-bottom: 30px;

        @media screen and (max-width: 600px) {
            width: 100%;
        }
    }
}

</style>