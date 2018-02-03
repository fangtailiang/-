<template>
	<div>
		<mt-navbar v-model="selected" style="position: fixed;z-index: 5;width: 100%;display: flex;justify-content: space-around;">
			  <mt-tab-item id="1">推荐</mt-tab-item>
			  <mt-tab-item id="2">TV直播</mt-tab-item>
			  <mt-tab-item id="3">惠头条</mt-tab-item>
			  <mt-tab-item id="4">家居生活</mt-tab-item>
			  <mt-tab-item id="5">城市站</mt-tab-item>
		</mt-navbar>
		<div style="height: 2.75rem;background: #FFFFFF;"></div>
		<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" ref="loadmore">
  				<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="1">
			  	<mt-swipe :auto="4000" class="Info_swiper">
					  <mt-swipe-item v-for="banner in banners"><img :src="JSON.parse(banner.goodsBenUrl)[0]" style="width: 100%;height: 100%;" /></mt-swipe-item>
					</mt-swipe>
					<div class="Info_li">
							<div class="Info_lli">
								<dl>
									<dt><img src="../img/in1.png"/>
											<p>大清仓</p>
									</dt>
									<dd>抄底价</dd>
								</dl>
								<dl>
									<dt><img src="../img/info1_03.png"/></dt>
									<dd>新品</dd>
								</dl>
								<dl>
									<dt><img src="../img/info1_05.png"/></dt>
									<dd>热销排行</dd>
								</dl>
								<dl>
									<dt><img src="../img/info1_07.png"/></dt>
									<dd>海外购</dd>
								</dl>
								<dl>
									<dt><img src="../img/info1_09.png"/></dt>
									<dd>新人礼</dd>
								</dl>
							</div>
							<div class="Info_lli2">
								<dl>
									<dt>
										<p>惠家有</p>
										<p>公告</p>
									</dt>
									<dd>2018年春节快递放假通知</dd>
								</dl>
							</div>
					</div>
						<div class="Info_lidan">
							<div class="Info_top">
								<div class="Info_t_l">
									<p>限时秒杀</p>
									<p>
										<span>a</span>:
										<span>a</span>:
										<span>a</span>
									</p>
									<p>林源茂礼盒</p>
									<p>￥58</p>
									<p>
										<img src="../img/i_t_l.png"/>
									</p>
								</div>
								<div class="Info_t_r">
									<dl>
										<dt><img src="../img/i_r_t_03.png"/></dt>
										<dd>
											<p>10点开抢</p>
											<p>足浴桶 95元</p>
										</dd>
									</dl>
										<dl>
										<dt><img src="../img/i_r_t_06.png"/></dt>
										<dd>
											<p>20点开抢</p>
											<p>男士T恤 59元</p>
										</dd>
									</dl>
								</div>
							</div>
							<div class="Info_bottom"><img src="../img/i_r_t_09.png" /></div>
						</div>
			    <div class="Info_List_box">
			    	<h3>猜你喜欢</h3>
			    	<div class="Info_list">
			    		<div class="Info_item" v-for="list in lists">
			    			<p>
			    				<router-link to="/detail">
			    				<img :src=list.goodsListImg  alt="" />
			    				</router-link>
			    			</p>
				    		<p>{{list.goodsName}}</p>
				    		<p><span>￥{{(list.price*(1-list.discount/100)).toFixed(2)}}</span><span>￥{{list.price}}</span></p>
			    		</div>
			    	</div>
			    </div>
			    <div style="height: 52px;"></div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
			    <mt-cell v-for="n in 4" :title="'测试 ' + n" />
			  </mt-tab-container-item>
			  <mt-tab-container-item id="3">
			    <mt-cell v-for="n in 6" :title="'选项 ' + n" />
			  </mt-tab-container-item>
			   <mt-tab-container-item id="4">
			    <mt-cell v-for="n in 6" :title="'选项 ' + n" />
			  </mt-tab-container-item>
			   <mt-tab-container-item id="5">
			    <mt-cell v-for="n in 6" :title="'选项 ' + n" />
			  </mt-tab-container-item>
			</mt-tab-container>
		</mt-loadmore>
	</div>
</template>

