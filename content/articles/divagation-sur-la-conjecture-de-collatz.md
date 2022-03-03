---
lang: fr
title: Divagation sur la Conjecture de Collatz
description: Je suis récemment tomber sur une vidéo expliquant ce problème mathématique
  très simple à comprendre mais qu'aucun mathématiciens n'aurais n'aurais résolut.

---
Passionné de science et de technologie, je suis abonné à pas mal de chaines de vulgarisations scientifique sur YouTube (_français comme anglais_).

L’une de ces chaine « **Veritassium** » à publier une vidéo sur un problème mathématique très simple à comprendre mais impossible à résoudre qui ma intrigué.

### La conjecture

Le principe de ce problème est très simple, prenez un nombre (n'importe lequel) puis appliquer l'algorithme suivant dessus :

* Si le nombre est paire divisez le par 2
* Si le nombre est impaire multipliez le par 3 et ajouter 1
* Recommencez

Par exemple prenons le chiffre 5

> 5 est impaire = 5 X 3 + 1 =16
>
> 16 est paire = 16/2 = 8
>
> 8 est paire = 8/2 = 4
>
> 4 est paire = 4/2 = 2
>
> 2 est paire = 2/2 = 1
>
> 1 est impaire = 1 X 3 +1 = 4 (_ouille.._)

La conjecture est donc ceci: "Pour tous les nombres entier positifs, si on applique cette algorithme, finira invariablement par boucler sur ces trois dernier résultat (4 -> 2 -> 1-> 4 etc..).

A fin de tester de façon plus visuel cette affirmation, j'ai donc créer ce composant :

<projects-collatz-conjecture></projects-collatz-conjecture>

Il suffit de sélectionner une valeur sur le slider et regarder la magie des mathématique ce déroulé