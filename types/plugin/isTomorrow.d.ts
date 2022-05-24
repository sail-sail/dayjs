import { PluginFunc } from '../index.d.ts'

declare const plugin: PluginFunc
export = plugin

declare module '../index.d.ts' {
  interface Dayjs {
    isTomorrow(): boolean
  }
}
