<template>
    <div class="image-filter">
        <div class="viewer">
            <div class="item">
                <img ref="img" :src="imageSrc"  width="210px" height="160px" />
            </div>
            <div class="item">
                <img ref="convert" width="210px" height="160px" :src="filteredImageSrc" />
            </div>
            <div class="item">
                <img ref="histogram" width="210px" height="160px" :src="histogramImageSrc" />
            </div>            
        </div>
        <div class="tools" v-if="filterValue1">
            <div v-if="filterInputType1 == 'input'"><span class="text">{{filterText1}}</span> <input class="input" type="text" v-model="filterValue1" @input="filter_image" /></div>
            <div v-else><span class="text">{{filterText1}}</span> Min: {{filterMin}} <input type="range" :min="filterMin" :max="filterMax" v-model="filterValue1" @change="filter_image" :step="step" /> Max:{{filterMax}} Current Value: {{filterValue1}} </div>
        </div>
        <div class="tools" v-if="filterValue2"><span class="text">{{filterText2}}</span> Min: {{filterMin}} <input type="range" :min="filterMin" :max="filterMax" v-model="filterValue2" @change="filter_image" :step="step" /> Max:{{filterMax}} Current Value: {{filterValue2}} </div>
        <div class="tools" v-if="filterValue3"><span class="text">{{filterText3}}</span> Min: {{filterMin}} <input type="range" :min="filterMin" :max="filterMax" v-model="filterValue3" @change="filter_image" :step="step" /> Max:{{filterMax}} Current Value: {{filterValue3}} </div>
    </div>
</template>

<script>

import { Color, ImageFilter } from 'codemirror-colorpicker'

export default {
    props: ['filter', 'count', 'min', 'max', 'step', 'filterValue1Type', 'filterValue2Type', 'filterValue3Type', 'filterValue1Text', 'filterValue2Text', 'filterValue3Text'], 
    data () {
        return {
            filterMin: this.min || 0,
            filterMax: this.max || 100,
            filterValue1: this.filter[1],
            filterValue2: this.filter[2],
            filterValue3: this.filter[3],
            filterText1: this.filterValue1Text || 'Amount',
            filterText2: this.filterValue2Text || 'Amount',
            filterText3: this.filterValue3Text || 'Amount',           
            filterInputType1: this.filterValue1Type || 'range',
            filterInputType2: this.filterValue2Type || 'range',
            filterInputType3: this.filterValue3Type || 'range',                        
            filterType: this.filter[0],
            // filterOption: [this.filter || ['grayscale', 100] ],
            filteredImageSrc: null,
            histogramImageSrc: null,
            filterCount: this.count || 1, 
            imageSrc: '/resources/image/grapes.jpg'
        }
    },

    methods: {
        filter_image () {
            let filter = [[this.filterType, this.filterValue1, this.filterValue2, this.filterValue3 ]]

            if (this.filterType == 'gradient') {
                filter = [[this.filterType, this.filterValue1 + ',' + this.filterValue2 ]]
            }

            Color.ImageToURL(this.imageSrc, ImageFilter.merge(filter), (url) => {
                this.filteredImageSrc = url;

                Color.ImageToHistogram(this.filteredImageSrc, (histogramUrl) => {
                     this.histogramImageSrc = histogramUrl;
                    }, {
                        black: true, 
                        width: 210, height: 160 
                    })   
            })
        }
    },

    mounted () {
        this.filter_image()
    }

}
</script>

<style scoped lang="stylus">
.image-filter  {
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

    .tools {
        padding: 2px 0px;
        padding-right: 20px;
        vertical-align: middle;
        font-size: 12px;

        .text { 
            font-weight: bold;
            margin-right: 5px;
            display: inline-block;
            width: 100px;
        }

        .input[type="text"] {
            padding: 10px;
            width: 200px;
            border: 1px solid #ececec;    
        }
    }
}

</style>