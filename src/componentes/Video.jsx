import "../stylesheet/estilitos.css";

export default function Videoo({ video, texto }) {
    return (
        <div className="contenedor">
            <video className="imagen foto" src={require(`../videos/${video}.mp4`)} alt={video} draggable="false" controls />
            <p className="pedo"><em>{texto}</em></p>
        </div>

    );
}