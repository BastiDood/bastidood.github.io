<script>
    import Proficiencies from '$lib/components/Proficiencies.svelte';

    import cpp from '$lib/icons/lang/cpp.svg';
    import css from '$lib/icons/lang/css.svg';
    import html from '$lib/icons/lang/html.svg';
    import js from '$lib/icons/lang/js.svg';
    import python from '$lib/icons/lang/python.svg';
    import rust from '$lib/icons/lang/rust.svg';
    import solidity from '$lib/icons/lang/solidity.svg';
    import ts from '$lib/icons/lang/ts.svg';

    import anchor from '$lib/icons/lib/anchor.png';
    import capacitor from '$lib/icons/lib/capacitor.svg';
    import espressif from '$lib/icons/lib/espressif.svg';
    import express from '$lib/icons/lib/express.svg';
    import hardhat from '$lib/icons/lib/hardhat.svg';
    import huggingface from '$lib/icons/lib/huggingface.svg';
    import hyper from '$lib/icons/lib/hyper.svg';
    import svelte from '$lib/icons/lib/svelte.svg';
    import tailwind from '$lib/icons/lib/tailwind.svg';
    import tokio from '$lib/icons/lib/tokio.svg';

    import android from '$lib/icons/tech/android.svg';
    import arbitrum from '$lib/icons/tech/arbitrum.svg';
    import cmake from '$lib/icons/tech/cmake.svg';
    import deno from '$lib/icons/tech/deno.svg';
    import ethereum from '$lib/icons/tech/ethereum.svg';
    import git from '$lib/icons/tech/git.svg';
    import mongo from '$lib/icons/tech/mongo.svg';
    import node from '$lib/icons/tech/node.svg';
    import postgres from '$lib/icons/tech/postgres.svg';
    import solana from '$lib/icons/tech/solana.svg';

    import acda from '$lib/images/acda/logo.svg';
    import acdaAnalytics from '$lib/images/acda/analytics.png';
    import acdaFilters from '$lib/images/acda/filters.png';
    import acdaGis from '$lib/images/acda/gis.png';
    import botokenAdmin from '$lib/images/botoken/admin.png';
    import botokenPoll from '$lib/images/botoken/poll.png';
    import chrozone from '$lib/images/chrozone/logo.webp';
    import chrozoneAutocomplete from '$lib/images/chrozone/autocomplete.png';
    import chrozoneResult from '$lib/images/chrozone/result.png';
    import dappedContest from '$lib/images/dapped-out/contest.png';
    import dappedMint from '$lib/images/dapped-out/mint.png';
    import doctrack from '$lib/images/doctrack/logo.svg';
    import doctrackDesktop from '$lib/images/doctrack/desktop.png';
    import doctrackMobile from '$lib/images/doctrack/mobile.png';
    import drap from '$lib/images/drap/logo.svg';
    import drapHistory1 from '$lib/images/drap/history-1.png';
    import drapHistory2 from '$lib/images/drap/history-2.png';
    import drapRankings from '$lib/images/drap/rankings.png';
    import drippy from '$lib/images/drippy/logo.svg';
    import drippyBox from '$lib/images/drippy/box.png';
    import drippyDashboard from '$lib/images/drippy/dashboard.png';
    import drippyLogin from '$lib/images/drippy/login.png';
    import drippySchematic from '$lib/images/drippy/schematic.png';
    import drippyTestbench from '$lib/images/drippy/testbench.png';
    import hatid from '$lib/images/hatid/logo.svg';
    import hatidChat from '$lib/images/hatid/chat.png';
    import hatidLabels from '$lib/images/hatid/labels.png';
    import hotspotter from '$lib/images/hotspotter/logo.svg';
    import hotspotterCached from '$lib/images/hotspotter/cached.png';
    import hotspotterCircle from '$lib/images/hotspotter/qc-circle.png';
    import hotspotterDiliman from '$lib/images/hotspotter/diliman.png';
    import hotspotterReadings from '$lib/images/hotspotter/readings.png';
    import multicastScreenshot from '$lib/images/multicast/screenshot.png';
    import palai from '$lib/images/pal.ai/logo.svg';
    import palaiHome from '$lib/images/pal.ai/home.png';
    import palaiMobile from '$lib/images/pal.ai/mobile.png';
    import quizzo from '$lib/images/quizzo/logo.webp';
    import quizzoResult from '$lib/images/quizzo/result.png';
    import snakeScore1 from '$lib/images/snake/score-1.webp';
    import snakeScore16 from '$lib/images/snake/score-16.webp';
    import snakeScore6 from '$lib/images/snake/score-6.webp';
    import soundraveDesktop from '$lib/images/soundrave/desktop.webp';
    import soundraveMobile from '$lib/images/soundrave/mobile.webp';
    import upcsi from '$lib/images/up-csi/logo.svg';
    import upcsiEvents from '$lib/images/up-csi/events.png';
    import upcsiHome from '$lib/images/up-csi/home.png';
</script>

