import chalk from 'chalk';
import oracledb from 'oracledb';

import { config } from '@lib/globals';

let connection: oracledb.Connection | null = null;

export async function connect() {
    if (connection) throw new Error('already connected to the oracle database');
    if (!config.connection) throw new Error('connection information is not available');

    connection = await oracledb.getConnection(config.connection);
    console.log(chalk.grey(`connected to oracle database:  ${config.connection.connectString}`));
}

export async function close() {
    if (!connection) throw new Error('there is no connection to close');

    connection.close();
    connection = null;
    console.log(
        chalk.grey(
            `oracle database connection closed${config.connection ? ' for ' + config.connection.connectString : ''}`,
        ),
    );
}

export function getConnection(): oracledb.Connection {
    if (!connection) throw new Error('not connected to oracle database');
    return connection;
}
