<script lang="ts">
	export let data;
	const { games } = data.data;
</script>

<main>
	<h1>All Games</h1>
	{#if games.length > 0}
		<ul>
			{#each games as game}
				<li>
					<h2>{game.title}</h2>
					<p>Platforms: {game.platform.join(', ')}</p>
					<h3>Reviews:</h3>
					<ul>
						{#each game.reviews as review}
							<li>
								<p>Rating: {review.rating}</p>
								<p>{review.content}</p>
							</li>
						{/each}
					</ul>
				</li>
			{/each}
		</ul>
	{:else}
		<p>No games available.</p>
	{/if}
</main>
