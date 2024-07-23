document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('nav div');
    const contents = document.querySelectorAll('.content');

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // 모든 내용을 숨김
            contents.forEach(content => content.style.display = 'none');

            // 클릭한 항목에 해당하는 내용을 표시
            const contentId = 'content-' + this.id;
            const contentElement = document.getElementById(contentId);
            contentElement.style.display = 'block';

            // 텍스트를 읽어주는 기능 추가
            const textToRead = contentElement.textContent;
            readTextAloud(textToRead);
        });
    });

    function readTextAloud(text) {
        if ('speechSynthesis' in window) {
            const speech = new SpeechSynthesisUtterance(text);
            speech.lang = 'ko-KR'; // 한국어 설정
            window.speechSynthesis.speak(speech);
        } else {
            console.log("이 브라우저는 Web Speech API를 지원하지 않습니다.");
        }
    }
});
