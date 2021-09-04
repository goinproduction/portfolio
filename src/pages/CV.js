import React from 'react';
import Title from '../components/Tittle';

const CV = () => {
    return (
        <div className='title'>
            <Title title={'CURRICULUM VITAE'} span={'CURRICULUM VITAE'} />
            <object
                width='100%'
                height='700vh'
                data='/assets/pdf/CV.pdf'
                type='application/pdf'
                style={{ marginTop: '70px' }}
            ></object>
        </div>
    );
};

export default CV;
