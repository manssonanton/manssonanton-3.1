import React from 'react';
import ScrollForMore from '../Elements/scrollForMore';

function Home() {

    return (
        <section className="home">
            <div className="home-container">
                <div className="front">
                    <div>Artivcel</div>
                    {/* <img className="front-image" src="https://images.unsplash.com/photo-1603993097397-89c963e325c7?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="" /> */}
                </div>
            </div>
            <ScrollForMore />
        </section>
    )
}

export default Home;