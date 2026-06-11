# AGENTS.md - Kill Team Scoreboard Project

## Project Overview

This project is a web-based Kill Team scoreboard designed for live tabletop play.

The main goal is to help players quickly track:

- Turning Point / TP
- Initiative
- Player scores
- Crit Op / Tac Op / Kill Op / Primary VP
- CP
- Ready / Done status
- Operative count
- Notes
- Game flow during live play

This app is primarily for personal and tournament practice use. It should be fast, readable, mobile-friendly, and reliable during an actual Kill Team game.

## Product Priorities

When making decisions, prioritize in this order:

1. Live game usability
   - The app must be easy to use during a real game.
   - Common actions should take as few taps as possible.
   - Important information must be visible at a glance.
2. Mobile and iPad web experience
   - The app should work well on phones and tablets.
   - Avoid layouts that only look good on desktop.
   - Cards, accordions, large buttons, and clear spacing are preferred.
3. Score accuracy
   - VP totals must always be correct.
   - Sub-score categories must add up clearly.
   - Avoid hidden or confusing score state.
4. Simple, maintainable code
   - Prefer small, clear changes.
   - Do not rewrite the whole app unless specifically requested.
   - Keep state logic easy to understand.
5. Visual clarity
   - The UI should feel like a practical gaming tool, not a generic form.
   - Important actions should visually stand out.

## Core UX Direction

The scoreboard should support two main usage modes.

### Live Mode

Live Mode is for use during the game.

It should show only the most important information:

- Player A / Player B cards
- Current TP
- Initiative indicator
- Current total VP
- CP
- Clock / active player
- Pass Turn
- Quick score buttons
- Ready / Done state
- Operative count if space allows

Live Mode should avoid showing too many detailed fields at once.

### Detail Mode

Detail Mode is for checking or editing the full score breakdown.

It should show:

- TP1 / TP2 / TP3 / TP4 scoring
- Crit Op points
- Tac Op points
- Kill Op points
- Primary points
- Notes
- Operative count
- Any advanced breakdowns

On mobile, each TP should preferably be shown as an accordion.

Example:

```text
TP2
  Crit + / -
  Tac + / -
  Kill + / -
  Primary + / -
```

## Working Style

- Understand the existing project before changing code.
- Make small and safe changes.
- Do not rewrite large parts of the project unless clearly asked.
- Preserve existing features unless clearly asked to change them.
- Prefer simple, readable code.
- Avoid over-engineering.
- Follow the existing coding style of the project.
- Reuse existing components, state, helper functions, and CSS patterns where possible.

## Before Editing

Before changing files, Codex should:

1. Read the relevant files first.
2. Check the project structure.
3. Check existing patterns before adding new patterns.
4. Look for useful scripts in package.json or other config files.
5. Make the smallest reasonable change that solves the request.

## UI and Mobile Rules

When working on frontend or web app UI:

- Mobile layout is important.
- Avoid horizontal scrolling.
- Use clear buttons and readable text.
- Make important information visually obvious.
- Keep screens simple and practical.
- Make common actions easy to access.
- Do not make the UI crowded.
- Keep the dark grimdark Kill Team visual style.
- Keep Player A and Player B visually distinct.
- Keep gold styling for primary actions.

## Data and Calculation Rules

For scores and match tracking:

- Keep calculations accurate.
- Do not change VP calculation logic casually.
- Do not rename or remove saved data fields unless necessary.
- Explain any data structure change clearly.
- Preserve existing saved data.
- Preserve CSV export and battle report output unless specifically asked to change them.

## Testing

After making changes, Codex should check the work using available commands.

Look for commands such as:

- npm run build
- npm run lint
- npm run typecheck
- npm test
- pnpm build
- pnpm lint
- yarn build
- python -m pytest

For this static app, also use available JavaScript syntax checks when no build system exists.

If a command is not available or cannot run, explain why.

## Git Safety

- Do not commit unless asked.
- Do not push unless asked.
- Do not delete files unless needed.
- Do not run destructive git commands unless clearly asked.

Avoid risky commands such as:

- git reset --hard
- git clean -fd
- git push --force
- rm -rf

## Security

- Never expose API keys, tokens, passwords, or secrets.
- Do not hardcode private credentials.
- Use environment variables for secrets.
- Do not commit .env files unless they are safe example files.

## Response After Work

After making changes, explain:

1. What changed.
2. Which files changed.
3. Why the change was made.
4. How to test it.
5. Any risk or limitation.

Keep the explanation short and practical.

## Default Priority

When making decisions, prioritize:

1. Correctness
2. Not breaking existing features
3. Simplicity
4. Readability
5. Mobile usability
6. Performance
7. Visual polish
