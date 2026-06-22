# Weiyooong

Personal notes and blogs built with Docusaurus.

## Local development

```bash
npm ci
npm run start
```

The development server runs at `http://localhost:3000`.

## Validation

```bash
npm run typecheck
npm run build
```

The production site is generated in `build/`.

## Deployment

GitHub Actions validates pull requests targeting `develop` or `main`.

- Pushes to `develop` deploy a Cloudflare Pages preview.
- Pushes to `main` deploy the production branch.
- Publish changes through a `develop` → `main` pull request.

The repository must define:

- Secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`
- Variable: `CLOUDFLARE_PAGES_PROJECT_NAME`
