# Report 
## Descrizione generale
Per il progetto ho deciso di realizzare in 3D il modello del razzo *Falcon Heavy* di SpaceX posizionato su un terreno irregolare generato attraverso l'utilizzo di una heightmap. L'animazione scelta è la fuoriuscita del fumo dai motori e la partenza del razzo verso lo spazio. 

![Scene graph](/resources/scene_graph.jpeg)

Come si può vedere dal grafo della scena, gli oggetti principali sono due: il terreno e il *Falcon Heavy* formato da tre *Falcon 9* (***central_rocket***, ***left_rocket***, ***right_rocket***). I razzi laterali sono figli del razzo centrale, in questo modo, agendo su quest'ultimo, si agisce sull'intero razzo.  

Il codice è stato suddiviso in due file: 

- **index.html**: file principale;
- **functions.js**: funzioni utilizzate.

Le librerie utilizzate sono le seguenti:

- **three.min.js**
- **stats.min.js**
- **Coordinates.js**
- **OrbitControls.js**
- **tween.min.js** per l'animazione del razzo.

## Sviluppo del progetto
Per la realizzazione di questo progetto, per prima cosa sono andata sul sito di [SpaceX](http://www.spacex.com/falcon-heavy) per osservare le caratteristiche estetiche del *Falcon Heavy*. Per rientrare nei tempi ho deciso di semplificare il più possibile il razzo mantenendo solo le peculiarità generali. 

Il progetto è stato sviluppato attraverso i seguenti passi: 

- modellazione del razzo 
- modellazione della base tramite l'uso di una heightmap
- inserimento di luci e ombre
- inserimento di animazioni
- applicazione della cubemap
- animazione del colore di sfondo

Le animazioni effettuate sono le seguenti: 

- fuoriuscita di fuoco e fumo dai motori
- partenza del razzo con accelerazione 
- interpolazione del colore di sfondo da bianco ad azzurro a blu


## Risultato
Il risultato finale mostra il Falcon Heavy, appoggiato sulla base irregolare, con il fuoco e il fumo che iniziano ad uscire dai motori. Successivamente, avviene la partenza del razzo. Man mano che il razzo si alza, lo sfondo cambia colore da bianco ad azzurro a blu. Infine il razzo giunge nello spazio.

![Razzo sulla base](/resources/base.png)
![Razzo in cielo](/resources/sky.png)
![Razzo nello spazio](/resources/space.png) 