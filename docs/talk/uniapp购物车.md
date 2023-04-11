项目中直接上手使用
```vue
<template>
	<view class="app_container">
		<view class="tabbar">
			<checkbox class="tabbar_check" @click="handleChecked" :checked="isAll" /><text>全选</text>
			<view class="settlement_box">
				结算
			</view>
			<view class="total_box">
				合计: <text style="color: red;">￥{{totalNumber}}</text>
			</view>
		</view>
		<view class="cart_title">
			<view>
				共{{goodsNum}}件商品
			</view>
			<view @click="handleDelete">
				删除
			</view>
		</view>
		<view class="goods_list">
			<ul>
				<li v-for="(item, index) in goodsList" :key="item.id">
					<view class="checkboxs">
						<checkbox-group @change="handleChange(item)">
							<label>
								<checkbox :checked='item.ischecked' :value="item.name" />
							</label>
						</checkbox-group>
					</view>
					<view class="goods_detail">
						<view class="goods_top">
							<uni-icons type="shop-filled"></uni-icons>供应商：{{item.shop}}
						</view>
						<view class="goods_center">
							<image src="../../static/image/bg2@3x.webp" mode=""></image>
							<view class="goods_right">
								<view>
									{{item.name}}
								</view>
								<view class="goods_price">
									￥{{item.number}}
								</view>
								<view class="addreduce_box">
									<view @click="handleReduce(item)">-</view>
									<view>{{item.num}}</view>
									<view @click="item.num ++">+</view>
								</view>
							</view>
						</view>
					</view>
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isAll: false,
				totolNum: 0,
				goodsNum: 0,
				goodsList: [{
					name: '橙子',
					shop: '杭州',
					number: 1000.00,
					num: 3,
					id: 1,
					ischecked: false,
				}, {
					name: '橘子',
					shop: '深圳',
					number: 888.00,
					num: 1,
					id: 2,
					ischecked: false,
				}, {
					name: '柑子',
					shop: '香港',
					number: 550.00,
					num: 2,
					id: 3,
					ischecked: false,
				}, ]
			}
		},
		methods: {
			handleReduce(item) {
				if (item.num > 0) {
					item.num--
				}
			},
			// 全选反选
			handleChecked(e) {
				if(this.isAll){
					this.goodsList.map(item => {
						item.ischecked = false
					})
				}else{
					this.goodsList.map(item => {
						item.ischecked = true
					})
				}
				this.isAll = !this.isAll
			},
			// 单选多选
			handleChange(item) {
				item.ischecked = !item.ischecked
				let checkArr = this.goodsList.filter(item => item.ischecked)
				if (checkArr.length === this.goodsList.length) {
					this.isAll = true
				}else{
					this.isAll = false
				}
			},
			// 删除
			handleDelete(){
			let deleteArr =	this.goodsList.filter(item => !item.ischecked)
				console.log(deleteArr)
				this.goodsList = deleteArr
			}
		},
		computed: {
			// 合计金额
			totalNumber() {
				let newNum = this.goodsList.filter(item => item.ischecked)
				let sum = 0
				newNum.forEach((item) => {
					sum += item.num * item.number
				})
				return sum
			},
		}
	}
</script>

<style lang="scss" scoped>
	.app_container {
		width: 100%;
		position: relative;
		height: 2000px;
		overflow: auto;
	}

	.tabbar {
		z-index: 1;
		background: white;
		position: fixed;
		bottom: 0;
		margin-bottom: 40rpx;
		// display: flex;
		height: 128rpx;
		width: 100%;
		line-height: 128rpx;
		box-sizing: border-box;
		padding-left: 20rpx;
		overflow: hidden;

		.total_box {
			float: right;
			margin-right: 100rpx;
		}

		.settlement_box {
			float: right;
			margin-right: 20rpx;
			width: 200rpx;
			height: 80rpx;
			border-radius: 50rpx;
			background: red;
			color: white;
			position: relative;
			line-height: 88rpx;
			text-align: center;
			top: 18%;
		}
	}

	.cart_title {
		display: flex;
		justify-content: space-between;
		padding-left: 20rpx;
		padding-right: 20rpx;
		align-items: center;
		height: 100rpx;
		position: sticky;
		top: 0;
		width: 100%;
		box-sizing: border-box;
		background: white;
		z-index: 1;
	}

	.goods_list {

		ul {
			display: flex;
			flex-direction: column;
		}

		li {
			width: 100%;
			height: 320rpx;
			margin: 10rpx;
			display: flex;

			.checkboxs {
				width: 10%;
				display: flex;
				align-items: center;
				justify-content: center;
				box-sizing: border-box;
			}

			.goods_detail {
				// flex: 1;
				width: 85%;
				height: 100%;

				.goods_top {
					height: 20%;
					display: flex;
					align-items: center;
				}

				.goods_center {
					height: 80%;
					display: flex;
					box-sizing: border-box;

					image {
						width: 220rpx;
						height: 220rpx;
						margin-right: 20rpx;
					}
				}

				.goods_right {
					flex: 1;
					position: relative;

					.goods_price {
						color: red;
						font-size: 36rpx;
						margin-top: 20rpx;
					}

					.addreduce_box {
						display: flex;
						position: absolute;
						bottom: 15%;
						right: 10%;

						view {
							height: 50rpx;
							width: 68rpx;
							text-align: center;
							line-height: 50rpx;
							background: #F2F2F2;
							margin-left: 2rpx;
							font-size: 34rpx;
						}
					}
				}
			}
		}
	}
</style>

```
