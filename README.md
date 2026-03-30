# Student Application Form

A React form component built with controlled inputs, client-side validation, and success state feedback.

## Built With

- React
- useState

## Features

- Controlled form inputs using a single shared state object
- Client-side validation with inline error messages
- Success message displayed on valid submission
- Form resets after successful submission

## Form Fields

| Field | Validation |
|---|---|
| Full Name | Required |
| Email | Required, must contain `@` |
| Phone | Required, must be at least 10 digits, numbers only |
| Experience Level | Required, select from dropdown |
| Reason to Join | Required |

## How It Works

- `handleChange` updates the shared `form` state on every input change
- `validate` checks each field and returns an `errors` object
- `handleSubmit` runs validation on submit — if errors exist, they display inline in red. If no errors, the form submits, resets, and shows a success message.

## Getting Started

```bash
npm install
npm run dev
```

Import and render the component in `App.jsx`:

```jsx
import StudentApplicationForm from "./StudentApplicationForm";

function App() {
  return <StudentApplicationForm />;
}
```