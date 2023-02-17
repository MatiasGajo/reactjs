import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <div className="contenedor-productos">
        {items.map(item => (
            <div>
            <Item item={item} />
            </div>
))}
        </div>
        )
}


export default ItemList;