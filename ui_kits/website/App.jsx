// Gotham Knights — Website UI kit app shell
function App() {
  const [screen, setScreen] = React.useState("home");
  const go = (s) => { setScreen(s); window.scrollTo({ top: 0 }); };

  const { SiteHeader, SiteFooter, HomeScreen, FixturesScreen, JoinScreen } = window;

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <SiteHeader current={screen} onNavigate={go} />
      <main style={{ flex: 1 }}>
        {screen === "home" && <HomeScreen onNavigate={go} />}
        {screen === "fixtures" && <FixturesScreen onNavigate={go} />}
        {screen === "join" && <JoinScreen onNavigate={go} />}
      </main>
      <SiteFooter />
    </div>
  );
}
window.App = App;
