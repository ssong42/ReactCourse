import React from 'react';

const Ninjas = ({Ninja, deleteSong}) => {
    return (
        <div className = "ninja-list">
            {
                Ninja.map(ninja => {
                    return ninja.age > 10 ? (
                        <div className="ninja" key={ninja.id}>
                            <div>Name: {ninja.name}</div>
                            <div>Age: {ninja.age}</div>
                            <div>Belt: {ninja.belt}</div>
                            <button onClick={() => {deleteSong(ninja.id)}}>Delete Song</button>
                        </div> ) :
                    null;
                })
            }
        </div>
    )
}

export default Ninjas;
