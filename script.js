// function setupActiveToggle(selector) {
//   const items = document.querySelectorAll(selector);
//   items.forEach(item => {
//     item.addEventListener('click', () => {
//       items.forEach(i => i.classList.remove('active'));
//       item.classList.add('active');
//     });
//   });
// }

// setupActiveToggle('.sidebar-left li');
// setupActiveToggle('.sidebar-right li');

const contentSections = document.querySelectorAll('.content-section');
const sidebarRightLinks = document.querySelectorAll('.sidebar-right a');

sidebarRightLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn hành vi mặc định cuộn tới id

    // Lấy id từ href, vd "#phan3" => "phan3"
    const targetId = this.getAttribute('href').substring(1);

    // Ẩn hết các section
    contentSections.forEach(section => {
      section.classList.remove('active');
    });

    // Hiện section đúng id
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add('active');
    }

    // Cập nhật active cho mục lục bên phải
    sidebarRightLinks.forEach(a => a.parentElement.classList.remove('active'));
    this.parentElement.classList.add('active');

    // Có thể cập nhật URL mà không reload trang
    history.replaceState(null, null, `#${targetId}`);
  });
});
