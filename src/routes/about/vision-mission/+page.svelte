<script>
    const sections = [
        {
            title: "Our Vision",
            points: [
                "Make a significant impact on Nepal’s hydropower sector development.",
                "Discover and develop new hydropower and clean energy projects.",
                "Build the skills and resources required for independent power generation."
            ]
        },
        {
            title: "Our Mission",
            points: [
                "Utilizing Nepal’s clean energy resources.",
                "Lowering reliance on costly fossil fuels like oil and gas.",
                "Supporting nation-building through energy security and export."
            ]
        },
        {
            title: "Guiding Values",
            points: [
                "Developing entrepreneurship and maximizing advantages.",
                "Promoting good governance, integrity, and accountability.",
                "Encouraging development with local participation and social responsibility."
            ]
        }
    ];
</script>


<section class="page">

    <h1>Our Vision, Mission &amp; Guiding Values</h1>

    {#each sections as sec}
        <div class="divider">
            <span>≋</span>
        </div>

        <h3>{sec.title}</h3>

        <ul>
            {#each sec.points as p}
                <li>{p}</li>
            {/each}
        </ul>
    {/each}

</section>



<style>

.page{
    max-width:950px;
    margin:80px auto;
    padding:10px 15px;
    text-align:center;
}

h1{
    color:#083D7D;
    font-size:34px;
}

h3{
    color:#083D7D;
    margin-top:25px;
}

ul{
    list-style:none;
    padding:0;
    margin-top:10px;
}

li{
    margin:8px 0;
    color:#222;
}

/* Divider */
.divider{
    margin:28px auto 10px;
    max-width:650px;
    border-top:1px solid #ccc;
    position:relative;
}

.divider span{
    position:absolute;
    top:-15px;
    left:50%;
    transform:translateX(-50%);
    background:white;
    padding:4px 10px;
    color:#083D7D;
    font-size:22px;
}

/* mobile spacing */
@media(max-width:780px){
    h1{
        font-size:26px;
    }
}

</style>
