<script>
	// ✅ Auto-import all files from static/downloads at BUILD TIME
	const downloadFiles = Object.entries(
		import.meta.glob("/static/downloads/*", {
			eager: true,
			as: "url"
		})
	).map(([path]) => {
		// path example: "/static/downloads/annual-report-79-80.pdf"
		const filename = path.split("/").pop();
		return filename;
	});

	const files = downloadFiles.sort(); // optional: alphabetical sort

	const getIcon = (name) => {
		const lower = name.toLowerCase();

		if (lower.endsWith(".pdf")) return "📄";
		if (lower.endsWith(".doc") || lower.endsWith(".docx")) return "📝";
		if (lower.endsWith(".xls") || lower.endsWith(".xlsx")) return "📊";
		if (lower.endsWith(".zip")) return "🗜️";
		if (lower.endsWith(".png") || lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return "🖼️";
		return "📁";
	};

	const beautifyName = (file) => {
		// remove extension
		const name = file.replace(/\.[^/.]+$/, "");
		// replace - with space
		return name.replace(/-/g, " ");
	};
</script>

<!-- ================= BANNER ================= -->
<section class="banner">
	<h1>Downloads</h1>
	<p>Annual reports and downloadable documents</p>
</section>

<!-- ================= DOWNLOAD LIST ================= -->
<section class="container downloads">
	{#if files.length === 0}
		<p class="empty">No files available for download.</p>
	{:else}
		<ul>
			{#each files as file}
				<li>
					<div class="left">
						<span class="icon">{getIcon(file)}</span>
						<div class="text">
							<strong>{beautifyName(file)}</strong>
							<small>{file}</small>
						</div>
					</div>

					<a class="btn" href={`/downloads/${file}`} download>
						Download
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</section>

<style>
/* ================= BANNER ================= */
.banner{
	background:linear-gradient(rgba(0,0,0,.60), rgba(0,0,0,.60)),
		url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600");
	background-size:cover;
	background-position:center;
	color:white;
	text-align:center;
	padding:90px 20px;
}

.banner h1{
	font-size:42px;
	margin-bottom:10px;
}

.banner p{
	opacity:.9;
	font-size:16px;
	margin:0;
}

/* ================= CONTAINER ================= */
.container{
	max-width:1150px;
	margin:70px auto;
	padding:0 15px;
}

.empty{
	text-align:center;
	font-size:16px;
	color:#444;
}

/* ================= LIST ================= */
.downloads ul{
	list-style:none;
	padding:0;
	margin-top:30px;
}

.downloads li{
	display:flex;
	justify-content:space-between;
	align-items:center;
	gap:18px;
	background:#f5f7fb;
	padding:16px 20px;
	margin-bottom:14px;
	border-radius:12px;
	box-shadow:0 8px 18px rgba(0,0,0,.05);
}

/* left side layout */
.left{
	display:flex;
	align-items:center;
	gap:14px;
	min-width:0;
}

.icon{
	font-size:26px;
}

.text{
	display:flex;
	flex-direction:column;
	min-width:0;
}

.text strong{
	font-size:16px;
	color:#0a2c5f;
}

.text small{
	font-size:12px;
	color:#666;
	white-space:nowrap;
	overflow:hidden;
	text-overflow:ellipsis;
	max-width:420px;
}

/* button */
.btn{
	background:#083D7D;
	color:white;
	padding:9px 18px;
	border-radius:20px;
	text-decoration:none;
	font-size:14px;
	font-weight:600;
	white-space:nowrap;
	transition:.2s;
}

.btn:hover{
	background:#062c5e;
}

/* responsive */
@media(max-width:700px){
	.downloads li{
		flex-direction:column;
		align-items:flex-start;
	}

	.btn{
		width:100%;
		text-align:center;
	}
}
</style>
