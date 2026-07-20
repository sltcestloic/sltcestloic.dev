# AGENTS.md

This project is public and open source. Treat every committed file as publicly visible.

Critical rules for agents:

- Do not commit real secrets, API keys, passwords, tokens, private keys, or private service URLs.
- Do not put API keys or other secrets in client-side code, generated frontend environment files, Docker image layers, or examples.
- Keep real `.env*` files ignored. Only commit `.env*.example` files with obvious placeholder values.
- Before finishing security-sensitive changes, scan for accidental secrets or known default credentials.
- When asked to commit files, write a concise message with lowercase only
- If code previously written by an agent has been modified by the user, do not modify it again without asking the user first.
