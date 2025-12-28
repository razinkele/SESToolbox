import { describe, it, expect } from 'vitest';
import {
  formatPercentage,
  formatDate,
  truncateText,
  formatNumber,
} from '../format';

describe('formatPercentage', () => {
  it('formats a number as percentage with default decimals', () => {
    expect(formatPercentage(75.5)).toBe('75.5%');
  });

  it('formats a number with specified decimals', () => {
    expect(formatPercentage(75.556, 2)).toBe('75.56%');
  });

  it('formats zero correctly', () => {
    expect(formatPercentage(0)).toBe('0.0%');
  });

  it('formats 100 correctly', () => {
    expect(formatPercentage(100, 0)).toBe('100%');
  });
});

describe('formatDate', () => {
  it('formats a date string', () => {
    const result = formatDate('2024-01-15');
    expect(result).toBe('January 15, 2024');
  });

  it('formats a Date object', () => {
    const date = new Date('2024-01-15');
    const result = formatDate(date);
    expect(result).toBe('January 15, 2024');
  });
});

describe('truncateText', () => {
  it('returns original text if shorter than max length', () => {
    expect(truncateText('Hello', 10)).toBe('Hello');
  });

  it('truncates text longer than max length', () => {
    expect(truncateText('Hello World', 5)).toBe('Hello...');
  });

  it('returns exact text at max length', () => {
    expect(truncateText('Hello', 5)).toBe('Hello');
  });
});

describe('formatNumber', () => {
  it('formats number with commas', () => {
    expect(formatNumber(1000)).toBe('1,000');
  });

  it('formats large numbers', () => {
    expect(formatNumber(1234567)).toBe('1,234,567');
  });

  it('formats small numbers without commas', () => {
    expect(formatNumber(100)).toBe('100');
  });

  it('formats zero', () => {
    expect(formatNumber(0)).toBe('0');
  });
});
