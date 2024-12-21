
// Event listener for the "Start now" button click
document.querySelector(".cta-btn").addEventListener("click", () => {
    alert("Thank you for choosing our platform! You will be directed to the registration page.");
});

// Change the button color on hover
const ctaButton = document.querySelector(".cta-btn");
ctaButton.addEventListener("mouseover", () => {
    ctaButton.style.backgroundColor = "#FF4500"; // Change color to a lighter orange
});
ctaButton.addEventListener("mouseout", () => {
    ctaButton.style.backgroundColor = "#ff6600"; // Revert to original color
});


document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    const navbarList = document.getElementById("navbar__list");
    const scrollToTopBtn = document.getElementById("scrollToTop");

    // Dynamically create an offensive roster
    sections.forEach((section) => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = `#${section.id}`;
        link.textContent = section.querySelector("h2").textContent;
        link.classList.add("menu__link");
        li.appendChild(link);
        navbarList.appendChild(li);

        // Smooth scrolling feature
        link.addEventListener("click", (e) => {
            e.preventDefault();
            sections.forEach((sec) => sec.classList.remove("focused"));
            document.querySelectorAll(".menu__link").forEach((link) => {
                link.classList.remove("active");
            });
            section.scrollIntoView({ behavior: "smooth" });
            section.classList.add("focused");
            link.classList.add("active");
        });
    });

    // Update active item on hover
    const handleScroll = () => {
        let activeSection = null;
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= window.innerHeight / 4) {
                activeSection = section;
            }
        });

        if (activeSection) {
            sections.forEach((sec) => sec.classList.remove("focused"));
            document.querySelectorAll(".menu__link").forEach((link) => {
                link.classList.remove("active");
            });

            const activeLink = navbarList.querySelector(
                `a[href="#${activeSection.id}"]`
            );
            activeSection.classList.add("focused");
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }

        // Show/hide the back to top button
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    // Call scroll
    window.addEventListener("scroll", handleScroll);

    // Back to top button function
    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        sections.forEach((sec) => sec.classList.remove("focused"));
        document.querySelectorAll(".menu__link").forEach((link) => {
            link.classList.remove("active");
        });
    });
});

