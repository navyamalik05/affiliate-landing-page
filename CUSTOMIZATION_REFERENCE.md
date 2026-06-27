# 🎨 Customization Reference Guide

Quick reference for editing your landing page without needing to know code deeply.

---

## 📝 HTML CUSTOMIZATION (index.html)

### 1. Change Main Brand Name

**Find this line (around line 18):**
```html
<span class="logo-text">💼 AffiliateHub</span>
```

**Change to:**
```html
<span class="logo-text">👑 Your Mom's Name</span>
```

### 2. Change Hero Title

**Find (around line 55):**
```html
<h1 class="hero-title">Transform Your Income<br><span class="highlight">Through Affiliate Marketing</span></h1>
```

**Change to:**
```html
<h1 class="hero-title">Your Custom Headline<br><span class="highlight">Your Sub-Headline Here</span></h1>
```

### 3. Change Hero Description

**Find (around line 56):**
```html
<p class="hero-subtitle">Learn the proven strategies...</p>
```

**Change to:**
```html
<p class="hero-subtitle">Your custom description goes here</p>
```

### 4. Add/Change Video

**Find (around line 77):**
```html
<div class="video-placeholder">
    <div class="video-icon">▶</div>
    <p>Your Video Goes Here</p>
```

**Replace entire section with:**

**For YouTube video:**
```html
<iframe width="100%" height="600" 
    src="https://www.youtube.com/embed/VIDEO_ID_HERE" 
    frameborder="0" allowfullscreen></iframe>
```

**For uploaded MP4:**
```html
<video width="100%" height="auto" controls>
    <source src="your-video-file.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

### 5. Change Statistics

**Find (around line 67):**
```html
<div class="stat">
    <h3>1000+</h3>
    <p>Happy Affiliates</p>
</div>
```

**Edit the numbers and text to match your stats.**

### 6. Change Benefit Cards

**Find (around line 107):**
```html
<div class="benefit-card">
    <div class="benefit-icon">💰</div>
    <h3>Passive Income</h3>
    <p>Earn money 24/7...</p>
</div>
```

**Change:**
- Icon emoji (💰 can be any emoji: 🚀 ⭐ 📱 etc.)
- Title (Passive Income)
- Description text

### 7. Add/Remove Benefit Cards

To **remove** a card, delete the entire `<div class="benefit-card">...</div>` section.

To **add** a new one, copy an existing card and paste it before the closing `</div>` of the benefits-grid.

### 8. Change Testimonials

**Find (around line 220):**
```html
<div class="testimonial-card">
    <div class="stars">⭐⭐⭐⭐⭐</div>
    <p>"I went from zero to $5,000 a month..."</p>
    <div class="testimonial-author">
        <strong>Sarah Johnson</strong>
        <span>Digital Marketer</span>
    </div>
</div>
```

**Edit:**
- Quote text (between `<p>` tags)
- Author name (between `<strong>` tags)
- Author title (between `<span>` tags)

### 9. Change Features List

**Find (around line 295):**
```html
<div class="feature-item">
    <span class="feature-check">✓</span>
    <span>Complete Video Training Course</span>
