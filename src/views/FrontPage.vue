<template>
	<div>
		<FrontPageNav></FrontPageNav>
		<!-- <FrontPageCarouselMap></FrontPageCarouselMap> -->
        <front-page-ads-bar></front-page-ads-bar>
		<FrontPageDisplayBoard></FrontPageDisplayBoard>
		<FrontPageFeatures></FrontPageFeatures>
		<FrontPageFooter></FrontPageFooter>
	</div>
</template>

<script>
import FrontPageNav from "../components/FrontPage/FrontPageNav"
import FrontPageCarouselMap from "../components/FrontPage/FrontPageCarouselMap"
import FrontPageAdsBar from "@/components/FrontPage/FrontPageAdsBar"
import FrontPageDisplayBoard from "../components/FrontPage/FrontPageDisplayBoard"
import FrontPageFooter from "../components/FrontPage/FrontPageFooter"
import FrontPageFeatures from "../components/FrontPage/FrontPageFeatures"
import axios from "axios"

export default {
	name: "FrontPage",
    components: {
        FrontPageFeatures, FrontPageFooter, FrontPageDisplayBoard, FrontPageCarouselMap, FrontPageNav, FrontPageAdsBar},
    data(){
        return {
            insertTime:null
        }
    },
	methods:{
		onLoad:function () {
            axios.post("http://itsyuekao.com:5000/api/v0/counter", { })
                .then(response=> {
                    this.insertTime = response.data.insertTime
                })
                .catch(error=> {
                    console.log(error)
                })
        }
	},
	created: function() {
        this.onLoad()
	}
}
</script>

<style scoped>
</style>
