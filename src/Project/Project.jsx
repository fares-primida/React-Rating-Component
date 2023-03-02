import React  , {useState} from 'react'
import './Style.scss'
import Icon from './images/icon-star.svg'
import Thanks from './images/illustration-thank-you.svg'

const circles = document.querySelectorAll(".circle")

circles.forEach((item) => {
    item.addEventListener('click' , function() {
        this.classList.add('active');
    })
})


function OO() {
    const [content , setContent] = useState(true)
    const [result , setResult] = useState('')
    if(content) {
        return (
            <>
            <div className="logo">
                <div className="icon">
                    <img src={Icon} alt="" />
                </div>
            </div>
            <div className="title">
                <h2>How Did We Do ?</h2>
            </div>
            <div className="description">
                <p>
                    Please Let Us Know How We Did With Your Support 
                    Request. All FeedBack Is Appreciated To Help US
                    Imporove Our Offering
                </p>
            </div>
            <div className="rate">
                <div className="circle" onClick={() => setResult('1')}>1</div>
                <div className="circle" onClick={() => setResult('2')}>2</div>
                <div className="circle" onClick={() => setResult('3')}>3</div>
                <div className="circle" onClick={() => setResult('4')}>4</div>
                <div className="circle" onClick={() => setResult('5')}>5</div>
            </div>
            <div className="btn">
                <button onClick={() => setContent(!content)}>SUBMIT</button>
            </div>
            </>
        )
    } else {
        return (
        <>
                <div className='Thanks'>
                    <div className="image">
                        <img src={Thanks} alt="" />
                    </div>
                </div>
                <div className="result">
                    <div className="rateResult">
                        <h3>You Selected {result} Of 5</h3>
                    </div>
                </div>
                <div className="mess">
                    Thank You!
                </div>
                <div className="end">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid excepturi est ea nobis nihil <br /> officiis temporibus labore a velit maiores.
                    </p>
                </div>
        </>
        )
    }
}

const Project = () => {
    return (
        <div className="container">
            <OO />
        </div>
    )
}

export default Project