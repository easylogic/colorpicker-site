<template>
    <div class="column-graph">
        <div class="column">
            <div class="column-bar" :style="columnStyle"></div>
        </div> 
        <span class="text" >{{columnText}}</span>
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
        height: {
            type: String,
            default: '100'
        }
    },
    computed: {
        columnStyle () {
            return {
                height: this.height + '%',
                'background-color': this.color
            }
        },
        columnText () {
            return this.text || ''
        }
    }
}
</script>

<style scoped lang="stylus">
.column-graph {
    display: inline-block;
    width: 50px;
    .column {
        display: block;
        height: 100px;
        box-sizing:border-box;
        position: relative; 

        .column-bar {
            position: absolute;
            height: 0%;
            width: 20px;
            display:block;
            bottom: 0px;
            background-color: black;
            border: 1px solid rgba(0, 0, 0, 0.1);            
        }
    }

    .text {
        display: block;
        text-align: left;
    }

}
</style>
