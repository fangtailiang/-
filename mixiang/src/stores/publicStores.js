import Vue from "vue"
import Vuex from "vuex"
import dataState from "./TodoStates/dataState.js"
import dataMutation from "./TodoMutations/dataMutation.js"
import dataAction from "./TodoActions/dataAction.js"
Vue.use(Vuex)
var store=new Vuex.Store({
	state:dataState,
	actions:dataAction,
	mutations:dataMutation
})
export default store