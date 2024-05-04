import { defineWorkersConfig } from "@cloudflare/vitest-pool-workers/config";

export default defineWorkersConfig({
	test: {
		coverage: {
			provider: 'istanbul',
			reporter: ["istanbul-reports/lib/lcov/index.js"]
		},
		poolOptions: {
			workers: {
				wrangler: { configPath: "./wrangler.toml" },
			},
		},
	},
});
