const usage = `
  Commands:
    clear               - Clear the Screen
    exit                - Exit REPL
`;

export async function handleCommand(input: string) {
    const [cmd, ...args] = input.split(' ');

    switch (cmd) {
        case 'help':
            return usage;

        default:
            return "Unknown command. Type 'help' for help.";
    }
}
