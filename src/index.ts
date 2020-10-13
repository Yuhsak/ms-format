import {format as formatTxt} from 'formatify'

export type ParseOption = {
  ceil?: 'day' | 'hour' | 'min' | 'sec' | 'ms'
}

export const parse = (ms: number, {ceil='day'}: ParseOption={}) => {

  const toDay = ceil === 'day'
  const toHour = toDay || ceil === 'hour'
  const toMin = toHour || ceil === 'min'
  const toSec = toMin || ceil === 'sec'

  const sec = Math.floor(ms / 1000)
  const min = Math.floor(sec / 60)
  const hour = Math.floor(min / 60)
  const day = Math.floor(hour / 24)

  const rMs = toSec ? ms - sec * 1000 : ms
  const rSec = toMin ? sec - min * 60 : toSec ? sec : 0
  const rMin = toHour ? min - hour * 60 : toMin ? min : 0
  const rHour = toDay ? hour - day * 24 : toHour ? hour : 0
  const rDay = toDay ? day : 0

  return {
    day: rDay,
    hour: rHour,
    min: rMin,
    sec: rSec,
    ms: rMs,
    DAY: rDay.toString(),
    HOUR: rHour.toString().padStart(2, '0'),
    MIN: rMin.toString().padStart(2, '0'),
    SEC: rSec.toString().padStart(2, '0'),
    MS: rMs.toString().padStart(3, '0')
  }

}

export const format = (text: string, ms: number, option: ParseOption={}) => {
  return formatTxt(text, parse(ms, option))
}

export const formatClock = (ms: number) => {
  return format('{HOUR}:{MIN}:{SEC}', ms, {ceil: 'hour'})
}
