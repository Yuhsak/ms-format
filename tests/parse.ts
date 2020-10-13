import {parse} from '../src'

describe('parse', () => {

  const ms =
    1000 * 60 * 60 * 24 + // 1 day
    1000 * 60 * 60 + // 1 hour
    1000 * 60 + // 1 min
    1000 + // 1 sec
    1 // 1 ms

  test('parse', () => {
    expect(parse(ms)).toStrictEqual({
      day: 1,
      hour: 1,
      min: 1,
      sec: 1,
      ms: 1
    })
  })

  test('ceil: day', () => {
    expect(parse(ms, {ceil: 'day'})).toStrictEqual({
      day: 1,
      hour: 1,
      min: 1,
      sec: 1,
      ms: 1
    })
  })

  test('ceil: hour', () => {
    expect(parse(ms, {ceil: 'hour'})).toStrictEqual({
      day: 0,
      hour: 25,
      min: 1,
      sec: 1,
      ms: 1
    })
  })

  test('ceil: min', () => {
    expect(parse(ms, {ceil: 'min'})).toStrictEqual({
      day: 0,
      hour: 0,
      min: 1501,
      sec: 1,
      ms: 1
    })
  })

  test('ceil: sec', () => {
    expect(parse(ms, {ceil: 'sec'})).toStrictEqual({
      day: 0,
      hour: 0,
      min: 0,
      sec: 90061,
      ms: 1
    })
  })

  test('ceil: ms', () => {
    expect(parse(ms, {ceil: 'ms'})).toStrictEqual({
      day: 0,
      hour: 0,
      min: 0,
      sec: 0,
      ms
    })
  })

})
