const ItemDetail = ({item}) => {
    return (
        <div className="producto">
        <img src={item.imagen} alt={item.nombre} className="producto-imagen" />
        <div className="producto-detalles">
            <h3 className="producto-titulo">{item.nombre}</h3>
            <p className="producto-precio">{item.precio}</p>
            <button className="producto-agregar">AGREGAR</button>
        </div>
    </div>
    )
}


export default ItemDetail;