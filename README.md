# ms-format

## Install

```sh
npm install ms-format
```

## Usage

```ts
import {parse, format} from 'ms-format'

const ms =
  1000 * 60 * 60 * 24 + // 1 day
  1000 * 60 * 60 + // 1 hour
  1000 * 60 + // 1 min
  1000 + // 1 sec
  1 // 1 ms

// {day: 1, hour: 1, min: 1, sec: 1, ms: 1, DAY: '1', HOUR: '01', MIN: '01', SEC: '01', MS: '001'}
parse(ms)

// {day: 0, hour: 25, min: 1, sec: 1, ms: 1, DAY: '0', HOUR: '25', MIN: '01', SEC: '01', MS: '001'}
parse(ms, {ceil: 'hour'})

// {day: 0, hour: 0, min: 1501, sec: 1, ms: 1, DAY: '0', HOUR: '00', MIN: '1501', SEC: '01', MS: '001'}
parse(ms, {ceil: 'min'})

// {day: 0, hour: 0, min: 0, sec: 90061, ms: 1, DAY: '0', HOUR: '00', MIN: '00', SEC: '90061', MS: '001'}
parse(ms, {ceil: 'sec'})

// {day: 0, hour: 0, min: 0, sec: , ms: 90061001, DAY: '0', HOUR: '00', MIN: '00', SEC: '00', MS: '90061001'}
parse(ms, {ceil: 'ms'})

// 1d, 1h, 1m, 1s, 1ms
format('{day}d, {hour}h, {min}m, {sec}s, {ms}ms', ms)

// 0d, 25h, 1m, 1s, 1ms
format('{day}d, {hour}h, {min}m, {sec}s, {ms}ms', ms, {ceil: 'hour'})

// 0d, 0h, 1501m, 1s, 1ms
format('{day}d, {hour}h, {min}m, {sec}s, {ms}ms', ms, {ceil: 'min'})

// 25:01:01
format({HOUR}:{MIN}:{SEC}, ms, {ceil: 'hour'})
```
