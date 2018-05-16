//引入Vue和Vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//创建并暴露仓库(store)
export default new Vuex.Store({
	state : {
    receiveInfo:[{
      'name': '王某某',
      'phone': '13811111111',
      'areaCode': '010',
      'landLine': '64627856',
      'provinceId': 110000,
      'province': '北京市',
      'cityId': 110100,
      'city': '市辖区',
      'countyId': 110106,
      'county': '海淀区',
      'add': '上地十街辉煌国际西6号楼319室',
      'default': true,
      'checked': true
    },{
      'name': '李某某',
      'phone': '13811111111',
      'areaCode': '010',
      'landLine': '64627856',
      'provinceId': 110000,
      'province': '北京市',
      'cityId': 110100,
      'city': '市辖区',
      'countyId': 110106,
      'county': '海淀区',
      'add': '上地十街辉煌国际东6号楼350室',
      'default': false,
      'checked': false
    }],
    provisionalOrder:[],
    orderData:[],
		//存放数据
    carPanelData:[],
		// 是否为最大值
		maxOff:false,
		// 控制购物车显示与隐藏
		carShow:false,
		// 创建小球
		ball:{
			show:false, //显示与隐藏
			el:null,//点击哪一个
			img:''
		}

	},
	//计算
	getters:{
		//数量
		totalCount(state){
			let count = 0;
			state.carPanelData.forEach(goods => {
				count += goods.count;
			})
			return count
		},
		//价格
		totalPrice(state){
			let price = 0;
			state.carPanelData.forEach(goods => {
				price += goods.count * goods.price;
			})
			return price
    },
    // 全选
    allChecked(state){
      let allcheck = true;
      state.carPanelData.forEach(goods => {
        if(!goods.check){
          allcheck = false
          return
        }
      })
      return allcheck
    },
    // 计算总金额
    checkedPrice(state){
      let price = 0;
      state.carPanelData.forEach(goods => {
        if(goods.check){
          price += goods.price*goods.count
        }
      })
      return price
    },
    // 计算总数量
    checkedCount(state){
      let count = 0;
      state.carPanelData.forEach(goods => {
        if(goods.check){
          count += goods.count
        }
      })
      return count
    }

	},
	//方法
	mutations:{
		addCarPanelData(state,data){
			//判断购物车是否添加过
			let bOff = true;
			state.carPanelData.forEach(goods => {
				if(goods.sku_id === data.info.sku_id){
					goods.count += data.count;
					if(goods.count > goods.limit_num){
						goods.count -= data.count;
						bOff = false;
						state.maxOff = true;
						return;
					}
					bOff = false;
					state.carShow = true;
					state.ball.show = true;
					state.ball.img = data.info.ali_image;
					state.ball.el = event.path[0];
				}
			})
			if(bOff){
				state.carShow = true;
				let goodsData = data.info;
        Vue.set(goodsData,'count',data.count);
        Vue.set(goodsData,'check',true);
				state.carPanelData.push(goodsData);
				state.ball.show = true;
				state.ball.img = data.info.ali_image;
				state.ball.el = event.path[0];
			}
		},

		//删除已加入购物车商品
		delCarPanelData(state,id){
			state.carPanelData.forEach((goods,index) => {
				if(goods.sku_id === id){
					state.carPanelData.splice(index,1);
					return;
				}
			})
		},
		//关闭提示
		closePrompt(state){
			state.maxOff = false;
		},

		//显示购物车
		carShow(state){
			state.carShow = true;
		},
		//隐藏购物车
		hideCar(state){
			setTimeout(() => {
				state.carShow = false;
			},500)
    },
    alertPrompt(state){
      state.maxOff = true
    },
    checkOut(state,data){
      state.provisionalOrder = data
    },
    submitReceive(state,data){
      if(data[0].default){
        state.receiveInfo.forEach((receive,index) => {
          receive.default = false
          receive.checked = false
        })
      }
      if(data[1] == null){
        state.receiveInfo.push(data[0])
      }else{
        state.receiveInfo[data[1]] = data[0]
      }
    },
    // 在购物车增加数量
    plusCarPanelData(state,id){
      state.carPanelData.forEach((goods,index) => {
				if(goods.sku_id === id){
          if(goods.count >= goods.limit_num)return
          goods.count++
					return;
				}
      })
    },
     // 在购物车减少数量
     subCarPanelData(state,id){
      state.carPanelData.forEach((goods,index) => {
				if(goods.sku_id === id){
          if(goods.count <=1)return
          goods.count--
					return;
				}
      })
    },
    // 选中
    checkGoods(state,id){
      state.carPanelData.forEach((goods,index) => {
				if(goods.sku_id === id){
         goods.check = !goods.check;
					return;
				}
      })
    },
    // 控制全选
    allCheckGoods(state,allChecked){
      state.carPanelData.forEach((goods,index) => {
				goods.check = !allChecked
      })
    },
    // 删除选中的商品
    delCheckGoods(state){
      let i= state.carPanelData.length;
      while(i--){
        if(state.carPanelData[i].check){
          state.carPanelData.splice(i,1)
        }
      }
    }

  }


})
