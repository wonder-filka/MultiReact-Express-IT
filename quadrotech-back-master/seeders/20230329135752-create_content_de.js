"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("content_de", [
      {
        keyi18n: "About p1",
        value_de:
          "Bei Quadrotech sind wir ein Team von Technologie-Profis, die sich der Lösung komplexer Probleme für unsere Kunden verschrieben haben. Wir haben uns auf die Erstellung von hochgradig verteilten Systemen spezialisiert, die rund um die Uhr funktionieren, sowie auf die Entwicklung von Server- und Mobile-Lösungen, die von Elektronik über Betriebssysteme bis hin zu Anwendungen reichen",
      },
      {
        keyi18n: "About p2",
        value_de:
          "Wir bieten eine Vielzahl von Dienstleistungen an, darunter IoT, Smart Home, Big Data, KI, Sicherheit, Kryptowährungen, Blockchain und FinTech. Unsere Expertise in diesen Bereichen ermöglicht es uns, auch die anspruchsvollsten Projekte anzunehmen und innovative Lösungen zu liefern, die den einzigartigen Anforderungen jedes Kunden entsprechen.",
      },
      {
        keyi18n: "About p3",
        value_de:
          "Unser Team ist bestrebt, jedem Kunden, mit dem wir arbeiten, außergewöhnlichen Service zu bieten. Wir verstehen, dass jedes Projekt anders ist, und nehmen uns die Zeit, die Ziele und Vorstellungen unserer Kunden zu verstehen, bevor wir eine Lösung vorschlagen. Dieser kundenorientierte Ansatz hat uns einen Ruf als vertrauenswürdiger Partner in der Technologiebranche eingebracht.",
      },
      { keyi18n: "About us", value_de: "Über uns" },
      {
        keyi18n: "Artificial intelligence",
        value_de: "Künstliche Intelligenz",
      },
      { keyi18n: "BUSINESS NEED", value_de: "Geschäftsbedarf" },
      {
        keyi18n: "BUSINESS NEED 1",
        value_de:
          "In der heutigen Welt werden Sicherheit und Überwachung sowohl für Unternehmen als auch für Einzelpersonen immer wichtiger. Die Video-Service-Plattform erfüllt diese Anforderungen, indem sie ein zuverlässiges und benutzerfreundliches System zur Überwachung und Aufzeichnung von Videoaufnahmen in Echtzeit bietet, mit Zugriff von überall auf der Welt. Dies ist unerlässlich, um die Sicherheit zu gewährleisten, Diebstahl und Betrug zu verhindern und die Gesamteffizienz und Produktivität zu verbessern.",
      },
      {
        keyi18n: "BUSINESS NEED 2",
        value_de:
          "In der heutigen schnelllebigen digitalen Welt benötigen Unternehmen eine Zahlungsplattform, die eine Vielzahl von Zahlungsinstrumenten bietet, um Transaktionen effektiv zu verwalten. Sie benötigen eine Lösung, die den Zahlungsprozess vereinfachen, das Risiko von Betrug reduzieren und eine effiziente Möglichkeit zur Verwaltung von Zahlungen über verschiedene Kanäle bieten kann.",
      },
      {
        keyi18n: "BUSINESS NEED 3",
        value_de:
          "Smart Home-Systeme sind für das moderne Leben unverzichtbar. Sie ermöglichen es Benutzern, ihre Heimsysteme und Geräte bequem fernzusteuern und Zeit und Energie zu sparen.",
      },
      {
        keyi18n: "BUSINESS NEED 4",
        value_de:
          "In Branchen wie Gesundheitswesen, Recht und Finanzen ist die Aufrechterhaltung der Vertraulichkeit und der Schutz von Kundendaten entscheidend. Die Security Box bietet eine sichere Kommunikationslösung für Fachleute in diesen Bereichen, die es ihnen ermöglicht, sensible Informationen mit Kunden und Kollegen auszutauschen, ohne das Risiko von Abfangen oder Lauschen. Das Gerät gewährleistet die Einhaltung von Datenschutzbestimmungen und schützt vor Datenverletzungen, damit Fachleute das Vertrauen und das Vertrauen ihrer Kunden aufrechterhalten können.",
      },
      {
        keyi18n: "BUSINESS NEED 5",
        value_de:
          "In einer Welt, in der Gesundheit und Fitness für viele Menschen oberste Priorität haben, ist der Besitz einer Smartwatch unerlässlich geworden. Das Verwalten mehrerer Smartwatches mit unterschiedlichen Funktionen kann jedoch für Benutzer herausfordernd sein. Unsere SMART WATCH MANAGEMENT APP adressiert diese Notwendigkeit, indem sie eine einzige Plattform bereitstellt, um mehrere Smartwatches zu verbinden und zu verwalten.",
      },
      {
        keyi18n: "BUSINESS NEED 6",
        value_de:
          "Die Taxi-Dienstleistungsbranche ist sehr wettbewerbsfähig, und Kunden verlangen eine bequeme, effiziente und sichere Fahrt. Traditionelle Methoden der Auftragsvergabe und Zahlungsabwicklung sind ineffizient und langsam und führen zu einer geringen Kundenzufriedenheit. Unser Taxidienst soll diese Schmerzpunkte angehen, indem er alle Prozesse automatisiert, die Genauigkeit verbessert und das Kundenerlebnis optimiert.",
      },
      { keyi18n: "Blockchain", value_de: "Blockchain" },
      { keyi18n: "Consulting", value_de: "Beratung" },
      { keyi18n: "DE", value_de: "DE" },
      { keyi18n: "Data science", value_de: "Datenwissenschaft" },
      { keyi18n: "EN", value_de: "EN" },
      { keyi18n: "ES", value_de: "ES" },
      { keyi18n: "FinTech", value_de: "FinTech" },
      { keyi18n: "FinTech li 1", value_de: "Finanzdienstleistungen/Banking" },
      { keyi18n: "FinTech li 2", value_de: "Elektronische Steuerstempel" },
      { keyi18n: "FinTech li 3", value_de: "Zahlungs-Gateway" },
      { keyi18n: "KEY FACTS", value_de: "WICHTIGE FAKTEN" },
      {
        keyi18n: "KEY FACTS 1",
        value_de:
          "Video Service ist eine umfassende Videoüberwachungsplattform, die eine Reihe von Funktionen und Vorteilen bietet, einschließlich:",
      },
      {
        keyi18n: "KEY FACTS 1 1",
        value_de:
          "Echtzeitüberwachung und Aufzeichnung von Videomaterial von einer unbegrenzten Anzahl von Kameras.",
      },
      {
        keyi18n: "KEY FACTS 1 2",
        value_de:
          "Fernzugriff von überall auf der Welt über einen Webbrowser oder eine mobile App.",
      },
      {
        keyi18n: "KEY FACTS 1 3",
        value_de:
          "Benutzerfreundliche Schnittstelle mit anpassbaren Einstellungen für Kamerasteuerung und Ansichtsbedingungen.",
      },
      {
        keyi18n: "KEY FACTS 1 4",
        value_de:
          "Audio- und Videoaufzeichnung auf Datei oder Archiv, mit der Möglichkeit, Filmmaterial jederzeit anzusehen und herunterzuladen.",
      },
      {
        keyi18n: "KEY FACTS 1 5",
        value_de:
          "Alarmbenachrichtigungen für sofortige Warnungen potenzieller Sicherheitsverletzungen.",
      },
      {
        keyi18n: "KEY FACTS 1 6",
        value_de:
          "Transcodierung von Video in beliebte Formate für einfaches Teilen und Wiedergeben.",
      },
      {
        keyi18n: "KEY FACTS 1 7",
        value_de:
          "Sichere Datenlagerung und -verwaltung mit Optionen für Quotenverwaltung und Zahlung.",
      },
      {
        keyi18n: "KEY FACTS 1 8",
        value_de:
          "Benutzerverwaltungssystem mit anpassbarem Zugriff und Berechtigungen für verschiedene Benutzerstufen.",
      },
      {
        keyi18n: "KEY FACTS 1 9",
        value_de:
          "Ob für persönliche oder berufliche Zwecke, Video Service ist ein leistungsstarkes Werkzeug zur Verbesserung der Sicherheit, Effizienz und Gewährleistung von innerer Ruhe. Mit seinen fortschrittlichen Funktionen und einer benutzerfreundlichen Oberfläche bietet es eine umfassende Lösung für alle Ihre Videoüberwachungsbedürfnisse.",
      },
      {
        keyi18n: "KEY FACTS 2",
        value_de:
          "Payment Gateway ist eine vielseitige Plattform, die eine Reihe von Zahlungsinstrumenten bietet, einschließlich Internet-Acquiring, P2P-Zahlungen, B2B grenzüberschreitende Zahlungen und einem Händlersystem. Die Plattform bietet eine effiziente Möglichkeit, Zahlungen über verschiedene Kanäle zu verwalten und vereinfacht den Zahlungsprozess für Unternehmen. Es beinhaltet Module für Anti-Betrug, Archivierung, Identifikation, Kryptographie, Optimierung von Provisionen und Dienstleistungen, Dienstleistungsaggregation, Statistiken und Analytik, Boni und Rabatte, elektronische Geldbörsen, Modul für Garantien und Compliance sowie Speicherung von Karten/Token/Keys. Die Payment Gateway-Schnittstelle bietet Web-Schnittstellen für verschiedene Benutzerrollen, einschließlich des Administrators und des Benutzerkabinetts. Insgesamt ist Payment Gateway eine robuste Zahlungsplattform, die eine umfassende Lösung für Unternehmen bietet, die ihre Zahlungen effektiv verwalten möchten.",
      },
      {
        keyi18n: "KEY FACTS 3",
        value_de:
          "Smart-Home-Systeme ermöglichen es Benutzern, verschiedene Aspekte ihres Zuhauses wie Beleuchtung, Heizung, Haushaltsgeräte, Multimedia-Geräte, Jalousien und Sicherheitsfunktionen remote zu steuern und zu automatisieren.",
      },
      {
        keyi18n: "KEY FACTS 3 1",
        value_de:
          "Diese Systeme bestehen in der Regel aus Hardware-Geräten und Software-Anwendungen, die über das Internet oder andere Netzwerke miteinander kommunizieren.",
      },
      {
        keyi18n: "KEY FACTS 3 2",
        value_de:
          "Die Verwaltung von Beleuchtung und Haushaltsgeräten kann Benutzern helfen, Geld bei den Energiekosten zu sparen, indem sichergestellt wird, dass Geräte nur bei Bedarf verwendet werden.",
      },
      {
        keyi18n: "KEY FACTS 3 3",
        value_de:
          "Smart-Home-Systeme können auch Heizungs- und Wasserverbrauch optimieren, um Abfall zu reduzieren und die Energieeffizienz zu verbessern.",
      },
      {
        keyi18n: "KEY FACTS 3 4",
        value_de:
          "Durch Überwachung des Energieverbrauchs und Optimierung von Dienstleistungsgebühren können diese Systeme Benutzern auch helfen, bei ihren monatlichen Rechnungen Geld zu sparen.",
      },
      {
        keyi18n: "KEY FACTS 3 5",
        value_de:
          "Einer der Hauptvorteile von Smart-Home-Systemen ist erhöhte Sicherheit, mit Funktionen wie Einbruchserkennung, Wasseraustrittsprävention und Brand- und Gasleck-Detektion.",
      },
      {
        keyi18n: "KEY FACTS 3 6",
        value_de:
          "Die Smart-Home-Technologie entwickelt sich weiter, mit neuen Funktionen und Integrationen, die regelmäßig hinzugefügt werden, um noch mehr Bequemlichkeit und Automatisierung für Benutzer zu bieten.",
      },
      {
        keyi18n: "KEY FACTS 4",
        value_de:
          "Die Security Box ist ein kompaktes Gerät, das verschlüsselten Sprachverkehr bereitstellt, um eine sichere Kommunikation zu gewährleisten.",
      },
      {
        keyi18n: "KEY FACTS 4 1",
        value_de:
          "Jeder Teilnehmer eines sicheren Gesprächs verwendet seine eigene Kopie des Geräts.",
      },
      {
        keyi18n: "KEY FACTS 4 2",
        value_de:
          "Das Gerät funktioniert wie ein Bluetooth-Headset, an das kabelgebundene Kopfhörer mit Mikrofon angeschlossen sind.",
      },
      {
        keyi18n: "KEY FACTS 4 3",
        value_de:
          "Die Security Box kommuniziert über eine Bluetooth-Schnittstelle mit einem Mobiltelefon oder Laptop/Tablet.",
      },
      {
        keyi18n: "KEY FACTS 4 4",
        value_de:
          "Der Audio-Stream am Eingang und Ausgang durchläuft mehrere Verarbeitungsstufen, um eine hochwertige Übertragung der verschlüsselten Informationen zu gewährleisten.",
      },
      {
        keyi18n: "KEY FACTS 4 5",
        value_de:
          "Die Verschlüsselungstechniken, die in der Security Box verwendet werden, verhindern, dass Dritte Daten entschlüsseln können, wenn sie ein Gespräch abfangen.",
      },
      {
        keyi18n: "KEY FACTS 4 6",
        value_de:
          'Wenn der Audio-Stream von Dritten abgefangen wird, wird er wie ein kontinuierlicher Strom von knisternden und quietschenden "Geräuschen" klingen.',
      },
      {
        keyi18n: "KEY FACTS 4 7",
        value_de:
          "Die Security Box bietet eine einzigartige Lösung für Unternehmen, um ihre sensiblen Informationen vor Konkurrenten und Cyberkriminellen zu schützen.",
      },
      {
        keyi18n: "KEY FACTS 5",
        value_de:
          "Unsere SMART WATCH MANAGEMENT APP bietet eine nahtlose Erfahrung für Benutzer, um mehrere Smartwatches auf einer Plattform zu verwalten.",
      },
      {
        keyi18n: "KEY FACTS 5 1",
        value_de:
          "Benutzer können über 20 Uhrmodelle mit verschiedenen Funktionalitäten wie Herzfrequenzmessung, Stressindizes, Temperaturmessung, sportlichen Aktivitäten und Schlafdaten verbinden und verwalten.",
      },
      {
        keyi18n: "KEY FACTS 5 2",
        value_de:
          "Die App ist mit Strava verbunden, was es Benutzern ermöglicht, Workouts und Kalorien einfach zu verfolgen.",
      },
      {
        keyi18n: "KEY FACTS 5 3",
        value_de:
          "Unsere App richtet sich an eine vielfältige Benutzergruppe, einschließlich älterer Menschen, Fitness-Enthusiasten, Kindern und Frauen, mit Frauencalender und persönlichen Einstellungen.",
      },
      {
        keyi18n: "KEY FACTS 5 4",
        value_de:
          "Das intuitive Design und die benutzerfreundliche Oberfläche der App bieten Benutzern eine stressfreie Erfahrung bei der Verwaltung ihrer Smartwatches.",
      },
      {
        keyi18n: "KEY FACTS 6",
        value_de:
          "Unser Taxidienst wird von einer Reihe von Softwareanwendungen betrieben, einschließlich Klienten- und Fahrer-Apps, Admin-Panels und einem Callcenter. Wir verwenden persönliche Einstellungen und Zwei-Faktor-Authentifizierung, um die Sicherheit zu gewährleisten. Unsere Navigation- und Zahlungssysteme sind integriert, um den Prozess des Anrufs eines Taxis einfach und schnell zu gestalten. Mit Funktionen wie Chat-Support, Nachrichten und Benachrichtigungen, SMS-Service und Analytik arbeiten wir ständig daran, unseren Service zu verbessern. Unser Taxidienst sticht aus der Konkurrenz heraus durch seine fortschrittlichen Funktionen, sichere Zahlungsoptionen und hervorragenden Kundensupport.",
      },
      { keyi18n: "Life science ", value_de: "Life Science" },
      {
        keyi18n: "Life science li 1",
        value_de: "Multifunktionale Smart-Geräte (Armbanduhr, Smart-Armbänder)",
      },
      { keyi18n: "Life science li 2", value_de: "Smart-Home-System" },
      {
        keyi18n: "Life science li 3",
        value_de: "Software für Computerzubehör",
      },
      { keyi18n: "Life science li 4", value_de: "Videodienst" },
      { keyi18n: "Multimedia", value_de: "Multimedia" },
      { keyi18n: "Our team", value_de: "Unser Team" },
      {
        keyi18n: "Quality Assurance (QA)",
        value_de: "Qualitätssicherung (QA)",
      },
      { keyi18n: "RESULT", value_de: "ERGEBNIS:" },
      {
        keyi18n: "RESULT 1",
        value_de:
          "Mit dem Video-Service können Benutzer beruhigt sein, da sie jederzeit ein wachsames Auge auf ihre Immobilien oder Unternehmen haben können. Die fortschrittlichen Funktionen der Plattform wie Remotezugriff, Echtzeitüberwachung und Archivwiedergabe machen sie zu einem wertvollen Werkzeug zur Verbesserung der Sicherheit und der Gesamtleistung. Ob für persönliche oder professionelle Zwecke, Video-Service liefert zuverlässige Ergebnisse und eine benutzerfreundliche Erfahrung.",
      },
      {
        keyi18n: "RESULT 2",
        value_de:
          "In der heutigen schnelllebigen digitalen Welt benötigen Unternehmen eine Zahlungsplattform, die eine Reihe von Zahlungsinstrumenten bietet, um Transaktionen effektiv zu verwalten. Sie benötigen eine Lösung, die den Zahlungsprozess vereinfachen, das Risiko von Betrug reduzieren und eine effiziente Möglichkeit bieten kann, Zahlungen über verschiedene Kanäle zu verwalten.",
      },
      {
        keyi18n: "RESULT 3",
        value_de:
          "Die Integration von Smart-Home-Systemen führt zu erhöhtem Komfort, Bequemlichkeit und Sicherheit und bietet Benutzern wertvolle Einblicke in ihren Energieverbrauch, optimiert die Energierechnungen und reduziert den Kohlenstoff-Fußabdruck.",
      },
      {
        keyi18n: "RESULT 4",
        value_de:
          "Mit dem Security Box können Unternehmen beruhigt sein, dass ihre Gespräche vollständig vertraulich sind und nicht überwacht oder abgefangen werden können. Dieses Gerät gewährleistet, dass vertrauliche Informationen sicher und vertraulich bleiben und hilft Unternehmen, ihr geistiges Eigentum und vertrauliche Daten vor neugierigen Augen zu schützen.",
      },
      {
        keyi18n: "RESULT 5",
        value_de:
          "Unsere App ermöglicht es Benutzern, mehr als 20 verschiedene Uhrenmodelle mit verschiedenen Funktionen zu verbinden und zu verwalten. Benutzer können umfassende Gesundheits- und Fitnessmetriken abrufen, einschließlich Herzfrequenzmessung, Stressindizes, Temperaturmessung, Sportaktivitäten und Schlafdaten. Die App ist auch mit Strava verbunden, sodass Benutzer ihre Workouts und Kalorien einfach verfolgen können. Mit dem Frauenkalender und den persönlichen Einstellungen richtet sich unsere App an eine vielfältige Benutzergruppe, einschließlich älterer Menschen, Fitness-Enthusiasten, Kindern und Frauen.",
      },
      {
        keyi18n: "RESULT 6",
        value_de:
          "Unser automatisierter Taxi-Service ermöglicht es Kunden, Fahrten nahtlos über eine mobile App anzufordern und zu bezahlen, während Fahrer in Echtzeit Fahrtanfragen und Anweisungen erhalten, was zu effizienten Abholungen und Absetzungen führt. Eine genaue Bestimmung der Koordinaten und eine intelligente Auftragsverteilung führen zu verkürzten Wartezeiten und verbesserten Sicherheitsmaßnahmen für die Passagiere. Fortgeschrittene Funktionen wie Bewertungssysteme, Bonus- und Empfehlungsprogramme sowie 24/7-Support helfen uns, die Erwartungen unserer Kunden zu übertreffen.",
      },
      { keyi18n: "Security", value_de: "Sicherheit" },
      {
        keyi18n: "Security li 1",
        value_de: "PKI-Infrastruktur, Zertifizierungsstelle",
      },
      {
        keyi18n: "Security li 2",
        value_de: "AFIS, automatisches Fingerabdruckidentifikationssystem",
      },
      {
        keyi18n: "Service1 p",
        value_de:
          "Unser Software- und Wartungsservice umfasst den gesamten Software-Entwicklungszyklus, von der Anforderungserfassung bis zur Bereitstellung und laufenden Wartung. Unser Expertenteam kann maßgeschneiderte Softwarelösungen entwerfen und entwickeln, um Ihren einzigartigen Geschäftsanforderungen gerecht zu werden. Wir bieten auch laufende Unterstützung und Wartung, um eine optimale Leistung und Zuverlässigkeit sicherzustellen.",
      },
      {
        keyi18n: "Service2 p",
        value_de:
          "Unser Beratungsservice bietet strategische Beratung und Fachkenntnisse, um Unternehmen bei der Optimierung ihrer Technologielösungen und der Maximierung ihres Return on Investment zu unterstützen. Unser Team von Beratern kann bei einer Vielzahl von Themen beraten, von der Technologiestrategie und Architektur bis hin zu Best Practices in der Softwareentwicklung und Projektmanagement.",
      },
      {
        keyi18n: "Service3 p",
        value_de:
          "Unser Quality Assurance (QA) Service stellt sicher, dass Ihre Softwarelösung höchsten Standards in Bezug auf Qualität und Leistung entspricht. Unser Team von QA-Experten wird Ihre Softwarelösung rigoros testen, um etwaige Fehler oder Probleme zu identifizieren, und detaillierte Berichte und Empfehlungen bereitstellen, um sicherzustellen, dass Ihre Softwarelösung den Erwartungen entspricht oder diese übertrifft.",
      },
      { keyi18n: "Services We offer", value_de: "Services, die wir anbieten" },
      {
        keyi18n: "Software and maintenance",
        value_de: "Software und Wartung",
      },
      { keyi18n: "Transport", value_de: "Transport" },
      { keyi18n: "Transport li 1", value_de: "Taxi" },
      { keyi18n: "Transport li 2", value_de: "E-tickets" },
      {
        keyi18n: "address",
        value_de:
          "registered office at 165 Spyrou Araouzou, LORDOS WATERFRONT COURT, Office 201A, 2nd floor, 3036 Limassol, Cyprus",
      },
      { keyi18n: "by", value_de: "by Emma Roberts" },
      {
        keyi18n: "case 1 description",
        value_de:
          "Video Service ist eine Videoüberwachungsplattform, die Echtzeitüberwachung, Aufnahme und Archivwiedergabe von Aufnahmen von einer unbegrenzten Anzahl von Kameras mit Fernzugriff von überall auf der Welt bietet.",
      },
      { keyi18n: "case 1 title", value_de: "Video Service" },
      {
        keyi18n: "case 2 description",
        value_de:
          "Es handelt sich um eine Plattform mit einer Reihe von Zahlungsinstrumenten, mit der Benutzer Geldbörsen erstellen, Überweisungen tätigen und verwalten, Rechnungen und Dienstleistungen bezahlen, als Händler (Waren und Dienstleistungen anbieten) und Agenten fungieren können.",
      },
      { keyi18n: "case 2 title", value_de: "Zahlungsgateway" },
      {
        keyi18n: "case 3 description",
        value_de:
          "Smart Home Systeme bieten eine bequeme Fernsteuerung von Heimsystemen und -geräten, erhöhen den Komfort, die Sicherheit und die Energieeffizienz. Diese Systeme helfen den Benutzern, Geld bei den Energiekosten zu sparen, den Energieverbrauch zu optimieren und ihren CO2-Fußabdruck zu reduzieren.",
      },
      { keyi18n: "case 3 title", value_de: "Smart Home System" },
      {
        keyi18n: "case 4 description",
        value_de:
          "Die Security Box ist ein kompaktes und sicheres Kommunikationsgerät, das verschlüsselten Sprachverkehr bereitstellt, um vertrauliche Kommunikation zu gewährleisten und Unternehmen und Fachleute vor Abhörung oder Lauschangriffen zu schützen.",
      },
      { keyi18n: "case 4 title", value_de: "Sicherheitsbox" },
      {
        keyi18n: "case 5 description",
        value_de:
          "Die Anwendung ermöglicht es Ihnen, eine Reihe von Uhrenmodellen (derzeit mehr als 20) mit verschiedenen Merkmalen und Funktionalitäten von Smartwatches, Fitnessuhren, Kinderuhren, für ältere Menschen und Armbändern mit Herzfrequenzmessung über eine Anwendung zu verbinden und zu verwalten.",
      },
      { keyi18n: "case 5 title", value_de: "Smartwatch-Verwaltungs-App" },
      {
        keyi18n: "case 6 description",
        value_de:
          "Unser automatisierter Taxi-Service bietet eine bequeme und sichere Fahrt für Kunden mit Echtzeit-Fahrtenanfragen und Wegbeschreibungen für Fahrer, was zu verkürzten Wartezeiten und verbesserten Genauigkeit führt. Mit fortschrittlichen Funktionen wie Bewertungssystemen, Empfehlungsprogrammen und 24/7-Support übertrifft unser Taxi-Service die Erwartungen der Kunden und sticht aus der Konkurrenz hervor.",
      },
      { keyi18n: "case 6 title", value_de: "Taxi-Service" },
      {
        keyi18n: "case key 1",
        value_de:
          "Video Service ist eine umfassende Videoüberwachungsplattform, die eine Reihe von Funktionen und Vorteilen bietet, einschließlich:\n<ul>\n<li>Echtzeitüberwachung und Aufzeichnung von Videomaterial von einer unbegrenzten Anzahl von Kameras.</li>\n<li>Fernzugriff von überall auf der Welt über einen Webbrowser oder eine mobile App.</li>\n<li>Benutzerfreundliche Schnittstelle mit anpassbaren Einstellungen für Kamerasteuerung und Ansichtsbedingungen.</li>\n<li>Audio- und Videoaufzeichnung auf Datei oder Archiv, mit der Möglichkeit, Filmmaterial jederzeit anzusehen und herunterzuladen.</li>\n<li>Alarmbenachrichtigungen für sofortige Warnungen potenzieller Sicherheitsverletzungen.</li>\n<li>Transcodierung von Video in beliebte Formate für einfaches Teilen und Wiedergeben.</li>\n<li>Sichere Datenlagerung und -verwaltung mit Optionen für Quotenverwaltung und Zahlung.</li>\n<li>Benutzerverwaltungssystem mit anpassbarem Zugriff und Berechtigungen für verschiedene Benutzerstufen.</li>\n</ul>\nOb für persönliche oder berufliche Zwecke, Video Service ist ein leistungsstarkes Werkzeug zur Verbesserung der Sicherheit, Effizienz und Gewährleistung von innerer Ruhe. Mit seinen fortschrittlichen Funktionen und einer benutzerfreundlichen Oberfläche bietet es eine umfassende Lösung für alle Ihre Videoüberwachungsbedürfnisse.",
      },
      {
        keyi18n: "case key 2",
        value_de:
          "Payment Gateway ist eine vielseitige Plattform, die eine Reihe von Zahlungsinstrumenten bietet, einschließlich Internet-Acquiring, P2P-Zahlungen, B2B grenzüberschreitende Zahlungen und einem Händlersystem. Die Plattform bietet eine effiziente Möglichkeit, Zahlungen über verschiedene Kanäle zu verwalten und vereinfacht den Zahlungsprozess für Unternehmen. Es beinhaltet Module für Anti-Betrug, Archivierung, Identifikation, Kryptographie, Optimierung von Provisionen und Dienstleistungen, Dienstleistungsaggregation, Statistiken und Analytik, Boni und Rabatte, elektronische Geldbörsen, Modul für Garantien und Compliance sowie Speicherung von Karten/Token/Keys. Die Payment Gateway-Schnittstelle bietet Web-Schnittstellen für verschiedene Benutzerrollen, einschließlich des Administrators und des Benutzerkabinetts. Insgesamt ist Payment Gateway eine robuste Zahlungsplattform, die eine umfassende Lösung für Unternehmen bietet, die ihre Zahlungen effektiv verwalten möchten.",
      },
      {
        keyi18n: "case key 3",
        value_de:
          "<ul>\n<li>Smart-Home-Systeme ermöglichen es Benutzern, verschiedene Aspekte ihres Zuhauses wie Beleuchtung, Heizung, Haushaltsgeräte, Multimedia-Geräte, Jalousien und Sicherheitsfunktionen remote zu steuern und zu automatisieren.</li>\n<li>Diese Systeme bestehen in der Regel aus Hardware-Geräten und Software-Anwendungen, die über das Internet oder andere Netzwerke miteinander kommunizieren.</li>\n<li>Die Verwaltung von Beleuchtung und Haushaltsgeräten kann Benutzern helfen, Geld bei den Energiekosten zu sparen, indem sichergestellt wird, dass Geräte nur bei Bedarf verwendet werden.</li>\n<li>Smart-Home-Systeme können auch Heizungs- und Wasserverbrauch optimieren, um Abfall zu reduzieren und die Energieeffizienz zu verbessern.</li>\n<li>Durch Überwachung des Energieverbrauchs und Optimierung von Dienstleistungsgebühren können diese Systeme Benutzern auch helfen, bei ihren monatlichen Rechnungen Geld zu sparen.</li>\n<li>Einer der Hauptvorteile von Smart-Home-Systemen ist erhöhte Sicherheit, mit Funktionen wie Einbruchserkennung, Wasseraustrittsprävention und Brand- und Gasleck-Detektion.</li>\n<li>Die Smart-Home-Technologie entwickelt sich weiter, mit neuen Funktionen und Integrationen, die regelmäßig hinzugefügt werden, um noch mehr Bequemlichkeit und Automatisierung für Benutzer zu bieten.</li>\n</ul>",
      },
      {
        keyi18n: "case key 4",
        value_de:
          '<ul>\n<li>Die Security Box ist ein kompaktes Gerät, das verschlüsselten Sprachverkehr bereitstellt, um eine sichere Kommunikation zu gewährleisten.</li>\n<li>Jeder Teilnehmer eines sicheren Gesprächs verwendet seine eigene Kopie des Geräts.</li>\n<li>Das Gerät funktioniert wie ein Bluetooth-Headset, an das kabelgebundene Kopfhörer mit Mikrofon angeschlossen sind.</li>\n<li>Die Security Box kommuniziert über eine Bluetooth-Schnittstelle mit einem Mobiltelefon oder Laptop/Tablet.</li>\n<li>Der Audio-Stream am Eingang und Ausgang durchläuft mehrere Verarbeitungsstufen, um eine hochwertige Übertragung der verschlüsselten Informationen zu gewährleisten.</li>\n<li>Die Verschlüsselungstechniken, die in der Security Box verwendet werden, verhindern, dass Dritte Daten entschlüsseln können, wenn sie ein Gespräch abfangen.</li>\n<li>Wenn der Audio-Stream von Dritten abgefangen wird, wird er wie ein kontinuierlicher Strom von knisternden und quietschenden "Geräuschen" klingen.</li>\n<li>Die Security Box bietet eine einzigartige Lösung für Unternehmen, um ihre sensiblen Informationen vor Konkurrenten und Cyberkriminellen zu schützen.</li>\n</ul>',
      },
      {
        keyi18n: "case key 5",
        value_de:
          "<ul>\n<li>Unsere SMART WATCH MANAGEMENT APP bietet eine nahtlose Erfahrung für Benutzer, um mehrere Smartwatches auf einer Plattform zu verwalten.</li>\n<li>Benutzer können über 20 Uhrmodelle mit verschiedenen Funktionalitäten wie Herzfrequenzmessung, Stressindizes, Temperaturmessung, sportlichen Aktivitäten und Schlafdaten verbinden und verwalten.</li>\n<li>Die App ist mit Strava verbunden, was es Benutzern ermöglicht, Workouts und Kalorien einfach zu verfolgen.</li>\n<li>Unsere App richtet sich an eine vielfältige Benutzergruppe, einschließlich älterer Menschen, Fitness-Enthusiasten, Kindern und Frauen, mit Frauencalender und persönlichen Einstellungen.</li>\n<li>Das intuitive Design und die benutzerfreundliche Oberfläche der App bieten Benutzern eine stressfreie Erfahrung bei der Verwaltung ihrer Smartwatches.</li>\n</ul>",
      },
      {
        keyi18n: "case key 6",
        value_de:
          "Unser Taxidienst wird von einer Reihe von Softwareanwendungen betrieben, einschließlich Klienten- und Fahrer-Apps, Admin-Panels und einem Callcenter. Wir verwenden persönliche Einstellungen und Zwei-Faktor-Authentifizierung, um die Sicherheit zu gewährleisten. Unsere Navigation- und Zahlungssysteme sind integriert, um den Prozess des Anrufs eines Taxis einfach und schnell zu gestalten. Mit Funktionen wie Chat-Support, Nachrichten und Benachrichtigungen, SMS-Service und Analytik arbeiten wir ständig daran, unseren Service zu verbessern. Unser Taxidienst sticht aus der Konkurrenz heraus durch seine fortschrittlichen Funktionen, sichere Zahlungsoptionen und hervorragenden Kundensupport.",
      },
      { keyi18n: "case1", value_de: "Video-Service" },
      {
        keyi18n: "case1 p",
        value_de:
          "Es ist eine Videoüberwachungsplattform, die Echtzeitüberwachung, Aufzeichnung und...",
      },
      { keyi18n: "case2", value_de: "Zahlungsgateway" },
      {
        keyi18n: "case2 p",
        value_de:
          "Ist eine Plattform mit einer Reihe von Zahlungsinstrumenten, die Benutzern das Erstellen von Geldbörsen, das...",
      },
      { keyi18n: "case3", value_de: "Smart Home System" },
      {
        keyi18n: "case3 p",
        value_de:
          "'Smart Home' ist ein Ökosystem Ihres Zuhauses für Ihre Sicherheit und Ihren Komfort...",
      },
      { keyi18n: "case4", value_de: "Sicherheitsbox" },
      {
        keyi18n: "case4 p",
        value_de:
          "Es ist ein kompaktes und sicheres Kommunikationsgerät, das verschlüsselten Sprachverkehr bietet...",
      },
      { keyi18n: "case5", value_de: "Smartwatch-Verwaltungs-App" },
      {
        keyi18n: "case5 p",
        value_de:
          "Die App ermöglicht es Ihnen, eine Reihe von Uhrmodellen (derzeit mehr als 20) mit unterschiedlichen Merkmalen und Funktionen von...",
      },
      { keyi18n: "case6", value_de: "Taxi-Service" },
      {
        keyi18n: "case6 p",
        value_de:
          "Unser Taxidienst wird von einer Suite von Softwareanwendungen betrieben, einschließlich...",
      },
      {
        keyi18n: "cases page p",
        value_de:
          "In diesem Abschnitt können Sie sich mit der Arbeit unseres Unternehmens im Bereich der Softwareentwicklung vertraut machen. Dadurch können Sie mehr über unsere Erfahrungen und Erfolge erfahren.",
      },
      { keyi18n: "contact btn", value_de: "Kontaktieren Sie uns" },
      { keyi18n: "contact form", value_de: "Kontaktformular" },
      { keyi18n: "contacts", value_de: "Kontakte" },
      {
        keyi18n: "discuss",
        value_de: "Sind Sie bereit, Ihr Projekt mit uns zu besprechen?",
      },
      { keyi18n: "form company placeholder", value_de: "Unternehmen *" },
      { keyi18n: "form email placeholder", value_de: "E-Mail *" },
      { keyi18n: "form last name placeholder", value_de: "Nachname *" },
      { keyi18n: "form message title", value_de: "Nachricht" },
      { keyi18n: "form name placeholder", value_de: "Vorname *" },
      { keyi18n: "form phone placeholder", value_de: "Telefon *" },
      { keyi18n: "get more", value_de: "Erfahren Sie mehr" },
      {
        keyi18n: "home description",
        value_de:
          "Wir entwickeln und implementieren innovative Lösungen, um unseren Kunden zu helfen, die Führer ihrer Branche zu sein.",
      },
      {
        keyi18n: "industries page p",
        value_de:
          "Bei Quadrotech verstehen wir, dass jede Branche einzigartige Herausforderungen und Anforderungen hat. Erforschen Sie die verschiedenen Branchen, die wir bedienen, und entdecken Sie, wie Quadrotech Ihrem Unternehmen helfen kann, zu gedeihen.",
      },
      { keyi18n: "nav cases", value_de: "Fälle" },
      { keyi18n: "nav contacts", value_de: "Kontakte" },
      { keyi18n: "nav home", value_de: "Heim" },
      { keyi18n: "nav industries", value_de: "Branchen" },
      { keyi18n: "nav reviews", value_de: "Bewertungen" },
      { keyi18n: "nav services", value_de: "Dienstleistungen" },
      { keyi18n: "navigation", value_de: "Navigation" },
      {
        keyi18n: "p footer",
        value_de:
          "Wir entwickeln und implementieren innovative Lösungen, um unseren Kunden zu helfen, führend in ihrer Branche zu sein.",
      },
      {
        keyi18n: "review item",
        value_de:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      },
      {
        keyi18n: "reviews page p",
        value_de:
          "In diesem Abschnitt können Sie das Feedback unserer Kunden überprüfen. Zufriedene Kunden sind unsere oberste Priorität, und wir arbeiten jeden Tag daran, sicherzustellen, dass Sie die gewünschten Ergebnisse erzielen.",
      },
      { keyi18n: "send", value_de: "Senden" },
      { keyi18n: "sent", value_de: "Nachricht gesendet!" },
      {
        keyi18n: "services page p",
        value_de:
          "Wir bieten end-to-end Softwareentwicklungsdienstleistungen, die den gesamten Projektzyklus von der Konzeption bis zur Bereitstellung und darüber hinaus umfassen. Unser Team ist in der Lage, maßgeschneiderte Softwarelösungen von Grund auf zu erstellen oder Unterstützung in jeder Phase Ihres Projekts zu bieten.",
      },
      { keyi18n: "slide description 1", value_de: "" },
      { keyi18n: "slide description 2", value_de: "" },
      { keyi18n: "slide description 3", value_de: "" },
      { keyi18n: "slide title 1", value_de: "" },
      { keyi18n: "slide title 2", value_de: "" },
      { keyi18n: "slide title 3", value_de: "" },
      {
        keyi18n: "team p",
        value_de:
          "Bei Quadrotech sind wir der Meinung, dass unser Erfolg direkt mit dem Talent, der Hingabe und dem Know-how unseres Teams verbunden ist. Mit Leidenschaft für Technologie und dem Engagement für Innovation bringt unser vielfältiges Team von Experten bei jedem Projekt eine Fülle von Erfahrungen mit. Lernen Sie die talentierten Einzelpersonen hinter unserem Unternehmen kennen und entdecken Sie, wie unser Team dazu beitragen kann, Ihr Unternehmen zu fördern.",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("content_de", null, {});
  },
};
