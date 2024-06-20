
const showMenu = (event) => {
  const elem = document.querySelector('#menu-polozky')
  if(elem.classList.contains('show')){
   elem.classList.remove('show');
}
   else {
   elem.classList.add('show');
  };

}

document.querySelector('#menu-tlacitko').addEventListener('click', showMenu)