</div>
```

**Just edit the text in the second `<span>` tag.**

### 10. Change Contact Info

**Find (around line 360):**
```html
<div class="footer-section">
    <h4>Follow</h4>
    <div class="social-links">
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
```

**Change `href="#"` to your social media URLs:**
```html
<a href="https://facebook.com/yourprofile">Facebook</a>
<a href="https://instagram.com/yourprofile">Instagram</a>
<a href="https://youtube.com/yourprofile">YouTube</a>
<a href="https://tiktok.com/@yourprofile">TikTok</a>
```

---

## 🎨 CSS CUSTOMIZATION (styles.css)

### 1. Change Primary Color (Yellow)

**Find this section (around line 8-15):**
```css
:root {
    --primary-yellow: #ffc107;
    --secondary-yellow: #ffeb3b;
```

**Change to your color code:**
```css
:root {
    --primary-yellow: #FF6B35;  /* New color */
    --secondary-yellow: #FF8C5A;  /* Lighter shade */
```

**Find colors:**
- Google: "color picker tool"
- Websites: colorpicker.com, color-hex.com
- Examples:
  - Red: `#e74c3c`
  - Blue: `#3498db`
  - Green: `#27ae60`
  - Purple: `#9b59b6`
  - Orange: `#f39c12`

### 2. Change Black Shade

**Find (around line 9):**
```css
--primary-black: #1a1a1a;
--secondary-black: #2d2d2d;
```

**Make lighter (more gray) or darker (more black):**
```css
--primary-black: #0f0f0f;  /* Darker black */
--secondary-black: #1a1a1a;
```

### 3. Change Font Size

**Find in hero section (around line 250):**
```css
.hero-title {
    font-size: 56px;
}
```

**Change 56px to:**
- Smaller: `42px` or `48px`
- Larger: `64px` or `72px`

### 4. Change Button Style

**Find (around line 67):**
```css
.btn {
    padding: 12px 30px;
    border-radius: 5px;
}
```

**Edit:**
- `padding`: Space inside button (first number = top/bottom, second = left/right)
- `border-radius`: Corners (0 = square, 10 = rounder, 25 = pill shape)

### 5. Change Section Spacing

**Find (around line 293):**
```css
.benefits {
    padding: 80px 0;
}
```

**Change 80px to:**
- Less space: `40px 0` or `50px 0`
- More space: `100px 0` or `120px 0`

### 6. Change Animation Speed

**Find (around line 60):**
```css
--transition: all 0.3s ease;
```

**Change 0.3s to:**
- Slower: `0.5s` or `0.8s`
- Faster: `0.1s` or `0.2s`

### 7. Add Box Shadow (Make things pop)

**Find any card section:**
```css
.benefit-card {
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
```

**Shadow syntax:** `x-offset y-offset blur-radius color`

---

## 💻 JAVASCRIPT CUSTOMIZATION (script.js)

### 1. Change Button Behavior

**Find (around line 80):**
```javascript
ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
        console.log('CTA Button clicked');
    });
});
```

**Change action:**
```javascript
button.addEventListener('click', function() {
    window.location.href = 'https://yourlink.com';  // Go to a page
    // OR
    alert('Thanks for clicking!');  // Show a message
    // OR
    window.open('https://link.com');  // Open in new tab
});
```

### 2. Disable Animations (For slower devices)

**Find (around line 40):**
```javascript
entry.target.style.animation = 'slideUp 0.6s ease-out forwards';
```

**Comment it out:**
```javascript
// entry.target.style.animation = 'slideUp 0.6s ease-out forwards';
```

### 3. Change Scroll Speed

**In HTML, change smooth scroll behavior:**
```html
<html style="scroll-behavior: smooth;">
```

To:
```html
<html style="scroll-behavior: auto;">  <!-- Instant scroll -->
```

### 4. Add Click Counter

**Add to script.js:**
```javascript
let clickCount = 0;
const buttons = document.querySelectorAll('.btn-primary');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        clickCount++;
        console.log('Button clicked ' + clickCount + ' times');
        // Send to analytics
    });
});
```

---

## 🎯 COMMON CUSTOMIZATION COMBOS

### Make It More Professional
1. Change yellow to dark blue (`#001d3d`)
2. Remove emojis from benefits
3. Use serif font in titles
4. Add company logo

### Make It More Fun
1. Keep yellow but add orange accent (`#ff6b35`)
2. Use bigger emojis
3. Add more testimonials
4. Use casual language

### Make It More Corporate
1. Change to black and white with gold accents
2. Minimize emojis
3. Add team bios section
4. More detailed feature descriptions

---

## ⚙️ BEFORE & AFTER EXAMPLES

### Example 1: Hero Section

**Before:**
```html
<h1 class="hero-title">Transform Your Income<br>
    <span class="highlight">Through Affiliate Marketing</span>
</h1>
<p class="hero-subtitle">Learn the proven strategies to earn passive income...</p>
```

**After (Mom's Real Business):**
```html
<h1 class="hero-title">Start Your Affiliate Journey<br>
    <span class="highlight">With Expert Guidance</span>
</h1>
<p class="hero-subtitle">I've helped 500+ people earn their first $1,000 in affiliate commissions. 
Here's how you can too.</p>
```

### Example 2: Color Scheme

**Before (Black & Yellow):**
```css
--primary-yellow: #ffc107;
--primary-black: #1a1a1a;
```

**After (Dark Purple & Gold):**
```css
--primary-yellow: #d4af37;  /* Gold */
--primary-black: #2d1b4e;   /* Dark purple */
```

### Example 3: Feature List

**Before (Generic):**
```html
<span>Complete Video Training Course</span>
<span>Niche Selection Guide</span>
<span>Content Calendar Templates</span>
```

**After (Personal):**
```html
<span>My personal secrets that made me $50k/month</span>
<span>Done-for-you email sequences</span>
<span>Access to my exclusive affiliate network list</span>
```

---

## 🚀 EDITING WORKFLOW

1. **Make small changes** - Edit one section at a time
2. **Save locally** - Always keep a backup
3. **Test in browser** - Open file to check
4. **Upload to GitHub** - Commit with clear message
5. **Check live site** - Wait 1-2 minutes and refresh
6. **Ask for feedback** - Share with friends

---

## 💡 TIPS & TRICKS

- **Use consistent colors**: Pick 2-3 colors max
- **White space matters**: Don't cram too much text
- **Mobile first**: Always test on phone
- **Keep it simple**: Fewer sections = higher conversion
- **Update often**: Fresh content ranks better
- **Use real testimonials**: Fake reviews hurt trust

---

## 🎯 WHAT CONVERTS BEST

- Strong headline (your unique angle)
- Real video testimonial (builds trust)
- Clear benefits (not features)
- Multiple CTAs (at least 3 buttons)
- Social proof (numbers, testimonials)
- Money-back guarantee
- Urgency (limited time offers)
- Personal touch (your story)

---

## 📞 QUICK EDIT SUMMARY

| Want to Change | File | Around Line |
|---|---|---|
| Brand name | index.html | 18 |
| Hero title | index.html | 55 |
| Benefits | index.html | 107 |
| Testimonials | index.html | 220 |
| Colors | styles.css | 8-15 |
| Font sizes | styles.css | 250+ |
| Buttons | styles.css | 67+ |
| Video | index.html | 77 |

---

**Happy customizing! 🎉**
