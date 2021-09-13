import React from "react";
import { CookieBanner } from "@palmabit/react-cookie-law";
import "./App.css";

function CookiesConsent() {
  return (
    <CookieBanner
      message="Wir übermitteln Daten an Drittanbieter. In diesem Zusammenhang werden auch Nutzungsprofile gebildet und angereichert, auch außerhalb des EWR. Hierfür und um bestimmte Dienste zu nachfolgend aufgeführten Zwecken verwenden zu dürfen, benötigen wir Deine Einwilligung. Indem Du 'Alle akzeptieren' klickst, stimmst Du diesen (jederzeit widerruflich) zu. Dies umfasst auch Deine Einwilligung nach Art. 49 (1) (a) DSGVO. Unter 'Einstellungen oder ablehnen' kannst Du Deine Einstellungen ändern oder die Datenverarbeitung ablehnen. Du kannst Deine Auswahl jederzeit unter Datenschutzerklärung am Seitenende ändern."
      managePreferencesButtonText="Einstellungen oder ablehnen"
      acceptButtonText="Alle akzeptieren"
      policyLink="/dataschutz"
      privacyPolicyLinkText="Datenschutzerklärung"
      showPreferencesOption={false}
      styles={{
        dialog: {
          position: "fixed",
          bottom: "0px",
          width: "100%",
          minHeight: "11%",
          backgroundColor: "rgba(234, 237, 237)",
        },
        container: { display: "flex", "flex-direction": "column-reverse" },
        buttonWrapper: { "margin-left": "auto", "padding-right": "50px" },
      }}
      wholeDomain={true}
      onAccept={() => {}}
      onAcceptPreferences={() => {}}
      onAcceptStatistics={() => {}}
      onAcceptMarketing={() => {}}
    />
  );
}

export default CookiesConsent;
