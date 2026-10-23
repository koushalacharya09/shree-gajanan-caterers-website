import assert from "node:assert/strict";
import { leadSchema } from "../src/lib/lead-schema.ts";

const good = leadSchema.safeParse({ phone: "8209679146", city: "Jaipur" });
assert.equal(good.success, true);

const with91 = leadSchema.safeParse({ phone: "+91 82096 79146" });
assert.equal(with91.success, true);
if (with91.success) assert.equal(with91.data.phone, "8209679146");

const bad = leadSchema.safeParse({ phone: "12345" });
assert.equal(bad.success, false);

const honeypot = leadSchema.safeParse({ phone: "9549423454", website: "http://spam.test" });
assert.equal(honeypot.success, true);

console.log("lead schema tests passed");
