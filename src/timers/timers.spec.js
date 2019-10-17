
import {
  timerGame,
  countdown,
} from './timers';

jest.useFakeTimers();

beforeEach(() => {
  jest.clearAllMocks();
});

describe('timers', () => {
  describe('timerGame()', () => {
    it('should call setTimeout', () => {
      timerGame();
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    });

    it('should invoke the callback', () => {
      const cb = jest.fn();
      timerGame(cb);
      expect(setTimeout).toHaveBeenCalledTimes(1);
      jest.runAllTimers();
      expect(cb).toHaveBeenCalledTimes(1);
    });

    it('invokes the callback after one second', () => {
      const cb = jest.fn();
      timerGame(cb);

      expect(cb).not.toBeCalled();

      jest.runAllTimers();

      expect(cb).toHaveBeenCalledTimes(1);
    });
  });

  describe('countdown()', () => {
    it('should invoke the callback thrice', () => {
      const cb = jest.fn();
      countdown(cb);
      expect(cb).toHaveBeenCalledTimes(0);
      jest.advanceTimersByTime(500);
      expect(cb).toHaveBeenCalledTimes(1);
      jest.advanceTimersByTime(1000);
      expect(cb).toHaveBeenCalledTimes(3);
      expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 500);
    });
  });
});
