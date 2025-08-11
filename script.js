// Sidebar Left
document.querySelectorAll('.sidebar-left li').forEach(li => {
  li.addEventListener('click', () => {
    // Bỏ active trong sidebar-left
    document.querySelectorAll('.sidebar-left li').forEach(item => {
      item.classList.remove('active');
    });
    // Thêm active vào mục vừa click
    li.classList.add('active');
  });
});

// Sidebar Right
document.querySelectorAll('.sidebar-right li').forEach(li => {
  li.addEventListener('click', () => {
    // Bỏ active trong sidebar-right
    document.querySelectorAll('.sidebar-right li').forEach(item => {
      item.classList.remove('active');
    });
    // Thêm active vào mục vừa click
    li.classList.add('active');
  });
});

