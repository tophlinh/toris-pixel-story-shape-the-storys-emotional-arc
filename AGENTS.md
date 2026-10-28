# AGENTS.md

## Project summary and core loop
Go through six cozy pixel slides: two "About Me" slides, then four slides on how AI changed corporate work from 2024 to 2026, ending with the skills that matter now.

## How to play / controls
Click or press → / Space to move forward and ← to go back. If a line is still typing, the first press finishes it. Press M to mute.
Controls: Click / → / Space / Enter: next · ←: back · M: mute

## Important files
- `/index.html` — entry point: importmap, canvas/DOM shell, script bootstrap
- `/rosebud-game-defaults.css` — project file
- `/rosebud-game-defaults.js` — game module
- `/art_direction.md` — visual direction used for generated art
- `/sound_direction.md` — audio direction used for generated sound
- `/main.js` — game bootstrap and main loop

## Assets and audio
Images: `assets/meadow-bg.webp`, `assets/tori-sprite.webp`
Audio: `assets/audio/cozy-loop.mp3`, `assets/audio/page-blip.mp3`
Sound direction: - Gentle lo-fi acoustic/chiptune loop, calm and cozy - SFX: soft page-turn blip on slide advance
Playback note: reference media as `assets/...`; browsers start audio only after the first user gesture.

## Notes for future edits
Slide content lives in the SLIDES array in main.js. The stage is 1920x1080 and scaled with CSS.

## Final validation status
Static: 0 blocking, 0 advisory; overall clean. Runtime behavior was not checked during generation.
Finished via the `finish` tool.
