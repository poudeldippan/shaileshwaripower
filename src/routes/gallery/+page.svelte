<script>
	// Import images at BUILD TIME
	const modules = import.meta.glob(
		'/static/gallery/*.{png,jpg,jpeg,webp}',
		{ eager: true, as: 'url' }
	);

	// Convert to usable URLs
	const images = Object.values(modules).map((url) =>
		url.replace('/static', '')
	);

	let open = false;
	let current = 0;

	function openLightbox(i) {
		current = i;
		open = true;
	}

	function next() {
		current = (current + 1) % images.length;
	}

	function prev() {
		current = (current - 1 + images.length) % images.length;
	}
</script>

<section class="wrap">
	<h1 class="title">Gallery</h1>

	{#if images.length === 0}
		<p class="error">No images found in /static/gallery</p>
	{:else}
		<div class="grid">
			{#each images as img, i}
				<img
					src={img}
					alt="Project gallery image"
					on:click={() => openLightbox(i)}
				/>
			{/each}
		</div>
	{/if}
</section>

{#if open}
	<div class="lightbox" on:click={() => (open = false)}>
		<button class="close">×</button>

		<button
			class="nav left"
			on:click|stopPropagation={prev}
			aria-label="Previous image"
		>
			❮
		</button>

		<img src={images[current]} alt="Expanded gallery image" />

		<button
			class="nav right"
			on:click|stopPropagation={next}
			aria-label="Next image"
		>
			❯
		</button>
	</div>
{/if}

<style>
.wrap {
	max-width: 1200px;
	margin: 80px auto;
	padding: 0 20px;
}

.title {
	text-align: center;
	font-size: 36px;
	color: #083d7d;
	margin-bottom: 40px;
}

.error {
	text-align: center;
	color: red;
	font-weight: 600;
}

.grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
	gap: 14px;
}

.grid img {
	width: 100%;
	height: 180px;
	object-fit: cover;
	border-radius: 12px;
	cursor: pointer;
	transition: transform 0.2s;
}

.grid img:hover {
	transform: scale(1.04);
}

.lightbox {
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.92);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 9999;
}

.lightbox img {
	max-width: 85vw;
	max-height: 90vh;
	border-radius: 12px;
}

.close {
	position: absolute;
	top: 20px;
	right: 30px;
	font-size: 42px;
	color: white;
	background: none;
	border: none;
	cursor: pointer;
}

.nav {
	position: absolute;
	font-size: 50px;
	color: white;
	background: none;
	border: none;
	cursor: pointer;
}

.left {
	left: 30px;
}

.right {
	right: 30px;
}
</style>
