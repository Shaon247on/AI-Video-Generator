/** @type {import("drizzle-kit").Config} */

export default {
    schema: "./configs/schema.js",
    dialect: "postgresql",
    dbCredentials: {
        url: 'postgresql://neondb_owner:YfLlIUxWoQ16@ep-black-lake-a5s4kfqp.us-east-2.aws.neon.tech/ai-generator-video?sslmode=require'
    }
}