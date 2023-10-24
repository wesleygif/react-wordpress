import React from 'react';
import './style.css';

function ArtigoPost() {
    const artigos = [];

    for (let i = 1; i <= 3; i++) {
        artigos.push(
            <div className='artigoMain' key={i}>
                <div className='artigoBox'>
                    <h2>{i}</h2>
                    <div className='artigoBox-text'>
                        <h3>Educação profissional senai (propaganda)</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus tellus tincidunt condimentum eu.</p>
                        <h4>2 semanas atrás | 3 min de leitura</h4>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='artigoMain-resume'>
             <h1>Outros Artigos</h1>
            {artigos}
        </div>
    );
}

export default ArtigoPost;
