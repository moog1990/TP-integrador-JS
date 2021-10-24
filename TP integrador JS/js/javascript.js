let entradas
let categoria
let valorEntrada=200

const cantEntradas=document.querySelector('#cantidad')
cantEntradas.addEventListener ('click', function (evento){
      entradas= cantEntradas.value
      console.log(entradas)
      return entradas
})

   
const categorias = document.querySelector ('select')
categorias.addEventListener ('change', function (evento){
      categoria = categorias.value
      console.log(categoria)
      return categoria
})


let valor = (cantidad,descuento) => cantidad * (valorEntrada - valorEntrada * descuento /100)

const botonResumen = document.querySelector ('#resumen')
const parrafo = document.querySelector ('#pagar')
botonResumen.addEventListener ('click', function(evento) {
      let precio = valor(entradas, categoria)
      parrafo.textContent =`Total a pagar: \$ ${precio}`
})

const botonBorrar = document.querySelector ('#borrar')
botonBorrar.addEventListener ('click', function(evento) {
      parrafo.textContent ="Total a pagar: $ "
})

