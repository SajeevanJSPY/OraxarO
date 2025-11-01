import type { ConnectionAttributes } from 'oracledb';

export interface ConfigOptions {
    oracleDataPath?: string;
    connection?: ConnectionAttributes;
}

export class ConfigManager {
    private static _instance: ConfigManager;
    private _oracleDataPath?: string;
    private _connection?: ConnectionAttributes;

    private constructor(initial?: ConfigOptions) {
        if (initial) {
            this._oracleDataPath = initial.oracleDataPath;
            this._connection = initial.connection;
        }
    }

    public static init(initial?: ConfigOptions): ConfigManager {
        if (!ConfigManager._instance) {
            ConfigManager._instance = new ConfigManager(initial);
        }
        return ConfigManager._instance;
    }

    public static get instance(): ConfigManager {
        if (!ConfigManager._instance) {
            throw new Error('ConfigManager not initialized. call ConfigManager.init() first.');
        }

        return ConfigManager._instance;
    }

    get oracleDataPath(): string | undefined {
        return this._oracleDataPath;
    }

    set oracleDataPath(path: string | undefined) {
        this._oracleDataPath = path;
    }

    get connection(): ConnectionAttributes | undefined {
        return this._connection;
    }

    set connection(conn: ConnectionAttributes | undefined) {
        this._connection = conn;
    }

    public toJSON(): ConfigOptions {
        return {
            oracleDataPath: this._oracleDataPath,
            connection: this._connection,
        };
    }
}
