<script>
  import { fly } from 'svelte/transition'
</script>


<div class="bg-dark object-cover h-screen w-full absolute"/>

<section class="flex h-screen relative text-center text-white">
  <div class="uppercase tracking-widest" in:fly|local={{y: 40, duration: 800, }}>
    Boring Stuff
  </div>

  <div class="px-2 text-size-10 md:text-size-18" in:fly|local={{y: 40, duration: 800, delay: 100}}>
    Rechtliches
  </div>
</section>


<div class="lg:grid grid-cols-2 mx-auto container mt-32 gap-12">
<div class="relative">
  <div class="mod margin-top">
    <h2 class="mb-4">Impressum</h2>
    <p class="imprint-font">MAG - Grundbesitz Bonn<br>
      Heinrich-Brüning-Straße 16<br>
      53113 Bonn</p>
      
      <p class="imprint-font">t: 0700-00ASBECK <br>
      t: +49 (0) 228 - 65 99 88 <br>
      f: +49 (0) 228 - 63 65 83 </p>
      
      <p class="imprint-font">
      E-Mail:
      <a href="mailto:info@asbeck.com">
      info@asbeck.com
      </a><br>
      Internet: <a href="https://www.asbeck.com">www.asbeck.com</a>
      </p>
            
      
      <p class="imprint-font">Design und Realisation<br>
      <a href="https://www.cdmn.de">CDMN GmbH</a></p>
      
      <p class="imprint-font">Copyight:<br>
      Alle auf dieser Internetseite veröffentlichten Informationen und Beiträge sind urheberrechtlich geschützt.
      </p>

      <h2 class="mb-4 mt-8">DATENSCHUTZ</h2>

      Sofern innerhalb des Internetangebotes die Möglichkeit zur Eingabe persönlicher oder geschäftlicher Daten (E-Mail Adressen, Namen, Anschriften) besteht oder Daten per E-Mail an den Autor versandt werden, so erfolgt die Preisgabe dieser Daten seitens des Nutzers auf ausdrücklich freiwilliger Basis. Soweit im Hinblick auf das Websiteangebot erforderlich, werden die Daten unter Einhaltung des Bundesdatenschutzgesetzes (BDSG) elektronisch verarbeitet. Der Absender der Daten erklärt gleichzeitig mit deren Angabe seine Einwilligung zur elektronischen Verarbeitung. Der Absender kann die Einwilligung zur Speicherung und Verwendung der Daten jederzeit widerrufen.
  </div>
</div>
  <div class="relative">
  <h2 class="mb-4">Rechtlicher Hinweis</h2>
    <p class="imprint-font">1. Inhalt des Onlineangebotes</p>
    <p class="imprint-font"><b>MAG</b> übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen <b>MAG</b>, welche sich auf Schäden materieller oder immaterieller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens <b>MAG</b> kein vorsätzliches oder grob fahrlässiges Verschulden vorliegt.</p>
    <p class="imprint-font">Alle Angebote sind freibleibend und unverbindlich. <b>MAG</b> behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.</p>
    <p class="imprint-font">Die Informationen und Daten dieses Onlineangebotes dienen dem Nutzer ausschließlich zu Informationszwecken und zum persönlichen Gebrauch.</p>
    <p class="imprint-font">2. Verweise und Links</p>
    <p class="imprint-font">Bei direkten oder indirekten Verweisen auf fremde Internetseiten ("Links"), die außerhalb des Verantwortungsbereichs von <b>MAG</b> liegen, ist jede Haftungsverpflichtung von <b>MAG</b> ausgeschlossen.</p>
    <p class="imprint-font"><b>MAG</b> erklärt ausdrücklich, dass ihr keine Informationen über rechtswidrige Inhalte auf den in vorstehender Ziffer 1 genannten Seiten vorliegen. <b>MAG</b> hat keinerlei Einfluss auf deren aktuelle und zukünftige Gestaltung und auf deren Inhalte. Sie überprüft auch nicht die Inhalte der Seiten, die nach der Linksetzung verändert wurden. Dies gilt für alle innerhalb der Website gesetzten Verweise und Links auf Dritte sowie für Fremdeinträge in Gästebüchern, Diskussionsforen oder Mailing-Listen. Für fehlerhafte, rechtswidrige oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung solcher Informationen entstehen, haftet alleine der Anbieter der Website, auf welche verwiesen wurde.
    </p><p class="imprint-font">3. Urheber- und Kennzeichenrecht</p>
    <p class="imprint-font"><b>MAG</b> weist ausdrücklich darauf hin, dass die auf der Website veröffentlichten Grafiken, Animationen, Fotos und Texte urheberrechtlich oder in anderer Form des gewerblichen Rechtsschutzes - Marken, Geschmacksmuster etc. – geschützt sind. Die zugrundeliegenden Rechte liegen allein bei <b>MAG</b> oder bei Dritten, die <b>MAG</b> das Recht zur Veröffentlichung auf der Website eingeräumt haben. Eine Vervielfältigung oder Verwendung dieser Grafiken, Animationen, Fotos und Texte in anderen elektronischen oder gedruckten Publikationen ist nicht gestattet, es sei denn, <b>MAG</b> erteilt hierzu ihre ausdrückliche schriftliche Zustimmung.</p>
    <p class="imprint-font">4. Sonstiges</p>
    <p class="imprint-font">Sollten einzelne Klauseln unwirksam sein oder werden, berührt dies die Wirksamkeit der anderen Klauseln nicht. Es wird die ausschließliche Anwendbarkeit deutschen Rechts vereinbart. </p>
  </div>
<!-- 	
<p class="imprint-font">4. Datenschutz</p>
    <p class="imprint-font">Sofern innerhalb des Internetangebotes die Möglichkeit zur Eingabe persönlicher oder geschäftlicher Daten (E-Mail Adressen, Namen, Anschriften) besteht oder Daten per E-Mail an den Autor versandt werden, so erfolgt die Preisgabe dieser Daten seitens des Nutzers auf ausdrücklich freiwilliger Basis. Soweit im Hinblick auf das Websiteangebot erforderlich, werden die Daten unter Einhaltung des Bundesdatenschutzgesetzes (BDSG) elektronisch verarbeitet. Der Absender der Daten erklärt gleichzeitig mit deren Angabe seine Einwilligung zur elektronischen Verarbeitung. Der Absender kann die Einwilligung zur Speicherung und Verwendung der Daten jederzeit widerrufen.</p>
   -->  	

</div>

<style>
  p {
    margin-bottom: 1rem;
  }
</style>