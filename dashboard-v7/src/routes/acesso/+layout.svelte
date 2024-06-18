<script lang="ts">
	import Layout from '../../components/dashboard/Layout.svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	/** @type {import('./$types').LayoutData} */
	export let data;
	const condos = writable();
	$: condos.set(data.condominios);
	setContext('condos', condos);
</script>

<Layout bind:userData={data.userData}>
	<slot />
</Layout>
