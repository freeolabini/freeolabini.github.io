---
layout: post.njk
date: 2019-09-28
image: /img/data.jpg
title: How can your organization protect against data leaks?
tags:
  - letteren
  - post
  - en
---
The last few years, many people have said that data is the new oil. What they mean with this is that data is increasingly becoming a resource that can be very valuable. Many companies out there rely primarily on data - and especially data about people - as their main revenue stream. Other organizations are obligated to keep data about people, such as government institutions of various kinds. But the analogy with oil has a darker side too - when an oil spill happens, the oil becomes a liability for the organization that had the oil, but it also damages the environment in various ways. And the same is true with data about individuals. Leaked data can be catastrophic for the organization where it comes from, but it also causes untold damage to the people.

Despite this, massive leaks of personal data has become a regular phenomena over the last ten years. We keep hearing about mega leaks with information about millions and even billions of items in them. Why does this keep happening, and can we do anything to stop it? There are many ways that data can leak out. Sometimes it’s done intentionally, by criminals who break in and steal the data. Sometimes the information is leaked by insiders who have legitimate access to it. But all too often, these leaks happen because of misconfigurations and technical mistakes.

Protecting against all kinds of attacks are a big subject, and takes a lot of time and resources. But as a first step, in this post we wanted to give some basic guidelines about what most organizations that handle large amounts of personal data should do to protect themselves. These guidelines are of course just a starting point, but if you don’t have them in place, it’s likely that a leak will happen to your organization sooner or later.

This advice is roughly divided up into technical actions and policy actions.

### Firewalls

Firewalls are a necessary component of network security. In general, every network should have a firewall protecting entry and exit to the network. But this is not enough, every single machine should be configured with its own firewall as well. In general, you want these to be configured as conservatively as possible. No ports should be open except for the ones necessary. And even those should be restricted to only the IP addresses they are supposed to talk to. The only things that should be possible to access from the outside of the network are services that are meant to be public. In general, this will only be web servers, and nothing else.

If you already have firewalls, make sure to regularly revise the rules and make sure they are as minimal and as closed as possible. Sometimes mistakes creep in. That is normal - but you need to have procedures in place to make sure you can catch them and rectify them quickly.

It’s important to not rely completely on firewalls. Sometimes organizations put a firewall on the entry point to their network and then think everything is fine - and that their internal network is always protected. But in security, we need to think about defense in depth. So if someone manages to break into the network, or if the outer firewall is misconfigured, it’s important to have protections even on the internal systems.

### Intrusion detection systems

In general, it’s a good idea to run intrusion detection systems (such as Snort) on a network. These systems will identify potential attackers and intrusions, and can be set up to shut down attackers or notify the system administrators. They can also be run on the individual machines, to make it more likely that intruders will be discovered.

These kinds of systems support a lot of configuration options, and allow for many possibilities. Start small, setting one up with the default options, and then see how it works and continue configuring it while learning more about the system.

### If the data is publicly available, implement rate limiting

Some kinds of personal data is meant to be publicly available. However, that doesn’t mean you can expose a database to the world and allow anyone to get all the data in it directly. Instead, when working with this kind of data it’s usually a very good idea to implement measures that limit how much data a single client can get access to. This can be done in a few different ways, depending on what kind of data we are talking about. One simple method is to only allow access to single items of data at a time, and then rate limiting how often the same client can look up information. This kind of rate limiting can be done with simple timers per IP address, or it can use more complicated systems with staggered timeouts.

Another way of controlling access to data is to require a person to register and authenticate before getting access to the data. In this way, if someone misuses the data, tries to download too much or automates scraping of it, the account can be limited.

Finally, CAPTCHA can also be a technique for making sure a client is not automatically downloading too much data.

### Use Shodan regularly for all your IP addresses

