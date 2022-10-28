import { useState } from 'react'
import pista_skate_cocal from '../images/pista_skate_cocal.jpeg'

export function LandPage() {
    return (
        <div className="flex justify-center">
            <div className='pb-20 pt-5'>
                <img className='h-[50vw] w-[60vw]' src={pista_skate_cocal} alt="Pista de Skate Cocal do Sul"/>
                <p className='h-[50vw] w-[60vw] text-justify text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facere est itaque doloribus numquam a repellendus sed iste placeat ullam explicabo, voluptas tempore dolores quia, corrupti quos dignissimos, totam quo?
                Minima officiis dignissimos ratione? Similique sequi nam, numquam, assumenda debitis porro quis maiores dolore fuga odio soluta ut beatae non illo deleniti cumque! Pariatur incidunt delectus, cum dolor minima explicabo!
                A nulla, voluptatum magnam aliquam debitis doloribus hic libero, omnis culpa suscipit aperiam sed optio id reprehenderit ut, voluptatibus aliquid illo eos. Iste dolores vitae illo ex, nam et dolor.
                Sit a tempore optio rem enim ipsa consequuntur voluptates laudantium ipsam, ad veritatis, mollitia expedita corporis quam. Voluptatum a similique dicta provident repellat, veritatis aliquid reprehenderit corrupti accusantium, voluptatem quam!
                Fugit optio illo, aliquam quia consectetur rerum temporibus excepturi, amet expedita ab praesentium quaerat, nostrum in soluta ipsum ea libero exercitationem vero dolore doloremque a suscipit alias. Vitae, eligendi praesentium.</p>
            </div>            
        </div>
    )
};