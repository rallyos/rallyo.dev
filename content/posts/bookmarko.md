+++
date        = "2013-10-17"
title       = "Bookmarko - Learning by doing"
slug        = "bookmarko"
categories  = ["projects"]
project_url = "http://bookmarkoapp.com/"
+++

![Bookmarko](/img/bookmarko_large.png)

Months before I started Tuesday(The WordPress theme), I was thinking about ideas for a serious project and most of the time the word that was coming to my mind was Bookmarking.  

At this time, when I find something interesting on the internet, I had to open gmail and send the links to myself. As bad as it sounds that was my way to save things for later. I don't like how browsers handle bookmarks. It's messy, and the functionality is very limited, but I have to admit that now some browsers are trying to make things better. I also tried to find some bookmarking services, but all of them were like social networks and that is not what I need.  

So it should come to no surprise that I hugged the bookmarking idea. This is the time when Bookmarko comes in.

## In the beginning

When I started this project I didn't have any intentions to use App Engine and Python to code it. I had little experience with PHP, so obviously that was my choice of language. I just found Laravel and thought to give it a try, and it was looking nicer than Codeigniter.  

After some experiments with Laravel, I decided to put the project on hold until I finish the other projects that I was working on, so I can focus properly on Bookmarko.  


![Bookmarko](/img/bookmarko_1.png)  

> Early version October 2012

## Learn by doing

Couple of months later I began to work on it again, and I was starting to rethink the whole process of developing and releasing it. I had some concerns about scaling it and I didn't want to put money in it, at least in the beta testing process. At that time App Engine was free to test ( And it had to stay that way :( ), but it didn't have PHP support. I checked Amazon too, and after a small comparison between the two, I chose App Engine because of the developer community. I thought it will be easy to learn and work with it.  

I wondered will I have time to learn a new language and framework and wouldn't that slow me, but I accepted it as a challenge. At that time I only knew that Python has a really clean and nice syntax.  

To be fair it was pretty easy to start, Django has a very good documentation. I just had some problems returning data, but I found django-rest-framework which fixed them.
On the other side Django makes it so easy to build sites with Python, that I thought I didn't know Python well enough. So I decided to develop a little framework from scratch to improve my knowledge. It did not happen as I thought, but that is a whole other story.  

![Bookmarko](/img/bookmarko_2.png)  

> Early version April 2013

## Interface


Current interface is not that different from the image that I had in my head before starting the project. Sidebar with groups, top header with buttons for various functions, large search field and a list of saved sites.  

Initially I planned to make just one bookmarks view, a list. I still had no idea how to design the others. But through the developing process I started experimenting for fun, and I really liked the grid of 'card' like items.
The card shows more information about the saved site, it gives nicer look to the user's collection, and the page is easier to adapt for mobile devices.  

I strongly believe that most of the actions that user performs in an app should be animated. It's a whole different experience when you see that card that you just deleted to shrink or move the left and disappear. So I put extra effort in implementing this experience into the app for almost every action.  

Another important thing that I am focused on is creating an easy to use non-desktop version of the web app. In the early days maybe it will have more bugs than normal, but it will get better over time.  

## In the near future

If I use web service for managing bookmarks I will want from it to provide simple, but useful features served with nice and minimal design and something special, something that will make managing 300+ bookmarks more easy.  

At the time I write this, Bookmarko is something close to beta, but it's not yet released, and it's not the service that I want to be, and maybe won't be even in a year or three. I plan to add many features, most of them will be based on productivity and user experience in the app.  

*I wrote this using draftin, [check out](http://draftin.com)*
