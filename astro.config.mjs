import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightTypeDoc, { typeDocSidebarGroup } from 'starlight-typedoc';
import starlightVersions from 'starlight-versions';

// https://astro.build/config
export default defineConfig({
	site: 'https://guide.shoukaku.shipgirl.moe',
	integrations: [
		starlight({
			plugins: [
				// Generate the documentation.
				starlightTypeDoc({
					entryPoints: ['./shoukaku/index.ts'],
					tsconfig: './shoukaku/tsconfig.json',
					sidebar: {
						collapsed: false,
						label: "API Reference",
					},
					typeDoc: {
						exclude: '**/node_modules/@types/node/**',
						includeVersion: true,
						useHTMLAnchors: true,
						useCodeBlocks: true,
						expandParameters: true,
						expandObjects: true,
						parametersFormat: 'table',
						enumMembersFormat: 'table',
						typeDeclarationFormat: 'table',
						indexFormat: 'table',
					}
				}),
				starlightVersions({
					versions: [
						{ slug: '4.0.1' },
						{ slug: '3.4.2' },
					],
				}),
			],
			title: 'Shoukaku Docs',
			social: {
				github: 'https://github.com/shipgirlproject/shoukaku',
				discord: 'https://discord.gg/FVqbtGu',
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				typeDocSidebarGroup,
			],
			editLink: {
				baseUrl: "https://github.com/shipgirlproject/shoukaku-docs/edit/main/"
			}
		}),
	],
});
