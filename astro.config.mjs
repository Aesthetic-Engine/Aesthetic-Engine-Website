// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://aesthetic-engine.github.io',
	base: '/Aesthetic-Engine-Website',
	integrations: [
		starlight({
			title: 'Aesthetic Engine',
			logo: {
				src: './src/assets/logo.png',
				alt: 'Aesthetic Engine',
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/Aesthetic-Engine',
				},
			],
			customCss: ['./src/styles/brutalist.css'],
			expressiveCode: {
				themes: ['github-dark', 'github-light'],
				styleOverrides: {
					borderRadius: '0',
					frames: {
						shadowColor: 'transparent',
					},
				},
			},
			sidebar: [
				{ label: 'Home', link: '/' },
				{
					label: 'Ecosystem',
					items: [
						{ label: 'Overview', slug: 'ecosystem' },
						{ label: 'Aesthetic Engine Builder', slug: 'ecosystem/builder' },
						{ label: 'Godot Runtime Bridge', slug: 'ecosystem/grb' },
					],
				},
				{ label: 'Manifesto', slug: 'manifesto' },
				{
					label: 'Documentation',
					items: [
						{ label: 'Quickstart', slug: 'docs/quickstart' },
						{ label: 'Installation', slug: 'docs/installation' },
						{ label: 'API Reference', slug: 'docs/api-reference' },
					],
				},
				{ label: 'Downloads', slug: 'downloads' },
			],
		}),
	],
});
