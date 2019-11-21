<template>
    <div class="columns-graph">
        <column v-for="(item, index) in text" 
            :key="index" 
            :text="text[index]" 
            :height="height[index]+''" 
            :align="align[index]" 
            :color="color[index]" />
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: Array,
            default: () => {
                return []
            }
        },
        align: {
            type: Array,
            default: () => {
                return []
            }
        },        
        color: {
            type: Array,
            default: () => {
                return []
            }
        },
        height: {
            type: Array,
            default: () => {
                return []
            }
        }
    }
}
</script>

<style scoped lang="stylus">
.columns-graph {
    padding: 10px 0px;
}
</style>