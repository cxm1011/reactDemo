import * as ActionTypes from './ActionTypes.js';

//与flux不同的是其只返回一个对象，把如何处理对象的工作交给调用者
export const increment = (counterCaption) => {
	return {
		type: ActionTypes.INCREMENT,
		counterCaption: counterCaption
	};
};

export const decrement = (counterCaption) => {
	return {
		type: ActionTypes.DECREMENT,
		counterCaption: counterCaption
	};
};
