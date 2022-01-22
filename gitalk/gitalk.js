const gitalk = new Gitalk({
  clientID: '{{ .Site.Params.Gitalk.clientID }}',
  clientSecret: '{{ .Site.Params.Gitalk.clientSecret }}',
  repo: '{{ .Site.Params.Gitalk.repo }}',
  owner: '{{ .Site.Params.Gitalk.owner }}',
  admin: ['{{ .Site.Params.Gitalk.owner }}'],
  proxy: '{{ .Site.Params.gitalk.proxy }}',
  id: location.pathname, // Ensure uniqueness and length less than 50
  distractionFreeMode: false // Facebook-like distraction free mode
});
(function() {
  if (["localhost", "127.0.0.1"].indexOf(window.location.hostname) != -1) {
    document.getElementById('gitalk-container').innerHTML = 'Gitalk comments not available by default when the website is previewed locally.';
    return;
  }
  gitalk.render('gitalk-container');
})();