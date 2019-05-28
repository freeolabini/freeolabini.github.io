---
title: About Ola Bini
layout: post.njk
image: /img/oladrawing.jpg
---

Ola è più di una semplice persona detenuta dalle autorità in Ecuador. È una persona con una brillante carriera nello sviluppo software, nonché un amico e un collega per molti di noi. Qui una timeline per Ola con i punti salienti:

### 2009-2009  Contributi al progetto JRuby

Ola è stato fondamentale nella comunità JRuby portando l'efficacia e la produttività di Ruby sulla Java Virtual Machine in modo che team enterprise avessero un ulteriore mezzo per distribuire le soluzioni Ruby per una moltitudine di possibilità applicative. Vedi [i commits di Ola su Jruby](https://github.com/jruby/jruby/commits?author=olabini)

### 2009 -2011 Il suo linguaggio di programmazione 'Ioke'

Ola ha creato il proprio linguaggio sperimentale per JVM chiamato "Ioke". Vedi il suo [gruppo su GitHub](https://github.com/Ioke) e [una sua intervista sul linguaggio nel 2014](https://www.youtube.com/watch?v=LlKdWx2YybU)

### Il suo linguaggio di programmazione 'Seph'

Ola ha creato il proprio linguaggio sperimentale chiamato "Seph", con gli obiettivi di concorrenza ed espressività. Vedi il suo [gruppo su GitHub](https://github.com/seph-lang/seph)

### JesCov

JesCov è uno strumento open source per misurare la 'code coverage' in JavaScript. Permette di scoprire sia la 'line coverage' che la 'branch coverage' da qualsiasi
codice sorgente ES3-compatibile. Non è legato a nessun particolare framework di test,
ma l'unico punto di integrazione attuale è per Jasmine. L'approccio generale è
basato su un formato di interscambio di dati JSON, significa che alcuni degli strumenti di reporting potrebbero potenzialmente essere utilizzati con dati raccolti da sorgenti diverse dal core di JesCov.

Vedi il repository [qui](https://github.com/jescov) ed il sito web del progetto [qui](http://jescov.olabini.com/)

### CoyIM

CoyIM è un chat client sicuro e protetto di default: nessuna impostazione da modificare,
nessun plugin da installare, nessuna configurazione da modificare. È un client di chat
creato da Ola e dal suo team. Il suo sito web è [qui](https://coy.im/) e il
repository github è [qui](https://github.com/coyim/coyim)

### Gosecco for Subgraph

gosecco è un progetto per fornire una serie completa di strumenti necessari per lavorare con
regole seccomp BPF in Golang. Le funzionalità principali sono il
parser e compilatore - ma il progetto supporta anche un assembler e
disassembler rudimentali. 
Supporta anche un emulatore che può essere adattato per fornire un output 
se le tue regole fanno effettivamente ciò che pensi che dovrebbero o meno fare. Nessuno di
questi componenti è esposto da riga di comando - sono pensati per essere usati come
librerie per applicazioni e sistemi di livello superiore.

Il repository github è [qui](https://github.com/twtiger/gosecco). Una nota di ringraziamento 
di SubgraphOS per il suo sviluppo può essere trovata [qui](https://subgraph.com/blog/index.en.html)
(nella sezione Acknowledgments).

### Enigmail

Enigmail è un add-on sicurezza per Mozilla Thunderbird. Esso consente di utilizzare OpenPGP per crittografare e firmare digitalmente le tue e-mail e decifrare e verificare i messaggi che ricevi. Enigmail è free software.

Il contributo di Ola si è concentrato su come rendere più semplice futuri contributi a Enigmail. 
Questo ha significato strumenti per il provisioning 'from scratch' di macchine di sviluppo per il progetto, integrazione in Travis CI, aggiunta di unit test e test funzionali più estesi, refactoring, aggiunta del supporto per Parcimonie e di analisi del codice.

Puoi leggere le considerazioni di Ola a riguardo [qui](https://www.thoughtworks.com/de/insights/blog/lessons-learned-working-enigmail)
Puoi trovare i commit di Ola [qui](https://gitlab.com/enigmail/enigmail/commits/master?utf8=%E2%9C%93&search=Ola+Bini)

### Tor

Tor è un software gratuito e open source che permette comunicazione anonima on-line. Il
nome deriva da un acronimo del nome originale del progetto "The
Onion Router". Tor reindirizza il traffico Internet attraverso una rete gratuita, globale,
di volontari costituita da oltre settemila 'relays' per nascondere la posizione e
l'utilizzo di un utente da chiunque effettui spionaggio sulla rete
o analisi del traffico.

Ola ha lavorato alla proposta del 'entry Guard' algorithm (come specificato 
in queste [pubblicazioni](https://www.freehaven.net/anonbib/#wpes12-cogs)). 
Il primo proposal può essere trovati [qui](https://gist.github.com/olabini/343da01de8e01491bf5c) e la discussione relativa ad essa può essere trovata [qui](https://lists.torproject.org/pipermail/tor-dev/2016-February/010392.html).


Ha anche fatto un sacco di test e refactoring che possono essere trovati [qui](https://github.com/torproject/tor/commits?author=olabini&before=206d28ff152f2df5ccf966a5923804718f49b43b+35)

Le riflessioni di Ola a riguardo possono essere trovate [qui](https://www.martinfowler.com/articles/tor-for-technologists.html)

### Let's Encrypt

Let’s Encrypt è una Certification Authority gratuita, automatizzata ed aperta.

Ola e il suo team hanno lavorato con Certbot. Certbot è parte dello sforzo di EFF di crittografare l'intera Internet. Certbot è un client completo ed estensibile per il
Let's Encrypt CA (o qualsiasi altra CA che usa il protocollo ACME) che può
automatizzare le attività di acquisizione dei certificati e configurazione dei Web server. Questo client funziona su sistemi operativi Unix-based.

I commit di Ola possono essere trovati [qui](https://github.com/certbot/certbot/commits?author=olabini)

### OTRv4

Off-the-Record Messaging (OTR) è un protocollo crittografico che fornisce
cifratura e 'deniability' per conversazioni di messaggistica istantanea. 
OTRv4 è la quarta versione del protocollo di messaggistica OTR. 
OTR versione 4 (OTRv4) offre una migliore proprietà di 'deniability' mediante l'uso 
di uno scambio di chiavi autenticate (DAKE), e migliore 'forward secrecy' 
tramite l'uso di 'double ratcheting'. 
OTRv4 può funzionare in cima a un protocollo di messaggistica esistente, come XMPP. 
Ola e il suo team hanno creato il protocollo e la sua implementazione.

* Il protocollo può essere trovato [qui](https://github.com/otrv4/otrv4/blob/master/otrv4.md)
* Il sito web può essere trovato [qui](http://otr.im/)
* L'articolo di Wikipedia può essere trovato [qui](https://en.wikipedia.org/wiki/Off-the-Record_Messaging)
* L'intero repository può essere trovato [qui](https://github.com/otrv4)

In aggiunta, il team di Ola's è stato impegnato quest'ultimo anno presentando 
i risulati del progetto. Qui sono disponibili presentationi e risorse:

* Il [paper](https://petsymposium.org/2018/files/hotpets/7-bini.pdf) scritto per PETS2018
  e la [presentazione](https://youtu.be/Px2WEQAzDCg?t=4769)
* La [presentazione](https://datatracker.ietf.org/meeting/103/materials/slides-103-pearg-otrv4-slides-01) al IETF
* La [presentazione](https://www.youtube.com/watch?v=KR4s6t9D9Jo) al CCC (35c3)
* La [presentazione](https://www.youtube.com/watch?v=JYTEn2as0Rg) al COSIC
* La [presentazione](https://fosdem.org/2019/schedule/event/otr4/) al FOSDEM
* La [presentazione](https://llvm.org/devmtg/2019-04/slides/TechTalk-Celi-Clang_tools_for_implementing_cryptographic_protocols_like_OTRv4.pdf) al LLVM Euro 2019 meeting

### Libgoldilocks

Un'implementazione della [curva ellittica Ed448-Goldilock](https://eprint.iacr.org/2015/625.pdf).
È basata su [libdecaf](https://sourceforge.net/projects/ed448goldilocks/) di Mike Hamburg.

Il repository in C e Golang possono essere trovati [qui](https://github.com/otrv4/libgoldilocks)
e [qui](https://github.com/otrv4/ed448).

