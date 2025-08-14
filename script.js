document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    document.getElementById('plan').value = params.get('plan');
    document.getElementById('price').value = params.get('price');
});
