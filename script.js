// 부드럽게 섹션으로 스크롤 이동하는 함수
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (!el) return; // 해당 id가 없으면 그냥 종료

    window.scrollTo({
        top: el.offsetTop - 70, // 헤더 높이만큼 위에서 멈추게
        behavior: "smooth"
    });
}

// "맨 위로" 버튼 가져오기
const backToTopBtn = document.getElementById("backToTop");

// 스크롤될 때마다 실행되는 이벤트
window.addEventListener("scroll", () => {
    if (!backToTopBtn) return;

    // 스크롤이 250px 이상 내려가면 버튼 보이기
    if (window.scrollY > 250) {
        backToTopBtn.style.display = "flex";
    } else {
        backToTopBtn.style.display = "none";
    }
});

// 버튼 클릭 시 맨 위로 부드럽게 이동
if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// 🔹 보너스: 네비게이션 메뉴 a 태그들도 부드럽게 스크롤 연결해주기
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // 기본 동작(바로 점프) 막기
        const targetId = link.getAttribute("href").replace("#", "");
        scrollToSection(targetId);
    });
});
