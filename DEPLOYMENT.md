# Deploy to Vercel

## Quick Deploy (Recommended)

### Option 1: Deploy via GitHub (Easiest)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository: `Vickyrrrrrr/website-processing`
   - Vercel will auto-detect Astro settings
   - Click "Deploy"

3. **Done!** Your site will be live at: `https://website-processing.vercel.app` (or custom domain)

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? Select your account
   - Link to existing project? **No**
   - Project name: `website-processing` (or your choice)
   - Directory: `./` (press Enter)
   - Override settings? **No**

4. **Deploy to Production:**
   ```bash
   vercel --prod
   ```

## Your GitHub Repository

Your repo is already set up at:
**https://github.com/Vickyrrrrrr/website-processing**

## Environment Variables (Optional)

If you need any environment variables, add them in Vercel Dashboard:
- Go to Project Settings → Environment Variables
- Add any PUBLIC_* variables you need

## Custom Domain (Optional)

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

## Deployment Status

Once deployed, you'll get:
- **Production URL**: `https://your-project.vercel.app`
- **Auto-deployments**: Every push to `main` branch
- **Preview URLs**: For pull requests
- **Analytics**: In Vercel dashboard

## Build Settings

The project is configured with:
- **Framework**: Astro
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Node Version**: 18.x (or later)

## Troubleshooting

If build fails:
1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Make sure `astro.config.mjs` is properly configured
4. Check that all environment variables are set

## Local Testing Before Deploy

```bash
# Build the project
npm run build

# Preview the build locally
npm run preview
```

This will run the production build locally to verify everything works.

## Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Astro Deployment Guide](https://docs.astro.build/en/guides/deploy/vercel/)
