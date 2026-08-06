/* ==========================================
   INTERACTIVE REVEAL & FILTERING SCRIPT
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Task Search and Dynamic Filter System
    const searchInput = document.getElementById('taskSearchInput');
    const filterChips = document.querySelectorAll('.filter-chip');
    const taskCards = document.querySelectorAll('.task-card');
    const taskRows = document.querySelectorAll('.task-row');
    const taskCountBadge = document.getElementById('taskCountDisplay');

    let currentFilter = 'all';
    let searchQuery = '';

    function applyFilters() {
        let visibleCount = 0;

        const items = taskCards.length > 0 ? taskCards : taskRows;

        items.forEach((item) => {
            const isCompleted = item.dataset.status === 'completed';
            const title = (item.dataset.title || '').toLowerCase();
            const desc = (item.dataset.description || '').toLowerCase();

            let matchesFilter = true;
            if (currentFilter === 'pending' && isCompleted) matchesFilter = false;
            if (currentFilter === 'completed' && !isCompleted) matchesFilter = false;

            let matchesSearch = true;
            if (searchQuery) {
                matchesSearch = title.includes(searchQuery) || desc.includes(searchQuery);
            }

            if (matchesFilter && matchesSearch) {
                item.style.display = '';
                item.style.animation = 'revealUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards';
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
        });

        if (taskCountBadge) {
            taskCountBadge.textContent = `${visibleCount} item${visibleCount !== 1 ? 's' : ''}`;
        }
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            applyFilters();
        });
    }

    filterChips.forEach((chip) => {
        chip.addEventListener('click', () => {
            filterChips.forEach((c) => c.classList.remove('active'));
            chip.classList.add('active');
            currentFilter = chip.dataset.filter || 'all';
            applyFilters();
        });
    });

    // 2. IntersectionObserver for Reveal Animations on Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-init');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-reveal]').forEach((el) => {
        revealObserver.observe(el);
    });
});
