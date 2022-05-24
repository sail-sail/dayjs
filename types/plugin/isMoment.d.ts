import { PluginFunc } from '../index.d.ts'

declare const plugin: PluginFunc
export = plugin

declare module '../index.d.ts' {

  export function isMoment(input: any): boolean

}
