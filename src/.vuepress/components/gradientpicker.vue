<template>    
    <div class="colorpicker">
        <div class="gradient-style" ref="defaultStyle"></div>
        <div style="margin-top: 10px;">{{ result }}</div>
    </div>
</template>

<script>
import '@easylogic/colorpicker/dist/colorpicker.css';
import ColorPickerUI from '@easylogic/colorpicker'

export default {
    props: [ 
        'type'
    ],
    data () {
        return {
            result: ''
        }
    },
    mounted () {
        ColorPickerUI.createGradientPicker({
            position: "inline",
            container: this.$refs.defaultStyle,
            gradient: 'linear-gradient(to right, white 0%, black 100%)',
            colorpickerOptions: {
                type: 'chromedevtool',
                color: 'white'
            },
            onChange: (gradientString) => {
                this.result = gradientString
            }
        });
    }
}
</script>

