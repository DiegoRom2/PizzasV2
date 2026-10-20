//Esta es la capa donde persisten los datos

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let pizzas = [{ id: 1, nombre:  "Hawaiiana", descripcion: "Jamon y piña"}];
/**
 * Regresa una lista de las pizzas
 * @returns []
 */

export async function obtenerTodasLasPizzasAsync(){
     await sleep(2000) // Simula un retraso de 2 segundo

     return pizzas
}
/**
 * Regresa una pizza por su ID buscado o undefined si no lo encuentra
 * @param {*} id 
 */
export async function obtenerPizzaPorIdAsync(id){
    await sleep(1000) // Simula un retraso de 2 segundos

    const pizza = pizzas.find(x => x.id == id)

    return pizza
}

/**
 * 
 * @param {*} pizza 
 * @returns {int}
 */
export async function agregarPizzaAsync(pizza){
    await sleep(1000)
    pizzas.push(pizza)

    return pizzas.length
}

export async function actualizarPizzaAsync(id, pizza){
    const index = pizzas.findIndex(x => x.id == id)
    if(index == -1)
        return undefined
    pizzas[index].nombre = pizza.nombre
    pizzas[index].descripcion = pizza.descripcion
    
    return pizzas[index]
}

export async function eliminarPizzaAsync(id){
    const index = pizzas.findIndex(x => x.id == id)
    pizzas.splice(index)
}