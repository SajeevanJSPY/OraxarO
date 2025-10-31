import index_html from './public/index.html';

import chalk from 'chalk';

const PORT = 3000;

let webServer: Bun.Server<undefined>;

export function serve() {
    webServer = Bun.serve({
        port: PORT,
        routes: {
            '/': index_html,
        },
        development: true,
    });
    console.log(chalk.greenBright(`listening on http://localhost:${PORT}`));
}

export async function close() {
    console.log(chalk.gray(`closing the connection http://localhost:${PORT}`));
    await webServer.stop();
}
