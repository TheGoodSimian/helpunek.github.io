const germanSentences = [
      "Als Zarathustra dreissig Jahr alt war, verliess er seine Heimat und den See seiner Heimat und ging in das Gebirge. Hier genoss er seines Geistes und seiner Einsamkeit und wurde dessen zehn Jahr nicht müde. Endlich aber verwandelte sich sein Herz,—und eines Morgens stand er mit der Morgenröthe auf, trat vor die Sonne hin und sprach zu ihr also:",
      "Du grosses Gestirn! Was wäre dein Glück, wenn du nicht Die hättest, welchen du leuchtest!",
      "Zehn Jahre kamst du hier herauf zu meiner Höhle: du würdest deines Lichtes und dieses Weges satt geworden sein, ohne mich, meinen Adler und meine Schlange.",
      "Aber wir warteten deiner an jedem Morgen, nahmen dir deinen Überfluss ab und segneten dich dafür.",
      "Siehe! Ich bin meiner Weisheit überdrüssig, wie die Biene, die des Honigs zu viel gesammelt hat, ich bedarf der Hände, die sich ausstrecken.",
      "Ich möchte verschenken und austheilen, bis die Weisen unter den Menschen wieder einmal ihrer Thorheit und die Armen einmal ihres Reichthums froh geworden sind.",
      "Dazu muss ich in die Tiefe steigen: wie du des Abends thust, wenn du hinter das Meer gehst und noch der Unterwelt Licht bringst, du überreiches Gestirn!",
      "Ich muss, gleich dir, untergehen, wie die Menschen es nennen, zu denen ich hinab will.",
      "So segne mich denn, du ruhiges Auge, das ohne Neid auch ein allzugrosses Glück sehen kann!",
      "Segne den Becher, welcher überfliessen will, dass das Wasser golden aus ihm fliesse und überallhin den Abglanz deiner Wonne trage!",
      "Siehe! Dieser Becher will wieder leer werden, und Zarathustra will wieder Mensch werden.",
      "—Also begann Zarathustra’s Untergang."

        
      // Add more German sentences here
    ];

    const polishSentences = [
      "Gdy Zaratustra trzydziestu lat dożył, opuścił kraj swój i jezioro ojczyste i poszedł w góry. Tu radował się duchowi swemu i samotności swej, a dziesięć lat tak żyjąc, nie umęczył się nimi. Wreszcie przemieniło się serce jego, — i pewnego zaranku wstawszy wraz z jutrznią, wystąpił przed słońce i tak rzekł do niego:",
      "— Światłości ty olbrzymia! czymże byłoby twe szczęście, gdybyś nie miała tych, komu jaśniejesz?",
      "Dziesięć lat wchodziłaś tu do mej jaskini; znużyłabyś się i jaśnieniem twym, i drogą twą beze mnie, bez mego orła i bez węża mego.",
      "Lecz my oto oczekiwaliśmy ciebie każdego zaranku i, biorąc nadmiar światła twego, błogosławiliśmy cię za to.",
      "Spojrzyj! Jam jest umęczony mą mądrością jako pszczoła, co za wiele miodu zebrała; pożądam rąk, które by się po nią wyciągnęły.",
      "Pragnąłbym rozdarowywać i obdzielać, aż póki mądrych pośród ludzi nie uraduje ponownie własne szaleństwo, a ubogich własne bogactwo.",
      "Lecz na to w głębię znijść muszę, jako ty co wieczór to czynisz, gdy poza morze wstępujesz, aby i podziemnym światom swej udzielić jasności, — światło ty przehojne!",
      "Oto muszę, jako ty, zajść, wedle ludzkiego nazwania, znijść ku tym, których wola ma pożąda.",
      "Pobłogosławże ty mnie, wejrzenie spokojne, co nawet na nadmiar szczęścia bez zawiści patrzeć możesz!",
      "Błogosław kielich przepełniony, aby złotymi rozpłynął się strugi i twej świetności odblask wszędzie poroznosił.",
      "Spojrzyj! kielich ten chce znowu być opróżnion i Zaratustra chce znów być człowiekiem.",
      "— Tako się poczęło znijście Zaratustry."

      // Add more Polish sentences here
    ];

    function switchSentence(index) {
      const sentenceContainer = document.getElementsByClassName("sentenceContainer")[index];
      const currentSentence = sentenceContainer.textContent.trim();

      if (currentSentence === germanSentences[index]) {
        sentenceContainer.textContent = polishSentences[index];
      } else {
        sentenceContainer.textContent = germanSentences[index];
      }
    
    }
    
    const sentenceContainers = document.getElementsByClassName("sentenceContainer");

    function populateSentences() {
      for (let i = 0; i < sentenceContainers.length; i++) {
        sentenceContainers[i].textContent = germanSentences[i];
      }
    }

    populateSentences();
