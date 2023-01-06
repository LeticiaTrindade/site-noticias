import "./style.css";
import React from "react";
import Notice from "../Notice";
import { collection, getDocs, getFirestore } from "firebase/firestore";


function Notices() {
    const [news, setNews] = React.useState([])
    const [page, setPage] = React.useState(1)

    React.useEffect(() => {
        async function fetchNews() {
            try {
                const db = getFirestore();
                const querySnapshot = await getDocs(collection(db, "news"))
                const queryNews = querySnapshot.docs.map(docs => docs.data());
                setNews(queryNews)
            } catch (error) {
                console.error(error)
            }
        }
        fetchNews();
    }, [])

    const currentPage = page * 3
    const newsToRender = news.slice(0, currentPage)
    return (
        <>
            <section className="row">
                {newsToRender.map((noticia, index) => {
                    return (
                        <div className="col-md-4 ">

                            <Notice key={`noticia-${index}`} title={noticia.title} text={noticia.text} />
                        </div>
                    )
                })}
            </section>

            {news.length > currentPage &&
                <div className="pagination">
                    <button id="loadMoreButton" type="button" onClick={() => setPage(page + 1)}>
                        +
                    </button>
                </div>

                
            }
        </>
    );

}

export default Notices;