var suma = 0;
var contCarro = 0;
var1 = 0;
var2 = 0;
productos = [{
        id: 1,
        Titulo: "ORAL-B",
        Nombre: "Cepillo Dentales Oral B Pro Salud Ultrafino 2un",
        Precio: 208,
        img: '../images/oral-b.jpg',
        categoria: "cuidado"
    },
    {
        id: 2,
        Titulo: "PERPIEL",
        Nombre: "Crema Facial Perpiel Humectante Facial A x 80ml",
        Precio: 674.50,
        img: '../images/perpiel.jpg',
        categoria: "cuidado"
    },
    {
        id: 3,
        Titulo: "BAGOVIT",
        Nombre: "Emulsión Humectante Bagovit Reafirmante Efecto Tensor 200 ml",
        Precio: 650.40,
        img: '../images/bagovit.jpg',
        categoria: "cuidado"
    },
    {
        id: 4,
        Titulo: "BAGOVIT",
        Nombre: "Crema Corporal Bagovit A Ligth Hipoalergénica 50g",
        Precio: 440.40,
        img: '../images/bagovit crema.jpg',
        categoria: "cuidado"
    },
    {
        id: 5,
        Titulo: "BAGOVIT",
        Nombre: "Emulsión Corporal Hidratante Bagovit Efecto Luminoso 200ml",
        Precio: 726.00,
        img: '../images/bagovit emulsion.jpg',
        categoria: "cuidado"
    },
    {
        id: 6,
        Titulo: "DERMAGLOS",
        Nombre: "Protector Solar Dermaglos Fps 30 Emulsión Piel Sensible 250ml",
        Precio: 883.35,
        img: '../images/dermaglos protector.jpg',
        categoria: "cuidado"
    },
    {
        id: 7,
        Titulo: "EVACOPA",
        Nombre: "Copa Menstrual Evacopa Hipoalergénica Uso Continuo",
        Precio: 965.25,
        img: '../images/evacopa.jpg',
        categoria: "cuidado"
    },
    {
        id: 8,
        Titulo: "CICATRICURE",
        Nombre: "Kit Rutina Cicatricure Agua Micelar + Beauty Care + Contorno",
        Precio: 2148.55,
        img: '../images/cicatricure kit.jpg',
        categoria: "cuidado"
    },
    {
        id: 9,
        Titulo: "TRB PHARMA",
        Nombre: "Ultraflex Colágeno Hidrolizado Para Huesos y Articulaciones",
        Precio: 2475.00,
        img: '../images/trb pharma.jpg',
        categoria: "suplemento"
    }, {
        id: 10,
        Titulo: "NATURES BOUNTY",
        Nombre: "Natures Bounty Vitamina C x 100 Tab",
        Precio: 1371.00,
        img: '../images/nature bounty.jpg',
        categoria: "suplemento"
    }, {
        id: 11,
        Titulo: "SIMPLE",
        Nombre: "Bagó Simple Vitalidad Minerales Vitaminas 28 Pastillas Goma",
        Precio: 523.50,
        img: '../images/bago simple.jpg',
        categoria: "suplemento"
    }, {
        id: 12,
        Titulo: "MAKURA",
        Nombre: "Protector Bucal Makura Toka Junior (Hasta 10 Años) C/ Estuche",
        Precio: 900.00,
        img: '../images/makura.jpg',
        categoria: "suplemento"
    }, {
        id: 13,
        Titulo: "BAGO ARCOR",
        Nombre: "Simple Calcio + Vitamina D Bagó Arcor 60 Pastillas",
        Precio: 1004.25,
        img: '../images/bago arcor.jpg',
        categoria: "suplemento"
    }, {
        id: 14,
        Titulo: "ENA",
        Nombre: "Suplemento Dietario Ena Colágeno Sabor Naranja 12g",
        Precio: 172.50,
        img: '../images/ena.jpg',
        categoria: "suplemento"
    }, {
        id: 15,
        Titulo: "CENTRUM",
        Nombre: "Suplemento Vitamínico Centrum Hombre x 60 Comprimidos",
        Precio: 1478.25,
        img: '../images/cemtrum.jpg',
        categoria: "suplemento"
    }, {
        id: 16,
        Titulo: "REDOXON",
        Nombre: "Suplemento Vitamínico Redoxitos Plus 25 Pastillas Masticables",
        Precio: 454.40,
        img: '../images/redoxon suplemento.jpg',
        categoria: "suplemento"
    },
    {
        id: 17,
        Titulo: "AVENO",
        Nombre: "Shampoo Aveno Infantil cabello graso 250 ml",
        Precio: 491.25,
        img: '../images/aveno shampoo.jpg',
        categoria: "bebe"
    }, {
        id: 18,
        Titulo: "BEPANTHEN BABY",
        Nombre: "Pomada Bepanthen Baby Hipoalergénica Protectora 30gr",
        Precio: 297.70,
        img: '../images/bephanten.jpg',
        categoria: "bebe"
    }, {
        id: 19,
        Titulo: "BUSHY",
        Nombre: "Bushi Pezonera Siliconada x 2 Unidades",
        Precio: 754.60,
        img: '../images/bushi.jpg',
        categoria: "bebe"
    }, {
        id: 20,
        Titulo: "PAMPERS",
        Nombre: "Toallitas Húmedas Pampers Aroma Naturaleza 108 Unidades",
        Precio: 491.25,
        img: '../images/pampers.jpg',
        categoria: "bebe"
    }, {
        id: 21,
        Titulo: "PAMPERS",
        Nombre: "Toallitas Húmedas Pampers Recién Nacidos 48 un",
        Precio: 414.00,
        img: '../images/pampers toallitas.jpg',
        categoria: "bebe"
    }, {
        id: 22,
        Titulo: "SAN UP",
        Nombre: "Esterilizador Mamadera Para Microondas San Up Xb 9603",
        Precio: 2324.75,
        img: '../images/san up.jpg',
        categoria: "bebe"
    }, {
        id: 23,
        Titulo: "JOHNSON",
        Nombre: "Shampoo Johnson's Baby Ph Balanceado 400 ml",
        Precio: 479.00,
        img: '../images/shampoo johnson.jpg',
        categoria: "bebe"
    }, {
        id: 24,
        idHtml: 3,
        Titulo: "BABY INNOVATION",
        Nombre: "Chupetes Avent Classic I Love Mamá 6 18m 2un",
        Precio: 1275.30,
        img: '../images/baby chupete.jpg',
        categoria: "bebe"
    },
    {
        id: 25,
        Titulo: "DERMAGLOS",
        Nombre: "Crema Hidratante de Noche Ultra Age + 30 Reparadora",
        Precio: 1903.30,
        img: '../images/dermaglos hidratante.jpg',
        categoria: "dermocosmetica"
    }, {
        id: 26,
        Titulo: "DERMAGLOS",
        Nombre: "Combo Dermaglos Ultra Age + 30 Contorno Ojos + Hidratante Día",
        Precio: 5435.50,
        img: '../images/dermaglos combo.jpg',
        categoria: "dermocosmetica"
    }, {
        id: 27,
        Titulo: "L'OREAL DERMO",
        Nombre: "Kit Loreal Revitalift Día + Ojo + Agua Micelar Garnier",
        Precio: 2589.30,
        img: '../images/loreal dermo.jpg',
        categoria: "dermocosmetica"
    }, {
        id: 28,
        Titulo: "DERMAGLOS",
        Nombre: "Rutina Piel Seca Dermaglos Lociones Rostro",
        Precio: 4837.70,
        img: '../images/dermaglos rutina.jpg',
        categoria: "dermocosmetica"
    }, {
        id: 29,
        Titulo: "DERMAGLOS",
        Nombre: "Crema Hidratante Dermaglos De Día Piel Normal 70gr",
        Precio: 1152.20,
        img: '../images/dermaglos piel normal.jpg',
        categoria: "dermocosmetica"
    }, {
        Titulo: "ASEPXIA",
        id: 30,
        Nombre: "Asepxia Mascarilla Balance Efecto Burbujas x 1 Unidad",
        Precio: 295.00,
        img: '../images/asepxia mascarilla.jpg',
        categoria: "dermocosmetica"
    }, {
        id: 31,
        Titulo: "ACF",
        Nombre: "Acf Máscara Facial Amazing Black Mask",
        Precio: 280.00,
        img: '../images/acf mascara.jpg',
        categoria: "dermocosmetica"
    },
    {
        id: 32,
        Titulo: "NIVEA",
        Nombre: "Crema Facial Nivea Q10 Plus C Día Fps 15 Anti Age Energ 50ml",
        Precio: 839.00,
        img: '../images/nivea facial.jpg',
        categoria: "dermocosmetica"
    },
    {
        id: 33,
        Titulo: "TOMMY HILFIGER",
        Nombre: "Combo Tommy Hilfiger Cologne Men Ed5 50 ml + Body Wash",
        Precio: 8767.52,
        img: '../images/tommy hilfiger combo.jpg',
        categoria: "perfume"
    },
    {
        id: 34,
        Titulo: "CACHAREL",
        Nombre: "Perfume Importado Mujer Cacharel Yes I am Pink Edp",
        Precio: 4992.00,
        img: '../images/cacharel perfume.jpg',
        categoria: "perfume"
    },
    {
        id: 35,
        Titulo: "PEPE JEANS",
        Nombre: "Perfume Pepe Jeans Celebrate For Him Edp 100Ml",
        Precio: 4392.00,
        img: '../images/pepe jeans.jpg',
        categoria: "perfume"
    },
    {
        id: 36,
        Titulo: "DKNY",
        Nombre: "Dkny Be Delicius Edp concentracion de 30ml",
        Precio: 9832.00,
        img: '../images/dkny.jpg',
        categoria: "perfume"
    },
    {
        id: 37,
        Titulo: "TOMMY HILFIGER",
        Nombre: "Set Perfume Tommy Impact 100 ml + Face Moisturizer + Mini 4ml",
        Precio: 11592.00,
        img: '../images/tommy hilfiger set.jpg',
        categoria: "perfume"
    },
    {
        id: 38,
        Titulo: "PEPE JEANS",
        Nombre: "Perfume Pepe Jeans Celebrate For Her Edp 80ml",
        Precio: 3987.00,
        img: '../images/pepe jeans perfume.jpg',
        categoria: "perfume"
    },
    {
        id: 39,
        Titulo: "TOMMY HILFIGER",
        Nombre: "Set Perfume Tommy Impact 50 ml + Hair&Body Wash 100ml",
        Precio: 9752.00,
        img: '../images/tommy hilfiger impact.jpg',
        categoria: "perfume"
    },
    {
        id: 40,
        Titulo: "CACHAREL",
        Nombre: "Cacharel Anais L'original Edt Presentacion 100ml",
        Precio: 7920.00,
        img: '../images/cacharel anais.jpg',
        categoria: "perfume"
    },
]
productosCarritos = [];
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();

});


