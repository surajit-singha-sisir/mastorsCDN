# Breakpoints Utility Documentation

Modern, accessible breakpoint system for responsive design using mobile-first approach and `em` units.

## 📋 Table of Contents

- [Installation](#installation)
- [Available Breakpoints](#available-breakpoints)
- [SCSS Mixins](#scss-mixins)
- [SCSS Functions](#scss-functions)
- [CSS Utility Classes](#css-utility-classes)
- [Usage Examples](#usage-examples)
- [Best Practices](#best-practices)
- [FAQ](#faq)

---

## 🚀 Installation

### For SCSS Projects

Import the breakpoints utility in your SCSS file:

```scss
@use 'path/to/breakpoints' as *;
```

Or with a custom namespace:

```scss
@use 'path/to/breakpoints' as bp;

// Usage: @include bp.break-up(md) { ... }
```

### For CSS Projects

Link the breakpoints utility CSS file in your HTML:

```html
<link rel="stylesheet" href="path/to/breakpoints.css">
```

Or import in your CSS file:

```css
@import url('path/to/breakpoints.css');
```

---

## 📐 Available Breakpoints

### Core Breakpoints

| Name | Value | Pixels | Use Case |
|------|-------|--------|----------|
| `xs` | `0` | `0px` | Extra small devices (base styles) |
| `sm` | `36em` | `576px` | Small devices (large phones) |
| `md` | `48em` | `768px` | Medium devices (tablets) |
| `lg` | `64em` | `1024px` | Large devices (laptops) |
| `xl` | `75em` | `1200px` | Extra large devices (desktops) |
| `2xl` | `96em` | `1536px` | 2X large devices (large desktops) |

### MASTORSCDN Custom Breakpoints

| Name | Value | Pixels | Use Case |
|------|-------|--------|----------|
| `mobile` | `32.5em` | `520px` | Mobile devices |
| `tablet` | `48em` | `768px` | Tablets |
| `laptop` | `64em` | `1024px` | Laptops |
| `desktop` | `81.25em` | `1300px` | Desktop screens |
| `wide-screen` | `96.25em` | `1540px` | Wide screens |
| `ultra` | `120em` | `1920px` | Ultra-wide/4K displays |

---

## 🛠️ SCSS Mixins

### `breakpoint($size, $type, $orientation)`

Main breakpoint mixin with full control.

**Parameters:**
- `$size` (required): Breakpoint name from `$breakpoints` map
- `$type` (optional): `'min'` (default) or `'max'`
- `$orientation` (optional): `portrait` or `landscape`

**Examples:**

```scss
// Mobile-first (min-width) - Default
.container {
  @include breakpoint(md) { // 768px+
    padding: 2rem;
  }
}

// Desktop-first (max-width)
.header {
  @include breakpoint(lg, 'max') { // 1024px and below
    height: 60px;
  }
}

// With orientation
.gallery {
  @include breakpoint(md, 'min', landscape) { // 768px+ landscape
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

### `break-up($size)`

**Mobile-first shorthand** for `min-width` queries. Applies styles from the breakpoint and up.

```scss
.card {
  padding: 1rem;
  
  @include break-up(md) { // 768px+
    padding: 2rem;
  }
  
  @include break-up(xl) { // 1200px+
    padding: 3rem;
  }
}
```

**Compiles to:**
```css
.card {
  padding: 1rem;
}

@media (min-width: 48em) { /* 768px+ */
  .card {
    padding: 2rem;
  }
}

@media (min-width: 75em) { /* 1200px+ */
  .card {
    padding: 3rem;
  }
}
```

---

### `break-down($size)`

**Desktop-first shorthand** for `max-width` queries. Applies styles up to the breakpoint.

```scss
.sidebar {
  width: 300px;
  
  @include break-down(lg) { // 1024px and below
    width: 250px;
  }
  
  @include break-down(md) { // 768px and below
    width: 100%;
  }
}
```

---

### `break-between($min-size, $max-size)`

Apply styles **between two breakpoints**.

```scss
.banner {
  @include break-between(md, xl) { // 768px to 1200px
    font-size: 2rem;
  }
}
```

**Compiles to:**
```css
@media (min-width: 48em) and (max-width: 75em) {
  .banner {
    font-size: 2rem;
  }
}
```

---

### `break-only($size)`

Apply styles **only within a specific breakpoint range** (from current breakpoint to next breakpoint - 1px).

```scss
.notification {
  @include break-only(md) { // 768px to 1023px only
    position: fixed;
  }
}
```

---

### `custom-breakpoint($width, $type)`

Use **custom width values** not in the predefined breakpoints map.

**Parameters:**
- `$width` (required): Custom width (accepts `em`, `px`, `rem`)
- `$type` (optional): `'min'` (default) or `'max'`

```scss
.special-layout {
  @include custom-breakpoint(50em) { // 800px+
    display: grid;
  }
  
  @include custom-breakpoint(900px, 'max') { // 900px and below
    display: block;
  }
}
```

---

## 📦 SCSS Functions

### `get-breakpoint($size)`

Retrieve the **value** of a breakpoint from the map.

```scss
$tablet-width: get-breakpoint(tablet); // Returns: 48em

.custom-element {
  max-width: $tablet-width;
}
```

**Use cases:**
- Store breakpoint values in variables
- Use in calculations
- Pass to JavaScript via CSS custom properties

```scss
:root {
  --breakpoint-md: #{get-breakpoint(md)};
}
```

---

## 🎨 CSS Utility Classes

The CSS version provides ready-to-use utility classes for responsive design without SCSS compilation.

### Mobile-First Classes (`break-up-*`)

Show elements at breakpoint and above (min-width).

| Class | Breakpoint | Shows At |
|-------|------------|----------|
| `.break-up-xs` | 0px | Always visible |
| `.break-up-sm` | 576px+ | Small devices and up |
| `.break-up-md` | 768px+ | Medium devices and up |
| `.break-up-lg` | 1024px+ | Large devices and up |
| `.break-up-xl` | 1200px+ | Extra large devices and up |
| `.break-up-2xl` | 1536px+ | 2X large devices and up |
| `.break-up-mobile` | 520px+ | Mobile and up |
| `.break-up-tablet` | 768px+ | Tablet and up |
| `.break-up-laptop` | 1024px+ | Laptop and up |
| `.break-up-desktop` | 1300px+ | Desktop and up |
| `.break-up-wide-screen` | 1540px+ | Wide screen and up |
| `.break-up-ultra` | 1920px+ | Ultra-wide and up |

**Example:**
```html
<!-- Hidden on mobile, visible on tablet and up -->
<div class="break-up-tablet">
  Visible on tablets and larger screens
</div>
```

---

### Mobile-First Hide Classes (`hide-up-*`)

Hide elements at breakpoint and above (min-width).

| Class | Breakpoint | Hides At |
|-------|------------|----------|
| `.hide-up-sm` | 576px+ | Hidden from small devices up |
| `.hide-up-md` | 768px+ | Hidden from medium devices up |
| `.hide-up-lg` | 1024px+ | Hidden from large devices up |
| `.hide-up-xl` | 1200px+ | Hidden from XL devices up |
| `.hide-up-2xl` | 1536px+ | Hidden from 2XL devices up |

**Example:**
```html
<!-- Visible on mobile, hidden on tablet and up -->
<button class="hide-up-tablet">Mobile Menu</button>
```

---

### Desktop-First Classes (`break-down-*`)

Show elements at breakpoint and below (max-width).

| Class | Breakpoint | Shows At |
|-------|------------|----------|
| `.break-down-sm` | 576px and below | Small devices and smaller |
| `.break-down-md` | 768px and below | Medium devices and smaller |
| `.break-down-lg` | 1024px and below | Large devices and smaller |
| `.break-down-xl` | 1200px and below | XL devices and smaller |
| `.break-down-2xl` | 1536px and below | 2XL devices and smaller |
| `.break-down-mobile` | 520px and below | Mobile only |
| `.break-down-tablet` | 768px and below | Tablet and smaller |
| `.break-down-laptop` | 1024px and below | Laptop and smaller |
| `.break-down-desktop` | 1300px and below | Desktop and smaller |

**Example:**
```html
<!-- Visible up to 768px, hidden on larger screens -->
<nav class="break-down-tablet">Mobile Navigation</nav>
```

---

### Desktop-First Hide Classes (`hide-down-*`)

Hide elements at breakpoint and below (max-width).

| Class | Breakpoint | Hides At |
|-------|------------|----------|
| `.hide-down-sm` | 576px and below | Hidden on small and smaller |
| `.hide-down-md` | 768px and below | Hidden on medium and smaller |
| `.hide-down-lg` | 1024px and below | Hidden on large and smaller |
| `.hide-down-xl` | 1200px and below | Hidden on XL and smaller |
| `.hide-down-2xl` | 1536px and below | Hidden on 2XL and smaller |

**Example:**
```html
<!-- Hidden on mobile, visible on desktop -->
<aside class="hide-down-laptop">Desktop Sidebar</aside>
```

---

### Breakpoint-Only Classes (`break-only-*`)

Show elements only within a specific breakpoint range.

| Class | Range | Shows Between |
|-------|-------|---------------|
| `.break-only-xs` | 0-575px | Extra small only |
| `.break-only-sm` | 576-767px | Small only |
| `.break-only-md` | 768-1023px | Medium only |
| `.break-only-lg` | 1024-1199px | Large only |
| `.break-only-xl` | 1200-1535px | Extra large only |
| `.break-only-2xl` | 1536px+ | 2X large only |
| `.break-only-mobile` | 520-767px | Mobile range only |
| `.break-only-tablet` | 768-1023px | Tablet range only |
| `.break-only-laptop` | 1024-1299px | Laptop range only |
| `.break-only-desktop` | 1300-1539px | Desktop range only |
| `.break-only-wide-screen` | 1540-1919px | Wide screen range only |
| `.break-only-ultra` | 1920px+ | Ultra-wide only |

**Example:**
```html
<!-- Only visible on tablets (768-1023px) -->
<div class="break-only-tablet">Tablet-specific content</div>
```

---

### Breakpoint-Only Hide Classes (`hide-only-*`)

Hide elements only within a specific breakpoint range.

**Example:**
```html
<!-- Hidden only on tablets, visible everywhere else -->
<div class="hide-only-tablet">Not visible on tablets</div>
```

---

### Orientation Classes

Control visibility based on device orientation.

| Class | Shows When |
|-------|------------|
| `.break-portrait` | Portrait orientation |
| `.break-landscape` | Landscape orientation |
| `.hide-portrait` | Hide in portrait |
| `.hide-landscape` | Hide in landscape |
| `.break-md-landscape` | Medium+ and landscape |
| `.break-lg-portrait` | Large+ and portrait |

**Example:**
```html
<!-- Only visible in landscape mode -->
<div class="break-landscape">
  Landscape-optimized video player
</div>

<!-- Only visible in portrait on tablets+ -->
<div class="break-lg-portrait">
  Portrait sidebar for large screens
</div>
```

---

### Display Type Modifiers

Combine with breakpoint classes to set specific display types.

| Modifier | Display Value |
|----------|---------------|
| `.inline` | `display: inline !important` |
| `.inline-block` | `display: inline-block !important` |
| `.flex` | `display: flex !important` |
| `.grid` | `display: grid !important` |

**Example:**
```html
<!-- Block on mobile, flex on medium+ -->
<div class="break-up-md flex">
  Responsive flex container
</div>

<!-- Block on mobile, grid on large+ -->
<div class="break-up-lg grid">
  Responsive grid container
</div>
```

---

## 💡 Usage Examples

### SCSS: Responsive Typography

```scss
h1 {
  font-size: 1.5rem; // Mobile base
  
  @include break-up(sm) { // 576px+
    font-size: 2rem;
  }
  
  @include break-up(md) { // 768px+
    font-size: 2.5rem;
  }
  
  @include break-up(lg) { // 1024px+
    font-size: 3rem;
  }
}
```

### CSS: Responsive Typography

```html
<h1 class="text-mobile">
  <span class="hide-up-sm">Small Title</span>
  <span class="break-up-sm hide-up-md">Medium Title</span>
  <span class="break-up-md hide-up-lg">Large Title</span>
  <span class="break-up-lg">Extra Large Title</span>
</h1>
```

```css
.text-mobile { font-size: 1.5rem; }
@media (min-width: 36em) { .text-mobile { font-size: 2rem; } }
@media (min-width: 48em) { .text-mobile { font-size: 2.5rem; } }
@media (min-width: 64em) { .text-mobile { font-size: 3rem; } }
```

---

### SCSS: Responsive Grid Layout

```scss
.grid {
  display: grid;
  grid-template-columns: 1fr; // Mobile: 1 column
  gap: 1rem;
  
  @include break-up(sm) { // 576px+
    grid-template-columns: repeat(2, 1fr); // 2 columns
  }
  
  @include break-up(md) { // 768px+
    grid-template-columns: repeat(3, 1fr); // 3 columns
    gap: 2rem;
  }
  
  @include break-up(xl) { // 1200px+
    grid-template-columns: repeat(4, 1fr); // 4 columns
  }
}
```

### CSS: Responsive Grid Layout

```html
<div class="grid-responsive">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
```

```css
.grid-responsive {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 36em) {
  .grid-responsive {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 48em) {
  .grid-responsive {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}

@media (min-width: 75em) {
  .grid-responsive {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

---

### CSS Classes: Navigation Menu

```html
<!-- Mobile menu toggle (hidden on desktop) -->
<button class="menu-toggle hide-up-lg">
  ☰ Menu
</button>

<!-- Navigation (hidden on mobile, visible on desktop) -->
<nav class="main-nav hide-down-lg">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
</nav>

<!-- Mobile navigation drawer -->
<nav class="mobile-nav break-down-lg">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
</nav>
```

---

### CSS Classes: Responsive Sidebar

```html
<div class="layout">
  <!-- Sidebar: full width on mobile, fixed width on desktop -->
  <aside class="sidebar break-up-lg">
    Sidebar content
  </aside>
  
  <!-- Main content -->
  <main class="content">
    Main content
  </main>
</div>
```

```css
.layout {
  display: flex;
  flex-direction: column;
}

.sidebar {
  width: 100%;
  padding: 1rem;
}

@media (min-width: 64em) {
  .layout {
    flex-direction: row;
  }
  
  .sidebar {
    width: 250px;
    position: sticky;
    top: 0;
  }
  
  .content {
    flex: 1;
  }
}
```

---

### SCSS: Container Widths

```scss
.container {
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;
  
  @include break-up(sm) { // 576px+
    max-width: 540px;
  }
  
  @include break-up(md) { // 768px+
    max-width: 720px;
  }
  
  @include break-up(lg) { // 1024px+
    max-width: 960px;
  }
  
  @include break-up(xl) { // 1200px+
    max-width: 1140px;
  }
  
  @include break-up(2xl) { // 1536px+
    max-width: 1320px;
  }
}
```

---

### CSS Classes: Image Gallery

```html
<div class="gallery">
  <!-- Full width on mobile -->
  <img class="gallery-item" src="image1.jpg" alt="Image 1">
  <img class="gallery-item" src="image2.jpg" alt="Image 2">
  <img class="gallery-item" src="image3.jpg" alt="Image 3">
  
  <!-- Only visible on desktop -->
  <img class="gallery-item break-up-xl" src="image4.jpg" alt="Image 4">
</div>
```

```css
.gallery {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}

@media (min-width: 48em) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 75em) {
  .gallery {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

---

### CSS Classes: Responsive Cards

```html
<div class="card-container">
  <!-- Card layout changes based on screen size -->
  <div class="card">
    <img src="thumbnail.jpg" alt="Thumbnail">
    <div class="card-content">
      <h3>Card Title</h3>
      <p>Card description</p>
      
      <!-- Hide details on mobile, show on tablet+ -->
      <div class="card-details break-up-tablet">
        <span>Author</span>
        <span>Date</span>
      </div>
    </div>
  </div>
</div>
```

---

### SCSS: Orientation-Specific Styles

```scss
.video-player {
  aspect-ratio: 16 / 9;
  
  @include breakpoint(md, 'min', landscape) { // 768px+ landscape
    aspect-ratio: 21 / 9;
  }
  
  @include breakpoint(md, 'min', portrait) { // 768px+ portrait
    aspect-ratio: 4 / 3;
  }
}
```

### CSS Classes: Orientation-Specific Styles

```html
<!-- Show ultra-wide video in landscape only -->
<div class="video-container break-md-landscape">
  <video src="ultrawide-video.mp4"></video>
</div>

<!-- Show vertical video in portrait only -->
<div class="video-container hide-landscape">
  <video src="portrait-video.mp4"></video>
</div>
```

---

## ✅ Best Practices

### 1. **Use Mobile-First Approach**

✅ **Good (SCSS):**
```scss
.element {
  font-size: 1rem; // Mobile base
  
  @include break-up(md) {
    font-size: 1.5rem; // Tablet+
  }
}
```

✅ **Good (CSS Classes):**
```html
<div class="element">
  <span class="hide-up-md">Mobile content</span>
  <span class="break-up-md">Desktop content</span>
</div>
```

❌ **Avoid:**
```scss
.element {
  font-size: 1.5rem; // Desktop default
  
  @include break-down(md) {
    font-size: 1rem; // Override for mobile
  }
}
```

---

### 2. **Keep Breakpoint Logic Simple**

✅ **Good:**
```scss
.card {
  @include break-up(md) {
    padding: 2rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
}
```

✅ **Good (CSS Classes):**
```html
<div class="card break-up-md">
  Appears on medium screens and up
</div>
```

❌ **Avoid:**
```scss
.card {
  @include break-up(md) {
    @include break-down(lg) {
      // Nested breakpoints are confusing
      padding: 2rem;
    }
  }
}
```

Use `break-between()` or `break-only-*` instead:
```scss
.card {
  @include break-between(md, lg) {
    padding: 2rem;
  }
}
```

```html
<div class="card break-only-md">
  Only on medium screens
</div>
```

---

### 3. **Consistent Naming**

Choose either **core** (`sm`, `md`, `lg`) or **custom** (`mobile`, `tablet`, `laptop`) naming throughout your project. Don't mix them unnecessarily.

✅ **Good:**
```html
<div class="hide-down-md break-up-lg">Content</div>
```

❌ **Avoid mixing:**
```html
<div class="hide-down-tablet break-up-lg">Content</div>
```

---

### 4. **Don't Overuse Breakpoints**

Not every element needs 5+ breakpoints. Focus on critical layout shifts.

✅ **Good:**
```html
<div class="break-up-tablet">Simple responsive element</div>
```

❌ **Avoid:**
```html
<div class="hide-only-xs break-only-sm hide-only-md break-only-lg">
  Overly complex breakpoint logic
</div>
```

---

### 5. **Combine Classes Wisely**

```html
<!-- Show as flex on medium+, block on mobile -->
<div class="break-up-md flex">
  Flex container
</div>

<!-- Hide on mobile, show as grid on large+ -->
<div class="hide-down-lg break-up-lg grid">
  Grid container
</div>
```

---

### 6. **Test on Real Devices**

`em` units respect user font-size settings. Always test with:
- Default browser settings
- Increased font sizes (accessibility)
- Different devices and orientations

---

## ❓ FAQ

### Why `em` instead of `px`?

**Accessibility:** `em` units respect user's browser font-size settings. If a user increases their font size for readability, breakpoints using `em` will adjust accordingly.

**Conversion:** `1em = 16px` (browser default)

---

### Can I mix SCSS and CSS classes?

Absolutely! You can use SCSS mixins for custom components and CSS utility classes for rapid prototyping:

```html
<!-- CSS utility classes in HTML -->
<div class="break-up-md flex">
  <!-- Custom SCSS-styled component -->
  <div class="custom-component">Content</div>
</div>
```

```scss
.custom-component {
  // Custom styles with SCSS mixins
  @include break-up(lg) {
    padding: 2rem;
  }
}
```

---

### What's the difference between `break-down-md` and `break-up-md`?

- **`break-up-md`**: Shows element at `768px and above` (mobile-first)
- **`break-down-md`**: Shows element at `768px and below` (desktop-first)

---

### Why does the CSS file use `!important`?

Utility classes use `!important` to ensure they override component styles, following the utility-first pattern. This is intentional for maximum flexibility.

---

### Can I customize the breakpoint values?

**For SCSS:** Yes, edit the `$breakpoints` map in the SCSS file.

**For CSS:** You'll need to manually edit the media queries in the CSS file or use CSS custom properties:

```css
:root {
  --breakpoint-custom: 50em;
}

@media (min-width: var(--breakpoint-custom)) {
  .custom-class { display: block; }
}
```

---

### Which approach should I use: SCSS or CSS classes?

| Use SCSS When | Use CSS Classes When |
|---------------|---------------------|
| Building complex, reusable components | Rapid prototyping |
| Need fine-grained control over styles | Simple show/hide functionality |
| Working in a component library | Building utility-first designs |
| Want to avoid inline utility classes | Need quick responsive adjustments |
| Prefer semantic CSS | Prefer utility-first approach |

**Best Practice:** Use both! SCSS for component styling, CSS classes for layout and visibility utilities.

---

### How do I use this with Tailwind CSS?

This system is complementary to Tailwind. You can use:
- **Tailwind** for utility-first styling (`p-4`, `bg-blue-500`)
- **These breakpoint classes** for complex responsive logic

Or, if you prefer Tailwind's approach entirely, use Tailwind's built-in breakpoint utilities instead.

---

### Performance: Does this CSS file bloat my project?

The CSS file is approximately **~15-20KB unminified**. When minified and gzipped, it's **~3-4KB**, which is negligible for most projects.

If you need to reduce file size:
1. Remove unused breakpoint variants (e.g., if you don't use `ultra` or `wide-screen`)
2. Use a CSS purging tool like PurgeCSS
3. Only include the specific breakpoints you need

---

### Can I use these classes with JavaScript?

Yes! You can dynamically add/remove classes:

```javascript
// Show element on tablet and up
element.classList.add('break-up-tablet');

// Hide element on mobile
element.classList.add('hide-down-mobile');

// Toggle responsive behavior
element.classList.toggle('break-only-md');
```

---

### How do I handle print styles?

Add a print media query at the end of your CSS:

```css
@media print {
  .no-print,
  .break-up-lg,
  .hide-down-md {
    display: none !important;
  }
}
```

---

## 🔗 Related Resources

- [MDN: Using Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [W3C: Media Queries Level 4](https://www.w3.org/TR/mediaqueries-4/)
- [CSS-Tricks: A Complete Guide to CSS Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)

---

## 📄 License

Free to use in personal and commercial projects.

## 🤝 Contributing

Found an issue or have a suggestion? Feel free to improve this utility!

---

**Version:** 2.0.0  
**Last Updated:** December 2025  
**Changelog:**
- Added comprehensive CSS utility classes
- Added display type modifiers (flex, grid, inline, inline-block)
- Added orientation-specific classes
- Enhanced documentation with CSS class examples
- Added FAQ for CSS-specific questions