import React from 'react';

const Ninjas = ({Ninja}) => {
    // const ninjalist = Ninja.map(ninhas => {
    //     if (ninhas.age > 22) {
    //         return (
    //             <div className="ninja" key={ninhas.id}>
    //             <div>Name: {ninhas.name}</div>
    //             <div>Age: {ninhas.age}</div>
    //             <div>Belt: {ninhas.belt}</div>
    //             <br></br>
    //             </div>
    //         )}
    //     })

    return (
        <div className = "ninja-list">
            {
                Ninja.map(ninja => {
                return ninja.age > 25 ? (
                    <div className="ninja" key={ninja.id}>
                        <div>Name: {ninja.name}</div>
                        <div>Age: {ninja.age}</div>
                        <div>Belt: {ninja.belt}</div>
                    </div> ) :
                    null;
                })
            }
        </div>
    )
}

export default Ninjas;
