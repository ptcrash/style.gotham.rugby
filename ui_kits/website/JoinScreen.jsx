// Gotham Knights — Join / Get Started screen
const GK_JOIN = window.GothamKnightsDesignSystem_c42f90;

function JoinScreen({ onNavigate }) {
  const { Button, Card, Input, SectionHeading, Tag, Crest } = GK_JOIN;
  const [submitted, setSubmitted] = React.useState(false);
  const [picked, setPicked] = React.useState(["Brand new"]);

  const toggle = (x) =>
    setPicked((p) => (p.includes(x) ? p.filter((y) => y !== x) : [...p, x]));

  return (
    <div style={{ background: "var(--surface-sunken)" }}>
      <div style={{
        maxWidth: "var(--container-md)", margin: "0 auto", padding: "64px 28px 96px",
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "start",
      }}>
        {/* Pitch column */}
        <div style={{ position: "sticky", top: "92px" }}>
          <SectionHeading eyebrow="Get started" title="Your first session is free" />
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.6, color: "var(--text-body)", marginTop: "20px" }}>
            Fill this out and a captain will reach out with everything you need for
            Tuesday's Intro to Rugby. Seriously — no experience needed.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "24px 0 0", display: "grid", gap: "12px" }}>
            {["All bodies & skill levels", "Boots & ball provided", "Pints after, always"].map((t) => (
              <li key={t} style={{ display: "flex", alignItems: "center", gap: "12px", fontWeight: 500 }}>
                <Crest size={22} src="../../assets/logos/shield-2c.svg" /> {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Form column */}
        <Card variant="raised" padding="var(--space-7)">
          {submitted ? (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <Crest size={72} src="../../assets/logos/shield-2c.svg" style={{ margin: "0 auto 18px" }} />
              <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: "var(--fw-extrabold)", fontSize: "1.75rem", margin: "0 0 8px" }}>You're in.</h3>
              <p style={{ color: "var(--text-muted)", margin: "0 0 24px" }}>Check your inbox — we'll see you Tuesday.</p>
              <Button variant="outline" onClick={() => onNavigate("home")}>Back home</Button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <div style={{ display: "grid", gap: "18px" }}>
                <Input label="Name" placeholder="Jordan Rivera" required />
                <Input label="Email" type="email" placeholder="you@club.nyc" required />
                <div>
                  <span style={{ display: "block", fontWeight: 600, fontSize: "var(--fs-body-sm)", color: "var(--text-strong)", marginBottom: "10px" }}>
                    Where are you at?
                  </span>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {["Brand new", "Played before", "Just watching"].map((o) => (
                      <Tag key={o} selected={picked.includes(o)} onClick={() => toggle(o)}>{o}</Tag>
                    ))}
                  </div>
                </div>
                <Input label="Pronouns (optional)" placeholder="they/them" />
                <Button type="submit" variant="primary" size="lg" fullWidth>Count me in</Button>
              </div>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
}

window.JoinScreen = JoinScreen;
