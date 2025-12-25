---
name: widget-management
description: Manage DML (Distributed Media Lab) widget embed codes for the NJ Content Sharing Network portal. Activate when adding, updating, or troubleshooting content widgets from partner outlets.
---

# Widget Management

This skill handles DML widget integration for displaying partner content streams on the NJ Content Sharing Network portal.

## When to Activate

- User mentions DML widgets, embed codes, or widget placeholders
- Adding new widget from Dave (DML provider)
- Troubleshooting widget display issues
- Updating widget configurations
- Discussing content streams or automated feeds

## Current Widget Status

| Widget | Partner | Status | Location in App.jsx |
|--------|---------|--------|---------------------|
| NJ Spotlight News | NJ Spotlight | Placeholder | WidgetCard component |
| NJ Arts | NJ Arts | Placeholder | WidgetCard component |
| NJ Statehouse | NJ Statehouse News | Placeholder | WidgetCard component |
| SJ Climate News | South Jersey Climate | Placeholder | WidgetCard component |

**Current state:** All widgets show placeholder divs awaiting actual embed codes from Dave.

## Widget Integration Pattern

### Embed Code Structure

DML widgets typically use iframe or script-based embeds:

```html
<!-- Script-based embed -->
<script src="https://dml.example.com/widget.js"
        data-outlet="nj-spotlight"
        data-count="5"
        data-theme="light">
</script>

<!-- Iframe-based embed -->
<iframe
  src="https://dml.example.com/embed/nj-spotlight"
  width="100%"
  height="400"
  frameborder="0"
  loading="lazy">
</iframe>
```

### React Integration

For script-based widgets, use useEffect:

```jsx
const DMLWidget = ({ outletId, count = 5 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://dml.example.com/widget.js';
    script.dataset.outlet = outletId;
    script.dataset.count = count;
    script.async = true;

    containerRef.current.appendChild(script);

    return () => {
      // Cleanup on unmount
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [outletId, count]);

  return <div ref={containerRef} className="dml-widget-container" />;
};
```

For iframe-based widgets:

```jsx
const DMLWidget = ({ embedUrl, height = 400 }) => (
  <iframe
    src={embedUrl}
    width="100%"
    height={height}
    frameBorder="0"
    loading="lazy"
    title="Partner content widget"
    style={{ border: 'none' }}
  />
);
```

## Widget Registry

Create a centralized widget configuration:

```javascript
// portal/src/data/widgets.js
export const widgets = {
  'nj-spotlight': {
    id: 'nj-spotlight',
    title: 'NJ Spotlight News',
    badge: 'Statewide policy',
    description: 'In-depth coverage of New Jersey government, politics, health, and education.',
    embedCode: null, // Awaiting from Dave
    embedType: null, // 'script' or 'iframe'
    partner: 'NJ Spotlight',
    active: false
  },
  'nj-arts': {
    id: 'nj-arts',
    title: 'NJ Arts',
    badge: 'Arts coverage',
    description: 'Coverage of arts, culture, and entertainment across New Jersey.',
    embedCode: null,
    embedType: null,
    partner: 'NJ Arts',
    active: false
  },
  'nj-statehouse': {
    id: 'nj-statehouse',
    title: 'NJ Statehouse',
    badge: 'Government & politics',
    description: 'Statehouse reporting covering New Jersey legislature and state government.',
    embedCode: null,
    embedType: null,
    partner: 'NJ Statehouse News',
    active: false
  },
  'sj-climate': {
    id: 'sj-climate',
    title: 'SJ Climate News',
    badge: 'Environment',
    description: 'Environmental and climate reporting focused on South Jersey.',
    embedCode: null,
    embedType: null,
    partner: 'South Jersey Climate News',
    active: false
  }
};
```

## Adding a New Widget

1. **Receive embed code from Dave**
2. **Identify embed type** (script or iframe)
3. **Update widget registry** with embedCode and embedType
4. **Test in development** (`npm run dev`)
5. **Verify responsive behavior** at mobile/tablet/desktop breakpoints
6. **Build and deploy** (`npm run build`)

## Guidelines

1. **Never hardcode embed URLs** - Use the widget registry for all configuration.

2. **Lazy load widgets** - Use `loading="lazy"` for iframes to improve initial page load.

3. **Provide fallback content** - Show placeholder or loading state while widget loads.

4. **Respect widget dimensions** - DML widgets may have minimum height requirements.

5. **Test with ad blockers** - Some users may have extensions that block third-party scripts.

## Troubleshooting

**Widget not displaying:**
- Check browser console for script errors
- Verify embed URL is accessible (not blocked by CORS)
- Confirm DML service is operational

**Widget displays but no content:**
- Partner may have no recent articles
- RSS feed source may be misconfigured in DML
- Contact Dave to verify widget setup

**Widget breaks page layout:**
- DML widgets may inject CSS. Scope container styles carefully.
- Use CSS containment: `contain: layout style;`

## Contact

- **Dave (DML)**: For widget embed codes and configuration issues
- **Widget issues**: Document in CLAUDE.md for tracking

## Related Skills

- rss-content-integration: For understanding feed sources
- deployment-workflow: For pushing widget updates to production
