import { serve, close } from '@lib/web/server';

const usage = `
  Subcommands:
    connect             - Serve the web UI
    close               - close the web connection
`;

export async function handleServeCommand(input: string[]) {
    const command = input[0];

    switch (command) {
        case 'connect':
            serve();
            return 'running the server';
        case 'close':
            await close();
            return 'closed the connection';
        case 'help':
            return usage;
        default:
            throw new Error('Unknown command. Type `serve help` for help');
    }
}
