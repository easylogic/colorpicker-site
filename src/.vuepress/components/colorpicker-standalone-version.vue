<template>
    <a class="version" href="https://www.npmjs.com/package/@easylogic/colorpicker" target="_new window">EasyLogic ColorPicker {{version}}</a>
</template>

<script>
import json from '@easylogic/colorpicker/package.json'
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
