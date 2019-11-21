<template>
    <div class="bars-graph">
        <bar v-for="(item, index) in text" 
            :key="index" 
            :text="text[index]" 
            :width="width[index]+''" 
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
        width: {
            type: Array,
            default: () => {
                return []
            }
        }
    }
}
</script>

<style scoped lang="stylus">
.bars-graph {
    padding: 10px 0px;
}
</style>