<template>
	<div style="background: #f5f5f5;">
		<!--<div style="height: 40px;"></div>-->
		
		<div class="Item_box">
			<mt-swipe :auto="4000" class="Item_swiper">
			  <mt-swipe-item><img src="http://temp.im/640x320/ffccff/fff" width="100%" alt="" /></mt-swipe-item>
			  <mt-swipe-item><img src="http://temp.im/640x320/ffccaa/fff" width="100%" alt="" /></mt-swipe-item>
			  <mt-swipe-item><img src="http://temp.im/640x320/aaccff/fff" width="100%" alt="" /></mt-swipe-item>
			</mt-swipe>
			<div class="Item_I">
				<p><span>￥36</span><span>￥40</span></p>
				<p>月销:130件</p>
				<p>会生活的撒发生</p>
			</div>
		</div>
		<div class="Item_color">
			<mt-cell title="选择" is-link class="Item_change">
			<button class="mint-button Item_C_b" @click="changColor">  
	       	颜色
	      	</button>
			</mt-cell>
			<mt-cell title="服务" class="Item_change">
				<span><em>邮</em>包邮</span>
				<span><em>正</em>正品保障</span>
				<span><em>7</em>支持7日无理由退货</span>
			</mt-cell>
		</div>
		<div class="Item_pinjia">
			<mt-cell title="商品评价" class="Item_change Item_C_p" to=""  is-link value="带链接">
				<p>好评度 <em>0%</em> 4人评论</p>
			</mt-cell>
			<div class="Item_p_list">
				<dl>
					<dt><img src="http://temp.im/32x32/ffccff/fff"/></dt>
					<dd><p>13238153125</p>
					<p>dfdgfd</p></dd>
					<dd>大仿佛那都是开放发你的萨克蜂蜜洒都是开放呢发你的萨克蜂蜜洒都是开放呢发你的萨克蜂蜜洒到了</dd>
					<dd><p>fgdg</p><p>dfg</p></dd>
				</dl>
			</div>
		</div>
		<div style="height: 2.45rem;"></div>
	    <div class="doItem">  
		  <div @click="open4" class="cx">
		  	<i class="iconfont icon-kefu1"></i>
		  </div>
		   <div @click="open5" class="cx"> 
		   		<i class="iconfont icon-shoucang"  :style="isCollect?show:hide"></i>	
	          <i class="iconfont icon-shoucang1" :style="isCollect?hide:show"></i>
	      </div> 
	      <div class="cx" @click="toCart">  
	       	加入购物车
	      </div> 
	      <div class="cx" @click="toBuy">  
	        	立即购买
	      </div>
		</div>  
		
	</div>
</template>

<script>
	let html=`<div class="Item_toCart">
                <dl><dt><img src="http://temp.im/32x32/ffccff/fff" /></dt>
                <dd>瞎激动三方面</dd>
                <dd>￥1566</dd>
                <dd>请选择:<p>颜色</p></dd>
                </dl>
                <div class="Item_toColor">
                	<p>颜色</p>
					<p><span>绿色</span><span>红色</span></p>
                </div>
                <div class="Item_CartNum">
                <p>购买数量</p>
                <p><span>-</span><span>1</span><span>+</span></p></div>
                </div>`;
	import { MessageBox } from 'mint-ui';
	export default {
		name:"Detail",
		data(){
			return {
				msg:"详情",
				isCollect:false,
				collect:"收藏成功",
				hide:{
					"display":"none"
				},
				show:{
					"display":"inline-block"
				}
			}
		},
		methods:{
		    open4(){
				MessageBox.confirm('', {
                message: '为节省您的时间，请告知客服此产品的编号 <em>157234</em>',
                confirmButtonText: '现在拨打',
                cancelButtonText: '再去逛逛'
            }).then(action => {
                if (action == 'confirm') {
                    console.log('abc');
                }
            }).catch(err => {
                if (err == 'cancel') {
                    console.log('123');
                }
            })
		    },
		    open5(){
		    	MessageBox('', this.collect).then(action=>{
		    		this.isCollect=!this.isCollect
		    		if(this.isCollect){
		    			this.collect="取消收藏"
		    		}else{
		    			this.collect="收藏成功"
		    		}
		    		console.log(this.isCollect)
		    	});
		    },
		    toCart(){
		    	MessageBox.confirm('', {
                message:html ,
                confirmButtonText: '确定',
                cancelButtonText: 'x'
            }).then(action => {
                if (action == 'confirm') {
                    console.log('abc');
                }
            }).catch(err => {
                if (err == 'cancel') {
                    console.log('123');
                }
            })
		    },
		    changColor(){
		    	
		    },
		    toBuy(){
		    	
		    }
		},
		mounted(){
			this.$emit("to-parent",this.msg)
		}
	}
