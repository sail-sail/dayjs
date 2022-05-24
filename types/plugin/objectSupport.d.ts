import { PluginFunc } from '../index.d.ts'

declare const plugin: PluginFunc
export = plugin

declare module '../index.d.ts' {
    interface Dayjs {
        set(argument: object): Dayjs
        add(argument: object): Dayjs
        subtract(argument: object): Dayjs
    }
}
