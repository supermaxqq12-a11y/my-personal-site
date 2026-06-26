---
layout: layout.njk
title: Главная
---

# Йоу, я Максим

Это мой личный сайт. Ниже собраны мои заметки обо всём, что попадутся.

## Заметки

<ul>
{%- for post in collections.posts -%}
	<li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>