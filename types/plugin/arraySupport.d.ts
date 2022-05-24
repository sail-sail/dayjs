import { PluginFunc } from '../index.d.ts'

declare module '../index.d.ts' {
  interface ConfigTypeMap {
    arraySupport: [number?, number?, number?, number?, number?, number?, number?]
  }
}

declare const plugin: PluginFunc
export = plugin
