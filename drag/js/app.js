

 let drag2 = document.querySelector('#drag2')
 let ss = document.querySelector('#ss')

 drag2.ondragover = function(e) {
    e.preventDefault()
    this.style.borderStyle = 'dashed'
 }

 drag2.ondragleave = function(e) {
    e.preventDefault()
    this.style.borderStyle = 'solid'
 }



 let items = document.querySelectorAll('.asd')
 let q = items.length;
 ss.innerHTML = q
 for (let item of items){
    item.ondragstart = function(e) {
      e.dataTransfer.setData('param',this.id)  
    }
 }
 
 

 drag2.ondrop = function(e) {
    let id = e.dataTransfer.getData('param')
    let box = document.getElementById(id);
     q--;
     ss.innerHTML = q
    drag2.appendChild(box)
 } 