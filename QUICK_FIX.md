# Quick Fix for Build Issues

## Problem 1: Node.js Version Too Old
You have Node.js 16.0.1, but Next.js 16 requires **Node.js 18.17 or higher**.

## Problem 2: Multiple Lock Files
npm is detecting multiple package manager lock files.

## Quick Fix Steps

### Step 1: Update Node.js

**Download and install Node.js 20 LTS:**
- Go to: https://nodejs.org/
- Download the **LTS version** (20.x)
- Install it
- **Restart your terminal/command prompt**

**Verify:**
```bash
node --version
# Should show: v20.x.x or v18.17.0+
```

### Step 2: Remove All Lock Files

```bash
# Remove all lock files
rm -f package-lock.json yarn.lock pnpm-lock.yaml

# Or use the npm script:
npm run clean-lock
```

### Step 3: Clean Install

```bash
# Remove node_modules
rm -rf node_modules

# Fresh install
npm install
```

### Step 4: Build

```bash
npm run build
```

### Step 5: Verify

```bash
# Check for out folder
ls -la out/

# Check for HTML files
ls -la out/*.html
ls -la out/about/
```

## All-in-One Fix (Copy/Paste)

```bash
# 1. Remove all lock files
rm -f package-lock.json yarn.lock pnpm-lock.yaml

# 2. Remove node_modules
rm -rf node_modules

# 3. Install fresh
npm install

# 4. Build
npm run build

# 5. Check output
ls -la out/
```

## If Node.js Update Doesn't Work

**On Mac/Linux, use NVM:**
```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart terminal, then:
nvm install 20
nvm use 20
```

**On Windows:**
1. Download: https://github.com/coreybutler/nvm-windows/releases
2. Install nvm-windows
3. Open new terminal:
```bash
nvm install 20
nvm use 20
```

## Still Having Issues?

After updating Node.js and removing lock files, if build still fails:

1. Share the **full error message** from `npm run build`
2. Verify Node version: `node --version`
3. Verify npm version: `npm --version`
