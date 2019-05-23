# WBA2SS19YilmazKabakciSacu

## Problemdarstellung

Die Deutschen sind Aktienmuffel:

Die Deutschen Bürgerinnen und Bürger setzen immer noch auf Sparbücher und Tagesgeldkonten, obwohl dieser im Angesicht der Niedrigzinspolitik fast absurd erscheint. 
Das Ersparte bringt nicht nur sehr geringe Zinsen sondern hat auch durch die Inflation über die Jahre hinweg eine geringere Kaufkraft. Es gibt unzählige Alternativen
wie man das Ersparte gewinnbringend anlegen könnte, u.a. Aktien und Aktienfonds. Laut einer Umfrage würde gerne jeder zweite Deutsche in Aktien investieren. Aufgrund 
der unkontrollierbaren Risiken die Ihnen erscheinen trauen sie sich jedoch dazu nicht. Für viele Privathaushalte ist die technische Bewertung der Aktien viel zu kompliziert.

Die aktuellen positiven oder negativen Nachrichten zu den Unternehmen an der Börse sowohl in Social-Media als auch in der Tagespresse sind für die Berechnung
bzgl. möglicher Kauf- bzw. Verkaufssignale sehr wichtig. Die Nachhaltung dieser Nachrichten ist allerdings für die Privathaushalte kaum möglich. 
Die vorhandenen Systemlösungen sind viel zu komplex oder geben kaum Rahmen für den Benutzer über die Gewichtung der Einzelnen Bewertungskriterien mitzubestimmen.

## Expose

Mit unserem Projekt möchten wir den Menschen das Handeln mit Aktien vereinfachen. Man hat alle Aktien auf einem Blick und kann zusätzlich die Steigung und Senkung sehen. 
Wenn man auf die einzelnen Aktien geht, sieht man zusätzlich die Steigungen und Senkungen von einem Jahr grafisch. Es werden auch Nachrichten und Twitter Beiträgen angezeigt. 
Durch die Hilfe von Twitte Beiträgen, Charts und Nachrichten können wir unseren Nutzern, durch das Ampelverfahren drauf hinweisen, ob es diese Aktie momentan empfehlenswert ist oder nicht und zusätzlich eine Bewertung der Aktien abgeben. 
Die Vorteile unseres Projektes sind zu einem, dass die Aufbewahrung viel leichter und sicherer ist. Zum anderen hat man alle Informationen zu den Aktien auf einem Blick, was das Nutzen
unserer Seite sehr erleichtert.Zusätzlich haben wir auch einen Chat Raum, wo sich die Usere untereinander austauschen können und ihre eigenen Erfahrungen mit den Aktien mitteilen können.
Unsere User haben nicht nur eine objektive Empfehlungen sondern könne sich auch subjektive Einblicke kriegen.

## Use Cases

Use Case #1:	Marco Müller ist 24 Jahre und interessiert sich seit einiger Zeit für Aktien. Er hat für sich passende Aktien gefunden und würde gerne wissen wie die Steigung und Senkung der Aktien bis jetzt aussehen, damit er sich ein Bild zu den einzelnen Aktien machen kann. Marco sitzt an seinem Laptop und versucht all diese Informationen zu sammeln. Dabei stößt er auf die Seite „Zotlar Share Room“. Dort kann er auf seine gewünschten Aktien klicken und dort kriegt er all die Informationen, die er braucht und sucht. Die Seite zeigt auch die Steigung und Senkung der Aktie in einem Diagramm dar.

Use Case #2:	Sara Schmidt ist 34 und handelt seit einiger Zeit mit Aktien. Sie hat bestimmte Aktien, mit denen sie sich beschäftigt. Neue Aktien sind sehr risikoreich für sie und geht den Aktien, mit denen sie noch nie gehandelt hat aus dem Weg. Doch diesmal möchte sie über ihr Schatten springen und sucht deshalb nach neuen Aktien, die empfohlen werden. Während der Suche stößt die 34-jährige auf die Seite „Zotlar Share Room“. Dort schaut sie sich verschiedene Aktien an, und kriegt durch das Ampelverfahren angezeigt, ob die Aktie empfehlenswert ist oder nicht. Zusätzlich hat sie alle Informationen, die sie braucht auf einem Blick und lernt damit auch die Aktie besser kennen. Durch dieses Verfahren fällt ihr es einfacher neue Aktien kennen zu lernen und sich zu entschieden, in welche Aktie sie investieren möchte und in welche nicht.

