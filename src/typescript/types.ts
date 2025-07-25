export interface Config {
    debug: boolean;
    version: string;
    port: number;
}

export interface ApiResponse<T> {
    success: boolean;
    data: T;
    timestamp: string;
}

export function formatResponse<T>(data: T): ApiResponse<T> {
    return {
        success: true,
        data,
        timestamp: new Date().toISOString()
    };
}