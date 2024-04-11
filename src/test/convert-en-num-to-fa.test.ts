import { convertEnNumToFa } from '@/components/common/functions/convert-en-num-to-fa';
import '@testing-library/jest-dom'

describe('convertEnNumToFa', () => {
    it('should convert English numbers to Persian numbers correctly', () => {
      expect(convertEnNumToFa('1234567890')).toBe('۱۲۳۴۵۶۷۸۹۰');
    });
  
    it('should handle non-numeric characters gracefully', () => {
      expect(convertEnNumToFa('abc123')).toBe('abc۱۲۳');
    });
  
    it('should handle mixed input gracefully', () => {
      expect(convertEnNumToFa('1a2b3c4d5e6f7g8h9i0')).toBe('۱a۲b۳c۴d۵e۶f۷g۸h۹i۰');
    });
  
    it('should return an empty string if input is empty', () => {
      expect(convertEnNumToFa('')).toBe('');
    });
  });