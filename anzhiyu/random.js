var posts=["2020/01/01/00def/","2020/01/01/hello-world/","2024/08/23/nahida/","2024/08/23/z1girl/","2024/07/01/00824/","2024/08/21/0100 (1)/","2024/08/24/0100 (2)/","2024/07/25/011100/","2024/06/01/0600/","2024/05/21/0500/","2024/05/05/0700/","2024/07/28/0702/","2024/08/08/0809/","2024/08/08/0808/","2024/05/11/0810/","2024/08/18/0811/","2024/08/23/0823/","2024/08/24/0824 (2)/","2024/08/22/08241(20240824171327)/","2024/08/11/0824/","2024/08/22/08241/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };