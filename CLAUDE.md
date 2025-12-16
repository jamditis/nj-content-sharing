# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

The NJ Content Sharing Network is a Center for Cooperative Media initiative to enable content sharing among New Jersey local news organizations. The project uses two primary platforms:

- **Distributed Media Lab (DML)**: Automated content widgets that provide a continuous stream of stories from partner outlets
- **PluckyWire**: Story-by-story sharing platform where news organizations can browse and republish individual articles

## Current state

A React/Vite portal has been built in the `/portal` directory.

### Portal status (as of 2025-12-16)

**Completed:**
- React/Vite app scaffolded and running
- CCM branding applied (black #000000, red #CA3553, Montserrat headings, Arial body)
- All main sections built:
  - DML widgets section (4 widget placeholders for NJ Spotlight, NJ Arts, NJ Statehouse, South Jersey Climate)
  - PluckyWire section (how it works, participating outlets, access buttons)
  - Daily News Roundup section (links to Mailchimp signup)
  - Editorial meetings section (format description, poll placeholder)
  - Attribution section (draft boilerplate text ready for Stefanie's review)

**Next steps:**
- Deploy production build to centerforcooperativemedia.org/programs/contentnetwork/ via FTP
- Get actual DML widget embed codes from Dave and replace placeholders
- Add scheduling poll embed for editorial meetings section
- Send boilerplate attribution text to Stefanie for review

**Production build:** `cd portal && npm run build` (outputs to `dist/` folder)
**Dev server:** `cd portal && npm run dev` (runs on http://localhost:5173)

### Commands

```bash
cd portal
npm install
npm run dev
```

## Key stakeholders and contacts

- **Andrew Lehren**: Managing content partnerships and onboarding
- **Johnny (PluckyWire)**: Platform provider for story-by-story sharing
- **Dave (DML)**: Platform provider for automated widgets
- **John Mooney (NJ Spotlight)**: Key content partner

## Technical blockers

The primary technical blocker is the lack of full-text RSS feeds from partner organizations (especially NJ Spotlight). Without full-text feeds, stories must be manually uploaded to PluckyWire, risking missed content. Solving RSS feed issues is the highest priority technical task.

## Partner organizations

Content providers (signing DML agreements):
- NJ Spotlight
- NJ Arts
- NJ Statehouse News
- South Jersey Climate News

Content takers (will embed widgets or use PluckyWire):
- Hudson Post
- Mercer Me
- Woodbury Warbler
- Other hyperlocal outlets

## Planned features

1. Public-facing webpage for the NJ Content Sharing Network
2. Widget showcase for DML embeds
3. PluckyWire integration and onboarding
4. Open editorial meetings (pilot launching late January)
5. Story recipes and data sharing

## Attribution requirements

All republished content requires boilerplate attribution (modeled on Granite State News Collaborative language). PluckyWire can set a default boilerplate that appends to copied stories.
