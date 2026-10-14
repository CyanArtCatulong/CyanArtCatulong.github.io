# Personal Student Portfolio | Cyan Art Catulong

Welcome to my personal student portfolio website! This repository contains the source code for my dynamic portfolio, built with standard web technologies (HTML5, CSS3, JavaScript ES6+), featuring local JSON data handling, GitHub REST API integration, and hosted via GitHub Pages.

🌐 **Live Website:** [https://cyanartcatulong.github.io](https://cyanartcatulong.github.io)

---

## 📌 Project Overview

This project serves as an interactive online resume and portfolio to showcase my academic projects, skills, career goals, and recent open-source activities on GitHub. 

### Key Features
* **Responsive Navigation:** Sticky navigation bar with smooth scrolling to sections (`#home`, `#about`, `#skills`, `#projects`, `#contact`).
* **Dynamic Projects Loader:** Reads project details from a local `data/projects.json` file and renders project cards dynamically.
* **GitHub REST API Integration:** Fetches and displays the 5 most recently updated public repositories directly from my GitHub profile (`https://api.github.com/users/cyanartcatulong/repos`).
* **Interactive Contact Form:** Form validation for empty fields and valid email addresses with user feedback messages.
* **Custom Interactive Features:** 
  * Animated typing effect for the hero section tagline.
  * "Back to Top" smooth-scrolling floating button.
* **Dark Blue Theme:** Clean, modern CSS styling utilizing custom CSS variables (`:root`) for consistent color themes and typography.

---

## 📂 Repository Structure

```text
cyanartcatulong.github.io/
├── index.html          # Main HTML structure
├── README.md           # Documentation file
├── css/
│   └── style.css       # Custom Dark Blue styling and responsiveness
├── js/
│   └── script.js      # Behavior, DOM manipulation, JSON fetch, & API handling
├── data/
│   └── projects.json   # Local project dataset
└── images/
    └── profile.jpg     # Profile photo asset
