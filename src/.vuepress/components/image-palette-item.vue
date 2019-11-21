<template>
    <div class="image-palette-item">
        <table>
        <tr>
            <td><img ref="img" :src="imageSrc"  width="210px" height="160px" /></td>
            <td valign="top">
                <div class="colors">
                    <div class="color-item" :style="{'background-color': item.color, color: item.textColor }" v-for="(item, index) in paletteColors" :key="index">{{item.color}}</div>
                </div>
            </td>
        </tr>
        
        </table>
    </div>
</template>

<script>

import { Color } from 'codemirror-colorpicker'

export default {
    props: [ 'src', 'title', 'description', 'count'], 
    data () {
        return {
            paletteColors: [],
            textColors: [],
            colorCount: this.count || 10, 
            imageSrc: this.src || '/resources/image/grapes.jpg'
        }
    },

    methods: {
        generate () {
            Color.ImageToRGB(this.imageSrc, { maxWidth: 100 }, (results) => {
                this.paletteColors = Color.palette(results, this.colorCount).map(color => {
                    const contrast = Color.contrast(color)
                    return { color, contrast, textColor: contrast >= 128 ? 'black' : 'white' }
                }).sort((a, b) => {
                    if (a.contrast === b.contrast) return 0 
                    return a.contrast > b.contrast ? 1 : -1; 
                })
            }) 
        }
    },

    mounted () {
        this.generate()
    }

}
</script>

<style scoped lang="stylus">
.image-palette-item  {
    .title {
        font-size: 20px;
    }
    .viewer {

        .item {
            display: inline-block;
            padding: 10px 0px;
            padding-right: 20px;
        }
    }

    td {
        border: 0px;
    }

    tr {
        border:0px;
    }

    @media screen and (max-width: 600px) {
        table {
            display: block;

            td, th {
                padding: 0px;
                display: block;
            }
        }

        td img {
            width: 90%;
            max-width: 300px;
            margin-bottom: 10px;
        }

        .color-item {
            width: 74px !important;    
            height: 30px !important;
            padding: 6px 4px !important;            
        }
    }    

    img, canvas {
        border: 1px solid #ececec;
        max-width: none;
    }

    .tools {
        display: inline-block;
        max-width: 300px;
        width: 100%;
        vertical-align: middle;        
    }

    .colors {
        display : inline-block;
        padding: 0px 20px;
        padding-left: 0px;
        

        .color-item {
            display: inline-block;
            width: 80px;
            height: 34px;
            text-align: center;
            padding: 8px;
            font-size: 13px;
            box-sizing: border-box;
            line-height: 1.3;
            border: 1px solid rgba(0, 0, 0, 0.1);
            margin-right: 2px;
            margin-bottom: 2px;
            text-transform: uppercase;
        }
    }
}

</style>