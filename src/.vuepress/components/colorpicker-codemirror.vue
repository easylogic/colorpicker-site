<template>
    <div class="colorpicker-codemirror">
        <codemirror :value="code" :options="cmOptions" ></codemirror>
    </div>
</template>

<script>
import Vue from 'vue'
import VueCodeMirror from 'vue-codemirror-lite'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/css/css'
import 'codemirror-colorpicker/dist/codemirror-colorpicker.css'
import 'codemirror-colorpicker'

Vue.use(VueCodeMirror);

export default {
    data () {
        return {
            code: `.sample-green {
    background-color: green; 
    blue: blue;
}

/* background-color: yellow; */   /* It don't work color view in comment */
var color_names = {
    aliceblue: "rgb(240, 248, 255)",
    antiquewhite: "rgb(250, 235, 215)",
    aqua: "rgb(0, 255, 255)",
            `,
            cmOptions: {
                mode: 'text/css',
                lineNumbers: true,                
                colorpicker: {
                    mode: 'edit',
                    container: this.$el
                }
            }
        }
    }
}
</script>

<style lang="stylus">
 .CodeMirror {
    border: 1px solid #eee;
    height: 300px;
    font-size: 13px;
}

.colorpicker-codemirror {
    position: relative;    
}

</style>
