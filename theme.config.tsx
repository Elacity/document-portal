import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <img 
        src="/logo.png" 
        alt="Elacity Labs" 
        style={{ height: '24px', width: 'auto' }}
      />
      <span style={{ fontWeight: 600, fontSize: '20px' }}>Docs</span>
    </div>
  ),
  project: {
    link: 'https://github.com/Elacity',
  },
  chat: {
    link: 'https://t.me/elacity',
  },
  docsRepositoryBase: 'https://github.com/Elacity/ElacityLabsWeb',
  footer: {
    component: <span>© 2025 Elacity Labs. All rights reserved.</span>,
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  search: {
    placeholder: 'Search documentation...',
  },
  editLink: {
    component: ({ filePath }) => (
      <a href={`https://github.com/Elacity/ElacityLabsWeb/edit/main/docs/${filePath}`}>
        Edit this page on GitHub →
      </a>
    )
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  toc: {
    backToTop: true
  }
}

export default config

