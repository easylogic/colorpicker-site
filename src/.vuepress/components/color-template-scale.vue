<template>
    <div class="color-scale">
        <div class="item" v-for="(c, index) in colorList" :key="index" 
            :title="`${index+1}-${c}`"
            :style="{
                'background-color': c
            }"
        ></div>

    </div>
</template>

<script>
import { Color } from 'codemirror-colorpicker'
export default {
    props: {
        title: String,
        colors: true,
        count: {
            type: Number,
            default: 0
        }
    },
    computed: {
        colorList () {
            if (this.colors.length && Color.scale[this.colors[0]]) {
                return Color.scale[this.colors[0]](this.count);
            } else {
                return Color.scale(this.colors, this.count);
            }
        }
    }
}
</script>

<style scoped lang="stylus">
.color-scale {
    height: 30px;
    display: flex; 
    margin-top: 10px; 
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAJElEQVQYV2NctWrVfwYkEBYWxojMZ6SDAmT7QGx0K1EcRBsFAADeG/3M/HteAAAAAElFTkSuQmCC") repeat;        

    .item {
        flex: 1;
        height: 100%;    
        position: relative;

        &:hover:after {
            display: inline-block;
            width: 100px;
            text-align: center;
            content: attr(title);
            position:absolute;
            left:50%;
            bottom:100%;
            background-color: black;
            color: white;
            transform:translateX(-50%);
            z-index: 1000;
            font-size: 12px;
        }
    }    
}
</style>
