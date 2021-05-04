import React from 'react';
import classes from './Input.module.css';

const input = (props)=>{
    let field=null;
    let errorMessage=null;
    const InputClasses=[classes.InputElement];
    if(props.invalidate && props.shouldValidate && props.touched){
        console.log(props.invalidate , props.shouldValidate , props.touched);
        InputClasses.push(classes.Invalid);
        errorMessage=<p style={{margin:'2px', color:'red'}}>Please enter a valid input!!</p>
    }
    switch (props.fieldType) {
        case 'input':
            field=  <input className={InputClasses.join(' ')} 
            {...props.fieldConfig} value={props.value}  onChange={props.changed}/>
            break;
        case 'textarea':
            field=
                    <textarea className={InputClasses.join(' ')} 
                    {...props.fieldConfig} value={props.value} onChange={props.changed}/>
            
            break;
        case 'select':
            field=  (<select className={InputClasses.join(' ')} 
            value={props.value}
            onChange={props.changed}>
                { props.fieldConfig.options.map(elem=>(
                    <option key={elem.value} value={elem.value}>{elem.displayValue}</option>
                )
                )}
            </select>)
            break;
    
        default:
            field=(<input
             className={classes.InputElement} 
            {...props.fieldConfig} 
            value={props.value} 
            onChange={props.changed}/>)
            break;
    }
    return(
        <div className={classes.Input}>
            <label className={classes.Lable}>{props.label}</label>
            {field}
            {errorMessage}
        </div>
    ) 
}

export default input;