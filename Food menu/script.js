const menuItems = document.querySelectorAll(".menu-item-card");

document.querySelector('#breakfastOption').addEventListener('click', function() {
    menuItems.forEach(item => {
        if (item.id !== 'breakfastItem1' && item.id !== 'breakfastItem2'){
            item.style.display = 'none';
        } else {
            item.style.display = 'flex';
        }
    });
});

document.querySelector('#lunchOption').addEventListener('click', function() {
    menuItems.forEach(item => {
        if (item.id !== 'lunchItem1' && item.id !== 'lunchItem2' && item.id !== 'lunchItem3'){
            item.style.display = 'none';
        } else {
            item.style.display = 'flex';
        }
    });
});

document.querySelector('#snacksOption').addEventListener('click', function() {
    menuItems.forEach(item => {
        if (item.id !== 'snacksItem1' && item.id !== 'snacksItem2'){
            item.style.display = 'none';
        } else {
            item.style.display = 'flex';
        }
    });
});

document.querySelector('#dinnerOption').addEventListener('click', function() {
    menuItems.forEach(item => {
        if (item.id !== 'dinnerItem1' && item.id !== 'dinnerItem2'){
            item.style.display = 'none';
        } else {
            item.style.display = 'flex';
        }
    });
});

document.querySelector('#allOption').addEventListener('click', function() {
    menuItems.forEach(item => {
        item.style.display = 'flex';
    });
});
