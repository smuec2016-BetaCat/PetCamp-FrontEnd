<template>
	<div>
		<FrontPageNav></FrontPageNav>
		<FrontPageCarouselMap></FrontPageCarouselMap>
		<FrontPageDisplayBoard></FrontPageDisplayBoard>
		<FrontPageFooter></FrontPageFooter>
	</div>
</template>

<script>
import Access from "@/components/Access";
import FrontPageNav from "../components/FrontPageNav";
import FrontPageCarouselMap from "../components/FrontPageCarouselMap";
import FrontPageDisplayBoard from "../components/FrontPageDisplayBoard";
import FrontPageFooter from "../components/FrontPageFooter";
const axios = require("axios")
export default {
	name: "FrontPage",
    components: {FrontPageFooter, FrontPageDisplayBoard, FrontPageCarouselMap, FrontPageNav, Access},
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