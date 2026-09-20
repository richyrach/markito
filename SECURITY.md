# Security Policy

Markito is currently a static GitHub Pages site. It does not accept credentials, payments, or personal account data.

## Current security posture

- Static HTML, CSS, and JavaScript only.
- HTTPS is provided by GitHub Pages.
- No API keys or secrets are stored in frontend code.
- No third-party JavaScript is loaded.
- Pages use a restrictive Content Security Policy and strict referrer policy.
- Dynamic market-scanner credentials will live server-side when a backend is introduced.

## Reporting a vulnerability

Please use the repository's **Security** tab and create a private security advisory when possible. Avoid posting exploitable details in a public issue.

Include the affected page or component, reproduction steps, impact, and any proof-of-concept needed to understand the problem.

## Scope

The public Markito website and code in this repository are in scope. Third-party services and GitHub infrastructure are outside the project's control.
