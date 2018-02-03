<template>
	<div>
		<mt-tabbar v-model="selected" fixed >
			<router-link to="/">
			  <mt-tab-item id="tab1">
			  	<i class="iconfont icon-weibiaoti1" slot="icon"></i>
			    	首页
			  </mt-tab-item>
		 	</router-link>
		 	<router-link to="/fenlei">
			  <mt-tab-item id="tab2">
			  <i class="iconfont icon-icon04" slot="icon"></i>
			    分类
			  </mt-tab-item>
		  </router-link>
		  <router-link to="/cart">
			  <mt-tab-item id="tab3">
			   <i class="iconfont icon-gouwuche" slot="icon"></i>
			    购物车
			  </mt-tab-item>
		  </router-link>
		  <router-link to="/mine">
			  <mt-tab-item id="tab4">
			   <i class="iconfont icon-wode" slot="icon"></i>
			    我的
			  </mt-tab-item>
		  </router-link>
		</mt-tabbar>
	</div>
</template>

<script>
	export default {
		name:"Footer",
		data(){
			return {
				selected:"1"
			}
		}
	}
</script>

<style>
	.is-fixed{
		display: flex;
		justify-content: space-around;
	}
	.mint-tab-item-icon{
		line-height: 24px;
	}
	.mint-tab-item{
		color: #a0a0a0;
	}
</style>