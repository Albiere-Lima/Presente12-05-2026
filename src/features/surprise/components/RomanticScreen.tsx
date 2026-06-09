import React, { useState, useEffect } from 'react';



const myPhotos: string[] = [
    "./public/fotos/1.jpg",
    "./public/fotos/2.jpg",
    "./public/fotos/3.jpg",
    "./public/fotos/4.jpg",
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
        if (myPhotos.length === 0) return;
        setCurrentPhoto((prev) => (prev + 1) % myPhotos.length);
    };

    const prevPhoto = () => {
        if (myPhotos.length === 0) return;
        setCurrentPhoto((prev) => (prev === 0 ? myPhotos.length - 1 : prev - 1));
    };

    const hasPhotos = myPhotos.length > 0;

    return (
        <>
            <div style={{ ...styles.title12}}>
                <h1>Sistema Desbloqueado 🔓❤️</h1>
            </div>
            <div style={{ ...styles.container, opacity: showContent ? 1 : 0 }}>

                <h3 style={styles.message}>
                    Camily, o "Desconhecido" aqui na verdade só queria uma desculpa diferente 
                    para te surpreender. Você desvendou todos os enigmas, mas a verdade é que 
                    você é a única pessoa que tem a senha para o meu coração.
                </h3>
                
                <h2 style={styles.highlightText}>
                    Feliz Dia dos Namorados!
                </h2>

                {hasPhotos ? (
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
                ) : (
                    <p style={styles.message}>Nenhuma foto disponível no momento.</p>
                )}
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

    title12: {
        color: '#e0245e',
        fontSize: '32px',
        marginBottom: '20px',
        position: 'absolute',
        top: '20px',
        left: '45vh',

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
        width: '69%',
        position: "absolute",
        left: "7vh"
    },
    highlightText: {
        color: '#e0245e',
        fontSize: '4vh',
        fontWeight: 'bold',
        margin: '25px 0',
        position: "absolute",
        top: "20vh",
        left: "50%",
        transform: "translateX(-50%)",
    },
    carouselContainer: {
        margin: '0 30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        top: '36vh',
        left: '80%',
        transform: 'translateX(-50%)',

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