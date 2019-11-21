<template>
    <div class="bar-graph">
        <span class="text left" v-if="align === 'left'">{{barText}}</span>
        <div class="bar" :style="barStyle"></div> 
        <span class="text right" v-if="align === 'right'">{{barText}}</span>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: ''
        },
        align: {
            type: String,
            default: 'left'
        },        
        color: {
            type: String,
            default: 'black'
        },
        width: {
            type: String,
            default: '100'
        }
    },
    computed: {
        barStyle () {
            return {
                width: this.width + 'px',
                'background-color': this.color
            }
        },
        barText () {
            return this.text || ''
        }
    }
}
</script>

<style scoped lang="stylus">
.bar-graph {

    .bar {
        display: inline-block;
        box-sizing:border-box;
        background-color: black;
        height: 12px;
        vertical-align: middle;
        border: 1px solid rgba(0, 0, 0, 0.1);
    }

    .text {
        min-width: 80px;
        display: inline-block;
        vertical-align: middle;

        &.left {
            margin-right: 10px;
        }

        &.right {
            margin-left: 10px;                
        }
        
    }

}
</style>
