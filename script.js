        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Change navbar background on scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                document.querySelector('.navbar').classList.add('scrolled');
            } else {
                document.querySelector('.navbar').classList.remove('scrolled');
            }
        });

        // Music note animation
        function createMusicNote() {
            const note = document.createElement('div');
            note.classList.add('music-note');
            note.innerHTML = '♪';
            note.style.left = Math.random() * 100 + 'vw';
            note.style.animationDuration = Math.random() * 2 + 3 + 's';
            document.getElementById('music-notes').appendChild(note);

            setTimeout(() => {
                note.remove();
            }, 5000);
        }

        setInterval(createMusicNote, 300);

        // Scroll reveal animation
        const revealElements = document.querySelectorAll('.reveal');

        const revealElementOnScroll = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        };

        const options = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(revealElementOnScroll, options);

        revealElements.forEach((el) => observer.observe(el));
