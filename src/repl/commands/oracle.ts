import { connect, close, getConnection } from '@lib/db/connection';

const usage = `
Usage: db <subcommand>

Subcommands:
    connect      Connect to the oracle database using current config
    close        Close the current oracle database connection
    status       Show current connection status
`;

export async function handleDBCommand(input: string[]) {
    const command = input[0];

    switch (command) {
        case 'connect':
            await connect();
            break;
        case 'close':
            await close();
            break;
        case 'status':
            return getConnection().isHealthy() ? 'running' : 'closed';
        case 'help':
            return usage;
        default:
            throw new Error('Unknown subcommand. Type `db help` for usage.');
    }
}
