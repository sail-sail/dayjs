import { PluginFunc, ConfigType, OpUnitType } from '../index.d.ts'

declare const plugin: PluginFunc
export = plugin

declare module '../index.d.ts' {
  interface Dayjs {
    isSameOrAfter(date: ConfigType, unit?: OpUnitType): boolean
  }
}
