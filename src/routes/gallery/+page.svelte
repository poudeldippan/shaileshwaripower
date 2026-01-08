<script>
	export let data;
	let currentIndex = null;

	const images = data.images;

	function open(i) { currentIndex = i; }
	function close() { currentIndex = null; }
	function prev() { currentIndex = (currentIndex - 1 + images.length) % images.length; }
	function next() { currentIndex = (currentIndex + 1) % images.length; }
</script>

<section class="page-hero">
	<h1>Gallery</h1>
</section>

<section class="container gallery">
	{#each images as img, i}
		<img
			src={`/gallery/${img}`}
			alt="Gallery image"
			on:click={() => open(i)}
		/>
	{/each}
</section>

{#if currentIndex !== null}
	<div class="lightbox">
		<button class="close" on:click={close}>✕</button>
		<button class="nav left" on:click={prev}>‹</button>

		<img src={`/gallery/${images[currentIndex]}`} />

		<button class="nav right" on:click={next}>›</button>
	</div>
{/if}

<style>
.page-hero{
	background:linear-gradient(to right,#1b1b1b,#3b3b3b);
	color:white;
	padding:90px 12px;
	text-align:center;
}

.gallery{
	padding:60px 12px;
	display:grid;
	grid-template-columns:repeat(auto-fill,minmax(220px,1fr));
	gap:18px;
}

.gallery img{
	width:100%;
	height:200px;
	object-fit:cover;
	border-radius:12px;
	cursor:pointer;
}

.lightbox{
	position:fixed;
	inset:0;
	background:rgba(0,0,0,.9);
	display:flex;
	align-items:center;
	justify-content:center;
	z-index:9999;
}

.lightbox img{
	max-width:90%;
	max-height:90%;
}

.close{
	position:absolute;
	top:20px;
	right:30px;
	font-size:32px;
	color:white;
	background:none;
	border:none;
	cursor:pointer;
}

.nav{
	position:absolute;
	top:50%;
	transform:translateY(-50%);
	font-size:50px;
	color:white;
	background:none;
	border:none;
	cursor:pointer;
}

.nav.left{ left:20px; }
.nav.right{ right:20px; }
</style>
