<template>
    <div class="textlist">
        <span v-for="(t, index) in text" :key="index"><span :style="{color: realColor[index]}">{{realShape}}</span>{{t}}</span>
    </div>
</template>

<script>
export default {
    props: [ 'text', 'shape', 'color' ],
    data () {
        return {
            shapleList: [ '◼︎', '●', '◆', '★'],
            colorList: ['yellowgreen', 'blue', 'green', 'red', 'black']
        }
    }, 
    computed: {
        realShape () {
            return this.shapleList[this.shape] || this.shape
        },
        realColor () {
            return this.color || this.colorList
        }
    }
}
</script>

<style scoped lang="stylus">
.textlist {
    vertical-align: middle;

    span {
        vertical-align: middle;
        margin-right: 10px;

        span {
            margin-right: 5px;
        }
    }
}
</style>
