<template>
  <div class="wrap">
    <!-- 首页地图模块 -->
    <div class="map">
      <Map :markers="markers" :updateDistance="updateDistance"/>
    </div>
    <!-- 打卡按钮 -->
    <cover-view class="current">
      <button class="add" @tap="goSign">打卡</button>
    </cover-view>
  </div>
</template>

<script>


export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style lang="scss" scoped>
.wrap{
  height: 100%;
}
.map{
  width: 100%;
  height: 100%;
  padding-bottom: 100rpx;
  box-sizing: border-box;
}
.current{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 240rpx;
}
.location{
  position: fixed;
  bottom: 160rpx;
  width: 80rpx;
  height: 80rpx;
  left: 20rpx;
}
.add{
  position: fixed;
  width: 100%;
  height: 100rpx;
  background: #000;
  color: #fff;
  font-weight: 500;
  bottom: 0;
  left: 0;
  font-size: 40rpx;
}
.my{
  position: fixed;
  display: inline-block;
  bottom: 150rpx;
  right: 0;
  width: 120rpx;
  height: 100rpx;
  cover-image{
    width: 80rpx;
    height: 80rpx;
    margin-top: 10rpx;
    margin-left: 10rpx;
    background: #000;
    border-radius: 50%;
  }
}
</style>
