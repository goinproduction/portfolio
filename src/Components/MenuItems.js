import React from 'react';

function MenuItems({ menuItem }) {
    return (
        <div className='portfolis'>
            {menuItem.map((item) => {
                return (
                    <div className='portfolio' key={item.id}>
                        <div className='image-data'>
                            <img src={item.image} alt='' />
                        </div>
                        <h5>{item.title}</h5>
                        <p>Placeholder paragraph</p>
                    </div>
                );
            })}
        </div>
    );
}

export default MenuItems;
