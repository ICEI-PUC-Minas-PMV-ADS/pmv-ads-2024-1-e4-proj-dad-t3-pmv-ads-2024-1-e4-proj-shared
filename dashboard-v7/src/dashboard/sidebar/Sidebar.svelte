<script>
	import { sidebarOpen } from '../store';
	import SidebarItems from './SidebarItems.svelte';
	import SidebarHeader from './SidebarHeader.svelte';

	/**
	 * @type {any}
	 */
	export let userData;
	const style = {
		mobileOrientation: {
			start: 'left-0 ',
			end: 'right-0 lg:left-0'
		},
		close: `hidden`,
		container: `pb-32 lg:pb-6`,
		open: `w-8/12 absolute z-40 sm:w-5/12`,
		default: `bg-neutral-400 h-screen overflow-y-auto top-0 lg:block lg:relative lg:w-64 lg:z-auto shadow-lg`
	};

	export let mobileOrientation = 'end';

	console.log(userData);
</script>

<aside
	class={`${style.default} ${style.mobileOrientation[mobileOrientation]}
       ${$sidebarOpen ? style.open : style.close} scrollbar`}
>
	<div class={style.container}>
		<SidebarHeader />
		<SidebarItems bind:userData />
	</div>
</aside>

<style>
	.scrollbar::-webkit-scrollbar {
		width: 0;
		background: transparent; /* hide Sidebar scrollbar on Chrome, Opera and other webkit Browsers*/
	}
	.scrollbar {
		-ms-overflow-style: none;
	}
</style>
