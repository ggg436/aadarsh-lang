import "dotenv/config";
// import type { Config } from "drizzle-kit"; // older version
import { defineConfig } from "drizzle-kit";

// export default {
//   schema: "./db/schema.ts",
//   out: "./drizzle",
//   dialect: "postgresql",
//   driver: "pglite",
//   dbCredentials: {
//     url: process.env.DATABASE_URL!,
//   },
// } satisfies Config;

// newer version

export default defineConfig({
  dialect: "postgresql",
  schema: "./db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
