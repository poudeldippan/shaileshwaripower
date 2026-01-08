<script>
	// =========================
	// TEAM DATA
	// =========================
	const directors = [
		{
			name: "Mr. Lal Bahadur Bam",
			role: "Chairman",
			img: "/people/chairman.jpg",
			details: `
				Chairman of Shaileshwari Power Nepal Ltd.<br>
				Experienced leader in hydropower and infrastructure projects.
			`
		},
		{
			name: "Mr. Jagadish Bahadur Pal",
			role: "Managing Director",
			img: "/people/jagadish.jpg",
			details: `
				Managing Director with extensive management and corporate expertise.
			`
		},
		{
			name: "Mr. Dilip Singh Budhathoki",
			role: "Director",
			img: "/people/dilip.jpg",
			details: `Director of the company.`
		},
		{
			name: "Mr. Bhim Raj Kapadi",
			role: "Director",
			img: "/people/bhim.jpg",
			details: `Director of the company.`
		},
		{
			name: "Mr. Jay Raj Joshi",
			role: "Director",
			img: "/people/jay.jpg",
			details: `Director of the company.`
		}
	];

	const management = [
		{
			name: "Mr. Jagadish Bahadur Pal",
			role: "Managing Director",
			img: "/people/jagadish.jpg",
			details: `Managing Director`
		},
		{
			name: "Mr. Lal Bahadur Dhami",
			role: "Finance & Admin / Company Secretary",
			img: "/people/dhami.jpg",
			details: `Responsible for finance and administration.`
		},
		{
			name: "CA. Narayan Poudel",
			role: "Financial Consultant",
			img: "/people/narayan.jpg",
			details: `Company financial consultant.`
		},
		{
			name: "Mr. Bhupal Adhikari",
			role: "Project Manager",
			img: "/people/bhupal.jpg",
			details: `Project Management Lead`
		}
	];

	let selected = null;
</script>



<section class="wrap">
	<h1>Our Team</h1>

	<hr class="line"/>

	<h3>Board Of Directors</h3>

	<div class="grid">
		{#each directors as p}
			<div class="card" on:click={() => selected = p}>
				<div class="photo">
					<img src={p.img} alt={p.name}>
				</div>

				<strong>{p.name}</strong>
				<small>{p.role}</small>
			</div>
		{/each}
	</div>


	<hr class="line"/>

	<h3>Management Team</h3>

	<div class="grid">
		{#each management as p}
			<div class="card" on:click={() => selected = p}>
				<div class="photo">
					<img src={p.img} alt={p.name}>
				</div>

				<strong>{p.name}</strong>
				<small>{p.role}</small>
			</div>
		{/each}
	</div>
</section>



<!-- =========================
     POPUP (MODAL)
========================= -->
{#if selected}
<div class="modal">
	<div class="box">

		<button class="close" on:click={() => selected = null}>×</button>

		<div class="modal-top">
			<div class="photo big">
				<img src={selected.img} alt={selected.name}>
			</div>

			<div>
				<h3>{selected.name}</h3>
				<p><em>{selected.role}</em></p>
			</div>
		</div>

		<p class="details" innerHTML={selected.details}></p>

	</div>
</div>
{/if}





<style>
.wrap{
	max-width:1050px;
	margin:80px auto;
	text-align:center;
	padding:0 15px;
}

h1{
	color:#083D7D;
}

.line{
	margin:20px auto 30px;
	width:70%;
	color:#ccc;
}

h3{
	margin-top:10px;
	color:#083D7D;
}

/* GRID */
.grid{
	display:grid;
	grid-template-columns:repeat(4,1fr);
	gap:28px;
	margin-top:25px;
}

.card{
	background:white;
	border-radius:14px;
	padding:18px;
	box-shadow:0 10px 25px rgba(0,0,0,.12);
	cursor:pointer;
	transition:.2s;
}

.card:hover{
	transform:translateY(-4px);
}

/* PHOTO */
.photo{
	width:120px;
	height:120px;
	border-radius:50%;
	overflow:hidden;
	margin: auto;
}

.photo img{
	width:100%;
	height:100%;
	object-fit:cover;
}

/* TEXT */
strong{
	display:block;
	margin-top:10px;
}

small{
	color:#555;
}


/* ===== POPUP ===== */

.modal{
	position:fixed;
	inset:0;
	background:rgba(0,0,0,.6);
	display:flex;
	align-items:center;
	justify-content:center;
	z-index:100;
}

.box{
	background:white;
	border-radius:18px;
	padding:25px;
	max-width:520px;
	width:92%;
	position:relative;
}

.close{
	position:absolute;
	top:10px;
	right:12px;
	font-size:28px;
	background:none;
	border:none;
	cursor:pointer;
}

.modal-top{
	display:flex;
	gap:20px;
	align-items:center;
}

.big{
	width:140px;
	height:140px;
}

.details{
	margin-top:15px;
	color:#333;
}


/* RESPONSIVE */

@media(max-width:900px){
	.grid{
		grid-template-columns:repeat(2,1fr);
	}
}

@media(max-width:550px){
	.grid{
		grid-template-columns:1fr;
	}
}
</style>
