<template>
  <div>
  	<mt-header :title="msg" fixed :style="isTrue?hi:hello" >
		  <router-link to="/" slot="left" >
		    <mt-button icon="back" v-if="isTrue" class="I_b">
		    </mt-button>
		    <div :style="isTrue?hide:show">
		    	<i class="iconfont icon-sousuo"></i>
		    	<!--<mt-search v-if="isTrue" v-model="value"  cancel-text="取消"  placeholder="搜索商品"></mt-search>-->
		    </div>
		  </router-link>
		  <mt-button slot="right">
		  	<div :style="isTrue?hide:show">
		  		<i class="iconfont icon-saoyisao"></i>
		  	</div>
		  	<div class="H_r_t"  :style="isTrue?show:hide">
		  		<p>
		  			<i class="iconfont icon-gouwuche" ></i>
		  		</p>
		  		<p>
		  			<i class="iconfont icon-fenxiang"></i>
		  		</p>
		  		
		  	</div>
		  </mt-button>
		</mt-header>
   		<router-view @to-parent="getChildData"></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '惠家有',
       isTrue:false,
       hi:{
      	"background": "rgba(255,255,255,0)"
       },
       hello:{
       	"background": "rgba(255,255,255,1)"
       },
       show:{
       	display:"inline-block",
       
       },
       hide:{
       	display:"none"	
       }
       
    }
  },
  methods:{
  	getChildData(value){
  		this.msg=value;
  		if(value=="惠家有"){
  			this.isTrue=false
  			
  		}else{
  			this.isTrue=true
  		}
  		console.log(this.isTrue)
  	}
  },
  created(){
//	console.log(this.isTrue)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.H_r_t{
		width: 3.4rem;
	}
	.H_r_t p{
		width: 1.5rem;height: 1.5rem;border-radius: 100%;background: #FFFFFF;color: #676767;border-color: #676767;text-align: center;line-height: 1.5rem;float: left;
	}
	.H_r_t p:nth-of-type(1){
		margin-right: 0.375rem;
	}
	.H_r_t p .iconfont{
		font-size: 1rem;
	}
	.I_b{
		width: 1.5rem;height: 1.5rem;border-radius: 100%;background: #FFFFFF;color: #676767;border-color: #676767;
		
	}
	.mint-header .iconfont{
		font-size:1.45rem ;color: #999999;
	}
	.mint-header .icon-saoyisao{
		font-size: 1.05rem;
	}
	.mint-header{
		color: #dc0f50;z-index: 5;
	}
	.mint-header h1{
		font-size: 1.35rem;
	}
</style>
