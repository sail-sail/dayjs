/// <reference path="./types.d.ts" />

declare module 'dayjs/locale/*' {
  namespace locale {
    // deno-lint-ignore no-empty-interface
    interface Locale extends ILocale {}
  }

  const locale: locale.Locale

  export = locale
}
