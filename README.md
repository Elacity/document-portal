# Elacity Document Portal

Official documentation for the Elacity ecosystem.

**Live Site**: [docs.ela.city](https://docs.ela.city)

## Documentation Structure

```
pages/
├── index.mdx           # Introduction
├── vision.mdx          # Vision & Mission
├── getting-started.mdx # Quick Start Guide
├── cloud/              # Personal Cloud (PC2)
│   ├── installation/   # Setup guides
│   ├── user-guide/     # Using PC2
│   └── ...
└── exchange/           # Elacity Exchange
    └── ...
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment

This site is deployed automatically via Vercel from the `main` branch.

## Contributing

1. Fork this repository
2. Create a branch for your changes
3. Submit a pull request

Documentation uses [Nextra](https://nextra.site/) with MDX format.

## Related Repositories

- [pc2.net](https://github.com/Elacity/pc2.net) - PC2 source code
- [elastos-launcher](https://github.com/Elacity/elastos-launcher) - Desktop launcher app
- [elacity-web](https://github.com/Elacity/elacity-web) - Exchange web app

## License

MIT License
