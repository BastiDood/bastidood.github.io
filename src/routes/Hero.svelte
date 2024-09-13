<script>
    import dev from '$lib/icons/social/dev.svg';
    import github from '$lib/icons/social/github.svg';
    import linkedIn from '$lib/icons/social/linkedin.svg';
    import profile from '$lib/images/profile.webp';
    import twitter from '$lib/icons/social/twitter.svg';
</script>

<div class="m-6 space-y-2 rounded-2xl bg-fade p-6">
    <div class="space-y-1">
        <h1>I'm Basti Ortiz.</h1>
        <p>Web developer. Open-source contributor. Learner. Writer. Mentor. Leader.</p>
    </div>
    <div class="flex items-center gap-2">
        <img
            src={profile}
            width="500"
            height="500"
            alt="cartoonish avatar waving hello"
            class="block size-8 rounded-full"
        />
        <a href="https://github.com/BastiDood" title="GitHub"><img src={github} alt="GitHub" class="w-8" /></a>
        <a href="https://dev.to/somedood" title="dev.to"><img src={dev} alt="dev.to" class="w-8" /></a>
        <a href="https://www.linkedin.com/in/basti-ortiz/" title="LinkedIn"
            ><img src={linkedIn} alt="LinkedIn" class="w-8" /></a
        >
        <a href="https://twitter.com/BastiDood" title="Twitter"><img src={twitter} alt="Twitter" class="w-8" /></a>
    </div>
</div>
