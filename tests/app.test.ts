import { formatResponse } from '../src/typescript/types';

describe('TypeScript Utils', () => {
    test('formatResponse should include required fields', () => {
        const response = formatResponse({ test: 'data' });
        expect(response.success).toBe(true);
        expect(response.timestamp).toBeDefined();
        expect(response.data).toEqual({ test: 'data' });
    });
});