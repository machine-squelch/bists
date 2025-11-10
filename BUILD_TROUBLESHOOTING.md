# Build Troubleshooting Guide

If you're not seeing the `out` folder after running `npm run build`, follow these steps:

## Step 1: Verify You're in the Right Directory

Make sure you're in the project root (where `package.json` is located):

```bash
# Check you're in the right place
ls -la package.json
# Should show: package.json

# If not, navigate to project root
cd /path/to/your/project
```

## Step 2: Clean Install Dependencies

Sometimes dependencies can cause issues. Try a clean install:

```bash
# Remove node_modules and lock file
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install
```

## Step 3: Run the Build

```bash
npm run build
```

**Watch for errors** - The build should show:
- ✓ Compiled successfully
- ✓ Generating static pages (9/9)
- Route (app) with all your pages listed

## Step 4: Check for the `out` Folder

After the build completes, check:

```bash
# List contents of current directory
ls -la

# You should see an 'out' folder
ls -la out/

# Check for HTML files
ls -la out/*.html
ls -la out/about/
```

## Step 5: If Build Fails

### Common Error: "Cannot use output: 'export'"

If you see this error, it means Next.js detected something incompatible with static export. Check:

1. **No API routes** - Static export doesn't support API routes
2. **No server-side features** - All pages must be client-side or static
3. **Check for errors** in the build output

### Common Error: Missing Dependencies

```bash
# Install missing dependencies
npm install

# Try building again
npm run build
```

## Step 6: Verify Next.js Config

Make sure `next.config.js` has:

```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: 'out',
}
```

## Step 7: Check Node.js Version

Next.js 16 requires Node.js 18.17 or later:

```bash
node --version
# Should show v18.17.0 or higher
```

If your version is too old:
- Update Node.js: https://nodejs.org/
- Or use nvm: `nvm install 20 && nvm use 20`

## Step 8: Manual Verification

If the build seems to work but you don't see files:

```bash
# Check if out folder exists (might be hidden)
ls -la | grep out

# Check build output for errors
npm run build 2>&1 | tee build.log

# Check the log file
cat build.log
```

## Step 9: Alternative: Check .gitignore

Make sure `out/` isn't being ignored (it shouldn't be, but check):

```bash
cat .gitignore | grep out
# Should show: /out/ (which is correct - it's ignored in git but should exist locally)
```

## Step 10: Force Rebuild

If nothing works, try a complete clean rebuild:

```bash
# Remove everything
rm -rf node_modules .next out package-lock.json

# Reinstall
npm install

# Build
npm run build

# Check
ls -la out/
```

## Expected Build Output

After a successful build, you should see:

```
out/
├── index.html          ← Homepage
├── about/
│   └── index.html      ← About page
├── services/
│   └── index.html      ← Services page
├── gallery/
│   └── index.html      ← Gallery page
├── resources/
│   └── index.html      ← Resources page
├── book/
│   └── index.html      ← Book page
├── contact/
│   └── index.html      ← Contact page
├── before.png          ← Images
├── after.png
├── gallery-1.png
├── (all other images)
├── _next/              ← Next.js assets
│   └── static/
└── .htaccess           ← Apache config
```

## Still Not Working?

If you've tried everything and still don't see the `out` folder:

1. **Share the build output** - Copy the entire output from `npm run build`
2. **Check for errors** - Look for any red error messages
3. **Verify Next.js version**: `npm list next` (should show 16.0.1)
4. **Try building with verbose output**: `NODE_OPTIONS='--trace-warnings' npm run build`

## Quick Test

To verify your setup works, try this minimal test:

```bash
# Build
npm run build

# Check output exists
test -d out && echo "✓ out folder exists" || echo "✗ out folder missing"

# Check for HTML files
test -f out/index.html && echo "✓ index.html exists" || echo "✗ index.html missing"

# List all HTML files
find out -name "*.html" -type f
```

If all checks pass, your build is working correctly!
