document.themeForm.addEventListener('change', (e) => {
  const changeThemeColor = e.target.value;
  document.body.className = changeThemeColor;
});
