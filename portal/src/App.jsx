import './App.css'

function App() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <h1>NJ Content Sharing Network</h1>
            <span className="header-badge">NJ News Commons</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <p className="hero-eyebrow">Collaborative journalism infrastructure</p>
          <h2>Share and access local journalism across New Jersey</h2>
          <p>
            The NJ Content Sharing Network connects local news organizations to share stories,
            expand coverage, and strengthen local journalism throughout the state.
          </p>
        </div>
      </section>

      {/* DML Widgets Section */}
      <section className="section" id="widgets">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Automated content feeds</span>
            <h2>Content widgets from Distributed Media Lab</h2>
            <p>
              Add a stream of curated New Jersey news to your website with embeddable widgets.
              Choose from different content sources and customize the display for your audience.
            </p>
          </div>

          <div className="card-grid">
            <div className="card">
              <span className="card-badge">Statewide coverage</span>
              <h3>NJ Spotlight News widget</h3>
              <p>
                Embed a continuously updated feed of NJ Spotlight's statewide policy,
                politics, and investigative reporting.
              </p>
              <div className="widget-placeholder">
                <p>Widget preview coming soon</p>
                <code>&lt;!-- NJ Spotlight widget embed code --&gt;</code>
              </div>
            </div>

            <div className="card">
              <span className="card-badge">Arts & culture</span>
              <h3>NJ Arts widget</h3>
              <p>
                Feature arts, culture, and entertainment coverage from NJ Arts
                on your site.
              </p>
              <div className="widget-placeholder">
                <p>Widget preview coming soon</p>
                <code>&lt;!-- NJ Arts widget embed code --&gt;</code>
              </div>
            </div>

            <div className="card">
              <span className="card-badge">State government</span>
              <h3>NJ Statehouse News widget</h3>
              <p>
                Keep your readers informed with state government and legislative
                coverage from NJ Statehouse News.
              </p>
              <div className="widget-placeholder">
                <p>Widget preview coming soon</p>
                <code>&lt;!-- NJ Statehouse widget embed code --&gt;</code>
              </div>
            </div>

            <div className="card">
              <span className="card-badge">Environment</span>
              <h3>South Jersey Climate News widget</h3>
              <p>
                Environmental and climate coverage focused on South Jersey
                and the broader region.
              </p>
              <div className="widget-placeholder">
                <p>Widget preview coming soon</p>
                <code>&lt;!-- South Jersey Climate widget embed code --&gt;</code>
              </div>
            </div>
          </div>

          <div className="info-box">
            <h4>Need a custom widget?</h4>
            <p>
              Contact us to discuss custom widget configurations, filtered by topic,
              geography, or other criteria relevant to your audience.
            </p>
          </div>
        </div>
      </section>

      {/* PluckyWire Section */}
      <section className="section" id="pluckywire">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Story-by-story sharing</span>
            <h2>Browse and republish with PluckyWire</h2>
            <p>
              Browse and republish individual stories from fellow New Jersey news organizations.
              PluckyWire makes it easy to find relevant content and share it with your audience
              with proper attribution.
            </p>
          </div>

          <div className="card-grid">
            <div className="card">
              <h3>How it works</h3>
              <p>
                PluckyWire is a content-sharing platform where member outlets can browse stories
                from other participating news organizations and republish them with one click.
              </p>
              <ul>
                <li>Browse stories by topic, outlet, or date</li>
                <li>Copy story content with attribution included</li>
                <li>Automatic boilerplate credit for the original source</li>
                <li>Weekly digest emails of available content</li>
              </ul>
            </div>

            <div className="card">
              <h3>Participating outlets</h3>
              <p>Stories are available from these NJ News Commons partners:</p>
              <ul className="partner-list">
                <li>NJ Spotlight News</li>
                <li>NJ Arts</li>
                <li>NJ Statehouse News</li>
                <li>South Jersey Climate News</li>
              </ul>
              <p style={{ marginTop: '16px', fontSize: '0.85rem', opacity: 0.7 }}>
                More outlets joining soon.
              </p>
            </div>
          </div>

          <div className="btn-group">
            <a
              href="https://pluckywire.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Browse available stories
            </a>
            <a
              href="mailto:info@centerforcooperativemedia.org?subject=PluckyWire%20Access"
              className="btn btn-secondary"
            >
              Request access
            </a>
          </div>
        </div>
      </section>

      {/* Daily News Roundup Section */}
      <section className="section" id="roundup">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Stay informed</span>
            <h2>Daily News Roundup</h2>
            <p>
              Stay informed with our daily digest of New Jersey news from across the state.
              The Daily News Roundup aggregates the most important stories from NJ News Commons
              partners and delivers them to your inbox.
            </p>
          </div>

          <div className="card-grid">
            <div className="card">
              <h3>What's included</h3>
              <p>
                Each daily roundup features curated stories from participating news organizations,
                covering topics like:
              </p>
              <ul>
                <li>State and local government</li>
                <li>Education and health</li>
                <li>Environment and climate</li>
                <li>Arts and culture</li>
                <li>Community news</li>
              </ul>
            </div>

            <div className="card">
              <h3>Subscribe to the roundup</h3>
              <p>
                Get the Daily News Roundup delivered to your inbox every weekday morning.
                Join thousands of New Jersey news professionals staying informed.
              </p>
              <div style={{ marginTop: '24px' }}>
                <a
                  href="https://centerforcooperativemedia.us5.list-manage.com/subscribe?u=7f46611cb324e9e193acda7cc&id=dd61b54487"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Subscribe now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Meetings Section */}
      <section className="section" id="editorial-meetings">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Collaboration</span>
            <h2>Open editorial meetings</h2>
            <p>
              Join monthly editorial meetings where NJ News Commons partners share upcoming
              story plans, collaborate on coverage, and learn from guest speakers.
            </p>
          </div>

          <div className="card-grid">
            <div className="card">
              <h3>Meeting format</h3>
              <p>Each monthly meeting includes:</p>
              <ul>
                <li><strong>Roundtable:</strong> Partners share upcoming story plans</li>
                <li><strong>Data deep dive:</strong> Guest speakers present data resources and tools</li>
                <li><strong>Q&A:</strong> Open discussion and collaboration opportunities</li>
              </ul>
              <p style={{ marginTop: '20px', fontSize: '0.85rem', opacity: 0.7 }}>
                Can't attend? Partners can email updates to be shared at the meeting.
              </p>
            </div>

            <div className="card">
              <h3>When do we meet?</h3>
              <p>
                Pilot meetings with initial partners begin in late January 2025.
                We'll expand to broader NJ News Commons membership based on feedback.
              </p>
              <div className="poll-embed">
                <p>
                  <strong>Help us find the best meeting time</strong>
                </p>
                <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>
                  Poll embed coming soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attribution Section */}
      <section className="section" id="attribution">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Guidelines</span>
            <h2>Attribution and republishing</h2>
            <p>
              All shared content requires proper attribution. Here's the standard boilerplate
              that should accompany republished stories.
            </p>
          </div>

          <div className="attribution-box">
            <h3>Standard attribution boilerplate</h3>
            <div className="attribution-text">
              <p>
                This story was originally published by <strong>[Original Outlet Name]</strong> and
                is republished here through the NJ News Commons content-sharing network.
                The NJ News Commons is a collaborative of news organizations across New Jersey,
                supported by the Center for Cooperative Media at Montclair State University.
                For more information, visit{' '}
                <a href="https://centerforcooperativemedia.org">centerforcooperativemedia.org</a>.
              </p>
            </div>
            <p className="attribution-note">
              This boilerplate is automatically appended when copying stories from PluckyWire.
              For DML widgets, attribution is included in the widget display.
            </p>
          </div>

          <div className="info-box">
            <h4>Questions about attribution?</h4>
            <p>
              Contact us at{' '}
              <a href="mailto:info@centerforcooperativemedia.org">
                info@centerforcooperativemedia.org
              </a>{' '}
              if you have questions about attribution requirements or need customized language.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p className="footer-logo">NJ Content Sharing Network</p>
            <p>
              A program of the{' '}
              <a href="https://centerforcooperativemedia.org" target="_blank" rel="noopener noreferrer">
                Center for Cooperative Media
              </a>{' '}
              at Montclair State University
            </p>
            <div className="footer-contact">
              <p>
                Questions? Contact{' '}
                <a href="mailto:info@centerforcooperativemedia.org">
                  info@centerforcooperativemedia.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
