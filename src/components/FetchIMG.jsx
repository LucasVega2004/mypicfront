import React, { useEffect, useState } from 'react';
import dotenv from 'dotenv';
dotenv.config();

const FetchIMG = () => {
    const [photos, setPhotos] = useState([]);
    const apiKey = process.env.API_IMAGENES_KEY;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.pexels.com/v1/curated?per_page=10`, {
                    headers: {
                        Authorization: apiKey,
                    },
                });

                if (!response.ok) {
                    throw new Error('Error al obtener las fotos de Pexels');
                }

                const data = await response.json();
                setPhotos(data.photos);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, [apiKey]);

    return (
        <div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {photos.map((photo) => (
                    <img key={photo.id} src={photo.src.medium} alt={photo.url} style={{ margin: '10px', width: '35em' }} />
                ))}
            </div>
        </div>
    );
};

export default FetchIMG;
