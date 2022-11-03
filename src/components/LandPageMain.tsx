import { useState } from 'react'

export type MainProps = {
    image: any;
    text: string;
}

export function LandPageMain(props: MainProps) {
    var left_right: Boolean = true;
    
    if (left_right === true) {
        left_right = false;
        return (
            <div className='pb-20 pt-5 flex justify-center'>
                <img className='h-[20vw] w-[25vw] pr-5' src={props.image} alt="Pista de Skate Cocal do Sul"/>
                <p className='h-[20vw] w-[60vw] text-justify text-[20px]'>{props.text}</p>
            </div>
        )
    } else {
        left_right = true;
        return (
            <div className='pb-20 pt-5 flex justify-center'>
                <p className='h-[25vw] w-[60vw] text-justify text-[20px]'>{props.text}</p>
                <img className='h-[20vw] w-[25vw] pl-5' src={props.image} alt="Pista de Skate Cocal do Sul"/>
            </div>
        )
    }
}

