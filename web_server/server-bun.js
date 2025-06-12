import { server } from "bun";

server({
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response("Hello world", { status: 200 });
    } else if (url.pathname === "/seecodes") {
      return new Response("Hello See codes!", { status: 200 });
    } else {
      return new Response("404 Not Found", { status: 404 });
    }
  },
  port: 3000,
  hostname: "127.0.0.1",
});
