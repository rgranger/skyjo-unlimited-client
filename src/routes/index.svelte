<script>
	import Button from '@smui/button';

	const handleCreateRoom = () => {
		console.log('create room');
	};
</script>

<main class="flex flex-col">
	<h1 class="text-8xl text-center mb-8">
		<span class="text-red-500">S</span>
		<span class="text-yellow-500">K</span>
		<span class="text-green-500">Y</span>
		<span class="text-cyan-500">J</span>
		<span class="text-blue-500">O</span>
		<span>&nbsp;</span>
		<span class="text-red-500">U</span>
		<span class="text-yellow-500">N</span>
		<span class="text-green-500">L</span>
		<span class="text-cyan-500">I</span>
		<span class="text-blue-500">M</span>
		<span class="text-red-500">I</span>
		<span class="text-yellow-500">T</span>
		<span class="text-green-500">E</span>
		<span class="text-cyan-500">D</span>
	</h1>

	<div>
		<Button on:click={handleCreateRoom} variant="raised">Create Room</Button>
		<Button on:click={handleCreateRoom} variant="raised" disabled>Join Room</Button>
	</div>
</main>
