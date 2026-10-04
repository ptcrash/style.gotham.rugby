Labeled text input with hint and error states — gold focus ring, confident 2px border.

```jsx
<Input label="Email" type="email" placeholder="you@club.nyc" required />
<Input label="Name" error="Required" />
```

Props: `label`, `hint`, `error` (red + replaces hint), `type`, `value`, `onChange`, `placeholder`, `disabled`, `required`. Works in both light and loud themes via field tokens.
