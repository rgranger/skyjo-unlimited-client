<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { connect } from '$lib/ws';

	onMount(async () => {
		connect();
	});
</script>

<slot />
