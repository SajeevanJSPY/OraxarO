import { handleServeCommand } from './serve';

const usage = `
  Commands:
    serve               - serve a web UI
    clear               - Clear the Screen
    exit                - Exit REPL
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
