
// cremolasas 
let maracuya = document.querySelector("#submit1");
let fresa = document.querySelector("#submit2");
let mango = document.querySelector("#submit3");
let lucuma = document.querySelector("#submit4");
let leche = document.querySelector("#submit5");
let coco = document.querySelector("#submit6");

// Salchipapas
let clasica  = document.querySelector("#submitsalchi1")
let royale = document.querySelector("#submitsalchi2")
let broaster = document.querySelector("#submitsalchi3")
let bbq = document.querySelector("#submitsalchi4")
let pollipapa = document.querySelector("#submitsalchi5")
let master = document.querySelector("#submitsalchi6")

// pizza

let hawaina = document.querySelector("#submitpizza1") 
let pep = document.querySelector("#submitpizza2")
let ace = document.querySelector("#submitpizza3")

const numero = "51969721673"

maracuya.addEventListener("click", function(){
    let valorMaracuya = document.querySelector("#cantidadCremoMaracuya").value;
    document.getElementById("cantidadCremoMaracuya").value = valorMaracuya;
    console.log(valorMaracuya);
    let nombre = "Maracuya"
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=*_AntojitosMariana_*%0A*Nuevo Pedido*%0A%0A*Quiero Pedir*%20${valorMaracuya}%0A*Cremoladas de*%0A${nombre}`;
    window.open(url);
});
fresa.addEventListener("click", function(){
    let valorFresa = document.querySelector("#cantidadCremoFresa").value;
    document.getElementById("cantidadCremoFresa").value = valorFresa;
    console.log(valorFresa);
    let nombre = "Fresa"
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=*_AntojitosMariana_*%0A*Nuevo Pedido*%0A%0A*Quiero Pedir*%20${valorFresa}%0A*Cremoladas de*%0A${nombre}`;
    window.open(url);
});
mango.addEventListener("click", function(){
    let valorMango = document.querySelector("#cantidadCremoMango").value;
    document.getElementById("cantidadCremoMango").value = valorMango;
    console.log(valorMango);
    let nombre = "Mango"
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=*_AntojitosMariana_*%0A*Nuevo Pedido*%0A%0A*Quiero Pedir*%20${valorMango}%0A*Cremoladas de*%0A${nombre}`;
    window.open(url);
});
lucuma.addEventListener("click", function(){
    let valorLucuma = document.querySelector("#cantidadCremoLucuma").value;
    document.getElementById("cantidadCremoLucuma").value = valorLucuma;
    console.log(valorLucuma);
    let nombre = "Lucuma"
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=*_AntojitosMariana_*%0A*Nuevo Pedido*%0A%0A*Quiero Pedir*%20${valorLucuma}%0A*Cremoladas de*%0A${nombre}`;
    window.open(url);
});
leche.addEventListener("click", function(){
    let valorLeche = document.querySelector("#cantidadCremoLeche").value;
    document.getElementById("cantidadCremoLeche").value = valorLeche;
    console.log(valorLeche);
    let nombre = "Leche"
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=*_AntojitosMariana_*%0A*Nuevo Pedido*%0A%0A*Quiero Pedir*%20${valorLeche}%0A*Cremoladas de*%0A${nombre}`;
    window.open(url);
});
coco.addEventListener("click", function(){
    let valorCoco = document.querySelector("#cantidadCremoCoco").value;
    console.log(valorCoco);
    let nombre = "Coco"
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=*_AntojitosMariana_*%0A*Nuevo Pedido*%0A%0A*Quiero Pedir*%20${valorCoco}%0A*Cremoladas de*%0A${nombre}`;
    window.open(url);
});

// salchipapas

