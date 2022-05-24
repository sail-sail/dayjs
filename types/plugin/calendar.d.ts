import { PluginFunc, ConfigType } from '../index.d.ts'

declare const plugin: PluginFunc
export = plugin

declare module '../index.d.ts' {
  interface Dayjs {
    calendar(referenceTime?: ConfigType, formats?: object): string
  }
}
