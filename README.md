## [ Version Francaise ]

⚠️ Par respect des équipes médicales, merci de respecter la distanciation sociale, les règles du gouvernement ainsi que les gestes barrières.

# Covid19 - Generateur d'attestation de déplacement 100% Open-Source

Projet 100% open source pour automatiquement générer une "ATTESTATION DE DÉPLACEMENT DÉROGATOIRE" requise par le gouvernement français à chaque déplacement.
- Voir https://media.interieur.gouv.fr/deplacement-covid-19/

Certaines applications mobile ou sites web fournissent une fonctionnalité identique, en revanche ce projet à pour but
objective the fournir un transparence total au regard de la collection des données personnelles, en publiant non seulement
le code source, mais également en hébergeant le site web sur la plateforme ouverte `Github Pages`.

**Aucune données** ne sont collectées ou envoyé sur ce un serveur. Tout fonctionne entiérement en local sur votre navigateur web.

## Utilisation
Obtenir un lien permanent pour générer une attestation officielle au format PDF par le Gouvernement Français:
- Naviguez à l'adresse du site: https://oeil.github.io/deplacement-covid-19/
- Remplissez le formulaire
- Validez
- Un lien permanent est alors disponible en dessous

Vous pouvez maintenant utiliser ce lien lorsque vous avez besoin de générer une attestation. Plus besoin de remplir le formulaire.

## Apple iOS utiliser Siri pour générer un PDF (Raccourcis)

----

## [ English Version ]

⚠️ By respect to our medical staff, please respect the social distancing, the governement rules and the barrier gestures.

# Covid19 - 100% Open-Source Document Generator

100% open-source project to provide an automatable way to generate the "ATTESTATION DE DÉPLACEMENT DÉROGATOIRE" required by the French Government.
- See https://media.interieur.gouv.fr/deplacement-covid-19/

Some mobile applications and websites already provide similar capabilities, however this projects aims to show full transparency regarding data collection by not only publishing the source-code, but also by hosting openly the web pages served here on Github.

**No user data** are sent to the server. Everything is run locally on your browser.

## Usage
Generate a permanent link to generate the official PDF document out of the French Government:
- Browse the website hosted here on github: https://oeil.github.io/deplacement-covid-19/
- Fill in the form
- Hit "Valider"
- A link is generated below

Now you can use that link everytime you need to generate a certificate. You no longer need to fill in the form.

## Apple iOS use Siri to generate the PDF (shortcut)


## How it works ?
- The page `generate.html` is in charge of generating the PDF
- From the url hanchor parameter, it retrieves the profil (firstname, lastname, etc...). Then, this profil is injected in a hidden form that is similar to the one on Official Website.
- Then, the official `certificate.js` script from official French Government website is called to compile the PDF using the data from on the hidden form.

No need to compile anything. Runs out-of-the-box on **hosted on Github-Pages for full transparency**.

## Credit
 * Official French Government website code source : used for `certificate.js`
    * https://github.com/LAB-MI/deplacement-covid-19

 * Inspired by
    * https://github.com/GetLuko/Covid19-French-Auth