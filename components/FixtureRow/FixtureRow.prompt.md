A single fixture/result row — date, home/away accent, opponent, and score-or-kickoff. The club's signature list component.

```jsx
<FixtureRow date={{day:"12",month:"OCT"}} opponent="Village Lions" home competition="Met Union" kickoff="1:00 PM" />
<FixtureRow date={{day:"28",month:"SEP"}} opponent="Brooklyn RFC" home={false} scoreFor={27} scoreAgainst={12} />
```

Provide both `scoreFor` and `scoreAgainst` to render a played result (mono score + W/L/D chip); otherwise pass `kickoff`. Left border is gold for home, navy for away.
