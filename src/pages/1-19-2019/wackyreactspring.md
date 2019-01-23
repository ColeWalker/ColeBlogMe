---
path: '/making-parallax-sidebars'
title: 'Making Parallax Sidebars Using React Spring'
date: '2019-01-19'
dateFormatted: 'January 19th 2019'
published: true
excerpt: It's been a while! Let's dive into how I made some cool, functional sidebars for my Gatsby-developed portfolio, using react-spring!
---
<p>Hello everyone! It's been a while since I've last written a blog post. Life and school kind of got in the way, but I've learned a TON since I last wrote anything, and I think that from
here on out, my blog posts are going to be a lot more valuable and interesting to read.</p>
<p>Today I'm going to break down how I built these cool little sidebars that I used for a parallax on my portfolio site: </p> <a href="https://www.walkermakes.com">walkermakes.com</a>
<br>
<h3> Tools needed for this tutorial: </h3>
<ul>
<li>React</li>
<li>React-Spring</li>
</ul>
<p>Yep, that's it! I used SASS to style my sidebar, but that's just personal preference. Anyways, let's dive in. </p>

```javascript
export default function SideBars({id, scrollTo, scrollTo1, scrollTo2, scrollTo3 }) {
    var blocks =[];
    var moveTo= [scrollTo, scrollTo1, scrollTo2, scrollTo3];
    for (var i=0; i<4; i++){
        blocks.push (<span className={id===i ? `selected`: `deselected`} onClick={moveTo[i]}></span>)
    }
    
  return (
    <div className="sidebarWrapper">
        {blocks}
    </div>
    
  )
}
```
<p>
Okay, so the above code might totally look like gibberish right now, and that's totally okay! I'm going to be breaking this down piece by piece. 
</p>
<p>
Before we can style anything, which is what we're going to be doing first, we need to actually you know, have the stuff to style with. The above function is just a simple functional component, but it uses some funky programmatic solution to make what we're going to be styling. The goal of this function is basically to return a bunch of spans that look like rectangles in a row. 
</p>
<p>
To make that rectangle row, all I did was make an empty array, set up a for loop which pushes a span to the array, and then in the return statement, I expanded the array inside a wrapper div. This is pretty simple, and you should totally be able to make a row of rectangles by doing that, and not worrying about the other stuff.
</p>
<p>
So let's talk about this weird className thing I've got going on here. On my site, I really wanted seperate styling corresponding to whatever part of the parallax you were looking at, so what I did here was pass in an integer corresponding with the page number to the function, denoted by the prop "id". What the className piece does is it checks to see if "id" is equal to "i" (the number of the span that is being returned), and if it is, it'll just set that span's classname to selected, meaning that it will have the styling of a selected span. This is super cool, and made the programming process a breeze, and super reusuable.
</p>
<p>
The other piece of this is the onClick, and it's a lot weirder. Like, super weird. So as I was playing around with React-Spring examples, I really couldn't find any where the parallax was controlled by a functional component created outside of the parent class. Since I didn't want my code to be completely unreadable, this meant I had to get a bit funky with my methodology. 
</p>
<p>
At first, I tried passing in the whole parallax ref to this component as a prop, but it just came through as an undefined object and I couldn't do anything with it. I then tried passing in the individual function for controlling a parallax to the component, but I couldn't pass in arguments to the function for some reason. But, I discovered that I could totally pass in individual, specific jumps to pages into the component, so I did that. 
</p>
<p>
Each one of the scrollTo is the parallax scrollTo function with the specific page as the argument. This was able to accomplish what I needed it to. 
</p>

```javascript
<Parallax pages ={4} scrolling={true} horizontal={false} ref={ref => this.parallax = ref}>
    <ParallaxLayer offset={0} speed={0} >
        <SideBars id={0} scrollTo={()=>this.parallax.scrollTo(0)} scrollTo1={()=>this.parallax.scrollTo(1)} 
        scrollTo2={()=>this.parallax.scrollTo(2)}  scrollTo3={()=>this.parallax.scrollTo(3)}/>
    </ParallaxLayer>
    <ParallaxLayer offset={1} speed={0}>
        <SideBars id={1} scrollTo={()=>this.parallax.scrollTo(0)} scrollTo1={()=>this.parallax.scrollTo(1)} 
        scrollTo2={()=>this.parallax.scrollTo(2)}  scrollTo3={()=>this.parallax.scrollTo(3)}/>
    </ParallaxLayer>
    <ParallaxLayer offset={2} speed={0}>
        <SideBars id={2} scrollTo={()=>this.parallax.scrollTo(0)} scrollTo1={()=>this.parallax.scrollTo(1)} 
                            scrollTo2={()=>this.parallax.scrollTo(2)}  scrollTo3={()=>this.parallax.scrollTo(3)}/>
    </ParallaxLayer>
    <ParallaxLayer offset={3} speed={0}>
        <SideBars id={3} scrollTo={()=>this.parallax.scrollTo(0)} scrollTo1={()=>this.parallax.scrollTo(1)} 
                scrollTo2={()=>this.parallax.scrollTo(2)}  scrollTo3={()=>this.parallax.scrollTo(3)}/>
    </ParallaxLayer>
</Parallax>
```

<p>
Above is the code for how I actually implemented this in my site! *Note that I did take out the content beneath the SideBars, just so that you wouldn't have to read through that as well. Your content goes in right under each SideBars instance. 
</p>