---
name: editorial-meetings
description: Coordinate open editorial meetings for the NJ Content Sharing Network, including scheduling, story recipes, and cross-outlet collaboration. Activate when planning meetings, sharing story ideas, or coordinating between outlets.
---

# Editorial Meetings

This skill supports the open editorial meetings feature of the NJ Content Sharing Network, launching in late January.

## When to Activate

- User mentions editorial meetings or story coordination
- Planning collaborative coverage
- Sharing story recipes or ideas
- Setting up meeting scheduling
- Discussing cross-outlet collaboration

## Meeting Format

### Open Editorial Meetings

Scheduled regular sessions where network partners:
- Share upcoming story ideas
- Coordinate coverage to avoid duplication
- Discuss data and source sharing
- Plan collaborative investigations
- Exchange "story recipes" (reporting approaches)

### Pilot Launch

- **Timeline**: Late January 2025
- **Format**: Virtual meetings (platform TBD)
- **Frequency**: TBD (weekly or bi-weekly likely)
- **Participants**: Editors/reporters from partner outlets

## Portal Integration

The editorial meetings section in the portal includes:

**Current Features:**
- Description of meeting format
- Feature list (story recipes, data sharing, coverage updates)
- Topic tags for coverage areas
- "Coming soon" status

**Pending Features:**
- [ ] Scheduling poll embed (need to choose platform)
- [ ] Meeting archive/notes access
- [ ] Story recipe submission form
- [ ] Shared calendar integration

## Scheduling Poll Options

Consider these platforms for the scheduling poll:

| Platform | Pros | Cons |
|----------|------|------|
| When2meet | Free, simple, no login | Basic UI, no recurring |
| Doodle | Professional, recurring | Free tier limited |
| Calendly | Clean UX, integrations | Requires account |
| Google Forms | Flexible, free | Manual processing |
| LettuceMeet | Open source, clean | Less known |

**Implementation:**
Most polling tools provide embed codes or shareable links. Add to portal via:
- iFrame embed in the editorial meetings section
- External link button (simpler, always works)

## Story Recipe Concept

A "story recipe" is a shareable template for investigative or enterprise reporting:

```markdown
## Story Recipe: [Title]

**Topic Area**: Education / Health / Government / etc.
**Difficulty**: Beginner / Intermediate / Advanced
**Time Required**: Days / Weeks / Months

### The Story
Brief description of the story angle and why it matters.

### Data Sources
- Source 1: Description and how to access
- Source 2: Description and how to access

### Key Contacts
- Role/type of source to seek
- Organizations to contact

### Methodology
Step-by-step approach to reporting this story.

### Localization Tips
How to adapt for different regions/outlets.

### Example Coverage
Links to published examples of this type of story.
```

## Meeting Agenda Template

```markdown
# NJ Content Sharing Network - Editorial Meeting
**Date**: [Date]
**Attendees**: [List]

## 1. Story Pitches (5 min each)
- [Outlet]: [Story idea + status]
- [Outlet]: [Story idea + status]

## 2. Coordination Needs
- Upcoming events requiring coverage
- Potential duplicated efforts

## 3. Resource Sharing
- Available data sets
- Source contacts to share
- Story recipes

## 4. Open Discussion

## 5. Next Meeting
```

## Portal Section Content

Current portal text describes:
- Weekly format aspiration
- Story recipe sharing
- Data collaboration
- Coverage coordination

Featured topic areas:
- State government
- Education
- Environment
- Arts & culture
- Health
- Community

## Guidelines

1. **Respect embargoes** - Don't share exclusive story details without permission.

2. **Credit collaborators** - Acknowledge outlets that share sources or data.

3. **Document decisions** - Keep notes on coordination agreements.

4. **Inclusive scheduling** - Consider different outlet schedules and staff sizes.

5. **Low barrier to join** - Meetings should be easy to attend, not require extensive prep.

## Implementation Roadmap

### Phase 1: Pre-Launch (Now - Late January)
- [ ] Choose scheduling tool
- [ ] Create meeting format/agenda template
- [ ] Set up meeting platform (Zoom/Meet/etc.)
- [ ] Update portal section with scheduling embed
- [ ] Announce to partners

### Phase 2: Pilot (Late January - March)
- [ ] Hold first meetings
- [ ] Gather feedback from participants
- [ ] Iterate on format
- [ ] Document successful story sharing

### Phase 3: Scale (March+)
- [ ] Refine based on pilot learnings
- [ ] Expand to more partners
- [ ] Consider specialized topic meetings
- [ ] Build story recipe library

## Integration with PluckyWire

Editorial meetings can surface stories for PluckyWire sharing:
- Stories identified in meetings → Added to PluckyWire
- Cross-outlet collaborations → Republished through network
- Story recipes → Inspire local adaptations

## Related Skills

- partner-management: For tracking participating outlets
- content-configuration: For updating meeting section content
