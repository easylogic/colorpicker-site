<template>
    <div class="image-palette">
        <h3 class="title">{{title}}</h3>
        <div class="viewer">
            <div class="item">
                <img ref="img" :src="imageSrc"  width="210px" height="160px" />
            </div>
            <div class="tools" >
                <input type="range" :min="1" :max="100" v-model="colorCount" @change="generate" :step="1" /> {{colorCount}} colors 

                <div class="description">
                    {{description}}
                </div>                
            </div>            
        </div>
        <div class="colors">
            <div class="color-item" :style="{'background-color': item.color, color: item.textColor }" v-for="(item, index) in paletteColors" :key="index">{{item.color}}</div>
        </div>

    </div>
</template>

<script>

import { Color } from 'codemirror-colorpicker'

export default {
    props: ['title', 'description', 'count'], 
    data () {
        return {
            paletteColors: [],
            textColors: [],
            colorCount: this.count || 10, 
            imageSrc: '/resources/image/grapes.jpg'
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
.image-palette  {
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

    img, canvas {
        border: 1px solid #ececec;
    }

    .colors {
        display : block;
        padding: 10px 20px;
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

    .tools {
        display: inline-block;
        padding: 50px 20px;
        vertical-align: middle;
        font-size: 12px;
        box-sizing:border-box;
        vertical-align: top;

        .text { 
            font-weight: bold;
        }
    }
}

</style>