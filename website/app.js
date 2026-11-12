(function () {
  "use strict";

  const appointmentRoot = document.getElementById("appointment-form");
  if (!appointmentRoot || !window.React || !window.ReactDOM) return;

  const h = React.createElement;
  const emailAddress = "info@always-beauty.ch";
  const treatments = {
    "beratung": "Ich möchte mich beraten lassen",
    "klassische-gesichtsbehandlung": "Klassische Gesichtsbehandlung",
    "hydradermie": "Hydradermie",
    "sauerstoffbehandlung": "Sauerstoffbehandlung",
    "gesichts-und-dekollete-massage": "Gesichts-, Hals- und Dekolleté-Massage",
    "hydradermie-lift-augen": "Hydradermie Lift Augenbehandlung",
    "wimpern-faerben": "Wimpern färben"
  };

  function treatmentKey(value) {
    return Object.hasOwn(treatments, value) ? value : "beratung";
  }

  function requestedTreatment() {
    return treatmentKey(new URLSearchParams(window.location.search).get("behandlung"));
  }

  function field(label, id, control, fullWidth) {
    return h("div", { className: fullWidth ? "form-field form-field--full" : "form-field" },
      h("label", { htmlFor: id }, label),
      control
    );
  }

  function makeMailto(data) {
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const treatment = treatments[treatmentKey(data.get("treatment"))];
    const preferredTime = String(data.get("preferredTime") || "").trim();
    const note = String(data.get("note") || "").trim().replace(/\r\n?|\n/g, "\r\n");

    const lines = [
      "Guten Tag Oxana",
      "",
      "Ich möchte gerne einen Termin bei Ihnen anfragen.",
      "",
      "Name: " + name,
      "E-Mail: " + email,
      "Behandlung: " + treatment
    ];

    if (preferredTime) lines.push("Terminwunsch: " + preferredTime);
    if (note) lines.push("", "Nachricht:", note);
    lines.push("", "Freundliche Grüsse", name);

    return "mailto:" + emailAddress
      + "?subject=" + encodeURIComponent("Terminanfrage · Always Beauty")
      + "&body=" + encodeURIComponent(lines.join("\r\n"));
  }

  function AppointmentForm() {
    const [treatment, setTreatment] = React.useState(requestedTreatment);
    const [preparedMailto, setPreparedMailto] = React.useState("");

    function handleSubmit(event) {
      event.preventDefault();
      const form = event.currentTarget;
      const uri = makeMailto(new FormData(form));
      setPreparedMailto(uri);
      window.location.assign(uri);
    }

    return h("form", {
      onSubmit: handleSubmit,
      "aria-describedby": "appointment-form-hint"
    },
      h("div", { className: "form-grid" },
        field("Vor- und Nachname", "appointment-name", h("input", {
          id: "appointment-name",
          name: "name",
          autoComplete: "name",
          required: true,
          maxLength: 100,
          pattern: ".*\\S.*"
        })),
        field("E-Mail", "appointment-email", h("input", {
          id: "appointment-email",
          name: "email",
          type: "email",
          autoComplete: "email",
          required: true,
          maxLength: 150
        })),
        field("Was interessiert Sie?", "appointment-treatment", h("select", {
          id: "appointment-treatment",
          name: "treatment",
          value: treatment,
          onChange: function (event) { setTreatment(event.target.value); }
        }, Object.entries(treatments).map(function ([key, label]) {
          return h("option", { key: key, value: key }, label);
        }))),
        field("Terminwunsch (optional)", "appointment-time", h("input", {
          id: "appointment-time",
          name: "preferredTime",
          maxLength: 100,
          placeholder: "Z. B. Do. vormittags"
        })),
        field("Nachricht (optional)", "appointment-note", h("textarea", {
          id: "appointment-note",
          name: "note",
          rows: 3,
          maxLength: 600,
          placeholder: "Was möchten Sie Oxana vorab mitteilen?"
        }), true)
      ),
      h("div", { className: "form-actions" },
        h("button", { type: "submit", className: "button button--primary" }, "E-Mail-Entwurf öffnen"),
        h("p", { className: "form-hint", id: "appointment-form-hint" },
          "Ihre Anfrage öffnet sich als Entwurf in Ihrem E-Mail-Programm. Dort können Sie sie prüfen und absenden."
        )
      ),
      h("p", { className: "form-status", "aria-live": "polite" },
        preparedMailto && h(React.Fragment, null,
          "Bitte senden Sie die Anfrage in Ihrem E-Mail-Programm ab. ",
          h("a", { href: preparedMailto }, "Entwurf erneut öffnen"),
          " oder ",
          h("a", { href: "tel:+41438176700" }, "Oxana anrufen"),
          "."
        )
      )
    );
  }

  ReactDOM.createRoot(appointmentRoot).render(h(AppointmentForm));
})();
