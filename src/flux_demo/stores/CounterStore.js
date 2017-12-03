import * as ActionTypes from '../ActionTypes.js';
import AppDispatcher from '../AppDispatcher.js';
import {EventEmitter} from 'events'

const CHANGE_EVENT = 'changed';

const counterValues = {
	'First':8,
	'Second':100,
	'Third':30
};

const CounterStore = Object.assign({},EventEmitter.prototype,{
	getCounterValues:function(){
		return counterValues;
	},

	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback){
		this.on(CHANGE_EVENT,callback);
	},

	removeChangeListener: function(callback){
		this.removeListener(CHANGE_EVENT,callback);
	}
});

//将counterStore注册到AppDispatcher
CounterStore.dispatchToken = AppDispatcher.register((action)=>{
	if(action.type === ActionTypes.INCREMENT){
		counterValues[action.counterCaption] ++;
		//如果有调用者通过addChangeListener关注了counterStore的状态变化，这个
		//emitChange函数调用会引发监听函数的执行
		CounterStore.emitChange();
	}else if(action.type === ActionTypes.DECREMENT){
		counterValues[action.counterCaption] --;
		CounterStore.emitChange();
	}
});

export default CounterStore;