<script>
	import store from "../stores/publicStores.js"
	export default {
		name:"InfoChild",
		data(){
			return {
				selected:"1",
				page:1
			}
		},
		methods:{
			loadTop(){
				this.page=1
				store.dispatch("getInfoBanner")
				store.dispatch("getInfo",this.page)
				this.$refs.loadmore.onTopLoaded();
			},
			loadBottom(){
				this.page+=1
				store.dispatch("getInfo",this.page)
				 this.allLoaded = true;// 若数据已全部获取完毕
				this.$refs.loadmore.onBottomLoaded();
			}
		},
		mounted(){
			store.dispatch("getInfoBanner")
			store.dispatch("getInfo",this.page)
		},
		computed:{
			banners:function(){
				return store.state.dataBanner
			},
			lists:function(){
				return store.state.InfoList
			}
		}
	}
</script>

<style>
	.mint-tab-item .mint-tab-item-label{
		color: #222222;
	}
	.is-selected{
		color: #d10e4c;
		border-bottom: 3px solid #d10e4c!important;
	} 
	.is-selected .mint-tab-item-label{
		color: #d10e4c;
		/*border-bottom: 3px solid #d10e4c;*/
	}
	.Info_swiper{
		width: 100%;height: 9.35rem;
	}
	.Info_li{
		width: 100%;background: #FFFFFF;height: 6.45rem;margin-bottom: 0.6rem;
	}
	.Info_li .Info_lli{
			width: 100%;height: 4.25rem;display: flex;justify-content: space-around;align-items: center;
	}
	.Info_li .Info_lli dl{
		font-size: 0.65rem;color: #1e1e1e;display: flex;flex-direction: column;
	}
	.Info_li .Info_lli dl:nth-of-type(1) dt{
		position: relative;
	}
	.Info_li .Info_lli dl:nth-of-type(1) dt p{
		position: absolute; z-index: 2;top: 0rem;right: -0.5rem;font-size: 0.35rem;color: #FFFFFF;background: #ea1e5d;border-bottom-left-radius: 0.25rem;width: 1.85rem;height: 0.65rem;line-height: 0.65rem;
		border-bottom-right-radius: 0.25rem;
		border-top-left-radius: 0.25rem;
		border-top-right-radius: 0.25rem;
	}
	.Info_li .Info_lli dl dt{
		width: 1.8rem;height: 1.8rem;margin-bottom: 0.75rem;
	}
	.Info_li .Info_lli dl dt img{
		width: 100%;height: 100%;
	}
	.Info_li .Info_lli2{
		width: 100%;height: 2.2rem;
	}
	.Info_li .Info_lli2 dl{
		height: 2.2rem; display: flex;align-items: center;padding-left: 0.95rem;
	}
	.Info_li .Info_lli2 dl dt{
		  width: 2.5rem;height: 1.55rem;border-right: 0.05rem solid #f5f5f5;
		  font-size: 0.7rem;font-weight: 600;
	}
	.Info_li .Info_lli2 dl dt p:nth-of-type(1){
		color: #2b2c27;
	}
	.Info_li .Info_lli2 dl dt p:nth-of-type(2){
		color: #FFFFFF;background: #da3368;text-align: center;font-style: italic;width: 1.5rem;
	}	
