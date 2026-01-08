<script>
	let form = {
		name: "",
		email: "",
		phone: "",
		message: ""
	};

	function submitForm() {
		alert("Thank you! Your message has been submitted.");
		form = { name: "", email: "", phone: "", message: "" };
	}
</script>

<!-- ================= BANNER ================= -->
<section class="banner">
	<h1>Contact Us</h1>
	<p>We’d love to hear from you</p>
</section>

<!-- ================= CONTACT SECTION ================= -->
<section class="container contact">

	<!-- LEFT: CONTACT INFO -->
	<div class="info">
		<h2>Shaileshwari Power Nepal Ltd.</h2>

		<p><strong>Address:</strong><br>
			KMC-31, Shankhamul, Kathmandu, Nepal
		</p>

		<p><strong>Phone:</strong><br>
			977 | 59125449
		</p>

		<p><strong>Email:</strong><br>
			info@shaileshwaripower.com
		</p>

		<div class="map">
			<iframe
				src="https://maps.google.com/maps?q=shankhamul%20kathmandu&t=&z=14&ie=UTF8&iwloc=&output=embed"
				loading="lazy"
			></iframe>
		</div>
	</div>

	<!-- RIGHT: FORM -->
	<form class="form" on:submit|preventDefault={submitForm}>
		<h2>Send Us a Message</h2>

		<input
			type="text"
			placeholder="Full Name"
			bind:value={form.name}
			required
		/>

		<input
			type="email"
			placeholder="Email Address"
			bind:value={form.email}
			required
		/>

		<input
			type="text"
			placeholder="Phone Number"
			bind:value={form.phone}
		/>

		<textarea
			placeholder="Your Message"
			bind:value={form.message}
			required
		></textarea>

		<button type="submit">Send Message</button>
	</form>

</section>

<style>
/* ================= BANNER ================= */
.banner{
	background:linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)),
		url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600");
	background-size:cover;
	background-position:center;
	color:white;
	text-align:center;
	padding:90px 20px;
}

.banner h1{
	font-size:40px;
	margin-bottom:10px;
}

/* ================= LAYOUT ================= */
.container{
	max-width:1150px;
	margin:80px auto;
	padding:0 15px;
}

.contact{
	display:grid;
	grid-template-columns:1fr 1fr;
	gap:50px;
}

/* ================= INFO ================= */
.info h2{
	color:#083D7D;
	margin-bottom:20px;
}

.info p{
	margin-bottom:16px;
	line-height:1.6;
}

.map iframe{
	width:100%;
	height:260px;
	border:0;
	border-radius:12px;
}

/* ================= FORM ================= */
.form{
	background:#f5f8ff;
	padding:35px;
	border-radius:16px;
}

.form h2{
	margin-bottom:20px;
	color:#083D7D;
}

.form input,
.form textarea{
	width:100%;
	padding:14px;
	margin-bottom:14px;
	border-radius:10px;
	border:1px solid #ccc;
	font-family:inherit;
}

.form textarea{
	min-height:140px;
	resize:vertical;
}

.form button{
	width:100%;
	background:#083D7D;
	color:white;
	border:none;
	padding:14px;
	border-radius:24px;
	font-weight:600;
	cursor:pointer;
	transition:.2s;
}

.form button:hover{
	background:#062c5e;
}

/* ================= RESPONSIVE ================= */
@media(max-width:900px){
	.contact{
		grid-template-columns:1fr;
	}
}
</style>
