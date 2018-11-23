<template>
	<div>
		<!--<TopHeader></TopHeader>-->
		<FrontPageNav></FrontPageNav>
		<FrontPageCarouselMap></FrontPageCarouselMap>
		<FrontPageDisplayBoard></FrontPageDisplayBoard>
		<FrontPageFeatures></FrontPageFeatures>
		<FrontPageFooter></FrontPageFooter>
	</div>
</template>

<script>
import Access from "../components/Access/Access";
import FrontPageNav from "../components/FrontPage/FrontPageNav";
import FrontPageCarouselMap from "../components/FrontPage/FrontPageCarouselMap";
import FrontPageDisplayBoard from "../components/FrontPage/FrontPageDisplayBoard";
import FrontPageFooter from "../components/FrontPage/FrontPageFooter";
import FrontPageFeatures from "../components/FrontPage/FrontPageFeatures";
// import TopHeader from "../components/Common/TopHeader";
const axios = require("axios")
export default {
	name: "FrontPage",
    components: {
        FrontPageFeatures, FrontPageFooter, FrontPageDisplayBoard, FrontPageCarouselMap, FrontPageNav, Access},
    data(){
        return {
            insert_time:null
        }
    },
	methods:{
		onLoad:function () {
            axios.post("http://itsyuekao.com:5000/api/v0/counter", { })
                .then(response=> {
                    this.insert_time = response.data.insert_time
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
