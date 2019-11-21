<template>
    <a class="version" href="https://www.npmjs.com/package/codemirror-colorpicker" target="_new window">CodeMirror ColorPicker {{version}}</a>
</template>

<script>
import json from 'codemirror-colorpicker/package.json'
export default {
    data () {
        return json
    }
}
</script>

<style scoped lang="stylus">
.version {
    display:inline-block;
    font-size: 20px;
    vertical-align: top; 
    margin-top: 3px;
    margin-right: 20px;
}
</style>
