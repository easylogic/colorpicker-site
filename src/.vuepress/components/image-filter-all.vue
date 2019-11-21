<template>
    <div class="image-filter">
        <div class="area-group">
            <div class="area-item">
                <div class="image-palette">
                    <img ref="sampledImage" :src="sampleImageSrc">
                </div>
            </div>
            <div class="area-item">
                <div class="image-palette">
                    <img :src="filteredImageSrc" />
                </div>
            </div>        
        </div>
        <div class="image-select-input">
            <input type="file" ref="imageFile" id="imageforfilter" @change="viewImage" />
        </div>
        <div class="filter-item">
            <div>
                <button type="button" @click="filter_image(['grayscale', scaleValue])">Gray</button>
                <div class="input-range">
                    <span class="min">0</span>
                    <input type="range" min="0" max="200" step="1" v-model="scaleValue" />
                    <span class="max">200</span>
                </div>
            </div>
            <div>
                <button type="button" @click="filter_image(['contrast', contrastValue])">Contrast</button>
                <div class="input-range">
                    <span class="min">0</span>                
                    <input type="range" min="0" max="100" step="1" v-model="contrastValue" />
                    <span class="max">100</span>
                </div>
            </div>
            <div>
                <button type="button" @click="filter_image(['saturation', saturationValue])">Saturation</button>
                <div class="input-range">
                    <span class="min">0</span>                                
                    <input type="range" min="0" max="100" step="1" v-model="saturationValue" />
                    <span class="max">100</span>
                </div>
            </div>
            <div>
                <button type="button" @click="filter_image(['brightness', brightnessValue])">brightness</button>
                <div class="input-range">
                    <span class="min">-100</span>
                    <input type="range" v-model="brightnessValue" min="-100" max="100" step="1" />
                    <span class="max">100</span>
                </div>
                
            </div>
            <div>
                <button type="button" @click="filter_image(['sepia', sepiaValue])">sepia</button>
                <div class="input-range">
                    <span class="min">-100</span>
                    <input type="range" v-model="sepiaValue" min="-100" max="100" step="1" />
                    <span class="max">100</span>
                </div>
                
            </div>
            <div>
                <button type="button" @click="filter_image(['threshold', thresholdValue])">threshold</button>
                <div class="input-range">
                    <span class="min">0</span>
                    <input type="range" v-model="thresholdValue" min="0" max="255" step="1" />
                    <span class="max">255</span>
                </div>
            </div>            

            <div>
                <button type="button" @click="filter_image(['invert', invertValue])">invert</button>
                <div class="input-range">
                    <span class="min">0</span>
                    <input type="range" min="0" max="100" step="1" v-model="invertValue" />
                    <span class="max">100</span>
                </div>
            </div>
            <div>
                <button type="button" @click="filter_image(['blur', blurValue])">blur</button>
                <div class="input-range">
                    <span class="min">0</span>
                    <input type="range" min="0" max="200" step="1" v-model="blurValue" />
                    <span class="max">200</span>
                </div>                
            </div>
            <div>
                <button type="button" @click="filter_image(['crop', ...crop])">crop</button>
            </div>
            <div>
                <button type="button" @click="filter_image(['partial', {x:50,y:50,width:200,height:200}, 'invert', 'sepia','sharpen'])">partial</button>
            </div>
            <div>
                <button type="button" @click="filter_image('sharpen')">sharpen</button>
            </div>
            <div>
                <button type="button" @click="filter_image('emboss')">emboss</button>
            </div>
            <div>
                <button type="button" @click="filter_image('random')">random filter</button>
            </div>

            <div>
                <button type="button" @click="filter_image('motionBlur')">motion blur</button>
            </div>
            <div>
                <button type="button" @click="filter_image('motionBlur2')">motion blur 2</button>
            </div>
            <div>
                <button type="button" @click="filter_image('motionBlur3')">motion blur 3</button>
            </div>
            <div>
                <button type="button" @click="filter_image('sharpen', 'blur', 'sobel')">sobel</button>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
            </div>
            <div>
                <button type="button" @click="filter_image(['solarize', ...solarize])">solarize</button>
                <div class="input-range">
                    <span class="min"><strong>R</strong> 0</span>
                    <input type="range" min="0" max="255" step="1" v-model="solarize[0]" />
                    <span class="max">255</span>
                </div>
                <div class="input-range">
                    <span class="min"><strong>G</strong> 0</span>                
                    <input type="range" min="0" max="255" step="1" v-model="solarize[1]" />
                    <span class="max">255</span>
                </div>                
                <div class="input-range">
                    <span class="min"><strong>B</strong> 0</span>                
                    <input type="range" min="0" max="255" step="1" v-model="solarize[2]" />
                    <span class="max">255</span>
                </div>   
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>

            </div>            
            <div>
                <button type="button" @click="filter_custom()">custom</button>
                <table class="weights" border="0">
                    <tr>
                        <td><input type="number" min="-100" max="100" step="1" v-model="weights[0]" /></td>
                        <td><input type="number" min="-100" max="100" step="1" v-model="weights[1]" /></td>
                        <td><input type="number" min="-100" max="100" step="1" v-model="weights[2]" /></td>
                    </tr>
                    <tr>
                        <td><input type="number" min="-100" max="100" step="1" v-model="weights[3]" /></td>
                        <td><input type="number" min="-100" max="100" step="1" v-model="weights[4]" /></td>
                        <td><input type="number" min="-100" max="100" step="1" v-model="weights[5]" /></td>
                    </tr>
                    <tr>
                        <td><input type="number" min="-100" max="100" step="1" v-model="weights[6]" /></td>
                        <td><input type="number" min="-100" max="100" step="1" v-model="weights[7]" /></td>
                        <td><input type="number" min="-100" max="100" step="1" v-model="weights[8]" /></td>
                    </tr>
                </table>
                
            </div>

        </div>
        
        <pre><code class="javascript"></code></pre>
    </div>
