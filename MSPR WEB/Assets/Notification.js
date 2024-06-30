
let NotifBox = document.getElementById('NotifBox')
let ReussiMsg = 'Connexion Réussi';
let EchecMsg = 'Connexion Echec';
let ServerMsg = 'Probleme Serveur';

function showNotification(msg){
     let Notif = document.createElement('div');
       Notif.classList.add('Notif');
       Notif.innerHTML = msg;
       NotifBox.body.appendChild(Notif);


}