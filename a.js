import { join } from "node:path";

const a = import.meta.url;
const b = "../a.js";
const c = join(a, b);
console.log(`join(${a}, ${b}) = ${c}`);

console.log("~~~~~");