</template>

<script>

import { Color, ImageFilter } from 'codemirror-colorpicker'

export default {
    data () {
        return {
            scaleValue: 100,
            contrastValue: 100,
            saturationValue: 100,
            invertValue: 100,
            blurValue: 100,
            brightnessValue: 10,
            sepiaValue: 10,
            thresholdValue: 100,
            solarize: [100, 100, 100],
            crop: [0, 0, 200, 200],
            weights: [0, -1, 0, -1, 5, -1, 0, -1, 0],
            sampleImageSrc: '',
            filteredImageSrc: ''
        }
    },

    methods: {
        viewImage () {
            var file = this.$refs.imageFile.files[0];
            this.sampleImageSrc = URL.createObjectURL(file);
            this.filteredImageSrc = '';            
        },
        filter_image () {
            var args = [...arguments];
            var file = this.$refs.imageFile.files[0];
            Color.ImageToURL(file, ImageFilter.merge(args), (url) => {
                this.filteredImageSrc = url;
            })

        },
        filter_custom () {
            var file = this.$refs.imageFile.files[0];
            Color.ImageToURL(file, ImageFilter.convolution(this.weights), function (url) {
                this.filteredImageSrc = url;
            })
        }         
    }

}
</script>

<style scoped lang="stylus">
.image-filter .area-item {
    width: 300px;
    box-sizing: border-box;
    border:0px;
    margin:0px;
    display: inline-block;
    height: 400px;45
    box-shadow: 0 0 0 0 rgba(213, 235, 255, 0.192);
    vertical-align: middle;
    background-color: rgba(255, 255, 255, 0.1);

    img{
        max-width: 100%;
        margin: 0 auto;
        box-sizing:border-box;
        border: 1px solid #ececec;
    }
}

.image-select-input {
    padding: 10px;
    background-color: #f0f0f0;    
}

.area-group {
    display: flex;

    .area-item {
        flex: 1;
        border: 1px solid #ececec;

        &:first-child {
            border-right: 0px;    
        }    
    }    
}

.filter-item {
    > div {
        display:inline-block;
        width:200px;
        box-sizing:border-box;
        padding:10px;
        text-align:center;

        table {
            border:0px;

            tr {
                border:0px;
            }
            td {
                border:0px;
                text-align: center;
                padding:2px;
            }
        }
            


        button {
            display:block;
            width:100%;
            height: 30px;
            background-color: transparent;
            margin: 5px 2px;
            
        }

        .input-range {
            display: flex; 
            align-items: center; 

            span {
                flex: 1; 
                text-align:center;
                font-size: 12px;
            }

            input {
                flex: 3;
            }
        }

    }    
}
</style>