---
title: Initial Adventures in Linux
description: I slowly go mad because of but fall in love with an OS.
preview: "I did it. I switched from Windows.\n\nAm I proud of it? Yes."
date: '2024-8-10'
tags:
  - Linux
published: true
---

<div class="blog-box">

I did it. I switched from Windows.

Am I proud of it? **Yes.**  
Am I a level 100 hacker now? **Yes.**  
Arch? **Yes.** I'm in the deep end now.

## The Beginnings

One fateful day, I was researching software that could effectively index and view all my photos I backed up onto a USB, one option looked promising: Photoprism. The first step was to install Docker, which I did on autopilot. I went on their website, downloaded the installer, and opened it. Easy. Until, my Windows version is too old? I'm running Windows 10! It may not be the newest version, but I don't want to update! (I heard the newest version has ads in the start menu, or maybe that's just Windows 11.) Either way, rather than update Windows, I thought it would be far easier and more justified to completely switch operating system and ecosystem to one that I had never used before and that has less software compatibity. And it was.

### New Laptop

I knew I wanted a new laptop for college. My old one runs well but is just a huge pain in the butt. It's so massive that it has a full-size keyboard, with a full number pad, *neither of which works*! I had to carry a separate, cheap keyboard with the laptop at all times if I wanted to type any number or *specifically the letter "P."* It wasn't an issue in high school because I used my ipad for all things schoolwork, but I did *not* want to have to lug that laptop around a college campus. So, I asked my dad for a new one. Owning a small software company, he has plenty of test computers lying around, and I'm very pleased with the one I got. It's small; it's sleak; we bought 32 GB of RAM for it because it came with only 4 GB (???), and the keyboard just works.

## The Install

### What distro do I dare engage?

I knew, and still know, really nothing about Linux. I knew it was an operating system, and that it's cool, except that a lot of software isn't supported on it. To expand on that solid knowledge base, I asked my sister, who was far ahead of me in this kind of stuff when she was even my age. She asked me some questions, and recommended a few distros and a few desktop environments, every name of which I had never heard before. After racking my brain to remember the ones she had discussed and doing a little more research, I decided on Arch. I was not afraid to tame the wild beast in the command line, and I really didn't feel like taking the easy way with Linux Mint. I also chose KDE Plasma partly because I love their mascot.

### The boot

I downloaded the Arch boot files from the MIT mirror site, as an attempt to hopelessly fulfill my dreams after being rejected from the school. I first tested it on a VM, and hey, it worked. I had installed my first operating system, and only after this could I dare booting Arch on the beautiful HP machine I had just received. I booted it, then I booted it a couple more times. In my geniusness, it took three install attempts for me to successfully configure the wifi *and* KDE Plasma at the same time, but I did it.

### Now what?

Configure bluetooth: not to hard, just a few commands. Configure the remote shared folder I use for my job to automatically mount on startup: a little harder. It took me at least three hours of unpaid time to fully configure that dang samba share. First to connect to it at all, then have it connect on start up, then give myself edit permissions. (I would get into the specifics but it was a few weeks ago at this point.) I thought I was finished, but sometimes, while saving in VS Code, my files would get corrupted by a buncha NULL characters, boo! I thought it might be some impossible network weirdness issue, but luckily chatgpt (in all its supreme knowledge) kindly reminded my to add `iocharset=utf-8` to my connection definition. Thank you chatgpt! I am anticipating the day when I will worship you as my AI overlord!

## <span class="highlight">My Initial Arch Linux Review</span>

![Arch Linux Logo](/staticimgs/archlinux.png)

## User Experience with KDE Plasma

KDE Plasma has been an incredibly easy transition from Windows, and it even has many functions I now wish Windows had. And it's so refreshing for it to be fully customizable. If I don't want any feature or button to be there, it doesn't have to be, and I'm not being pushed to use any browser or new thinly-veiled method of showing ads. 

## Arch Linux Use

It certainly hasn't been easy to use. If you want to be able to connect to a printer or bluetooth headphones without having to search through the Arch Wiki and install packages, then it's not for you, but I've enjoyed it. In an otherwise pretty boring summer, Arch Linux has made every day on the computer an adventure, and having configured the basics, I can do most everything I will have to for school without issue. There are still some things I haven't figured out, but it's so much fun when I finally do. (If anyone knows how to enable font anti-aliasing specifically on LibreOffice please hook me up. I tried the steps online but they haven't changed anything, and it looks awful.)

## Overall

I won't be switching my main computer back to Windows any time soon. I'm willing to put up with occassionally having to use the web version of Office 365, and I'm keeping my old computer on hand to play Age of Empires IV, but my time using Arch Linux has been a blast. (Although we'll see what happens when I get one of those "unstable rolling updates" I've heard rumors about.)

</div>