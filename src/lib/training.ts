export type Species = "dog" | "cat";
export interface TrainingStep { title: string; action: string; animal: string; position: string; gesture: string; avoid: string; tip: string; image: string; alt: string; credit: string; }
export interface Exercise { species: Species; id: string; name: string; level: string; summary: string; steps: TrainingStep[]; }
export const exercises: Exercise[] = [
  {
    "species": "dog",
    "id": "basics",
    "name": "Avant de commencer",
    "level": "Les bases",
    "summary": "Une séance sereine, des récompenses au bon moment.",
    "steps": [
      {
        "title": "Préparer un environnement calme",
        "action": "Installez un tapis dans une pièce tranquille. Préparez quelques friandises petites et tendres, sans les donner toutes à la fois.",
        "animal": "Observer les friandises en restant détendu.",
        "position": "Corps souple, oreilles naturelles, possibilité de se détourner ou de partir.",
        "gesture": "Préparez quelques friandises petites et tendres, sans les donner toutes à la fois.",
        "avoid": "Ne punissez pas, ne retenez pas l’animal et ne prolongez pas une séance s’il se détourne.",
        "tip": "Déduisez les friandises de la ration quotidienne et terminez sur une petite réussite.",
        "image": "/__l5e/assets-v1/65b2b283-b57f-47eb-a0b6-6c4e45bd98fb/dog-basics-01.webp",
        "alt": "Observer les friandises en restant détendu.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Marquer le bon comportement",
        "action": "Attendez un comportement souhaité. Dites « oui » avec une voix joyeuse ou cliquez une seule fois, puis donnez la friandise dans la seconde.",
        "animal": "Regarder la main et prendre calmement la récompense.",
        "position": "Corps souple, oreilles naturelles, possibilité de se détourner ou de partir.",
        "gesture": "Dites « oui » avec une voix joyeuse ou cliquez une seule fois, puis donnez la friandise dans la seconde.",
        "avoid": "Ne punissez pas, ne retenez pas l’animal et ne prolongez pas une séance s’il se détourne.",
        "tip": "Déduisez les friandises de la ration quotidienne et terminez sur une petite réussite.",
        "image": "/__l5e/assets-v1/b8f19fac-d039-4963-a46d-c500f366f6c1/dog-basics-02.webp",
        "alt": "Regarder la main et prendre calmement la récompense.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Récompenser immédiatement",
        "action": "Réglez un minuteur sur trois à cinq minutes. Alternez de petites réussites et des pauses, puis terminez avant que votre chien ne se fatigue.",
        "animal": "Se reposer sur le tapis entre les essais.",
        "position": "Corps souple, oreilles naturelles, possibilité de se détourner ou de partir.",
        "gesture": "Alternez de petites réussites et des pauses, puis terminez avant que votre chien ne se fatigue.",
        "avoid": "Ne punissez pas, ne retenez pas l’animal et ne prolongez pas une séance s’il se détourne.",
        "tip": "Déduisez les friandises de la ration quotidienne et terminez sur une petite réussite.",
        "image": "/__l5e/assets-v1/bfa36c0c-8462-47a4-9d0f-2c489b7f380d/dog-basics-03.webp",
        "alt": "Se reposer sur le tapis entre les essais.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Ajouter le signal verbal",
        "action": "Quand le geste est devenu fiable, prononcez le mot choisi une seule fois, juste avant le mouvement. Récompensez sa réponse.",
        "animal": "Répondre au geste puis au mot, sans répétition insistante.",
        "position": "Corps souple, oreilles naturelles, possibilité de se détourner ou de partir.",
        "gesture": "Récompensez sa réponse.",
        "avoid": "Ne punissez pas, ne retenez pas l’animal et ne prolongez pas une séance s’il se détourne.",
        "tip": "Déduisez les friandises de la ration quotidienne et terminez sur une petite réussite.",
        "image": "/__l5e/assets-v1/11668f63-168c-4685-8876-0878a1f746ba/dog-basics-04.webp",
        "alt": "Répondre au geste puis au mot, sans répétition insistante.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Rendre l’exercice plus facile",
        "action": "Si votre chien hésite, revenez à une demande plus simple. Rapprochez la récompense et félicitez le moindre essai volontaire.",
        "animal": "Revenir vers la main pour une réussite facile.",
        "position": "Corps souple, oreilles naturelles, possibilité de se détourner ou de partir.",
        "gesture": "Rapprochez la récompense et félicitez le moindre essai volontaire.",
        "avoid": "Ne punissez pas, ne retenez pas l’animal et ne prolongez pas une séance s’il se détourne.",
        "tip": "Déduisez les friandises de la ration quotidienne et terminez sur une petite réussite.",
        "image": "/__l5e/assets-v1/a39932e7-3e4a-4dc2-89a8-83861a603ea3/dog-basics-05.webp",
        "alt": "Revenir vers la main pour une réussite facile.",
        "credit": "Illustration originale générée pour PetCare"
      }
    ]
  },
  {
    "species": "dog",
    "id": "sit",
    "name": "Assis",
    "level": "Débutant",
    "summary": "Une assise volontaire, sans jamais forcer le mouvement.",
    "steps": [
      {
        "title": "Position de départ",
        "action": "Placez une petite friandise à quelques centimètres du nez de votre chien debout. Attendez qu’il regarde votre main sans sauter.",
        "animal": "Rester debout et orienter le nez vers la main.",
        "position": "Quatre pattes au sol, corps libre, tête tournée vers la friandise.",
        "gesture": "Attendez qu’il regarde votre main sans sauter.",
        "avoid": "Ne poussez jamais l’arrière-train et ne tirez pas sur le collier. Une friandise trop haute provoque un saut.",
        "tip": "Un tapis antidérapant aide à garder les pattes avant stables. Récompensez le plus petit progrès.",
        "image": "/__l5e/assets-v1/2fc26a54-c0f5-44e6-94f4-ed1f858d40e3/dog-sit-01.webp",
        "alt": "Rester debout et orienter le nez vers la main.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Attirer le regard vers le haut",
        "action": "Montez lentement la main juste au-dessus du museau. Déplacez-la légèrement vers l’arrière, sans toucher la tête.",
        "animal": "Lever la tête en suivant lentement la friandise.",
        "position": "Pattes avant ancrées au sol, tête relevée sans sauter.",
        "gesture": "Déplacez-la légèrement vers l’arrière, sans toucher la tête.",
        "avoid": "Ne poussez jamais l’arrière-train et ne tirez pas sur le collier. Une friandise trop haute provoque un saut.",
        "tip": "Un tapis antidérapant aide à garder les pattes avant stables. Récompensez le plus petit progrès.",
        "image": "/__l5e/assets-v1/4f80a6d6-620f-438e-8bbb-bf69ee5a6be4/dog-sit-02.webp",
        "alt": "Lever la tête en suivant lentement la friandise.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Amorcer l’assise",
        "action": "Laissez le nez suivre la friandise : les pattes arrière se plient et le bassin commence à descendre. Gardez la main basse pour éviter un saut.",
        "animal": "Plier les pattes arrière et commencer à abaisser le bassin.",
        "position": "Pattes arrière fléchies, bassin encore au-dessus du sol, pattes avant droites.",
        "gesture": "Gardez la main basse pour éviter un saut.",
        "avoid": "Ne poussez jamais l’arrière-train et ne tirez pas sur le collier. Une friandise trop haute provoque un saut.",
        "tip": "Un tapis antidérapant aide à garder les pattes avant stables. Récompensez le plus petit progrès.",
        "image": "/__l5e/assets-v1/bd316457-8597-41b1-92b0-e9f53d9a7bfe/dog-sit-03.webp",
        "alt": "Plier les pattes arrière et commencer à abaisser le bassin.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Obtenir la position assise",
        "action": "Dès que les fesses touchent le sol, dites « oui » et récompensez. Quand l’assise est régulière, ajoutez « assis » juste avant le mouvement.",
        "animal": "Poser les fesses au sol avec les pattes avant stables.",
        "position": "Fesses au sol, pattes avant droites, tête orientée vers vous.",
        "gesture": "Quand l’assise est régulière, ajoutez « assis » juste avant le mouvement.",
        "avoid": "Ne poussez jamais l’arrière-train et ne tirez pas sur le collier. Une friandise trop haute provoque un saut.",
        "tip": "Un tapis antidérapant aide à garder les pattes avant stables. Récompensez le plus petit progrès.",
        "image": "/__l5e/assets-v1/4303c22a-ad8a-4afb-bb9d-cb0d1995d0d6/dog-sit-04.webp",
        "alt": "Poser les fesses au sol avec les pattes avant stables.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Récompenser et retirer le leurre",
        "action": "Reproduisez le même geste avec une main vide. Dès l’assise, donnez une friandise prise dans votre poche ou dans l’autre main.",
        "animal": "Rester assis en suivant une main sans friandise.",
        "position": "Assise stable, poitrine droite et regard vers la main vide.",
        "gesture": "Dès l’assise, donnez une friandise prise dans votre poche ou dans l’autre main.",
        "avoid": "Ne poussez jamais l’arrière-train et ne tirez pas sur le collier. Une friandise trop haute provoque un saut.",
        "tip": "Un tapis antidérapant aide à garder les pattes avant stables. Récompensez le plus petit progrès.",
        "image": "/__l5e/assets-v1/1fd5eef8-1198-43af-a5f2-a8fcdbaa0a3d/dog-sit-05.webp",
        "alt": "Rester assis en suivant une main sans friandise.",
        "credit": "Illustration originale générée pour PetCare"
      }
    ]
  },
  {
    "species": "dog",
    "id": "down",
    "name": "Couché",
    "level": "Débutant",
    "summary": "Apprendre à se poser confortablement sur son tapis.",
    "steps": [
      {
        "title": "Commencer en position assise",
        "action": "Demandez une assise confortable sur un tapis antidérapant. Agenouillez-vous de côté et présentez une friandise près du nez.",
        "animal": "Rester assis calmement.",
        "position": "Fesses au sol, pattes avant droites.",
        "gesture": "Agenouillez-vous de côté et présentez une friandise près du nez.",
        "avoid": "Ne pressez pas les épaules et ne répétez pas le mot avec insistance. Évitez les sols glissants.",
        "tip": "Une surface moelleuse rend le contact des coudes plus confortable.",
        "image": "/__l5e/assets-v1/4bbef69c-7b6c-4de1-8820-3ed951241223/dog-down-01.webp",
        "alt": "Rester assis calmement.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Guider la friandise vers le sol",
        "action": "Abaissez lentement la friandise verticalement entre les pattes avant, puis légèrement vers l’avant au ras du tapis.",
        "animal": "Baisser la tête entre les pattes avant.",
        "position": "Assis, cou abaissé, nez dirigé entre les pattes avant.",
        "gesture": "Abaissez lentement la friandise verticalement entre les pattes avant, puis légèrement vers l’avant au ras du tapis.",
        "avoid": "Ne pressez pas les épaules et ne répétez pas le mot avec insistance. Évitez les sols glissants.",
        "tip": "Une surface moelleuse rend le contact des coudes plus confortable.",
        "image": "/__l5e/assets-v1/c92a4d68-456e-4180-a91d-3862f10f215a/dog-down-02.webp",
        "alt": "Baisser la tête entre les pattes avant.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Obtenir les coudes au sol",
        "action": "Dès que les deux coudes touchent le tapis, dites « oui » et donnez la friandise près du sol pour conserver la position.",
        "animal": "Poser les deux coudes et le poitrail sur le tapis.",
        "position": "Deux coudes au sol, poitrine basse, pattes avant vers l’avant.",
        "gesture": "Dès que les deux coudes touchent le tapis, dites « oui » et donnez la friandise près du sol pour conserver la position.",
        "avoid": "Ne pressez pas les épaules et ne répétez pas le mot avec insistance. Évitez les sols glissants.",
        "tip": "Une surface moelleuse rend le contact des coudes plus confortable.",
        "image": "/__l5e/assets-v1/8e122e1a-9a67-4b47-8e6d-c178326b0ae0/dog-down-03.webp",
        "alt": "Poser les deux coudes et le poitrail sur le tapis.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Recommencer sans précipitation",
        "action": "Si le chien se relève, remettez-vous au départ assis. Présentez à nouveau la friandise au nez et descendez plus lentement.",
        "animal": "Revenir en position assise avant un nouvel essai.",
        "position": "Assis de nouveau, pattes avant stables et tête proche de la main.",
        "gesture": "Présentez à nouveau la friandise au nez et descendez plus lentement.",
        "avoid": "Ne pressez pas les épaules et ne répétez pas le mot avec insistance. Évitez les sols glissants.",
        "tip": "Une surface moelleuse rend le contact des coudes plus confortable.",
        "image": "/__l5e/assets-v1/e0dc1147-6fed-4e5e-b6d0-f5e2fed91c17/dog-down-04.webp",
        "alt": "Revenir en position assise avant un nouvel essai.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Ajouter le signal « couché »",
        "action": "Quand le mouvement est facile, dites « couché » une fois, puis faites le geste vers le tapis avec votre main. Récompensez les coudes au sol.",
        "animal": "Se coucher à la suite du signal et du geste.",
        "position": "Poitrine et deux coudes posés, tête libre.",
        "gesture": "Récompensez les coudes au sol.",
        "avoid": "Ne pressez pas les épaules et ne répétez pas le mot avec insistance. Évitez les sols glissants.",
        "tip": "Une surface moelleuse rend le contact des coudes plus confortable.",
        "image": "/__l5e/assets-v1/a93ec438-0c72-476b-a7d3-5eba19c89b3e/dog-down-05.webp",
        "alt": "Se coucher à la suite du signal et du geste.",
        "credit": "Illustration originale générée pour PetCare"
      }
    ]
  },
  {
    "species": "dog",
    "id": "stay",
    "name": "Reste",
    "level": "Intermédiaire",
    "summary": "Attendre calmement jusqu’au signal de libération.",
    "steps": [
      {
        "title": "Demander la position assise",
        "action": "Demandez « assis ». Tenez-vous face au chien, présentez une paume verticale et dites « reste » une seule fois.",
        "animal": "Rester assis face à la paume.",
        "position": "Fesses sur le tapis et pattes immobiles ; à la libération seulement, corps en marche.",
        "gesture": "Tenez-vous face au chien, présentez une paume verticale et dites « reste » une seule fois.",
        "avoid": "N’augmentez pas la durée et la distance en même temps. Ne récompensez pas après qu’il s’est levé.",
        "tip": "Récompensez avant qu’il ne bouge ; si nécessaire, raccourcissez l’attente.",
        "image": "/__l5e/assets-v1/3dcbc97c-0064-4919-8c74-ad8d1dab73e4/dog-stay-01.webp",
        "alt": "Rester assis face à la paume.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Présenter la main « stop »",
        "action": "Attendez une seconde sans bouger, puis dites « oui » et récompensez à hauteur du nez pendant que le chien reste assis.",
        "animal": "Manger la récompense sans se relever.",
        "position": "Fesses sur le tapis et pattes immobiles ; à la libération seulement, corps en marche.",
        "gesture": "Attendez une seconde sans bouger, puis dites « oui » et récompensez à hauteur du nez pendant que le chien reste assis.",
        "avoid": "N’augmentez pas la durée et la distance en même temps. Ne récompensez pas après qu’il s’est levé.",
        "tip": "Récompensez avant qu’il ne bouge ; si nécessaire, raccourcissez l’attente.",
        "image": "/__l5e/assets-v1/cf478f4a-fdc8-4af1-8ef0-8326dc2302ff/dog-stay-02.webp",
        "alt": "Manger la récompense sans se relever.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Augmenter progressivement la durée",
        "action": "Allongez d’abord la durée de quelques secondes. Une fois facile, reculez d’un seul petit pas en gardant la paume visible.",
        "animal": "Conserver l’assise malgré le petit pas de recul.",
        "position": "Fesses sur le tapis et pattes immobiles ; à la libération seulement, corps en marche.",
        "gesture": "Une fois facile, reculez d’un seul petit pas en gardant la paume visible.",
        "avoid": "N’augmentez pas la durée et la distance en même temps. Ne récompensez pas après qu’il s’est levé.",
        "tip": "Récompensez avant qu’il ne bouge ; si nécessaire, raccourcissez l’attente.",
        "image": "/__l5e/assets-v1/1f9797d7-a893-4299-8dae-12b42b509752/dog-stay-03.webp",
        "alt": "Conserver l’assise malgré le petit pas de recul.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Revenir récompenser sur place",
        "action": "Revenez vers le chien avant de donner la friandise. Récompensez sur son tapis ; ne l’appelez pas hors de sa position.",
        "animal": "Rester assis pendant votre retour.",
        "position": "Fesses sur le tapis et pattes immobiles ; à la libération seulement, corps en marche.",
        "gesture": "Récompensez sur son tapis ; ne l’appelez pas hors de sa position.",
        "avoid": "N’augmentez pas la durée et la distance en même temps. Ne récompensez pas après qu’il s’est levé.",
        "tip": "Récompensez avant qu’il ne bouge ; si nécessaire, raccourcissez l’attente.",
        "image": "/__l5e/assets-v1/a7a9414d-3f9f-4ad6-920a-229262dceac9/dog-stay-04.webp",
        "alt": "Rester assis pendant votre retour.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Libérer avec un mot clair",
        "action": "Dites « libre » ou « OK », abaissez la main et invitez le chien à quitter le tapis. Ce mot marque clairement la fin.",
        "animal": "Se lever et quitter le tapis après le mot de libération.",
        "position": "Fesses sur le tapis et pattes immobiles ; à la libération seulement, corps en marche.",
        "gesture": "Ce mot marque clairement la fin.",
        "avoid": "N’augmentez pas la durée et la distance en même temps. Ne récompensez pas après qu’il s’est levé.",
        "tip": "Récompensez avant qu’il ne bouge ; si nécessaire, raccourcissez l’attente.",
        "image": "/__l5e/assets-v1/5d66d8fd-1c6e-4755-b567-c941083956c0/dog-stay-05.webp",
        "alt": "Se lever et quitter le tapis après le mot de libération.",
        "credit": "Illustration originale générée pour PetCare"
      }
    ]
  },
  {
    "species": "dog",
    "id": "come",
    "name": "Viens",
    "level": "Débutant",
    "summary": "Un retour joyeux pour renforcer confiance et sécurité.",
    "steps": [
      {
        "title": "Choisir un endroit sans distraction",
        "action": "Dans une pièce sans distraction, placez-vous à courte distance. Dites son nom suivi de « viens » avec une voix chaleureuse.",
        "animal": "Tourner la tête et le corps vers vous.",
        "position": "Corps dirigé vers vous, tête libre et aucune tension sur la longe.",
        "gesture": "Dites son nom suivi de « viens » avec une voix chaleureuse.",
        "avoid": "Ne grondez jamais l’animal lorsqu’il revient. Ne testez pas le rappel en liberté près d’une route.",
        "tip": "Une voix joyeuse et une belle récompense rendent chaque retour agréable.",
        "image": "/__l5e/assets-v1/c1611bcd-5190-4c0f-b3e7-6f90c16f27b3/dog-come-01.webp",
        "alt": "Tourner la tête et le corps vers vous.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Inviter le chien à venir",
        "action": "Accroupissez-vous ou reculez de deux petits pas. Ouvrez les bras à hauteur basse pour l’inviter à vous rejoindre.",
        "animal": "Marcher vers vous de son propre choix.",
        "position": "Corps dirigé vers vous, tête libre et aucune tension sur la longe.",
        "gesture": "Ouvrez les bras à hauteur basse pour l’inviter à vous rejoindre.",
        "avoid": "Ne grondez jamais l’animal lorsqu’il revient. Ne testez pas le rappel en liberté près d’une route.",
        "tip": "Une voix joyeuse et une belle récompense rendent chaque retour agréable.",
        "image": "/__l5e/assets-v1/658d84de-7153-4222-8c75-c00c07bea746/dog-come-02.webp",
        "alt": "Marcher vers vous de son propre choix.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Récompenser son arrivée",
        "action": "À son arrivée, donnez plusieurs petites friandises et félicitez-le. Une caresse n’est ajoutée que s’il apprécie le contact.",
        "animal": "S’arrêter près de vous pour recevoir la récompense.",
        "position": "Corps dirigé vers vous, tête libre et aucune tension sur la longe.",
        "gesture": "Une caresse n’est ajoutée que s’il apprécie le contact.",
        "avoid": "Ne grondez jamais l’animal lorsqu’il revient. Ne testez pas le rappel en liberté près d’une route.",
        "tip": "Une voix joyeuse et une belle récompense rendent chaque retour agréable.",
        "image": "/__l5e/assets-v1/d89c9e40-0058-4c58-b054-2b6abf141fb8/dog-come-03.webp",
        "alt": "S’arrêter près de vous pour recevoir la récompense.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Augmenter doucement la distance",
        "action": "Augmentez progressivement la distance, puis pratiquez dans un jardin sécurisé. Utilisez une longe détendue dehors.",
        "animal": "Revenir vers vous depuis une plus grande distance.",
        "position": "Corps dirigé vers vous, tête libre et aucune tension sur la longe.",
        "gesture": "Utilisez une longe détendue dehors.",
        "avoid": "Ne grondez jamais l’animal lorsqu’il revient. Ne testez pas le rappel en liberté près d’une route.",
        "tip": "Une voix joyeuse et une belle récompense rendent chaque retour agréable.",
        "image": "/__l5e/assets-v1/2a4f54e3-29c4-417e-8f6f-edb636cec6b7/dog-come-04.webp",
        "alt": "Revenir vers vous depuis une plus grande distance.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Revenir à une difficulté facile",
        "action": "Si le rappel devient hésitant, revenez à une courte distance dans un endroit calme. Récompensez même un retour lent.",
        "animal": "Revenir facilement à courte distance, longe souple.",
        "position": "Corps dirigé vers vous, tête libre et aucune tension sur la longe.",
        "gesture": "Récompensez même un retour lent.",
        "avoid": "Ne grondez jamais l’animal lorsqu’il revient. Ne testez pas le rappel en liberté près d’une route.",
        "tip": "Une voix joyeuse et une belle récompense rendent chaque retour agréable.",
        "image": "/__l5e/assets-v1/d76a93e8-0fb0-46c5-9080-5a8302116831/dog-come-05.webp",
        "alt": "Revenir facilement à courte distance, longe souple.",
        "credit": "Illustration originale générée pour PetCare"
      }
    ]
  },
  {
    "species": "dog",
    "id": "heel",
    "name": "Au pied",
    "level": "Avancé",
    "summary": "Marcher ensemble, avec une laisse toujours détendue.",
    "steps": [
      {
        "title": "Se placer au côté gauche",
        "action": "Placez le chien assis à votre gauche. Gardez une friandise à votre hanche gauche et laissez la laisse former une courbe souple.",
        "animal": "S’asseoir à votre gauche, regard vers la hanche.",
        "position": "Épaule alignée avec la jambe gauche, laisse en courbe souple.",
        "gesture": "Gardez une friandise à votre hanche gauche et laissez la laisse former une courbe souple.",
        "avoid": "Ne donnez pas de coups secs sur la laisse. Ne continuez pas à marcher quand elle est tendue.",
        "tip": "Faites de petites séries et repartez uniquement avec une laisse souple.",
        "image": "/__l5e/assets-v1/0c9990cf-8b7b-4dc4-84df-476758129aef/dog-heel-01.webp",
        "alt": "S’asseoir à votre gauche, regard vers la hanche.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Faire quelques pas ensemble",
        "action": "Avancez de deux ou trois petits pas. Gardez la main près de la hanche et félicitez le chien quand son épaule suit votre jambe.",
        "animal": "Marcher à votre gauche au même rythme.",
        "position": "Épaule alignée avec la jambe gauche, laisse en courbe souple.",
        "gesture": "Gardez la main près de la hanche et félicitez le chien quand son épaule suit votre jambe.",
        "avoid": "Ne donnez pas de coups secs sur la laisse. Ne continuez pas à marcher quand elle est tendue.",
        "tip": "Faites de petites séries et repartez uniquement avec une laisse souple.",
        "image": "/__l5e/assets-v1/1d3a1f3b-467d-4c18-92eb-595fc6539230/dog-heel-02.webp",
        "alt": "Marcher à votre gauche au même rythme.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Récompenser près de la jambe",
        "action": "Arrêtez-vous brièvement pour donner la friandise au niveau de votre jambe gauche. Le chien reste à côté, sans croiser devant vous.",
        "animal": "Rester debout près de votre jambe pour manger.",
        "position": "Épaule alignée avec la jambe gauche, laisse en courbe souple.",
        "gesture": "Le chien reste à côté, sans croiser devant vous.",
        "avoid": "Ne donnez pas de coups secs sur la laisse. Ne continuez pas à marcher quand elle est tendue.",
        "tip": "Faites de petites séries et repartez uniquement avec une laisse souple.",
        "image": "/__l5e/assets-v1/e4ad2a59-a14e-4c4a-985b-9310cdbceb5d/dog-heel-03.webp",
        "alt": "Rester debout près de votre jambe pour manger.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Réinitialiser si la laisse se tend",
        "action": "Si la laisse se tend, arrêtez-vous. Replacez le chien à votre gauche et ne repartez que lorsque la laisse est détendue.",
        "animal": "Revenir s’asseoir à votre gauche, laisse relâchée.",
        "position": "Épaule alignée avec la jambe gauche, laisse en courbe souple.",
        "gesture": "Replacez le chien à votre gauche et ne repartez que lorsque la laisse est détendue.",
        "avoid": "Ne donnez pas de coups secs sur la laisse. Ne continuez pas à marcher quand elle est tendue.",
        "tip": "Faites de petites séries et repartez uniquement avec une laisse souple.",
        "image": "/__l5e/assets-v1/19b990d5-5a17-45a2-b6fd-6ee0013482c8/dog-heel-04.webp",
        "alt": "Revenir s’asseoir à votre gauche, laisse relâchée.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Ajouter virages et changements de rythme",
        "action": "Ajoutez quelques pas puis un virage lent à gauche. Gardez le chien à l’intérieur du virage et récompensez son alignement.",
        "animal": "Suivre le virage sans dépasser ni tirer.",
        "position": "Épaule alignée avec la jambe gauche, laisse en courbe souple.",
        "gesture": "Gardez le chien à l’intérieur du virage et récompensez son alignement.",
        "avoid": "Ne donnez pas de coups secs sur la laisse. Ne continuez pas à marcher quand elle est tendue.",
        "tip": "Faites de petites séries et repartez uniquement avec une laisse souple.",
        "image": "/__l5e/assets-v1/0189abae-d10f-46c5-ad84-7d0b3efbde68/dog-heel-05.webp",
        "alt": "Suivre le virage sans dépasser ni tirer.",
        "credit": "Illustration originale générée pour PetCare"
      }
    ]
  },
  {
    "species": "dog",
    "id": "high-five",
    "name": "Tape-là",
    "level": "Tour amusant",
    "summary": "Un contact de patte complice, appris tout en douceur.",
    "steps": [
      {
        "title": "Présenter le poing fermé",
        "action": "Asseyez le chien et présentez un poing fermé contenant une friandise, près du sol. Laissez-le explorer sans saisir sa patte.",
        "animal": "Rester assis et observer le poing près du sol.",
        "position": "Assis stable, une seule patte levée sans basculer le corps.",
        "gesture": "Laissez-le explorer sans saisir sa patte.",
        "avoid": "Ne saisissez pas la patte et ne forcez jamais le contact. Gardez la main à une hauteur confortable.",
        "tip": "Récompensez les petits mouvements ; quelques essais suffisent avant une pause.",
        "image": "/__l5e/assets-v1/40a70750-3cf0-420c-803c-136b65d4dea3/dog-high-five-01.webp",
        "alt": "Rester assis et observer le poing près du sol.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Récompenser le premier mouvement de patte",
        "action": "Dès qu’une patte touche le poing, dites « oui ». Ouvrez la main pour récompenser immédiatement ce premier mouvement.",
        "animal": "Poser une patte sur votre poing.",
        "position": "Assis stable, une seule patte levée sans basculer le corps.",
        "gesture": "Ouvrez la main pour récompenser immédiatement ce premier mouvement.",
        "avoid": "Ne saisissez pas la patte et ne forcez jamais le contact. Gardez la main à une hauteur confortable.",
        "tip": "Récompensez les petits mouvements ; quelques essais suffisent avant une pause.",
        "image": "/__l5e/assets-v1/1e6a4a01-4163-4595-be7f-0702c0ade170/dog-high-five-02.webp",
        "alt": "Poser une patte sur votre poing.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Monter progressivement la main",
        "action": "Remontez le poing de quelques centimètres seulement. Récompensez une patte qui se lève à cette nouvelle hauteur.",
        "animal": "Lever une patte vers le poing plus haut.",
        "position": "Assis stable, une seule patte levée sans basculer le corps.",
        "gesture": "Récompensez une patte qui se lève à cette nouvelle hauteur.",
        "avoid": "Ne saisissez pas la patte et ne forcez jamais le contact. Gardez la main à une hauteur confortable.",
        "tip": "Récompensez les petits mouvements ; quelques essais suffisent avant une pause.",
        "image": "/__l5e/assets-v1/d5725ec7-018c-45eb-82c3-bceaebb4a664/dog-high-five-03.webp",
        "alt": "Lever une patte vers le poing plus haut.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Présenter la paume ouverte",
        "action": "Présentez maintenant une paume ouverte et verticale. Récompensez le contact volontaire de la patte sur la paume.",
        "animal": "Toucher la paume avec une patte.",
        "position": "Assis stable, une seule patte levée sans basculer le corps.",
        "gesture": "Récompensez le contact volontaire de la patte sur la paume.",
        "avoid": "Ne saisissez pas la patte et ne forcez jamais le contact. Gardez la main à une hauteur confortable.",
        "tip": "Récompensez les petits mouvements ; quelques essais suffisent avant une pause.",
        "image": "/__l5e/assets-v1/22281909-4007-4ad7-89df-7bfab48246fd/dog-high-five-04.webp",
        "alt": "Toucher la paume avec une patte.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Associer le mot « tape-là »",
        "action": "Quand le contact est régulier, dites « tape-là » juste avant la levée de patte. Présentez la paume puis récompensez.",
        "animal": "Lever la patte vers la paume au signal.",
        "position": "Assis stable, une seule patte levée sans basculer le corps.",
        "gesture": "Présentez la paume puis récompensez.",
        "avoid": "Ne saisissez pas la patte et ne forcez jamais le contact. Gardez la main à une hauteur confortable.",
        "tip": "Récompensez les petits mouvements ; quelques essais suffisent avant une pause.",
        "image": "/__l5e/assets-v1/80391225-5662-470a-8664-85a90eeebcf8/dog-high-five-05.webp",
        "alt": "Lever la patte vers la paume au signal.",
        "credit": "Illustration originale générée pour PetCare"
      }
    ]
  },
  {
    "species": "cat",
    "id": "basics",
    "name": "Avant de commencer",
    "level": "Les bases",
    "summary": "Une séance sereine, des récompenses au bon moment.",
    "steps": [
      {
        "title": "Choisir un moment calme",
        "action": "Choisissez un moment calme avant un repas habituel, sans priver votre chat de nourriture. Préparez de minuscules friandises appréciées.",
        "animal": "Explorer la récompense sans être contraint.",
        "position": "Corps souple, oreilles naturelles, possibilité de se détourner ou de partir.",
        "gesture": "Préparez de minuscules friandises appréciées.",
        "avoid": "Ne punissez pas, ne retenez pas l’animal et ne prolongez pas une séance s’il se détourne.",
        "tip": "Déduisez les friandises de la ration quotidienne et terminez sur une petite réussite.",
        "image": "/__l5e/assets-v1/877a6163-63ea-4ac5-b4d0-6f825c95edc0/cat-basics-01.webp",
        "alt": "Explorer la récompense sans être contraint.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Associer le clic à une friandise",
        "action": "Faites un clic discret ou dites « oui », puis donnez aussitôt une friandise. Répétez quelques fois sans demander un exercice.",
        "animal": "Associer le clic à une friandise donnée aussitôt.",
        "position": "Corps souple, oreilles naturelles, possibilité de se détourner ou de partir.",
        "gesture": "Répétez quelques fois sans demander un exercice.",
        "avoid": "Ne punissez pas, ne retenez pas l’animal et ne prolongez pas une séance s’il se détourne.",
        "tip": "Déduisez les friandises de la ration quotidienne et terminez sur une petite réussite.",
        "image": "/__l5e/assets-v1/877bf4f9-ee7d-4421-9b3e-ab2a8aa04294/cat-basics-02.webp",
        "alt": "Associer le clic à une friandise donnée aussitôt.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Marquer le comportement au bon instant",
        "action": "Attendez un comportement facile, par exemple regarder votre main. Cliquez à cet instant précis puis récompensez.",
        "animal": "Regarder la main au moment du clic.",
        "position": "Corps souple, oreilles naturelles, possibilité de se détourner ou de partir.",
        "gesture": "Cliquez à cet instant précis puis récompensez.",
        "avoid": "Ne punissez pas, ne retenez pas l’animal et ne prolongez pas une séance s’il se détourne.",
        "tip": "Déduisez les friandises de la ration quotidienne et terminez sur une petite réussite.",
        "image": "/__l5e/assets-v1/b2be5914-ce42-425e-8f77-620780625aa9/cat-basics-03.webp",
        "alt": "Regarder la main au moment du clic.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Garder une séance très courte",
        "action": "Limitez la séance à quelques minutes. Faites une pause après plusieurs réussites et arrêtez tant que le chat participe volontiers.",
        "animal": "Se détendre pendant une courte pause.",
        "position": "Corps souple, oreilles naturelles, possibilité de se détourner ou de partir.",
        "gesture": "Faites une pause après plusieurs réussites et arrêtez tant que le chat participe volontiers.",
        "avoid": "Ne punissez pas, ne retenez pas l’animal et ne prolongez pas une séance s’il se détourne.",
        "tip": "Déduisez les friandises de la ration quotidienne et terminez sur une petite réussite.",
        "image": "/__l5e/assets-v1/230346e1-5b48-46bb-93af-11cef49e3d6b/cat-basics-04.webp",
        "alt": "Se détendre pendant une courte pause.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Respecter le choix du chat",
        "action": "S’il s’éloigne, laissez-le partir. Rangez les friandises et proposez une étape plus simple lors de la prochaine séance.",
        "animal": "S’éloigner librement quand il ne souhaite plus participer.",
        "position": "Corps souple, oreilles naturelles, possibilité de se détourner ou de partir.",
        "gesture": "Rangez les friandises et proposez une étape plus simple lors de la prochaine séance.",
        "avoid": "Ne punissez pas, ne retenez pas l’animal et ne prolongez pas une séance s’il se détourne.",
        "tip": "Déduisez les friandises de la ration quotidienne et terminez sur une petite réussite.",
        "image": "/__l5e/assets-v1/4ca2f5ea-eaf4-4d91-b964-d287cc1b5ebc/cat-basics-05.webp",
        "alt": "S’éloigner librement quand il ne souhaite plus participer.",
        "credit": "Illustration originale générée pour PetCare"
      }
    ]
  },
  {
    "species": "cat",
    "id": "come",
    "name": "Viens",
    "level": "Débutant",
    "summary": "Un retour joyeux pour renforcer confiance et sécurité.",
    "steps": [
      {
        "title": "Choisir un signal toujours identique",
        "action": "Choisissez un signal réservé au rappel : son nom suivi de « viens » ou le bruit d’un sachet. Utilisez toujours le même son.",
        "animal": "Orienter les oreilles et la tête vers le signal.",
        "position": "Corps dirigé vers vous, tête libre et aucune tension sur la longe.",
        "gesture": "Utilisez toujours le même son.",
        "avoid": "Ne grondez jamais l’animal lorsqu’il revient. Ne testez pas le rappel en liberté près d’une route.",
        "tip": "Une voix joyeuse et une belle récompense rendent chaque retour agréable.",
        "image": "/__l5e/assets-v1/5db083a4-8015-4dfb-8fdd-4c39c5f957b4/cat-come-01.webp",
        "alt": "Orienter les oreilles et la tête vers le signal.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Appeler à très courte distance",
        "action": "Appelez depuis une courte distance. Dès que le chat vous rejoint, donnez une petite friandise à hauteur de son museau.",
        "animal": "Vous rejoindre et prendre la friandise.",
        "position": "Corps dirigé vers vous, tête libre et aucune tension sur la longe.",
        "gesture": "Dès que le chat vous rejoint, donnez une petite friandise à hauteur de son museau.",
        "avoid": "Ne grondez jamais l’animal lorsqu’il revient. Ne testez pas le rappel en liberté près d’une route.",
        "tip": "Une voix joyeuse et une belle récompense rendent chaque retour agréable.",
        "image": "/__l5e/assets-v1/539f57c4-a6ef-4673-a21e-40cd47298d86/cat-come-02.webp",
        "alt": "Vous rejoindre et prendre la friandise.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Augmenter la distance progressivement",
        "action": "Appelez ensuite depuis l’entrée de la pièce voisine. Augmentez la distance seulement si les retours restent volontaires.",
        "animal": "Marcher depuis la pièce voisine vers vous.",
        "position": "Corps dirigé vers vous, tête libre et aucune tension sur la longe.",
        "gesture": "Augmentez la distance seulement si les retours restent volontaires.",
        "avoid": "Ne grondez jamais l’animal lorsqu’il revient. Ne testez pas le rappel en liberté près d’une route.",
        "tip": "Une voix joyeuse et une belle récompense rendent chaque retour agréable.",
        "image": "/__l5e/assets-v1/7bad30fa-2440-4524-94bd-6edc288589f9/cat-come-03.webp",
        "alt": "Marcher depuis la pièce voisine vers vous.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Remplacer le leurre par une récompense",
        "action": "Appelez sans montrer la friandise. À son arrivée, récompensez avec une friandise ou un bref jeu à la canne à pêche.",
        "animal": "Venir sans leurre visible, puis profiter du jeu.",
        "position": "Corps dirigé vers vous, tête libre et aucune tension sur la longe.",
        "gesture": "À son arrivée, récompensez avec une friandise ou un bref jeu à la canne à pêche.",
        "avoid": "Ne grondez jamais l’animal lorsqu’il revient. Ne testez pas le rappel en liberté près d’une route.",
        "tip": "Une voix joyeuse et une belle récompense rendent chaque retour agréable.",
        "image": "/__l5e/assets-v1/0882af67-637a-4e20-bb13-9f5ed843ee17/cat-come-04.webp",
        "alt": "Venir sans leurre visible, puis profiter du jeu.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Pratiquer à différents moments",
        "action": "Répétez à différents moments calmes de la journée. Gardez le même signal et récompensez chaque arrivée.",
        "animal": "Venir vers vous au même signal dans un autre contexte.",
        "position": "Corps dirigé vers vous, tête libre et aucune tension sur la longe.",
        "gesture": "Gardez le même signal et récompensez chaque arrivée.",
        "avoid": "Ne grondez jamais l’animal lorsqu’il revient. Ne testez pas le rappel en liberté près d’une route.",
        "tip": "Une voix joyeuse et une belle récompense rendent chaque retour agréable.",
        "image": "/__l5e/assets-v1/48730792-f3fd-4647-b4c4-99bdb8c11fe3/cat-come-05.webp",
        "alt": "Venir vers vous au même signal dans un autre contexte.",
        "credit": "Illustration originale générée pour PetCare"
      }
    ]
  },
  {
    "species": "cat",
    "id": "touch",
    "name": "Touche la cible",
    "level": "Débutant",
    "summary": "Suivre et toucher une cible avec le nez.",
    "steps": [
      {
        "title": "Présenter la cible près du nez",
        "action": "Présentez l’extrémité d’une cible à environ cinq centimètres du nez. Laissez un espace visible : ne touchez jamais le museau.",
        "animal": "Regarder la cible, sans contact à ce stade.",
        "position": "Debout, quatre pattes au sol et un espace visible entre nez et cible.",
        "gesture": "Laissez un espace visible : ne touchez jamais le museau.",
        "avoid": "N’appuyez pas la cible sur le museau. Évitez de poursuivre le chat avec la baguette.",
        "tip": "Gardez la cible immobile et faites une pause après quatre ou cinq contacts.",
        "image": "/__l5e/assets-v1/8bb2f9cc-88f1-4685-a50c-62c599bfd62c/cat-touch-01.webp",
        "alt": "Regarder la cible, sans contact à ce stade.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Récompenser l’approche",
        "action": "Attendez qu’il renifle ou avance vers la cible. Cliquez et récompensez cette approche, même avant le premier contact.",
        "animal": "Avancer ou étirer le nez vers la cible.",
        "position": "Corps avancé, une patte avant en mouvement, nez encore séparé de la cible.",
        "gesture": "Cliquez et récompensez cette approche, même avant le premier contact.",
        "avoid": "N’appuyez pas la cible sur le museau. Évitez de poursuivre le chat avec la baguette.",
        "tip": "Gardez la cible immobile et faites une pause après quatre ou cinq contacts.",
        "image": "/__l5e/assets-v1/2d898e5d-748c-4291-8799-7450f891a3de/cat-touch-02.webp",
        "alt": "Avancer ou étirer le nez vers la cible.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Attendre le contact du nez",
        "action": "Présentez la cible immobile. Cliquez au moment exact où le nez touche doucement son extrémité, puis donnez une friandise.",
        "animal": "Toucher doucement le bout de la cible avec le nez.",
        "position": "Debout, nez au contact léger de l’extrémité de la cible.",
        "gesture": "Cliquez au moment exact où le nez touche doucement son extrémité, puis donnez une friandise.",
        "avoid": "N’appuyez pas la cible sur le museau. Évitez de poursuivre le chat avec la baguette.",
        "tip": "Gardez la cible immobile et faites une pause après quatre ou cinq contacts.",
        "image": "/__l5e/assets-v1/bb548859-8999-4a66-b17c-368aa4fcc7b2/cat-touch-03.webp",
        "alt": "Toucher doucement le bout de la cible avec le nez.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Éloigner la cible de quelques pas",
        "action": "Éloignez la cible de quelques pas, à hauteur du nez. Laissez le chat marcher jusqu’à elle et récompensez le contact.",
        "animal": "Faire quelques pas pour atteindre la cible.",
        "position": "Corps en marche, cible à hauteur du museau devant le chat.",
        "gesture": "Laissez le chat marcher jusqu’à elle et récompensez le contact.",
        "avoid": "N’appuyez pas la cible sur le museau. Évitez de poursuivre le chat avec la baguette.",
        "tip": "Gardez la cible immobile et faites une pause après quatre ou cinq contacts.",
        "image": "/__l5e/assets-v1/3763396c-05ed-4a61-8166-616d55513816/cat-touch-04.webp",
        "alt": "Faire quelques pas pour atteindre la cible.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Ajouter le signal « touche »",
        "action": "Quand le contact est régulier, dites « touche » une fois avant de présenter la cible. Cliquez au contact et récompensez.",
        "animal": "Toucher la cible au signal « touche ».",
        "position": "Quatre pattes au sol, nez touchant la cible présentée.",
        "gesture": "Cliquez au contact et récompensez.",
        "avoid": "N’appuyez pas la cible sur le museau. Évitez de poursuivre le chat avec la baguette.",
        "tip": "Gardez la cible immobile et faites une pause après quatre ou cinq contacts.",
        "image": "/__l5e/assets-v1/4a35d30b-2e57-4b7d-98c8-53892cf3193e/cat-touch-05.webp",
        "alt": "Toucher la cible au signal « touche ».",
        "credit": "Illustration originale générée pour PetCare"
      }
    ]
  },
  {
    "species": "cat",
    "id": "sit",
    "name": "Assis",
    "level": "Débutant",
    "summary": "Une assise volontaire, sans jamais forcer le mouvement.",
    "steps": [
      {
        "title": "Capturer une assise naturelle",
        "action": "Observez une assise naturelle. Dès que les fesses sont au sol, cliquez puis donnez la récompense, sans manipuler le chat.",
        "animal": "S’asseoir naturellement.",
        "position": "Fesses au sol, pattes avant droites et corps détendu.",
        "gesture": "Dès que les fesses sont au sol, cliquez puis donnez la récompense, sans manipuler le chat.",
        "avoid": "Ne poussez jamais l’arrière-train et ne tirez pas sur le collier. Une friandise trop haute provoque un saut.",
        "tip": "Un tapis antidérapant aide à garder les pattes avant stables. Récompensez le plus petit progrès.",
        "image": "/__l5e/assets-v1/6eecf171-ed04-46eb-a1ad-a14796ef1504/cat-sit-01.webp",
        "alt": "S’asseoir naturellement.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Guider doucement au-dessus de la tête",
        "action": "Si besoin, guidez une friandise juste au-dessus et légèrement derrière la tête. Déplacez-la lentement sans toucher le chat.",
        "animal": "Suivre la friandise avec le nez vers le haut.",
        "position": "Tête relevée, pattes arrière commençant à fléchir.",
        "gesture": "Déplacez-la lentement sans toucher le chat.",
        "avoid": "Ne poussez jamais l’arrière-train et ne tirez pas sur le collier. Une friandise trop haute provoque un saut.",
        "tip": "Un tapis antidérapant aide à garder les pattes avant stables. Récompensez le plus petit progrès.",
        "image": "/__l5e/assets-v1/11530a6c-9845-446b-a7c6-419e2cbd2bc2/cat-sit-02.webp",
        "alt": "Suivre la friandise avec le nez vers le haut.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Récompenser le début du mouvement",
        "action": "Récompensez le début de flexion des pattes arrière. Le bassin descend mais n’a pas encore besoin de toucher le sol.",
        "animal": "Fléchir les pattes arrière et commencer à descendre.",
        "position": "Bassin à quelques centimètres du sol, pattes arrière pliées, avant stables.",
        "gesture": "Le bassin descend mais n’a pas encore besoin de toucher le sol.",
        "avoid": "Ne poussez jamais l’arrière-train et ne tirez pas sur le collier. Une friandise trop haute provoque un saut.",
        "tip": "Un tapis antidérapant aide à garder les pattes avant stables. Récompensez le plus petit progrès.",
        "image": "/__l5e/assets-v1/d5c3c6c2-fde1-47f2-a256-f4c2f78587b8/cat-sit-03.webp",
        "alt": "Fléchir les pattes arrière et commencer à descendre.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Répéter sans forcer la posture",
        "action": "Recommencez jusqu’à obtenir une assise volontaire et stable. Marquez et récompensez dès que les fesses sont au sol.",
        "animal": "S’asseoir complètement, sans pression physique.",
        "position": "Fesses complètement au sol, poitrine relevée.",
        "gesture": "Marquez et récompensez dès que les fesses sont au sol.",
        "avoid": "Ne poussez jamais l’arrière-train et ne tirez pas sur le collier. Une friandise trop haute provoque un saut.",
        "tip": "Un tapis antidérapant aide à garder les pattes avant stables. Récompensez le plus petit progrès.",
        "image": "/__l5e/assets-v1/cec24516-6f6c-459a-a2b5-cb8ef68f2456/cat-sit-04.webp",
        "alt": "S’asseoir complètement, sans pression physique.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Nommer le comportement acquis",
        "action": "Dites « assis » juste avant l’assise devenue prévisible. Gardez une main ouverte ou vide et récompensez avec l’autre.",
        "animal": "S’asseoir au signal avec une main sans leurre.",
        "position": "Assis, pattes avant stables, regard vers la main vide.",
        "gesture": "Gardez une main ouverte ou vide et récompensez avec l’autre.",
        "avoid": "Ne poussez jamais l’arrière-train et ne tirez pas sur le collier. Une friandise trop haute provoque un saut.",
        "tip": "Un tapis antidérapant aide à garder les pattes avant stables. Récompensez le plus petit progrès.",
        "image": "/__l5e/assets-v1/2472b38d-80b9-4068-92d5-7b89171f88a4/cat-sit-05.webp",
        "alt": "S’asseoir au signal avec une main sans leurre.",
        "credit": "Illustration originale générée pour PetCare"
      }
    ]
  },
  {
    "species": "cat",
    "id": "high-five",
    "name": "Tape-là",
    "level": "Tour amusant",
    "summary": "Un contact de patte complice, appris tout en douceur.",
    "steps": [
      {
        "title": "Encourager le mouvement de patte",
        "action": "Présentez une friandise dans une main fermée. Cliquez dès qu’une patte se lève ou touche la main, puis récompensez.",
        "animal": "Lever une patte vers votre main fermée.",
        "position": "Assis stable, une seule patte levée sans basculer le corps.",
        "gesture": "Cliquez dès qu’une patte se lève ou touche la main, puis récompensez.",
        "avoid": "Ne saisissez pas la patte et ne forcez jamais le contact. Gardez la main à une hauteur confortable.",
        "tip": "Récompensez les petits mouvements ; quelques essais suffisent avant une pause.",
        "image": "/__l5e/assets-v1/62b50596-f9e4-465f-9b72-f340829dfec7/cat-high-five-01.webp",
        "alt": "Lever une patte vers votre main fermée.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Présenter la paume ouverte",
        "action": "Ouvrez la paume et placez-la légèrement plus haut. Récompensez un contact ou une patte qui s’approche de la paume.",
        "animal": "Approcher une patte de la paume ouverte.",
        "position": "Assis stable, une seule patte levée sans basculer le corps.",
        "gesture": "Récompensez un contact ou une patte qui s’approche de la paume.",
        "avoid": "Ne saisissez pas la patte et ne forcez jamais le contact. Gardez la main à une hauteur confortable.",
        "tip": "Récompensez les petits mouvements ; quelques essais suffisent avant une pause.",
        "image": "/__l5e/assets-v1/10dca9a6-5f64-4d30-ba57-6af5b9c9eb6b/cat-high-five-02.webp",
        "alt": "Approcher une patte de la paume ouverte.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Récompenser chaque contact",
        "action": "Répétez les contacts en courtes séries. Visez environ dix réussites réparties sur plusieurs séances, sans insister.",
        "animal": "Toucher la paume volontairement.",
        "position": "Assis stable, une seule patte levée sans basculer le corps.",
        "gesture": "Visez environ dix réussites réparties sur plusieurs séances, sans insister.",
        "avoid": "Ne saisissez pas la patte et ne forcez jamais le contact. Gardez la main à une hauteur confortable.",
        "tip": "Récompensez les petits mouvements ; quelques essais suffisent avant une pause.",
        "image": "/__l5e/assets-v1/507515c7-0185-444a-9191-5ce2c1a34498/cat-high-five-03.webp",
        "alt": "Toucher la paume volontairement.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Ajouter le signal verbal",
        "action": "Quand la patte rejoint régulièrement la paume, dites « tape-là » avant sa levée. Cliquez au contact puis récompensez.",
        "animal": "Toucher la paume à la suite du signal.",
        "position": "Assis stable, une seule patte levée sans basculer le corps.",
        "gesture": "Cliquez au contact puis récompensez.",
        "avoid": "Ne saisissez pas la patte et ne forcez jamais le contact. Gardez la main à une hauteur confortable.",
        "tip": "Récompensez les petits mouvements ; quelques essais suffisent avant une pause.",
        "image": "/__l5e/assets-v1/8c48c542-6e06-4289-a6ff-27a978c9f44d/cat-high-five-04.webp",
        "alt": "Toucher la paume à la suite du signal.",
        "credit": "Illustration originale générée pour PetCare"
      }
    ]
  },
  {
    "species": "cat",
    "id": "carrier",
    "name": "Entrer dans la caisse",
    "level": "Au quotidien",
    "summary": "Faire de la caisse un endroit familier et rassurant.",
    "steps": [
      {
        "title": "Laisser la caisse ouverte",
        "action": "Laissez la caisse ouverte dans une pièce familière. Ajoutez une couverture confortable et quelques friandises à l’intérieur.",
        "animal": "Explorer la caisse ouverte et sa couverture.",
        "position": "Corps détendu, caisse stable et suffisamment grande pour se retourner.",
        "gesture": "Ajoutez une couverture confortable et quelques friandises à l’intérieur.",
        "avoid": "Ne poussez jamais le chat dans la caisse et ne bloquez pas sa sortie durant l’apprentissage.",
        "tip": "Laissez la caisse accessible entre les séances, pas seulement les jours de vétérinaire.",
        "image": "/__l5e/assets-v1/1577dfda-26c9-4c26-8fc7-811df48a32ef/cat-carrier-01.webp",
        "alt": "Explorer la caisse ouverte et sa couverture.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Guider vers l’entrée sans pousser",
        "action": "Présentez une cible près de l’entrée pour inviter le chat à s’approcher. Cliquez et récompensez, sans bloquer la sortie.",
        "animal": "Approcher l’entrée en suivant la cible.",
        "position": "Corps détendu, caisse stable et suffisamment grande pour se retourner.",
        "gesture": "Cliquez et récompensez, sans bloquer la sortie.",
        "avoid": "Ne poussez jamais le chat dans la caisse et ne bloquez pas sa sortie durant l’apprentissage.",
        "tip": "Laissez la caisse accessible entre les séances, pas seulement les jours de vétérinaire.",
        "image": "/__l5e/assets-v1/5885523e-6b39-4402-949d-ce27fb58cf35/cat-carrier-02.webp",
        "alt": "Approcher l’entrée en suivant la cible.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Récompenser l’entrée volontaire",
        "action": "Récompensez une première patte à l’intérieur, puis l’entrée complète. Laissez le chat rester ou ressortir librement.",
        "animal": "Entrer volontairement puis rester brièvement.",
        "position": "Corps détendu, caisse stable et suffisamment grande pour se retourner.",
        "gesture": "Laissez le chat rester ou ressortir librement.",
        "avoid": "Ne poussez jamais le chat dans la caisse et ne bloquez pas sa sortie durant l’apprentissage.",
        "tip": "Laissez la caisse accessible entre les séances, pas seulement les jours de vétérinaire.",
        "image": "/__l5e/assets-v1/e7173cab-8edf-4f48-9e62-3d02796c95ed/cat-carrier-03.webp",
        "alt": "Entrer volontairement puis rester brièvement.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Fermer la porte une seconde",
        "action": "Quand il reste calme, fermez la porte une seconde, donnez une friandise puis rouvrez. Allongez la durée très progressivement.",
        "animal": "Rester calme à l’intérieur durant la fermeture très brève.",
        "position": "Corps détendu, caisse stable et suffisamment grande pour se retourner.",
        "gesture": "Allongez la durée très progressivement.",
        "avoid": "Ne poussez jamais le chat dans la caisse et ne bloquez pas sa sortie durant l’apprentissage.",
        "tip": "Laissez la caisse accessible entre les séances, pas seulement les jours de vétérinaire.",
        "image": "/__l5e/assets-v1/b9176e7a-875c-41e6-b847-4acc5de37844/cat-carrier-04.webp",
        "alt": "Rester calme à l’intérieur durant la fermeture très brève.",
        "credit": "Illustration originale générée pour PetCare"
      },
      {
        "title": "Soulever puis déplacer doucement",
        "action": "Soulevez la caisse de quelques centimètres en soutenant sa base, puis faites quelques pas lents. Reposez-la et récompensez.",
        "animal": "Rester confortablement installé pendant un léger déplacement.",
        "position": "Corps détendu, caisse stable et suffisamment grande pour se retourner.",
        "gesture": "Reposez-la et récompensez.",
        "avoid": "Ne poussez jamais le chat dans la caisse et ne bloquez pas sa sortie durant l’apprentissage.",
        "tip": "Laissez la caisse accessible entre les séances, pas seulement les jours de vétérinaire.",
        "image": "/__l5e/assets-v1/8331efe9-25a0-4e18-a1f1-5045cdb79af4/cat-carrier-05.webp",
        "alt": "Rester confortablement installé pendant un léger déplacement.",
        "credit": "Illustration originale générée pour PetCare"
      }
    ]
  }
];
