import { onSnapshot, collection, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from '../firebase';
import AtividadesEspecificas from "../Paginacao";

export default function Materias() {
    const [text, setText] = useState("");
    const [pagina, setPagina] = useState(0);
    const [Materias, setMaterias] = useState([]);
    const [id, setId] = useState("");

    useEffect(
        () => {
            const url = window.location.href
            const res = url.split("?")
            setPagina(res[2])
        },
        []
    )

    useEffect(
        () => {
            const url = window.location.href
            const res = url.split("?")
            setId(res[1])
        },
        []
    )

    useEffect(
        () =>
            onSnapshot(collection(db, "Materias"), (snapshot) =>
                setMaterias(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            ),
        []
    );


    const handleNew = async () => {
        const collectionRef = collection(db, "Materias");
        const payload = { Materia: text }
        await addDoc(collectionRef, payload);
        setText('');
    };



    const LinkPagina = (p, id) => {
        if (p === "1") {
            window.open('http://localhost:3000/Materia/?' + id + '?1', "_self")
        }
    }
    const retornarPagina = () => {
        if (pagina === "1") {
            return <AtividadesEspecificas
                id={id} />
        }
        else {
            return (
                <div className="addMaterias">
                    <div className="InputButton">
                        <input
                            clasName="addMateriasInput"
                            value={text}
                            onChange={e => setText(e.currentTarget.value)}
                        />
                        <button
                            className="buttonAdd"
                            onClick={handleNew}>Adicionar Matéria
                        </button>
                    </div>
                    {Materias.map((materia) => (
                        <div
                            className="boxMaterias"
                            key={materia.id}
                        >
                            <button
                                className="buttonMaterias"
                                onClick={() => LinkPagina("1", materia.Materia)}>{materia.Materia}</button>
                        </div>
                    ))}
                </div>
            )
        }
    }
    return (
        <>
            {retornarPagina()}
        </>
    );
}