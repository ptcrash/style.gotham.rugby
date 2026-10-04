// Gotham Knights — Site Header (marketing nav)
const { Button: GKButton, Crest: GKCrest } = window.GothamKnightsDesignSystem_c42f90;

function SiteHeader({ current, onNavigate }) {
  const links = [
    { id: "home", label: "Home" },
    { id: "fixtures", label: "Fixtures" },
    { id: "join", label: "Join" },
  ];
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 20,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "14px 28px",
      background: "rgba(13,29,65,0.92)",
      backdropFilter: "blur(8px)",
      borderBottom: "var(--bw-base) solid var(--gold-500)",
    }}>
      <button onClick={() => onNavigate("home")} style={{
        display: "flex", alignItems: "center", gap: "12px",
        background: "none", border: 0, cursor: "pointer", padding: 0,
      }}>
        <GKCrest size={40} src="../../assets/logos/shield-2c.svg" />
        <span style={{
          fontFamily: "var(--font-wordmark)", color: "#fff",
          fontSize: "1.25rem", lineHeight: 1, letterSpacing: "var(--tracking-wordmark)",
          textTransform: "uppercase",
        }}>Gotham Knights</span>
      </button>

      <nav style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        {links.map((l) => (
          <button key={l.id} onClick={() => onNavigate(l.id)} style={{
            background: "none", border: 0, cursor: "pointer",
            fontFamily: "var(--font-body)", fontWeight: "var(--fw-bold)",
            textTransform: "uppercase", letterSpacing: "0.08em",
            fontSize: "0.8125rem",
            color: current === l.id ? "var(--gold-500)" : "rgba(255,255,255,0.82)",
            padding: "10px 14px", borderRadius: "var(--radius-sm)",
          }}>{l.label}</button>
        ))}
        <div style={{ marginLeft: "10px" }}>
          <GKButton size="sm" variant="primary" onClick={() => onNavigate("join")}>Come play</GKButton>
        </div>
      </nav>
    </header>
  );
}

window.SiteHeader = SiteHeader;
