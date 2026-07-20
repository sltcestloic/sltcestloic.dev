# Application architecture

## API access

- Public read endpoints must not require client-shipped secrets.
- Protect only private write or administration operations.

## Frontend organization

- Keep frontend code organized with a feature-based Angular structure.
- Shared UI and cross-feature utilities belong under shared/core areas, not inside individual feature folders.
- Components used by only one feature belong inside that feature, for example under `features/<feature>/components`, instead of `shared`.
