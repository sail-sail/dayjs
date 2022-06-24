import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import dayjs from "./mod.ts";

Deno.test("dayjs", () => {
  const str = dayjs("2022-05-24 17:44:22").format("YYYY-MM-DD HH:mm:ss");
  assertEquals(str, "2022-05-24 17:44:22");
});
