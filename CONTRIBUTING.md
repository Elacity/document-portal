# Contributing to Elacity Documentation

This guide explains how team members can add and edit documentation in the Elacity documentation portal.

## Repository Structure

The documentation is located in the `/docs` directory of the main ElacityLabsWeb repository:

```
ElacityLabsWeb/
├── docs/                    # Documentation portal
│   ├── pages/              # All documentation pages (MDX files)
│   │   ├── index.mdx       # Homepage
│   │   ├── vision.mdx      # Vision page
│   │   ├── getting-started/ # Getting started section
│   │   ├── api/            # API documentation
│   │   ├── sdks/           # SDK documentation
│   │   └── ...
│   ├── theme.config.tsx    # Theme configuration
│   ├── next.config.mjs     # Next.js configuration
│   └── package.json        # Dependencies
└── ...
```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Elacity/ElacityLabsWeb.git
cd ElacityLabsWeb
```

### 2. Install Dependencies

```bash
cd docs
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3001` to see the documentation.

## Editing Documentation

### File Format

All documentation pages are written in **MDX** (Markdown + JSX). Files use the `.mdx` extension.

### Adding a New Page

1. **Create the MDX file** in the appropriate directory:
   ```bash
   # Example: Adding a new API endpoint page
   touch docs/pages/api/new-endpoint.mdx
   ```

2. **Add content** to the file:
   ```mdx
   # New Endpoint

   This is the documentation for the new endpoint.

   ## Usage

   ```typescript
   const response = await client.newEndpoint()
   ```
   ```

3. **Update the navigation** by editing the `_meta.tsx` file in that directory:
   ```typescript
   // docs/pages/api/_meta.tsx
   export default {
     overview: "Overview",
     "new-endpoint": "New Endpoint",  // Add this line
     // ...
   }
   ```

4. **Save and view** - The page will automatically appear in the sidebar!

### Editing an Existing Page

1. **Find the file** in `docs/pages/`
2. **Edit the MDX content** directly
3. **Save** - Changes appear instantly in the dev server

### Page Structure

Each page should follow this structure:

```mdx
# Page Title

Brief introduction paragraph.

## Section 1

Content here...

## Section 2

More content...

### Subsection

Even more detail...
```

## Navigation Structure

### Root Level Pages

Edit `docs/pages/_meta.tsx` to add top-level pages:

```typescript
export default {
  index: "Introduction",
  vision: "Our Vision",
  "new-page": "New Page",  // Add new pages here
  // ...
}
```

### Subdirectory Pages

Each subdirectory has its own `_meta.tsx` file:

- `docs/pages/api/_meta.tsx` - API documentation navigation
- `docs/pages/sdks/_meta.tsx` - SDK documentation navigation
- `docs/pages/getting-started/_meta.tsx` - Getting started navigation
- etc.

## Common Tasks

### Adding API Documentation

1. Navigate to `docs/pages/api/`
2. Create a new `.mdx` file (e.g., `endpoints.mdx`)
3. Add your documentation content
4. Update `docs/pages/api/_meta.tsx` to include the new page

### Adding SDK Documentation

1. Navigate to `docs/pages/sdks/`
2. Edit the appropriate language file (e.g., `javascript.mdx`)
3. Or create a new file and add it to `docs/pages/sdks/_meta.tsx`

### Adding Code Examples

Use code blocks with language syntax highlighting:

````mdx
```typescript
const client = new ElacityClient({
  apiKey: 'your-key'
})
```

```python
from elacity import ElacityClient

client = ElacityClient(api_key='your-key')
```
````

### Adding Links

Internal links (to other docs pages):
```mdx
[Link Text](/docs/getting-started/quickstart)
```

External links:
```mdx
[Link Text](https://example.com)
```

## Workflow

### Making Changes

1. **Create a branch**:
   ```bash
   git checkout -b docs/add-api-documentation
   ```

2. **Make your edits** in the `docs/pages/` directory

3. **Test locally**:
   ```bash
   cd docs
   npm run dev
   ```
   Visit `http://localhost:3001` to verify changes

4. **Commit and push**:
   ```bash
   git add docs/
   git commit -m "docs: Add API endpoint documentation"
   git push origin docs/add-api-documentation
   ```

5. **Create a Pull Request** on GitHub

### Review Process

- All documentation changes should go through a PR
- Team members can review and suggest improvements
- Once approved, merge to main branch

## Deployment

The documentation is automatically deployed when changes are merged to the main branch (if deployment is configured).

### Manual Deployment

If you need to deploy manually:

```bash
cd docs
npm run build
npm start
```

## Best Practices

### Writing Style

- **Clear and concise**: Get to the point quickly
- **Use examples**: Show, don't just tell
- **Keep it updated**: Update docs when features change
- **Be consistent**: Follow existing documentation patterns

### Code Examples

- **Always test examples**: Make sure code examples actually work
- **Include imports**: Show where things come from
- **Add comments**: Explain complex parts
- **Use real values**: Avoid placeholders when possible

### Organization

- **Group related content**: Keep similar topics together
- **Use clear headings**: Make navigation easy
- **Link between pages**: Help users discover related content
- **Keep files focused**: One topic per page when possible

## Troubleshooting

### Page Not Appearing

- Check that the file exists in `docs/pages/`
- Verify the file has `.mdx` extension
- Ensure it's listed in the appropriate `_meta.tsx` file
- Restart the dev server: `npm run dev`

### Build Errors

- Check for syntax errors in MDX files
- Verify all links are correct
- Ensure all referenced pages exist

### Navigation Issues

- Check `_meta.tsx` files for typos
- Verify file names match exactly (case-sensitive)
- Restart the dev server

## Resources

- **Nextra Documentation**: https://nextra.site
- **MDX Guide**: https://mdxjs.com
- **Markdown Guide**: https://www.markdownguide.org

## Questions?

If you have questions about contributing to the documentation:
1. Check this guide first
2. Look at existing pages for examples
3. Ask in the team chat/forum
4. Create an issue on GitHub

