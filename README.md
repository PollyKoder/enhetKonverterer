# Målenhet konverterer

Denne ukens oppgave vil være å lage en applikasjon som skal konvertere målenheter. Du må bruke HTML, CSS og JavaScript for å fullføre denne oppgaven. Og ta i bruk flere ting vi har lært opp til nå for å lage en full applikasjon.

# Krav:
- Ta i bruk html semantiske form-elementer
- Sette opp tre konverteringer i JavaScript (for eksempel: cm, m og km(distanse))
- Modifisere default CSS stylingen
- Vise resultatet av konverteringen på nettsiden

Bonus oppgaver for de som ønsker en mer og større utfordringer. Bonus er ikke obligatorisk! Så lenge punktene under Krav er oppfylt er oppgaven besvart 😄

# Bonus Medium:
- Ta i bruk html semantiske form-elementer
- Sette opp fem konverteringer i JavaScript (for eksempel: mm, cm, m, km, mil(distanse))
- Personlig gjøre CSS stylingen til innholdet
- Vise resultatet av konverteringen på nettsiden
- Sette opp error-meldinger i console viss du velger samme målenhet på fra og til

# Bonus Hard:
- Ta i bruk html semantiske form-elementer
- Sette opp to ulike typer konverteringer (for eksempel: cm, m og km(distanse) OG ml, dl og l(volum))
- Personlig gjøre CSS stylingen til siden OG til begge konverterings metodene
- Vise resultatet av konverteringen på nettsiden
- Sette opp error-meldinger som et pop-up vindu på nettsiden viss du velger samme målenhet på fra og til

Innleverings metode:
- Github repository
- Netlify nettside

Due Oct 20.




# Egne notater:

- Legger først opp HTML element i samme stil som vi gikk igjennom i undervisning på manndag(16.10.23), prøver å holde semantisk HTML i tankene, har også søkt litt på nett for å finne inspirasjon fra andre enhets konverterere.
- Starter på litt simpel css til header/banner og font.
- Etter å ha navngitt id'er i html elementer, meget lite kreativt da jeg brukte samme navn som i undervisningen, kan jeg hente elementene inn i js og begynne på js koden.
- Dukker opp error i Console ang "incorrect use of label"...
- Kodet videre i js, i henhold til slik vi har blitt undervist og slik jeg vet at det skal fungere, men koden knakk og button er blitt til text, må være en feil et eller annet sted, trolig en skrivefeil.
- Fant skrivefeilen, den satt i selve button elementet. Men ser at js ikke gjør som den skal enda, så da må jeg fortsatt gå over koden for å se etter skrivefeil eller andre mangler. 
- Tar en liten pause og håper jeg finner problemet fort etterpå.

- Fant en feil, hadde satt .value etter displayValue querySelector...
- Merker at jeg ikke er vandt til å skrive kommentarer i selve koden, har prøvd å bruke litt tid på å legge inn kommentarer i ettertid denne gangen.
- Fant en relativt simpel metode jeg kunne bruke i js slik at det dukker opp et pop-up vindu som en error når man prøver å konvertere til og fra samme enheter.
- Sliter med an button ikke reagerer slik jeg vil at den skal når jeg prøver å justere css til å passe laptop skjerm. Tenker jeg prøver å legge button i en div, for å se om det gjør det lettere.
- Ser ut til at css'en fungerer bedre etter jeg la button i en div, men nå er problemet at alt er tilpasset til laptop... Vil si jeg syns det er lettere å justere responsiv design med laptop som utgangspunkt for så å endre på css med Media query slik at siden passer til andre skjermstørrelser.
- Jeg syns den ser litt merkelig ut når den vises på laptop skjerm, men til mobilt display ser det greit ut. Jaja, den fungerer slik den skal i alle fall, enda det er irriterende at jeg ikke får css til å slik jeg ønsker.