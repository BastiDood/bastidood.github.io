<script>
    import Proficiencies from '../Proficiencies.svelte';
    import chrozone from '$lib/images/chrozone/logo.webp';
    import chrozoneAutocomplete from '$lib/images/chrozone/autocomplete.png';
    import chrozoneResult from '$lib/images/chrozone/result.png';
    import cmake from '$lib/icons/tech/cmake.svg';
    import cpp from '$lib/icons/lang/cpp.svg';
    import css from '$lib/icons/lang/css.svg';
    import deno from '$lib/icons/tech/deno.svg';
    import doctrack from '$lib/images/doctrack/logo.svg';
    import doctrackDesktop from '$lib/images/doctrack/desktop.png';
    import doctrackMobile from '$lib/images/doctrack/mobile.png';
    import drippy from '$lib/images/drippy/logo.svg';
    import drippyBox from '$lib/images/drippy/box.png';
    import drippyDashboard from '$lib/images/drippy/dashboard.png';
    import drippyLogin from '$lib/images/drippy/login.png';
    import drippySchematic from '$lib/images/drippy/schematic.png';
    import drippyTestbench from '$lib/images/drippy/testbench.png';
    import espressif from '$lib/icons/lib/espressif.svg';
    import express from '$lib/icons/lib/express.svg';
    import git from '$lib/icons/tech/git.svg';
    import html from '$lib/icons/lang/html.svg';
    import huggingface from '$lib/icons/lib/huggingface.svg';
    import hyper from '$lib/icons/lib/hyper.svg';
    import js from '$lib/icons/lang/js.svg';
    import mongo from '$lib/icons/tech/mongo.svg';
    import multicastScreenshot from '$lib/images/multicast/screenshot.png';
    import node from '$lib/icons/tech/node.svg';
    import palai from '$lib/images/pal.ai/logo.svg';
    import palaiHome from '$lib/images/pal.ai/home.png';
    import palaiMobile from '$lib/images/pal.ai/mobile.png';
    import postgres from '$lib/icons/tech/postgres.svg';
    import python from '$lib/icons/lang/python.svg';
    import quizzo from '$lib/images/quizzo/logo.webp';
    import quizzoResult from '$lib/images/quizzo/result.png';
    import rust from '$lib/icons/lang/rust.svg';
    import snakeScore1 from '$lib/images/snake/score-1.webp';
    import snakeScore16 from '$lib/images/snake/score-16.webp';
    import snakeScore6 from '$lib/images/snake/score-6.webp';
    import soundraveDesktop from '$lib/images/soundrave/desktop.webp';
    import soundraveMobile from '$lib/images/soundrave/mobile.webp';
    import svelte from '$lib/icons/lib/svelte.svg';
    import tokio from '$lib/icons/lib/tokio.svg';
    import ts from '$lib/icons/lang/ts.svg';
</script>

