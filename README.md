# mastorsCDN

**mastorsCDN** is a CSS and JavaScript template repository designed to support front-end development workflows. With ready-to-use styles and essential scripts, **mastorsCDN** offers a reliable foundation for building consistent and responsive user interfaces.

## Installation

Choose one of the following methods to install **mastorsCDN**.

### Clone the Repository

To directly clone this repository, use:
```bash
git clone https://github.com/surajit-singha-sisir/mastorsCDN.git
```

### Direct Include in Head
Include the CSS file in your HTML head:

```html
<link href="https://cdn.jsdelivr.net/npm/mastorscdn@2.0.1/mastors.min.css" rel="stylesheet" integrity="sha512-kPc8hRVLpKhkKA09/FLOFXUR6FhfXl1NxHvUClW9NRdAA0tC0Av7m/XK1yTvrgLB13a1PgybphiYncD2ryRlZg==" crossorigin="anonymous">
<script type="module" src="https://cdn.jsdelivr.net/gh/surajit-singha-sisir/mastorsCDN@v2.0/mastors.js"></script>
```

### Latest Version
Use the latest version. Include the CSS file link in your HTML head:

```html
<link href="https://cdn.jsdelivr.net/npm/mastorscdn@latest/mastors.min.css" rel="stylesheet" integrity="sha512-kPc8hRVLpKhkKA09/FLOFXUR6FhfXl1NxHvUClW9NRdAA0tC0Av7m/XK1yTvrgLB13a1PgybphiYncD2ryRlZg==" crossorigin="anonymous">
```

### Install with npm
To install via npm, run:
```bash
npm install mastorscdn@2.0.1
```

### Install with yarn
To install via yarn, run:
```bash
yarn add mastorscdn@2.0.1
```

### Install with Composer
To install via Composer, use:
```bash
composer require surajit-singha-sisir/mastorscdn@2.0.1
```

### Install with NuGet
For CSS:
```bash
Install-Package mastorscdn@2.0.1
```

### Install with NuGet

To install **mastorsCDN** using NuGet, you can use the following commands:

For CSS:
```bash
Install-Package mastorscdn@2.0.1
```

For SCSS:
```bash
Install-Package mastorscdn@2.0.1.scss
```

@Latest Version of the Package:
```bash
npm install mastorscdn@latest
````

Add SERVE to server.js
```base
// MASTORSCDN SERVE
app.use('/mastorscdn', express.static(path.join(__dirname, 'node_modules/mastorscdn')));
```
ADD to index.html
```base
<!-- MASTORSCDN -->
<link rel="stylesheet" href="/mastorscdn/mastors.min.css" /> <!-- MASTORSCDN CORE-->
<link rel="stylesheet" href="/mastorscdn/mastorsIcons/mastorsIcons.css" /> <!-- MASTORSCDN ICONS LIBRARY-->
<script type="module" src="/mastorscdn/mastors.js"></script> <!-- MASTORSCDN SCRIPT -->
```

### ❤️ MastorsCDN icons 🥳
MastorsCDN also supports icons. You can use the icons on your webpage. For Icon use this stylesheet on the head tag. Most of the icons are added from the **"icomoon.io"** library.
```bash
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/surajit-singha-sisir/mastorsCDN@v1.2/mastorsIcons/mastorsIcons.css">
```
### How to use Icons
If I need to use an icon then use ```m-``` icon-name. 
```bash
<i class="m-facebook"></i>
```
We will publish all the icon documentation later.


### Usage
After installation, you can include **mastorsCDN** in your project as follows:
CSS
Include the CSS file in your HTML head:
```base
<link rel="stylesheet" href="path/to/mastors.min.css">
```

### JavaScript

To include the **mastorsCDN** JavaScript file, add the following line before the closing `</body>` tag in your HTML file:

```html
<script src="path/to/mastors.js"></script>
```
Replace ```path/to/``` with the path where mastorsCDN files are installed in your project.


## Features

- **CSS Templates**: Includes pre-designed styles to build and style common components rapidly.
- **JavaScript Utilities**: Provides essential JavaScript functions for DOM manipulation, event handling, and more.
- **Responsive Design**: Built-in support for responsive layouts, compatible across various screen sizes and devices.

## File Structure

Below is a basic structure of the repository:

```base
mastorsCDN/
├── mastors.min.css
├── mastors.js
└── README.md
```
## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. **Fork the repository**: Click on the "Fork" button at the top right of the repository page to create your copy of the project.
2. **Create a new branch**: Use a descriptive name for your branch, such as `feature/new-feature` or `bugfix/fix-issue`.
   ```bash
   git checkout -b your-branch-name
   ```
3. **Make your changes**: Implement the feature or fix the bug you want to address.
4. **Commit your changes**: Use clear and concise commit messages.
   ```bash
   git commit -m "Add a brief description of your changes"
   ```
5. **Push to your branch**: Upload your changes to your forked repository.
   ```bash
   git push origin your-branch-name
   ```
6. **Submit a pull request**: Go to the original repository where you want to contribute and create a pull request, explaining the changes you made.

Please ensure your code follows the project's coding style and includes any necessary documentation to facilitate the review process.

Thank you for considering contributing to **mastorsCDN**!


