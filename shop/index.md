---
layout: headed
title: Toko
---

<div class="container">
    <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-12 col-sm-10 px-sm-5">
            <p>Sementara kami tidak menyediakan baik pelayanan maupun tampilan produk melalui situs. Silahkan kunjungi toko kami pada platform berikut atau lihat halaman <a href="{% if jekyll.environment == 'production' %}/nazhifa{% endif %}/shop/order.html">pemesanan</a>.</p>
        </div>
    </div>
    <div class="row">
        <ul class="list-inline mx-auto">
            <li class="list-inline-item">
                <a class="nav-link active" href="https://www.bukalapak.com/u/fachri_san"><img class="market-icon" src="{% if jekyll.environment == 'production' %}/nazhifa{% endif %}/assets/images/bukalapak.png"/></a>
            </li>
            <li class="list-inline-item">
                <a class="nav-link" href="https://www.tokopedia.com/nazhifaonline"><img class="market-icon" src="{% if jekyll.environment == 'production' %}/nazhifa{% endif %}/assets/images/tokopedia.png"/></a>
            </li>
            <li class="list-inline-item">
                <a class="nav-link" href="https://www.instagram.com/toko.nazhifa/" target="_blank"><img class="market-icon" src="{% if jekyll.environment == 'production' %}/nazhifa{% endif %}/assets/images/instagram.png"/></a>
            </li>
        </ul>
    </div>
</div>

<div id="w3Product">
    <div class="container">
        <div class="row">
            <div class="col-sm-1"></div>
            <div id="Product" class="col-12 col-sm-10 px-sm-5">
				<!-- call the script -->
				<script src="{% if jekyll.environment == 'production' %}/nazhifa{% endif %}/assets/js/productShow.js">
				</script>
				<!-- call the json -->
				<script>
					var jsonPath = "{% if jekyll.environment == 'production' %}/nazhifa{% endif %}/assets/js/productBase.json";
					init(jsonPath);
				</script>
				<div id="buku">
				</div>
            </div>
		</div>
	</div>
	<div id="myModal" class="modal">
        <span class="close cursor" onclick="closeModal()">&times;</span>
		<div id="bukuModal"></div>
    </div>
	<script src="{% if jekyll.environment == 'production' %}/nazhifa{% endif %}/assets/js/w3Product.js"></script>
</div>


