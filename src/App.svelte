<script>
	// routing
	import { onDestroy } from "svelte";
	import { Router, Link, Route } from "svelte-routing";
	import Home from "./routes/Home.svelte";
	import Adopt from "./routes/Adopt.svelte";
	export let url = "";

	// components
	import Navbar from "./Navigation/Navbar/Navbar.svelte";
	import NavLink from "./components/NavLink/NavLink.svelte";
	import Language from './stores/language.js';

	let language;

	const subscription = Language.subscribe(storedLanguage => {
		language = storedLanguage.language;
	});

	onDestroy(() => {
		if(subscription) {
			unsubscribe();
		}
	});

</script>

<style>
	/* .allpets {
		display: flex;
		justify-content: space-between;
	} */
</style>

<Router url="{url}">

	<Navbar language={language} />

  	<div>
    	<Route path="adopt" component="{Adopt}" />
    	<Route path="/"><Home /></Route>
  	</div>

</Router>