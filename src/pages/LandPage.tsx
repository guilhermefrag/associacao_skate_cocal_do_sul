import { useState } from 'react'
import pista_skate_cocal from '../images/pista_skate_cocal.jpeg'

export function LandPage() {
    return (
        <div className=" flex-auto justify-center overflow-auto">
            <div className='pb-20 pt-5 flex justify-center'>
                <img className='h-[20vw] w-[25vw] pr-5' src={pista_skate_cocal} alt="Pista de Skate Cocal do Sul"/>
                <p className='h-[20vw] w-[60vw] text-justify text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facere est itaque doloribus numquam a repellendus sed iste placeat ullam explicabo, voluptas tempore dolores quia, corrupti quos dignissimos, totam quo?
                Minima officiis dignissimos ratione? Similique sequi nam, numquam, assumenda debitis porro quis maiores dolore fuga odio soluta ut beatae non illo deleniti cumque! Pariatur incidunt delectus, cum dolor minima explicabo!</p>
            </div>
            <div className='pb-20 pt-5 flex justify-center'>
                <p className='h-[25vw] w-[60vw] text-justify text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facere est itaque doloribus numquam a repellendus sed iste placeat ullam explicabo, voluptas tempore dolores quia, corrupti quos dignissimos, totam quo?
                Minima officiis dignissimos ratione? Similique sequi nam, numquam, assumenda debitis porro quis maiores dolore fuga odio soluta ut beatae non illo deleniti cumque! Pariatur incidunt delectus, cum dolor minima explicabo!</p>
                <img className='h-[20vw] w-[25vw] pl-5' src={pista_skate_cocal} alt="Pista de Skate Cocal do Sul"/>
            </div>
            <div className='pb-20 pt-5 flex justify-center'>
                <img className='h-[20vw] w-[25vw] pr-5' src={pista_skate_cocal} alt="Pista de Skate Cocal do Sul"/>
                <p className='h-[20vw] w-[60vw] text-justify text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facere est itaque doloribus numquam a repellendus sed iste placeat ullam explicabo, voluptas tempore dolores quia, corrupti quos dignissimos, totam quo?
                Minima officiis dignissimos ratione? Similique sequi nam, numquam, assumenda debitis porro quis maiores dolore fuga odio soluta ut beatae non illo deleniti cumque! Pariatur incidunt delectus, cum dolor minima explicabo!</p>
            </div>
        </div>
    )
};