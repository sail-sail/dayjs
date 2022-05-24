import { PluginFunc } from '../index.d.ts'

declare const plugin: PluginFunc
export = plugin

interface DayjsObject {
  years: number
  months: number
  date: number
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
}

declare module '../index.d.ts' {
  interface Dayjs {
    toObject(): DayjsObject
  }
}
