<script>
	import { goto } from '$app/navigation';
	import { redirect } from '@sveltejs/kit';
	import { onMount } from 'svelte';
	onMount(() => {
		goto('/login');
	});
</script>

<svelte:head>
	<title>Salvia-kit Dashboard v7 with Svelte-kit</title>
</svelte:head>
