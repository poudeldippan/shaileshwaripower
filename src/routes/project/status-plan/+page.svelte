<script>
	// overall progress
	const totalProgress = 100;

	const works = [
		{ name: "Access Road", percent: 100 },
		{ name: "Camp", percent: 100 },
		{ name: "Construction Power", percent: 100 },
		{ name: "Headworks (Diversion, Intake, Settling Basin etc)", percent: 100 },
		{ name: "Hydromechanical Works", percent: 100 },
		{ name: "Water Convenience System", percent: 100 },
		{ name: "Electro Mechanical Works", percent: 100 },
		{ name: "Powerhouse (Civil Only)", percent: 100 },
		{ name: "Switchyard and Substation", percent: 100 }
	];
</script>

<!-- TOP BANNER -->
<section class="page-hero">
	<h1>Present Status and Plans</h1>
</section>

<!-- CONTENT -->
<section class="container status-section">

	<!-- CIRCULAR PROGRESS -->
	<div class="circle-wrapper">
		<div
			class="progress-circle"
			style="background: conic-gradient(#083D7D {totalProgress}%, #e6e6e6 0);"
		>
			<div class="circle-inner">
				<strong>Total Work<br />Completed</strong>
				<span>{totalProgress}%</span>
			</div>
		</div>
	</div>

	<!-- PROGRESS LIST -->
	<div class="progress-list">
		{#each works as work}
			<div class="progress-item">
				<div class="label">
					<span>{work.name}</span>
					<span>{work.percent}%</span>
				</div>

				<div class="bar">
					<div
						class="fill"
						style="width:{work.percent}%;"
					></div>
				</div>
			</div>
		{/each}
	</div>

</section>

<style>
/* HERO */
.page-hero{
	background:linear-gradient(to right,#1b1b1b,#3b3b3b);
	color:white;
	padding:90px 12px;
	text-align:center;
}

.page-hero h1{
	font-size:42px;
	font-weight:700;
	text-transform:capitalize;
}

/* SECTION */
.status-section{
	padding:70px 12px 40px;
}

/* CIRCLE */
.circle-wrapper{
	display:flex;
	justify-content:center;
	margin-bottom:60px;
}

.progress-circle{
	width:190px;
	height:190px;
	border-radius:50%;
	display:flex;
	align-items:center;
	justify-content:center;
}

.circle-inner{
	background:white;
	width:150px;
	height:150px;
	border-radius:50%;
	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content:center;
	text-align:center;
	box-shadow:0 0 10px rgba(0,0,0,.08);
}

.circle-inner strong{
	font-size:14px;
	color:#333;
}

.circle-inner span{
	font-size:28px;
	font-weight:700;
	color:#083D7D;
	margin-top:6px;
}

/* PROGRESS LIST */
.progress-list{
	max-width:850px;
	margin:auto;
	display:flex;
	flex-direction:column;
	gap:18px;
}

.progress-item{
	width:100%;
}

.label{
	display:flex;
	justify-content:space-between;
	font-size:14px;
	font-weight:600;
	margin-bottom:6px;
	color:#083D7D;
}

/* BAR */
.bar{
	background:#eee;
	border-radius:10px;
	overflow:hidden;
	height:22px;
}

.fill{
	height:100%;
	background:#0A58CA;
	border-radius:10px;
	transition:width .6s ease;
}

/* RESPONSIVE */
@media(max-width:600px){
	.page-hero h1{
		font-size:30px;
	}
}
</style>
