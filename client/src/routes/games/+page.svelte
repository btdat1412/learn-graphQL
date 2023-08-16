<script lang="ts">
	export let data;
</script>

<main>
	<h1>All Games</h1>
	{#if data.data.games.length > 0}
		<ul>
			{#each data.data.games as game}
				<li>
					<h2>{game.title}</h2>
					<p>Platforms: {game.platform.join(', ')}</p>
				</li>
			{/each}
		</ul>
	{:else}
		<p>No games available.</p>
	{/if}
</main>
