import { collection, addDoc, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDJcdJ3MqOtsMTZJ-gHhhoqsL-9V2ysnmI",
    authDomain: "sitenoticias-97308.firebaseapp.com",
    databaseURL: "https://sitenoticias-97308-default-rtdb.firebaseio.com",
    projectId: "sitenoticias-97308",
    storageBucket: "sitenoticias-97308.appspot.com",
    messagingSenderId: "413903078330",
    appId: "1:413903078330:web:a54536acdafea9e1675383",
    databaseURL: "https://sitenoticias-97308-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);


function RegisterNews() {

    const [sending, changeSending] = React.useState(false);
    const [noticias, setNoticias] = React.useState([]);
    const [title, changeTitle] = React.useState("");
    const [text, changeText] = React.useState("");

    function SendNew(e) {
        e.preventDefault();
        if (title && text) {
            changeSending(true);
            const noticia = {
                title,
                text
            }
            addDoc(collection(db, "news"), noticia).then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                alert("Enviada!");
                changeText("");
                changeTitle("");
                changeSending(false);
            }).catch(error => console.error("Error adding document: ", error));

            const noticiasAtualizadas = [...noticias, noticia];
            console.log(noticiasAtualizadas);
            setNoticias(noticiasAtualizadas)
        }
        else {
            alert("Erro!");
        }
    }

    <form onSubmit={SendNew} >
        <div>
            <input type="text" id="titleNew" placeholder="Insara o título" value={title} onChange={function getTitle(e) {
                changeTitle(e.target.value)
            }} ></input>
        </div>

        <div>
            <textarea type="text" id="textNew" placeholder="Insara a notícia" value={text} onChange={function getText(e) {
                changeText(e.target.value)
            }} ></textarea>
        </div>

        <div className="button">
            <button type="submit">{sending ? "Enviando..." : "Enviar mensagem"}</button>
        </div>
    </form>

}

export default RegisterNews;