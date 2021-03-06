
import React from 'react';

const html = `<!DOCTYPE html>
<html lang="en">

<head>
  <link href="https://fonts.googleapis.com/css?family=Lora|Ubuntu:400,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/minimalism-blog/styles.css">
</head>

<body>
  <!-- Starting Header  -->
  <header>
    <div class="container container-nav">
      <div class="site-title">
        <p class="title">Living the simple life</p>
        <p class="subtitle">A blog exploring minimalism in life</p>
      </div>
      <nav>
        <ul class="navigation">
          <li><a href="./" class="nav-link current-page">Home</a></li>
          <li><a href="./about" class="nav-link">About me</a></li>
          <li><a href="./recent-posts" class="nav-link">Recent posts</a></li>
        </ul>
      </nav>
    </div> <!-- / .container -->
  </header>
  <!-- Closing Header -->
  <div class="container content-container">
    <!-- Article section -->
    <main class="article-container">
      <article class="featured-article">
        <div class="thumbnail-container">
          <img src="/media/minimalism-blog/life.jpg" alt="life" />
          <p class="date-comment">July 23, 2019 | 3 comments</p>
        </div>
        <div class="article-content-container">
          <p class="section-title">Finding simplicity in life</p>
          <p class="section-content article-subtitle"><strong>Life can get complicated really quickly</strong>, but it doesn't have to be! There are many
            ways to simplify your life, a few of which we've explored in the past. This week we're taking a bit of a
            approach though, in how you can find simplicity in the life you already living.</p>
          <a href="#" class="link-continue-reading">continue reading</a>
        </div>
      </article>
      <article class="normal-article">
        <div class="thumbnail-container">
          <img src="/media/minimalism-blog/food.jpg" alt="food" class="article-thumbnail" />
          <p class="date-comment">July 19, 2019 | 3 comments</p>
        </div>
        <div class="article-content-container">
          <p class="section-title">Keeping cooking simple</p>
          <p class="section-content article-subtitle">Food is a very important part of everyone's life. If you want to be healthy, you
            have to eat healthy. One of the easiest ways to do that is to keep your cooking nice and simple.</p>
          <a href="#" class="link-continue-reading">continue reading</a>
        </div>
      </article>
      <article class="normal-article">
        <div class="thumbnail-container">
          <img src="/media/minimalism-blog/work.jpg" alt="work" class="article-thumbnail" />
          <p class="date-comment">July 12, 2019 | 3 comments</p>
        </div>
        <div class="article-content-container">
          <p class="section-title">Simplicity and work</p>
          <p class="section-content article-subtitle">Work is often a major source of stress. People get frustrated, it ruins their
            relationship with others and it leads to burnout. By keeping your work life as simple as possible, it will
            help balance everything out.</p>
          <a href="#" class="link-continue-reading">continue reading</a>
        </div>
      </article>
      <article class="normal-article">
        <div class="thumbnail-container">
          <img src="/media/minimalism-blog/deco.jpg" alt="life" class="article-thumbnail" />
          <p class="date-comment">July 3, 2019 | 3 comments</p>
        </div>
        <div class="article-content-container">
          <p class="section-title">Simple decorations</p>
          <p class="section-content article-subtitle">A home isn't a home until you've decorated a little. People either don't decorate,
            or they go overboard and it doesn't have the impact they were hoping for. Staying simple will help draw the
            eye where you want it to and make things pop like never before.</p>
          <a href="#" class="link-continue-reading">continue reading</a>
        </div>
      </article>
    </main>
    <aside class="side-container">
      <section class="side-section-container">
        <div>
          <p class="title">About Me</p>
          <img src="/media/minimalism-blog/about-me.jpg" alt="about me" class="thumbnail" />
          <p class="description">I find life better, and I'm happier, when things are nice and simple.</p>
        </div>
      </section>
      <section class="side-section-container side-middle-section">
        <div>
          <p class="title">Recent posts</p>
          <div class="post">
            <img src="/media/minimalism-blog/food.jpg" alt="food" />
            <p class="post-title">Keeping cooking simple</p>
          </div>
              <div class="post">
              <img src="/media/minimalism-blog/work.jpg" alt="work" />
              <p class="post-title">Simplicity and work</p>
              </div>
              <div class="post last-post">
                <img src="/media/minimalism-blog/life.jpg" alt="life" />
                <p class="post-title">Simple decorations</p>
              </div>
          </div>    
      </section> 
    </aside>
  </div>
  <footer>
    <p>Living the Simple Life</p>
    <p>Copyright 2019</p>
  </footer>
  </body>
</html>`;


const WorksItem = () => (<div dangerouslySetInnerHTML={{ __html: html }}></div>);

export default WorksItem;