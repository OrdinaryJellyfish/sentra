---
title: Installation
description: How to install Sentra on your Flarum forum.
---

Install with composer:

```sh
composer require ordinaryjellyfish/sentra:"*"
```

## Updating

```sh
composer update ordinaryjellyfish/sentra:"*"
php flarum migrate
php flarum cache:clear
```