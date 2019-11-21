<template>
    <div class="image-filter-item">
        <div class="item-name">ImageFilter.{{item.name}}</div>
        <div class="item-description">{{item.description}}</div>
        <table v-if="getParams.length">
            <tr>
                <th>Param</th>
                <th>Type</th>
                <th>Description</th>
            </tr>
            <tr v-for="(it, index) in getParams" :key="index">
                <td>{{it.name}}</td>
                <td>{{it.type}}</td>
                <td>{{it.description}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    props: ['item'],
    computed: {
        getParams () {
            return (this.item.params || []).map(it => {
                let item = it

                if (typeof item === 'string') {
                    item = { name : item, type: 'string', description: ''}
                }
                    
                return item
            })
        }
    }

}
</script>

<style scoped lang="stylus">
.image-filter-item {
    margin-top: 10px;    
}
.item-name {
    font-size: 16px;
    font-weight: bold;    
}

.item-description {
    padding: 10px 0px;    
    font-size: 13px;
}
</style>
