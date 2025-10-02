<script>
  import Card from '$lib/ui/card.svelte';
  import profile from '$lib/images/profile.webp';
  import { Bluesky } from '$lib/icons/social/bluesky';
  import { DevTo } from '$lib/icons/social/dev';
  import { GitHub } from '$lib/icons/social/github';
  import { LinkedIn } from '$lib/icons/social/linkedin';
  import { resolve } from '$app/paths';
  import { Twitter } from '$lib/icons/social/twitter';
</script>

<Card color="fade" size="md" class="m-6 space-y-2 p-6">
  <div class="space-y-1">
    <h1>I'm Basti Ortiz.</h1>
    <p>Web developer. Open-source contributor. Learner. Writer. Mentor. Leader.</p>
  </div>
  <div class="flex items-center gap-2">
    <a href={resolve('/')}
      ><img
        src={profile}
        width="500"
        height="500"
        alt="cartoonish avatar waving hello"
        class="block size-8 rounded-full"
      /></a
    >
    <a href="https://github.com/BastiDood" target="_blank" rel="external" title="GitHub"
      ><GitHub class="w-8" /></a
    >
    <a href="https://dev.to/somedood" target="_blank" rel="external" title="dev.to"
      ><DevTo class="w-8" /></a
    >
    <a
      href="https://www.linkedin.com/in/basti-ortiz/"
      target="_blank"
      rel="external"
      title="LinkedIn"><LinkedIn class="w-8" /></a
    >
    <a href="https://twitter.com/BastiDood" target="_blank" rel="external" title="Twitter"
      ><Twitter class="w-8" /></a
    >
    <a href="https://bsky.app/profile/bastidood.dev" target="_blank" rel="external" title="Bluesky"
      ><Bluesky class="w-8" /></a
    >
    <a
      href="mailto:ortiz@bastidood.dev"
      target="_blank"
      rel="external"
      title="Email"
      class="text-4xl">&#x1F4E7;</a
    >
  </div>
</Card>
