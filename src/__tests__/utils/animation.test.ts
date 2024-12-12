import { typing, typingLines } from '../../utils/animation.js';

describe('Animation Utils', () => {
  let mockStdout: jest.SpyInstance;

  beforeEach(() => {
    mockStdout = jest.spyOn(process.stdout, 'write').mockImplementation(() => true);
  });

  afterEach(() => {
    mockStdout.mockRestore();
  });

  describe('typing', () => {
    it('should write text to stdout character by character', async () => {
      const text = 'Hello';
      await typing(text, { skipAnimation: true });
      expect(mockStdout).toHaveBeenCalledWith(text);
    });

    it('should handle empty text', async () => {
      await typing('', { skipAnimation: true });
      expect(mockStdout).toHaveBeenCalledWith('');
    });

    it('should handle newlines', async () => {
      const text = 'Hello\nWorld';
      await typing(text, { skipAnimation: true });
      expect(mockStdout).toHaveBeenCalledWith(text);
    });
  });

  describe('typingLines', () => {
    it('should write multiple lines to stdout', async () => {
      const lines = ['Line 1', 'Line 2'];
      await typingLines(lines, { skipAnimation: true });
      
      expect(mockStdout).toHaveBeenCalledWith('Line 1\n');
      expect(mockStdout).toHaveBeenCalledWith('Line 2\n');
    });

    it('should handle empty array', async () => {
      await typingLines([], { skipAnimation: true });
      expect(mockStdout).not.toHaveBeenCalled();
    });

    it('should handle array with empty strings', async () => {
      await typingLines(['', ''], { skipAnimation: true });
      expect(mockStdout).toHaveBeenCalledWith('\n');
      expect(mockStdout).toHaveBeenCalledWith('\n');
    });
  });
});
