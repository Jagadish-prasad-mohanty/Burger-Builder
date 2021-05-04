import React, {Component} from 'react';
import Auxilary from '../../hoc/Auxilary/auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Model from '../../UI/Model/Model';
import PurchaseDetails from '../../components/Burger/PurchaseDetails/PurchaseDetails';
import Spinner from '../../UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios';
// import {Route} from 'react-router-dom';
// import CheckOut from '../CheckOut/CheckOut';

import * as burgerBuilderActions from '../../store/actions/index';
import {connect} from 'react-redux'

// const ingredientPrice={
//     cheese:10,
//     bacon:12,
//     meat:20,
//     salad:8
// }

class BurgerBuilder extends Component{
    state={
        // ingredients:null,
        // totalPrice:20,
        // purchasable:false,
        purchasing:false,
        loading:false,
        
    };

    componentDidMount(){
        console.log(this.props);
        this.props.initIngredientsHandler();
    }
    

    updatePurchasable (ingredients){
        const noOfIngredients=Object.keys(ingredients)
                .map(igKeys=> ingredients[igKeys])
                .reduce((sum,elem)=>sum+elem,0)

        console.log(noOfIngredients);
        return noOfIngredients>0
    }

    // addComponentHandler=(type)=>{
    //     const newCount=this.state.ingredients[type]+1;
    //     const newIngredients={...this.state.ingredients};
    //     newIngredients[type]=newCount;
    //     const curPrice=this.state.totalPrice;
    //     const newPrice=curPrice+ingredientPrice[type];
    //     this.setState({ingredients:newIngredients,totalPrice:newPrice});
    //     this.updatePurchasable ( newIngredients);
    // }

    // removeConponentHandler=(type)=>{
    //     const newCount=this.state.ingredients[type]-1;
    //     const newIngredients={...this.state.ingredients};
    //     newIngredients[type]=newCount;
    //     const curPrice=this.state.totalPrice;
    //     const newPrice=curPrice-ingredientPrice[type];
    //     this.setState({ingredients:newIngredients,totalPrice:newPrice});
    //     this.updatePurchasable (newIngredients)
    // }

    purchaseHandler=()=>{
        this.setState({purchasing:true});
    }
    canclePurchaseHandler=()=>{
        this.setState({purchasing:false})
    }
    continuePurchaseHandler=()=>{
        // const queryParams=[];
        // for (let i in this.props.ingr){
        //     queryParams.push(encodeURIComponent(i)+"="+encodeURIComponent(this.state.ingredients[i]))
        // }
        // queryParams.push('price='+this.props.price);
        // const querySearch=queryParams.join("&")
        // this.props.history.push({
        //     pathname:'/checkout',
        //     search:'?'+querySearch
        // });

        this.props.history.push('/checkout');
    }

    render(){
        const ingredientInfo={...this.props.ingr};
        for (let i in ingredientInfo){
            ingredientInfo[i] = ingredientInfo[i]<=0;
        }
        let purchaseDetails=null;
        let burger=this.error?"Ingredient can't be load":<Spinner/>;
        if(this.props.ingr){
            burger=(
                <Auxilary>
                    <Burger ingredients={this.props.ingr}/>
                    <BuildControls 
                        added={this.props.addComponentHandler} 
                        removed={this.props.removeComponentHandler}
                        disabled={ingredientInfo}
                        price={this.props.price}
                        purchased={this.purchaseHandler}
                        purchasable={this.updatePurchasable(this.props.ingr)}
                        />
                </Auxilary>

            );
            purchaseDetails=<PurchaseDetails 
                        totalPrice={this.props.price}
                        ingredients={this.props.ingr} 
                        cancleOrder={this.canclePurchaseHandler}
                        continueOrder={this.continuePurchaseHandler}
                        />
        }
        if(this.state.loading){
            purchaseDetails=<Spinner/>
        }
        return (
            <Auxilary>
                <Model show={this.state.purchasing} closeModel={this.canclePurchaseHandler}>
                    {purchaseDetails}   
                </Model>
                {burger}
            </Auxilary>
        );
    }
}

const mapStateToProps= state =>{
    return {
        ingr:state.ingredients,
        price:state.totalPrice,
        error:state.error
    }
}

const mapDispatchToProps= dispatch =>{
    return {
        addComponentHandler:(ingType)=>dispatch(burgerBuilderActions.addIngredient(ingType)),
        removeComponentHandler:(ingType)=>dispatch(burgerBuilderActions.removeIngredient(ingType)),
        initIngredientsHandler:()=>dispatch(burgerBuilderActions.initIngredients())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios));