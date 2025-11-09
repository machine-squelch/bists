# Deployment Guide for DreamHost

This project is configured to automatically deploy to DreamHost via GitHub Actions when you push to the `main` branch.

## Setup Instructions

### 1. Configure GitHub Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions, and add these secrets:

- **DREAMHOST_FTP_SERVER**: Your DreamHost FTP server (e.g., `ftp.yourdomain.com`)
- **DREAMHOST_FTP_USERNAME**: Your DreamHost FTP username
- **DREAMHOST_FTP_PASSWORD**: Your DreamHost FTP password
- **DREAMHOST_DEPLOY_PATH**: The directory on DreamHost where you want to deploy (e.g., `/home/username/yourdomain.com/public_html` or `/home/username/yourdomain.com/`)

### 2. DreamHost FTP Information

To find your FTP details:
1. Log into your DreamHost panel
2. Go to **FTP Users & Files**
3. Your FTP server is usually: `ftp.yourdomain.com` or `yourdomain.com`
4. Create an FTP user if you haven't already
5. The deploy path is typically: `/home/username/yourdomain.com/public_html/`

### 3. How It Works

1. When you push to `main` branch, GitHub Actions automatically:
   - Builds the Next.js app as a static site
   - Exports all files to the `out/` directory
   - Deploys via FTP to your DreamHost server

2. The workflow runs on every push to `main` or can be triggered manually from the Actions tab

### 4. Manual Deployment

You can also trigger a manual deployment:
1. Go to your GitHub repository
2. Click on **Actions** tab
3. Select **Deploy to DreamHost** workflow
4. Click **Run workflow**

### 5. Troubleshooting

- **Build fails**: Check the Actions tab for error messages
- **FTP connection fails**: Verify your FTP credentials in GitHub Secrets
- **Files not appearing**: Check the deploy path in secrets matches your DreamHost directory
- **Images not loading**: Ensure the `public/` folder files are being deployed (they should be in `out/` after build)

### 6. Local Testing

To test the static export locally:
```bash
npm run build
npx serve out
```

This will build the site and serve it locally so you can verify everything works before deploying.
