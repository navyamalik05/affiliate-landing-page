# 📚 Complete Deployment Guide
## Affiliate Landing Page on GitHub Pages

---

## 🎯 OVERVIEW

This guide will take you through every step to:
1. Create a GitHub account
2. Upload your landing page files
3. Publish your site live for free
4. (Optional) Connect a custom domain

**Total Time: ~15-30 minutes**

---

## 📝 STEP 1: CREATE GITHUB ACCOUNT

### 1.1 Sign Up
1. Open your browser and go to **www.github.com**
2. Click the **"Sign up"** button (top right)
3. Enter your email address
4. Click **"Continue"**
5. Create a password (use something secure)
6. Click **"Continue"**
7. Enter your username (this will be part of your website URL)
   - Example: `https://yourusername.github.io`
8. Choose "I prefer not to say" for marketing emails
9. Click **"Continue"**
10. Complete the CAPTCHA puzzle
11. Click **"Create account"**
12. **Verify your email** - Check your inbox and click the GitHub link

### 1.2 Set Up Your Profile (Optional but Recommended)
- Click your avatar (top right) → Settings
- Add a profile photo
- Add bio: "Affiliate Marketer | Digital Entrepreneur"
- Click "Save changes"

---

## 🏗️ STEP 2: CREATE REPOSITORY

### 2.1 Create New Repository
1. Once logged in, click the **"+"** icon (top right)
2. Select **"New repository"**
3. Fill in the form:

   | Field | Value |
   |-------|-------|
   | Repository name | `affiliate-landing-page` |
   | Description | `Professional affiliate marketing landing page` |
   | Public/Private | **PUBLIC** (important!) |
   | Add README | Keep UNCHECKED |

4. Click **"Create repository"**

### 2.2 You Should Now See
- A page with "Quick setup" instructions
- An empty repository
- A "Code" button
- Instructions for different upload methods

---

## 📤 STEP 3: UPLOAD FILES (CHOOSE ONE METHOD)

### METHOD A: Web Upload (Easiest - No Technical Skills Needed)

**Perfect for:** Beginners, quick setup

#### 3A.1 Upload Process
1. On your repository page, click **"Add file"** button
2. Click **"Upload files"**
3. A file picker will open
4. Select your files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `.gitignore`

   **Tip:** You can drag and drop or click to browse

5. After selecting files, scroll down
6. In the "Commit changes" section:
   - Leave default message: "Add files via upload"
   - Or type: "Initial commit: affiliate landing page"
7. Click **"Commit changes"**

**Done!** Your files are now on GitHub. Proceed to Step 4.

---

### METHOD B: Using Git (Command Line)

**Perfect for:** Developers, future updates, version control

#### 3B.1 Install Git

**For Windows:**
1. Go to **www.git-scm.com/download/win**
2. Click the download link
3. Run the installer
4. Click through with default settings
5. Finish installation

**For Mac:**
1. Open Terminal (Applications → Utilities → Terminal)
2. Copy and paste:
   ```bash
   brew install git
   ```
3. Press Enter

**For Linux (Ubuntu/Debian):**
1. Open Terminal
2. Copy and paste:
   ```bash
   sudo apt-get update
   sudo apt-get install git
   ```
3. Press Enter

#### 3B.2 Configure Git

Open Terminal/Command Prompt and run:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

#### 3B.3 Upload Your Files

In Terminal/Command Prompt:

```bash
# 1. Navigate to your project folder
cd /path/to/affiliate-landing-page

# 2. Initialize git repository
git init

# 3. Add all files
git add .

# 4. Commit files
git commit -m "Initial commit: affiliate landing page"

# 5. Add remote repository (replace USERNAME and REPO_NAME)
git remote add origin https://github.com/USERNAME/affiliate-landing-page.git

# 6. Rename branch to main
git branch -M main

# 7. Push to GitHub
git push -u origin main
```

**Note:** You may be asked to log in. Use your GitHub username and password (or personal access token).

---

## 🚀 STEP 4: ENABLE GITHUB PAGES

### 4.1 Configure GitHub Pages

1. Go to your repository
2. Click **"Settings"** (top menu, right side)
3. In the left sidebar, click **"Pages"** (scroll down)
4. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select "main" and "/(root)"
5. Click **"Save"**
6. Wait 1-2 minutes (you'll see a notice when it's done)

### 4.2 Get Your URL

After deployment:
1. Go back to repository homepage
2. On the right side, you'll see "Deployments"
3. Click **"Deployments"**
4. Click **"github-pages"**
5. You'll see your live URL:
   ```
   https://yourusername.github.io/affiliate-landing-page
   ```

**🎉 Your site is now LIVE!**

### 4.3 Test Your Site
1. Open the URL in your browser
2. Check that all sections load properly
3. Test buttons and navigation
4. Check on mobile (right-click → Inspect → Mobile view)

---

## ✏️ STEP 5: CUSTOMIZE YOUR LANDING PAGE

### 5.1 Change Content (Web Upload Method)

