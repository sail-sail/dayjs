import { PluginFunc, ConfigType } from '../index.d.ts'

declare const plugin: PluginFunc
export = plugin

declare module '../index.d.ts' {
  interface Dayjs {
    tz(timezone?: string, keepLocalTime?: boolean): Dayjs
    offsetName(type?: 'short' | 'long'): string | undefined
  }

  interface DayjsTimezone {
    (date: ConfigType, timezone?: string): Dayjs
    (date: ConfigType, format: string, timezone?: string): Dayjs
    guess(): string
    setDefault(timezone?: string): void
  }

  const tz: DayjsTimezone
}
