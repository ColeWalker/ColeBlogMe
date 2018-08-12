---
path: '/mybigproject'
title: 'My Big Project'
date: '2018-08-10'
dateFormatted: 'August 10th 2018'
excerpt: Here I discuss the project that I've spent the last couple of weeks on, what technologies I used, and what I learned along the way.
published: true
---
<p>
If you follow this blog, you've noticed that I've not published an article for about 2 weeks now. The reason behind that is simply because I've been focusing my time and energy on a project that wrapped everything I've been learning this summer into one. The project wasn't really anything too creative, it was nothing that hadn't been done yet, but I picked it up in order to learn, not to make money. Luckily, I learned a lot.
</p>

<p>
You're probably wondering what this project was, and to answer- it was a note-taking webapp! As soon as I learned about persistent, server-side data, I knew that a note-taking app would basically encompass every piece of technology that I had been working with thus far, and I ended up learning some new ones that I wasn't even aware of!
</p>

<p>
The front-end was built in React, without any kind of static-site generator like Gatsby, I wanted this to be a pure React experience. For styling and such, I used styled-components, which is my favorite React plugin to date. Re-usable custom components come in handy, and it allows for a much more readable styling experience when compared to a digustingly long css file attached to the index page. 
</p>

<p>
The back-end was built in Node.js, and my database of choice was MongoDB. Mongo is super cool, it's so simple to set up and use, and the Mongoose middleware for Node is absolutely fantastic and really streamlined the whole REST process. 
</p>

<p>
Everything I've mentioned so far I've already had experience with, so it's time to move onto the main piece of this application that I had to learn- Redux. Redux was initially terrifying. In fact, the tutorials that I read or watched all acknowledged how scary the boilerplate and set-up of redux is for beginners. For those who aren't aware of it, Redux is essentially a state container for javascript in general. It centralizes state into what's called a store, and you can easily attach that state to whatever components you need to. Redux is usually used for much larger applications, but it really shines when making calls to an API, which was obviously very important to my application. 
</p>

<p>
Altogether, the app was a fantastic learning experience. When learning something, there's nothing quite like actually doing it and fixing all of the problems that arise yourself, and there were a lot of problems. I finally feel very comfortable in React, even though I'm still learning a lot of it. (Native will likely be my next big venture)
</p>

<h1> What have I been reading? </h1>
<p>I'm still slowly working my way through Code Complete right now- although SuviveJS has grabbed my attention, and might be what I start to go through next. I like to say that Code Complete is the perfect night-stand book, because it really puts me to sleep. Since I started to read it, my coding practices have definitely improved, but it is easily the dryest book I've ever read. 
</p>