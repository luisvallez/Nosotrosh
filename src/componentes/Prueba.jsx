import "../stylesheet/estilitos.css";

function Prueba({ foto, texto }) {

    return (
        <div className="contenedor">
            <img className="imagen foto" src={require(`../fotos/f-${foto}.jpg`)} alt={foto} draggable="false" />
            <p className="pedo"><em>{texto}</em></p>
        </div>

    );
}

export default Prueba;