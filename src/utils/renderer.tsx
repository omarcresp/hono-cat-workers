import { html } from "hono/html";
import { jsxRenderer } from "hono/jsx-renderer";

export const renderer = jsxRenderer(({ children }) => {
  return html`
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Socat</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        ${children}
        <script
          async
          src="https://unpkg.com/htmx.org@1.9.12"
          integrity="sha384-ujb1lZYygJmzgSwoxRggbCHcjc0rB2XoQrxeTUQyRjrOnlCoYta87iKBWq3EsdM2"
          crossorigin="anonymous"
        ></script>
        <script async src="https://unpkg.com/htmx.org/dist/ext/json-enc.js"></script>
      </body>
    </html>
  `;
});
