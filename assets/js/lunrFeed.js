---
layout: null
---

var documents = [
	{% assign count = 0 %}
	{% for post in site.posts %}
		{
			"title": {{post.title | jsonify}},
			"content": {{post.content | strip_html | jsonify}},
			"labels": {{post.labels | jsonify}},
			"id": {{count}}
		}
	{% unless forloop.last %},{% endunless %}
	{% assign count = count | plus: 1 %}
	{% endfor %}
]

var idx = lunr(function() {
	this.field('title')
	this.field('content', {boost: 10})
	this.field('labels')
	this.ref('id')
	
	documents.forEach(function (doc) {
    this.add(doc)
	}, this)
})

var store = [
	{% for post in site.posts %}
		{
			'title': {{post.title | jsonify}},
			'link': {{ post.url | jsonify }},
			'date': {{ post.date | date: '%B %-d, %Y' | jsonify }},
			'labels': {{ post.labels | jsonify }},
			'excerpt': {{ post.content | strip_html | truncatewords: 20 | jsonify }}
		}
		{% unless forloop.last %},{% endunless %}
	{% endfor %}
]



