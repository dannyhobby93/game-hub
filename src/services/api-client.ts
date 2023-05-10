import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "25fdba64a2f94fcbb68bcee084f7e87a",
	},
});
