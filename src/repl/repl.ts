import readline from 'readline';
import chalk from 'chalk';

const usage = `
  Commands:
    clear               - Clear the Screen
    exit                - Exit REPL
`;

export function startRepl() {
    console.log(chalk.greenBright("Welcome to OraxarO REPL"));
    console.log(chalk.gray("Type `help` for available commands.\n"));

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: chalk.blueBright("oraXaro> "),
    });

    rl.prompt();

    rl.on("line", async (line) => {
        const input = line.trim().toLowerCase();
        if (input === "exit" || input === "quit") {
            rl.close();
            return;
        }

        if (input === "clear") {
            readline.cursorTo(process.stdout, 0, 0);
            readline.clearScreenDown(process.stdout);
        }

        if (input === "help") {
            console.log(chalk.gray(usage))
        }

        rl.prompt();
    })

    rl.on("close", () => {
        console.log(chalk.gray("\nExiting OraxarO REPL"));
        process.exit(0);
    });
}
