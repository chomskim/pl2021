// sort btn
const sortBtn = document.querySelector('.sort-btn')
let isSort = true
console.log(JSON.stringify(sortBtn))
sortBtn.addEventListener('click', function () {
  console.log(`${sortBtn.textContent}  clicked`)
  sortBtn.textContent = isSort ? 'retry' : 'sort'
  isSort = !isSort
})
