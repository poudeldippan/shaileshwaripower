<script>
	// No JS logic needed — clean Svelte page
</script>


<section class="hero">
	<h1>Project Overview</h1>
</section>



<section class="wrap">

	<p>
		The Mathilo Gaddigad Hydropower Project is a run-of-the-river (ROR) type
		hydropower project, located in Purbichauki Gaunpalika, Doti District
		of Province No. 7, Nepal. Here is a brief information on the project.
	</p>


	<!-- ================= OVERVIEW ================= -->
	<div class="title">
		<hr><span>Overview</span><hr>
	</div>

	<ul>
		<li><strong>Type:</strong> Run of the River (ROR) hydropower project</li>
		<li><strong>Location:</strong> Purbichauki Rural Municipality, Doti District, Province No. 7, Nepal</li>
		<li><strong>Installed Capacity:</strong> 1,550 kW</li>
		<li><strong>Annual Energy Generation:</strong> 8.42 GWh</li>
	</ul>

	<img class="map" src="/project/map1.jpg" alt="Project Location Map">



	<!-- ================= GEOGRAPHIC ================= -->
	<div class="title">
		<hr><span>Geographic Information</span><hr>
	</div>

	<ul>
		<li><strong>Coordinates:</strong> </li>
		<li><strong>Weir Site:</strong> 29° 16’ 41” N, 81° 03’ 25” E</li>
		<li><strong>Powerhouse Site:</strong> 29° 17’ 30” N, 81° 06’ 30”</li>
		<li><strong>Elevation:</strong> 926.95 m (Powerhouse)</li>
		<li><strong>Nearby Locations:</strong> 2.5 km upstream from Sanjighat,
			45 km northeast of Dipayal,
			30 km from Silgadhi
		</li>
	</ul>


	<table>
		<thead>
			<tr>
				<th>S.N.</th>
				<th>Distance From</th>
				<th>To</th>
				<th>Distance (Km)</th>
				<th>Route</th>
			</tr>
		</thead>

		<tbody>
			<tr>
				<td>1</td>
				<td>Shankhamul, Kathmandu</td>
				<td>Attariya, Kailali</td>
				<td>648.0</td>
				<td>Prithivi / Mahendra Highway</td>
			</tr>

			<tr>
				<td>2</td>
				<td>Attariya</td>
				<td>Dipayal Silgadhi</td>
				<td>202.0</td>
				<td>Mahakali / Mid-Hill Highway</td>
			</tr>

			<tr>
				<td>3</td>
				<td>Dipayal Silgadhi</td>
				<td>Sanjighat</td>
				<td>25.0</td>
				<td>Mid-Hill Highway</td>
			</tr>

			<tr>
				<td>4</td>
				<td>Sanjighat</td>
				<td>Powerhouse</td>
				<td>0.5</td>
				<td>Mid-Hill Highway</td>
			</tr>

			<tr>
				<td>5</td>
				<td>Powerhouse</td>
				<td>Intake</td>
				<td>2.0</td>
				<td>Earthen Road</td>
			</tr>
		</tbody>

		<tfoot>
			<tr>
				<th colspan="3">Total Road Length From KTM to Intake</th>
				<th>877.5</th>
				<th></th>
			</tr>
		</tfoot>
	</table>


	<img class="map" src="/project/map2.jpg" alt="Project Area Map">



	<!-- ================= HYDROLOGICAL ================= -->
	<div class="title">
		<hr><span>Hydrological Features</span><hr>
	</div>

	<ul>
		<li><strong>River:</strong> Gaddigad, a tributary of the Seti River, flowing into the Karnali</li>
		<li><strong>Design Discharge:</strong> 2.01 m³/s (40% dependable flow)</li>
		<li><strong>Gross Head:</strong> 102.5 m over alignment stretch of approx 2.0 km</li>
	</ul>



	<!-- ================= INFRASTRUCTURE ================= -->
	<div class="title">
		<hr><span>Infrastructure Details</span><hr>
	</div>

	<ul>
		<li><strong>Weir Location:</strong> Right bank of Gaddigad, 200 m upstream of suspension bridge</li>
		<li><strong>Powerhouse Location:</strong> Left bank near Sanjighat Bazar</li>
		<li><strong>Pipeline:</strong>
			<ul>
				<li>Low pressure pipe through forest and cultivated land</li>
				<li>High-pressure penstock beyond surge pipe</li>
				<li>Mostly buried with crossings at valleys & rivers</li>
			</ul>
		</li>
		<li><strong>Tailrace Canal:</strong> Approx. 16 m discharge back into Gaddigad</li>
	</ul>

</section>





<style>

/* HERO HEADER */
.hero{
	background:#2c2c2c;
	padding:90px 0;
	text-align:center;
	color:white;
}

.wrap{
	max-width:1000px;
	margin:70px auto;
	padding:0 15px;
}

.title{
	display:flex;
	align-items:center;
	gap:12px;
	margin:40px 0 15px;
}

.title span{
	color:#083D7D;
	font-weight:600;
}

.title hr{
	flex:1;
}

/* MAP IMAGES */
.map{
	width:100%;
	border-radius:10px;
	margin:20px 0;
	box-shadow:0 10px 30px rgba(0,0,0,.15);
}

/* TABLE */
table{
	width:100%;
	border-collapse:collapse;
	margin:20px 0;
	background:white;
}

th,td{
	border:1px solid #ddd;
	padding:10px;
	text-align:left;
}

thead{
	background:#eef4ff;
}

tfoot{
	background:#f5f5f5;
	font-weight:600;
}

/* LISTS */
ul li{
	margin-bottom:6px;
}

</style>
