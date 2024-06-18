<script lang="ts">
	import Layout from '../../dashboard/Layout.svelte';
	/** @type {import('./$types').LayoutData} */
	export let data;
	// console.log(data);
</script>

<Layout bind:userData={data.userData}>
	<slot />
</Layout>