const productosBebe = document.querySelector('.bebe');
const productosCuidado = document.querySelector('.cuidado');
const productosSuplemento = document.querySelector('.suplemento');
const productosDermo = document.querySelector('.dermocosmetica');
const productosPerfumes = document.querySelector('.perfumes');
const botonCarro = document.querySelector('.btnCarro');
const botonBorrarCarro = document.querySelector('.btnBorrarCarro');

function mostrarProductos() {
    for (const items of productos) {
        const divProductos = document.createElement('div');
        divProductos.classList.add('card');
        const imgProducto = document.createElement("img");
        imgProducto.classList.add("imgProducto");
        imgProducto.src = items.img;
        const titulo = document.createElement("h2");
        titulo.classList.add("titulo");
        titulo.textContent = items.Titulo;
        const nombre = document.createElement("h3");
        nombre.classList.add("nombre");
        nombre.textContent = items.Nombre;
        const precio = document.createElement("h4");
        precio.classList.add("precio");
        precio.textContent = `$ ${items.Precio}`;
        const btnAgregarCarrito = document.createElement("button");
        btnAgregarCarrito.classList.add("btn-carrito");
        btnAgregarCarrito.textContent = "Agregar al Carrito";
        btnAgregarCarrito.onclick = () => {
            agregarCarrito(items.id);
            contCarro = contCarro + 1;
            document.getElementsByClassName("contador").innerHTML = contCarro;


            swal({
                title: "Producto Agregado al Carrito",

                icon: "success",
                button: "OK",
            });
            sumarVentas(items.Precio);
        };
        divProductos.appendChild(imgProducto);
        divProductos.appendChild(titulo);
        divProductos.appendChild(nombre);
        divProductos.appendChild(precio);
        divProductos.appendChild(btnAgregarCarrito);
        switch (items.categoria) {

            case "suplemento":
                productosSuplemento.appendChild(divProductos);
                break;
            case "bebe":
                productosBebe.appendChild(divProductos);
                break;
            case "perfume":
                productosPerfumes.appendChild(divProductos);
                break;
            case "cuidado":
                productosCuidado.appendChild(divProductos);
                break;
            case "dermocosmetica":
                productosDermo.appendChild(divProductos);
                break;

        }
        /*  productosBebe.appendChild(divProductos);
         productosCuidado.appendChild(divProductos);
         productosDermo.appendChild(divProductos);
          productosPerfumes.appendChild(divProductos);*/
        /*  productosSuplemento.appendChild(divProductos);*/

    }
}


