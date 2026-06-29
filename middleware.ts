import { next } from "@vercel/functions";

declare const process: {
  env: Record<string, string | undefined>;
};

const COOKIE_NAME = "sean_exec_access";
const PASSWORD = process.env.PROPOSAL_PASSWORD || process.env.SITE_PASSWORD;

export const config = {
  matcher: ["/((?!favicon.ico).*)"],
};

async function sha256(value: string) {
  const data = new TextEncoder().encode(value);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function noIndexHeaders(contentType = "text/html; charset=utf-8") {
  return {
    "content-type": contentType,
    "x-robots-tag": "noindex, nofollow, noarchive, nosnippet",
  };
}

function cookieValue(request: Request) {
  const cookie = request.headers.get("cookie") || "";
  const match = cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]+)`));
  return match ? decodeURIComponent(match[1]) : "";
}

function loginPage(error = "") {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex,nofollow,noarchive,nosnippet" />
    <title>Private Proposal</title>
    <style>
      :root{color-scheme:light;--ink:#0b0f17;--muted:#667386;--line:#dce4ee;--blue:#3f7dff}
      *{box-sizing:border-box}body{margin:0;min-height:100svh;display:grid;place-items:center;background:#f7f9fc;color:var(--ink);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
      main{width:min(420px,calc(100vw - 40px));background:#fff;border:1px solid var(--line);padding:32px;box-shadow:0 24px 80px rgba(20,35,58,.08)}
      h1{margin:0 0 10px;font-size:22px;letter-spacing:0}p{margin:0 0 24px;color:var(--muted);line-height:1.5}
      label{display:block;margin-bottom:8px;font-size:13px;font-weight:700}input{width:100%;height:48px;border:1px solid var(--line);padding:0 14px;font:inherit}
      button{width:100%;height:48px;margin-top:14px;border:0;background:#05070a;color:#fff;font:700 14px/1 Inter,system-ui;cursor:pointer}
      .error{margin-top:14px;color:#a32020;font-size:13px}.mark{width:32px;height:3px;background:var(--blue);margin-bottom:24px}
    </style>
  </head>
  <body>
    <main>
      <div class="mark" aria-hidden="true"></div>
      <h1>Enter the password</h1>
      <p>This private proposal is intentionally unlisted.</p>
      <form method="post" action="/proposal-login">
        <label for="password">Password</label>
        <input id="password" name="password" type="password" placeholder="october 1993" autocomplete="current-password" autofocus />
        <button type="submit">Continue</button>
        ${error ? `<div class="error">${error}</div>` : ""}
      </form>
    </main>
  </body>
</html>`;
}

export default async function middleware(request: Request) {
  const url = new URL(request.url);

  if (!PASSWORD) {
    return new Response("Proposal password is not configured.", {
      status: 503,
      headers: noIndexHeaders("text/plain; charset=utf-8"),
    });
  }

  const expectedToken = await sha256(PASSWORD);

  if (url.pathname === "/proposal-login" && request.method === "POST") {
    const formData = await request.formData();
    const submitted = String(formData.get("password") || "");

    if (submitted === PASSWORD) {
      return new Response(null, {
        status: 303,
        headers: {
          location: "/",
          "set-cookie": `${COOKIE_NAME}=${expectedToken}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=2592000`,
          "x-robots-tag": "noindex, nofollow, noarchive, nosnippet",
        },
      });
    }

    return new Response(loginPage("Incorrect password."), {
      status: 401,
      headers: noIndexHeaders(),
    });
  }

  if (url.pathname === "/proposal-login") {
    return Response.redirect(new URL("/", request.url), 303);
  }

  if (cookieValue(request) !== expectedToken) {
    return new Response(loginPage(), {
      status: 401,
      headers: noIndexHeaders(),
    });
  }

  return next({
    headers: {
      "x-robots-tag": "noindex, nofollow, noarchive, nosnippet",
    },
  });
}
