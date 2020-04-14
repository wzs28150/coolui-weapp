/*
 * @Author: wzs
 * @Date: 2020-04-08 08:46:07
 * @LastEditors: wzs
 * @LastEditTime: 2020-04-08 08:48:54
 * @Description: 
 */
const app = getApp();
Component({
	properties: {
		top: {
			type : String,
			value: 0
		},
		bottom: {
			type : String,
			value: 0
		},
		left: {
			type : String,
			value: 0
		},
		right: {
			type : String,
			value: 0
		},
		tip: {
			type : String,
			value: 0
		}
	},
	data: {
		isTipShow: false
	},
	methods: {
		close: function () {
			this.triggerEvent('close')
		}
	},
	ready: function () {}
});
