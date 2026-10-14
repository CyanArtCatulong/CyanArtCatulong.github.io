const GITHUB_USERNAME = "cyanartcatulong";

document.addEventListener("DOMContentLoaded", () => {
    updateGitHubLink();
    loadProjects();
    loadGitHubRepos();
    setupContactForm();
    setupBackToTop();
    startTypingEffect();
});

// Sync GitHub link in contact section
function updateGitHubLink() {
    const link = document.getElementById("github-link");
    if (link) {
        link.href = `https://github.com/${GITHUB_USERNAME}`;
        link.textContent = `github.com/${GITHUB_USERNAME}`;
    }
}

// 1. Load Projects from data/projects.json
async function loadProjects() {
    const container = document.getElementById("projects-container");
    try {
        const response = await fetch("data/projects.json");
        if (!response.ok) throw new Error("Could not load projects data.");
        const projects = await response.json();

        container.innerHTML = projects.map(p => `
            <div class="project-card">
                <div>
                    <img src="${p.screenshot}" alt="${p.title}">
                    <h3>${p.title}</h3>
                    <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;">${p.description}</p>
                    <p style="margin-top: 0.5rem; font-size: 0.85rem;"><strong>Role:</strong> ${p.role}</p>
                    <div class="tags">
                        ${p.technologies.map(tech => `<span class="tag">${tech}</span>`).join("")}
                    </div>
                </div>
                <a href="${p.link}" target="_blank" class="btn btn-secondary" style="text-align: center; margin-top: 1rem;">View Code</a>
            </div>
        `).join("");
    } catch (error) {
        console.error("Error loading projects:", error);
        container.innerHTML = `<p style="color: #ef4444;">Failed to load local JSON projects.</p>`;
    }
}

// 2. Fetch Repositories from GitHub REST API
async function loadGitHubRepos() {
    const container = document.getElementById("github-repos");
    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=5`);
        if (!response.ok) throw new Error("GitHub API request failed.");
        const repos = await response.json();

        if (repos.length === 0) {
            container.innerHTML = `<p>No public repositories found for user '${GITHUB_USERNAME}'.</p>`;
            return;
        }

        container.innerHTML = repos.map(repo => `
            <div class="repo-card">
                <div>
                    <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                    <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;">${repo.description || "No description provided."}</p>
                </div>
                <p style="margin-top: 1rem; font-size: 0.85rem; color: var(--text-muted);">
                    <strong>Primary Language:</strong> ${repo.language || "N/A"}
                </p>
            </div>
        `).join("");
    } catch (error) {
        console.error("Error loading GitHub repos:", error);
        container.innerHTML = `<p style="color: #ef4444;">GitHub repositories list is currently unavailable.</p>`;
    }
}

// 3. Contact Form Submission Handling
function setupContactForm() {
    const form = document.getElementById("contact-form");
    const feedback = document.getElementById("form-feedback");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            feedback.style.color = "#ef4444";
            feedback.textContent = "Please fill in all fields.";
            return;
        }

        feedback.style.color = "#10b981";
        feedback.textContent = `Thank you, ${name}! Your message was successfully sent.`;
        
        form.reset();
    });
}

// 4. Back To Top Floating Button
function setupBackToTop() {
    const topBtn = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// 5. Custom Feature: Typing Effect
function startTypingEffect() {
    const text = "Aspiring Software Engineer | Web Developer | Problem Solver";
    const target = document.getElementById("typing-text");
    let index = 0;

    function type() {
        if (index < text.length) {
            target.textContent += text.charAt(index);
            index++;
            setTimeout(type, 70);
        }
    }
    type();
}
