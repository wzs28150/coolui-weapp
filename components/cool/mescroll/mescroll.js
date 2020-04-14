/*
 * @Descripttion:
 * @version:
 * @Author: wzs
 * @Date: 2020-04-04 11:00:07
 * @LastEditors: wzs
 * @LastEditTime: 2020-04-13 21:22:37
 */

const app = getApp();
Component({
  options: {
    multipleSlots: true,
  },
  properties: {
    page: {
      type: Number,
      value: 0,
    },
    totalPage: {
      type: Number,
      value: 0,
    },
    isRefreshLoading: {
      type: Boolean,
      value: false,
    },
    isLoadMoreLoading: {
      type: Boolean,
      value: false,
    },
    isEmpty: {
      type: Number,
      value: 0,
    },
    stylestr: {
      type: String,
      value: 0,
    },
  },
  data: {
    lastX: 0,
    lastY: 0,
    isNoneLoading: false,
    triggered: false
  },
  methods: {
    onPulling: function () {
      console.log(1);
      
      this.setData({
        isRefreshLoading: true,
      });
    },
    onRefresh() {
      if (this._freshing) return
      this._freshing = true
      setTimeout(() => {
        this.triggerEvent("upper", {
          page: this.data.page,
        });
      }, 500)
      setTimeout(() => {
        this.setData({
          triggered: false,
        })
        this._freshing = false
      }, 1000)
    },
  
    onRestore(e) {
      this.setData({
        isRefreshLoading: false
      });
    },
  
    onAbort(e) {
      // console.log(this.data.triggered)
      // console.log('onAbort', e)
    },
    lower: function () {
      this.triggerEvent("lower", {
        page: this.data.page,
      });
    },
    scroll: function (e) {
      // console.log(e);
      if (this.data.page <= this.data.totalPage) {
        this.setData({
          isLoadMoreLoading: true,
          isNoneLoading: false,
        });
      } else {
        this.setData({
          isLoadMoreLoading: false,
          isNoneLoading: true,
        });
      }
    },
  },

  ready: function () {
    // setTimeout(() => {
    //   this.setData({
    //     triggered: true,
    //   })
    // }, 1000)
  },
});