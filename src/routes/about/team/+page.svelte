<script>
	// =========================
	// TEAM DATA
	// =========================
	const directors = [
		{
			name: "Mr. Lal Bahadur Bam",
			role: "Chairman",
			img: "/team/Picture10.png",
			details: `
				Chairman of Shaileshwari Power Nepal Ltd.<br>
				Major Involvement: Construction Sector Proprietor of LB & AB Builders Pvt. Ltd. Experience on Construction of Roads, Bridges & Buildings, etc. Experience of Construction of 33 kV and 11 kV Transmission Line, etc. Founder of Sudur Paschimanchal Campus, Dhangadhi
			`
		},
		{
			name: "Mr. Jagadish Bahadur Pal",
			role: "Managing Director",
			img: "/team/Picture11.png",
			details: `
				Former Chairperson: Api Power Company Ltd. (10 years) Founder Chairperson: Trikal Power Company Pvt. Ltd. (Currently) Former Chairman: Sudurpaschhim Development Commission (GoN)
			`
		},
		{
			name: "Mr. Dilip Singh Budhathoki",
			role: "Director",
			img: "/team/Picture12.png",
			details: `Former Chairman of Byans Rural Municipality, Darchula Proprietor of Thiyal Traders, Darchula (business of valuable medicinal herbs; Yarsagumba, Chiraito, Silajit, etc.)`
		},
		{
			name: "Mr. Bhim Raj Kapadi",
			role: "Director",
			img: "/team/Picture14.png",
			details: `Proprietor: Lalu Hardware Pvt. Ltd., Mahendranagar, Dhangadhi, Attariya Proprietor: Lalu Traders & Suppliers, Attariya, Kailali Proprietor: Lalu Smart Energy Station, Attariya, Kailali Director: United Public Secondary School, Mahendranagar, Kanchanpur`
		},
		{
			name: "Mr. Jay Raj Joshi",
			role: "Director",
			img: "/team/Picture13.png",
			details: `Proprietor: Yamuna Suppliers (Hardware business), Dhangadhi, Kailali Proprietor: Yamuna Nirman Sewa Dhangadhi, Kailali Board of Director: Navajeevan Cooperative Ltd., Dhangadhi, Kailali Former Chairman: Himsikhar Cooperative Founder Director: Balmiki Int’l School, Dhangadhi, Kailali Chairman: Best Center Pvt. Ltd. (a Vocational Training Centre), Dhangadhi, Kailali`
		}
	];

	const management = [
		{
			name: "Mr. Jagadish Bahadur Pal",
			role: "Managing Director",
			img: "/team/Picture11.png",
			details: `Former Chairperson: Api Power Company Ltd. (10 years) Founder Chairperson: Trikal Power Company Pvt. Ltd. (Currently) Former Chairman: Sudurpaschhim Development Commission (GoN)`
		},
		{
			name: "Mr. Lal Bahadur Dhami",
			role: "Finance & Admin / Company Secretary",
			img: "/team/Picture15.png",
			details: `More than 18 years working experience on Hydropower Companies/Projects`
		},
		{
			name: "CA. Narayan Poudel",
			role: "Financial Consultant",
			img: "/team/Picture16.jpg",
			details: `Involved in 100+ Hydro project in Nepal Founder of Finman Services`
		},
		{
			name: "Mr. Bhupal Adhikari",
			role: "Project Manager",
			img: "/team/Picture17.jpg",
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

		<div class="details">
	{@html selected.details}
</div>

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
