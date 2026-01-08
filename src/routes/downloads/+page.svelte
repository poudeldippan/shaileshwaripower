<script>
	import { onMount } from "svelte";

	let files = [];

	onMount(async () => {
		const res = await fetch("/downloads/index.json");
		files = await res.json();
	});

	const getIcon = (name) => {
		if (name.endsWith(".pdf")) return "📄";
		if (name.endsWith(".doc") || name.endsWith(".docx")) return "📝";
		if (name.endsWith(".xls") || name.endsWith(".xlsx")) return "📊";
		if (name.endsWith(".zip")) return "🗜️";
		return "📁";
	};
</script>

<section class="banner">
	<h1>Downloads</h1>
</section>

<section class="container downloads">
	{#if files.length === 0}
		<p>No files available for download.</p>
	{:else}
		<ul>
			{#each files as file}
				<li>
					<span>{getIcon(file)} {file}</span>
					<a href={`/downloads/${file}`} download>
						Download
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</section>

<style>
.banner{
	background:#2c2c2c;
	color:white;
	text-align:center;
	padding:80px 20px;
	font-size:32px;
	font-weight:600;
}

.downloads ul{
	list-style:none;
	padding:0;
	margin-top:40px;
}

.downloads li{
	display:flex;
	justify-content:space-between;
	align-items:center;
	background:#f5f7fb;
	padding:16px 20px;
	margin-bottom:14px;
	border-radius:10px;
}

.downloads a{
	background:#083D7D;
	color:white;
	padding:8px 16px;
	border-radius:20px;
	text-decoration:none;
	font-size:14px;
}

.downloads a:hover{
	background:#062c5e;
}
</style>
