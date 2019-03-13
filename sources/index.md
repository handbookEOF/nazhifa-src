---
layout: headed
title: Sumber - Sumber daya gratis pilihan untuk Anda
---

<div class="container">
	<script src="{% if jekyll.environment == 'production' %}/nazhifa{% endif %}/assets/js/linkShow.js">
	</script>
    <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-12 col-sm-10 px-sm-5 col-md-10 px-md-5">
			<script>
				var jsonPath = "{% if jekyll.environment == 'production' %}/nazhifa{% endif %}/assets/js/linkBase.json";
                init(jsonPath);
            </script>
            <div class="w-100"></div>
            <div class='nazhifa-table' id="islam">
            </div>
            <div class="w-100"></div>
            <br/><br/>
            <div class='nazhifa-table' id="downloadable">
            </div>    
            <div class="w-100"></div>
            <br/><br/>
            <div class='nazhifa-table' id="read">
            </div>
            <div class="w-100"></div>
            <br/><br/>
            <div class='nazhifa-table' id="academic">
            </div>
        </div>
    </div>
</div>
