import React, { useEffect, useState } from 'react';
import { GifGridItem } from './GifGridItem';
import {getGifs} from '../helpers/GetGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
export const GifGrid = ({ category }) => {
    // useEffect(() => {
    //     //getGifs(category).then(imgs => setImages(imgs));
    //     getGifs(category).then(setImages);
    // }, [category])
    // const [images, setImages] = useState([]);
    const {loading, data:images} = useFetchGifs(category);


    return (
        <>
            <h3>{category}</h3>
            {loading && 'loading ...'}
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem key={img.id} {...img} />
                    ))
                }
            </div>
        </>
    )
}
