import { handleConfigCommand } from './config';
import { handleDBCommand } from './oracle';
import { handleUICommand } from './ui';

const usage = `
OraXarO REPL - Oracle Database Toolkit

Available Commands:
    config     Manage application configuration (e.g., database connection)
    ui         Launch the interactive web UI dashboard
    db         Handle oracle database connection
    clear      Clear the REPL screen
    exit       Exit the REPL session

Type "<command> help" for more details on any command.
`;

export async function handleCommand(input: string) {
    const [cmd, ...args] = input.split(' ');

    switch (cmd) {
        case 'help':
            return usage;

        case 'ui':
            return handleUICommand(args);

        case 'config':
            return handleConfigCommand(args);

        case 'db':
            return handleDBCommand(args);

        default:
            return "Unknown command. Type 'help' for help.";
    }
}
