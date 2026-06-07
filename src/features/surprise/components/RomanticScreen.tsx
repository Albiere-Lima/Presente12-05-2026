import React, { useState, useEffect } from 'react';

const myPhotos = [
    'https://placehold.co/600x400/ff4d4d/ffffff?text=Nossa+Primeira+Foto',
    'https://placehold.co/600x400/ff758c/ffffff?text=Aquele+Dia+Especial',
    'https://placehold.co/600x400/ff7eb3/ffffff?text=Eu+e+Você'
];

export function RomanticScreen() {
    const [currentPhoto, setCurrentPhoto] = useState(0);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {

    document.title = "Feliz Dia dos Namorados <3";

    const timer = setTimeout(() => setShowContent(true), 1000);
    return () => clearTimeout(timer);


    }, []);

    const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % myPhotos.length);
    };

    const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev === 0 ? myPhotos.length - 1 : prev - 1));
    };

    return (
        <>
        <div style={{ ...styles.container, opacity: showContent ? 1 : 0 }}>

        Sistema Desbloqueado 🔓❤️

        <p style={styles.message}>
        Camily, o "Desconhecido" aqui na verdade só queria uma desculpa diferente 
        para te surpreender. Você desvendou todos os enigmas, mas a verdade é que 
        você é a única pessoa que tem a senha para o meu coração.
        </p>
        
        <p style={styles.highlightText}>
        Feliz Dia dos Namorados!
        </p>

        {

        }
        <div style={styles.carouselContainer}>
        <img
            src={myPhotos[currentPhoto]}
            alt={`Lembrança ${currentPhoto + 1}`}
            style={styles.image}
        />
        
        <div style={styles.carouselControls}>
            <button onClick={prevPhoto} style={styles.button}>◀</button>
            <span style={styles.counter}>
            {currentPhoto + 1} / {myPhotos.length}
            </span>
            <button onClick={nextPhoto} style={styles.button}>▶</button>
        </div>
        </div>
    </div>
    </>
    );
    }

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)',
        transition: 'opacity 2s ease-in-out', 
        padding: '20px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        padding: '40px 20px',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
        maxWidth: '500px',
        width: '100%',
        textAlign: 'center',
    },
    title: {
        color: '#e0245e',
        fontSize: '28px',
        marginBottom: '20px',
        marginTop: '0',
    },
    message: {
        color: '#4a4a4a',
        fontSize: '16px',
        lineHeight: '1.6',
        marginBottom: '15px',
    },
    highlightText: {
        color: '#e0245e',
        fontSize: '22px',
        fontWeight: 'bold',
        margin: '25px 0',
    },
    carouselContainer: {
        marginTop: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        maxWidth: '400px',
        height: '250px',
        objectFit: 'cover',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
    carouselControls: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '200px',
        marginTop: '15px',
    },
    button: {
        backgroundColor: '#ff758c',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        fontSize: '18px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    },
    counter: {
        color: '#666',
        fontWeight: 'bold',
        fontSize: '14px',
    }
};