.Info_li .Info_lli2 dl dd{
		font-size: 0.65rem;padding-left: 0.45rem;
	}
	.Info_lidan{
		width: 100%;height: 11.8rem;background: #FFFFFF;margin-bottom: 0.6rem;
	}
	.Info_lidan .Info_top{
		width: 100%;height: 6.5rem;display: flex;margin-bottom: 0.65rem;
	}
	.Info_lidan .Info_top .Info_t_l{
		width: 8.8rem;
		padding-top: 1.05rem;padding-left: 0.6rem;position: relative;
	}
	.Info_lidan .Info_top .Info_t_l p:nth-of-type(1){
		height: 1.15rem;
		color: #1b1b1b;font-size: 0.85rem;font-weight: 600;
	}
	.Info_lidan .Info_top .Info_t_l p:nth-of-type(2){
		
		height: 1.325rem;
	}
	.Info_lidan .Info_top .Info_t_l p:nth-of-type(2) span{
		width: 1.05rem;height: 0.95rem;display: inline-block;background: #222222;color: #FFFFFF;text-align: center;line-height: 0.95rem;font-size: 0.5rem;
	}
	.Info_lidan .Info_top .Info_t_l p:nth-of-type(3){
		height: 0.65rem;font-size: 0.525rem;
	}
	.Info_lidan .Info_top .Info_t_l p:nth-of-type(4){
		position: absolute;width: 1.9rem;height: 1.9rem;border-radius: 100%;background: #d60c18;
		color: #FFFFFF;font-size: 0.7rem;text-align: center;line-height: 1.9rem;bottom: 0.85rem;
		right: 2.9rem;z-index: 2;
	}
	.Info_lidan .Info_top .Info_t_l p:nth-of-type(5){
		position: absolute;bottom: 1.8rem;right: 0;width: 4.1rem;height: 1.75rem;
	}
	.Info_lidan .Info_top .Info_t_l p:nth-of-type(5) img{
		width: 100%;height: 100%;
	}
	.Info_lidan .Info_top .Info_t_r{
		border-left: 0.05rem solid #ededed;width: 9.3rem;
	}
	.Info_lidan .Info_top .Info_t_r dl{
		height: 3.25rem;display: flex;flex-direction: row-reverse;align-items: center;
		padding-right: 0.75rem;padding-left: 0.5rem;justify-content: space-between;
	}
	.Info_lidan .Info_top .Info_t_r dl dt{
		width: 2.55rem;height: 1.95rem;
	} 
	.Info_lidan .Info_top .Info_t_r dl dt img{
		width: 100%;height: 100%;
	}
	.Info_lidan .Info_top .Info_t_r dl:nth-of-type(2){
		border-top: 0.05rem solid #f9f9f9;
	}
	.Info_lidan .Info_top .Info_t_r dl:nth-of-type(2) dt{
		width: 2.55rem;height: 3.2rem;
	}
	.Info_lidan .Info_top .Info_t_r dl dd{
		padding-top: 0.95rem;height: 3.65rem;
	}
	.Info_lidan .Info_top .Info_t_r dl dd p:nth-of-type(1){
		width: 3.65rem; height: 1.4rem;border: 0.05rem solid #aa5270;text-align: center;line-height: 1.4rem;
		color: #e80d4f;font-size: 0.75rem;margin-bottom: 0.455rem;border-bottom-left-radius: 0.625rem;
		border-bottom-right-radius: 0.625rem;border-top-left-radius: 0.625rem;border-top-right-radius: 0.625rem;
	}
	.Info_lidan .Info_top .Info_t_r dl dd p:nth-of-type(2){
		font-size: 0.7rem;
	}
	.Info_lidan .Info_bottom{
		width: 16.95rem;margin:0 auto;
	}
	.Info_lidan .Info_bottom img{
		width: 100%;height: 100%;
	}
	.Info_List_box .Info_list{
		width: 100%;overflow: hidden;display: flex;flex-direction: row;flex-wrap:wrap;background: #f5f5f5;
	}
	.Info_List_box{
		width: 100%;overflow: hidden;background: #FFFFFF;
	}
	.Info_List_box h3{
		width: 100%;height: 3rem;line-height: 3rem;text-align: center;font-size: 1rem;color: #222222;
	}
	.Info_List_box .Info_list .Info_item{
		width: 9.2rem;height: 18.9rem;margin-bottom: 0.3rem;background: #FFFFFF;
	}
	.Info_List_box .Info_list .Info_item p:nth-of-type(1) img{
		width: 100%;height: 13.5rem;
	}
	.Info_List_box .Info_list div:nth-of-type(2n+1){
		margin-right: 0.3rem;
	}
	.Info_List_box .Info_list .Info_item p:nth-of-type(2){
		width:8.75rem;height: 2.25rem;font-size: 0.9rem;color: #353535;line-height: 1.15rem;
		display: -webkit-box;
-webkit-box-orient: vertical;padding-left: 0.35rem;
-webkit-line-clamp: 2;margin-bottom: 1rem;
overflow: hidden;
	}
	.Info_List_box .Info_list .Info_item p:nth-of-type(1){
		width: 100%;margin-bottom: 0.6rem;height: 13.5rem;
		
	}
	.Info_List_box .Info_list .Info_item p:nth-of-type(3){
		height: 1rem;padding-left: 0.35rem;font-size: 1rem;color: #d10e4c;
	}
	.Info_List_box .Info_list .Info_item p:nth-of-type(3) span:nth-of-type(2){
		margin-left: 0.9rem;color: #999999;font-size: 0.85rem;text-decoration: line-through;
	}
</style>