import store from "../publicStores.js"
import fetchJsonp from "fetch-jsonp"
var  dataAction={
	getInfoBanner(store){
//		console.log(value)
		var response=fetchJsonp("http://datainfo.duapp.com/shopdata/getBanner.php",{
			jsonpCallback:"callback"
		})
		store.commit("getInfoBanner",response)
	},
	getInfo(store,value){
		var responce=fetchJsonp(" http://datainfo.duapp.com/shopdata/getGoods.php?classID="+value,{
			jsonpCallback:"callback"
		})
		var data={
			responce,
			value
		}
		store.commit("getInfo",data)
	}
}
export default dataAction