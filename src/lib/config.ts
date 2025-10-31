import type { ConnectionAttributes } from 'oracledb';

export let config: Config;

export interface Config {
    oracleDataPath?: string;
    connection?: ConnectionAttributes;
}

export function setConfig(connection?: ConnectionAttributes, oracleDataPath?: string) {
    config = {
        oracleDataPath,
        connection
    };
}

export function getConfig(): Config {
    return config;
}