1. On your repository, find the file you want to edit
2. Click the file (e.g., `index.html`)
3. Click the **"Edit"** button (pencil icon)
4. Make your changes
5. Scroll down to "Commit changes"
6. Enter commit message (e.g., "Update hero title")
7. Click **"Commit changes"**
8. Changes go live automatically in ~1 minute

### 5.2 Change Content (Git Method)

```bash
# 1. Edit files locally with your text editor
# 2. Save changes
# 3. Open Terminal in your project folder

git add .
git commit -m "Updated hero section and testimonials"
git push

# Changes go live in ~1 minute
```

### 5.3 Common Customizations

**Add Your Video (YouTube):**
Find this line in `index.html`:
```html
<p>Your Video Goes Here</p>
```

Replace with:
```html
<iframe width="100%" height="600" 
    src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
    frameborder="0" allowfullscreen></iframe>
```

Get YOUR_VIDEO_ID from your YouTube URL: `youtube.com/watch?v=YOUR_VIDEO_ID`

**Change Title:**
In `index.html`, find:
```html
<h1 class="hero-title">Transform Your Income...
```

Replace text with your mom's message

**Change Colors:**
In `styles.css`, find:
```css
:root {
    --primary-yellow: #ffc107;
```

Replace `#ffc107` with a new color code from [colorpicker.com](https://www.colorpicker.com)

---

## 🎯 STEP 6: OPTIONAL - CUSTOM DOMAIN

### 6.1 Buy a Domain

1. Go to [Namecheap.com](https://www.namecheap.com) or [Google Domains](https://domains.google)
2. Search your desired domain (e.g., `yourmom-affiliate.com`)
3. Add to cart and purchase (~$10-15/year)
4. Note your domain name for next step

### 6.2 Connect Domain to GitHub

1. On your domain provider's dashboard, find "DNS Settings"
2. Update your DNS records (ask provider for help if needed)
3. Go to your GitHub repository Settings → Pages
4. Under "Custom domain", enter your domain
5. Click "Save"
6. Wait 24 hours for DNS propagation

---

## 🛠️ STEP 7: FUTURE UPDATES (After Initial Setup)

### Add New Sections

1. Open `index.html` in your text editor
2. Find where you want to add content
3. Copy a similar section (e.g., benefit-card)
4. Modify text and styling
5. Save and push to GitHub

### Update Testimonials

In `index.html`, find testimonials section:
```html
<div class="testimonial-card">
    <div class="stars">⭐⭐⭐⭐⭐</div>
    <p>"Update this quote..."</p>
    <strong>Update Name</strong>
```

Replace text and names as needed.

---

## 📊 STEP 8: MONITOR YOUR SITE

### Track Visitors (Google Analytics)

1. Go to [analytics.google.com](https://analytics.google.com)
2. Sign in with Google account
3. Click "Create" → "Web"
4. Enter your site details
5. Copy the tracking ID
6. In `index.html`, add before `</head>`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_TRACKING_ID');
   </script>
   ```

Now you can see visitor stats in Google Analytics dashboard.

---

## 🚨 TROUBLESHOOTING

### My site shows 404 error

**Solution:**
1. Check Settings → Pages
2. Ensure source is set to "Deploy from a branch"
3. Ensure branch is "main"
4. Wait 2-3 minutes and refresh

### Changes aren't showing

**Solution:**
1. Clear browser cache (Ctrl+Shift+Del)
2. Hard refresh (Ctrl+Shift+R)
3. Wait 1-2 minutes for deployment
4. Check GitHub Actions for any errors

### Can't see my custom domain

**Solution:**
1. DNS changes take 24 hours
2. Check your domain provider settings
3. Use online DNS checker: [mxtoolbox.com](https://mxtoolbox.com)

### Git push not working

**Solution:**
```bash
# Check if connected properly
git remote -v

# If not connected, add remote
git remote add origin https://github.com/USERNAME/affiliate-landing-page.git

# Try push again
git push -u origin main
```

---

## ✅ FINAL CHECKLIST

- [ ] GitHub account created
- [ ] Repository created (and public)
- [ ] Files uploaded
- [ ] GitHub Pages enabled
- [ ] Site is live at `yourusername.github.io/affiliate-landing-page`
- [ ] Content customized with your mom's details
- [ ] Video placeholder ready
- [ ] (Optional) Custom domain connected
- [ ] (Optional) Analytics set up

---

## 🎉 CONGRATULATIONS!

Your affiliate marketing landing page is now live! Share the URL with:
- Email lists
- Social media
- Marketing campaigns
- Affiliate networks

**Your URL:**
```
https://yourusername.github.io/affiliate-landing-page
```

---

## 💡 NEXT STEPS

1. **Add more content** - Keep building sections that convert
2. **Track analytics** - Monitor visitor behavior
3. **Get feedback** - Share with friends
4. **List on platforms** - Join affiliate networks
5. **Optimize** - Update based on performance data

---

## 🆘 NEED HELP?

- GitHub Help: [docs.github.com](https://docs.github.com)
- GitHub Community Forum: [github.community](https://github.community)
- Stack Overflow: [stackoverflow.com](https://stackoverflow.com)

---

**Good luck with your affiliate marketing business! 🚀**
