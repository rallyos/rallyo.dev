+++
date        = "2013-01-24"
title       = "Simplexpenses - The battle of the frameworks"
categories  = ["projects"]
project_url = "http://simplexpenses.herokuapp.com/"
+++

![Simplexpenses](/img/simplexpenses_large.png)

After the release of the early Bookmarko version, I started to look around for the next idea that would be interesting to be made and also to help me learn some new developer tools. That's why my approach was more "Let's see how this will work" than to make a full working app. But that doesn't mean that I was not paying attention to every detail.  

## Some technical stuff

This time for REST framework I wanted to try TastyPie. I spent day or two playing with it and reading the docs, but then I decided to go back to django-rest-framework because I thought that it's easy to set up and use. Later I found that I was used to how things were in the old version of django-rest, and the new one isn't that different from TastyPie when it comes to simple api setup. Anyway I decided to use it for this project. Maybe I will use TastyPie another time. Huge props to the creators of both.  

On client side I decided to use Angular instead Backbone which I am using for Bookmarko. Things started very tough. If your only experience with js frameworks is Backbone, then prepare for crash when you meet Angular. Services, Directives, Factories, it was a whole new world to learn and play with.  

The danger of learning a second framework is that you will always say things like "This was more easy with the first one" and you can easily be ignorant to the advantages that this new tool gives you.  

I had troubles with many things that are not obvious in the beginning and personally I am not a big fan of templating (I still like my HTML to be clean and easy to read). It looked that I will need time to get the whole feeling of how things should be done in Angular way.
So after a couple of days trying to build the app with Angular, I gave up and made a fresh start, this time with Backbone.  

After couple of hours rewriting everything with Backbone, I was trying to write some simple app functionality, but easily the code started to look a bit messy. I was constantly thinking how this can be done in Angular with only a few words or lines. My biggest need for this project was to update simultaneously separate parts of the app. This was very easy with the two-way data binding that Angular has, I thought. Then I realized that I don't want to make this app without the help of data binding, the 'change' event in Backbone wasn't enough for me. I decided not to search how to do it in Backbone but return again to Angular with more confidence.
Now as I release the early beta, I can say that Angular is great. In some cases will be hard to learn, but it saves a lot of time.  

## Simple is great

There isn't much to say about how I designed the app, except that I wanted to make the interface as simple as it can be. Showing only what's important to the user in combination with simple interface elements and a lot of white space. Another important goal was to animate every interaction with the app, I think that if the user manipulates something, there should be a visible feedback, this is how things work in our world.  

This is in short what I think was interesting to mention for this small project.  

*I wrote this using draftin, [check it out](http://draftin.com)*
