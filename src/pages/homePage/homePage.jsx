import React, { useState, useEffect } from 'react';
import { fetchPostData, fetchPageData, fetchTagsData } from '../../services/api';
import Banner from '../../components/banner/banner';
import './style.css';
import { Link } from 'react-router-dom';
import CardBox from '../../components/cardBox/cardBox';

export function HomePage(props) {
  const [postData, setPostData] = useState(null);
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => { 
    fetchPostData(64)
      .then((data) => {
        setPostData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchTagsData()
      .then((tagsData) => {
        setTags(tagsData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function formatDateTimeString(dateTimeString) {
    const date = new Date(dateTimeString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('pt-BR', options);
    return formattedDate;
  }
  
  const dateTimeString = postData?.date;
  const formattedDate = formatDateTimeString(dateTimeString);

  return (
    <>
      <Banner />
      <div className='homeBox'>

        <div className='homeBoxMap'>
          <img src='http://localhost/wordpress/wp-content/uploads/2023/10/Home-Traced.png' />
          <p>Inicio</p>
          <img src='http://localhost/wordpress/wp-content/uploads/2023/10/Subtract.png' />
          <p>Inovação e Tecnologia</p>
        </div>

        <div>
          <div className='post'>
            <h1>Conteúdos em destaque</h1>
            {isLoading ? (
              <p>Carregando...</p>
            ) : postData ? (
              <div className='mainPost'>
                <Link to={`/post/${postData.id}`}>
                    <img id="firtsImage" src=' http://localhost/wordpress/wp-content/uploads/2023/10/Rectangle-10.jpg' />
                </Link>

                <div className='excerpt'>
                    <div className='excerptData'>
                      <img src='http://localhost/wordpress/wp-content/uploads/2023/10/i_schedule_school_date_time.png' />
                      <p>{formattedDate}</p>
                    </div>

                    <Link to={`/post/${postData.id}`}>
                        <h2>{postData.title.rendered}</h2>
                    </Link>
                    <h3 dangerouslySetInnerHTML={{ __html: postData.excerpt.rendered.replace(/<\/?p>/g, '') }}></h3>

                    <Link to={`/post/${postData.id}`}>
                      <button>VER ARTIGO COMPLETO</button>
                    </Link>
                </div>
              </div>
            ) : (
              <p>Nenhum dado disponível.</p>
            )}
          </div>
        </div>

        <CardBox/>
      </div>
    </>
  );
}