</script>

<style>
	.Item_toCart{
		width: 100%;background: #FFFFFF;
	}
	.Item_toCart dl{
		height: 3.95rem;padding-top: 0.4rem;border-bottom: 0.05rem solid #f5f5f5;
	}
	.Item_toCart dl dt{
		float: left;width: 3.1rem;height: 3.1rem;
	}
	.Item_toCart dl dt img{
		width: 100%;
	}
	.Item_toCart dl dd{
		margin-left: 3.7rem;
	}
	.Item_toCart dl dd:nth-of-type(1){
		height: 0.65rem;font-size: 0.6rem;color: #313131;
		line-height: 1rem;
	}
	.Item_toCart dl dd:nth-of-type(2){
		height: 1.5rem;font-size: 0.75rem;color: #cb0033;
	}
	.Item_toCart dl dd:nth-of-type(3){
		font-size: 0.6rem;display: flex;
	}
	.Item_toCart dl dd:nth-of-type(3) p{
		margin-left: 0.35rem;color:#313131 ;
	}
	.Item_toCart .Item_toColor{
		height: 5.2rem;border-bottom: 0.05rem solid #f5f5f5;
		padding-top: 0.75rem;
		color: #282828;font-size: 0.75rem;
	}
	.Item_toCart .Item_toColor p:nth-of-type(2) span{
		display: inline-block;
		height: 1.55rem;line-height: 1.55rem;background: #e9e9e9;padding: 0 0.6rem;margin-right: 0.8rem;
	}
	.Item_toCart .Item_toColor p:nth-of-type(1){
		height: 1.2rem;line-height: 0.7rem;
	}
	.Item_toCart .Item_CartNum{
		height: 2.75rem;border-bottom: 0.05rem solid #f5f5f5; display: flex;justify-content: space-between;align-items: center;
	}
	.Item_toCart .Item_CartNum p:nth-of-type(1){
		font-size: 0.75rem;color: #1c1c1c;
	}
	.Item_toCart .Item_CartNum p:nth-of-type(2){
		
	} 
	.icon-shoucang{
		color: #c3283a;
	}
	.mint-msgbox-message{
		text-align: left;
	}
	.mint-msgbox-message em{
		margin-left: 0.125rem; color: #c34c28;
	}
	
	
	.Item_swiper{
		width: 100%;height: 18.7rem;margin-bottom: 1.2rem;
	}
	.Item_box{
		width: 100%;background: #FFFFFF;height: 24.45rem;margin-bottom: 0.6rem;
	}
	.Item_box img{
		width: 100%;height: 18.7rem;
	}
	.Item_box .Item_I{
		padding-left: 0.55rem;
	}
	.Item_box .Item_I p:nth-of-type(1){
		height: 1rem;font-size: 1rem;color: #d10e4c;margin-bottom: 0.65rem;
	}
	.Item_box .Item_I p:nth-of-type(1) span:nth-of-type(2){
		margin-left: 0.9rem;color: #999999;font-size: 0.85rem;text-decoration: line-through;
	}
	.Item_box .Item_I p:nth-of-type(2){
		height: 1.45rem;font-size: 0.65rem;
	}
	.Item_box .Item_I p:nth-of-type(3){
		font-size: 0.75rem;color: #232323;font-weight: 500;
	}
	.Item_color{
		height: 6.9rem;background: #FFFFFF;margin-bottom: 0.6rem;
	}
	.Item_change .mint-cell-title{
		flex: 0;
	}
	.Item_change .mint-cell-mask{
		display: inline-block;
	}
	.Item_change .mint-cell-title .mint-cell-text{
		display: inline-block;width: 4rem;font-size: 0.7rem;color: #090909;
	}
	.Item_C_b{
		position: absolute;width: 10rem;height: 1.65rem;border: none;background: #FFFFFF;text-align: left;font-size: 0.65rem;
	}
	.Item_change .mint-cell-allow-right::after{
		top: 50%;
	}
	.Item_change:nth-of-type(2){
		height: 4.5rem;
	}
	.Item_change:nth-of-type(2) .mint-cell-value{
		position: absolute;top: 0.325rem;left: 4rem;
		width: 8.5rem;
		overflow: hidden;height: 4rem;display: flex;
		flex-wrap: wrap;
	}
	.Item_change .mint-cell-mask{
		display: none;
	}
	.Item_change:nth-of-type(2) .mint-cell-value span{
		margin-right: 0.875rem;font-size: 0.6rem;
	}
	.Item_change:nth-of-type(2) .mint-cell-value span em{
		display: inline-block;background: #685bb1;color: #ffffff;width: 0.675rem;height: 0.675rem;font-size: 0.3rem;text-align: center;line-height: 0.675rem;margin-right: 0.4rem;
		
	}
	.Item_pinjia{
		width: 100%;background: #FFFFFF;margin-bottom: 0.6rem;
	}
	.Item_pinjia .Item_C_p{
		height: 4.2rem;
	}
	.Item_pinjia .Item_C_p p{
		position: absolute;left: 0.6rem;top: 3rem;font-size: 0.7rem;color: #303030;
	}
	.Item_pinjia .Item_C_p p em{
		color: #cc0039;margin: 0 0.5rem 0 0.3rem;
	}

	.Item_p_list{
		border-top: 0.05rem solid #f1f1f1;padding: 0 0.55rem;
	}
	.Item_p_list dl{
		padding-top: 0.55rem;overflow: hidden;padding-bottom: 1rem;
	} 
	.Item_p_list dl dt{
		float: left;
	}
	.Item_p_list dl dd{
		margin-left: 2.7rem;
	}
	.Item_p_list dl dd:nth-of-type(1){
		font-size: 0.65rem;
		display: flex;justify-content: space-between;height: 1.05rem;
	}
	.Item_p_list dl dd:nth-of-type(2){
		font-size: 0.65rem;color: #3e3e3e;line-height: 0.95rem;margin-bottom: 0.4rem;
	}
	.Item_p_list dl dd:nth-of-type(3){
		display: flex;justify-content: space-between;font-size: 0.55rem;
	}
	.Item_p_list dl dd:nth-of-type(3) p:nth-of-type(2){
		margin-right: 0.5rem;
	}
	.doItem{
		width: 100%;height: 2.45rem;bottom: 0;left: 0;
		display: flex;background: #FFFFFF;position: fixed;z-index: 5;
	}
	.doItem .cx{
		height: 2.45rem;line-height: 2.45rem;text-align: center;font-size: 0.725rem;display: block;
	}
	.doItem .cx:nth-of-type(1){
		width: 3.1rem;color: #646464;
	}
	.doItem .cx:nth-of-type(2){
		width: 3.1rem;border-left: 0.05rem solid #f1f1f1;color: #646464;
	}
	.doItem .cx:nth-of-type(3){
		width: 6.25rem;color: #FFFFFF;background: #fea829;
	}
	.doItem .cx:nth-of-type(4){
		width: 6.25rem;color: #FFFFFF;background: #d10e4c;
	}
</style>