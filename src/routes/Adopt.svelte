<script>
	// firebase
	import { db } from '../api/firebase.js';
    import { collectionData } from 'rxfire/firestore';
	import { startWith } from 'rxjs/operators';	

	const query = db.collection('pets');
    const pets = collectionData(query, 'id').pipe(startWith([]));
    
	// components
	import NavLink from "../components/NavLink/NavLink.svelte";
	import Pet from '../components/Pet/Pet.svelte';

</script>

<div class="container">

	<nav aria-label="breadcrumb">
		<ol class="breadcrumb">
			<li class="breadcrumb-item"><NavLink classes="" to="/">Home</NavLink></li>
			<li class="breadcrumb-item"><NavLink classes="" to="adopt">Adopt</NavLink  ></li>
		</ol>
	</nav>

	<section class="row allpets justify-content-around">
		{#each $pets as pet}
			<Pet {...pet} />
		{/each}
	</section>
</div>