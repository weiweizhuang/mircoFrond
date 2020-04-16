<template>
    <div class="tagContainer">
        <div class="tag-body">
            <div class="tag-body-top">
                <h2>人事考勤</h2>
            </div>
            <div class="tag-body-content">
                <router-link class="tag-item" to="/home">请假申请</router-link>
                <router-link class="tag-item" to="/xiaojia">XX申请</router-link>
                <router-link class="tag-item" to="">YY申请</router-link>
                <router-link class="tag-item" to="">ZZ申请</router-link>
                <!-- <div class="tag-item">销假申请</div>
                <div class="tag-item"></div>
                <div class="tag-item"></div>
                <div class="tag-item"></div>
                <div class="tag-item"></div> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
    },
}
</script>
<style lang="scss">
    .tagContainer {
        width: 100%;
        height: 100%;
        .tag-body {
            .tag-body-top {
                h2 {
                    color:red;
                }
            }
            .tag-body-content {
                display: flex;
                flex-wrap: wrap;
                // justify-content: space-around;
                .tag-item {
                    width: 180px;
                    height: 200px;
                    margin-right: 10px;
                    margin-bottom: 10px;
                    background: slateblue;
                    color:#fff;
                    font-size:20px;
                }
            }
        }
    }
</style>