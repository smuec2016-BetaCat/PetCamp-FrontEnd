export default {
	user:{},
	token: '',
	shopList:{},
	setUser (object) {
		this.user = object
	},
	setToken(newToken) {
		this.token = newToken
	},
	setShopList (object){
		console.log(this.shopList)
		this.shopList = object
		console.log(this.shopList)
	}
}