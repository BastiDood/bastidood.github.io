<script lang="ts">
    import Article from './Article.svelte';

    // eslint-disable-next-line init-declarations
    export let data;
    $: ({ articles } = data);
</script>

<div class="prose max-w-none space-y-8 p-4 sm:p-12 md:p-16">
    <section class="rounded-xl bg-card p-8 shadow-xl">
        <h1>Articles</h1>
        <p>
            In my spare time, I write technical blog posts at <a href="https://dev.to">dev.to</a>
            (<a href="https://dev.to/somedood">@somedood</a>) about various topics in web development, systems
            programming, and computer science. As such, many of my articles discuss JavaScript best practices, design
            patterns, performance techniques, and limitations. In other times, I focus on the low-level implications of
            systems programming patterns—particularly in the context of Rust, C, and C++.
        </p>
    </section>
    <section class="prose max-w-none rounded-xl bg-card p-8 shadow-xl">
        <h2>Featured Articles</h2>
        <div class="gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
            <Article
                title="Programming is Hard"
                href="https://dev.to/somedood/programming-is-hard-2p87"
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--yLAwBlXq--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/2viihq3r5g6c9h7zatbo.png"
                alt="Listing of performance, security, teamwork, functionality, maintainability, readability, and user experience."
                datetime="2019-02-16T18:44:51Z"
            >
                <p>
                    Indeed it is. Hollywood films often portray programmers as fast-typing computer wizards who can
                    "hack" into anything. We all know that this can never be farther from the truth. Here is an article
                    that discusses what goes into the many aspects of "real" programming.
                </p>
            </Article>
            <Article
                title="18 Essential Videos That Fundamentally Shaped My Understanding of JavaScript"
                href="https://dev.to/somedood/18-essential-videos-that-fundamentally-shaped-my-understanding-of-javascript-3ib"
                src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fdvi7ktu6s10mqfdb7j7e.png"
                alt="A collection of YouTube thumbnails featuring the 18 essential videos."
                datetime="2020-07-08T11:29:03Z"
            >
                <p>
                    Learning JavaScript is a wild, tempestuous journey. With so much to learn, it is difficult to keep
                    up with the times. Here are 18 videos I consider to be "essential" in learning JavaScript at a
                    deeper level. Each of these videos once sparked a "eureka moment" within me that ultimately helped
                    in piecing together the JavaScript puzzle.
                </p>
            </Article>
            <Article
                title="🦀 Rust Reviewed: Is the hype justified? 🦀"
                href="https://dev.to/somedood/rust-reviewed-is-the-hype-justified-1pa1"
                src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F5u4cv4vj6f6y0dtv0pd9.png"
                alt="My character featuring multiple instances of Ferris the Crab on a beach."
                datetime="2020-12-22T17:49:45Z"
            >
                <p>
                    The Rust programming language has steadily been on the rise in terms of adoption and popularity. But
                    is all the hype justified? In this article, I reflect on my experience with Rust in the past year,
                    tackling the golden moments as well as the pain points.
                </p>
            </Article>
            <Article
                title="The Proper Way to Write Async Constructors in JavaScript"
                href="https://dev.to/somedood/the-proper-way-to-write-async-constructors-in-javascript-1o8c"
                src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fmgfbm1966l0yesgi9hs3.png"
                alt="My character in front of a cartoonish construction site."
                datetime="2021-08-18T14:08:39Z"
            >
                <p>
                    At the moment, there is no standardized way to write asynchronous constructors in JavaScript.
                    However, this does not mean there aren't any workarounds! In this article, we will discuss the
                    various ways to emulate <code>async</code> in
                    <code>constructor</code>. Most of them are not-so-ideal, but in the end, I will demonstrate the
                    proper way.
                </p>
            </Article>
            <Article
                title="How Rust helped me power through my C assignments"
                href="https://dev.to/somedood/how-rust-helped-me-power-through-my-c-assignments-2akk"
                src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F6qvynqpjla5m7uscvgfy.png"
                alt="Ferris the Crab on top of my character's head pointing at figures of common data structures in computer science."
                datetime="2022-01-29T16:23:43Z"
            >
                <p>
                    After an entire semester of C assignments, I share how Rust patterns and idioms helped me power
                    through it all.
                </p>
            </Article>
            <Article
                title="JavaScript Concurrency: Avoiding the Sequential Trap"
                href="https://dev.to/somedood/javascript-concurrency-avoiding-the-sequential-trap-7f0"
                src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fzio6x6n0m98a8pmzby3f.png"
                alt="My character slouched over a desk full of papers as if to imitate the workload of JavaScript engine."
                datetime="2020-06-14T11:26:32Z"
            >
                <p>
                    Idle code is the antithesis of efficiency. In this article, we will look into various ways to reduce
                    a program's idle time during asynchronous operations. From concepts such as concurrency and proper
                    I/O scheduling, this is the beginning of a series that explores the world of asynchronous
                    JavaScript.
                </p>
            </Article>
        </div>
    </section>
    <section class="prose max-w-none rounded-xl bg-card p-8 shadow-xl">
        <h2>Latest Articles</h2>
        {#await articles}
            <p>Loading latest articles...</p>
        {:then articles}
            {#if articles.length === 0}
                <p>There are no new articles yet.</p>
            {:else}
                <div class="gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
                    {#each articles as { title, description, published_at, cover_image, url } (url)}
                        <Article {title} href={url} src={cover_image} alt={description} datetime={published_at}>
                            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                            {@html description}
                        </Article>
                    {/each}
                </div>
            {/if}
        {:catch err}
            <p>Cannot fetch the latest articles. Please try again.</p>
            <p><code>{err}</code></p>
        {/await}
    </section>
</div>
