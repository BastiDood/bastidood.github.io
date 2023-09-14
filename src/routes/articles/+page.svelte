<script lang="ts">
    import type { PageData } from './$types.js';

    // eslint-disable-next-line init-declarations
    export let data: PageData;
    $: ({ articles } = data);

    const fmt = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' });
</script>

<div class="prose max-w-none p-4 sm:p-12 md:p-16 space-y-8">
    <section class="rounded-xl bg-card p-8 shadow-xl">
        <h1>Articles</h1>
        <p>
            In my spare time, I write technical blog posts at <a href="https://dev.to">dev.to</a>
            (<a href="https://dev.to/somedood">@somedood</a>) about various topics in web
            development, systems programming, and computer science. As such, many of my articles
            discuss JavaScript best practices, design patterns, performance techniques, and
            limitations. In other times, I focus on the low-level implications of systems
            programming patterns—particularly in the context of Rust, C, and C++.
        </p>
    </section>
    <section class="prose rounded-xl bg-card p-8 shadow-xl max-w-none">
        <h2>Featured Articles</h2>
        <div class="gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
            <article>
                <a href="https://dev.to/somedood/programming-is-hard-2p87">
                    <img
                        src="https://res.cloudinary.com/practicaldev/image/fetch/s--yLAwBlXq--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/2viihq3r5g6c9h7zatbo.png"
                        alt="Listing of performance, security, teamwork, functionality, maintainability, readability, and user experience."
                    />
                </a>
                <h3>Programming is Hard</h3>
                <p>Published <time datetime="2019-02-17">February 17, 2019</time></p>
                <p>
                    Indeed it is. Hollywood films often portray programmers as fast-typing computer
                    wizards who can "hack" into anything. We all know that this can never be farther
                    from the truth. Here is an article that discusses what goes into the many
                    aspects of "real" programming.
                </p>
            </article>
            <article>
                <a
                    href="https://dev.to/somedood/18-essential-videos-that-fundamentally-shaped-my-understanding-of-javascript-3ib"
                >
                    <img
                        src="https://res.cloudinary.com/practicaldev/image/fetch/s---ipK7V2d--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/dvi7ktu6s10mqfdb7j7e.png"
                        alt="A collection of YouTube thumbnails featuring the 18 essential videos."
                    />
                </a>
                <h3>
                    18 Essential Videos That Fundamentally Shaped My Understanding of JavaScript
                </h3>
                <p>Published <time datetime="2020-07-08">July 8, 2020</time></p>
                <p>
                    Learning JavaScript is a wild, tempestuous journey. With so much to learn, it is
                    difficult to keep up with the times. Here are 18 videos I consider to be
                    "essential" in learning JavaScript at a deeper level. Each of these videos once
                    sparked a "eureka moment" within me that ultimately helped in piecing together
                    the JavaScript puzzle.
                </p>
            </article>
            <article>
                <a href="https://dev.to/somedood/rust-reviewed-is-the-hype-justified-1pa1">
                    <img
                        src="https://res.cloudinary.com/practicaldev/image/fetch/s--Ht2L9e3o--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/5u4cv4vj6f6y0dtv0pd9.png"
                        alt="My character featuring multiple instances of Ferris the Crab on a beach."
                    />
                </a>
                <h3>🦀 Rust Reviewed: Is the hype justified? 🦀</h3>
                <p>Published <time datetime="2020-12-23">December 23, 2020</time></p>
                <p>
                    The Rust programming language has steadily been on the rise in terms of adoption
                    and popularity. But is all the hype justified? In this article, I reflect on my
                    experience with Rust in the past year, tackling the golden moments as well as
                    the pain points.
                </p>
            </article>
            <article>
                <a
                    href="https://dev.to/somedood/the-proper-way-to-write-async-constructors-in-javascript-1o8c"
                >
                    <img
                        src="https://res.cloudinary.com/practicaldev/image/fetch/s--TLVfqzI4--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mgfbm1966l0yesgi9hs3.png"
                        alt="My character in front of a cartoonish construction site."
                    />
                </a>
                <h3>The Proper Way to Write Async Constructors</h3>
                <p>Published <time datetime="2021-08-18">August 18, 2021</time></p>
                <p>
                    At the moment, there is no standardized way to write asynchronous constructors
                    in JavaScript. However, this does not mean there aren't any workarounds! In this
                    article, we will discuss the various ways to emulate <code>async</code> in
                    <code>constructor</code>. Most of them are not-so-ideal, but in the end, I will
                    demonstrate the proper way.
                </p>
            </article>
            <article>
                <a
                    href="https://dev.to/somedood/how-rust-helped-me-power-through-my-c-assignments-2akk"
                >
                    <img
                        src="https://res.cloudinary.com/practicaldev/image/fetch/s--I4gsRjDF--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6qvynqpjla5m7uscvgfy.png"
                        alt="Ferris the Crab on top of my character's head pointing at figures of common data structures in computer science."
                    />
                </a>
                <h3>How Rust helped me power through my C assignments</h3>
                <p>Published <time datetime="2022-01-30">January 30, 2022</time></p>
                <p>
                    After an entire semester of C assignments, I share how Rust patterns and idioms
                    helped me power through it all.
                </p>
            </article>
            <article>
                <a
                    href="https://dev.to/somedood/javascript-concurrency-avoiding-the-sequential-trap-7f0"
                >
                    <img
                        src="https://res.cloudinary.com/practicaldev/image/fetch/s--3w1yi7Mg--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/zio6x6n0m98a8pmzby3f.png"
                        alt="My character slouched over a desk full of papers as if to imitate the workload of JavaScript engine."
                    />
                </a>
                <h3>JavaScript Concurrency: Avoiding the Sequential Trap</h3>
                <p>Published <time datetime="2020-06-14">June 14, 2020</time></p>
                <p>
                    Idle code is the antithesis of efficiency. In this article, we will look into
                    various ways to reduce a program's idle time during asynchronous operations.
                    From concepts such as concurrency and proper I/O scheduling, this is the
                    beginning of a series that explores the world of asynchronous JavaScript.
                </p>
            </article>
        </div>
    </section>
    <section class="prose rounded-xl bg-card p-8 shadow-xl max-w-none">
        <h2>Latest Articles</h2>
        {#if articles === null}
            <p>Cannot fetch the latest articles.</p>
        {:else if articles.length === 0}
            <p>There are no new articles yet.</p>
        {:else}
            <div class="gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
                {#each articles as { title, description, published_at, cover_image, url } (url)}
                    {@const datetime = published_at.toISOString()}
                    <article>
                        <a href="{url}"><img src="{cover_image}" alt="{title}" /></a>
                        <h3>{title}</h3>
                        <p>
                            Published <time {datetime}>{fmt.format(published_at)}</time>
                        </p>
                        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                        {@html description}
                    </article>
                {/each}
            </div>
        {/if}
    </section>
</div>
