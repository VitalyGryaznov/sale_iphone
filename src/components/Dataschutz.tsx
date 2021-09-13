import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import Footer from "./Footer";
import "./App.css";

function Dataschutz() {
  return (
    <div>
      <h2>Datenschutzerklärung</h2>
      <p>
        Personenbezogene Daten (nachfolgend zumeist nur „Daten“ genannt) werden
        von uns nur im Rahmen der Erforderlichkeit sowie zum Zwecke der
        Bereitstellung eines funktionsfähigen und nutzerfreundlichen
        Internetauftritts, inklusive seiner Inhalte und der dort angebotenen
        Leistungen, verarbeitet.
      </p>
      <p>
        Gemäß Art. 4 Ziffer 1. der Verordnung (EU) 2016/679, also der
        Datenschutz-Grundverordnung (nachfolgend nur „DSGVO“ genannt), gilt als
        „Verarbeitung“ jeder mit oder ohne Hilfe automatisierter Verfahren
        ausgeführter Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit
        personenbezogenen Daten, wie das Erheben, das Erfassen, die
        Organisation, das Ordnen, die Speicherung, die Anpassung oder
        Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung
        durch Übermittlung, Verbreitung oder eine andere Form der
        Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung,
        das Löschen oder die Vernichtung.
      </p>
      <p>
        Mit der nachfolgenden Datenschutzerklärung informieren wir Sie
        insbesondere über Art, Umfang, Zweck, Dauer und Rechtsgrundlage der
        Verarbeitung personenbezogener Daten, soweit wir entweder allein oder
        gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung
        entscheiden. Zudem informieren wir Sie nachfolgend über die von uns zu
        Optimierungszwecken sowie zur Steigerung der Nutzungsqualität
        eingesetzten Fremdkomponenten, soweit hierdurch Dritte Daten in wiederum
        eigener Verantwortung verarbeiten.
      </p>
      <p>Unsere Datenschutzerklärung ist wie folgt gegliedert:</p>
      <p>
        I. Informationen über uns als Verantwortliche
        <br />
        II. Rechte der Nutzer und Betroffenen
        <br />
        III. Informationen zur Datenverarbeitung
      </p>
      <h3>I. Informationen über uns als Verantwortliche</h3>
      <p>
        Verantwortlicher Anbieter dieses Internetauftritts im
        datenschutzrechtlichen Sinne ist:
      </p>
      <p>
        <span>
          Vitalii Griaznov
          <br />
          Bergedorfer Str.50
          <br />
          21033 Hamburg
          <br />
          Deutschland
        </span>
      </p>
      <p>
        <span>
          Telefon: +49-15256922716
          <br />
          Telefax: -<br />
          E-Mail: gryaznovvitaly@gmail.com
        </span>
      </p>

      <h3>II. Rechte der Nutzer und Betroffenen</h3>
      <p>
        Mit Blick auf die nachfolgend noch näher beschriebene Datenverarbeitung
        haben die Nutzer und Betroffenen das Recht
      </p>
      <ul>
        <li>
          auf Bestätigung, ob sie betreffende Daten verarbeitet werden, auf
          Auskunft über die verarbeiteten Daten, auf weitere Informationen über
          die Datenverarbeitung sowie auf Kopien der Daten (vgl. auch Art. 15
          DSGVO);
        </li>
        <li>
          auf Berichtigung oder Vervollständigung unrichtiger bzw.
          unvollständiger Daten (vgl. auch Art. 16 DSGVO);
        </li>
        <li>
          auf unverzügliche Löschung der sie betreffenden Daten (vgl. auch Art.
          17 DSGVO), oder, alternativ, soweit eine weitere Verarbeitung gemäß
          Art. 17 Abs. 3 DSGVO erforderlich ist, auf Einschränkung der
          Verarbeitung nach Maßgabe von Art. 18 DSGVO;
        </li>
        <li>
          auf Erhalt der sie betreffenden und von ihnen bereitgestellten Daten
          und auf Übermittlung dieser Daten an andere Anbieter/Verantwortliche
          (vgl. auch Art. 20 DSGVO);
        </li>
        <li>
          auf Beschwerde gegenüber der Aufsichtsbehörde, sofern sie der Ansicht
          sind, dass die sie betreffenden Daten durch den Anbieter unter Verstoß
          gegen datenschutzrechtliche Bestimmungen verarbeitet werden (vgl. auch
          Art. 77 DSGVO).
        </li>
      </ul>
      <p>
        Darüber hinaus ist der Anbieter dazu verpflichtet, alle Empfänger, denen
        gegenüber Daten durch den Anbieter offengelegt worden sind, über jedwede
        Berichtigung oder Löschung von Daten oder die Einschränkung der
        Verarbeitung, die aufgrund der Artikel 16, 17 Abs. 1, 18 DSGVO erfolgt,
        zu unterrichten. Diese Verpflichtung besteht jedoch nicht, soweit diese
        Mitteilung unmöglich oder mit einem unverhältnismäßigen Aufwand
        verbunden ist. Unbeschadet dessen hat der Nutzer ein Recht auf Auskunft
        über diese Empfänger.
      </p>
      <p>
        <strong>
          Ebenfalls haben die Nutzer und Betroffenen nach Art. 21 DSGVO das
          Recht auf Widerspruch gegen die künftige Verarbeitung der sie
          betreffenden Daten, sofern die Daten durch den Anbieter nach Maßgabe
          von Art. 6 Abs. 1 lit. f) DSGVO verarbeitet werden. Insbesondere ist
          ein Widerspruch gegen die Datenverarbeitung zum Zwecke der
          Direktwerbung statthaft.
        </strong>
      </p>
      <h3>III. Informationen zur Datenverarbeitung</h3>
      <p>
        Ihre bei Nutzung unseres Internetauftritts verarbeiteten Daten werden
        gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt, der
        Löschung der Daten keine gesetzlichen Aufbewahrungspflichten
        entgegenstehen und nachfolgend keine anderslautenden Angaben zu
        einzelnen Verarbeitungsverfahren gemacht werden.
      </p>
      <h4>Serverdaten</h4>
      <p>
        Aus technischen Gründen, insbesondere zur Gewährleistung eines sicheren
        und stabilen Internetauftritts, werden Daten durch Ihren
        Internet-Browser an uns bzw. an unseren Webspace-Provider übermittelt.
        Mit diesen sog. Server-Logfiles werden u.a. Typ und Version Ihres
        Internetbrowsers, das Betriebssystem, die Website, von der aus Sie auf
        unseren Internetauftritt gewechselt haben (Referrer URL), die Website(s)
        unseres Internetauftritts, die Sie besuchen, Datum und Uhrzeit des
        jeweiligen Zugriffs sowie die IP-Adresse des Internetanschlusses, von
        dem aus die Nutzung unseres Internetauftritts erfolgt, erhoben.
      </p>
      <p>
        Diese so erhobenen Daten werden vorrübergehend gespeichert, dies jedoch
        nicht gemeinsam mit anderen Daten von Ihnen.
      </p>
      <p>
        Diese Speicherung erfolgt auf der Rechtsgrundlage von Art. 6 Abs. 1 lit.
        f) DSGVO. Unser berechtigtes Interesse liegt in der Verbesserung,
        Stabilität, Funktionalität und Sicherheit unseres Internetauftritts.
      </p>
      <p>
        Die Daten werden spätestens nach sieben Tage wieder gelöscht, soweit
        keine weitere Aufbewahrung zu Beweiszwecken erforderlich ist.
        Andernfalls sind die Daten bis zur endgültigen Klärung eines Vorfalls
        ganz oder teilweise von der Löschung ausgenommen.
      </p>
      <h4>Cookies</h4>
      <h5>a) Sitzungs-Cookies/Session-Cookies</h5>
      <p>
        Wir verwenden mit unserem Internetauftritt sog. Cookies. Cookies sind
        kleine Textdateien oder andere Speichertechnologien, die durch den von
        Ihnen eingesetzten Internet-Browser auf Ihrem Endgerät ablegt und
        gespeichert werden. Durch diese Cookies werden im individuellen Umfang
        bestimmte Informationen von Ihnen, wie beispielsweise Ihre Browser- oder
        Standortdaten oder Ihre IP-Adresse, verarbeitet. &nbsp;
      </p>
      <p>
        Durch diese Verarbeitung wird unser Internetauftritt
        benutzerfreundlicher, effektiver und sicherer, da die Verarbeitung bspw.
        die Wiedergabe unseres Internetauftritts in unterschiedlichen Sprachen
        oder das Angebot einer Warenkorbfunktion ermöglicht.
      </p>
      <p>
        Rechtsgrundlage dieser Verarbeitung ist Art. 6 Abs. 1 lit b.) DSGVO,
        sofern diese Cookies Daten zur Vertragsanbahnung oder Vertragsabwicklung
        verarbeitet werden.
      </p>
      <p>
        Falls die Verarbeitung nicht der Vertragsanbahnung oder
        Vertragsabwicklung dient, liegt unser berechtigtes Interesse in der
        Verbesserung der Funktionalität unseres Internetauftritts.
        Rechtsgrundlage ist in dann Art. 6 Abs. 1 lit. f) DSGVO.
      </p>
      <p>
        Mit Schließen Ihres Internet-Browsers werden diese Session-Cookies
        gelöscht.
      </p>
      <h5>b) Drittanbieter-Cookies</h5>
      <p>
        Gegebenenfalls werden mit unserem Internetauftritt auch Cookies von
        Partnerunternehmen, mit denen wir zum Zwecke der Werbung, der Analyse
        oder der Funktionalitäten unseres Internetauftritts zusammenarbeiten,
        verwendet.
      </p>
      <p>
        Die Einzelheiten hierzu, insbesondere zu den Zwecken und den
        Rechtsgrundlagen der Verarbeitung solcher Drittanbieter-Cookies,
        entnehmen Sie bitte den nachfolgenden Informationen.
      </p>
      <h5>c) Beseitigungsmöglichkeit</h5>
      <p>
        Sie können die Installation der Cookies durch eine Einstellung Ihres
        Internet-Browsers verhindern oder einschränken. Ebenfalls können Sie
        bereits gespeicherte Cookies jederzeit löschen. Die hierfür
        erforderlichen Schritte und Maßnahmen hängen jedoch von Ihrem konkret
        genutzten Internet-Browser ab. Bei Fragen benutzen Sie daher bitte die
        Hilfefunktion oder Dokumentation Ihres Internet-Browsers oder wenden
        sich an dessen Hersteller bzw. Support. Bei sog. Flash-Cookies kann die
        Verarbeitung allerdings nicht über die Einstellungen des Browsers
        unterbunden werden. Stattdessen müssen Sie insoweit die Einstellung
        Ihres Flash-Players ändern. Auch die hierfür erforderlichen Schritte und
        Maßnahmen hängen von Ihrem konkret genutzten Flash-Player ab. Bei Fragen
        benutzen Sie daher bitte ebenso die Hilfefunktion oder Dokumentation
        Ihres Flash-Players oder wenden sich an den Hersteller bzw.
        Benutzer-Support.
      </p>
      <p>
        Sollten Sie die Installation der Cookies verhindern oder einschränken,
        kann dies allerdings dazu führen, dass nicht sämtliche Funktionen
        unseres Internetauftritts vollumfänglich nutzbar sind.
      </p>
      <h4>Vertragsabwicklung</h4>
      <p>
        Die von Ihnen zur Inanspruchnahme unseres Waren- und/oder
        Dienstleistungsangebots übermittelten Daten werden von uns zum Zwecke
        der Vertragsabwicklung verarbeitet und sind insoweit erforderlich.
        Vertragsschluss und Vertragsabwicklung sind ohne Bereitstellung Ihrer
        Daten nicht möglich.
      </p>
      <p>
        Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b) DSGVO.
      </p>
      <p>
        Wir löschen die Daten mit vollständiger Vertragsabwicklung, müssen dabei
        aber die steuer- und handelsrechtlichen Aufbewahrungsfristen beachten.
      </p>
      <p>
        Im Rahmen der Vertragsabwicklung geben wir Ihre Daten an das mit der
        Warenlieferung beauftragte Transportunternehmen oder an den
        Finanzdienstleister weiter, soweit die Weitergabe zur Warenauslieferung
        oder zu Bezahlzwecken erforderlich ist.
      </p>
      <p>
        Rechtsgrundlage für die Weitergabe der Daten ist dann Art. 6 Abs. 1 lit.
        b) DSGVO.
      </p>
      <h4>Facebook</h4>
      <p>
        Zur Bewerbung unserer Produkte und Leistungen sowie zur Kommunikation
        mit Interessenten oder Kunden betreiben wir eine Firmenpräsenz auf der
        Plattform Facebook.
      </p>
      <p>
        Auf dieser Social-Media-Plattform sind wir gemeinsam mit der Facebook
        Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2
        Ireland, verantwortlich.
      </p>
      <p>
        Der Datenschutzbeauftragte von Facebook kann über ein Kontaktformular
        erreicht werden:
      </p>
      <p>
        <a
          href="https://www.facebook.com/help/contact/540977946302970"
          target="_blank"
          rel="noopener"
          aria-invalid="true"
        >
          https://www.facebook.com/help/contact/540977946302970
        </a>
      </p>
      <p>
        Die gemeinsame Verantwortlichkeit haben wir in einer Vereinbarung
        bezüglich der jeweiligen Verpflichtungen im Sinne der DSGVO geregelt.
        Diese Vereinbarung, aus der sich die gegenseitigen Verpflichtungen
        ergeben, ist unter dem folgenden Link abrufbar:
      </p>
      <p>
        <a
          href="https://www.facebook.com/legal/terms/page_controller_addendum"
          target="_blank"
          rel="noopener"
        >
          https://www.facebook.com/legal/terms/page_controller_addendum
        </a>
      </p>
      <p>
        Rechtsgrundlage für die dadurch erfolgende und nachfolgend
        wiedergegebene Verarbeitung von personenbezogenen Daten ist Art. 6 Abs.
        1 lit. f DSGVO. Unser berechtigtes Interesse besteht an der Analyse, der
        Kommunikation sowie dem Absatz und der Bewerbung unserer Produkte und
        Leistungen.
      </p>
      <p>
        Rechtsgrundlage kann auch eine Einwilligung des Nutzers gemäß Art. 6
        Abs. 1 lit. a DSGVO gegenüber dem Plattformbetreiber sein. Die
        Einwilligung hierzu kann der Nutzer nach Art. 7 Abs. 3 DSGVO jederzeit
        durch eine Mitteilung an den Plattformbetreiber für die Zukunft
        widerrufen.
      </p>
      <p>
        Bei dem Aufruf unseres Onlineauftritts auf der Plattform Facebook werden
        von der Facebook Ireland Ltd. als Betreiberin der Plattform in der EU
        Daten des Nutzers (z.B. persönliche Informationen, IP-Adresse etc.)
        verarbeitet.
      </p>
      <p>
        Diese Daten des Nutzers dienen zu statistischen Informationen über die
        Inanspruchnahme unserer Firmenpräsenz auf Facebook. Die Facebook Ireland
        Ltd. nutzt diese Daten zu Marktforschungs- und Werbezwecken sowie zur
        Erstellung von Profilen der Nutzer. Anhand dieser Profile ist es der
        Facebook Ireland Ltd. beispielsweise möglich, die Nutzer innerhalb und
        außerhalb von Facebook interessenbezogen zu bewerben. Ist der Nutzer zum
        Zeitpunkt des Aufrufes in seinem Account auf Facebook eingeloggt, kann
        die Facebook Ireland Ltd. zudem die Daten mit dem jeweiligen Nutzerkonto
        verknüpfen.
      </p>
      <p>
        Im Falle einer Kontaktaufnahme des Nutzers über Facebook werden die bei
        dieser Gelegenheit eingegebenen personenbezogenen Daten des Nutzers zur
        Bearbeitung der Anfrage genutzt. Die Daten des Nutzers werden bei uns
        gelöscht, sofern die Anfrage des Nutzers abschließend beantwortet wurde
        und keine gesetzlichen Aufbewahrungspflichten, wie z.B. bei einer
        anschließenden Vertragsabwicklung, entgegenstehen.
      </p>
      <p>
        Zur Verarbeitung der Daten werden von der Facebook Ireland Ltd. ggf.
        auch Cookies gesetzt.
      </p>
      <p>
        Sollte der Nutzer mit dieser Verarbeitung nicht einverstanden sein, so
        besteht die Möglichkeit, die Installation der Cookies durch eine
        entsprechende Einstellung des Browsers zu verhindern. Bereits
        gespeicherte Cookies können ebenfalls jederzeit gelöscht werden. Die
        Einstellungen hierzu sind vom jeweiligen Browser abhängig. Bei
        Flash-Cookies lässt sich die Verarbeitung nicht über die Einstellungen
        des Browsers unterbinden, sondern durch die entsprechende Einstellung
        des Flash-Players. Sollte der Nutzer die Installation der Cookies
        verhindern oder einschränken, kann dies dazu führen, dass nicht
        sämtliche Funktionen von Facebook vollumfänglich nutzbar sind.
      </p>
      <p>
        Näheres zu den Verarbeitungstätigkeiten, deren Unterbindung und zur
        Löschung der von Facebook verarbeiteten Daten finden sich in der
        Datenrichtlinie von Facebook:
      </p>
      <p>
        <a
          href="https://www.facebook.com/privacy/explanation"
          target="_blank"
          rel="noopener"
        >
          https://www.facebook.com/privacy/explanation
        </a>
      </p>
      <p>
        Es ist nicht ausgeschlossen, dass die Verarbeitung durch die Facebook
        Ireland Ltd. auch über die Facebook Inc., 1601 Willow Road, Menlo Park,
        California 94025 in den USA erfolgt.
      </p>
      <h4>Instagram</h4>
      <p>
        Zur Bewerbung unserer Produkte und Leistungen sowie zur Kommunikation
        mit Interessenten oder Kunden betreiben wir eine Firmenpräsenz auf der
        Plattform Instagram.
      </p>
      <p>
        Auf dieser Social-Media-Plattform sind wir gemeinsam mit der Facebook
        Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2
        Ireland, verantwortlich.
      </p>
      <p>
        Der Datenschutzbeauftragte von Instagram kann über ein Kontaktformular
        erreicht werden:
      </p>
      <p>
        <a
          href="https://www.facebook.com/help/contact/540977946302970"
          target="_blank"
          rel="noopener"
          aria-invalid="true"
        >
          https://www.facebook.com/help/contact/540977946302970
        </a>
      </p>
      <p>
        Die gemeinsame Verantwortlichkeit haben wir in einer Vereinbarung
        bezüglich der jeweiligen Verpflichtungen im Sinne der DSGVO geregelt.
        Diese Vereinbarung, aus der sich die gegenseitigen Verpflichtungen
        ergeben, ist unter dem folgenden Link abrufbar:
      </p>
      <p>
        <a
          href="https://www.facebook.com/legal/terms/page_controller_addendum"
          target="_blank"
          rel="noopener"
        >
          https://www.facebook.com/legal/terms/page_controller_addendum
        </a>
      </p>
      <p>
        Rechtsgrundlage für die dadurch erfolgende und nachfolgend
        wiedergegebene Verarbeitung von personenbezogenen Daten ist Art. 6 Abs.
        1 lit. f DSGVO. Unser berechtigtes Interesse besteht an der Analyse, der
        Kommunikation sowie dem Absatz und der Bewerbung unserer Produkte und
        Leistungen.
      </p>
      <p>
        Rechtsgrundlage kann auch eine Einwilligung des Nutzers gemäß Art. 6
        Abs. 1 lit. a DSGVO gegenüber dem Plattformbetreiber sein. Die
        Einwilligung hierzu kann der Nutzer nach Art. 7 Abs. 3 DSGVO jederzeit
        durch eine Mitteilung an den Plattformbetreiber für die Zukunft
        widerrufen.
      </p>
      <p>
        Bei dem Aufruf unseres Onlineauftritts auf der Plattform Instagram
        werden von der Facebook Ireland Ltd. als Betreiberin der Plattform in
        der EU Daten des Nutzers (z.B. persönliche Informationen, IP-Adresse
        etc.) verarbeitet.
      </p>
      <p>
        Diese Daten des Nutzers dienen zu statistischen Informationen über die
        Inanspruchnahme unserer Firmenpräsenz auf Instagram. Die Facebook
        Ireland Ltd. nutzt diese Daten zu Marktforschungs- und Werbezwecken
        sowie zur Erstellung von Profilen der Nutzer. Anhand dieser Profile ist
        es der Facebook Ireland Ltd. beispielsweise möglich, die Nutzer
        innerhalb und außerhalb von Instagram interessenbezogen zu bewerben. Ist
        der Nutzer zum Zeitpunkt des Aufrufes in seinem Account auf Instagram
        eingeloggt, kann die Facebook Ireland Ltd. zudem die Daten mit dem
        jeweiligen Nutzerkonto verknüpfen.
      </p>
      <p>
        Im Falle einer Kontaktaufnahme des Nutzers über Instagram werden die bei
        dieser Gelegenheit eingegebenen personenbezogenen Daten des Nutzers zur
        Bearbeitung der Anfrage genutzt. Die Daten des Nutzers werden bei uns
        gelöscht, sofern die Anfrage des Nutzers abschließend beantwortet wurde
        und keine gesetzlichen Aufbewahrungspflichten, wie z.B. bei einer
        anschließenden Vertragsabwicklung, entgegenstehen.
      </p>
      <p>
        Zur Verarbeitung der Daten werden von der Facebook Ireland Ltd. ggf.
        auch Cookies gesetzt.
      </p>
      <p>
        Sollte der Nutzer mit dieser Verarbeitung nicht einverstanden sein, so
        besteht die Möglichkeit, die Installation der Cookies durch eine
        entsprechende Einstellung des Browsers zu verhindern. Bereits
        gespeicherte Cookies können ebenfalls jederzeit gelöscht werden. Die
        Einstellungen hierzu sind vom jeweiligen Browser abhängig. Bei
        Flash-Cookies lässt sich die Verarbeitung nicht über die Einstellungen
        des Browsers unterbinden, sondern durch die entsprechende Einstellung
        des Flash-Players. Sollte der Nutzer die Installation der Cookies
        verhindern oder einschränken, kann dies dazu führen, dass nicht
        sämtliche Funktionen von Facebook vollumfänglich nutzbar sind.
      </p>
      <p>
        Näheres zu den Verarbeitungstätigkeiten, deren Unterbindung und zur
        Löschung der von Instagram verarbeiteten Daten finden sich in der
        Datenrichtlinie von Instagram:
      </p>
      <p>
        <a
          href="https://help.instagram.com/519522125107875"
          target="_blank"
          rel="noopener"
        >
          https://help.instagram.com/519522125107875
        </a>
      </p>
      <p>
        Es ist nicht ausgeschlossen, dass die Verarbeitung durch die Facebook
        Ireland Ltd. auch über die Facebook Inc., 1601 Willow Road, Menlo Park,
        California 94025 in den USA erfolgt.
      </p>
      <h3>Verlinkung Social-Media über Grafik oder Textlink</h3>
      <p>
        Wir bewerben auf unserer Webseite auch Präsenzen auf den nachstehend
        aufgeführten sozialen Netzwerken. Die Einbindung erfolgt dabei über eine
        verlinkte Grafik des jeweiligen Netzwerks. Durch den Einsatz dieser
        verlinkten Grafik wird verhindert, dass es bei dem Aufruf einer Website,
        die über eine Social-Media-Bewerbung verfügt, automatisch zu einem
        Verbindungsaufbau zum jeweiligen Server des sozialen Netzwerks kommt, um
        eine Grafik des jeweiligen Netzwerkes selbst darzustellen. Erst durch
        einen Klick auf die entsprechende Grafik wird der Nutzer zu dem Dienst
        des jeweiligen sozialen Netzwerks weitergeleitet.
      </p>
      <p>
        Nach der Weiterleitung des Nutzers werden durch das jeweilige Netzwerk
        Informationen über den Nutzer erfasst. Es kann hierbei nicht
        ausgeschlossen werden, dass eine Verarbeitung der so erhobenen&nbsp;
        Daten in den USA stattfindet.
      </p>
      <p>
        Dies sind zunächst Daten wie IP-Adresse, Datum, Uhrzeit und besuchte
        Seite. Ist der Nutzer währenddessen in seinem Benutzerkonto des
        jeweiligen Netzwerks eingeloggt, kann der Netzwerk-Betreiber ggf. die
        gesammelten Informationen des konkreten Besuchs des Nutzers dem
        persönlichen Account des Nutzers zuordnen. Interagiert der Nutzer über
        einen „Teilen“-Button des jeweiligen Netzwerks, können diese
        Informationen in dem persönlichen Benutzerkonto des Nutzers gespeichert
        und ggf. veröffentlicht werden. Will der Nutzer verhindern, dass die
        gesammelten Informationen unmittelbar seinem Benutzerkonto zugeordnet
        werden, muss er sich vor dem Anklicken der Grafik ausloggen. Zudem
        besteht die Möglichkeit, das jeweilige Benutzerkonto entsprechend zu
        konfigurieren.
      </p>
      <p>
        Folgende soziale Netzwerke werden in unsere Seite durch Verlinkung
        eingebunden:
      </p>
      <h4>facebook</h4>
      <p>
        Facebook Ireland Limited, 4 Grand Canal Square, Dublin 2, Ireland, ein
        Tochterunternehmen der Facebook Inc., 1601 S. California Ave., Palo
        Alto, CA 94304, USA.
      </p>
      <p>
        Datenschutzerklärung:{" "}
        <a
          href="https://www.facebook.com/policy.php"
          target="_blank"
          rel="noopener"
        >
          https://www.facebook.com/policy.php
        </a>
      </p>
      <h4>Instagram</h4>
      <p>
        Facebook Ireland Limited, 4 Grand Canal Square, Dublin 2, Ireland, ein
        Tochterunternehmen der Facebook Inc., 1601 S. California Ave., Palo
        Alto, CA 94304, USA.
      </p>
      <p>
        Datenschutzerklärung:{" "}
        <a
          href="https://help.instagram.com/519522125107875"
          target="_blank"
          rel="noopener"
        >
          https://help.instagram.com/519522125107875
        </a>
      </p>
      <h4>„Facebook“-Social-Plug-in</h4>
      <p>
        In unserem Internetauftritt setzen wir das Plug-in des Social-Networks
        Facebook ein. Bei Facebook handelt es sich um einen Internetservice der
        facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA. In der
        EU wird dieser Service wiederum von der Facebook Ireland Limited, 4
        Grand Canal Square, Dublin 2, Irland, betrieben, nachfolgend beide nur
        „Facebook“ genannt.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes
        Interesse liegt in der Qualitätsverbesserung unseres Internetauftritts.
      </p>
      <p>
        Weitergehende Informationen über die möglichen Plug-ins sowie über deren
        jeweilige Funktionen hält Facebook unter
      </p>
      <p>
        <a
          href="https://developers.facebook.com/docs/plugins/"
          target="_blank"
          rel="noopener"
        >
          https://developers.facebook.com/docs/plugins/
        </a>
      </p>
      <p>für Sie bereit.</p>
      <p>
        Sofern das Plug-in auf einer der von Ihnen besuchten Seiten unseres
        Internetauftritts hinterlegt ist, lädt Ihr Internet-Browser eine
        Darstellung des Plug-ins von den Servern von Facebook in den USA
        herunter. Aus technischen Gründen ist es dabei notwendig, dass Facebook
        Ihre IP-Adresse verarbeitet. Daneben werden aber auch Datum und Uhrzeit
        des Besuchs unserer Internetseiten erfasst.
      </p>
      <p>
        Sollten Sie bei Facebook eingeloggt sein, während Sie eine unserer mit
        dem Plug-in versehenen Internetseite besuchen, werden die durch das
        Plug-in gesammelten Informationen Ihres konkreten Besuchs von Facebook
        erkannt. Die so gesammelten Informationen weist Facebook womöglich Ihrem
        dortigen persönlichen Nutzerkonto zu. Sofern Sie also bspw. den sog.
        „Gefällt mir“-Button von Facebook benutzen, werden diese Informationen
        in Ihrem Facebook-Nutzerkonto gespeichert und ggf. über die Plattform
        von Facebook veröffentlicht. Wenn Sie das verhindern möchten, müssen Sie
        sich entweder vor dem Besuch unseres Internetauftritts bei Facebook
        ausloggen oder durch den Einsatz eines Add-ons für Ihren Internetbrowser
        verhindern, dass das Laden des Facebook-Plug-in blockiert wird.
      </p>
      <p>
        Weitergehende Informationen über die Erhebung und Nutzung von Daten
        sowie Ihre diesbezüglichen Rechte und Schutzmöglichkeiten hält Facebook
        in den unter
      </p>
      <p>
        <a
          href="https://www.facebook.com/policy.php"
          target="_blank"
          rel="noopener"
        >
          https://www.facebook.com/policy.php
        </a>
      </p>
      <p>abrufbaren Datenschutzhinweisen bereit.</p>
      <h4>„Google+“-Social-Plug-in</h4>
      <p>
        In unserem Internetauftritt setzen wir das Plug-in des Social-Networks
        Google+ („Google Plus“) ein. Bei Google+ handelt es sich um einen
        Internetservice der Google Ireland Limited, Gordon House, Barrow Street,
        Dublin 4, Irland, nachfolgend nur „Google“ genannt.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes
        Interesse liegt in der Qualitätsverbesserung unseres Internetauftritts.
      </p>
      <p>
        Weitergehende Informationen über die möglichen Plug-ins sowie über deren
        jeweilige Funktionen hält Google unter
      </p>
      <p>
        <a
          href="https://developers.google.com/+/web/"
          target="_blank"
          rel="noopener"
          aria-invalid="true"
        >
          https://developers.google.com/+/web/
        </a>
        &nbsp;
      </p>
      <p>für Sie bereit.</p>
      <p>
        Sofern das Plug-in auf einer der von Ihnen besuchten Seiten unseres
        Internetauftritts hinterlegt ist, lädt Ihr Internet-Browser eine
        Darstellung des Plug-ins von den Servern von Google in den USA herunter.
        Aus technischen Gründen ist es dabei notwendig, dass Google Ihre
        IP-Adresse verarbeitet. Daneben werden aber auch Datum und Uhrzeit des
        Besuchs unserer Internetseiten erfasst.
      </p>
      <p>
        Sollten Sie bei Google eingeloggt sein, während Sie eine unserer mit dem
        Plug-in versehenen Internetseite besuchen, werden die durch das Plug-in
        gesammelten Informationen Ihres konkreten Besuchs von Google erkannt.
        Die so gesammelten Informationen weist Google womöglich Ihrem dortigen
        persönlichen Nutzerkonto zu. Sofern Sie also bspw. den sog.
        „Teilen“-Button von Google benutzen, werden diese Informationen in Ihrem
        Google-Nutzerkonto gespeichert und ggf. über die Plattform von Google
        veröffentlicht. Wenn Sie das verhindern möchten, müssen Sie sich
        entweder vor dem Besuch unseres Internetauftritts bei Google ausloggen
        oder die entsprechenden Einstellungen in Ihrem Google-Benutzerkonto
        vornehmen.
      </p>
      <p>
        Weitergehende Informationen über die Erhebung und Nutzung von Daten
        sowie Ihre diesbezüglichen Rechte und Schutzmöglichkeiten hält Google in
        den unter
      </p>
      <p>
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener"
        >
          https://policies.google.com/privacy
        </a>
      </p>
      <p>abrufbaren Datenschutzhinweisen bereit.</p>
      <h4>Google Analytics</h4>
      <p>
        In unserem Internetauftritt setzen wir Google Analytics ein. Hierbei
        handelt es sich um einen Webanalysedienst der Google Ireland Limited,
        Gordon House, Barrow Street, Dublin 4, Irland, nachfolgend nur „Google“
        genannt.
      </p>
      <p>
        Der Dienst Google Analytics dient zur Analyse des Nutzungsverhaltens
        unseres Internetauftritts. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f)
        DSGVO. Unser berechtigtes Interesse liegt in der Analyse, Optimierung
        und dem wirtschaftlichen Betrieb unseres Internetauftritts.
      </p>
      <p>
        Nutzungs- und nutzerbezogene Informationen, wie bspw. IP-Adresse, Ort,
        Zeit oder Häufigkeit des Besuchs unseres Internetauftritts, werden dabei
        an einen Server von Google in den USA übertragen und dort gespeichert.
        Allerdings nutzen wir Google Analytics mit der sog.
        Anonymisierungsfunktion. Durch diese Funktion kürzt Google die
        IP-Adresse schon innerhalb der EU bzw. des EWR.
      </p>
      <p>
        Die so erhobenen Daten werden wiederum von Google genutzt, um uns eine
        Auswertung über den Besuch unseres Internetauftritts sowie über die
        dortigen Nutzungsaktivitäten zur Verfügung zu stellen. Auch können diese
        Daten genutzt werden, um weitere Dienstleistungen zu erbringen, die mit
        der Nutzung unseres Internetauftritts und der Nutzung des Internets
        zusammenhängen.
      </p>
      <p>
        Google gibt an, Ihre IP-Adresse nicht mit anderen Daten zu verbinden.
        Zudem hält Google unter
      </p>
      <p>
        <a
          href="https://www.google.com/intl/de/policies/privacy/partners"
          target="_blank"
          rel="noopener"
        >
          https://www.google.com/intl/de/policies/privacy/partners
        </a>
      </p>
      <p>
        weitere datenschutzrechtliche Informationen für Sie bereit, so bspw.
        auch zu den Möglichkeiten, die Datennutzung zu unterbinden.
      </p>
      <p>Zudem bietet Google unter</p>
      <p>
        <a
          href="https://tools.google.com/dlpage/gaoptout?hl=de"
          target="_blank"
          rel="noopener"
        >
          https://tools.google.com/dlpage/gaoptout?hl=de
        </a>
      </p>
      <p>
        ein sog. Deaktivierungs-Add-on nebst weiteren Informationen hierzu an.
        Dieses Add-on lässt sich mit den gängigen Internet-Browsern installieren
        und bietet Ihnen weitergehende Kontrollmöglichkeit über die Daten, die
        Google bei Aufruf unseres Internetauftritts erfasst. Dabei teilt das
        Add-on dem JavaScript (ga.js) von Google Analytics mit, dass
        Informationen zum Besuch unseres Internetauftritts nicht an Google
        Analytics übermittelt werden sollen. Dies verhindert aber nicht, dass
        Informationen an uns oder an andere Webanalysedienste übermittelt
        werden. Ob und welche weiteren Webanalysedienste von uns eingesetzt
        werden, erfahren Sie natürlich ebenfalls in dieser Datenschutzerklärung.
      </p>
      <h4>Google-Maps</h4>
      <p>
        In unserem Internetauftritt setzen wir Google Maps zur Darstellung
        unseres Standorts sowie zur Erstellung einer Anfahrtsbeschreibung ein.
        Es handelt sich hierbei um einen Dienst der Google Ireland Limited,
        Gordon House, Barrow Street, Dublin 4, Irland, nachfolgend nur „Google“
        genannt.
      </p>
      <p>
        Um die Darstellung bestimmter Schriften in unserem Internetauftritt zu
        ermöglichen, wird bei Aufruf unseres Internetauftritts eine Verbindung
        zu dem Google-Server in den USA aufgebaut.
      </p>
      <p>
        Sofern Sie die in unseren Internetauftritt eingebundene Komponente
        Google Maps aufrufen, speichert Google über Ihren Internet-Browser ein
        Cookie auf Ihrem Endgerät. Um unseren Standort anzuzeigen und eine
        Anfahrtsbeschreibung zu erstellen, werden Ihre Nutzereinstellungen und
        -daten verarbeitet. Hierbei können wir nicht ausschließen, dass Google
        Server in den USA einsetzt.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes
        Interesse liegt in der Optimierung der Funktionalität unseres
        Internetauftritts.
      </p>
      <p>
        Durch die so hergestellte Verbindung zu Google kann Google ermitteln,
        von welcher Website Ihre Anfrage gesendet worden ist und an welche
        IP-Adresse die Anfahrtsbeschreibung zu übermitteln ist.
      </p>
      <p>
        Sofern Sie mit dieser Verarbeitung nicht einverstanden sind, haben Sie
        die Möglichkeit, die Installation der Cookies durch die entsprechenden
        Einstellungen in Ihrem Internet-Browser zu verhindern. Einzelheiten
        hierzu finden Sie vorstehend unter dem Punkt „Cookies“.
      </p>
      <p>
        Zudem erfolgt die Nutzung von Google Maps sowie der über Google Maps
        erlangten Informationen nach den{" "}
        <a
          href="http://www.google.de/accounts/TOS"
          target="_blank"
          rel="noopener"
        >
          Google-Nutzungsbedingungen
        </a>
        &nbsp;
        <a
          href="https://policies.google.com/terms?gl=DE&amp;hl=de"
          target="_blank"
          rel="noopener"
        >
          https://policies.google.com/terms?gl=DE&amp;hl=de
        </a>{" "}
        und den{" "}
        <a
          href="https://www.google.com/intl/de_de/help/terms_maps.html"
          target="_blank"
          rel="noopener"
        >
          Geschäftsbedingungen für Google Maps
        </a>{" "}
        https://www.google.com/intl/de_de/help/terms_maps.html.
      </p>
      <p>Überdies bietet Google unter</p>
      <p>
        <a
          href="https://adssettings.google.com/authenticated"
          target="_blank"
          rel="noopener"
        >
          https://adssettings.google.com/authenticated
        </a>
      </p>
      <p>
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener"
        >
          https://policies.google.com/privacy
        </a>
      </p>
      <p>weitergehende Informationen an.</p>
      <h4>Google reCAPTCHA</h4>
      <p>
        In unserem Internetauftritt setzen wir Google reCAPTCHA zur Überprüfung
        und Vermeidung von Interaktionen auf unserer Internetseite durch
        automatisierte Zugriffe, bspw. durch sog. Bots, ein. Es handelt sich
        hierbei um einen Dienst der Google Ireland Limited, Gordon House, Barrow
        Street, Dublin 4, Irland, nachfolgend nur „Google“ genannt.
      </p>
      <p>
        Durch diesen Dienst kann Google ermitteln, von welcher Webseite eine
        Anfrage gesendet wird sowie von welcher IP-Adresse aus Sie die sog.
        reCAPTCHA-Eingabebox verwenden. Neben Ihrer IP-Adresse werden womöglich
        noch weitere Informationen durch Google erfasst, die für das Angebot und
        die Gewährleistung dieses Dienstes notwendig sind.&nbsp;&nbsp;&nbsp;
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes
        Interesse liegt in der Sicherheit unseres Internetauftritts sowie in der
        Abwehr unerwünschter, automatisierter Zugriffe in Form von Spam o.ä..
      </p>
      <p>Google bietet unter</p>
      <p>
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener"
        >
          https://policies.google.com/privacy
        </a>
      </p>
      <p>
        weitergehende Informationen zu dem allgemeinen Umgang mit Ihren
        Nutzerdaten an.
      </p>
      <h4>Google Fonts</h4>
      <p>
        In unserem Internetauftritt setzen wir Google Fonts zur Darstellung
        externer Schriftarten ein. Es handelt sich hierbei um einen Dienst der
        Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland,
        nachfolgend nur „Google“ genannt.
      </p>
      <p>
        Um die Darstellung bestimmter Schriften in unserem Internetauftritt zu
        ermöglichen, wird bei Aufruf unseres Internetauftritts eine Verbindung
        zu dem Google-Server in den USA aufgebaut.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes
        Interesse liegt in der Optimierung und dem wirtschaftlichen Betrieb
        unseres Internetauftritts.
      </p>
      <p>
        Durch die bei Aufruf unseres Internetauftritts hergestellte Verbindung
        zu Google kann Google ermitteln, von welcher Website Ihre Anfrage
        gesendet worden ist und an welche IP-Adresse die Darstellung der Schrift
        zu übermitteln ist.
      </p>
      <p>Google bietet unter</p>
      <p>
        <a
          href="https://adssettings.google.com/authenticated"
          target="_blank"
          rel="noopener"
        >
          https://adssettings.google.com/authenticated
        </a>
      </p>
      <p>
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener"
        >
          https://policies.google.com/privacy
        </a>
      </p>
      <p>
        weitere Informationen an und zwar insbesondere zu den Möglichkeiten der
        Unterbindung der Datennutzung.
      </p>
      <h4>FontAwesome</h4>
      <p>
        Um Schriften und visuelle Elemente unseres Internetauftritts darstellen
        zu können, setzen wir die externen Schriftarten von FontAwesome ein. Bei
        FontAwesome handelt es sich um einen Dienst der
      </p>
      <p>
        Fonticons Inc., 6 Porter Road, Apartment 3R, Cambridge, MA 02140, USA,
        nachfolgend nur „FontAwesome“ genannt.
      </p>
      <p>
        Bei dem Aufruf unseres Internetauftritts wird eine Verbindung zum Server
        von FontAwesome in den USA aufgebaut, um so die Darstellung von
        Schriften und visuellen Elemente zu ermöglichen und zu aktualisieren.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes
        Interesse liegt in der Optimierung und dem wirtschaftlichen Betrieb
        unseres Internetauftritts.
      </p>
      <p>
        Durch die bei Aufruf unseres Internetauftritts hergestellte Verbindung
        zum Server von FontAwesome kann FontAwesome ermitteln, von welcher
        Website Ihre Anfrage gesendet worden ist und an welche IP-Adresse die
        Darstellung der Schrift zu übermitteln ist.
      </p>
      <p>FontAwesome bietet unter</p>
      <p>
        <a
          href="https://fontawesome.com/privacy"
          target="_blank"
          rel="noopener"
        >
          https://fontawesome.com/privacy
        </a>
      </p>
      <p>
        weitere Informationen an und zwar insbesondere zu den Möglichkeiten der
        Unterbindung der Datennutzung.
      </p>
      <h4>GOOGLE-Suchfunktion („CSE“)</h4>
      <p>
        Zur Volltextsuche auf der Website setzen wir die „Google
        benutzerdefinierte Suche“ (Google Custom Search Engine „CSE“) ein. „CSE“
        ist ein Dienst der Google Ireland Limited, Gordon House, Barrow Street,
        Dublin 4, Irland, nachfolgend „Google“.
        <br />
        <br />
        „CSE“ ermöglicht eine Volltextsuche nach Inhalten auf unserer Webseite.
        Der Zugriff auf diese Suchfunktion erfolgt über eine Such-Box „Google
        Benutzerdefinierte Suche“.
        <br />
        <br />
        Rechtsgrundlage ist hierbei{" "}
        <a
          title="Art. 6 DSGVO: Rechtmäßigkeit der Verarbeitung"
          href="http://dejure.org/gesetze/DSGVO/6.html"
          target="_blank"
          rel="noopener"
        >
          Art. 6 Abs. 1 lit. f DSGVO
        </a>
        . Unser berechtigtes Interesse besteht in der Anwenderfreundlichkeit der
        Website.
        <br />
        <br />
        Die Funktion ist als Software-Modul von Google unverändert auf unserer
        Website integriert.
        <br />
        Wird die Suche durch Eingabe eines Suchbegriffes aktiviert, lädt Google
        anhand eines Plugins die gesuchten Informationen. Gleichzeitig werden
        zur Ausführung der Suche und der Darstellung der Suchergebnisse die vom
        Nutzer eingegebenen Begriffe und die IP-Adresse des Nutzers an Google
        übertragen.
        <br />
        <br />
        Sofern der Nutzer zum Zeitpunkt des Suchvorganges in seinem bestehenden
        Google-Konto eingeloggt ist, kann Google die erfassten Informationen dem
        zugehörigen Nutzerprofil zuzuordnen. <br />
        <br />
        Weitergehende Informationen, insbesondere zu den Möglichkeiten der
        Unterbindung der Datennutzung, bietet Google unter den nachfolgenden
        Links an:
        <br />
        <br />
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener"
        >
          https://policies.google.com/privacy
        </a>
        <br />
        <a
          href="https://adssettings.google.com/authenticated"
          target="_blank"
          rel="noopener"
        >
          https://adssettings.google.com/authenticated
        </a>
      </p>
      <h4>Amazon-Partnerprogramm</h4>
      <p>
        In unserem Internetauftritt setzen wir das AMAZON-Partnerprogramm ein.
        Es handelt sich hierbei um einen Dienst der Amazon Europe Core S.à r.l.,
        5 Rue Plaetis, L -2338 Luxemburg. &nbsp;Über das AMAZON-Partnerprogramm
        werden in unserem Internetauftritt Werbeanzeigen von Amazon.de
        platziert. Klicken Sie auf eine dieser Werbeanzeigen, werden Sie zu dem
        damit korrespondierenden Angebot auf dem AMZON-Internetportal
        weitergeleitet. Sofern Sie sich dort anschließend für den Kauf des
        beworbenen Produkts entscheiden, erhalten wir hierfür eine
        „Vermittlungsprovision“ von Amazon.
      </p>
      <p>
        Damit dieser Dienst ermöglicht werden kann, setzt Amazon Cookies ein.
        Mit Hilfe dieser Cookies kann Amazon nachvollziehen, dass Sie von
        unserem Internetauftritt auf das AMAZON- Internetportal weitergeleitet
        worden sind.
      </p>
      <p>Amazon bietet unter</p>
      <p>
        <a
          href="https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010"
          target="_blank"
          rel="noopener"
        >
          https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010
        </a>
      </p>
      <p>weitergehende Datenschutzinformationen an.</p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes
        Interesse liegt in der Gewährleistung der Abwicklung und Auszahlung
        unserer Provisionsansprüche durch Amazon.
      </p>
      <p>
        Falls Sie mit dieser Verarbeitung nicht einverstanden sind, haben Sie
        die Möglichkeit, die Speicherung der Cookies durch eine Einstellung in
        Ihrem Internet-Browsers zu verhindern. Nähere Informationen hierzu
        finden Sie vorstehend unter „Cookies“.
      </p>
      <h4>Google AdWords mit Conversion-Tracking</h4>
      <p>
        In unserem Internetauftritt setzen wir die Werbe-Komponente Google
        AdWords und dabei das sog. Conversion-Tracking ein. Es handelt sich
        hierbei um einen Dienst der Google Ireland Limited, Gordon House, Barrow
        Street, Dublin 4, Irland, nachfolgend nur „Google“ genannt.
      </p>
      <p>
        Wir nutzen das Conversion-Tracking zur zielgerichteten Bewerbung unseres
        Angebots. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser
        berechtigtes Interesse liegt in der Analyse, Optimierung und dem
        wirtschaftlichen Betrieb unseres Internetauftritts.
      </p>
      <p>
        Falls Sie auf eine von Google geschaltete Anzeige klicken, speichert das
        von uns eingesetzte Conversion-Tracking ein Cookie auf Ihrem Endgerät.
        Diese sog. Conversion-Cookies verlieren mit Ablauf von 30 Tagen ihre
        Gültigkeit und dienen im Übrigen nicht Ihrer persönlichen
        Identifikation.
      </p>
      <p>
        Sofern das Cookie noch gültig ist und Sie eine bestimmte Seite unseres
        Internetauftritts besuchen, können sowohl wir als auch Google auswerten,
        dass Sie auf eine unserer bei Google platzierten Anzeigen geklickt haben
        und dass Sie anschließend auf unseren Internetauftritt weitergeleitet
        worden sind.
      </p>
      <p>
        Durch die so eingeholten Informationen erstellt Google uns eine
        Statistik über den Besuch unseres Internetauftritts. Zudem erhalten wir
        hierdurch Informationen über die Anzahl der Nutzer, die auf unsere
        Anzeige(n) geklickt haben sowie über die anschließend aufgerufenen
        Seiten unseres Internetauftritts. Weder wir noch Dritte, die ebenfalls
        Google-AdWords einsetzten, werden hierdurch allerdings in die Lage
        versetzt, Sie auf diesem Wege zu identifizieren.
      </p>
      <p>
        Durch die entsprechenden Einstellungen Ihres Internet-Browsers können
        Sie zudem die Installation der Cookies verhindern oder einschränken.
        Gleichzeitig können Sie bereits gespeicherte Cookies jederzeit löschen.
        Die hierfür erforderlichen Schritte und Maßnahmen hängen jedoch von
        Ihrem konkret genutzten Internet-Browser ab. Bei Fragen benutzen Sie
        daher bitte die Hilfefunktion oder Dokumentation Ihres Internet-Browsers
        oder wenden sich an dessen Hersteller bzw. Support.
      </p>
      <p>Ferner bietet auch Google unter</p>
      <p>
        <a
          href="https://services.google.com/sitestats/de.html"
          target="_blank"
          rel="noopener"
        >
          https://services.google.com/sitestats/de.html
        </a>
      </p>
      <p>
        <a
          href="https://www.google.com/policies/technologies/ads/"
          target="_blank"
          rel="noopener"
        >
          https://www.google.com/policies/technologies/ads/
        </a>
        &nbsp;
      </p>
      <p>
        <a
          href="http://www.google.de/policies/privacy/"
          target="_blank"
          rel="noopener"
        >
          http://www.google.de/policies/privacy/
        </a>
      </p>
      <p>
        weitergehende Informationen zu diesem Thema und dabei insbesondere zu
        den Möglichkeiten der Unterbindung der Datennutzung an.
      </p>
      <h4>Google AdSense</h4>
      <p>
        In unserem Internetauftritt setzen wir zur Einbindung von Werbeanzeigen
        Google AdSense ein. Es handelt sich hierbei um einen Dienst der Google
        Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland,
        nachfolgend nur „Google“ genannt.
      </p>
      <p>
        Durch Google AdSense werden Cookies sowie sog. Web Beacons über Ihren
        Internet-Browser auf Ihrem Endgerät gespeichert. Hierdurch ermöglicht
        uns Google die Analyse der Nutzung unseres Internetauftritts durch Sie.
        Die so erfassten Informationen werden neben Ihrer IP-Adresse und der
        Ihnen angezeigten Werbeformate an Google in die USA übertragen und dort
        gespeichert. Ferner kann Google diese Informationen an Vertragspartner
        weitergeben. Google erklärt allerdings, dass Ihre IP-Adresse nicht mit
        anderen Daten von Ihnen zusammengeführt würden.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes
        Interesse liegt in der Analyse, Optimierung und dem wirtschaftlichen
        Betrieb unseres Internetauftritts.
      </p>
      <p>
        Sofern Sie mit dieser Verarbeitung nicht einverstanden sind, haben Sie
        die Möglichkeit, die Installation der Cookies durch die entsprechenden
        Einstellungen in Ihrem Internet-Browser zu verhindern. Einzelheiten
        hierzu finden Sie vorstehend unter dem Punkt „Cookies“.
      </p>
      <p>Zudem bietet Google unter</p>
      <p>
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener"
        >
          https://policies.google.com/privacy
        </a>
      </p>
      <p>
        <a
          href="https://adssettings.google.com/authenticated"
          target="_blank"
          rel="noopener"
        >
          https://adssettings.google.com/authenticated
        </a>
      </p>
      <p>
        weitere Informationen an und zwar insbesondere zu den Möglichkeiten der
        Unterbindung der Datennutzung.
      </p>
      <h4>
        Google Remarketing oder "Ähnliche Zielgruppen"-Komponente von Google
      </h4>
      <p>
        In unserem Internetauftritt setzen wir die Remarketing- oder „Ähnliche
        Zielgruppen“-Funktion ein. Es handelt sich hierbei um einen Dienst der
        Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland,
        nachfolgend nur „Google“ genannt.
      </p>
      <p>
        Wir nutzen diese Funktion, um interessenbezogene, personalisierte
        Werbung auf Internetseiten Dritter, die ebenfalls an dem Werbe-Netzwerk
        von Google teilnehmen, zu schalten.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes
        Interesse liegt in der Analyse, Optimierung und dem wirtschaftlichen
        Betrieb unseres Internetauftritts.
      </p>
      <p>
        Damit dieser Werbe-Dienst ermöglicht werden kann, speichert Google
        während Ihres Besuchs unseres Internetauftritts über Ihren
        Internet-Browser ein Cookie mit einer Zahlenfolge auf Ihrem Endgerät.
        Dieses Cookie erfasst in anonymisierter Form sowohl Ihren Besuch als
        auch die Nutzung unseres Internetauftritts. Personenbezogene Daten wird
        dabei allerdings nicht weitergegeben. Sofern Sie anschließend den
        Internetauftritt eines Dritten besuchen, der seinerseits ebenfalls das
        Werbe-Netzwerk von Google nutzt, werden womöglich Werbeeinblendungen
        erscheinen, die einen Bezug zu unserem Internetauftritt bzw. zu unseren
        dortigen Angeboten aufweisen.
      </p>
      <p>
        Zur dauerhaften Deaktivierung dieser Funktion bietet Google für die
        gängigsten Internet-Browser über
      </p>
      <p>
        <a
          href="https://www.google.com/settings/ads/plugin"
          target="_blank"
          rel="noopener"
        >
          https://www.google.com/settings/ads/plugin
        </a>
      </p>
      <p>ein Browser-Plugin an.</p>
      <p>
        Ebenfalls kann die Verwendung von Cookies bestimmter Anbieter bspw. über
      </p>
      <p>
        <a
          href="http://www.youronlinechoices.com/uk/your-ad-choices"
          target="_blank"
          rel="noopener"
        >
          http://www.youronlinechoices.com/uk/your-ad-choices
        </a>
      </p>
      <p>oder</p>
      <p>
        <a
          href="http://www.networkadvertising.org/choices/"
          target="_blank"
          rel="noopener"
        >
          http://www.networkadvertising.org/choices/
        </a>
      </p>
      <p>per Opt-out deaktiviert werden.</p>
      <p>
        Durch das sog. <strong>Cross-Device-Marketing</strong> kann Google Ihr
        Nutzungsverhalten unter Umständen auch über mehrere Endgeräte hinweg
        verfolgen, sodass Ihnen womöglich selbst dann interessenbezogene,
        personalisierte Werbung angezeigt wird, wenn Sie das Endgerät wechseln.
        Dies setzt allerdings voraus, dass Sie der Verknüpfung Ihrer
        Browserverläufe mit Ihrem bestehenden Google-Konto zugestimmt haben.
      </p>
      <p>
        Google bietet weitergehende Informationen zu Google Remarketing unter
      </p>
      <p>
        <a
          href="https://www.google.com/privacy/ads/"
          target="_blank"
          rel="noopener"
        >
          https://www.google.com/privacy/ads/
        </a>
      </p>
      <p>an.</p>
      <h4>Microsoft Bing Ads</h4>
      <p>
        In unserem Internetauftritt setzen wir zum Remarketing und zur
        Abschlussverfolgung Bing Ads ein. Es handelt sich hierbei um einen
        Dienst der Microsoft Corporation, One Microsoft Way, Redmond, WA 98052 -
        6399, USA, nachfolgend nur „Microsoft“ genannt, der die sog. Universelle
        Ereignisnachverfolgung (UEN) nutzt.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes
        Interesse liegt in der Analyse, Optimierung und dem wirtschaftlichen
        Betrieb unseres Internetauftritts.
      </p>
      <p>
        Klicken Sie auf eine von uns bei der Internetsuchmaschine „Bing“
        geschaltete Anzeige, wird durch Microsoft ein Cookie zur
        Trackingfunktionalität über Ihren Internet-Browser auf Ihrem Endgerät
        gespeichert. Dieses Tracking - Cookie verliert nach 180 Tagen seine
        Gültigkeit und dient nicht Ihrer persönlichen Identifikation. Besuchen
        Sie bestimmte Seiten unseres Internetauftritts und ist das Cookie noch
        nicht abgelaufen, können sowohl Microsoft als auch wir erkennen, dass
        Sie auf eine von uns bei Bing platzierte Werbung geklickt und von dort
        aus auf unseren Internetauftritt weitergeleitet worden sind.
      </p>
      <p>
        Die durch das Tracking-Cookie gesammelten Informationen nutzt Microsoft,
        um für uns Besuchsstatistiken zu erstellen. Wir erhalten dadurch
        Informationen über die Anzahl der Zugriffe auf die von uns bei Bing
        geschaltete Werbung sowie über die Internetseiten unseres
        Internetauftritts, auf die im Anschluss zugegriffen wurde. Hierbei
        erhalten wir aber keine Informationen, aufgrund derer wir Sie persönlich
        identifizieren könnten.
      </p>
      <p>
        Zusätzlich kann Microsoft Ihr Nutzerverhalten womöglich über das sog.
        Cross-Device - Tracking über mehrere Ihrer Endgeräte hinweg verfolgen.
        Dadurch ist Microsoft in der Lage dazu, Ihnen geräteübergreifend
        personalisierte Werbung einzublenden.
      </p>
      <p>
        Sofern Sie mit dieser Verarbeitung nicht einverstanden sind, haben Sie
        die Möglichkeit, die Installation der Cookies durch die entsprechenden
        Einstellungen in Ihrem Internet-Browser zu verhindern. Einzelheiten
        hierzu finden Sie vorstehend unter dem Punkt „Cookies“.
      </p>
      <p>
        Sollten Sie über ein Microsoft-Konto verfügen, können Sie zudem unter{" "}
        <a
          href="http://choice.microsoft.com/de-de/opt-out"
          target="_blank"
          rel="noopener"
        >
          http://choice.microsoft.com/de-de/opt-out
        </a>{" "}
        auch dort die Einstellungen für personalisierte Werbung ändern.
      </p>
      <p>
        Ferner bietet Microsoft unter{" "}
        <a
          href="https://help.bingads.microsoft.com/#apex/3/de/53056/2"
          target="_blank"
          rel="noopener"
        >
          https://help.bingads.microsoft.com/#apex/3/de/53056/2
        </a>{" "}
        sowie unter{" "}
        <a
          href="https://privacy.microsoft.com/de-de/privacystatement"
          target="_blank"
          rel="noopener"
        >
          https://privacy.microsoft.com/de-de/privacystatement
        </a>{" "}
        weitere Informationen zu Bing Ads sowie zur Erhebung und Nutzung der
        Daten sowie zu Ihren Rechten und Möglichkeiten zum Schutz Ihrer
        Privatsphäre an.
      </p>
      <h4>affilinet-Tracking-Cookies</h4>
      <p>
        In unserem Internetauftritt bewerben wir auch Angebote und Leistungen
        Dritter. Sofern Sie aufgrund unserer Werbung für diese Drittangebote
        einen Vertrag mit dem Drittanbieter schließen, erhalten wir hierfür eine
        Provision.
      </p>
      <p>
        Um die erfolgreiche Vermittlung korrekt erfassen zu können, setzen wir
        das sog. affilinet-Tracking-Cookie ein. Dieses Cookie speichert aber
        keine Ihrer personenbezogenen Daten. Es wird lediglich unsere
        Identifikationsnummer als vermittelnder Anbieter sowie die
        Ordnungsnummer des von Ihnen angeklickten Werbemittels (bspw. eines
        Banners oder eines Textlinks) erfasst. Diese Informationenbenötigen wir
        zum Zwecke der Zahlungsabwicklung bzw. Auszahlung unserer Provisionen.
      </p>
      <p>
        Falls Sie mit dieser Verarbeitung nicht einverstanden sind, haben Sie
        die Möglichkeit, die Speicherung der Cookies durch eine Einstellung in
        Ihrem Internet-Browsers zu verhindern. Nähere Informationen hierzu
        finden Sie vorstehend unter „Cookies“.
      </p>
      <p>
        <a
          href="https://www.ratgeberrecht.eu/leistungen/muster-datenschutzerklaerung.html"
          target="_blank"
          rel="noopener"
        >
          Muster-Datenschutzerklärung
        </a>{" "}
        der{" "}
        <a
          href="https://www.ratgeberrecht.eu/datenschutz/datenschutzerklaerung-generator-dsgvo.html"
          target="_blank"
          rel="noopener"
        >
          Anwaltskanzlei Weiß &amp; Partner
        </a>
      </p>
    </div>
  );
}

export default Dataschutz;
