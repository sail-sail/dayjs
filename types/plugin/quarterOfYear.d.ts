import { PluginFunc, ConfigType, QUnitType, OpUnitType } from '../index.d.ts'

declare const plugin: PluginFunc
export = plugin

declare module '../index.d.ts' {
  interface Dayjs {
    quarter(): number

    quarter(quarter: number): Dayjs

    add(value: number, unit: QUnitType): Dayjs

    subtract(value: number, unit: QUnitType): Dayjs

    startOf(unit: QUnitType | OpUnitType): Dayjs

    endOf(unit: QUnitType | OpUnitType): Dayjs

    isSame(date: ConfigType, unit?: QUnitType): boolean

    isBefore(date: ConfigType, unit?: QUnitType): boolean

    isAfter(date: ConfigType, unit?: QUnitType): boolean
  }
}
