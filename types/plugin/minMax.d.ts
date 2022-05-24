import { PluginFunc } from '../index.d.ts'

declare const plugin: PluginFunc
export = plugin

declare module '../index.d.ts' {
  export function max(dayjs: Dayjs[]): Dayjs
  export function max(...dayjs: Dayjs[]): Dayjs
  export function min(dayjs: Dayjs[]): Dayjs
  export function min(...dayjs: Dayjs[]): Dayjs
}