<div class="prose max-w-none space-y-8 p-4 prose-headings:mt-0 sm:p-12 md:p-16">
    <div class="max-w-none rounded-xl bg-card p-8 shadow-xl">
        <Proficiencies />
    </div>
    <div class="block grid-cols-[auto_1fr] gap-4 lg:grid">
        <aside class="not-prose">
            <div class="sticky top-20 hidden rounded-xl bg-card p-8 shadow-xl lg:block">
                <strong class="text-lg text-black">Table of Contents</strong>
                <ol class="text-md text-gray-500">
                    <li>
                        <a class="transition-colors hover:text-gray-700" href="#drap"
                            >DRAP: Draft Ranking Automated Processor</a
                        >
                    </li>
                    <li><a class="transition-colors hover:text-gray-700" href="#hotspotter">Hotspotter</a></li>
                    <li><a class="transition-colors hover:text-gray-700" href="#dapped-out">Dapped Out!</a></li>
                    <li><a class="transition-colors hover:text-gray-700" href="#botoken">Botoken</a></li>
                    <li>
                        <a class="transition-colors hover:text-gray-700" href="#acda"
                            >ACDA: Aggregated Crash Data Analytics</a
                        >
                    </li>
                    <li><a class="transition-colors hover:text-gray-700" href="#up-csi">UP CSI Website</a></li>
                    <li>
                        <a class="transition-colors hover:text-gray-700" href="#hatid"
                            >HATiD: Helpdesk and Ticketing Dashboard</a
                        >
                    </li>
                    <li><a class="transition-colors hover:text-gray-700" href="#drippy">Drippy IoT</a></li>
                    <li><a class="transition-colors hover:text-gray-700" href="#doctrack">DocTrack</a></li>
                    <li><a class="transition-colors hover:text-gray-700" href="#palai">pal.ai</a></li>
                    <li><a class="transition-colors hover:text-gray-700" href="#soundrave">SoundRave</a></li>
                    <li><a class="transition-colors hover:text-gray-700" href="#chrozone">Chrozone</a></li>
                    <li><a class="transition-colors hover:text-gray-700" href="#quizzo">Quizzo</a></li>
                    <li><a class="transition-colors hover:text-gray-700" href="#multicast">UDP Multicast Chat</a></li>
                    <li><a class="transition-colors hover:text-gray-700" href="#snake">Snake Clone with SDL2</a></li>
                    <li>
                        <a class="transition-colors hover:text-gray-700" href="#option-block">A Block of Optionals!</a>
                    </li>
                </ol>
            </div>
        </aside>
        <article id="projects" class="space-y-8">
            <section id="drap" class="max-w-none scroll-mt-20 rounded-xl bg-card p-8 shadow-xl">
                <h2>DRAP: Draft Ranking Automated Processor</h2>
                <div class="flex flex-wrap gap-2">
                    <img class="m-0 h-8 w-8" src={drap} alt="DRAP" />
                    <img class="m-0 h-8 w-8" src={git} alt="Git" />
                    <img class="m-0 h-8 w-8" src={node} alt="Node.js" />
                    <img class="m-0 h-8 w-8" src={ts} alt="TypeScript" />
                    <img class="m-0 h-8 w-8" src={js} alt="JavaScript" />
                    <img class="m-0 h-8 w-8" src={svelte} alt="Svelte" />
                    <img class="m-0 h-8 w-8" src={html} alt="HTML" />
                    <img class="m-0 h-8 w-8" src={css} alt="CSS" />
                    <img class="m-0 h-8 w-8" src={tailwind} alt="TailwindCSS" />
                    <img class="m-0 h-8 w-8" src={postgres} alt="PostgreSQL" />
                </div>
                <p>
                    <a target="_blank" href="https://drap.dcs.upd.edu.ph/">DRAP</a> is the
                    <a target="_blank" href="https://github.com/BastiDood/drap">open-source</a>
                    Draft Ranking Automated Processor for the
                    <a href="https://up.edu.ph/" target="_blank">University of the Philippines</a>
                    <a href="https://upd.edu.ph/" target="_blank">Diliman</a>,
                    <a href="https://dcs.upd.edu.ph/">Department of Computer Science</a>'s annual draft of research lab
                    assignments. The system automates the submission of lab preferences by students, the selection of
                    draftees by faculty members, the assignment of lab memberships per draft round, the randomization of
                    draftees during lottery rounds, and the dispatch of email notifications throughout the entire draft
                    process.
                </p>
                <p>
                    Previously, this process would have spanned weeks' worth of email exchanges between the department
                    administrators and the faculty members. With the DRAP automation in place, the August 2024 Draft
                    wrapped up within the week. The August 2024 Draft also happened to be the <em
                        >largest draft in DCS history:</em
                    >
                    111 participating students, 9 lab heads, and 3 draft administrators (i.e., 123 total users).
                </p>
                <p>
                    The <abbr title="Draft Ranking Automated Processor">DRAP</abbr> automation is implemented as a
                    full-stack <a target="_blank" href="https://kit.svelte.dev/">SvelteKit</a>
                    web application with <a target="_blank" href="https://www.postgresql.org/">PostgreSQL</a> as the
                    database. To streamline user authentication, the application leverages
                    <a target="_blank" href="https://developers.google.com/identity/openid-connect/openid-connect"
                        >Google's OpenID Connect</a
                    >
                    provider via <a target="_blank" href="https://oauth.net/2/">OAuth 2.0</a>. Rather conveniently, the
                    OAuth 2.0 integration also enables DRAP to send emails via the
                    <a target="_blank" href="https://developers.google.com/gmail/api/guides">Gmail API</a>.
                </p>
                <div class="md:flex md:gap-4">
                    <div><img loading="lazy" src={drapHistory1} alt="DRAP History Timeline" /></div>
                    <div><img loading="lazy" src={drapHistory2} alt="DRAP History Timeline" /></div>
                    <div><img loading="lazy" src={drapRankings} alt="DRAP Rankings Page" /></div>
                </div>
            </section>
            <section id="hotspotter" class="max-w-none scroll-mt-20 rounded-xl bg-card p-8 shadow-xl">
                <h2>Hotspotter</h2>
                <div class="flex flex-wrap gap-2">
                    <img class="m-0 h-8 w-8" src={hotspotter} alt="Hotspotter" />
                    <img class="m-0 h-8 w-8" src={git} alt="Git" />
                    <img class="m-0 h-8 w-8" src={android} alt="Android" />
                    <img class="m-0 h-8 w-8" src={capacitor} alt="CapacitorJS" />
                    <img class="m-0 h-8 w-8" src={node} alt="Node.js" />
                    <img class="m-0 h-8 w-8" src={ts} alt="TypeScript" />
                    <img class="m-0 h-8 w-8" src={js} alt="JavaScript" />
                    <img class="m-0 h-8 w-8" src={svelte} alt="Svelte" />
                    <img class="m-0 h-8 w-8" src={html} alt="HTML" />
                    <img class="m-0 h-8 w-8" src={css} alt="CSS" />
                    <img class="m-0 h-8 w-8" src={tailwind} alt="TailwindCSS" />
                    <img class="m-0 h-8 w-8" src={postgres} alt="PostgreSQL" />
                </div>
                <p>
                    Developed in fulfillment of the final requirements for my Bachelor of Science degree in Computer
                    Science, <strong>Hotspotter</strong> is an
                    <a target="_blank" href="https://github.com/BastiDood/hotspotter">open-source</a> incentivized crowdsensing
                    system that collects, maps, and visualizes Wi-Fi and cellular data to pinpoint hotspots and dead zones.
                    The system is composed of three main subsystems:
                </p>
                <ol>
                    <li>
                        The <em>database subsystem</em> is responsible for (1) the persistence of user data,
                        user-submitted readings, and leaderboards and (2) data aggregation for map visualization.
                        Hotspotter uses the
                        <a target="_blank" href="https://www.postgresql.org/">PostgreSQL</a>
                        database management system for all queries and mutations in SQL. To improve the efficiency of geospatial
                        queries, Hotspotter leverages the
                        <a target="_blank" href="https://h3geo.org/"
                            >H3 hexagonal hierarchical geospatial indexing system</a
                        > by Uber Engineering for generating, querying, and aggregating data points. The hierarchical index,
                        which enables Hotspotter to aggregate data at varying resolutions, is especially useful for optimizing
                        download times by pruning viewport-occluded data points from the map visualization.
                    </li>
                    <li>
                        The <em>web subsystem</em> interfaces with the <em>database subsystem</em>. It is responsible
                        for marshaling HTTP requests as SQL queries to the
                        <a target="_blank" href="https://www.postgresql.org/">PostgreSQL</a>
                        database. The web server is a Representational State Transfer
                        <dfn><abbr title="Representational State Transfer">(REST)</abbr></dfn>
                        Application Program Interface
                        <dfn><abbr title="Application Program Interface">(API)</abbr></dfn> that returns SQL results in JSON
                        format. The API endpoints service the dynamic interactions that the front-end user interfaces would
                        require (e.g., data uploads).
                    </li>
                    <li>
                        The <em>mobile subsystem</em> features an Android mobile application that leverages built-in
                        sensors in modern smartphones to collect and upload data on nearby Wi-Fi access points and
                        cellular network signal strengths. Under the hood, the mobile application is a front-end
                        <a target="_blank" href="https://svelte.dev/">Svelte</a>
                        web application wrapped inside an
                        <a target="_blank" href="https://developer.android.com/develop/ui/views/layout/webapps/webview"
                            >Android WebView</a
                        >
                        application. Low-level system calls into the Android API are marshaled by customized handwritten
                        Java plugins for the <a target="_blank" href="https://capacitorjs.com/">CapacitorJS</a> framework.
                    </li>
                </ol>
                <p>
                    Field work was then conducted in eight <em>sitios</em> of Barangay San Lorenzo, Norzagaray, Bulacan
                    to validate and stress-test the system under the extreme network conditions of Geographically
                    Isolated and Disadvantaged Areas
                    <dfn><abbr title="Geographically Isolated and Disadvantaged Areas">(GIDAs)</abbr></dfn>. In the end,
                    the mobile application's passive sensing, collecting, and caching of data successfully operated even
                    in the most isolated areas without an internet connection.
                </p>
                <div class="md:flex md:gap-4">
                    <div>
                        <img
                            loading="lazy"
                            class="max-h-[1080px]"
                            src={hotspotterDiliman}
                            alt="Wi-Fi Map of UP Diliman in Hotspotter"
                        />
                    </div>
                    <div>
                        <img
                            loading="lazy"
                            class="max-h-[1080px]"
                            src={hotspotterCached}
                            alt="List of Cached Readings in Hotspotter"
                        />
                    </div>
                    <div>
                        <img
                            loading="lazy"
                            class="max-h-[1080px]"
                            src={hotspotterReadings}
                            alt="Data Collected by Readings in Hotspotter"
                        />
                    </div>
                    <div>
                        <img
                            loading="lazy"
                            class="max-h-[1080px]"
                            src={hotspotterCircle}
                            alt="4G Map of Quezon Memorial Circle in Hotspotter"
                        />
                    </div>
                </div>
            </section>
            <section id="dapped-out" class="max-w-none scroll-mt-20 rounded-xl bg-card p-8 shadow-xl">
                <h2>Dapped Out!</h2>
                <div class="flex flex-wrap gap-2">
                    <img class="m-0 h-8 w-8" src={git} alt="Git" />
                    <img class="m-0 h-8 w-8" src={solana} alt="Solana" />
                    <img class="m-0 h-8 w-8" src={anchor} alt="Anchor" />
                    <img class="m-0 h-8 w-8" src={rust} alt="Rust" />
                    <img class="m-0 h-8 w-8" src={node} alt="Node.js" />
                    <img class="m-0 h-8 w-8" src={ts} alt="TypeScript" />
                    <img class="m-0 h-8 w-8" src={js} alt="JavaScript" />
                    <img class="m-0 h-8 w-8" src={svelte} alt="Svelte" />
                    <img class="m-0 h-8 w-8" src={html} alt="HTML" />
                    <img class="m-0 h-8 w-8" src={css} alt="CSS" />
                    <img class="m-0 h-8 w-8" src={tailwind} alt="TailwindCSS" />
                </div>
                <p>
                    <a target="_blank" href="https://dapped-out.pages.dev/">Dapped Out!</a> is an
                    <a target="_blank" href="https://github.com/BastiDood/dapped-out">open-source</a>
                    timing-based casino game built on the <a target="_blank" href="https://solana.com/">Solana</a> blockchain.
                    The objective of the game is simple: try to press a button as close to a targeted marker as possible.
                    The closest contestant to the target wins the greatest share in the contested pot.
                </p>
                <p>
                    The application accepts any valid token in the <a target="_blank" href="https://solana.com/"
                        >Solana</a
                    >
                    blockchain as a currency for contests. When creating a new contest, simply point it to the mint account
                    of the token being transacted. For instance, the <code>USDC</code>
                    coin may be transacted by pointing the contest to the mint address
                    <code class="break-words">EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v</code>. For convenience, it
                    is also possible to create (only) one brand new program-derived user-generated token instead. The
                    creator has the privilege of minting new supply as well as transferring tokens to other wallets.
                </p>
                <p>
                    Users may now join the existing contest by staking some tokens into the shared pot. They now try
                    their luck in timing the meter as closely as possible. At any point in the future, the contest host
                    may close the contest to finally distribute the winnings in proportion to the accuracy of each
                    contestant. Past contests are archived for future audits.
                </p>
                <p>
                    The game is implemented as an installable
                    <a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps" target="_blank"
                        >progressive web application</a
                    >
                    powered by <a target="_blank" href="https://svelte.dev/">Svelte</a> in the front end. In the back
                    end, the game logic runs on <a target="_blank" href="https://solana.com/">Solana</a>
                    programs written in <a target="_blank" href="https://www.rust-lang.org/">Rust</a> with the
                    <a target="_blank" href="https://www.anchor-lang.com/">Anchor</a> framework.
                </p>
                <div class="md:flex md:gap-4">
                    <div><img loading="lazy" src={dappedMint} alt="Botoken Mint Page" /></div>
                    <div><img loading="lazy" src={dappedContest} alt="Botoken Contest Page" /></div>
                </div>
            </section>
            <section id="botoken" class="max-w-none scroll-mt-20 rounded-xl bg-card p-8 shadow-xl">
                <h2>Botoken</h2>
                <div class="flex flex-wrap gap-2">
                    <img class="m-0 h-8 w-8" src={git} alt="Git" />
                    <img class="m-0 h-8 w-8" src={ethereum} alt="Ethereum" />
                    <img class="m-0 h-8 w-8" src={arbitrum} alt="Arbitrum" />
                    <img class="m-0 h-8 w-8" src={hardhat} alt="Hardhat" />
                    <img class="m-0 h-8 w-8" src={solidity} alt="Solidity" />
                    <img class="m-0 h-8 w-8" src={node} alt="Node.js" />
                    <img class="m-0 h-8 w-8" src={ts} alt="TypeScript" />
                    <img class="m-0 h-8 w-8" src={js} alt="JavaScript" />
                    <img class="m-0 h-8 w-8" src={svelte} alt="Svelte" />
                    <img class="m-0 h-8 w-8" src={html} alt="HTML" />
                    <img class="m-0 h-8 w-8" src={css} alt="CSS" />
                    <img class="m-0 h-8 w-8" src={tailwind} alt="TailwindCSS" />
                </div>
                <p>
                    <a target="_blank" href="https://botoken.pages.dev/">Botoken</a> is a simple
                    <a target="_blank" href="https://github.com/BastiDood/botoken">open-source</a>
                    polling system for decentralized autonomous organizations. Polls, proposals, motions, and referendums
                    are published in the
                    <a target="_blank" href="https://ethereum.org/">Ethereum</a> blockchain for permanence and
                    transparency. Voting power is then quantified as fungible tokens that the organization controls and
                    regulates. Members within the organization thus "spend" their voting power (i.e., fungible tokens)
                    on polls to express their consent or dissent on organizational processes. The
                    <a target="_blank" href="https://www.coinbase.com/learn/wallet/tokenomics-101">"tokenomics"</a> of this
                    setup enables an interesting exploration into self-balancing cycles of tokenized voting power.
                </p>
                <p>
                    The main user application is an installable <a
                        target="_blank"
                        href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"
                        >progressive web application</a
                    >
                    powered by <a target="_blank" href="https://svelte.dev/">Svelte</a> that interfaces with
                    <a target="_blank" href="https://arbitrum.io/">Arbitrum</a>, a Layer 2 blockchain technology on top
                    of
                    <a target="_blank" href="https://ethereum.org/">Ethereum</a>. The back-end logic is implemented and
                    deployed as a <a target="_blank" href="https://soliditylang.org/">Solidity</a> smart contract.
                </p>
                <div class="md:flex md:gap-4">
                    <div><img loading="lazy" src={botokenPoll} alt="Botoken Poll Page" /></div>
                    <div><img loading="lazy" src={botokenAdmin} alt="Botoken Admin Page" /></div>
                </div>
            </section>
            <section id="acda" class="max-w-none scroll-mt-20 rounded-xl bg-card p-8 shadow-xl">
                <h2>ACDA: Aggregated Crash Data Analytics</h2>
                <div class="flex flex-wrap gap-2">
                    <img class="m-0 h-8 w-8" src={acda} alt="ACDA" />
                    <img class="m-0 h-8 w-8" src={git} alt="Git" />
                    <img class="m-0 h-8 w-8" src={node} alt="Node.js" />
                    <img class="m-0 h-8 w-8" src={ts} alt="TypeScript" />
                    <img class="m-0 h-8 w-8" src={js} alt="JavaScript" />
                    <img class="m-0 h-8 w-8" src={svelte} alt="Svelte" />
                    <img class="m-0 h-8 w-8" src={html} alt="HTML" />
                    <img class="m-0 h-8 w-8" src={css} alt="CSS" />
                    <img class="m-0 h-8 w-8" src={tailwind} alt="TailwindCSS" />
                    <img class="m-0 h-8 w-8" src={postgres} alt="PostgreSQL" />
                </div>
                <p>
                    The <b
                        >Aggregated Crash Data Analysis <dfn
                            ><abbr title="Aggregated Crash Data Analysis">(ACDA)</abbr></dfn
                        ></b
                    >
                    is a component of
                    <a href="https://itslab.ncts.upd.edu.ph/create/" target="_blank"
                        >Project <dfn
                            ><abbr title="Collection, Recording, and Analysis of Traffic Incidence Data">CREATE</abbr
                            ></dfn
                        ></a
                    >
                    by the
                    <a href="https://itslab.ncts.upd.edu.ph/" target="_blank"
                        >Intelligent Systems Laboratory <dfn
                            ><abbr title="Intelligent Transportation Systems Laboratory">(ITSLab)</abbr></dfn
                        ></a
                    >
                    of the
                    <a href="https://ncts.upd.edu.ph/" target="_blank"
                        >National Center for Transportation Studies <dfn
                            ><abbr title="National Center for Transportation Studies">(NCTS)</abbr></dfn
                        ></a
                    >. <abbr title="Aggregated Crash Data Analysis">ACDA</abbr> is a comprehensive solution designed to
                    generate crash data reports and statistics to help policymakers and officials promote road safety in
                    the Philippines. This solution combines data from various sources, including police reports,
                    hospital records, and other data repositories collected by the
                    <b
                        >Philippine Integrated Traffic Incident Database <dfn
                            ><abbr title="Philippine Integrated Traffic Incident Database">(PITAD)</abbr></dfn
                        ></b
                    >, to create a compsrehensive view of road safety incidents in the country.
                </p>
                <p>
                    Under the hood, <abbr title="Aggregated Crash Data Analysis">ACDA</abbr> is an installable
                    full-stack
                    <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"
                        >progressive web application</a
                    >
                    powered by <a target="_blank" href="https://kit.svelte.dev/">SvelteKit</a> with
                    <a target="_blank" href="https://www.postgresql.org/">PostgreSQL</a>
                    as the database. To speed up the geospatial queries used in map visualizations and data aggregations,
                    the back-end server extensively leveraged the
                    <a target="_blank" href="https://h3geo.org/">H3 geospatial indexing system</a>
                    developed by Uber Engineering. The front end then renders the data in a
                    <a target="_blank" href="https://svelte.dev/">Svelte</a>
                    application via <a target="_blank" href="https://www.chartjs.org/">Chart.js</a>.
                </p>
                <p>
                    This application was completed as a service project of the <a
                        target="_blank"
                        href="https://up-csi.org/">UP Center for Student Innovations</a
                    >, where I served as the lead developer of the entire project.
                </p>
                <div class="md:flex md:gap-4">
                    <div><img loading="lazy" src={acdaGis} alt="ACDA GIS Page" /></div>
                    <div><img loading="lazy" src={acdaAnalytics} alt="ACDA Analytics Page" /></div>
                    <div><img loading="lazy" src={acdaFilters} alt="ACDA Help Page with Filters" /></div>
                </div>
            </section>
            <section id="up-csi" class="max-w-none scroll-mt-20 rounded-xl bg-card p-8 shadow-xl">
                <h2>UP CSI Website</h2>
                <div class="flex flex-wrap gap-2">
                    <img class="m-0 h-8 w-8" src={upcsi} alt="UP CSI" />
                    <img class="m-0 h-8 w-8" src={git} alt="Git" />
                    <img class="m-0 h-8 w-8" src={node} alt="Node.js" />
                    <img class="m-0 h-8 w-8" src={ts} alt="TypeScript" />
                    <img class="m-0 h-8 w-8" src={js} alt="JavaScript" />
                    <img class="m-0 h-8 w-8" src={svelte} alt="Svelte" />
                    <img class="m-0 h-8 w-8" src={html} alt="HTML" />
                    <img class="m-0 h-8 w-8" src={css} alt="CSS" />
                    <img class="m-0 h-8 w-8" src={tailwind} alt="TailwindCSS" />
                </div>
                <p>
                    The <a target="_blank" href="https://up-csi.org/">UP Center for Student Innovations</a> is a
                    student-oriented organization aimed towards the enhancement of student learning from the
                    <a target="_blank" href="https://up.edu.ph">University of the Philippines</a>
                    <a target="_blank" href="https://upd.edu.ph/">Diliman</a>,
                    <a target="_blank" href="https://dcs.upd.edu.ph/">Department of Computer Science</a> by working with
                    real-world projects. As part of my 2023-2024 term as the Director for Engineering, I was tasked to lead
                    the development and deployment of the organization's official website—a project that had previously been
                    postponed over the years.
                </p>
                <p>
                    The website is an <a target="_blank" href="https://github.com/up-csi/up-csi.github.io"
                        >open-source</a
                    >
                    static website powered by <a target="_blank" href="https://kit.svelte.dev/">SvelteKit</a> and developed
                    in the open by UP CSI's members.
                </p>
                <div class="md:flex md:gap-4">
                    <div><img loading="lazy" src={upcsiHome} alt="UP CSI Home Page" /></div>
                    <div><img loading="lazy" src={upcsiEvents} alt="UP CSI Events Page" /></div>
                </div>
            </section>
            <section id="hatid" class="max-w-none scroll-mt-20 rounded-xl bg-card p-8 shadow-xl">
                <h2>HATiD: Helpdesk and Ticketing Dashboard</h2>
                <div class="flex flex-wrap gap-2">
                    <img class="m-0 h-8 w-8" src={hatid} alt="HATiD" />
                    <img class="m-0 h-8 w-8" src={git} alt="Git" />
                    <img class="m-0 h-8 w-8" src={node} alt="Node.js" />
                    <img class="m-0 h-8 w-8" src={ts} alt="TypeScript" />
                    <img class="m-0 h-8 w-8" src={js} alt="JavaScript" />
                    <img class="m-0 h-8 w-8" src={svelte} alt="Svelte" />
                    <img class="m-0 h-8 w-8" src={html} alt="HTML" />
                    <img class="m-0 h-8 w-8" src={css} alt="CSS" />
                    <img class="m-0 h-8 w-8" src={tailwind} alt="TailwindCSS" />
                    <img class="m-0 h-8 w-8" src={postgres} alt="PostgreSQL" />
                </div>
                <p>
                    <dfn><abbr title="Helpdesk and Ticketing Dashboard">HATiD</abbr></dfn> is an
                    <a target="_blank" href="https://github.com/BastiDood/hatid">open-source</a>
                    Helpdesk and Ticketing Dashboard powered by
                    <a target="_blank" href="https://kit.svelte.dev/">SvelteKit</a>
                    that aims to modernize ticketing systems such as the popular
                    <a target="_blank" href="https://osticket.com/">osTicket</a>. The project was initially developed as
                    part of the 2023 internship program at the
                    <a target="_blank" href="https://up.edu.ph/">University of the Philippines</a>
                    <a target="_blank" href="https://upd.edu.ph/">Diliman</a>,
                    <a target="_blank" href="https://ieor.engg.upd.edu.ph/"
                        >Department of Industrial Engineering and Operations Research</a
                    >.
                </p>
                <div class="md:flex md:gap-4">
                    <div><img loading="lazy" class="max-h-[419px]" src={hatidChat} alt="HATiD Chat" /></div>
                    <div>
                        <img loading="lazy" class="max-h-[419px]" src={hatidLabels} alt="HATiD Labels in a Chat" />
                    </div>
                </div>
            </section>
            <section id="drippy" class="max-w-none scroll-mt-20 rounded-xl bg-card p-8 shadow-xl">
                <h2>Drippy IoT</h2>
                <div class="flex flex-wrap gap-2">
                    <img class="m-0 h-8 w-8" src={drippy} alt="Drippy" />
                    <img class="m-0 h-8 w-8" src={git} alt="Git" />
                    <img class="m-0 h-8 w-8" src={rust} alt="Rust" />
                    <img class="m-0 h-8 w-8" src={tokio} alt="Tokio" />
                    <img class="m-0 h-8 w-8" src={hyper} alt="Hyper" />
                    <img class="m-0 h-8 w-8" src={espressif} alt="Espressif" />
                    <img class="m-0 h-8 w-8" src={ts} alt="TypeScript" />
                    <img class="m-0 h-8 w-8" src={svelte} alt="Svelte" />
                    <img class="m-0 h-8 w-8" src={html} alt="HTML" />
                    <img class="m-0 h-8 w-8" src={css} alt="CSS" />
                    <img class="m-0 h-8 w-8" src={postgres} alt="PostgreSQL" />
                </div>
                <p>
                    <a href="https://github.com/drippy-iot">Drippy</a> is an open-source Internet-of-Things (IoT) system
                    that records the water flow rate of an outlet in a household over time. Periodic reports are
                    aggregated in the cloud so that stakeholders (e.g., customers, the water company, etc.) may access a
                    time-series representation of water consumption through a dashboard interface on the Web. The
                    project was ultimately a
                    <strong>Top 3 Finalist in the IoT Cup 2023</strong>
                    hosted by the <a href="https://upd.edu.ph/">University of Philippines Diliman</a>
                    <a href="https://dcs.upd.edu.ph/">Department of Computer Science</a>.
                </p>
                <p>
                    Aside from data analytics, Drippy’s marquee feature is its ability to detect leaky pipes. As soon as
                    the IoT device detects sufficient conditions for leakage, it automatically closes a master valve in
                    the same pipe to stop the wasted flow of water. A prominently positioned LED lights up to indicate
                    the actuation of said valve. Through the web dashboard, a customer/user may remotely release the
                    valve. Inversely, they may also remotely close the valve (under normal operation) should the need
                    arise. Thus, the IoT system reactively guards against wastage due to leaks and overconsumption.
                </p>
                <div class="flex justify-around gap-4">
                    <div>
                        <img
                            class="m-0 max-h-96"
                            src={drippyLogin}
                            alt="login page for Drippy dashboard"
                            loading="lazy"
                        />
                    </div>
                    <div><img class="m-0 max-h-96" src={drippyDashboard} alt="Drippy dashboard" loading="lazy" /></div>
                </div>
                <p>
                    The <a href="https://www.espressif.com/en/products/socs/esp32">ESP32</a> firmware is
                    <a href="https://github.com/drippy-iot/metro-tap">open-source</a>
                    and written in <a href="https://www.rust-lang.org/">Rust</a> on top of C bindings to the
                    <a href="https://docs.espressif.com/projects/esp-idf/en/latest/esp32/"
                        >ESP IoT Development Framework</a
                    >, which are provided by <a href="https://github.com/esp-rs">Espressif Systems</a>
                    themselves. All cloud interactions (backed by a
                    <a href="https://www.postgresql.org/">PostgreSQL</a>
                    database) are handled by an
                    <a href="https://github.com/drippy-iot/cloud">open-source</a>
                    centralized web server written in <a href="https://www.rust-lang.org/">Rust</a> with the
                    <a href="https://hyper.rs/">Hyper</a>
                    HTTP framework on top of the <a href="https://tokio.rs/">Tokio</a> asynchronous runtime. Finally,
                    the dashboard is a web application written in
                    <a href="https://svelte.dev/">Svelte</a>.
                </p>
                <div class="flex gap-4">
                    <div>
                        <img
                            class="m-0 max-h-[543px] object-contain"
                            src={drippySchematic}
                            alt="schematic diagram for Drippy circuitry"
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <img
                            class="m-0 max-h-full object-contain"
                            src={drippyTestbench}
                            alt="Drippy testbench on actual hardware"
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <img
                            class="m-0 max-h-[543px] object-contain"
                            src={drippyBox}
                            alt="enclosed circuitry for Drippy and its ESP32 chip"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
            <section id="doctrack" class="max-w-none scroll-mt-20 rounded-xl bg-card p-8 shadow-xl">
                <h2>DocTrack</h2>
                <div class="flex flex-wrap gap-2">
                    <img class="m-0 h-8 w-8" src={doctrack} alt="DocTrack" />
                    <img class="m-0 h-8 w-8" src={git} alt="Git" />
                    <img class="m-0 h-8 w-8" src={deno} alt="Deno" />
                    <img class="m-0 h-8 w-8" src={ts} alt="TypeScript" />
                    <img class="m-0 h-8 w-8" src={js} alt="JavaScript" />
                    <img class="m-0 h-8 w-8" src={svelte} alt="Svelte" />
                    <img class="m-0 h-8 w-8" src={html} alt="HTML" />
                    <img class="m-0 h-8 w-8" src={css} alt="CSS" />
                    <img class="m-0 h-8 w-8" src={postgres} alt="PostgreSQL" />
                </div>
                <p>
                    <a href="https://doctrack.deno.dev/">DocTrack</a> is an
                    <a href="https://github.com/BastiDood/doc-track">open-source</a>
                    mobile-first document tracking system built for the modern age. It reimplements and improves on the
                    <a href="https://drs.up.edu.ph/"><dfn><abbr title="Document Routing System">DRS</abbr></dfn></a>
                    by the
                    <a href="https://up.edu.ph/"><dfn><abbr title="University of the Philippines">UP</abbr></dfn></a>
                    <a href="https://itdc.up.edu.ph/"
                        ><dfn><abbr title="Information Technology Development Center">ITDC</abbr></dfn></a
                    >
                    by leveraging
                    <a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"
                        ><dfn><abbr title="Progressive Web App">PWA</abbr></dfn></a
                    > technologies for:
                </p>
                <ul>
                    <li>
                        Delivering push notifications via the <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/Push_API">Web Push API</a
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
                    Wherever possible, the project utilizes a <a href="https://www.typescriptlang.org/">TypeScript</a
                    >-centric application stack. With <a href="https://svelte.dev/">Svelte</a> in the front end,
                    TypeScript ensures that events, messages, and interactions between UI components remain consistent.
                    In the back end, <a href="https://deno.land/">Deno</a>
                    facilitates the development of robust type-safe
                    <dfn><abbr title="Hypertext Transfer Protocol">HTTP</abbr></dfn>
                    request handlers for the
                    <dfn><abbr title="Representational State Transfer">REST</abbr></dfn> API.
                </p>
                <div class="flex gap-4">
                    <div>
                        <img
                            class="m-0 max-h-[1080px] object-contain"
                            src={doctrackMobile}
                            alt="DocTrack Mobile"
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <img
                            class="m-0 max-h-full object-contain"
                            src={doctrackDesktop}
                            alt="DocTrack Desktop"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
            <section id="palai" class="max-w-none scroll-mt-20 rounded-xl bg-card p-8 shadow-xl">
                <h2>pal.ai</h2>
                <div class="flex flex-wrap gap-2">
                    <img class="m-0 h-8 w-8" src={palai} alt="pal.ai" />
                    <img class="m-0 h-8 w-8" src={git} alt="Git" />
                    <img class="m-0 h-8 w-8" src={deno} alt="Deno" />
                    <img class="m-0 h-8 w-8" src={ts} alt="TypeScript" />
                    <img class="m-0 h-8 w-8" src={svelte} alt="Svelte" />
                    <img class="m-0 h-8 w-8" src={html} alt="HTML" />
                    <img class="m-0 h-8 w-8" src={css} alt="CSS" />
                    <img class="m-0 h-8 w-8" src={python} alt="Python" />
                    <img class="m-0 h-8 w-8" src={huggingface} alt="Hugging Face" />
                </div>
                <p>
                    The <a href="https://palai.deno.dev/">pal.ai</a> project is an installable
                    <a href="https://github.com/BastiDood/pal.ai">open-source</a>
                    mobile-first
                    <a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps">progressive web app</a> that
                    uses images of rice leaves to identify rice leaf diseases.
                </p>
                <p>
                    In the back end, we use a minimal <a href="https://deno.com/deploy">Deno Deploy</a>
                    server that proxies the
                    <a href="https://huggingface.co/docs/api-inference/index">Hugging Face Hosted Inference API</a>,
                    which interfaces with a model that uses a
                    <a href="https://arxiv.org/pdf/2106.08254.pdf">BEiT vision transformer model</a>
                    to classify images of rice plants for the presence/absence of diseases. The model is pre-trained using
                    <a href="https://arxiv.org/pdf/1409.0575.pdf">ImageNet 22k</a>
                    then finetuned using the
                    <a href="https://www.kaggle.com/datasets/shrupyag001/philippines-rice-diseases"
                        >PH Rice Leave Diseases dataset</a
                    >. The model achieves <strong>95% accuracy</strong> using the dataset test set despite having only 1120
                    training data points.
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
                    <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"
                        >progressive web app</a
                    >
                    (PWA) written in <a href="https://www.typescriptlang.org/">TypeScript</a>
                    with the <a href="https://svelte.dev/">Svelte</a> framework. It uses the
                    <a href="https://parceljs.org/">Parcel</a> build tool for asset bundling, packaging, and optimization.
                    The PWA allows users to upload their own images of rice plants for classification.
                </p>
                <div class="flex gap-4">
                    <div>
                        <img
                            class="m-0 max-h-full object-contain"
                            src={palaiHome}
                            alt="pal.ai home page with file upload and camera controls"
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <img
                            class="m-0 max-h-[1080px] object-contain"
                            src={palaiMobile}
                            alt="pal.ai results page showing 79.28% confidence in Healthy classification"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
            <section id="soundrave" class="max-w-none scroll-mt-20 rounded-xl bg-card p-8 shadow-xl">
                <h2>SoundRave</h2>
                <div class="flex flex-wrap gap-2">
                    <img class="m-0 h-8 w-8" src={git} alt="Git" />
                    <img class="m-0 h-8 w-8" src={node} alt="Node.js" />
                    <img class="m-0 h-8 w-8" src={express} alt="Express.js" />
                    <img class="m-0 h-8 w-8" src={html} alt="HTML" />
                    <img class="m-0 h-8 w-8" src={css} alt="CSS" />
                    <img class="m-0 h-8 w-8" src={js} alt="JavaScript" />
                    <img class="m-0 h-8 w-8" src={mongo} alt="MongoDB" />
                </div>
                <p>
                    <a href="https://github.com/BastiDood/soundrave">SoundRave</a> was an aggregator app for new music released
                    by a user's followed artists on Spotify. At the time, the news feed was missing from Spotify's features.
                    The app aimed to fill in this hole.
                </p>
                <p>
                    The <dfn><abbr title="User Interface">UI</abbr></dfn> is primarily rendered by the server via the
                    <a href="https://expressjs.com/">Express</a>
                    framework for
                    <a href="https://nodejs.org/">Node.js</a>. For data persistence,
                    <a href="https://www.mongodb.com/">MongoDB</a>
                    is used as the database and cache for Spotify
                    <dfn><abbr title="Application Program Interface">API</abbr></dfn> calls.
                </p>
                <div class="flex gap-4">
                    <div>
                        <img
                            class="m-0 max-h-[768px] object-contain"
                            src={soundraveMobile}
                            alt="SoundRave Mobile"
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <img
                            class="m-0 max-h-full object-contain"
                            src={soundraveDesktop}
                            alt="SoundRave Desktop"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
            <section id="chrozone" class="max-w-none scroll-mt-20 rounded-xl bg-card p-8 shadow-xl">
                <h2>Chrozone</h2>
                <div class="flex flex-wrap gap-2">
                    <img class="m-0 h-8 w-8" src={chrozone} alt="Chrozone" />
                    <img class="m-0 h-8 w-8" src={git} alt="Git" />
                    <img class="m-0 h-8 w-8" src={rust} alt="Rust" />
                    <img class="m-0 h-8 w-8" src={tokio} alt="Tokio" />
                    <img class="m-0 h-8 w-8" src={hyper} alt="Hyper" />
                    <img class="m-0 h-8 w-8" src={deno} alt="Deno" />
                </div>
                <p>
                    <a href="https://github.com/BastiDood/chrozone">Chrozone</a> is a
                    <a href="https://tokio.rs/">Tokio</a>-powered
                    <a
                        href="https://discord.com/api/oauth2/authorize?client_id=1008989318901137459&scope=applications.commands"
                        >Discord bot</a
                    >
                    written in <a href="https://www.rust-lang.org/">Rust</a> that provides time-based utilities via
                    <a href="https://discord.com/developers/docs/interactions/application-commands#slash-commands"
                        >slash commands</a
                    >. One of its primary features is to format a given date as a dynamic timestamp message (as seen in
                    the screenshots below).
                </p>
                <p>
                    For global Discord communities that have special timezone considerations, Chrozone empowers users to
                    send timezone-adaptive announcements. No need to convert the timezones yourself! Let Chrozone do the
                    work.
                </p>
                <div class="flex justify-around gap-4">
                    <div>
                        <img
                            class="m-0 max-h-[596px] object-contain"
                            src={chrozoneAutocomplete}
                            alt="Chrozone Autocompletion Menu"
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <img
                            class="m-0 max-h-full object-contain"
                            src={chrozoneResult}
                            alt="Chrozone Preview Result"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
            <section id="quizzo" class="max-w-none scroll-mt-20 rounded-xl bg-card p-8 shadow-xl">
                <h2>Quizzo</h2>
                <div class="flex flex-wrap gap-2">
                    <img class="m-0 h-8 w-8" src={quizzo} alt="Quizzo" />
                    <img class="m-0 h-8 w-8" src={git} alt="Git" />
                    <img class="m-0 h-8 w-8" src={rust} alt="Rust" />
                    <img class="m-0 h-8 w-8" src={tokio} alt="Tokio" />
                    <img class="m-0 h-8 w-8" src={hyper} alt="Hyper" />
                    <img class="m-0 h-8 w-8" src={deno} alt="Deno" />
                    <img class="m-0 h-8 w-8" src={postgres} alt="PostgreSQL" />
                </div>
                <p>
                    <a href="https://github.com/BastiDood/quizzo">Quizzo</a> is a
                    <a href="https://tokio.rs/">Tokio</a>-powered
                    <a
                        href="https://discord.com/api/oauth2/authorize?client_id=823813267133956136&scope=applications.commands"
                        >Discord bot</a
                    >
                    written in <a href="https://www.rust-lang.org/">Rust</a> for hosting limited-time quizzes. With
                    Discord's built-in
                    <a href="https://discord.com/developers/docs/interactions/message-components#message-components"
                        >message components</a
                    >, Quizzo provides an easy-to-use interface (and a trivially scalable setup) for large-scale quizzes
                    with many users. When the quiz timer expires, Quizzo notifies everyone in the channel which users
                    answered the quiz correctly. The pioneer use of message components differentiates Chrozone from the
                    other bots in the market which use clunky reaction-based polling mechanisms.
                </p>
                <img src={quizzoResult} alt="Quizzo Chat Output" loading="lazy" class="m-auto" />
            </section>
            <section id="multicast" class="max-w-none scroll-mt-20 rounded-xl bg-card p-8 shadow-xl">
                <h2>UDP Multicast Chat</h2>
                <div class="flex flex-wrap gap-2">
                    <img class="m-0 h-8 w-8" src={git} alt="Git" />
                    <img class="m-0 h-8 w-8" src={rust} alt="Rust" />
                    <img class="m-0 h-8 w-8" src={tokio} alt="Tokio" />
                </div>
                <p>
                    The <a href="https://github.com/BastiDood/udp-multicast-chat"
                        ><dfn><abbr title="User Datagram Protocol">UDP</abbr></dfn> Multicast Chat Project</a
                    >
                    is a basic chat application written in Rust. The front-end GUI uses the popular
                    <a href="https://www.egui.rs/"><code>egui</code></a>
                    library to render the updates from the back end. Meanwhile, the back end is a
                    <a href="https://tokio.rs/">Tokio</a>-powered server that listens for UDP messages over a specified
                    multicast address. The same multicast channel is also used for sending new messages. This setup
                    effectively allows multiple hosts in the local area network to communicate with each other via a
                    common UDP multicast channel.
                </p>
                <div>
                    <img src={multicastScreenshot} alt="UDP Multicast Chat Preview" loading="lazy" class="m-auto" />
                </div>
            </section>
            <section id="snake" class="max-w-none scroll-mt-20 rounded-xl bg-card p-8 shadow-xl">
                <h2>Snake Clone with SDL2</h2>
                <div class="flex flex-wrap gap-2">
                    <img class="m-0 h-8 w-8" src={git} alt="Git" />
                    <img class="m-0 h-8 w-8" src={cpp} alt="C++" />
                    <img class="m-0 h-8 w-8" src={cmake} alt="CMake" />
                </div>
                <p>
                    Using the popular <a href="https://www.libsdl.org/"
                        ><dfn><abbr title="Simple DirectMedia Layer 2.0">SDL2</abbr></dfn></a
                    >
                    library, the
                    <a href="https://github.com/BastiDood/sdl-basic-snake"><code>sdl-basic-snake</code></a>
                    project reimplements the classic game
                    <a href="https://en.wikipedia.org/wiki/Snake_(video_game_genre)">Snake</a> with modern object-oriented
                    C++20 code.
                </p>
                <p>
                    In line with the theme of modern best practices, the project also uses <a href="https://cmake.org/"
                        >CMake</a
                    > as its cross-platform build system generator. Assuming the necessary system dependencies have been
                    set up, the project may be built and run on any platform.
                </p>
                <div class="flex justify-around gap-4">
                    <div><img src={snakeScore1} alt="Snake Score 1" loading="lazy" /></div>
                    <div><img src={snakeScore6} alt="Snake Score 6" loading="lazy" /></div>
                    <div><img src={snakeScore16} alt="Snake Score 16" loading="lazy" /></div>
                </div>
            </section>
            <section id="option-block" class="max-w-none scroll-mt-20 rounded-xl bg-card p-8 shadow-xl">
                <h2>A Block of Optionals!</h2>
                <div class="flex flex-wrap gap-2">
                    <img class="m-0 h-8 w-8" src={git} alt="Git" />
                    <img class="m-0 h-8 w-8" src={rust} alt="Rust" />
                </div>
                <p>
                    The <a href="https://github.com/BastiDood/option-block"><code>option-block</code></a> crate is an open-source
                    Rust package that provides a basic direct address look-up table, where empty slots are tracked by a single
                    bit mask. Although it is rather simple, this is a fundamental data structure in embedded development,
                    where memory constraints especially matter.
                </p>
                <p>
                    From the pull request <a
                        href="https://github.com/dlkj/usbd-human-interface-device/pull/89#issue-1574171393"
                        ><code>dlkj/usbd-human-interface-device#89</code></a
                    >
                    by <a href="https://github.com/jedrzejboczar">@jedrzejboczar</a>:
                </p>
                <blockquote cite="https://github.com/dlkj/usbd-human-interface-device/pull/89#issue-1574171393">
                    Currently, <code>heapless::FnvIndexMap</code> is used to store idle times for reports, which takes
                    260B (out of 460B for whole <code>RawInterface</code>) to store at most 32
                    <code>u8</code>
                    values. This PR changes it to use
                    <a href="https://github.com/BastiDood/option-block"><code>option-block</code></a>
                    which basically is <code>[u8; 32]</code> with <code>u32</code> bitmask of "used" slots, which takes
                    36B (<code>RawInterface</code> is now 236B)... In my use case, with 3 HID interfaces, this
                    <strong>saves 672 bytes of RAM usage</strong>, while I also observed minor improvement in code size—<a
                        href="https://github.com/dlkj/usbd-human-interface-device"
                        ><code>usbd-human-interface-device</code></a
                    >
                    takes <strong>406 bytes less space</strong>.
                </blockquote>
            </section>
        </article>
    </div>
</div>
