import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
//import About from "@/views/About.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
	// gather url path and remove the leading forward slash
	let slug = to.path.replace(/(.*)\//, "");

	document.title = "Lvlz ";

	if (slug != "") {
		// Title for pages is url path with
		//	dashes converted to spaces, slashes converted to dashes
		//	with spacing, each word uppercase
		// Like: " - Test Cards - Sub Page - Sub Page2"
		document.title +=
			" - " +
			slug
				.replace("-", " ")
				.replace("/", " - ")
				.split(" ")
				.map((s) => s.charAt(0).toUpperCase() + s.slice(1))
				.join(" ");
	}
	next();
	return;
});

export default router;