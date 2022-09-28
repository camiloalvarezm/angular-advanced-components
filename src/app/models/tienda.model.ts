export class Tienda {

    tiendaItems: Array<Object>

    constructor() {
        this.tiendaItems = [
            {
                texto: "Elemento 1",
                titulo: "Agua mineral",
                imagen: "agua.png",
                precio: 20
            },
            {
                texto: "Elemento 2",
                titulo: "Papas paquete",
                imagen: "papas.png",
                precio: 12
            },
            {
                texto: "Elemento 3",
                titulo: "Manzana verde",
                imagen: "agua.png",
                precio: 45
            }
        ]
    }
}
