import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchPostData, fetchTagsData } from '../../services/api';
import Banner from '../../components/banner/banner';
import './style.css';
import ArtigoPost from '../../components/artigosPost/artigosPost';

function PostDetails() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetchPostData(postId)
      .then((data) => {
        setPost(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [postId]);

  useEffect(() => {
    fetchTagsData()
      .then((tagsData) => {
        setTags(tagsData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!post) {
    return <p>Carregando...</p>;
  }

  return (
    <>
    <Banner />
      <div className='detailsMain'>
        <div>
          <div className='detailsBox'>
            <div className='detailsBoxMap'>
                <img src='http://localhost/wordpress/wp-content/uploads/2023/10/Home-Traced.png' />
                <p>Inicio</p>
                <img src='http://localhost/wordpress/wp-content/uploads/2023/10/Subtract.png' />
                <p>Inovação e Tecnologia</p>
                <img src='http://localhost/wordpress/wp-content/uploads/2023/10/Subtract.png' />
                <p>Inovação na Indústria Alagoana...</p>
              </div>

              <div className='detailsTag'>
                {tags.map((tag) => (
                  <div className='detailsTag-text' key={tag.id} style={{ backgroundColor: tag.id === 9 ? 'red' : 'blue' }}>
                    <h3>{tag.name}</h3>
                  </div>
                ))}
              </div>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </div>
        </div>

        <ArtigoPost />

      </div>
    </>
  );
}

export default PostDetails;
