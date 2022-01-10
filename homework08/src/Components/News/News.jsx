import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import CircularProgress from '@mui/material/CircularProgress';

import { newsSelector } from "../../Store/news/selectors";
import { handleFetchNewsWithThunk } from "../../Store/news/actions";

import "./News.css"

function News(){
    const dispatch = useDispatch();

    const { news, loading, error } = useSelector(newsSelector);

    const handleNewsData = () => {
        dispatch(handleFetchNewsWithThunk())
    }

    useEffect(() => {
        handleNewsData()
    },[])

    return (
        <div className="news-page">
            <h2>News</h2>
            <button className="refrash-button" onClick={handleNewsData}>Refrash</button>
            <div className="news-content">
                {loading ? <div className="loader"><CircularProgress color="success" /></div> : 
                    error ? <div className="news-error">
                            <h3>Error</h3>
                            <p>Please, refrash this page</p>
                        </div> :
                    news.map((article) => {
                    return <div className="article" key={article.publishedAt}>
                        <h3>{article.title}</h3>
                        <img src={article.urlToImage} alt="article" width="250px" />
                        <p>{article.description}</p>
                    </div>
                    })
                }




                {/* {news.map((article) => {
                    return <div className="article" key={article.publishedAt}>
                    <h3>{article.title}</h3>
                    <img src={article.urlToImage} alt="article" width="250px" />
                    <p>{article.description}</p>
                </div> */}
            {/* })} */}
            </div>
        </div>
    )
}

export default News;