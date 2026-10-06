# Aesthetic Engine Website

Portfolio for [aestheticengine.games](https://aestheticengine.games), built with Astro. Custom portfolio pages live in src/pages; Starlight retains the original tools documentation with archive notices.

## Develop and build

- npm ci
- npm run dev -- --host 127.0.0.1
- npm run build
- npm run preview -- --host 127.0.0.1

Existing GitHub Pages deployment and public/CNAME are retained. No hosting migration.

## Update content

- src/components/Work.astro: shared games feature.
- src/components/Credits.astro: selected professional credits.
- src/components/Trailer.astro: responsive YouTube embeds; each game page supplies its video ID.
- src/pages/games/: individual projects.
- src/pages/harness.astro: current harness description.
- src/styles/portfolio.css: responsive phosphor design.
- docs/content-sources.md: factual and asset provenance.
- DECISIONS.md and BACKLOG.md: owner direction and open follow-through.

The original résumé PDF is not included in public files. The owner chose to keep it private (#website 15137).

## License

MIT for website source. Refer to the original owners for game imagery and project content.
