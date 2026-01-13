<script>
	let slide = 0;

	const slides = [
		{
			title: "Generating 8.42 GWh Energy",
			text: "with 1.55 MW Hydropower Project",
			img: "/gallery/1.jpeg",
			link: "/project/overview"
		},
		{
			title: "Clean & Sustainable Energy",
			text: "Supporting Nepal’s Growing Power Demand",
			img: "/gallery/2.jpeg",
			link: "/about/about-us"
		},
		{
			title: "Powering Local Development",
			text: "Responsible Private Investment in Hydropower",
			img: "gallery/3.jpeg",
			link: "/about/vision-mission"
		}
	];

	function slideprev(){ slide = (slide+2)%3 }
	function slidenext(){ slide = (slide+1)%3 }


	/* ================= GALLERY ================= */
    let images = [
		"gallery/1.jpeg",
		"gallery/2.jpeg",
		"gallery/3.jpeg",
		"gallery/4.jpeg",
		"gallery/5.jpeg ",
		"gallery/6.jpeg",
		"gallery/8.jpeg",
		"gallery/9.jpeg"
	];

	let show = false;
	let current = 0;

	function open(i){ current=i; show=true }
	function gallerynext(){ current=(current+1)%images.length }
	function galleryprev(){ current=(current+images.length-1)%images.length }
</script>


<!-- ================= HERO SLIDER ================= -->
<section class="hero" style="background-image:url({slides[slide].img})">
	<div class="overlay">

		<button class="arrow" on:click={slideprev}>❮</button>

		<div class="center">
			<h1>{slides[slide].title}</h1>
			<p>{slides[slide].text}</p>

			<a class="btn blue" href={slides[slide].link}>Learn More</a>

		</div>

		<button class="arrow" on:click={slidenext}>❯</button>

	</div>
</section>



<!-- ================= WHO ARE WE ================= -->
<section class="wrap">
	<h2>Who Are We?</h2>

	<div class="row">
		<img src="gallery/4.jpeg">

		<div>
			<p>
				Shaileshwari Power Nepal Ltd. is established to develop hydropower 
				projects managed by a diversified team of experienced professionals 
				and respected business leaders from sectors such as Management, 
				Engineering, Economics, Education and Public Affairs.
				<br><br>
				The company is committed to developing clean energy to support 
				national electricity demand while ensuring responsible local 
				involvement and sustainable development.
			</p>

			<div class="right">
				<button class="btn red" href="/about/about-us">Learn More</button>
			</div>
		</div>
	</div>
</section>



<!-- ================= PROJECT ================= -->
<section class="wrap">
	<h2>About Upper Gaddigad Hydropower Project</h2>

	<div class="row">
		<div>
			<p>
				The Mathilo Gaddigad is a run-of-river (ROR) hydropower project located 
				in Purbichauki Gaunpalika, Doti District of Province No.7, Nepal. 
				The project utilizes dependable river flow to produce clean renewable 
				electricity contributing to national power security.
				<br><br>
				The Gaddigad has 40% dependable flow and a design discharge of 
				2.01 m³/s.
			</p>

			<a class="btn red" href="/project/salient-features">Learn More</a>

		</div>

		<img src="gallery/5.jpeg">
	</div>
</section>



<!-- ================= FACTS ================= -->
<section class="facts">

	<div class="fact">
		<svg width="62" viewBox="0 0 24 24" fill="white">
			<path d="M3 13l8-10v7h7l-8 10v-7z"/>
		</svg>
		<p>Produces 8.42 GWh Energy Annually</p>
	</div>

	<div class="fact">
		<svg width="62" viewBox="0 0 24 24" fill="white">
			<circle cx="12" cy="7" r="3"/>
			<circle cx="5" cy="11" r="3"/>
			<circle cx="19" cy="11" r="3"/>
		</svg>
		<p>Limited Shareholders</p>
	</div>

	<div class="fact">
		<svg width="62" viewBox="0 0 24 24" fill="white">
			<rect x="5" y="5" width="14" height="14"/>
		</svg>
		<p>Experienced Directors</p>
	</div>

	<div class="fact">
		<svg width="62" viewBox="0 0 24 24" fill="white">
			<path d="M3 9l9-6 9 6v10H3z"/>
		</svg>
		<p>Local Involvement</p>
	</div>

</section>



<!-- ================= CORE VALUES ================= -->
<section class="wrap">
    <h2>Our Core Values</h2>

    <div class="values">

        <div class="value"
            style="background-image:url('gallery/8.jpeg')">
            Identification of Potential Location to Develop Hydropower
        </div>

        <div class="value"
            style="background-image:url('gallery/6.jpeg')">
            Develop Hydropower Contributing Independence of Power
        </div>

        <div class="value"
            style="background-image:url('gallery/9.jpeg')">
            Deep Involvement of Private Entrepreneurship
        </div>

    </div>
</section>



<!-- ================= CHAIRMAN ================= -->
<section class="chair">

    <img class="chair-img" src="team/Picture10.png">

    <div class="glass">
        <h3>MR. Lal Bahadur Bam</h3>
        <p><em>Chairman, Shaileshwari Power Nepal Ltd</em></p>

        <p>
            Mr. Bam is the key person to conceive this project and has played 
            a vital leadership role. He has vast experience in infrastructure 
            development, electrification, and hydropower projects.
        </p>
    </div>

</section>



