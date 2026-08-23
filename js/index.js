        // 1. 스크롤 시 헤더에 그림자 및 배경 불투명도 추가 효과
        const header = document.getElementById('header');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // 2. 요소가 화면에 보일 때 부드럽게 나타나는 애니메이션 (Intersection Observer)
        // fade-in 클래스가 있는 모든 요소를 찾아서 애니메이션 적용
        const fadeElements = document.querySelectorAll('.fade-in');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15 // 요소가 15% 보일 때 실행
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); // visible 클래스를 추가하여 애니메이션 실행
                    observer.unobserve(entry.target); // 한 번 실행된 후에는 감지 중단
                }
            });
        }, observerOptions);

        fadeElements.forEach(el => {
            observer.observe(el);
        });
