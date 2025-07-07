// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="intro.html">Introduction</a></li><li class="chapter-item expanded affix "><li class="part-title">Serial Performance Optimization</li><li class="chapter-item expanded "><a href="serial.html"><strong aria-hidden="true">1.</strong> Serial Performance</a></li><li class="chapter-item expanded "><a href="principles.html"><strong aria-hidden="true">2.</strong> The Three Principles</a></li><li class="chapter-item expanded "><a href="methodologies.html"><strong aria-hidden="true">3.</strong> The Eight Methodologies</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="batching.html"><strong aria-hidden="true">3.1.</strong> Batching</a></li><li class="chapter-item expanded "><a href="caching.html"><strong aria-hidden="true">3.2.</strong> Caching</a></li><li class="chapter-item expanded "><a href="precomputing.html"><strong aria-hidden="true">3.3.</strong> Precomputing</a></li><li class="chapter-item expanded "><a href="deferring.html"><strong aria-hidden="true">3.4.</strong> Deferring</a></li><li class="chapter-item expanded "><a href="relaxation.html"><strong aria-hidden="true">3.5.</strong> Relaxation</a></li><li class="chapter-item expanded "><a href="context.html"><strong aria-hidden="true">3.6.</strong> Contextualization</a></li><li class="chapter-item expanded "><a href="hardware.html"><strong aria-hidden="true">3.7.</strong> Hardware</a></li><li class="chapter-item expanded "><a href="layering.html"><strong aria-hidden="true">3.8.</strong> Layering</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">Using with GPT</li><li class="chapter-item expanded "><a href="sysgpt.html"><strong aria-hidden="true">4.</strong> SysGPT</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="use.html"><strong aria-hidden="true">4.1.</strong> How to Use</a></li></ol></li><li class="chapter-item expanded "><a href="contributors.html">Contributors</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
