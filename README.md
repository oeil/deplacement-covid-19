[ [English Version](README-EN.md) ]

⚠️ Par respect des équipes médicales, merci de respecter la distanciation sociale, les règles du gouvernement ainsi que les gestes barrières.

# Génerateur d'attestation de déplacement Covid-19

**Projet 100% open source** pour automatiquement générer une "ATTESTATION DE DÉPLACEMENT DÉROGATOIRE" requise par le gouvernement français à chaque déplacement.
- Voir https://media.interieur.gouv.fr/deplacement-covid-19/

>Certaines applications mobile ou sites web fournissent une fonctionnalité identique, en revanche ce projet à pour objectif the fournir une transparence totale au regard de la collection des données personnelles, en publiant non seulement le code source, mais également en hébergeant le site web sur la plateforme ouverte `Github Pages`.

**Aucune données ne sont collectées** ou envoyé sur ce un serveur. Tout fonctionne entiérement en local **sur votre navigateur web**.

## Comment cela fonctionne
La page `generate.html` se charge de générer le fichier PDF (attestation) à travers le site officiel du gouvernement Français.

## Utilisation
Obtenir un lien permanent pour générer une attestation officielle au format PDF par le Gouvernement Français:
- Naviguez à l'adresse du site: https://oeil.github.io/deplacement-covid-19/
- Remplissez le formulaire
- Validez
- Un lien permanent est alors disponible en dessous

Vous pouvez maintenant utiliser ce lien lorsque vous avez besoin de générer une attestation. Plus besoin de remplir le formulaire.

## Apple iOS utiliser Siri pour générer un PDF (Raccourcis)

## Credit
 * Source officiel du gouvernement Français utilisé pour `certificate.js`:
    * https://github.com/LAB-MI/deplacement-covid-19

 * Inspiré par le projet:
    * https://github.com/GetLuko/Covid19-French-Auth