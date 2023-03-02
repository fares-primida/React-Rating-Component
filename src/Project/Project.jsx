import React  , {useState} from 'react'
import './Style.scss'
import Icon from './images/icon-star.svg'

const circles = document.querySelectorAll(".circle")

circles.forEach((item) => {
    item.addEventListener('click' , function() {
        this.classList.add('active')
    })
})

const Project = () => {
    const [content , setContent] = useState(true)
    return (
        <div className='container'>
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
                <div className="circle">1</div>
                <div className="circle">2</div>
                <div className="circle">3</div>
                <div className="circle">4</div>
                <div className="circle">5</div>
            </div>
            <div className="btn">
                <button>SUBMIT</button>
            </div>
        </div>
    )
}

export default Project