<template>
    <div class="image-filter-list">
        <div class="filter-description" v-for="(item, index) in list" :key="index">
            <image-filter-item-table :item="item" />
        </div>
    </div>
</template>

<script>
import { ImageFilter } from 'codemirror-colorpicker'
export default {
    data () {
        return {
            list : [
                { name: 'bitonal', params: ['darkColor', 'lightColor'], description: 'bitonal 실행'},
                { name: 'blur', params: [], description: ''},
                { name: 'brightness', params: [], description: ''},
                { name: 'contrast', params: [], description: ''},
                { name: 'convolution', params: ['weights'], description: ''}
            ]
        }
    }
}
</script>

<style>

</style>
