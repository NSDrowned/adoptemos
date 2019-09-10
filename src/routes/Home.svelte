<script>   
	// components
    import NavLink from "../components/NavLink/NavLink.svelte";
    import Mainpic from "../components/Mainpic/Mainpic.svelte";
</script>

<style lang="scss">
    .container--home {
        margin-top: 24px;
    }
</style>

<Mainpic />

<div class="container container--home">
    <div>Adoptemos.org is a free online tool to adopt a pet in any part of the world. Pets are listed by country. Each country and each animal rescue has their own rules, so ready carefully before thinking of adopting.</div>
    <div><NavLink classes="" to="adopt">Let's get started</NavLink></div>
</div>