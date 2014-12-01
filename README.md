DashCast

Le Chromecast est un appareil lecteur de flux multimédia en temps réel. Mais le CPU de cet appareil est très limité et ne fonctionne pas vraiment quand on souhaite afficher une page HTML qui contient beaucoup de Javascript.

Notre partenaire utilise Kibana. Il génère en temps réel un tableau de bord mais rencontre les problèmes suivants :

Affichage manquant des courbes
Titre du dashboard qui n'est pas affiché à l'instant T.

Pour résoudre cette problématique, DashCast est là !

Il faut créer un serveur qui permettra de générer une capture d'écran du site et d'actualiser automatiquement l’image pour qu’il soit à jour. Les outils nécessaires à la réalisation de ce projet sont : l'utilisation de PhantomJs et Nodejs, Dashkiosk (afficher des tableaux de bords sur plusieurs écrans), d'un Chromecast et d'une télévision.

Grâce à PhantomJs, nous récupérons des screenshots d'une page HTML puis Nodejs nous permet de créer un mini-serveur afin d'afficher l'image. Les requêtes paramétrables par l'utilisateur sont : la résolution de l'image (width, height), l'URL du site et le nom de l'image qu'on crée. Une fois la création de l'image est effectué, on le lance par l'intermédiaire de Dashkiosk qui pourra l'envoyé à l'écran TV via le Chromecast.

Dans le Dashkiosk il y a :

Un admin qui contrôle les écrans en leur envoyant l'URL qu'ils doivent afficher en temps réel.

Un récepteur (le Chromecast) qui est connecté via le WIFI. Une fois configuré, il attend l'action de l'admin afin d'afficher l'URL puis l'envoie sur un écran TV.

========
