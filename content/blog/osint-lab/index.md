---
title: OSINT, What is my public Presence? 
date: 2018-05-11
description: An easy exercise to try passive recon on yourself. 
thumbnail: ./niti-k-Ie430IZPF90-unsplash.jpg
tags: [OSINT,security,lab]
---
<small>Photo by <a href="https://unsplash.com/@inhalexhale"  target="_blank" rel="noopener noreferrer">Niti K. on Unsplash</a></small>

Passive reconnaissance is done by gathering Open Source Intelligence (OSINT) information about a target without directly interacting with it. OSINT is information from third parties that is collected in a legitimate way. In general, the two terms are used interchangeably. 

Being aware of your public presence is becoming more important as social media, blogs, and Internet use grows. OSINT is a starting point for attackers to research an organization or individual for social engineering or other vulnerabilities. A security professional should do periodic reviews in their penetration testing to ensure that no sensitive information is publicly available.

**Practice Exercise:** Using [OSINT Framework](http://osintframework.com/) as a guide, find out what your public identity is.

**Real World Application:** OSINT can be used for vetting new hires or for verifying a disgruntled is not violating any Non Disclosure Agreements. OSINT is also used in penetration/vulnerability testing for networks, and services of an organization.

**CySA+ Target Exam Objective:** 1.0 Threat Management (27% of Exam)
1.1 Given a Scenario, apply environmental reconnaissance techniques using appropriate tools and processes.

![Zora Neale Hurston Quote, "Research is formalized curiosity. It is poking and prying with a purpose.](./quotezorahurston2.png)

Email Search: Search your email address to pull up identity results such as contact information, addresses, family members.

My Results: The most results I found for my email was on Pipl. There was a mix of accurate and inaccurate information about my identity. Information included address, family members, etc. Think of security questions that could easily be answered with this information such as, "what is your mother's maiden name?"

I also found some old active accounts that I forgot I ever tried such as Google Circles. Having old accounts that you forgot about could be susceptible to hijacking/identity fraud that you wouldn't notice.

* Bonus Exercise: A lot of the results were found on [WhitePages+](https://whitepages.plus/) which uses spider bots to crawl the internet and find information. Some websites create a robots.txt to ensure that those bots do not gather sensitive information, which is also a weak point in web page security. Check out [this article](http://www.robotstxt.org/robotstxt.html) on spider bots and you can do a basic hands on exercise of this in real world application on a login page in one of the [basic Enigma Group challenges](http://challenges.enigmagroup.org/basics/pre/3/). If you have time I recommend their other basic exercises which do not require much coding knowledge.

Breach Data: Search by emails or passwords against known breach information to see if your username/password has been breached.

My Results: The site I preferred was: [';--have i been pwned?](https://haveibeenpwned.com/) Ignoring it's cringy name, the layout is easy to read and the pages contain relevant articles and best practices such as [NIST guidance](https://www.nist.gov/itl/tig/projects/special-publication-800-63). I found 11 breaches and 2 pastes from 2 of my emails. The breach dates ranged from 2008-2017. I also searched some of my old passwords and found that most of them have not breached, but found one that was breached 11 times. This exercise reinforces the importance of password policies.

Domain queries: If you don't have your own website, try using www.google.com or www.example.com in the various domain query tools. These tools pull from information from Regional Internet Registries (RIRs) and DNS.

My Results: Some of the information you can find from this are domain administrator contact information, domain registry dates and provider. All of which could be key information for social engineering. You can also find key DNS information and services for the site. DNS Dumpster will even show you a map including DNS and MX services.

IP Address: Run your IP through one of the IP address geolocation tools.

My Results: It is scary how you can geolocate a precise physical address for a person's IP address. Since it is not common to use a VPN to mask your IP for personal browsing, this information can be used to get a person's geolocation for social engineering. You can view VPN comparisons at That One Privacy Site to protect your browsing.

Public Records: Using information you were able to find, select potential state and search for their name.

This will show relations and previous towns they've lived in as well as the ability to generate a further report about them.

These are all I found relevant for me, but continue to dig through the various options at OSINT Framework and also checkout additional free resources at Intel Techniques.

![Super Spy Comic by Matt Kindt](./super-spy.jpg)
OSINT can make you feel like a spy.