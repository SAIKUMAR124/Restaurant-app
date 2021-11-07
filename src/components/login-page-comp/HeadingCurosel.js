import React, {useState, useEffect} from 'react'
import data from '../../data/HeadingData'
import './HeadingCurosel.css'

const HeadingCurosel = () => {
    const [people] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(()=>{
		const lastIndex = people.length-1;
		if(index < 0){
			setIndex(lastIndex)
		}
		if(index > lastIndex){
			setIndex(0)
		}
	}, [index, people])

	useEffect(()=> {
		let slider = setInterval(()=>{
			setIndex(index+1)
		}, 2000);
		return ()=> clearInterval(slider)
	}, [index])

    return (
        <section className='curosel-section' >
            <div className='curosel-center'>
                {people.map((person, personIndex)=>{
                    const {id, info} = person;

                    let position = 'nextSlide';

                    if(personIndex === index){
                        position = 'activeSlide';
                    }
                    
                    if((personIndex === index-1) || (index === 0 && personIndex === people.length - 1 )){
                        position = 'lastSlide'
                    }

                    return (<article className={`${position} curosel-article`} key={id} id='art'>
                            <h4>{info}</h4>
                        </article>
                        )
                })}
            </div>
            <h3 className='subtitle'>Order food from favorate restaurants near you.</h3>
        </section>
    )
}

export default HeadingCurosel
