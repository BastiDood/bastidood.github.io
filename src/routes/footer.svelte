<script>
  import profile from '$lib/images/profile.webp';
  import { resolve } from '$app/paths';
</script>

<footer class="bg-gray-800 p-4 text-gray-400 sm:p-6">
  <div class="mx-auto max-w-screen-xl">
    <div class="md:flex md:justify-between">
      <div class="mb-6 md:mb-0">
        <a href={resolve('/')} class="flex items-center">
          <img
            src={profile}
            alt="BastiDood"
            width="500"
            height="500"
            loading="lazy"
            class="mr-3 size-8"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-white"
            >Basti Ortiz</span
          >
        </a>
      </div>
      <div class="grid grid-cols-3 gap-8 sm:gap-6">
        <div>
          <h2 class="mb-4 text-sm font-semibold text-white uppercase">Sitemap</h2>
          <ul class="space-y-2 text-gray-400">
            <li><a href={resolve('/')} class="hover:underline">Home</a></li>
            <li><a href={resolve('/portfolio/')} class="hover:underline">Portfolio</a></li>
            <li><a href={resolve('/articles/')} class="hover:underline">Articles</a></li>
          </ul>
        </div>
        <div>
          <h2 class="mb-4 text-sm font-semibold text-white uppercase">Social</h2>
          <ul class="space-y-2 text-gray-400">
            <li>
              <a href="https://dev.to/somedood" target="_blank" class="hover:underline"
                >DEV (dev.to)</a
              >
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/basti-ortiz/"
                target="_blank"
                class="hover:underline">LinkedIn</a
              >
            </li>
            <li>
              <a href="https://twitter.com/BastiDood" target="_blank" class="hover:underline"
                >Twitter</a
              >
            </li>
            <li>
              <a
                href="https://bsky.app/profile/bastidood.dev"
                target="_blank"
                class="hover:underline">Bluesky</a
              >
            </li>
            <li>
              <a href="https://github.com/BastiDood" target="_blank" class="hover:underline"
                >GitHub</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-4 text-sm font-semibold text-white uppercase">Code</h2>
          <ul class="space-y-2 text-gray-400">
            <li>
              <a
                href="https://github.com/BastiDood/bastidood.github.io"
                target="_blank"
                class="hover:underline">Repository</a
              >
            </li>
            <li>
              <a
                href="https://github.com/BastiDood/bastidood.github.io/blob/main/COPYING.md"
                target="_blank"
                class="hover:underline">External Assets</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-700 sm:mx-auto lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
      <span class="text-sm text-gray-400 sm:text-center"
        >&copy; 2025 <a href={resolve('/')} class="hover:underline">Basti Ortiz</a>. All rights
        reserved.
      </span>
    </div>
  </div>
</footer>
