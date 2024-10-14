import React from 'react';
import logo from '/imagenes/logo.jpg';

function AboutPage() {
    return (
        <>
            <div className='logo2'>
                <img src={logo} alt="logo" />
            </div>
            <div className="parrafo">
                <p><strong>Who we are</strong> <br /><br />
                    At Hosanna Dolls, we are a community passionate about creativity, art, and faith. Our mission is to inspire and bring joy through the creation of personalized dolls that reflect the beauty and diversity of spirituality. Each doll is lovingly and carefully designed to convey values of hope, kindness, and devotion.
                    <br /><br />
                    We are dedicated to offer unique products that are not only cute but also meaningful, serving as a way to connect with faith and the joy of living it every day. We want everyone who receives a Hosanna doll to feel the closeness of God's love and the importance of being a light in the world.
                    <br /><br />
                    At Hosanna Dolls, we believe in the power of art to transform hearts and accompany each person on their spiritual journey. Welcome to our world of faith, creativity, and tenderness!
                </p>
            </div>
        </>
    );
}

export default AboutPage;
