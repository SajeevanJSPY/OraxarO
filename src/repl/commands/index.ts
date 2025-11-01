import { handleServeCommand } from './serve';

const usage = `
OraXarO REPL - Oracle Database Toolkit

Available Commands:
    config     Manage application configuration (e.g., database connection)
    serve      Launch the interactive web UI dashboard
    clear      Clear the REPL screen
    exit       Exit the REPL session

Type "<command> help" for more details on any command.
`;

export async function handleCommand(input: string) {
    const [cmd, ...args] = input.split(' ');

    switch (cmd) {
        case 'help':
            return usage;

        case 'serve':
            return handleServeCommand(args);

        default:
            return "Unknown command. Type 'help' for help.";
    }
}
