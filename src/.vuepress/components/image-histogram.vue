<template>
    <div class="image-filter">
        <h1 class="title">{{title}}</h1>
        <div class="viewer">
            <div class="item">
                <img ref="img" :src="imageSrc"  width="210px" height="160px" />
            </div>
            <div class="item">
                <img ref="convert" width="210px" height="160px" :src="filteredImageSrc" />
            </div>
        </div>
        <div class="description">
            {{description}}

        </div>
    </div>
</template>

<script>

import { Color, ImageFilter } from 'codemirror-colorpicker'

export default {
    props: ['title', 'description', 'red', 'blue', 'green', 'black'], 
    data () {
        return {
            filteredImageSrc: null,
            filterBlack: this.black || false, 
            filterRed: this.red || false, 
            filterGreen: this.green || false, 
            filterBlue: this.blue || false, 
            imageSrc: '/resources/image/grapes.jpg'
        }
    },

    methods: {
        view_histogram () {
            Color.ImageToHistogram(this.imageSrc, (url) => {
                this.filteredImageSrc = url;
            }, {
                black: this.filterBlack, 
                red: this.filterRed, 
                green: this.filterGreen, 
                blue: this.filterBlue, 
                width: 210, height: 160})            
        }
    },

    mounted () {
        this.view_histogram()
    }

}
</script>

<style scoped lang="stylus">
.image-filter  {
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

    .description {
        padding: 0px 20px;    
    }

    .tools {
        padding: 2px 20px;
        vertical-align: middle;
        font-size: 12px;

        .text { 
            font-weight: bold;
        }
    }
}

</style>