# AGENTS.md

This project is public and open source. Treat every committed file as publicly visible.

Critical rules for agents:

- Do not commit real secrets, API keys, passwords, tokens, private keys, or private service URLs.
- Do not put API keys or other secrets in client-side code, generated frontend environment files, Docker image layers, or examples.
- Keep real `.env*` files ignored. Only commit `.env*.example` files with obvious placeholder values.
- Public read endpoints must not require client-shipped secrets. Protect only private write or administration operations.
- Before finishing security-sensitive changes, scan for accidental secrets or known default credentials.
- Keep frontend code organized with a feature-based Angular structure. Shared UI and cross-feature utilities belong under shared/core areas, not inside individual feature folders.