Your organization should have a list of all public IP addresses that is assigned and used by your organization. With this list you can do regular checks against public services such as Shodan (https://shodan.io). These services regularly scan the whole internet for common services. It’s a good idea to see whether any of your IP addresses show up in their scans - this way you will find out if you left a service open without meaning to, for example.

You can also search for your organizations name with Shodan. Sometimes this shows you IP addresses or services you have forgotten about - and sometimes it shows you other entities that are using your name for some reason.

Doing this kind of search on Shodan should be done regularly - preferably every month or so - to make sure you haven’t left something open that should be closed.

### Scan your networks using nmap

Services like Shodan are helpful, because they show you what a potential outsider could see. But you should also get in the habit of running your own scans, using a tool like nmap. By doing this, you get two benefits - you can scan ALL potential services on your IP addresses, not just the most common ones that Shodan looks for. And you can also scan your internal networks with private addresses to make sure you haven’t exposed anything internally, that should be closed.

Since nmap is a publicly available tool that anyone is free to use, it might be a good idea to simply write a script and schedule it to run every day. You can set things up so that if something changes, you will be immediately notified about it. This way, you will know if there are any mistakes or problems as quickly as possible.

### Separate logging servers

Tools like firewalls, intrusion detection systems and other kinds of services generate logs. If an incident ever happens, you will need to look at what happened and try to figure out the extent of the damage, if there were attackers that got in, or if something else happened. The problem is that all the different mechanisms will by default generate logs on their own machines. Collecting them all can be really problematic, and sometimes logs are rotated or deleted, depending on the configuration of the machine. If an attacker manages to break in, they might even modify the logs.

For all these reasons, it’s very important to have separate log servers set up, and that all services used on your network sends their logs to this separate server. You can then protect this log server, run analysis on all the logs in one place, and configure rotation and deletion of logs in only one place. If you ever have to investigate an incident, this setup makes a huge difference.

### Hire penetration testers

Not every organization has the security skills necessary to know how secure their network is. And even the ones that do sometimes make mistakes. For these reasons, it’s a good idea to hire outside security firms to perform penetration tests. These tests will tell you where you have weak spots that need to be improved.

Like many of these guidelines, this is not something you can just do once and then be done with it. Depending on what kind of data you have and how it’s processed, you need to schedule penetration tests as part of your regular business - and it should happen fairly often. Probably at least once a year.

### Have a CISO and/or privacy officer

Information Security is a concern that almost no organization can afford to ignore these days. And when it comes to concerns that are critical for an organization, someone needs to be responsible and accountable for it. This role is usually called Chief Information Security Officer (CISO). For smaller organizations, this person might have other responsibilities and roles as well. But if you’re handling personal data, you need to make sure this person exists in your organization. No matter if you’re a company or a government organization or something else, this role has to exist, and it needs to be crystal clear what their responsibilities are.

In larger organization, and in organizations that deal with a lot of private information, it is also a good idea to have a Chief Privacy Officer. This can sometimes overlap with the CISO, but sometimes the perspectives are different. The Chief Privacy Officer focuses on risks related to potential privacy intrusions, both from the outside, but also based on the practices of the organizations itself.

What’s important is not that exactly these Chief’s exist in an organization, but that the organization has people who are explicitly in charge of and responsible for these concerns. If these people have other roles as well, that can be fine, as long as the responsibility is clear. For larger organizations, these roles might also come with legal responsibility.

It’s also important to note that the CISO and CPO need to be aware of subcontractors and providers that might potentially have access or process the data. These officers have to make sure these providers also follow the same protections for the data, both legally and technically.

### Follow data protection regulations in all applicable countries

Personal data comes with a lot of potential regulations. In most countries there are laws and considerations that need to be carefully followed depending on what kind of data you do, and how you use it. There might also be more specific regulation regarding more sensitive information. In some countries, health information is treated differently. Information about children also requires stronger protection. Credit card information is usually regulated internationally as well as domestically. And many countries also have different requirements depending on how much information you have about individuals, compared to how many individuals you have data about. In some cases, different laws kick in if you combine two databases, compared to keeping them separate from each other.

Further, to figure out what laws are applicable, you probably need to look at the regulations of the country your organization exists in, but also the country where the data is physically stored. Further, some countries have regulations that cover their citizens no matter what country the data is handled in. And finally, if you’re processing the data in a different country than where it’s stored, you might also have to look at regulations in that country. As an example, say that a Brazilian organization has data stored in servers in Miami. They run processing jobs that are done by a data center in France. The people whose data is processed are from Brazil and Argentina. This implies you might have to ensure you comply with regulations in Brazil, US (and potentially Florida state regulations), France and Argentina. Further, since the European Union passed GDPR, you might have to make sure your data processing is compliant with GDPR as well.

Analyzing these questions usually need to happen pretty early in the process of an organization deciding to manage data. It can be complicated, but not doing it could lead to catastrophic legal risks for your organization.

### Have policies around who has access to data

While technical means can be used to protect the data, it’s also important that your organization is clear about who is supposed to have access to the data. When it comes to personal data in large quantities, having explicit policies about how that data is managed, who can see it and who can not is imperative. The technical decisions about access should come from policies that make clear who is authorized or not.

### Segment/compartmentalize your data

In order to minimize the risk of data, it can sometimes be a good idea to try to segment it, or split it in different ways. This sometimes has to be done in order to comply with regulations, but it’s also something that can make management easier. You can divide data vertically or horizontally. For example, in the above example, you can keep data about people from Brazil in one service, and data about people from Argentina in another. Or, you can keep basic data about individuals in one place, and then keep more sensitive information such as health data in a different system. That way you can make sure that you only access the more sensitive data when needed. And you can also put in place different policies about access to the different types of data.

### Anonymize the data

Sometimes you don’t need to keep all the data in the form you got it. Depending on the reasons why you need the data, it can sometimes be possible to de-personalize it, or even anonymize it by removing anything that identifies individuals uniquely. This can serve as some protection in case of an incident.

However, it’s worth keeping in mind that anonymizing data about individuals is extremely difficult. Researchers have shown that it is often possible to de-anonymize data sets with surprisingly little information in them.

### Don’t have the data

The best way to avoid incidents with data leaks or thefts is to not have the data in the first place. Before you start collecting information about individuals, think carefully about why you’re doing it, what purpose storing the data has, whether the potential privacy intrusion is worth it. In many cases, organizations collect significantly more information about individuals than is strictly necessary to perform their task. Sometimes this is done intentionally, since the information can be sold to third parties for significant profit. But other times it’s simply done because no one stopped and thought about it. So, stop and think about it. Do you really need to collect all the information you do? Is there any reason why you need to ask for the gender, or birth date, or ID number when someone is creating an account?

Many times, the answer will be no, and you will have a much lower risk of a potentially catastrophic incident. Remember, the only data that can be leaked is the data that you actually have.

### Conclusions

Information can be very valuable, but it is also a liability and a potential threat to your organization. There are many ways of managing this risk, but it needs to be done intentionally. Both technical and policy measures need to be in place. In today’s environment, it is not acceptable for an organization to collect personal data and not have an explicit strategy for how to protect that data. Breaches and leaks happen all the time, and the cost of these are too often paid by innocent individuals and not the organizations in question.

The guidelines in this post are a starting point. Don’t stop here. Be intentional about protecting the data. The fact that your organization is allowed to have this data is based on trust from the rest of society. That trust comes with the expectation that your organization acts responsibly and protects that data, according to the risks and threats that are out there. This is not a high standard - it’s the lowest level you should expect. Treat our data with respect.

Ola Bini, CAD
