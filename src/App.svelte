<script lang="ts">
	let firstName: string = "Gabe";
	let lastName: string = "Rosales";
	let color: string = "#1AB399";
	let showText: boolean = false;

	// getting starwars data because why not

	const toggle = () => {
		const colorArray = [
			"#FF6633",
			"#FFB399",
			"#FF33FF",
			"#FFFF99",
			"#00B3E6",
			"#E6B333",
			"#3366E6",
			"#999966",
			"#99FF99",
			"#B34D4D",
			"#80B300",
			"#809900",
			"#E6B3B3",
			"#6680B3",
			"#66991A",
			"#FF99E6",
			"#CCFF1A",
			"#FF1A66",
			"#E6331A",
			"#33FFCC",
			"#66994D",
			"#B366CC",
			"#4D8000",
			"#B33300",
			"#CC80CC",
			"#66664D",
			"#991AFF",
			"#E666FF",
			"#4DB3FF",
			"#1AB399",
			"#E666B3",
			"#33991A",
			"#CC9999",
			"#B3B31A",
			"#00E680",
			"#4D8066",
			"#809980",
			"#E6FF80",
			"#1AFF33",
			"#999933",
			"#FF3380",
			"#CCCC00",
			"#66E64D",
			"#4D80CC",
			"#9900B3",
			"#E64D66",
			"#4DB380",
			"#FF4D4D",
			"#99E6E6",
			"#6666FF",
		];
		// should return all colors except one that's not already selected
		let newColorArray = colorArray.filter(function (n) {
			return n !== color;
		});
		let newColor =
			newColorArray[Math.floor(Math.random() * newColorArray.length)];
		if (color === newColor) {
			console.log("DUPLICATE" + newColor + " " + color);
		} else {
			color = newColor;
		}
	};

	$: name = firstName + " " + lastName;
</script>

<main>
	<h1 style="color: {color};">Hello {name}!</h1>
	{#if showText}
		<p>
			Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to
			learn how to build Svelte apps.
		</p>
	{:else}
		<h1>🖕</h1>
	{/if}
	<button on:click={toggle}>Click me</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