clasica.addEventListener("click", function(){
    let valorClasica = document.querySelector("#cantidadSalchiClasica").value;
    document.getElementById("cantidadSalchiClasica").value = valorClasica;
    console.log(valorClasica);
    let nombre = "Salchipapas Clasicas"
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=*_AntojitosMariana_*%0A*Nuevo Pedido*%0A%0A*Quiero Pedir*%20${valorClasica}%0A${nombre}`;
    window.open(url);
});
royale.addEventListener("click", function(){
    let valorRoyale = document.querySelector("#cantidadSalchiRoyale").value;
    document.getElementById("cantidadSalchiRoyale").value = valorRoyale;
    console.log(valorRoyale);
    let nombre = "Salchipapas Royale"
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=*_AntojitosMariana_*%0A*Nuevo Pedido*%0A%0A*Quiero Pedir*%20${valorRoyale}%0A${nombre}`;
    window.open(url);
});
broaster.addEventListener("click", function(){
    let valorBroaster = document.querySelector("#cantidadSalchiBroaster").value;
    document.getElementById("cantidadSalchiBroaster").value = valorBroaster;
    console.log(valorBroaster);
    let nombre = "Salchipapas con Broaster"
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=*_AntojitosMariana_*%0A*Nuevo Pedido*%0A%0A*Quiero Pedir*%20${valorBroaster}%0A${nombre}`;
    window.open(url);
});
bbq.addEventListener("click", function(){
    let valorBbq = document.querySelector("#cantidadSalchiBbq").value;
    document.getElementById("cantidadSalchiBbq").value = valorBbq;
    console.log(valorBbq);
    let nombre = "Platos de Alitas a la BBQ"
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=*_AntojitosMariana_*%0A*Nuevo Pedido*%0A%0A*Quiero Pedir*%20${valorBbq}%0A${nombre}`;
    window.open(url);
});
pollipapa.addEventListener("click", function(){
    let valorPollipapa = document.querySelector("#cantidadSalchiPolli").value;
    document.getElementById("cantidadSalchiPolli").value = valorPollipapa;
    console.log(valorPollipapa);
    let nombre = "Pollipapas"
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=*_AntojitosMariana_*%0A*Nuevo Pedido*%0A%0A*Quiero Pedir*%20${valorPollipapa}%0A${nombre}`;
    window.open(url);
});
master.addEventListener("click", function(){
    let valorMaster = document.querySelector("#cantidadSalchiMaster").value;
    document.getElementById("cantidadSalchiMaster").value = valorMaster;
    console.log(valorMaster);
    let nombre = "Salchipapas Master"
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=*_AntojitosMariana_*%0A*Nuevo Pedido*%0A%0A*Quiero Pedir*%20${valorMaster}%0A${nombre}`;
    window.open(url);
});

// pizza

hawaina.addEventListener("click", function(){
    let valorHawaiana = document.querySelector("#cantidadPizzasHawa").value;
    document.getElementById("cantidadPizzasHawa").value = valorHawaiana;
    console.log(valorHawaiana);
    let nombre = "Pizzas Hawaiana"
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=*_AntojitosMariana_*%0A*Nuevo Pedido*%0A%0A*Quiero Pedir*%20${valorHawaiana}%0A${nombre}`;
    window.open(url);
});

pep.addEventListener("click", function(){
    let valorPep = document.querySelector("#cantidadPizzasPep").value;
    document.getElementById("cantidadPizzasPep").value = valorPep;
    console.log(valorPep);
    let nombre = "Pizzas de Pepperoni"
      const url = `https://api.whatsapp.com/send?phone=${numero}&text=*_AntojitosMariana_*%0A*Nuevo Pedido*%0A%0A*Quiero Pedir*%20${valorPep}%0A${nombre}`;
    window.open(url);
});
ace.addEventListener("click", function(){
    let valorAce = document.querySelector("#cantidadPizzasAce").value;
    document.getElementById("cantidadPizzasAce").value = valorAce;
    console.log(valorAce);
    let nombre = "Pizzas de Aceitunas"
      const url = `https://api.whatsapp.com/send?phone=${numero}&text=*_AntojitosMariana_*%0A*Nuevo Pedido*%0A%0A*Quiero Pedir*%20${valorAce}%0A${nombre}`;
    window.open(url);
});