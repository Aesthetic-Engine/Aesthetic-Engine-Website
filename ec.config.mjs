import { defineEcConfig } from 'astro-expressive-code';
import { pluginFrames } from '@expressive-code/plugin-frames';
import { pluginTextMarkers } from '@expressive-code/plugin-text-markers';

export default defineEcConfig({
	plugins: [pluginFrames(), pluginTextMarkers()],
	themes: ['github-dark', 'github-light'],
	styleOverrides: {
		borderRadius: '0',
		borderColor: '#2a2a2a',
		frames: {
			shadowColor: 'transparent',
			frameBoxShadowCssValue: 'none',
		},
		codeFontFamily: "'IBM Plex Mono', ui-monospace, monospace",
	},
});
