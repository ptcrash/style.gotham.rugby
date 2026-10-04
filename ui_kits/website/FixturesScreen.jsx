// Gotham Knights — Fixtures & Results screen
const GK_FIX = window.GothamKnightsDesignSystem_c42f90;

function FixturesScreen() {
  const { FixtureRow, SectionHeading, Tag } = GK_FIX;
  const [filter, setFilter] = React.useState("all");

  const upcoming = [
    { date: { day: "12", month: "OCT" }, opponent: "Village Lions", home: true, competition: "Met Union", kickoff: "1:00 PM" },
    { date: { day: "19", month: "OCT" }, opponent: "Jersey Shore RFC", home: false, competition: "Met Union", kickoff: "12:00 PM" },
    { date: { day: "02", month: "NOV" }, opponent: "Hudson Valley", home: true, competition: "Friendly", kickoff: "1:00 PM" },
  ];
  const results = [
    { date: { day: "28", month: "SEP" }, opponent: "Brooklyn RFC", home: false, competition: "Met Union", scoreFor: 27, scoreAgainst: 12 },
    { date: { day: "21", month: "SEP" }, opponent: "Hartford Wild", home: true, competition: "Met Union", scoreFor: 15, scoreAgainst: 22 },
    { date: { day: "14", month: "SEP" }, opponent: "Long Island", home: true, competition: "Friendly", scoreFor: 31, scoreAgainst: 31 },
  ];

  const show = (which) => filter === "all" || filter === which;

  return (
    <div style={{ maxWidth: "var(--container-md)", margin: "0 auto", padding: "64px 28px 96px" }}>
      <SectionHeading eyebrow="2026 Season" title="Fixtures &amp; Results"
        description="Come cheer the Knights on. Home matches at Randall's Island." />

      <div style={{ display: "flex", gap: "10px", margin: "32px 0 28px", flexWrap: "wrap" }}>
        <Tag selected={filter === "all"} onClick={() => setFilter("all")}>All</Tag>
        <Tag selected={filter === "upcoming"} onClick={() => setFilter("upcoming")}>Upcoming</Tag>
        <Tag selected={filter === "results"} onClick={() => setFilter("results")}>Results</Tag>
      </div>

      {show("upcoming") && (
        <div style={{ marginBottom: "40px" }}>
          <div className="gk-overline" style={{ marginBottom: "14px" }}>Upcoming</div>
          <div style={{ display: "grid", gap: "10px" }}>
            {upcoming.map((f, i) => <FixtureRow key={i} {...f} />)}
          </div>
        </div>
      )}

      {show("results") && (
        <div>
          <div className="gk-overline" style={{ marginBottom: "14px" }}>Recent results</div>
          <div style={{ display: "grid", gap: "10px" }}>
            {results.map((f, i) => <FixtureRow key={i} {...f} />)}
          </div>
        </div>
      )}
    </div>
  );
}

window.FixturesScreen = FixturesScreen;
