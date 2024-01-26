import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App (){


  const INITIALVAL = 0

  const [state, dispatch] = useReducer(reducer,{ count:0, step:1});

  function reducer (state, action){
    
    if(action.type === 'increment'){
      return {
        count: state.count + state.step,
        step: state.step
      }

    } else if(action.type === 'decrement'){
      return {
        count: state.count - state.step,
        step: state.step
      }

    } else if(action.type === 'reset'){
      return {
        count: 0,
        step: state.step
      }
      
    }else if(action.type === 'updateStep'){
      return {
        count: state.count,
        step: action.step
      }
      
    } else{
      throw new Error('Invalid action');
    }

  }
  function Slider({onChange, min, max}){

    const [value, setValue] = useState(1)

    return (
      // wrap the JSX elements in parentheses
      (
        <div>
          {value}
          <input 
            type="range"
            min={min}
            max={max}
            value={value}
            // add a label or an aria-label to the input
            aria-label="Slider"
            onChange= {(e) => {
              const value = Number(e.target.value)   
              // pass the value to the onChange prop
              onChange(value)
              setValue(value)
            } }
          />
        </div>
      )
    )

  }





  return(
    <div>
      <Slider 
        min={1}
        max={10}
        // use the slider value to update the count
        onChange={(value) => dispatch({
          type:'updateStep',
          step: value
        })}
      />
      <hr />
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type:'increment'})}>
        +
      </button>
      <button onClick={()=>dispatch({type:'decrement'})}>
        -
      </button>
      <button onClick={()=>dispatch({type:'reset'})}>
        Reset
      </button>

    </div>
    
  )

}

export default App