<!-- ================= GALLERY ================= -->
<section class="wrap">
    <h2>Gallery</h2>

   <div class="gallery">
    {#each images as img, i}
        <div class="thumb" on:click={() => open(i)}>
            <img src={img} alt={`Gallery image ${i + 1}`} />
        </div>
    {/each}
</div>

</section>


{#if show}
<div class="lightbox">

    <button class="close" on:click={()=>show=false}>×</button>

    <button class="nav" on:click={galleryprev}>⟨</button>

    <img src={images[current]}>

    <button class="nav" on:click={gallerynext}>⟩</button>
</div>
{/if}



<!-- ================= CONTACT ================= -->
<section class="wrap">
	<h2>Contact Us</h2>

	<div class="contact">

		<div>
			<p>📍 KMC-31, Shankhamul</p>
			<p>📞 977 | 59125449</p>
			<p>📧 info@shaileshwaripower.com</p>

			<iframe width="100%" height="260"
			src="https://maps.google.com/maps?q=shankhamul%20kathmandu&t=&z=14&ie=UTF8&iwloc=&output=embed"></iframe>
		</div>

		<form>
			<input placeholder="Full Name">
			<input placeholder="Email">
			<textarea placeholder="Message"></textarea>

			<div class="right">
				<button class="btn blue">Send Message</button>
			</div>
		</form>

	</div>
</section>



<style>

/* GLOBAL */
.wrap{
    max-width:1050px;
    margin:80px auto;
    padding:0 15px;
}

.row{
	display:flex;
	gap:30px;
	align-items:center;
}

.row img{
	width:45%;
	border-radius:12px;
}

.right{text-align:right}


/* HERO */
.hero{
    height:430px;
    background-size:cover;
    background-position:center;
}

.overlay{
	background:rgba(0,0,0,.55);
	height:100%;
	display:flex;
	align-items:center;
	justify-content:space-between;
	padding:0 25px;
}

.center{
	text-align:center;
	color:white;
	width:100%;
}


/* BUTTONS */
.btn{
	padding:10px 28px;
	border-radius:20px;
	cursor:pointer;
	border:2px solid transparent;
	font-weight:500;
	transition:.2s;
}

.blue{background:#083D7D;color:white;border-color:#083D7D}
.blue:hover{background:white;color:#083D7D}

.red{background:#B30000;color:white;border-color:#B30000}
.red:hover{background:white;color:#B30000}


/* SLIDER */
.arrow{
	background:rgba(255,255,255,.25);
	border:none;
	color:white;
	font-size:28px;
	padding:10px 16px;
	cursor:pointer;
	border-radius:50%;
}

.arrow:hover{
	background:white;
	color:#083D7D;
}


/* FACTS */
.facts{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:20px;
    max-width:1100px;
    margin:60px auto;
}

.fact{
    background:#063b78;
    color:white;
    padding:28px 18px;
    border-radius:18px;
    text-align:center;
}

.fact p{
	font-size:17px;
	font-weight:500;
	margin-top:8px;
}


/* ================= FIXED CORE VALUES ================= */
.values{
    display:flex;
    gap:22px;
}

.value{
    position:relative;
    min-height:160px;
    padding:22px;
    border-radius:16px;
    background-size:cover;
    background-position:center;

    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;

    color:#fff;
    font-weight:600;

    overflow:hidden;

    z-index:0; /* BASE LAYER */
}

/* DARK OVERLAY — BEHIND TEXT */
.value::before{
    content:"";
    position:absolute;
    inset:0;
    background:rgba(0,0,0,.7);

    z-index:-1; /* <<< THIS IS THE KEY */
}

/* FORCE TEXT ABOVE */
.value *{
    position:relative;
    z-index:5;
}




/* CHAIRMAN */
.chair{
    display:flex;
    gap:35px;
    align-items:center;
    background:#111;
    color:white;
    padding:70px 30px;
}

.chair-img{
    width:300px;
    height:300x;
    object-fit:cover;
    border-radius:50%;
}

.glass{
    padding:25px;
    border-radius:16px;
    background:rgba(255,255,255,.08);
    backdrop-filter:blur(8px);
}


/* ================= FIXED GALLERY ================= */
/* ================= FIXED GALLERY GRID ================= */
.gallery{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:12px;
}

/* fixed box */
.thumb{
    position:relative;
    width:100%;
    aspect-ratio: 4 / 3;   /* 🔥 uniform box */
    overflow:hidden;
    border-radius:10px;
    cursor:pointer;
    background:#eee;
}

/* image fills box */
.thumb img{
    position:absolute;
    inset:0;
    width:100%;
    height:100%;
    object-fit:cover;     /* 🔥 this is the key */
    transition:transform .3s ease;
}

/* hover effect */
.thumb:hover img{
    transform:scale(1.05);
}


.gallery img{
    width:100%;
    border-radius:10px;
    cursor:pointer;
}

.lightbox{
    position:fixed;
    inset:0;
    z-index:9999;
    background:rgba(0,0,0,.92);
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:40px;
}

/* center + prevent clipping */
.lightbox img{
    max-height:90vh;
    max-width:80vw;
    margin:auto;
    border-radius:12px;
}

/* arrows */
.nav{
    background:none;
    color:white;
    border:none;
    font-size:40px;
    cursor:pointer;
}

/* close button */
.close{
	position:absolute;
	top:15px;
	right:25px;
	font-size:46px;
	background:none;
	border:none;
	color:white;
	cursor:pointer;
}


/* CONTACT */
.contact{
	display:grid;
	grid-template-columns:1fr 1fr;
	gap:30px;
}

input,textarea{
	width:100%;
	padding:16px;
	border-radius:12px;
	border:1px solid #bbb;
	margin-bottom:12px;
}

textarea{min-height:150px}

</style>
