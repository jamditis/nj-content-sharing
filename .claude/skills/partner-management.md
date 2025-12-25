---
name: partner-management
description: Track and manage partner organizations in the NJ Content Sharing Network, including content providers, content takers, onboarding status, and contact information. Activate when discussing partners, outlets, or network membership.
---

# Partner Management

This skill manages the network of partner organizations participating in the NJ Content Sharing Network.

## When to Activate

- User mentions partner outlets or organizations
- Onboarding new partners
- Updating partner status or contacts
- Managing DML agreements
- Discussing content providers vs content takers

## Partner Categories

### Content Providers
Organizations producing original journalism that share via the network:
- Sign DML agreements
- Provide RSS feeds
- Allow republishing with attribution

### Content Takers
Organizations republishing shared content:
- Embed DML widgets and/or use PluckyWire
- Follow attribution requirements
- Typically hyperlocal outlets

## Current Partners

### Content Providers

| Organization | Primary Contact | RSS Feed | DML Status | Notes |
|--------------|-----------------|----------|------------|-------|
| NJ Spotlight | John Mooney | Active (full-text) | Pending | Key partner, statewide coverage |
| NJ Arts | TBD | TBD | Pending | Arts and culture focus |
| NJ Statehouse News | TBD | TBD | Pending | Government coverage |
| South Jersey Climate News | TBD | TBD | Pending | Environmental focus, regional |

### Content Takers

| Organization | Contact | Integration | Status | Notes |
|--------------|---------|-------------|--------|-------|
| Hudson Post | TBD | TBD | Pending | |
| Mercer Me | TBD | TBD | Pending | |
| Woodbury Warbler | TBD | TBD | Pending | |

## Key Contacts

| Role | Name | Responsibility |
|------|------|----------------|
| Network Coordinator | Andrew Lehren | Managing partnerships and onboarding |
| PluckyWire | Johnny | Story-by-story platform |
| DML | Dave | Widget platform and embed codes |
| CCM | Stefanie | Attribution review, overall coordination |

## Onboarding Checklist

### For Content Providers

1. **Initial outreach**
   - [ ] Introduction meeting scheduled
   - [ ] Network benefits explained
   - [ ] Attribution requirements discussed

2. **Technical setup**
   - [ ] RSS feed URL obtained
   - [ ] Feed format validated (full-text preferred)
   - [ ] DML agreement signed
   - [ ] Widget created by Dave

3. **Launch**
   - [ ] Widget tested on staging
   - [ ] Partner approved final widget appearance
   - [ ] Added to PluckyWire (if applicable)
   - [ ] Listed on portal

### For Content Takers

1. **Initial outreach**
   - [ ] Introduction meeting scheduled
   - [ ] Republishing guidelines shared
   - [ ] Attribution requirements agreed

2. **Technical setup**
   - [ ] PluckyWire access granted
   - [ ] DML widget embed code(s) provided
   - [ ] Integration tested on their site

3. **Launch**
   - [ ] First republished story verified
   - [ ] Attribution correct
   - [ ] Ongoing access confirmed

## Partner Data Structure

For tracking in code or configuration:

```javascript
// portal/src/data/partners.js
export const partners = {
  providers: [
    {
      id: 'nj-spotlight',
      name: 'NJ Spotlight',
      fullName: 'NJ Spotlight News',
      type: 'provider',
      contact: {
        name: 'John Mooney',
        email: null,
        role: 'Editor'
      },
      feeds: {
        rss: 'https://www.njspotlightnews.org/feed/rss_full/',
        fullText: true
      },
      status: {
        dmlAgreement: 'pending',
        widgetActive: false,
        pluckywire: false
      },
      coverage: ['statewide', 'policy', 'government', 'health', 'education'],
      joinedDate: null
    },
    // ... other providers
  ],
  takers: [
    {
      id: 'hudson-post',
      name: 'Hudson Post',
      type: 'taker',
      contact: null,
      status: {
        pluckywireAccess: false,
        widgetsEmbed: []
      },
      region: 'Hudson County',
      joinedDate: null
    },
    // ... other takers
  ]
};
```

## Status Definitions

**DML Agreement Status:**
- `pending` - Not yet signed
- `sent` - Agreement sent, awaiting signature
- `signed` - Agreement executed
- `active` - Widget live and operational

**PluckyWire Status:**
- `pending` - Not yet set up
- `invited` - Invitation sent
- `active` - Actively using platform

## Guidelines

1. **Centralize contact info** - Update partner records, not scattered notes.

2. **Track all communications** - Log significant interactions with dates.

3. **Verify before publishing** - Confirm partner approval before listing on portal.

4. **Respect relationships** - Andrew Lehren manages partnership outreach.

5. **Update status promptly** - Keep records current as partners progress.

## Adding a New Partner

1. Confirm partnership with Andrew Lehren
2. Determine provider vs taker role
3. Add to partners data structure
4. Begin onboarding checklist
5. Update CLAUDE.md if significant

## Related Skills

- attribution-management: For per-partner attribution preferences
- widget-management: For provider widget setup
- rss-content-integration: For feed validation
