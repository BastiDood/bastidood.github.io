<script>
  import profile from '$lib/images/profile.webp';
</script>

<header class="bg-brand sticky top-0 z-10 w-full text-white shadow-md">
  <nav>
    <ul class="flex justify-center">
      <li>
        <a class="hover:bg-hover block p-4 transition-colors" href="/portfolio/">Portfolio</a>
      </li>
      <li>
        <a class="hover:bg-hover block px-4 py-2 transition-colors" href="/">
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
        <a class="hover:bg-hover block p-4 transition-colors" href="/articles/">Articles</a>
      </li>
    </ul>
  </nav>
</header>
