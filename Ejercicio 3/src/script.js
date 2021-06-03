// Ejemplo con Vanilla JavaScript 
let title = 'Hola!'
const h1 = document.getElementById('h1')

h1.innerText = title
title = 'Chau!'
h1.innertText = title

// Ejemplo con Vue
const app = new Vue({
  el: '#app',
  
  data () {
    return {
      title: 'Hola Vue!'
    }
  }
})

// Podes descomentar esta linea para cambiar el valor de la propiedad `title`
// app.title = 'Chau Vue!'