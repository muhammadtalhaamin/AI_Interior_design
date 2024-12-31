import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:dzbmWE9Ji5QM@ep-lucky-wildflower-a57edapl.us-east-2.aws.neon.tech/ai-room-redesign?sslmode=require',
  },
});
