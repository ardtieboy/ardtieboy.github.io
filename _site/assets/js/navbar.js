$(function () {
  // Sidebar toggle behavior
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar, #content, #social-icons, #profile-pic').toggleClass('active');
  });
});