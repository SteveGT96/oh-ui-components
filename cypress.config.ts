import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		baseUrl: 'http://localhost:5173',
		setupNodeEvents(on) {
			on('task', {
				log(message) {
					console.log(message);
					return null;
				},
			});
		},
		specPattern: 'cypress/e2e/**/*.cy.ts',
		testIsolation: false,
		experimentalRunAllSpecs: true,
		supportFile: false,
	},
});
