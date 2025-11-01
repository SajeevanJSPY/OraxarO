import chalk from 'chalk';

import { config } from '@lib/globals';

const usage = `
Usage: config <subcommand> [options]

Subcommands:
    set <key> <value>   Set a configuration value
    get <key>           Get a configuration value
    help                Show this help message

Example:
    config set connection oracle://user:pass@localhost:1521/XEPDB1
    config get connection
`;

function toConnectionString({
    user,
    password,
    connectString,
}: {
    user?: string;
    password?: string;
    connectString?: string;
}) {
    return `oracle://${user}:${password}@${connectString}`;
}

function parseOracleConnectionString(str: string) {
    try {
        const url = new URL(str);
        const user = decodeURIComponent(url.username);
        const password = decodeURIComponent(url.password);
        const connectString = url.host + url.pathname;
        return { user, password, connectString };
    } catch {
        throw new Error('Invalid connection string format.');
    }
}

export async function handleConfigCommand(input: string[]) {
    const command = input[0];

    if (!command) {
        throw new Error('Missing subcommand. Type `config help` for usage.');
    }

    switch (command) {
        case 'set': {
            const key = input[1];
            const value = input[2];

            if (!key) throw new Error('Provide a <key> to set.');
            if (!value) throw new Error(`Provide a value for '${key}'.`);

            switch (key) {
                case 'connection':
                    if (!value.startsWith('oracle://')) {
                        throw new Error(
                            'Connection string must start with oracle://user:password@connectString',
                        );
                    }
                    const parsed = parseOracleConnectionString(value);
                    config.connection = parsed;
                    return chalk.green('Connection configuration updated successfully.');
                default:
                    throw new Error(`Unknown config key '${key}'.`);
            }
        }

        case 'get': {
            const key = input[1];
            if (!key) throw new Error('Provide a <key> to get.');
            switch (key) {
                case 'connection': {
                    const conn = config.connection;
                    if (!conn) return chalk.yellow('No connection configured yet.');

                    return chalk.cyan(
                        toConnectionString({
                            user: config.connection?.user,
                            password: config.connection?.password,
                            connectString: config.connection?.connectString,
                        }),
                    );
                }
                default:
                    throw new Error(`Unknown config key '${key}'.`);
            }
        }
        case 'help':
            return usage;
        default:
            throw new Error('Unknown subcommand. Type `config help` for usage.');
    }
}
