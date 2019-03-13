---
layout: blog
title: Blog
---

{% for post in site.posts %}
<div class="media">
  <div class="row">
    <div class="col-12 col-sm-12">
      {% if jekyll.environment == "production" %}
          <h2><a href="/nazhifa{{ post.url }}">{{ post.title }}</a></h2>
      {% else %}
          <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      {% endif %}
      <nav class="codrops-demos">
          {% assign category = site.categories %}
          {% assign label = post.labels %}
          {% assign j = post.labels | size | minus: 1 %}
          {% assign l = site.categories | size | minus: 1 %}
          {% assign i = 0 %}
          {% for i in (0..j) %}
              {% for k in (0..l) %}
                  {% if category[i].fixname == label[k] %}
                      {% if jekyll.environment == "production" %}
                          <a href="/nazhifa{{ category[i].url }}">{{ category[i].name }}</a>
                      {% else %}
                          <a href="{{ category[i].url }}">{{ category[i].name }}</a>
                      {% endif %}
                  {% endif %}
              {% endfor %}
          {% endfor %}
      </nav>
      {% if jekyll.environment == "production" %}
        <img class="d-block rounded img-thumbnail bg-transparent img-fluid mb-1" style="max-height: 200px;" src="/nazhifa/assets/images/placeholder284x129.png" alt="Generic placeholder image">
      {% else %}
        <img class="d-block rounded img-thumbnail bg-transparent img-fluid mb-1" style="max-height: 200px;" src="/assets/images/placeholder284x129.png" alt="Generic placeholder image">
      {% endif %}
    </div>
    <div class="media-body mb-5 col-12 col-sm-12">
      <p>{{ post.excerpt }}</p>
    </div>
  </div>
</div>
{% endfor %}