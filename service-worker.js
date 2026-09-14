const CACHE='cockpit-player-v0.2-wallpapers-1';
const CORE=[
  './','./index.html','./styles.css?v=0.2.0','./app.js?v=0.2.0','./manifest.webmanifest?v=0.2.0',
  './icon-64.png','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./favicon-32.png','./cockpit-logo-source.png','./wonq-demo.png',
  './bg-accueil.jpg','./bg-fiche.jpg','./bg-aptitudes.jpg','./bg-sorts.jpg','./bg-inventaire.jpg','./bg-journal.jpg','./bg-illustrations.jpg',
  './loupe.png','./menu_trois_points.png','./d20.png','./parchemin.png','./magie.png','./objet_merveilleux.png','./grimoire.png','./oeil.png','./jouer.png','./sauvegarde.png','./fleche_bas.png','./fleche_haut.png','./crayon.png','./fermer.png','./actualiser.png','./plus.png',
  './divers.png','./consommable.png','./potion.png','./anneau.png','./baton_magique.png','./baguette_magique.png','./sceptre_magique.png','./arme_courante_corps_a_corps.png','./arme_courante_corps_a_corps_magique.png','./arme_courante_a_distance.png','./arme_courante_a_distance_magique.png','./arme_de_guerre_corps_a_corps.png','./arme_de_guerre_corps_a_corps_magique.png','./arme_de_guerre_a_distance.png','./arme_de_guerre_a_distance_magique.png','./arme_a_feu.png','./arme_a_feu_magique.png','./munitions.png','./munitions_magiques.png','./armure_legere.png','./armure_legere_magique.png','./armure_intermediaire.png','./armure_intermediaire_magique.png','./armure_lourde.png','./armure_lourde_magique.png','./bouclier.png','./bouclier_magique.png'
];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match('./index.html'))));
});
