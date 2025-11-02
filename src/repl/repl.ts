import readline from 'readline';
import chalk from 'chalk';

import { handleCommand } from './commands';

export function startRepl() {
    console.log(chalk.greenBright('Welcome to OraxarO REPL'));
    console.log(chalk.gray('Type `help` for available commands.\n'));

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: chalk.blueBright('oraXaro> '),
    });

    rl.prompt();

    rl.on('line', async (line) => {
        const input = line.trim().toLowerCase();
        if (input === 'exit' || input === 'quit') {
            rl.close();
            return;
        }

        if (input === 'clear') {
            readline.cursorTo(process.stdout, 0, 0);
            readline.clearScreenDown(process.stdout);
            rl.prompt();
            return;
        }

        try {
            const output = await handleCommand(input);
            if (output) console.log(output);
        } catch (err) {
            console.error(chalk.red('Error:'), (err as Error).message);
        }

        rl.prompt();
    });

    rl.on('close', () => {
        console.log(chalk.gray('\nExiting OraxarO REPL'));
        process.exit(0);
    });
}
