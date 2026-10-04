// Gotham Knights — Site Footer
const { Crest: GKCrestF } = window.GothamKnightsDesignSystem_c42f90;

function SiteFooter() {
  return (
    <footer style={{ background: "var(--navy-800)", color: "var(--navy-200)" }}>
      <hr className="gk-pride-rule" style={{ margin: 0, borderRadius: 0 }} />
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: "20px", padding: "36px 28px",
        maxWidth: "var(--container-lg)", margin: "0 auto",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <GKCrestF size={48} src="../../assets/logos/shield-2c.svg" />
          <div>
            <div style={{ fontFamily: "var(--font-wordmark)", color: "#fff", fontSize: "1.125rem", letterSpacing: "var(--tracking-wordmark)", textTransform: "uppercase" }}>Gotham Knights RFC</div>
            <div style={{ fontSize: "var(--fs-body-sm)" }}>New York City's inclusive rugby club</div>
          </div>
        </div>
        <div style={{
          display: "flex", gap: "28px",
          fontWeight: "var(--fw-semibold)", fontSize: "var(--fs-body-sm)",
        }}>
          <a href="#" style={{ color: "var(--navy-200)" }}>Instagram</a>
          <a href="#" style={{ color: "var(--navy-200)" }}>Contact</a>
          <a href="#" style={{ color: "var(--navy-200)" }}>Sponsors</a>
        </div>
      </div>
      <div style={{
        textAlign: "center", padding: "0 0 24px",
        fontSize: "var(--fs-caption)", color: "var(--navy-300)",
      }}>© 2026 Gotham Knights Rugby Football Club · All bodies, all levels.</div>
    </footer>
  );
}

window.SiteFooter = SiteFooter;
