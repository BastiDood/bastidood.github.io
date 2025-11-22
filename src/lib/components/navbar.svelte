<script>
	import profile from '$lib/images/profile.webp';
	import { resolve } from '$app/paths';
</script>

<nav class="bg-brand sticky top-0 z-10 text-white shadow-md">
	<ul class="flex h-16 justify-center">
		<li>
			<a
				class="hover:bg-hover flex h-full items-center px-4 transition-colors"
				href={resolve('/portfolio/')}>Portfolio</a
			>
		</li>
		<li>
			<a
				class="hover:bg-hover flex h-full items-center px-4 transition-colors"
				href={resolve('/')}
			>
				<img
					src={profile}
					width="500"
					height="500"
					alt="cartoonish avatar waving hello"
					class="block size-10 rounded-full shadow-xl"
				/>
			</a>
		</li>
		<li>
			<a
				class="hover:bg-hover flex h-full items-center px-4 transition-colors"
				href={resolve('/articles/')}>Articles</a
			>
		</li>
	</ul>
</nav>
