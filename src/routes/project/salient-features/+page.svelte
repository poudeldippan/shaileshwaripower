<script>
	let open = null;
	function toggle(i) {
		open = open === i ? null : i;
	}
</script>

<h1 class="title">Salient Features</h1>


<div class="accordion">

<!-- 1 -->
<section>
	<div class="head" on:click={() => toggle(1)}>Project Name</div>
	{#if open === 1}
	<div class="body">
		<p><strong>Mathillo Gaddigad Hydropower Project</strong></p>
	</div>
	{/if}
</section>


<!-- 2 -->
<section>
	<div class="head" on:click={() => toggle(2)}>Location</div>
	{#if open === 2}
	<div class="body">
		<p><strong>Country:</strong> Nepal</p>
		<p><strong>Province:</strong> 7 (Sudurpashchim)</p>
		<p><strong>District:</strong> Doti</p>
		<p><strong>Municipality:</strong> Purbichauki Rural Municipality</p>
	</div>
	{/if}
</section>


<!-- 3 -->
<section>
	<div class="head" on:click={() => toggle(3)}>Type of Project</div>
	{#if open === 3}
	<div class="body">
		<p>Run-of-the-River Hydropower Project</p>
	</div>
	{/if}
</section>


<!-- 4 -->
<section>
	<div class="head" on:click={() => toggle(4)}>Gross Head</div>
	{#if open === 4}
	<div class="body">
		<p>Approx. 105 m</p>
	</div>
	{/if}
</section>


<!-- 5 -->
<section>
	<div class="head" on:click={() => toggle(5)}>Hydrology at Intake</div>
	{#if open === 5}
	<div class="body">
		<table>
			<tbody>
				<tr><td>Catchment Area</td><td>51.35 km²</td></tr>
				<tr><td>Maximum Design Flood (Q100)</td><td>199 m³/s</td></tr>
				<tr><td>Probable Maximum Flood (Q1000)</td><td>370 m³/s</td></tr>
				<tr><td>Mean Monthly Flow</td><td>2.02 m³/s</td></tr>
			</tbody>
		</table>
	</div>
	{/if}
</section>


<!-- 6 -->
<section>
	<div class="head" on:click={() => toggle(6)}>Headworks</div>
	{#if open === 6}
	<div class="body">
		<table>
			<tbody>
				<tr><td>Weir Type</td><td>Free overflow gravity</td></tr>
				<tr><td>Weir Length</td><td>13 m</td></tr>
				<tr><td>Height</td><td>2 m</td></tr>
				<tr><td>Crest Level</td><td>1021 masl</td></tr>
			</tbody>
		</table>
	</div>
	{/if}
</section>


<!-- 7 -->
<section>
	<div class="head" on:click={() => toggle(7)}>Intake</div>
	{#if open === 7}
	<div class="body">
		<table>
			<tbody>
				<tr><td>Type</td><td>Side Intake</td></tr>
				<tr><td>Dimensions</td><td>3.6m × 0.9m</td></tr>
			</tbody>
		</table>
	</div>
	{/if}
</section>


<!-- 8 -->
<section>
	<div class="head" on:click={() => toggle(8)}>Approach Canal & Settling Basin</div>
	{#if open === 8}
	<div class="body">
		<table>
			<tbody>
				<tr><td>Canal Length</td><td>8 m</td></tr>
				<tr><td>Settling Basin Length</td><td>50 m</td></tr>
				<tr><td>Particle Size Removal</td><td>0.2 mm</td></tr>
			</tbody>
		</table>
	</div>
	{/if}
</section>


<!-- 9 -->
<section>
	<div class="head" on:click={() => toggle(9)}>Headrace Pipe</div>
	{#if open === 9}
	<div class="body">
		<p>Steel pipe • Length: 1550 m</p>
	</div>
	{/if}
</section>


<!-- 10 -->
<section>
	<div class="head" on:click={() => toggle(10)}>Surge Pipe</div>
	{#if open === 10}
	<div class="body">
		<p>MS Circular Pipe • Length: 172 m</p>
	</div>
	{/if}
</section>


<!-- 11 -->
<section>
	<div class="head" on:click={() => toggle(11)}>Penstock Pipe</div>
	{#if open === 11}
	<div class="body">
		<p>Steel Pipe Q235 • Length: 450 m</p>
	</div>
	{/if}
</section>


<!-- 12 -->
<section>
	<div class="head" on:click={() => toggle(12)}>Powerhouse</div>
	{#if open === 12}
	<div class="body">
		<p>Surface powerhouse with 2 units</p>
	</div>
	{/if}
</section>


<!-- 13 -->
<section>
	<div class="head" on:click={() => toggle(13)}>Tailrace</div>
	{#if open === 13}
	<div class="body">
		<p>Length: 15 m</p>
	</div>
	{/if}
</section>


<!-- 14 -->
<section>
	<div class="head" on:click={() => toggle(14)}>Turbine</div>
	{#if open === 14}
	<div class="body">
		<p>Horizontal Francis Turbine (2 units)</p>
	</div>
	{/if}
</section>


<!-- 15 -->
<section>
	<div class="head" on:click={() => toggle(15)}>Generator</div>
	{#if open === 15}
	<div class="body">
		<p>3-phase synchronous generator</p>
	</div>
	{/if}
</section>


<!-- 16 -->
<section>
	<div class="head" on:click={() => toggle(16)}>Power & Energy</div>
	{#if open === 16}
	<div class="body">
		<table>
			<tbody>
				<tr><td>Installed Capacity</td><td>1.55 MW</td></tr>
				<tr><td>Annual Energy</td><td>8.48 GWh</td></tr>
			</tbody>
		</table>
	</div>
	{/if}
</section>


<!-- 17 -->
<section>
	<div class="head" on:click={() => toggle(17)}>Transmission Line</div>
	{#if open === 17}
	<div class="body">
		<p>33 kV — 280 m to Sanagaun</p>
	</div>
	{/if}
</section>
<!-- 18 -->
<section>
	<div class="head" on:click={() => toggle(18)}>Operation status</div>
	{#if open === 18}
	<div class="body">
		<p>Started</p>
	</div>
	{/if}
</section>
</div>


<style>
.title{
	text-align:center;
	margin:40px 0;
	color:#083D7D;
}

.accordion section{
	border:1px solid #ddd;
	border-radius:6px;
	margin-bottom:8px;
	overflow:hidden;
}

.head{
	background:#f5f6ff;
	padding:14px;
	cursor:pointer;
	font-weight:600;
}

.body{
	padding:16px;
	background:#fff;
}

table{
	width:100%;
	border-collapse:collapse;
}

td{
	padding:10px;
	border-bottom:1px solid #eee;
}
</style>
