// Gotham Knights — Home screen
const GK_HOME = window.GothamKnightsDesignSystem_c42f90;

function HomeScreen({ onNavigate }) {
  const { Button, Card, Stat, SectionHeading, Badge } = GK_HOME;
  const A = "../../assets/";

  return (
    <div>
      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden", background: "var(--navy-700)" }}>
        <img src={A + "img/intro-to-rugby.jpg"} alt="" style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover", opacity: 0.55,
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(90deg, rgba(13,29,65,0.95) 0%, rgba(13,29,65,0.72) 50%, rgba(13,29,65,0.45) 100%)",
        }} />
        <div style={{
          position: "relative", maxWidth: "var(--container-lg)", margin: "0 auto",
          padding: "96px 28px 104px",
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            color: "var(--gold-400)", fontWeight: "var(--fw-bold)",
            textTransform: "uppercase", letterSpacing: "0.16em", fontSize: "0.75rem",
            marginBottom: "20px",
          }}>
            <span style={{ width: "28px", height: "3px", background: "var(--gold-500)", borderRadius: "99px" }} />
            NYC's inclusive rugby club
          </div>
          <h1 style={{
            fontFamily: "var(--font-athletic)", fontWeight: 900, textTransform: "uppercase",
            color: "#fff", fontSize: "5rem", lineHeight: 0.9, letterSpacing: "-0.01em",
            margin: 0, maxWidth: "14ch",
          }}>
            Come find <span style={{ color: "var(--gold-500)" }}>your pack</span>
          </h1>
          <p style={{
            color: "var(--navy-100)", fontSize: "1.25rem", lineHeight: 1.5,
            maxWidth: "46ch", margin: "24px 0 36px",
          }}>
            A fearless, welcoming home for queer athletes — and anyone who'll have a go.
            No experience? Perfect. Bring yourself.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <Button size="lg" variant="primary" onClick={() => onNavigate("join")}>Join the squad</Button>
            <Button size="lg" variant="outline" onClick={() => onNavigate("fixtures")}
              style={{ color: "#fff", borderColor: "rgba(255,255,255,0.5)" }}>See fixtures</Button>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section style={{ background: "var(--gold-500)" }}>
        <div style={{
          maxWidth: "var(--container-lg)", margin: "0 auto", padding: "28px",
          display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "24px",
        }}>
          <Stat value="150+" label="Active members" accent="navy" />
          <Stat value="1998" label="Established" accent="navy" />
          <Stat value="3" label="Sides fielded" accent="navy" />
          <Stat value="All" label="Bodies & levels" accent="navy" />
        </div>
      </section>

      {/* WHY JOIN */}
      <section style={{ maxWidth: "var(--container-lg)", margin: "0 auto", padding: "80px 28px" }}>
        <SectionHeading eyebrow="Why Gotham" title="Built different. Tackle harder."
          description="We field competitive sides while keeping our doors wide open. Pride on the pitch, pints after." />
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px",
          marginTop: "40px",
        }}>
          <Card featured>
            <Badge variant="gold">All welcome</Badge>
            <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: "var(--fw-extrabold)", fontSize: "1.5rem", margin: "14px 0 8px" }}>Every level</h3>
            <p style={{ margin: 0, color: "var(--text-muted)" }}>First-timers train alongside veterans. We'll teach you to ruck, pass, and tackle from scratch.</p>
          </Card>
          <Card featured>
            <Badge variant="gold">Community</Badge>
            <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: "var(--fw-extrabold)", fontSize: "1.5rem", margin: "14px 0 8px" }}>Found family</h3>
            <p style={{ margin: 0, color: "var(--text-muted)" }}>More than a team — a queer NYC community that shows up for each other on and off the pitch.</p>
          </Card>
          <Card featured>
            <Badge variant="gold">Compete</Badge>
            <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: "var(--fw-extrabold)", fontSize: "1.5rem", margin: "14px 0 8px" }}>Real rugby</h3>
            <p style={{ margin: 0, color: "var(--text-muted)" }}>League matches, tournaments, and the Bingham Cup. We play to win and we play for keeps.</p>
          </Card>
        </div>
      </section>

      {/* CTA STRIP */}
      <section style={{ background: "var(--navy-700)" }}>
        <div style={{
          maxWidth: "var(--container-lg)", margin: "0 auto", padding: "64px 28px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: "32px", flexWrap: "wrap",
        }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-athletic)", fontWeight: 900, textTransform: "uppercase",
              color: "#fff", fontSize: "2.75rem", lineHeight: 0.95, margin: 0 }}>
              Tuesday nights.<br /><span style={{ color: "var(--gold-500)" }}>Wall Street.</span>
            </h2>
            <p style={{ color: "var(--navy-100)", fontSize: "1.125rem", margin: "16px 0 0" }}>
              Drop in for Intro to Rugby, 8–9pm. Boots optional, courage required.
            </p>
          </div>
          <Button size="lg" variant="primary" onClick={() => onNavigate("join")}>Get started</Button>
        </div>
      </section>
    </div>
  );
}

window.HomeScreen = HomeScreen;
