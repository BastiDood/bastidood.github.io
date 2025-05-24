<script>
  import Card from '$lib/ui/card.svelte';

  import { DevTo } from '$lib/icons/social/dev';
  import { GitHub } from '$lib/icons/social/github';
  import { LinkedIn } from '$lib/icons/social/linkedin';
  import { Twitter } from '$lib/icons/social/twitter';

  import profile from '$lib/images/profile.webp';
</script>

<Card color="fade" size="md" class="m-6 space-y-2 p-6">
  <div class="space-y-1">
    <h1>I'm Basti Ortiz.</h1>
    <p>Web developer. Open-source contributor. Learner. Writer. Mentor. Leader.</p>
  </div>
  <div class="flex items-center gap-2">
    <a href="/">
      <img
        src={profile}
        width="500"
        height="500"
        alt="cartoonish avatar waving hello"
        class="block size-8 rounded-full"
      />
    </a>
    <a href="https://github.com/BastiDood" title="GitHub">
      <GitHub class="w-8" />
    </a>
    <a href="https://dev.to/somedood" title="dev.to">
      <DevTo class="w-8" />
    </a>
    <a href="https://www.linkedin.com/in/basti-ortiz/" title="LinkedIn">
      <LinkedIn class="w-8" />
    </a>
    <a href="https://twitter.com/BastiDood" title="Twitter">
      <Twitter class="w-8" />
    </a>
  </div>
</Card>
