import React from 'react';

const Card = (props) => {
    return (
        <div>
            <dev className='card'>
                <div className='card-body'>
                    <h5 className='card-title'>{props.user.name}</h5>
                    <h5 className='card-subtitle'>{props.user.company.name}</h5>
                    <h6 className='card-text'>
                        {props.user.company.catchPhrase}
                    </h6>
                </div>
            </dev>
        </div>
    );
};

export default Card;
