const renderProductos = (arrayDeproductos) => {
    let productosHTML = ''
    arrayDeproductos.forEach(Producto => {
        const prod = document.createElement(`div`);
    prod.className=`prod`;
    prod.innerHTML=`
        <img src="${Producto.img}" alt="etiopia">
        <name>${Producto.nombre}</name>
        <des>${Producto.descripcion}</des>
        <price>$${Producto.precio}</price>
        <div class="boton-p">
            <button id="${Producto.nombre}" type="button" class="comp btn btn-dark" href="productos.html">COMPRAR</button>
        </div>
        `
    Allproducts.push(Producto);
    mainproductos.append(prod);
    })
}

fetch('./todoproductos.json')
    .then(response => response.json())
    .then(data => {
        renderProductos(data);
        const Clickbutton = document.querySelectorAll('.comp')
        Clickbutton.forEach(btn => {
            btn.addEventListener('click', AgregarProducto)
        })
    }
    )
    .catch(error => console.log(error))

const Allproducts = [];
let carrito=[];

const mainproductos = document.querySelector(`#main-p`); 

const AgregarProducto = (e) =>{
    const productoElegido = e.target.getAttribute(`id`);
    const producto = Allproducts.find((Producto) => Producto.nombre == productoElegido);
    carrito.push(producto);
    console.log(carrito);
    const numero = document.querySelector(`.productoscarrito`);
    numero.innerHTML=`${carrito.length}`
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto agregado al carrito',
        showConfirmButton: false,
        timer: 1500
    })
}
const botonesCompra = document.querySelectorAll('.comp')
botonesCompra.forEach((botonCompra) => {
    botonCompra.addEventListener('click',AgregarProducto)
})

function confirmarcompra(){
    Swal.fire({
        title: '¿Seguro que quiere confirmar la compra?',
        text: "No podrá cancelarla una vez que acepte",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Compra exitosa',
            'Muchas Gracias',
            'success'
          )
        }
      })
}

const botonconfirmacion = document.querySelectorAll('.confirm')
botonconfirmacion.forEach((botonconfirmacion) => {
    botonconfirmacion.addEventListener('click',confirmarcompra)
})



/*    (ESTA FUNCIÓNN LA PONDRÉ CUANDO AGREGUE EL CARRITO DE COMPRA CON LA IMAGEN, EL CONTADOR Y LA LISTA DE PRODUCTOS)
function EliminarProducto()
{
    let item= prompt("Indique que número de la lista desea eliminar")
    carrito.splice(item);
}
*/



/* (ESTO TAMBIÉN LO COMENTO POR QUE IRIA CON LA PARTE DE EL PAGO QUE TODAVÍA NO DESARROLLO EN HTML Y CSS)
let total=0;
for (let i=0; i=10; i++){ 
    let respuesta= prompt("¿Quiere agregar un producto al carrito? (si/no)");
    
    if(respuesta=="si"){
        AgregarProducto();
        total= total + parseInt(this.precio);
        console.log(carrito);
        alert("El total de su compra es: $" + parseInt(total));
    }
    else{
        break;
    }
}

let resp=prompt("¿Quiere eliminar algun producto del carrito? (si/no)");
if(resp=="si"){
    EliminarProducto();
    console.log(carrito);
    alert("Se elimino del carrito:" + this.tipo);
}

let respueta2= prompt("¿Posee cupón de descuento?");

if(respueta2=="si"){
    total = total*0.75;
}

let respueta3= prompt("¿Como desea abonar? 1-Efectivo  2-Tarjeta  3-Mercado Pago");

switch(respueta3){
    case "1":
        alert("Eligio pago en efectivo");
        alert("El total a pagar es: $" + parseInt(total));
    break;

    case "2":
        alert("Eligio pago con tarjeta");
        let cuotas=prompt("¿En cuantas cuotas lo abonara?");
        switch(cuotas){
            case "1":
                alert("Total a pagar por mes: $" + parseInt(total));
            break;
            case "6":
                total=(total*1.075)/6;
                alert("Total a pagar por mes: $" + parseInt(total));
            break;
            case "12":
                total=(total*1.14)/12;
                alert("Total a pagar por mes: $" + parseInt(total));
            break;
        }
    break;

    case "3":
        alert("Eligio pago con Mercado Pago");
        alert("El total a pagar es: $" + parseInt(total));
    break;

    default:

    break;
}
*/