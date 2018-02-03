import store from "../publicStores.js"
var  dataMutation={
	getInfoBanner(state,response){
		response.then((response)=>{
			return response.json()
		}).then((json)=>{
			state.dataBanner=json
		})
	},
	getInfo(state,data){
		data.responce.then((responce)=>{
			return responce.json()
		}).then((json)=>{
			if(data.value==1){
				state.InfoList=json
			}else{
				state.InfoList=state.InfoList.concat(json)
			}
		})
	}
}
export default dataMutation