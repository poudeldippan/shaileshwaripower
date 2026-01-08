<script>
	import { page } from "$app/stores";

	const menu = [
		{ name: "Home", link: "/" },

		{
			name: "About",
			children: [
				{ name: "About Us", link: "/about/about-us" },
				{ name: "Vision & Mission", link: "/about/vision-mission" },
				{ name: "Our Team", link: "/about/team" }
			]
		},

		{
			name: "Project",
			children: [
				{ name: "Overview", link: "/project/overview" },
				{ name: "Salient Features", link: "/project/salient-features" },
				{ name: "Present Status & Plans", link: "/project/status-plan" }
			]
		},

		{ name: "Gallery", link: "/gallery" },
		{ name: "Downloads", link: "/downloads" }
	];
</script>


<header class="topbar">
	<div class="container bar">
		<span>📍 KMC-31, Shankhamul</span>
		<span>📞 977 | 59125449</span>
		<span>📧 info@shaileshwaripower.com</span>
	</div>
</header>

<nav class="navbar">
	<div class="container nav">
		<div class="logo">Shaileshwari Power Nepal Ltd.</div>

		<ul class="menu">
			{#each menu as item}
				{#if !item.children}
					<li class:selected={$page.url.pathname === item.link}>
						<a href={item.link}>{item.name}</a>
					</li>
				{:else}
					<li class="dropdown">
						<span class="trigger">
							{item.name}
							<span class="arrow">▾</span>
						</span>

						<ul class="dropdown-menu">
							{#each item.children as sub}
								<li class:selected={$page.url.pathname === sub.link}>
									<a href={sub.link}>{sub.name}</a>
								</li>
							{/each}
						</ul>
					</li>
				{/if}
			{/each}
		</ul>

		<a href="/contact">
	<button class="contact">📞 Contact Us</button>
</a>

	</div>
</nav>

<slot />

<footer class="footer">
	<div class="container foot">
		<div>
			<strong>Shaileshwari Power Nepal Ltd</strong>
			<p>
				Established in 2068 B.S., backed by leading persons
				in construction, finance and the hydropower sector.
			</p>
		</div>

		<div>
			<strong>Quick Links</strong>
			<p><a href="/">Home</a></p>
			<p><a href="/About/about-us">About Us</a></p>
			<p><a href="/Project/overview">Project</a></p>
			<p><a href="/Gallery">Gallery</a></p>
			<p><a href="/Downloads">Downloads</a></p>
			<p><a href="/Contact">Contact</a></p>
		</div>

		<div>
			<strong>Contact</strong>
			<p>📍 KMC-31, Shankhamul</p>
			<p>📞 977 | 59125449</p>
			<p>📧 info@shaileshwaripower.com</p>
		</div>
	</div>

	<p class="copy">
		© {new Date().getFullYear()} Shaileshwari Power Nepal Ltd — All Rights Reserved
	</p>
</footer>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

:global(html, body){
	font-family:"Poppins",sans-serif;
	margin:0;
}

/* LAYOUT */
.container{
	max-width:1150px;
	margin:auto;
	padding:12px;
}

/* TOP BAR */
.topbar{
	background:#083D7D;
	color:white;
	font-size:13px;
}
.bar{ display:flex; gap:20px; flex-wrap:wrap }

/* NAVBAR */
.navbar{
	background:white;
	border-bottom:1px solid #e6e6e6;
	position:sticky;
	top:0;
	z-index:50;
}

.nav{
	display:flex;
	align-items:center;
	justify-content:space-between;
}

.logo{ font-weight:700 }

/* MENU */
.menu{
	display:flex;
	gap:22px;
	list-style:none;
	margin:0;
	padding:0;
}

.menu li{ position:relative }

/* LINKS */
.menu a,
.trigger{
	color:#222;
	font-weight:500;
	text-decoration:none;
	cursor:pointer;
	transition:.2s;
}

/* ACTIVE */
.selected > a,
.selected > span,
.selected > .trigger{
	font-weight:700;
	color:#083D7D;
	border-bottom:2px solid #083D7D;
	padding-bottom:3px;
}

/* HOVER */
.menu li:hover > a,
.menu li:hover > .trigger{
	color:#083D7D;
	transform:translateY(-1px);
}

/* Dropdown container */
.dropdown{
	position:relative;
}

/* Dropdown panel */
.dropdown-menu{
	position:absolute;
	top:100%;          /* <-- DIRECTLY under parent */
	left:0;
	background:white;
	border-radius:12px;
	box-shadow:0 12px 26px rgba(0,0,0,.15);
	padding:8px 0;
	margin:0;
	list-style:none;
	min-width:230px;
	display:none;
	z-index:100;
}

/* KEEP MENU OPEN */
.dropdown:hover > .dropdown-menu{
	display:block;
}

/* Trigger style */
.trigger{
	cursor:pointer;
	display:flex;
	align-items:center;
	gap:5px;
	color:#222;
	font-weight:500;
	text-decoration:none;
}

/* Dropdown items */
.dropdown-menu li{
	padding:10px 16px;
	white-space:nowrap;
	transition:.15s;
}

.dropdown-menu li:hover{
	background:#eef4ff;
	padding-left:22px;
}

/* Remove bullet */
.dropdown-menu li::marker{
	content:none;
}

/* Arrow */
.arrow{
	font-size:11px;
}

/* Remove any gaps (IMPORTANT) */
.dropdown,
.trigger,
.dropdown-menu{
	line-height:1;
}


/* CONTACT BUTTON */
.contact{
	background:#083D7D;
	color:white;
	border:2px solid #083D7D;
	padding:9px 18px;
	border-radius:22px;
	cursor:pointer;
	font-weight:600;
	transition:.2s;
}

.contact:hover{
	background:white;
	color:#083D7D;
}

/* FOOTER */
.footer{
	background:#0A2C5F;
	color:white;
	margin-top:80px;
	padding-top:40px;
}

.footer a{ color:white }

.footer a:hover{ text-decoration:underline }

.foot{
	display:grid;
	grid-template-columns:1fr 1fr 1fr;
	gap:40px;
}

.copy{
	text-align:center;
	background:#06224A;
	padding:18px 0 10px;
	font-size:13px;
	margin-top:35px;
}
/* Make all top-level menu items perfectly centered */
.menu > li{
    display:flex;
    align-items:center;
}

/* Make the trigger behave like normal text link height */
.trigger{
    display:flex;
    align-items:center;
    line-height:1.2;
}

/* Remove default link alignment issues */
.menu a{
    display:inline-flex;
    align-items:center;
}

</style>