function sumarVentas(precio) {
    suma = suma + precio;
}
const guardarLocalmente = (clave, valor) => { localStorage.setItem(clave, valor) }

var productoEncontrado;

function agregarCarrito(id) {
    productoEncontrado = productos.find(productos => productos.id === id);
    productosCarritos.push(productoEncontrado);
    guardarLocalmente("productos", JSON.stringify(productosCarritos));
}
//FUNCION PARA RECUPERAR EL LOCAL STORAGE
recuperarLs = () => {
    let recuperar = JSON.parse(localStorage.getItem("productos"))
    if (recuperar) {
        recuperar.forEach(element => (
            agregarCarrito(element.id)
        ))
    }
}
recuperarLs();

//MODAL CARRITO

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";

    mostrarCarrito();
}
span.onclick = function() {
    modal.style.display = "none";
    location.reload();
}
window.onclick = function(event) {

    (event.target == modal) &&
    (modal.style.display = "none")
}

const divProductos = 0;

function mostrarCarrito() {
    for (const items of productosCarritos) {
        const divProductos = document.createElement('div');
        const nombreCarro = document.createElement("h5");
        nombreCarro.classList.add("nombreCarro");
        nombreCarro.textContent = items.Nombre;
        const precioCarro = document.createElement("h5");
        precioCarro.classList.add("precioCarro");
        precioCarro.textContent = `$ ${items.Precio}`;
        divProductos.appendChild(nombreCarro);
        divProductos.appendChild(precioCarro);
        divProductos.appendChild(btnCarro);
        botonCarro.appendChild(divProductos);
        divProductos.appendChild(btnBorrarCarro);
        botonBorrarCarro.appendChild(divProductos);
    }
}

const btnCarro = document.createElement("button");
btnCarro.classList.add("btn-carro");
btnCarro.textContent = "Comprar Productos";
btnCarro.onclick = () => {
    swal({
            title: "Forma de Pago",

            buttons: ["Efectivo / Débito", "Crédito"],

        })
        .then((contado) => {
            if (contado) {
                suma = suma * 1.21;
                swal(`La suma de los productos del carrito pagando en Crédito es $${suma.toFixed(2)}`, {
                    icon: "success",

                });

            } else {
                swal(`La suma de los productos del carrito pagando en Efectivo / Debito es $${suma.toFixed(2)}`, {
                    icon: "success",
                });
            }
        });
};


const btnBorrarCarro = document.createElement("button");
btnBorrarCarro.classList.add("btn-borrar");
btnBorrarCarro.textContent = "Borrar Productos";
btnBorrarCarro.onclick = () => {
    localStorage.clear();
    location.reload();

};