Use Case #3:	Leon Decker ist 50 Jahre und würde gerne wissen was die aktuellen und beliebtesten Aktien sind. Er hat mehrere Bekannte gefragt, doch leider konnte niemand ihm was Genaues dazu sagen. Leider hat er selber nicht viel Zeit, um sich selber schlau zu machen, da er arbeitstätig ist und zusätzlich mehrere Hobbys hat. Ein Freund von ihm hat ihn auf die Seite „Zotlar Share Room“ aufmerksam gemacht. Ihm wurde gesagt, dass es dort einen Chat Raum gibt, wo sich die User untereinander austauschen können. Außerdem werden auch News zu den Aktien angezeigt, die aus verschiedenen Beiträgen, Nachrichten und Social Media Gruppen entnommen werden. 
Der 50-jährige setzt sich an seinen Schreibtisch und besucht die Seite. Dort stößt er nicht nur auf die News nach denen er gesucht hatte sondern findet mehrere hilfreiche Informationen. 

# Dienstnutzer

## Beschreibung der Funktionalität (ggf. Anwendungslogik) und den Datenstrukturen mit Überlegungen dazu

### Funktionen

* Jeder kann sich die Aktien Liste anschauen
* Jeder kann eine Aktie öffnen und die Informationen und die    Nachrichten sehen
* User kann eine Aktie favorisieren
* User kann ein Favorit entfernen
* User kann Favoriten aus der Liste entfernen
* User kriegt eine Empfehlung bzw. eine Bewertung zu einer Aktie
* User kann im Chat Raum mit anderen Usern kommunizieren

### Anwendungslogik

* Aktienname können in die Suchfunktion geschrieben werden
* Informationen werden aus Nachrichten, Charts und Twitter Beiträgen gefiltert und gewichtet -> eine Empfehlung an den User ausgeben
* Empfehlungen -> User kann entscheiden ob er eine Empfehlung basierend auf die Nachrichten, Charts oder Twitter Beiträge möchte
* Informationen werden aus Nachrichten, Charts und Twitter Beiträgen gefiltert und gewichtet -> eine Bewertung der Aktie


## Überlegung zur Nutzung von Externen Webservicen

Wir haben uns überlegt die API zu verwenden, die uns ermöglicht Aktien und deren Informationen zu benutzen. Dadurch kriegen wir auch immer einen aktuellen Stand der Aktien, dass heißt, dass wir ebenfalls die Informationen der Aktien von der API bekommen.
Damit unser Ampelverfahren gut funktioniert und vertrauenswürdig ist, haben wir uns gedacht, dass wir Informationen zu Aktien aus Nachrichten, Beiträge und Charts rausfischen und sie dann bewerten. 
Unser Server würde die verschiedenen APIs durchgehen und die gesuchten Stichworte wie Aktie, 2019, Steigung, usw.. filtern. Diese Informationen werden bearbeitet und gewichtet.
Die Entscheidung besteht aus 30% Nachrichten, 30% Twitter Beiträge und 40% der Charts. 

## Beschreibung der asynchron implementierten Teile und Begründungen dazu

Unser Projekt soll einen Chatraum besitzen, wo sich die User untereinander austauschen und informieren können. Man kann dort seine Erfahrungen und seinen eigene Bewertung teilen. Zusätzlich kann man dort auch über Neuigkeiten die man gehört und gesehen hat erzählen. Somit haben unsere User nicht nur eine objektive Empfehlung bzw. eine Bewertung von unserem Server, sondern können sich auch subjektiv Meinungen einholen. Das Thema, des Chat Raumes, sollte hauptsächlich über die Aktien sein; es sollten nicht über privaten Themen gesprochen werden.

## Beschreibung der Funktionalität, die aus Zeitmangel nicht umgesetzt werden konnte






