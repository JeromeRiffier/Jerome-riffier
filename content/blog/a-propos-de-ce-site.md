---
lang: fr
title: A propos de ce site
description: Quelques détails sur la création de ce site

---
Je me dis juste qu’il serait pas mal d’expliquer un peu comment ce site est réalisé, bien que toute les sources soient disponibles sur mon GitHub si vous souhaitez voir de plus près ma création.

### Un peu d'histoire

Mais avant de commencer un peu de contexte, ce site est mon deuxième site personnel.

J’ai décidé qu’il était temps de le remplacer car avec mes 5 ans en tant que développeur web, le premier commençait sérieusement à devenir obsolète et ne démontrait plus mon savoir faire.

En effet il était réalisé entièrement en html et Javascript sans Framework.

Bien qu’habitué au développement PHP sous Symfony dans un premier temps et plus récemment Laravel pour mon travail, je souhaitais m’éviter les frais d’un serveur VPS et donc générer mon site en statique.

J’ai cependant aussi utilisé dans mon travail un Framework JS parfait pour mon cas de figure Nuxt JS et c’est avec ce Framework que j’ai créé le site sur lequel vous vous trouvez actuellement.

### NuxtJs

Nuxt JS est un Framework français (cocorico) basé sur la technologie Vue JS, permettant la création de site moderne. Il permet un rendu côté serveur comme un déploiement statique des sites.

En plus ce Framework possède plusieurs atouts très agréables pour un développeur :

* Premièrement il utilise le système de store VueX qui, couplé à VueJS, permet de stocker les données utiles au site et les réutiliser au besoin dans les pages un peu à la manière d’une base de données. Ceci m’a permis de rassembler toute mes données dans un fichier JSON que vous trouverez dans assets/data.json dans les sources du site.
* Deuxièmement il permet un cache poussé et une utilisation hors-ligne de l’application ainsi que la possibilité d’enregistrer le site en tant que PWA dans votre appareil.
* Enfin VueJs étant un framework très populaire, il existe beaucoup de plugin pour encore augmenter les capacités du site. J’ai par exemple utilisé Vuetify en tant que librairy graphique, Pathify pour simplifier l’utilisation du store ou encore NuxtJs/Color-mode pour prendre en compte vos préférences système et afficher le mode Claire ou sombre en conséquence.