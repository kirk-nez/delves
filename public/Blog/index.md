---
layout: stage1.njk
--- 

{% for post in collections.posts %}<h2>{{post.data.title}}<a href="{{post.url}}">-&gt;</a>
</h2><br><small>{{post.data.date | formatDate }}</small><br><div>{{post.content}}</div><hr>{% endfor %}

[Back to main page](../index.html)