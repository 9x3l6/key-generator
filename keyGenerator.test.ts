import {describe, expect, test, it} from '@jest/globals';
import { KeyGenerator } from './keyGenerator';

describe('KeyGenerator', () => {
  const keyGenerator = new KeyGenerator([4, 5, 7, 4]);

  it('generates a key of the correct length and format', () => {
    const key = keyGenerator.generateKey();
    expect(key).toMatch(/^[A-Z0-9]{4}-[A-Z0-9]{5}-[A-Z0-9]{7}-[A-Z0-9]{4}$/);
  });

  it('validates a correct key', () => {
    const key = keyGenerator.generateKey();
    expect(keyGenerator.validateKey(key)).toBe(true);
  });

  it('rejects an incorrect key', () => {
    expect(keyGenerator.validateKey('ABC-123')).toBe(false);
  });
});
