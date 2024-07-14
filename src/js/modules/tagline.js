function tagline() {
    const closeTagLineBtn = document.querySelector('.tagline__close');
    const tagline = document.querySelector('.tagline');
    closeTagLineBtn.addEventListener('click', () => {
        tagline.remove();
    });
}
export default tagline;