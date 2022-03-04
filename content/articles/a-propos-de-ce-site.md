---
lang: fr
title: A propos de ce site
description: Quelques détails sur la création de ce site

---
Je me dis juste qu’il serait pas mal d’expliquer un peut comment ce site est réaliser, bien que toute les sources soit disponible sur mon GitHub si vous souhaiter voir de plus prés ma création.

### Un peux d'histoire

Mais avant de commencer un peut de contexte, ce site est mon deuxième site personnel.

J’ai décider qu’il était temps de le remplacer car avec mes 5ans en tant que développeur web, le premier commençait sérieusement à devenir obsolète et ne démontrait plus mon savoir faire.

En effet il était réalisé entièrement en html et Javascript sans Framework

Bien qu’habituer au développement PHP sous Symfony dans un premier temps et plus récemment Laravel pour mon travail. Je souhaitais m’évité les frais d’un serveur VPS et donc générer mon site en statique.

J’ai cependant aussi utilisé dans mon travail un Framework JS parfait pour mon cas de figure Nuxt JS et c’est avec ce Framework que j’ai créer le site sur lequel vous vous trouvez actuellement.

### NuxtJs

Nuxt JS est un Framework français (cocorico) basé sur la technologie Vue JS, permettant la création de site moderne. Il permet un rendu coté serveur comme un déploiement statique des sites.

En plus ce Framework possèdent plusieurs atout très agréable pour un développeur :

* Premièrement il utilise le système de store VueX qui couplé a VueJS permet de stocker les données utiles au site et les réutiliser au besoin dans les pages un peut à la manière d’une base de données. Ce qui m’a permis de rassembler toute mes données dans un fichier JSON que vous trouverez dans assets/data.json dans les sources du site.
* Deuxièmes il permet un cache poussé et une utilisation hors-ligne de l’application ainsi que la possibilité d’enregistré le site en tant que PWA dans votre appareil
* Enfin VueJs étant un framework très populaire, il existe beaucoup de plugin pour encore augmenter les capacité du site, j’ai par exemple utilisé Vuetify en tant que librairy graphique, Pathify pour simplifier l’utilisation du store ou encore NuxtJs/Color-mode pour prendre en compte vos préférences système est afficher le mode Claire ou sombre en conséquence.