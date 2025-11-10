# Manual Deployment to DreamHost

Step-by-step instructions to manually deploy your Next.js site to DreamHost.

## Prerequisites

1. **FTP Client** - You'll need an FTP client. Options:
   - **FileZilla** (Free, recommended): https://filezilla-project.org/
   - **Cyberduck** (Free): https://cyberduck.io/
   - **WinSCP** (Windows, Free): https://winscp.net/
   - Or use DreamHost's web-based file manager

2. **FTP Credentials** from DreamHost:
   - FTP Server/Host
   - FTP Username
   - FTP Password
   - Deploy Directory Path

## Step 1: Get Your FTP Information from DreamHost

1. Log into your DreamHost panel: https://panel.dreamhost.com/
2. Go to **FTP Users & Files**
3. Find or create an FTP user for your domain
4. Note down:
   - **FTP Server**: Usually `ftp.yourdomain.com` or `yourdomain.com`
   - **FTP Username**: Your FTP username
   - **FTP Password**: Your FTP password
   - **Home Directory**: Usually `/home/username/yourdomain.com/` or `/home/username/yourdomain.com/public_html/`

## Step 2: Build Your Site Locally

Open your terminal/command prompt in the project directory and run:

```bash
# Install dependencies (if not already done)
npm install

# Build the static site
npm run build
```

This will create an `out/` directory with all your static files.

## Step 3: Connect to DreamHost via FTP

### Using FileZilla:

1. **Open FileZilla**
2. **Enter your FTP details** in the top bar:
   - **Host**: `ftp.yourdomain.com` (or your FTP server)
   - **Username**: Your FTP username
   - **Password**: Your FTP password
   - **Port**: `21` (or `22` for SFTP)
3. Click **Quickconnect**

### Using DreamHost Web File Manager:

1. Log into DreamHost panel
2. Go to **FTP Users & Files**
3. Click **Manage** next to your FTP user
4. Click **WebFTP** to open the file manager

## Step 4: Navigate to Your Website Directory

On the **remote side** (DreamHost server), navigate to:
- `/home/username/yourdomain.com/public_html/` (for main domain)
- Or `/home/username/yourdomain.com/` (if that's your web root)

**Important**: This is where your website files should be uploaded.

## Step 5: Upload Files

### Using FileZilla:

1. **Left side (Local)**: Navigate to your project's `out/` folder
   - This contains: `index.html`, `about/`, `services/`, images, etc.

2. **Right side (Remote)**: Make sure you're in your website's public_html directory

3. **Select all files** in the `out/` folder:
   - Select `index.html` and all folders/files
   - Drag and drop from left to right, OR
   - Right-click → Upload

4. **Wait for upload to complete** - This may take a few minutes depending on file sizes

### Using DreamHost Web File Manager:

1. Navigate to your website directory
2. Click **Upload**
3. Select all files from your local `out/` folder
4. Wait for upload to complete

## Step 6: Verify File Structure

After uploading, your DreamHost directory should look like:

```
public_html/
├── index.html
├── about/
│   └── index.html
├── services/
│   └── index.html
├── gallery/
│   └── index.html
├── resources/
│   └── index.html
├── book/
│   └── index.html
├── contact/
│   └── index.html
├── before.png
├── after.png
├── gallery-1.png
├── gallery-2.gif
├── (all other images)
├── _next/
│   └── (Next.js static assets)
└── .htaccess
```

## Step 7: Set Correct File Permissions

Some files may need specific permissions:

1. **Folders/Directories**: `755` or `775`
2. **HTML files**: `644`
3. **Images**: `644`
4. **.htaccess**: `644`

In FileZilla:
- Right-click file/folder → **File permissions**
- Set permissions and click **OK**

## Step 8: Test Your Website

1. Open your browser
2. Go to: `https://yourdomain.com` (or `http://` if SSL not set up)
3. Test all pages:
   - Home: `/`
   - About: `/about/`
   - Services: `/services/`
   - Gallery: `/gallery/`
   - Resources: `/resources/`
   - Book: `/book/`
   - Contact: `/contact/`

## Troubleshooting

### Images Not Loading

- Check that all files from `public/` folder were uploaded
- Verify image paths in browser console (F12)
- Make sure images are in the root of `public_html/`, not in a subfolder

### Pages Show 404

- Verify `index.html` files exist in each page directory
- Check that `.htaccess` file was uploaded
- Ensure file permissions are correct

### CSS/JavaScript Not Loading

- Check browser console (F12) for errors
- Verify `_next/` folder was uploaded completely
- Clear browser cache and try again

### FTP Connection Issues

- Verify FTP server address (try with/without `ftp.` prefix)
- Check if you need to use SFTP (port 22) instead of FTP (port 21)
- Verify username and password are correct
- Check if DreamHost requires passive mode (enable in FTP client settings)

## Quick Reference Commands

```bash
# Build the site
npm run build

# Test locally before deploying
npx serve out

# View what will be deployed
ls -la out/
```

## Updating Your Site

When you make changes:

1. **Build again**: `npm run build`
2. **Delete old files** on DreamHost (or upload new ones to replace)
3. **Upload new files** from `out/` folder
4. **Clear browser cache** and test

## Tips

- **Keep a backup**: Before uploading, download current files from DreamHost as backup
- **Test locally first**: Run `npx serve out` to test the build before uploading
- **Use SFTP if possible**: More secure than regular FTP
- **Upload in chunks**: If connection is slow, upload folders one at a time
