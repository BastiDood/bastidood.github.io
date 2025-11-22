<script>
	import * as CareerTimeline from '$lib/components/career-timeline';
	import ExternalLink from '$lib/ui/link/external.svelte';
	import Proficiencies from '$lib/components/proficiencies.svelte';
</script>

<article class="mx-auto">
	<CareerTimeline.Root>
		<CareerTimeline.Card
			date="July 2025 – Present"
			title="AI Product Engineer"
			companyName="Casper Studios"
			companyUrl="https://casperstudios.xyz/"
		>
			<ul class="ms-4 list-outside list-disc">
				<li>
					Lead engineer behind speeding up by 600x the <ExternalLink
						href="https://dev.to/somedood/simulating-course-schedules-600x-faster-with-web-workers-in-coursecast-41ma"
						>CourseCast</ExternalLink
					> course assignment simulator of <ExternalLink
						href="https://mba-inside.wharton.upenn.edu/course-match/"
						>CourseMatch</ExternalLink
					> for the Wharton School of the University of Pennsylvania
				</li>
				<li>
					Built the internal LLM-powered automation for hedge fund analysts that processes
					and summarizes 5,000+ emails every day within 5 minutes
				</li>
			</ul>
		</CareerTimeline.Card>

		<CareerTimeline.Card
			date="October 2024 – May 2025"
			title="Full-Stack Engineer"
			companyName="Verdn (YC W22)"
			companyUrl="https://verdn.com/"
		>
			<ul class="ms-4 list-outside list-disc">
				<li>
					Core team member building the Verdn platform: a pledge-tracking system that
					quantifies and visualizes the impact of sales/actions towards causes
				</li>
				<li>
					Processed a million requests, cron jobs, and webhook events per day from
					Shopify, Stripe, OpenAI, and more
				</li>
				<li>
					Key contributor to CharityOS, streamlining corporate backing for charities with
					marketing tools and AI-powered lookalike search engines.
				</li>
				<li>
					Improved dev server startup times from 1-2 minutes to within 10 seconds,
					migrated to a monorepo with Turborepo + Vercel Remote Caching (reducing CI times
					to 10% of original), and implemented preview deployment infrastructure for
					enhanced PR review productivity
				</li>
			</ul>
		</CareerTimeline.Card>
		<CareerTimeline.Card
			date="February 2025"
			title="Rust for Gaming: Highly Concurrent Game Servers with the Actor Model"
			companyName="Rust Archipelago: Breakout"
			companyUrl="https://www.rustarchipelago.com/"
		>
			<div class="mx-auto max-w-sm">
				<iframe
					src="https://www.youtube-nocookie.com/embed/zub1geH_eh8?si=9gvxvLO2lm8ew60h"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
					class="aspect-video w-full rounded-lg"
				></iframe>
			</div>
		</CareerTimeline.Card>
		<CareerTimeline.Card
			date="August 2023 – July 2024"
			title="Director for Engineering"
			companyName="University of the Philippines - Center for Student Innovations"
			companyUrl="https://up-csi.org/"
		>
			<ul class="ms-4 list-outside list-disc">
				<li>
					Primary technical consultant for all software projects including websites,
					analytics dashboards, alternative housing platforms, and department-level
					automations (e.g., <ExternalLink href="https://drap.dcs.upd.edu.ph/"
						>DRAP</ExternalLink
					>)
				</li>
				<li>
					Hosted workshops and courses for upskilling student developers: Dev Training
					Program (9 modules, 150 pages, 100+ participants), DevCamp 2024 (12 modules, 40
					pages, full-stack with SvelteKit and MongoDB), Git Workshop for the entire
					Department of Computer Science, and InnovCamp 2024 on web performance
					optimization
				</li>
			</ul>
		</CareerTimeline.Card>
		<CareerTimeline.Card
			date="September 2020 – July 2024"
			title="Bachelor of Science in Computer Science"
			companyName="University of the Philippines - Diliman"
			companyUrl="https://upd.edu.ph/"
		>
			<ul class="ms-4 list-outside list-disc">
				<li>Graduated Summa Cum Laude</li>
				<li>University Scholar for Academic Years 2020-2024</li>
				<li>Department of Science and Technology (DOST) Merit Scholar</li>
				<li>
					Researcher at the Department of Computer Science - Networks and Distributed
					Systems Group.
				</li>
				<li>
					Relevant coursework: Algorithms, Data Structures, Database Systems, Operating
					Systems, Computer Networking, Software Engineering, Computer Security, AI/ML,
					Compiler Theory, Formal Verification Systems, and Blockchain Technologies.
				</li>
			</ul>
		</CareerTimeline.Card>
	</CareerTimeline.Root>
</article>
<article>
	<Proficiencies />
</article>
