import chalk from 'chalk';

import { getComponent, renderPage } from './ssr';

const PORT = 3000;

let webServer: Bun.Server<undefined>;

export async function serve() {
    webServer = Bun.serve({
        port: PORT,
        async fetch(req) {
            const url = new URL(req.url);

            // static file serving
            if (url.pathname.startsWith('/js/') || url.pathname.startsWith('/css/')) {
                return new Response(Bun.file(`.${url.pathname}`));
            }

            // components
            const navbar = getComponent('navbar');
            const footer = getComponent('footer');

            // routing
            const allowedPathnames = ['/', '/process', '/storage', '/memory'];
            if (allowedPathnames.includes(url.pathname)) {
                const html = renderPage(url.pathname, { navbar, footer });
                return new Response(html, { headers: { 'Content-Type': 'text/html' } });
            }

            return new Response('404 Not Found', { status: 404 });
        },
        error(error) {
            console.error(error);
            return new Response('Internal Server Error', { status: 500 });
        },
        development: true,
    });
    console.log(chalk.greenBright(`listening on http://localhost:${PORT}`));
}

export async function close() {
    console.log(chalk.gray(`closing the connection http://localhost:${PORT}`));
    await webServer.stop();
}
