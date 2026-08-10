document.addEventListener('DOMContentLoaded', function () {
    var features = document.querySelectorAll('.feature');
    var steps = document.querySelectorAll('.step');

    var observerOptions = { threshold: 0.2 };

    var fadeObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    features.forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        fadeObserver.observe(el);
    });

    steps.forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateX(20px)';
        el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        fadeObserver.observe(el);
    });

    document.querySelectorAll('.download-btn:not(.disabled)').forEach(function (btn) {
        btn.addEventListener('click', function () {
            this.style.transform = 'scale(0.95)';
            var self = this;
            setTimeout(function () {
                self.style.transform = 'scale(1)';
            }, 150);
        });
    });
});
