document.addEventListener('mousemove', function(e) {
    const highlight = document.getElementById('highlight');
    // Adjust the position of the highlight div to be centered on the mouse
    highlight.style.left = (e.pageX - 25) + 'px'; // 25 is half the width of the highlight div
    highlight.style.top = (e.pageY - 25) + 'px'; // 25 is half the height of the highlight div
    
    // const overflow = document.getElementById('overflow');
    // overflow.style.left = (e.pageX - 25) + 'px'; 
    // overflow.style.top = (e.pageY - 25) + 'px'; 
});