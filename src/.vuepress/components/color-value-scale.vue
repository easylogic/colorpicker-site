<template>
    <div class="color-value-scale">
        <div class="box">
            <div class="row" v-for="(row, rowIndex) in colorList" :key="rowIndex">
                <div class="column" v-for="(column, columnIndex) in row" :key="columnIndex"
                    :style="{
                        'background-color': column
                    }"
                    :title="column"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
import { Color } from 'codemirror-colorpicker'
export default {
    data () {
        return {
            colors: Color.scaleV('red', 100, 'hex')
        }
    },
    computed: {
        colorList () {
            let list = []
            for(var row = 0; row < 10; row++) {
                list[row] = []
                for(var column = 0; column < 10; column++) {
                    list[row].push(this.colors[row * 10 + column])
                }   
            }

            return list; 
        }
    }
}
</script>

<style scoped lang="stylus">
.column {
    display:inline-block;
    width: 22px;
    height: 22px;    
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin: 2px;
    position: relative;

    &:hover:after {
        display: inline-block;
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
        padding: 0px 10px;
        height: 20px;
    }

}
</style>
