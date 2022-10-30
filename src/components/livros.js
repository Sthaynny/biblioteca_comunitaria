import React from 'react';

export default function Livro(props){ 
    const item = props.item;
    return <>
        <li>{ item.titulo }</li>
    </>
}