---
name: klip-klap
description: Contraintes techniques, identité visuelle et méthode de travail du site klip-klap.fr. À utiliser dès qu'on touche au code, au style, aux fonts, aux animations ou au contenu de ce projet.
---

# KLIP KLAP — Instructions projet

## Dépôt

- Remote : `https://github.com/klip-klap63/klip-klap.git`
- Branche principale : `main`
- Authentification : credential.helper osxkeychain (macOS gère les credentials — ne jamais écrire de token dans une URL de remote)

## Méthode de travail

- Après chaque modification terminée : `git add -A && git commit -m "<description>" && git push origin main`, automatiquement, sans demander confirmation. Remote : klip-klap63.
- Confirmer ensuite que le push est passé, avec la sortie exacte de la commande.
- Si un push échoue, montrer l'erreur exacte sans inventer de diagnostic.
