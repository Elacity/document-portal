# Documentation Portal Setup Guide

This documentation portal is built with [Nextra](https://nextra.site) and ready for your development team to add API and SDK documentation.

## Quick Start

### Install Dependencies

```bash
cd docs
npm install
```

### Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3001/docs` to see the documentation.

### Build for Production

```bash
npm run build
npm start
```

## Current Structure

### ✅ Completed

- **Introduction Pages**: Vision, What We Do, Benefits, Economic Singularity
- **Getting Started**: Quick Start, Core Concepts, Wealth Capsules, Agentic Economy
- **Architecture**: Placeholder structure ready for technical details
- **Guides**: Placeholder structure for tutorials
- **API Reference**: Placeholder pages ready for API docs
- **SDKs**: Placeholder pages ready for SDK docs

### 📝 Ready for Your Team

The following sections are set up with placeholder pages that your team can fill in:

1. **API Reference** (`/docs/pages/api/`)
   - `overview.mdx` - API overview (placeholder)
   - `authentication.mdx` - Auth docs (placeholder)
   - `coming-soon.mdx` - General placeholder

2. **SDKs** (`/docs/pages/sdks/`)
   - `overview.mdx` - SDK overview (placeholder)
   - `javascript.mdx` - JS/TS SDK (placeholder)
   - `python.mdx` - Python SDK (placeholder)
   - `rust.mdx` - Rust SDK (placeholder)
   - `coming-soon.mdx` - General placeholder

3. **Architecture** (`/docs/pages/architecture/`)
   - Structure ready, needs technical content

4. **Guides** (`/docs/pages/guides/`)
   - Structure ready, needs tutorial content

## Adding API Documentation

When your API is ready, update the files in `/docs/pages/api/`:

1. Replace placeholder content in `overview.mdx`
2. Add detailed endpoint docs
3. Include code examples
4. Add authentication details

## Adding SDK Documentation

When your SDKs are ready, update the files in `/docs/pages/sdks/`:

1. Replace placeholder content in each language's file
2. Add installation instructions
3. Include code examples
4. Add API reference

## Configuration

### Theme

Edit `theme.config.tsx` to customize:
- Logo
- Colors
- Navigation
- Footer

### Navigation

Edit `pages/_meta.json` to:
- Reorder pages
- Add new sections
- Update titles

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Set base path to `/docs` if needed
4. Deploy

### Other Platforms

The docs are a standard Next.js app, so they can be deployed to:
- Netlify
- Render
- AWS Amplify
- Any Next.js-compatible platform

## Next Steps

1. **Review the content**: Check all introduction pages
2. **Add API docs**: When API is ready, fill in API section
3. **Add SDK docs**: When SDKs are ready, fill in SDK section
4. **Customize theme**: Update branding in `theme.config.tsx`
5. **Deploy**: Get it live!

## Questions?

- Nextra docs: https://nextra.site
- Next.js docs: https://nextjs.org/docs
- MDX docs: https://mdxjs.com