<div class="prose prose-headings:mt-0 max-w-none space-y-8">
    <div class="rounded-xl bg-card p-8 shadow-xl max-w-none">
        <Proficiencies />
    </div>
    <article id="projects" class="space-y-12">
        <!-- TODO: HATiD -->
        <!-- TODO: UP CSI Website -->
        <section id="drippy" class="rounded-xl bg-card p-8 shadow-xl max-w-none">
            <h2>Drippy</h2>
            <div class="flex gap-2">
                <img class="m-0 w-8 h-8" src="{drippy}" alt="Drippy" />
                <img class="m-0 w-8 h-8" src="{git}" alt="Git" />
                <img class="m-0 w-8 h-8" src="{rust}" alt="Rust" />
                <img class="m-0 w-8 h-8" src="{tokio}" alt="Tokio" />
                <img class="m-0 w-8 h-8" src="{hyper}" alt="Hyper" />
                <img class="m-0 w-8 h-8" src="{espressif}" alt="Espressif" />
                <img class="m-0 w-8 h-8" src="{ts}" alt="TypeScript" />
                <img class="m-0 w-8 h-8" src="{svelte}" alt="Svelte" />
                <img class="m-0 w-8 h-8" src="{html}" alt="HTML" />
                <img class="m-0 w-8 h-8" src="{css}" alt="CSS" />
            </div>
            <p>
                <a href="https://github.com/drippy-iot">Drippy</a> is an open-source
                Internet-of-Things (IoT) system that records the water flow rate of an outlet in a
                household over time. Periodic reports are aggregated in the cloud so that
                stakeholders (e.g., customers, the water company, etc.) may access a time-series
                representation of water consumption through a dashboard interface on the Web. The
                project was ultimately a
                <strong>Top 3 Finalist in the IoT Cup 2023</strong>
                hosted by the <a href="https://upd.edu.ph/">University of Philippines Diliman</a>
                <a href="https://dcs.upd.edu.ph/">Department of Computer Science</a>.
            </p>
            <p>
                Aside from data analytics, Drippy’s marquee feature is its ability to detect leaky
                pipes. As soon as the IoT device detects sufficient conditions for leakage, it
                automatically closes a master valve in the same pipe to stop the wasted flow of
                water. A prominently positioned LED lights up to indicate the actuation of said
                valve. Through the web dashboard, a customer/user may remotely release the valve.
                Inversely, they may also remotely close the valve (under normal operation) should
                the need arise. Thus, the IoT system reactively guards against wastage due to leaks
                and overconsumption.
            </p>
            <div>
                <img src="{drippyLogin}" alt="login page for Drippy dashboard" loading="lazy" />
                <img src="{drippyDashboard}" alt="Drippy dashboard" loading="lazy" />
            </div>
            <p>
                The <a href="https://www.espressif.com/en/products/socs/esp32">ESP32</a> firmware is
                <a href="https://github.com/drippy-iot/metro-tap">open-source</a>
                and written in <a href="https://www.rust-lang.org/">Rust</a> on top of C bindings to
                the
                <a href="https://docs.espressif.com/projects/esp-idf/en/latest/esp32/"
                    >ESP IoT Development Framework</a
                >, which are provided by <a href="https://github.com/esp-rs">Espressif Systems</a>
                themselves. All cloud interactions (backed by a
                <a href="https://www.postgresql.org/">PostgreSQL</a>
                database) are handled by an
                <a href="https://github.com/drippy-iot/cloud">open-source</a>
                centralized web server written in <a href="https://www.rust-lang.org/">Rust</a> with
                the
                <a href="https://hyper.rs/">Hyper</a>
                HTTP framework on top of the <a href="https://tokio.rs/">Tokio</a> asynchronous
                runtime. Finally, the dashboard is a web application written in
                <a href="https://svelte.dev/">Svelte</a>.
            </p>
            <div>
                <img
                    src="{drippySchematic}"
                    alt="schematic diagram for Drippy circuitry"
                    loading="lazy"
                />
                <img
                    src="{drippyBox}"
                    alt="enclosed circuitry for Drippy and its ESP32 chip"
                    loading="lazy"
                />
                <img
                    src="{drippyTestbench}"
                    alt="Drippy testbench on actual hardware"
                    loading="lazy"
                />
            </div>
        </section>
        <section id="doctrack" class="rounded-xl bg-card p-8 shadow-xl max-w-none">
            <h2>DocTrack</h2>
            <div class="flex gap-2">
                <img class="m-0 w-8 h-8" src="{doctrack}" alt="DocTrack" />
                <img class="m-0 w-8 h-8" src="{git}" alt="Git" />
                <img class="m-0 w-8 h-8" src="{deno}" alt="Deno" />
                <img class="m-0 w-8 h-8" src="{ts}" alt="TypeScript" />
                <img class="m-0 w-8 h-8" src="{js}" alt="JavaScript" />
                <img class="m-0 w-8 h-8" src="{svelte}" alt="Svelte" />
                <img class="m-0 w-8 h-8" src="{html}" alt="HTML" />
                <img class="m-0 w-8 h-8" src="{css}" alt="CSS" />
                <img class="m-0 w-8 h-8" src="{postgres}" alt="PostgreSQL" />
            </div>
            <p>
                <a href="https://doctrack.deno.dev/">DocTrack</a> is an
                <a href="https://github.com/BastiDood/doc-track">open-source</a>
                mobile-first document tracking system built for the modern age. It reimplements and improves
                on the
                <a href="https://drs.up.edu.ph/"
                    ><dfn><abbr title="Document Routing System">DRS</abbr></dfn></a
                >
                by the
                <a href="https://up.edu.ph/"
                    ><dfn><abbr title="University of the Philippines">UP</abbr></dfn></a
                >
                <a href="https://itdc.up.edu.ph/"
                    ><dfn><abbr title="Information Technology Development Center">ITDC</abbr></dfn
                    ></a
                >
                by leveraging
                <a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"
                    ><dfn><abbr title="Progressive Web App">PWA</abbr></dfn></a
                > technologies for:
            </p>
            <ul>
                <li>
                    Delivering push notifications via the <a
                        href="https://developer.mozilla.org/en-US/docs/Web/API/Push_API"
                        >Web Push API</a
                    >.
                </li>
                <li>
                    Maintaining an offline experience via <a
                        href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers"
                        >Service Workers</a
                    >.
                </li>
            </ul>
            <p>
                Wherever possible, the project utilizes a <a href="https://www.typescriptlang.org/"
                    >TypeScript</a
                >-centric application stack. With <a href="https://svelte.dev/">Svelte</a> in the
                front end, TypeScript ensures that events, messages, and interactions between UI
                components remain consistent. In the back end, <a href="https://deno.land/">Deno</a>
                facilitates the development of robust type-safe
                <dfn><abbr title="Hypertext Transfer Protocol">HTTP</abbr></dfn>
                request handlers for the
                <dfn><abbr title="Representational State Transfer">REST</abbr></dfn> API.
            </p>
            <div>
                <img src="{doctrackMobile}" alt="DocTrack Mobile" loading="lazy" />
                <img src="{doctrackDesktop}" alt="DocTrack Desktop" loading="lazy" />
            </div>
        </section>
        <section id="palai" class="rounded-xl bg-card p-8 shadow-xl max-w-none">
            <h2>pal.ai</h2>
            <div class="flex gap-2">
                <img class="m-0 w-8 h-8" src="{palai}" alt="pal.ai" />
                <img class="m-0 w-8 h-8" src="{git}" alt="Git" />
                <img class="m-0 w-8 h-8" src="{deno}" alt="Deno" />
                <img class="m-0 w-8 h-8" src="{ts}" alt="TypeScript" />
                <img class="m-0 w-8 h-8" src="{svelte}" alt="Svelte" />
                <img class="m-0 w-8 h-8" src="{html}" alt="HTML" />
                <img class="m-0 w-8 h-8" src="{css}" alt="CSS" />
                <img class="m-0 w-8 h-8" src="{python}" alt="Python" />
                <img class="m-0 w-8 h-8" src="{huggingface}" alt="Hugging Face" />
            </div>
            <p>
                The <a href="https://palai.deno.dev/">pal.ai</a> project is an
                <a href="https://github.com/BastiDood/pal.ai">open-source</a>
                mobile-first
                <a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"
                    >progressive web app</a
                > that uses images of rice leaves to identify rice leaf diseases.
            </p>
            <p>
                In the back end, we use a minimal <a href="https://deno.com/deploy">Deno Deploy</a>
                server that proxies the
                <a href="https://huggingface.co/docs/api-inference/index"
                    >Hugging Face Hosted Inference API</a
                >, which interfaces with a model that uses a
                <a href="https://arxiv.org/pdf/2106.08254.pdf">BEiT vision transformer model</a>
                to classify images of rice plants for the presence/absence of diseases. The model is
                pre-trained using <a href="https://arxiv.org/pdf/1409.0575.pdf">ImageNet 22k</a>
                then finetuned using the
                <a href="https://www.kaggle.com/datasets/shrupyag001/philippines-rice-diseases"
                    >PH Rice Leave Diseases dataset</a
                >. The model achieves <strong>95% accuracy</strong> using the dataset test set despite
                having only 1120 training data points.
            </p>
            <ul>
                <li>
                    Kaggle Notebook: <a
                        href="https://www.kaggle.com/code/josekristianresabal/classification-by-fine-tuning-beit"
                        ><em>Classification by Fine-tuning BEiT</em></a
                    >
                </li>
                <li>
                    Hugging Face Hub Link for the Model: <a
                        href="https://huggingface.co/jkrperson/Beit-for-rice-disease"
                        ><em>jkrperson/Beit-for-rice-disease</em></a
                    >
                </li>
                <li>
                    Weights &amp; Biases Experiments: <a
                        href="https://wandb.ai/jkrperson/huggingface/overview?workspace=user-jkrperson"
                        ><em>jkrperson/huggingface</em></a
                    >
                </li>
            </ul>
            <p>
                In the front end, <a href="https://palai.deno.dev/">pal.ai</a> is an installable
                progressive web app (PWA) written in
                <a href="https://www.typescriptlang.org/">TypeScript</a>
                with the <a href="https://svelte.dev/">Svelte</a> framework. It uses the
                <a href="https://parceljs.org/">Parcel</a> build tool for asset bundling, packaging,
                and optimization. The PWA allows users to upload their own images of rice plants for
                classification.
            </p>
            <div>
                <img
                    src="{palaiHome}"
                    alt="pal.ai home page with file upload and camera controls"
                    loading="lazy"
                />
                <img
                    src="{palaiMobile}"
                    alt="pal.ai results page showing 79.28% confidence in Healthy classification"
                    loading="lazy"
                />
            </div>
        </section>
        <section id="soundrave" class="rounded-xl bg-card p-8 shadow-xl max-w-none">
            <h2>SoundRave</h2>
            <div class="flex gap-2">
                <img class="m-0 w-8 h-8" src="{git}" alt="Git" />
                <img class="m-0 w-8 h-8" src="{node}" alt="Node.js" />
                <img class="m-0 w-8 h-8" src="{express}" alt="Express.js" />
                <img class="m-0 w-8 h-8" src="{html}" alt="HTML" />
                <img class="m-0 w-8 h-8" src="{css}" alt="CSS" />
                <img class="m-0 w-8 h-8" src="{js}" alt="JavaScript" />
                <img class="m-0 w-8 h-8" src="{mongo}" alt="MongoDB" />
            </div>
            <p>
                <a href="https://github.com/BastiDood/soundrave">SoundRave</a> was an aggregator app
                for new music released by a user's followed artists on Spotify. At the time, the news
                feed was missing from Spotify's features. The app aimed to fill in this hole.
            </p>
            <p>
                The <dfn><abbr title="User Interface">UI</abbr></dfn> is primarily rendered by the
                server via the <a href="https://expressjs.com/">Express</a> framework for
                <a href="https://nodejs.org/">Node.js</a>. For data persistence,
                <a href="https://www.mongodb.com/">MongoDB</a>
                is used as the database and cache for Spotify
                <dfn><abbr title="Application Program Interface">API</abbr></dfn> calls.
            </p>
            <div>
                <img src="{soundraveMobile}" alt="SoundRave Mobile" loading="lazy" />
                <img src="{soundraveDesktop}" alt="SoundRave Desktop" loading="lazy" />
            </div>
        </section>
        <section id="chrozone" class="rounded-xl bg-card p-8 shadow-xl max-w-none">
            <h2>Chrozone</h2>
            <div class="flex gap-2">
                <img class="m-0 w-8 h-8" src="{chrozone}" alt="Chrozone" />
                <img class="m-0 w-8 h-8" src="{git}" alt="Git" />
                <img class="m-0 w-8 h-8" src="{rust}" alt="Rust" />
                <img class="m-0 w-8 h-8" src="{tokio}" alt="Tokio" />
                <img class="m-0 w-8 h-8" src="{hyper}" alt="Hyper" />
                <img class="m-0 w-8 h-8" src="{deno}" alt="Deno" />
            </div>
            <p>
                <a href="https://github.com/BastiDood/chrozone">Chrozone</a> is a
                <a href="https://tokio.rs/">Tokio</a>-powered
                <a
                    href="https://discord.com/api/oauth2/authorize?client_id=1008989318901137459&scope=applications.commands"
                    >Discord bot</a
                >
                written in <a href="https://www.rust-lang.org/">Rust</a> that provides time-based
                utilities via
                <a
                    href="https://discord.com/developers/docs/interactions/application-commands#slash-commands"
                    >slash commands</a
                >. One of its primary features is to format a given date as a dynamic timestamp
                message (as seen in the screenshots below).
            </p>
            <p>
                For global Discord communities that have special timezone considerations, Chrozone
                empowers users to send timezone-adaptive announcements. No need to convert the
                timezones yourself! Let Chrozone do the work.
            </p>
            <div>
                <img
                    src="{chrozoneAutocomplete}"
                    alt="Chrozone Autocompletion Menu"
                    loading="lazy"
                />
                <img src="{chrozoneResult}" alt="Chrozone Preview Result" loading="lazy" />
            </div>
        </section>
        <section id="quizzo" class="rounded-xl bg-card p-8 shadow-xl max-w-none">
            <h2>Quizzo</h2>
            <div class="flex gap-2">
                <img class="m-0 w-8 h-8" src="{quizzo}" alt="Quizzo" />
                <img class="m-0 w-8 h-8" src="{git}" alt="Git" />
                <img class="m-0 w-8 h-8" src="{rust}" alt="Rust" />
                <img class="m-0 w-8 h-8" src="{tokio}" alt="Tokio" />
                <img class="m-0 w-8 h-8" src="{hyper}" alt="Hyper" />
                <img class="m-0 w-8 h-8" src="{deno}" alt="Deno" />
                <img class="m-0 w-8 h-8" src="{postgres}" alt="PostgreSQL" />
            </div>
            <p>
                <a href="https://github.com/BastiDood/quizzo">Quizzo</a> is a
                <a href="https://tokio.rs/">Tokio</a>-powered
                <a
                    href="https://discord.com/api/oauth2/authorize?client_id=823813267133956136&scope=applications.commands"
                    >Discord bot</a
                >
                written in <a href="https://www.rust-lang.org/">Rust</a> for hosting limited-time
                quizzes. With Discord's built-in
                <a
                    href="https://discord.com/developers/docs/interactions/message-components#message-components"
                    >message components</a
                >, Quizzo provides an easy-to-use interface (and a trivially scalable setup) for
                large-scale quizzes with many users. When the quiz timer expires, Quizzo notifies
                everyone in the channel which users answered the quiz correctly. The pioneer use of
                message components differentiates Chrozone from the other bots in the market which
                use clunky reaction-based polling mechanisms.
            </p>
            <div>
                <img src="{quizzoResult}" alt="Quizzo Chat Output" loading="lazy" />
            </div>
        </section>
        <section id="multicast" class="rounded-xl bg-card p-8 shadow-xl max-w-none">
            <h2>UDP Multicast Chat</h2>
            <div class="flex gap-2">
                <img class="m-0 w-8 h-8" src="{git}" alt="Git" />
                <img class="m-0 w-8 h-8" src="{rust}" alt="Rust" />
                <img class="m-0 w-8 h-8" src="{tokio}" alt="Tokio" />
            </div>
            <p>
                The <a href="https://github.com/BastiDood/udp-multicast-chat"
                    ><dfn><abbr title="User Datagram Protocol">UDP</abbr></dfn> Multicast Chat Project</a
                >
                is a basic chat application written in Rust. The front-end GUI uses the popular
                <a href="https://www.egui.rs/"><code>egui</code></a>
                library to render the updates from the back end. Meanwhile, the back end is a
                <a href="https://tokio.rs/">Tokio</a>-powered server that listens for UDP messages
                over a specified multicast address. The same multicast channel is also used for
                sending new messages. This setup effectively allows multiple hosts in the local area
                network to communicate with each other via a common UDP multicast channel.
            </p>
            <div>
                <img src="{multicastScreenshot}" alt="UDP Multicast Chat Preview" loading="lazy" />
            </div>
        </section>
        <section id="snake" class="rounded-xl bg-card p-8 shadow-xl max-w-none">
            <h2>Snake Clone with SDL2</h2>
            <div class="flex gap-2">
                <img class="m-0 w-8 h-8" src="{git}" alt="Git" />
                <img class="m-0 w-8 h-8" src="{cpp}" alt="C++" />
                <img class="m-0 w-8 h-8" src="{cmake}" alt="CMake" />
            </div>
            <p>
                Using the popular <a href="https://www.libsdl.org/"
                    ><dfn><abbr title="Simple DirectMedia Layer 2.0">SDL2</abbr></dfn></a
                >
                library, the
                <a href="https://github.com/BastiDood/sdl-basic-snake"
                    ><code>sdl-basic-snake</code></a
                >
                project reimplements the classic game
                <a href="https://en.wikipedia.org/wiki/Snake_(video_game_genre)">Snake</a> with modern
                object-oriented C++20 code.
            </p>
            <p>
                In line with the theme of modern best practices, the project also uses <a
                    href="https://cmake.org/">CMake</a
                > as its cross-platform build system generator. Assuming the necessary system dependencies
                have been set up, the project may be built and run on any platform.
            </p>
            <div>
                <img src="{snakeScore1}" alt="Snake Score 1" loading="lazy" />
                <img src="{snakeScore6}" alt="Snake Score 6" loading="lazy" />
                <img src="{snakeScore16}" alt="Snake Score 16" loading="lazy" />
            </div>
        </section>
        <section id="option-block" class="rounded-xl bg-card p-8 shadow-xl max-w-none">
            <h2>A Block of Optionals!</h2>
            <div class="flex gap-2">
                <img class="m-0 w-8 h-8" src="{git}" alt="Git" />
                <img class="m-0 w-8 h-8" src="{rust}" alt="Rust" />
            </div>
            <p>
                The <a href="https://github.com/BastiDood/option-block"><code>option-block</code></a
                > crate is an open-source Rust package that provides a basic direct address look-up table,
                where empty slots are tracked by a single bit mask. Although it is rather simple, this
                is a fundamental data structure in embedded development, where memory constraints especially
                matter.
            </p>
            <p>
                From the pull request <a
                    href="https://github.com/dlkj/usbd-human-interface-device/pull/89#issue-1574171393"
                    ><code>dlkj/usbd-human-interface-device#89</code></a
                >
                by <a href="https://github.com/jedrzejboczar">@jedrzejboczar</a>:
            </p>
            <blockquote
                cite="https://github.com/dlkj/usbd-human-interface-device/pull/89#issue-1574171393"
            >
                Currently, <code>heapless::FnvIndexMap</code> is used to store idle times for
                reports, which takes 260B (out of 460B for whole <code>RawInterface</code>) to store
                at most 32
                <code>u8</code>
                values. This PR changes it to use
                <a href="https://github.com/BastiDood/option-block"><code>option-block</code></a>
                which basically is <code>[u8; 32]</code> with <code>u32</code> bitmask of "used"
                slots, which takes 36B (<code>RawInterface</code> is now 236B)... In my use case,
                with 3 HID interfaces, this <strong>saves 672 bytes of RAM usage</strong>, while I
                also observed minor improvement in code size—<a
                    href="https://github.com/dlkj/usbd-human-interface-device"
                    ><code>usbd-human-interface-device</code></a
                >
                takes <strong>406 bytes less space</strong>.
            </blockquote>
        </section>
    </article>
</div>
