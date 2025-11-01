import chalk from 'chalk';
import oracledb from 'oracledb';

import { config } from '@lib/config';

let connection: oracledb.Connection;

export async function connect() {
    if (!config.connection) throw new Error('connection information is not available');

    console.log(
        chalk.grey(`connecting to the oracle database: ${config.connection.connectString}`),
    );
    connection = await oracledb.getConnection(config.connection);
    console.log(chalk.greenBright(`Successfully connected to Oracle Database`));
}

export async function close() {
    if (!connection) throw new Error('there is no connection to close');

    connection.close();
    console.log(
        chalk.grey(
            `oracle database connection closed${config.connection ? ' for ' + config.connection.connectString : ''}`,
        ),
    );
}

export function getConnection() {
    return connection;
}
