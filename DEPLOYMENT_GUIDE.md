# Documentation Deployment Guide

## Current Setup: In Main Repository

The documentation is currently in `/docs` within the main `ElacityLabsWeb` repository.

### ✅ Pros of Current Setup (In Main Repo)

1. **Single Source of Truth**: Everything in one place
2. **Easy to Keep in Sync**: Docs can reference code, and code changes can trigger doc updates
3. **Simpler Management**: One repo to manage, one deployment pipeline
4. **Team Collaboration**: Everyone has access to docs when they have repo access
5. **Version Control**: Docs versioned with code

### ❌ Cons of Current Setup

1. **Larger Repository**: Adds to repo size
2. **Mixed Concerns**: Code and docs together
3. **Deployment Complexity**: Need to handle docs separately from main app

### ✅ Pros of Standalone Repository

1. **Separation of Concerns**: Docs are independent
2. **Independent Deployment**: Can deploy docs separately
3. **Focused Access**: Can give docs-only access to technical writers
4. **Smaller Repos**: Each repo is more focused

### ❌ Cons of Standalone Repository

1. **Two Repos to Manage**: More overhead
2. **Sync Issues**: Harder to keep docs in sync with code changes
3. **More Complex**: Need to manage two deployment pipelines

## Recommendation: **Keep It In Main Repo**

For your use case, I recommend keeping the docs in the main repository because:

1. **Your team is small**: Easier to manage one repo
2. **Docs reference code**: API docs need to stay in sync with code
3. **Simpler workflow**: One place to make changes
4. **Render supports it**: Can easily add a third service

## Deployment Options

### Option 1: Add as Third Render Service (Recommended)

Add the docs as a separate web service on Render, alongside your API and Web services.

**Pros:**
- ✅ Separate deployment (docs don't affect main app)
- ✅ Independent scaling
- ✅ Can deploy to different URL (e.g., `docs.elacitylabs.com`)
- ✅ Uses your existing Render setup

**Cons:**
- ❌ Another service to manage (but minimal overhead)
- ❌ Additional cost (but free tier available)

**Setup:**
1. Add to `render.yaml` (see below)
2. Deploy automatically with main repo
3. Access at separate URL

### Option 2: Deploy to Vercel/Netlify (Alternative)

Deploy docs separately to Vercel or Netlify.

**Pros:**
- ✅ Free hosting
- ✅ Automatic deployments from GitHub
- ✅ Fast CDN
- ✅ Separate from main app

**Cons:**
- ❌ Another platform to manage
- ❌ Need to configure separately
- ❌ Docs in main repo but deployed elsewhere

### Option 3: Serve from Main App (Not Recommended)

Serve docs as part of your main web service.

**Pros:**
- ✅ One service
- ✅ Same domain

**Cons:**
- ❌ Mixes concerns
- ❌ Slower builds
- ❌ Harder to manage

## Recommended Setup: Render Service

Here's how to add docs as a third service on Render:

### Step 1: Update render.yaml

Add this to your `render.yaml`:

```yaml
services:
  # ... your existing API and Web services ...

  # Documentation Service
  - type: web
    name: elacity-docs
    env: node
    buildCommand: cd docs && npm install && npm run build
    startCommand: cd docs && npm start
    branch: main
    envVars:
      - key: NODE_ENV
        value: production
      - key: PORT
        value: 3001
```

### Step 2: Deploy

1. **Push to GitHub**: The render.yaml change will be detected
2. **Render will create the service**: Automatically provisions new service
3. **Access at**: `https://elacity-docs.onrender.com` (or custom domain)

### Step 3: Custom Domain (Optional)

1. Go to Render dashboard → elacity-docs service
2. Click "Settings" → "Custom Domains"
3. Add: `docs.elacitylabs.com` (or your preferred domain)
4. Update DNS records as instructed

## Cost Analysis

### Render Free Tier
- **3 services allowed** (you have 2, docs would be 3rd)
- **750 hours/month** (enough for always-on)
- **512MB RAM** (plenty for docs)
- **$0/month** ✅

### If You Need More
- **Starter Plan**: $7/month per service
- **Pro Plan**: $25/month per service
- Docs likely fine on free tier

## Management Workflow

### For Team Members

1. **Edit docs locally**:
   ```bash
   cd docs
   npm install
   npm run dev
   # Edit files in docs/pages/
   ```

2. **Test changes**: View at `http://localhost:3001`

3. **Commit and push**:
   ```bash
   git add docs/
   git commit -m "docs: Update API documentation"
   git push
   ```

4. **Auto-deploy**: Render automatically deploys on push to main

### For You (Admin)

1. **Review PRs**: Team members create PRs for doc changes
2. **Merge to main**: Triggers automatic deployment
3. **Monitor**: Check Render dashboard for deployment status

## File Structure

```
ElacityLabsWeb/
├── docs/                    # Documentation
│   ├── pages/              # All docs (MDX files)
│   ├── package.json        # Docs dependencies
│   └── next.config.mjs     # Next.js config
├── client/                 # Main web app
├── server/                 # API
└── render.yaml            # Render config (includes docs)
```

## Next Steps

1. **Decide on deployment**: Render service (recommended) or Vercel/Netlify
2. **Update render.yaml**: Add docs service config
3. **Test locally**: Make sure `npm run build` works in docs/
4. **Deploy**: Push to GitHub, Render will handle the rest
5. **Share with team**: Give them the CONTRIBUTING.md guide

## Questions?

- **Q: Will this slow down my main app deployments?**  
  A: No, docs deploy separately as its own service.

- **Q: Can I deploy docs to a subdomain?**  
  A: Yes, use `docs.elacitylabs.com` as custom domain.

- **Q: What if I want to move docs to separate repo later?**  
  A: Easy - just copy `/docs` folder to new repo and update deployment.

- **Q: How much will this cost?**  
  A: Free on Render's free tier (3 services allowed).

