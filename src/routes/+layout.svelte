<script>
	import { page } from "$app/stores";
	import "../app.css";

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

	// ✅ Mobile hamburger open/close
	let mobileOpen = false;

	// ✅ Mobile dropdown open state
	let openDropdown = null;

	function toggleMobile() {
		mobileOpen = !mobileOpen;
		if (!mobileOpen) openDropdown = null;
	}

	function closeMobile() {
		mobileOpen = false;
		openDropdown = null;
	}

	function toggleDropdown(name) {
		openDropdown = openDropdown === name ? null : name;
	}
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

		<!-- ✅ Hamburger only for mobile -->
		<button
			class="hamburger"
			aria-label="Toggle menu"
			on:click={toggleMobile}
		>
			{mobileOpen ? "✕" : "☰"}
		</button>

		<ul class:menu-open={mobileOpen} class="menu">
			{#each menu as item}
				{#if !item.children}
					<li class:selected={$page.url.pathname === item.link}>
						<a href={item.link} on:click={closeMobile}>{item.name}</a>
					</li>
				{:else}
					<li class="dropdown">
						<!-- Desktop hover works, Mobile click works -->
						<button
							type="button"
							class="trigger"
							on:click={() => toggleDropdown(item.name)}
							aria-expanded={openDropdown === item.name}
						>
							{item.name}
							<span class="arrow">▾</span>
						</button>

						<ul class:open={openDropdown === item.name} class="dropdown-menu">
							{#each item.children as sub}
								<li class:selected={$page.url.pathname === sub.link}>
									<a href={sub.link} on:click={closeMobile}>{sub.name}</a>
								</li>
							{/each}
						</ul>
					</li>
				{/if}
			{/each}

			<!-- ✅ Contact button also inside menu in mobile -->
			<li class="mobile-contact">
				<a href="/contact" on:click={closeMobile}>
					<button class="contact">📞 Contact Us</button>
				</a>
			</li>
		</ul>

		<!-- ✅ desktop contact button stays outside menu -->
		<a class="desktop-contact" href="/contact">
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
				Established in 2068 B.S., backed by leading persons in construction,
				finance and the hydropower sector.
			</p>
		</div>

		<div>
			<strong>Quick Links</strong>
			<p><a href="/">Home</a></p>
			<p><a href="/about/about-us">About Us</a></p>
			<p><a href="/project/overview">Project</a></p>
			<p><a href="/gallery">Gallery</a></p>
			<p><a href="/downloads">Downloads</a></p>
			<p><a href="/contact">Contact</a></p>
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
	@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

	:global(html, body) {
		font-family: "Poppins", sans-serif;
		margin: 0;
	}

	/* LAYOUT */
	.container {
		max-width: 1150px;
		margin: auto;
		padding: 12px;
	}

	/* TOP BAR */
	.topbar {
		background: #083d7d;
		color: white;
		font-size: 13px;
	}
	.bar {
		display: flex;
		gap: 20px;
		flex-wrap: wrap;
	}

	/* NAVBAR */
	.navbar {
		background: white;
		border-bottom: 1px solid #e6e6e6;
		position: sticky;
		top: 0;
		z-index: 50;
	}

	.nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 15px;
	}

	.logo {
		font-weight: 700;
		white-space: nowrap;
	}

	/* ✅ Hamburger button */
	.hamburger {
		display: none;
		border: none;
		background: transparent;
		font-size: 28px;
		cursor: pointer;
	}

	/* MENU */
	.menu {
		display: flex;
		gap: 22px;
		list-style: none;
		margin: 0;
		padding: 0;
		align-items: center;
	}

	.menu li {
		position: relative;

		align-items: center;
	}

	/* LINKS */
	.menu a {
		color: #222;
		font-weight: 500;
		text-decoration: none;
		transition: 0.2s;
		display: inline-flex;
		align-items: center;
	}

	/* ACTIVE */
	.selected > a,
	.selected > span,
	.selected > .trigger {
		font-weight: 700;
		color: #083d7d;
		border-bottom: 2px solid #083d7d;
		padding-bottom: 3px;
	}

	/* HOVER */
	.menu li:hover > a {
		color: #083d7d;
		transform: translateY(-1px);
	}

	/* Dropdown */
	.dropdown {
		position: relative;
	}

	.trigger {
		background: none;
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 5px;
		color: #222;
		font-weight: 500;
		font-size: 16px;
		padding: 0;
	}

	.arrow {
		font-size: 11px;
	}

	.dropdown-menu {
		position: absolute;
		top: 100%;
		left: 0;
		background: white;
		border-radius: 12px;
		box-shadow: 0 12px 26px rgba(0, 0, 0, 0.15);
		padding: 8px 0;
		margin: 0;
		list-style: none;
		min-width: 230px;
		display: none;
		z-index: 100;
	}

	/* Desktop dropdown by hover */
	.dropdown:hover > .dropdown-menu {
		display: block;
	}

	.dropdown-menu li {
		padding: 10px 16px;
		white-space: nowrap;
		transition: 0.15s;
	}

	.dropdown-menu li:hover {
		background: #eef4ff;
		padding-left: 22px;
	}

	/* CONTACT BUTTON */
	.contact {
		background: #083d7d;
		color: white;
		border: 2px solid #083d7d;
		padding: 9px 18px;
		border-radius: 22px;
		cursor: pointer;
		font-weight: 600;
		transition: 0.2s;
	}

	.contact:hover {
		background: white;
		color: #083d7d;
	}

	.desktop-contact {
		display: block;
	}

	.mobile-contact {
		display: none;
	}

	/* FOOTER */
	.footer {
		background: #0a2c5f;
		color: white;
		margin-top: 80px;
		padding-top: 40px;
	}

	.footer a {
		color: white;
	}
	.footer a:hover {
		text-decoration: underline;
	}

	.foot {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 40px;
	}

	.copy {
		text-align: center;
		background: #06224a;
		padding: 18px 0 10px;
		font-size: 13px;
		margin-top: 35px;
	}

	/* ✅ MOBILE NAV */
	@media (max-width: 900px) {
		.hamburger {
			display: block;
		}

		.desktop-contact {
			display: none;
		}

		.menu {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			background: white;
			border-bottom: 1px solid #e6e6e6;
			flex-direction: column;
			align-items: flex-start;
			padding: 16px;
			gap: 14px;

			display: none;
		}

		.menu.menu-open {
			display: flex;
		}

		.menu li {
			width: 100%;
		}

		.menu a,
		.trigger {
			width: 100%;
			justify-content: space-between;
			font-size: 16px;
		}

		/* ✅ disable hover dropdown on mobile, only open by click */
		.dropdown:hover > .dropdown-menu {
			display: none;
		}

		.dropdown-menu {
			position: static;
			box-shadow: none;
			border-radius: 12px;
			width: 100%;
			min-width: unset;
			padding: 8px 0;
			display: none;
		}

		.dropdown-menu.open {
			display: block;
		}

		.mobile-contact {
			display: block;
			width: 100%;
		}

		.mobile-contact button {
			width: 100%;
		}

		.foot {
			grid-template-columns: 1fr;
			gap: 25px;
		}
		/* Show only desktop contact button in desktop */
.desktop-contact {
  display: inline-block;
}

/* Hide mobile contact button in desktop */
.menu .mobile-contact {
  display: none;
}

/* ✅ Mobile view */
@media (max-width: 900px) {
  .desktop-contact {
    display: none;
  }

  .menu .mobile-contact {
    display: block;
  }
}

	}
</style>
