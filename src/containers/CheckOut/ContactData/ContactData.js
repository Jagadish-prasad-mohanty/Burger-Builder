import React,{Component} from 'react';
import {connect} from 'react-redux'

import Button from '../../../UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios';
import Spinner from '../../../UI/Spinner/Spinner';
import Input from '../../../UI/Input/Input';


import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';

import * as actions from '../../../store/actions/index';

class ContactData extends Component{
    state={
        orderForm:{
            name:{
                fieldType:'input',
                fieldConfig:{
                    placeholder:'Your Name',
                    type:'text'
                },
                value:'',
                validation:{
                    required:true,
                    minLength:3,
                    maxLength:50
                },
                valid:false,
                touched:false
            },
            email:{
                fieldType:'input',
                fieldConfig:{
                    placeholder:'Your Email',
                    type:'email'
                },
                value:'',
                validation:{
                    required:true,
                    minLength:7,
                    maxLength:50
                },
                valid:false,
                touched:false
            },
            street:{
                fieldType:'input',
                fieldConfig:{
                    placeholder:'Street',
                    type:'text'
                },
                value:'',
                validation:{
                    required:true,
                    minLength:3,
                    maxLength:50
                },
                valid:false,
                touched:false
            },
            zipCode:{
                fieldType:'input',
                fieldConfig:{
                    placeholder:'ZIP Code',
                    type:'text'
                },
                value:'',
                validation:{
                    required:true,
                    minLength:3,
                    maxLength:6
                },
                valid:false,
                touched:false
            },
            country:{
                fieldType:'input',
                fieldConfig:{
                    placeholder:'Country',
                    type:'text'
                },
                value:'',
                validation:{
                    required:true,
                    minLength:2,
                    maxLength:15
                },
                valid:false,
                touched:false
            },
            deliveryMethod:{
                fieldType:'select',
                fieldConfig:{
                    options:[
                        {value:'fastest', displayValue:'Fastest'},
                        {value:'cheapest', displayValue:'Cheapest'}
                    ]
                },
                validation:{},
                value:'',
                valid:true
            }
        },
        formValid:false
    }

    checkValidity(value,rules){
        let isValid=true;
        if(!rules){
            return isValid;
        }
        if(rules.required){
            isValid=value.trim()!=='' && isValid;
        }
        if(rules.minLength){
            isValid=value.length>=rules.minLength && isValid;
        }
        if(rules.maxLength){
            isValid=value.length<=rules.maxLength && isValid;
        }

        return isValid;
    }

    inputChangedHandler= (event,inputIndentifier)=>{
        // console.log(event.target.value);
        const updatedOrderForm={...this.state.orderForm};
        const updatedOrderElement={...updatedOrderForm[inputIndentifier]};
        updatedOrderElement.value=event.target.value;
        updatedOrderElement.valid=this.checkValidity(updatedOrderElement.value,updatedOrderElement.validation);
        updatedOrderElement.touched=true;

        let formIsValid=true;
        for(let inputIngredient in this.state.orderForm){
            formIsValid=this.state.orderForm[inputIngredient].valid && formIsValid;
        }
        console.log("[]"+formIsValid);

        updatedOrderForm[inputIndentifier]=updatedOrderElement;
        // console.log(updatedOrderElement);
        this.setState({orderForm:updatedOrderForm,formValid:formIsValid});
    }

    orderSubmitHandler= (event) =>{
        event.preventDefault();
        const formData={};
        for (let key in this.state.orderForm){
            formData[key]=this.state.orderForm[key].value;
        }
        const order={
            ingredients: this.props.ingredients,
            price:this.props.price,
            costomer:formData,
        }
        this.props.onOrderBurger(order);
        // console.log(this.props.ingredients);
    }
    render(){
        const formElementsArray=[];
        for (let key in this.state.orderForm){
            formElementsArray.push({
                id:key,
                config:this.state.orderForm[key]
            })
        }
        const inputFields=formElementsArray.map(inputField=>{
            return (
                <Input key={inputField.id} 
                fieldType={inputField.config.fieldType} 
                fieldConfig={inputField.config.fieldConfig}
                changed={(event)=>this.inputChangedHandler(event,inputField.id)} 
                invalidate={!inputField.config.valid}
                shouldValidate={inputField.config.validation}
                touched={inputField.config.touched}
                value={inputField.config.value} />
            )
        })
        let form=(
            <form onSubmit={this.orderSubmitHandler}>
                    {inputFields}
                   
                    <Button disabled={!this.state.formValid} btnType="Success">Submit</Button>
                </form>
        );
        if(this.props.loading){
            form=<Spinner/>
        }
        return(
            <div className={classes.ContactData}>
                <h3>Enter your details here</h3>
                {form}
            </div>
        );
    }
}

const mapStateToProps= state=>{
    return {
        ingr:state.ingredients,
        price:state.totalPrice,
        loading:state.loading
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onOrderBurger : (orderData)=>dispatch(actions.purchaseBurger(orderData))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(ContactData,axios));