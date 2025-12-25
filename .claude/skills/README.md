# NJ Content Sharing Network - Claude Skills

This directory contains Claude skills designed to improve workflow efficiency for the NJ Content Sharing Network portal development and management.

## Available Skills

| Skill | Description | Use When |
|-------|-------------|----------|
| [rss-content-integration](./rss-content-integration.md) | Process RSS feeds from partner outlets | Working with feeds, content ingestion |
| [widget-management](./widget-management.md) | Manage DML widget embed codes | Adding/updating content widgets |
| [deployment-workflow](./deployment-workflow.md) | Production builds and FTP deployment | Deploying to production |
| [attribution-management](./attribution-management.md) | Manage republishing attribution text | Setting up PluckyWire, attribution |
| [partner-management](./partner-management.md) | Track partner organizations | Onboarding, partner status |
| [portal-development](./portal-development.md) | React/Vite development patterns | Building features, fixing bugs |
| [content-configuration](./content-configuration.md) | Externalize content to JSON | Updating portal content |
| [editorial-meetings](./editorial-meetings.md) | Coordinate editorial meetings | Planning meetings, story sharing |

## Skill Structure

Each skill follows the Agent Skills for Context Engineering format:

```markdown
---
name: skill-name
description: Concise description for discovery and activation
---

# Skill Title

## When to Activate
Triggers and signals for skill activation

## [Domain-Specific Sections]
Core guidance, patterns, and examples

## Guidelines
Actionable rules and best practices

## Related Skills
Cross-references to complementary skills
```

## Design Principles

These skills were designed following the **4 Core Truths**:

1. **Expertise Transfer, Not Instructions** - Skills make Claude think like a local news content coordinator, not just follow steps
2. **Flow, Not Friction** - Produce deployable code and configurations, not intermediate documents
3. **Voice Matches Domain** - Language reflects journalism and media operations terminology
4. **Focused Beats Comprehensive** - Each skill addresses one primary domain; every section earns its place

## Usage

Skills are automatically discovered by Claude Code. They activate when:
- User mentions relevant keywords (RSS, widgets, deployment, etc.)
- Task matches skill's domain
- Related files are being edited

## Contributing

When adding or updating skills:

1. Keep main content under 500 lines
2. Use YAML frontmatter with name and description
3. Write in third person
4. Include concrete examples with code
5. Reference related skills for cross-domain work
6. Test with real tasks before committing

## Skill Coverage Map

```
Portal Development Flow:

  [content-configuration] → [portal-development] → [deployment-workflow]
         ↓                         ↓
  [partner-management]      [widget-management]
         ↓                         ↓
  [attribution-management] ← [rss-content-integration]
         ↓
  [editorial-meetings]
```
