import React, { useState, useEffect } from 'react';
import { fetchPost } from '../../services/api';
import './style.css';

function CardBox() {
    const [posts, setPosts] = useState([]);

    function formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString('pt-BR', options);
    }

    function extractImageUrl(content) {
        const imgTagRegex = /<img[^>]+src="([^">]+)"/;
        const match = content.match(imgTagRegex);
        return match ? match[1] : null;
    }

    useEffect(() => {
        fetchPost()
            .then((postData) => {
                setPosts(postData);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className='cardBox-main'>
            {posts.map((post) => {
                if (post.id === 64) {
                    return null;
                }
                const formattedDate = formatDate(post.date);
                const imageUrl = extractImageUrl(post.content.rendered);

                return (
                    <div className='cardBox' key={post.id}>
                        {imageUrl && <img src={imageUrl} />}
                        <div className='cardBox-details'>
                            <div className='cardBox-data'>
                                <p>{formattedDate}</p>
                            </div>
                            <h2>{post.title.rendered}</h2>
                            <p>{post.excerpt.rendered.replace(/<\/?p>/g, '')}</p>

                            <button>VER ARTIGO COMPLETO {'>'}</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default React.memo(CardBox);
