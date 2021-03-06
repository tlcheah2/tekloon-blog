
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
                    <li><a href="./" class="nav-link">Home</a></li>
                    <li><a href="./about" class="nav-link current-page">About me</a></li>
                    <li><a href="./recent-posts" class="nav-link">Recent posts</a></li>
                </ul>
            </nav>
        </div> <!-- / .container -->
    </header>
    <!-- Closing Header -->
    <div class="container content-container">
        <section class="about-me-container">
            <div>
                <img src="/media/minimalism-blog/about-me.jpg" alt="about me" class="thumbnail" />
                <div class="about-me-details">
                    <p class="section-title about-me-title">My name is John and living the simple life saved my life</p>
                    <p class="section-content about-me-content"><strong>I used to be a pack rat.</strong> I had so many
                        things that I thought that I loved, but the truth was I couldn't even appreciate any of it because
                        there was too much.</p>
                    <p class="section-content about-me-content">Things were terrible. I had a job that I hated, a home that
                        I didn't want to live in, and I couldn't hold a relationship.</p>
                    <p class="section-subtitle about-me-subtitle">How I turned things around</p>
                    <p class="section-content about-me-content"><strong>I was on the verge of a breakdown when I got rid of
                            everything.</strong> I literally put 90% of my possessions in the garbage, sold my place and
                        moved into a smaller apartment, and I quit my job.</p>
                    <p class="section-content about-me-content">It wasn't easy at all, but everything around me was in such
                        a bad place, I didn't know what else to do. And it worked.</p>
                    <p class="section-subtitle about-me-subtitle">Now I live the simple life</p>
                    <p class="section-content about-me-content">Now that I'm living a simple life, things are so much
                        better. I'm less stressed, enjoy life and work more, and I have more free time to enjoy.</p>
                    <p class="section-content about-me-content">With how much it turned my life around, <strong>I felt like
                            I had no choice but to start sharing how I did it</strong>, and how others can benefit from
                        living a simple life as well, which is why I started this site!</p>
                </div>
            </div>
        </section>
        <div class="side-container">
            <section class="side-section-container">
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

        </div>
    </div>>
    <footer>
        <p>Living the Simple Life</p>
        <p>Copyright 2019</p>
    </footer>

</body>

</html>`;


const WorksItem = () => (<div dangerouslySetInnerHTML={{ __html: html }}></div>);

export default WorksItem;