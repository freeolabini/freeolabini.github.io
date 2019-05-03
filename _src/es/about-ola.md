---
title: Sobre Ola Bini
layout: post.njk
image: /img/oladrawing.jpg
---

Ola is more than just a person detained by the authorities in Ecuador. He's a person with a distinguished career in software development as well as a friend and colleague to many.  Here's a timeline for Ola with the highlights:

### 2009-2009  Contributions to JRuby project

Ola was pivotal in the JRuby community bringing the power and productivity of Ruby to the Java Virtual Machine so that enterprise teams had an additional way of deploying Ruby solutions for a multitude of application possibilities. See [Ola's commits to Jruby](https://github.com/jruby/jruby/search?p=3&q=ola&type=Commits).

### 2009 -2011 His own programming language 'Ioke'

Ola made his own experimental language for the JVM called "Ioke". See his [GitHub organization](https://github.com/Ioke) and [an interview with him on the language in 2014](https://www.youtube.com/watch?v=LlKdWx2YybU)

### His other own programming language 'Seph'

Ola made his own experimental language called "Seph", which goal was concurrency
and expressiveness. See his [GitHub organization](https://github.com/seph-lang/seph)

### JesCov

JesCov is an open source tool for measuring code coverage of JavaScript. It
makes it possible to find out both line and branch coverage from any
ES3-compliant source code. It is not tied to any particular testing framework,
but the only current integration point is for Jasmine. The general approach is
based on a JSON data interchange format, which means some of the reporting tools
could potentially be used against data collected in some other way than running
the core JesCov project.

Find the repository [here](https://github.com/jescov) and the website [here](http://jescov.olabini.com/)

### CoyIM

CoyIM is a chat client that is safe and secure by default: no settings to change,
no plugins to install, no computer configuration to change. It is a chat client
created by Ola and his team. It’s website is [here](https://coy.im/) and the
github repository is [here](https://github.com/coyim/coyim)

### Gosecco for Subgraph

gosecco is a project to provide a full stack of tools necessary for working with
seccomp BPF rules from Golang. The primary pieces of functionality are the
parser and compiler - but the project also supports a rudimentary assembler and
disassembler. It also supports an emulator that can be tweaked to provide output
on whether your rules actually do what you think they should do or not. None of
these tools are exposed as command line tools - they are meant to be used as
libraries for higher level applications and systems.

The github repository is [here](https://github.com/twtiger/gosecco). An statement
from SubgraphOS thanking for its development can be found [here](https://subgraph.com/blog/index.en.html)
(under the Acknowledgments section).

### Enigmail

Enigmail is a seamlessly integrated security add-on for Mozilla Thunderbird. It
allows you to use OpenPGP to encrypt and digitally sign your emails and to
decrypt and verify messages you receive. Enigmail is free software.

Ola’s contributions focused on making Enigmail easier to contribute to. This
meant to provision new machines from scratch for the project, hooking a Travis
CI, adding both unit tests and larger functional tests, refactoring, add
Parcimonie style support and static analysis.

You can read about Ola's thoughts about it [here](https://www.thoughtworks.com/de/insights/blog/lessons-learned-working-enigmail)
You can find Ola's commits [here](https://gitlab.com/enigmail/enigmail/commits/master?utf8=%E2%9C%93&search=Ola+Bini)

### Tor

Tor is free and open-source software for enabling anonymous communication. The
name is derived from an acronym for the original software project name "The
Onion Routing program". Tor directs Internet traffic through a free, worldwide,
volunteer overlay network consisting of more than seven thousand relays to
conceal a user's location and usage from anyone conducting network surveillance
or traffic analysis.

Ola worked on a proposal for the entry Guard algorithm (as defined in these
[papers](https://www.freehaven.net/anonbib/#wpes12-cogs)).The first proposal can
be found [here](https://gist.github.com/olabini/343da01de8e01491bf5c) and the
discussion around it can be found [here](https://lists.torproject.org/pipermail/tor-dev/2016-February/010392.html).

He also did a bunch of tests and refactorings that can be found [here](https://github.com/torproject/tor/commits?author=olabini&before=206d28ff152f2df5ccf966a5923804718f49b43b+35)

Ola's thoughts about Tor can be found [here](https://www.martinfowler.com/articles/tor-for-technologists.html)

### Letsencrypt

Let’s Encrypt is a free, automated, and open Certificate Authority.

Ola and his team worked with Certbot. Certbot is part of EFF’s effort to encrypt
the entire Internet. Certbot is a fully-featured, extensible client for the
Let's Encrypt CA (or any other CA that speaks the ACME protocol) that can
automate the tasks of obtaining certificates and configuring web servers to use
them. This client runs on Unix-based operating systems.

Ola's commits can be found [here](https://github.com/certbot/certbot/commits?author=olabini)

### OTRv4

Off-the-Record Messaging (OTR) is a cryptographic protocol that provides
encryption and deniability for instant messaging conversations. OTRv4 is the fourth version of
the OTR messaging protocol. OTR version 4 (OTRv4) provides better deniability
properties by the use of a deniable authenticated key exchange (DAKE), and better
forward secrecy through the use of double ratcheting. OTRv4 works on top of an
existing messaging protocol, such as XMPP. Ola and his team did the protocol and
the implementation.

* The protocol can be found [here](https://github.com/otrv4/otrv4/blob/master/otrv4.md)
* The website can be found [here](http://otr.im/)
* The Wikipedia article can be found [here](https://en.wikipedia.org/wiki/Off-the-Record_Messaging)
* The whole repository can be found [here](https://github.com/otrv4)

Additionally, Ola's team has been busy last year presenting. Here are our
presentations and resources:

* A [paper](https://petsymposium.org/2018/files/hotpets/7-bini.pdf) written for PETS2018
  and the [presentation](https://youtu.be/Px2WEQAzDCg?t=4769)
* The [presentation](https://datatracker.ietf.org/meeting/103/materials/slides-103-pearg-otrv4-slides-01) at IETF
* The [presentation](https://www.youtube.com/watch?v=KR4s6t9D9Jo) at CCC (35c3)
* The [presentation](https://www.youtube.com/watch?v=JYTEn2as0Rg) at COSIC
* The [presentation](https://fosdem.org/2019/schedule/event/otr4/) at FOSDEM
* The [presentation](https://llvm.org/devmtg/2019-04/slides/TechTalk-Celi-Clang_tools_for_implementing_cryptographic_protocols_like_OTRv4.pdf) at LLVM Euro 2019 meeting

### Libgoldilocks

A pure implementation of [Ed448-Goldilocks elliptic curve](https://eprint.iacr.org/2015/625.pdf).
It is based on [libdecaf](https://sourceforge.net/projects/ed448goldilocks/) by Mike Hamburg.

The repository in C and Golang can be found [here](https://github.com/otrv4/libgoldilocks)
and [here](https://github.com/otrv4/ed448).
