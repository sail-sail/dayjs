import { PluginFunc } from '../index.d.ts'

declare interface PluginOptions {
    parseTwoDigitYear?: (yearString: string) => number
}

declare const plugin: PluginFunc<PluginOptions>
export = plugin
