import {useState,useEffect} from "react"

import "./index.css"


const getBmi = (height,weight)=>{
    const heightInMeters = height/100
    const bmi = weight / heightInMeters **2 
    return bmi.toFixed(2);
}

const BmiCalculator = ()=>{
    const storedHeight = JSON.parse(localStorage.getItem("height"))
    const storedWeight = JSON.parse(localStorage.getItem("weight"))

    const [height, setHeight] = useState(storedHeight !== null ? storedHeight: 170,)
    const [weight,setWeight] = useState(storedWeight !==null ? storedWeight: 60,)
    useEffect(()=>{
        document.title = `Your BMI: ${getBmi(height,weight)}`
    },[height,weight])
    useEffect(()=>{
        localStorage.setItem("height", JSON.stringify(height))
    },[height])
    useEffect(()=>{
        localStorage.setItem("weight",JSON.stringify(weight))

    },[weight])
    const onIncrementWeight = ()=>{
        setWeight(prevState=> prevState+1)

    }
    const onDecrementWeight = ()=>{
        setWeight(prevState=>prevState-1)

    }

    const onIncrementHeight = ()=>{
        setHeight(prevState=>prevState+1)

    }
    const onDecrementHeight = ()=>{
        setHeight(prevState=>prevState-1)
    }
    
    return(
        <div className="bg-container">
            <h1 className="top-head">
                BMI CALCULATOR
            </h1>
            <img src="https://assets.ccbp.in/frontend/hooks/bmi-levels-img.png" alt="bmi levels" className="img"/>
            <div class="measures-con">
                <div className="height">
                    <p>Height</p>
              <h1>
                        {height}<span>cms</span>
                    </h1>
                <div>
                    <button onClick={onIncrementHeight}>+</button>
                    <button onClick={onDecrementHeight}>-</button>
                    </div>
                </div>
        
            <div className="weight">
                <p>Weight</p>
                <h1>
                    {weight} <span>kgs</span>
                </h1>
                <div>
                    <button onClick={onDecrementWeight}>-</button>
                    <button onClick={onIncrementWeight}>+</button>

                </div>
                
            </div>

           
        </div>
        <div className="result-con">
            <span className="spn">BMI:</span>
            <h1 className="number">{getBmi(height,weight)}</h1>
            </div>
        </div>
    )
}
export default BmiCalculator