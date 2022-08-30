const button = document.getElementById('#navbarDropdown');
console.log(button); // 👉️ null

// ⛔️ Cannot set properties of null (setting 'onclick')
button.onclick = function click() {
  console.log('Button clicked');
};
