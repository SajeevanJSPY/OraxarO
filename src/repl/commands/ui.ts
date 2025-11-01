import { serve, close } from '@lib/web/server';

const usage = `
Usage: ui <subcommand>

Subcommands:
    connect      Start and serve the OraXarO web UI
    close        Stop the currently running web UI session

Examples:
    ui connect   # Launch the interactive dashboard in your browser
    ui close     # Gracefully shut down the web interface
`;

export async function handleUICommand(input: string[]) {
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
