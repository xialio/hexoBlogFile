var posts=["2020/01/01/hello-world/","2024/08/23/nahida/","2024/08/23/z1girl/","2020/01/01/00def/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };