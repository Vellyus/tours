//Function expression to select elements
function selectElement(s)
{
  return document.querySelector(s)
}

//Open menu on click
selectElement('.open').addEventListener('click', () =>
{
  selectElement('.nav-list').classList.add('active')
})
//Close menu on click
selectElement('.close').addEventListener('click', () =>
{
  selectElement('.nav-list').classList.remove('active')
})
