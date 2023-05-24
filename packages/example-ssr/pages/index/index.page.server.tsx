import fetch from "node-fetch";

export { onBeforeRender };

async function onBeforeRender() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const posts = await response.json();
  return {
    pageContext: {
      pageProps: {
        posts
      }
    }
  };
}
