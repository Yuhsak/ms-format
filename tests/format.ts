import {format, formatClock} from '../src'

describe('format', () => {

  const ms =
    1000 * 60 * 60 * 24 + // 1 day
    1000 * 60 * 60 + // 1 hour
    1000 * 60 + // 1 min
    1000 + // 1 sec
    1 // 1 ms

  test('format', () => {
    expect(format('{day}d, {hour}h, {min}m, {sec}s, {ms}ms', ms)).toBe('1d, 1h, 1m, 1s, 1ms')
  })

  test('formatClock', () => {
    expect(formatClock(ms)).toBe('25:01:01')
  })

})
