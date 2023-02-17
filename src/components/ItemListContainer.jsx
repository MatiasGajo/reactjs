import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import ArrayProductos from "./json/productos.json"

const ItemlistContainer = () => {
    const [items, setItems] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? ArrayProductos.filter(item => item.categoria === id) : ArrayProductos);
            },2000);
        })

        promesa.then((respuesta) => {
            setItems(respuesta)
        });
    },[id]);


    return (
        <ItemList items={items} />
    )

}


export default ItemlistContainer;