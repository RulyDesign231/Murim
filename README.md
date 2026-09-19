# Murim · A Life Unwritten

A browser-local, deterministic life simulation vertical slice built with React, TypeScript and the Next.js-compatible Vinext runtime.

## Run

- `npm ci`
- `npm run dev`
- `npm run build`
- `node node_modules/typescript/bin/tsc --noEmit`
- `node scripts/test-game.mjs`

Open `http://localhost:5173`. For isolated browser QA, append `?playtest=1`; that uses a separate save key.

## Architecture

- `game/types.ts`: shared state and action types.
- `game/engine.ts`: deterministic reducer, simulation clock, combat, advancement, discovery and UI projection.
- `game/save.ts`: versioned save validation and import boundary.
- `data/world.ts`: factions, arts, locations, backgrounds, talents, and 52 linked event entries.
- `app/page.tsx`: working interface. Reads the knowledge-limited `view()` projection.
- `tests/engine.test.ts`: replay, content, secrecy, time, faction, inheritance, combat, tournament, saves, creation and legacy checks.

All random decisions use persisted PRNG state. Reloading does not reroll encounters. Actions are transactional: the reducer clones state, validates, applies consequences, advances time, and returns the new state. Failed actions preserve the previous state.

Knowledge records store only learned fields, confidence, source, date and notes. UI code never imports canonical world records. This is a single-player local simulation, not an anti-cheat boundary: a user inspecting their own client bundle or exported save can inspect the underlying world.

## Playable scope

Seven locations in one region; Cult, Alliance, Mount Hua and Tang routes; 24 initial NPCs; 24 martial arts; 52 event entries comprising 26 encounters and their aftermaths; tactical combat; eight cultivation realms; faction service and ranks; five Cult assignments; the Cave ordeal; a three-round tournament; hidden inheritance; professions and forging; relationships and mentorship; original art creation, teaching, aging, death and successor play.

This is a first playable slice, not the entire long-term design. Regional war is simulated through tension, injuries and service. NPC simulation covers movement, training, injuries, allegiance changes, aging, births and deaths. Full territorial strategy, player marriage/children, independent faction founding, additional Orthodox sects, detailed weapon-specific technique selection, and the full martial-art composition editor remain expansion work. Event choices currently share a small consequence vocabulary. No server accounts or cloud saves are implemented; export saves to move between devices or site origins.

The canonical faction names come from the supplied brief. The NPCs, arts, event prose and personal histories are original game content, not claims of canonical series lore.
