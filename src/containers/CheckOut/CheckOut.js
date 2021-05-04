import React,{Component} from 'react';
import CheckoutSummery from '../../components/Order/CheckoutSummery/CheckoutSummery';


import {Route,Redirect} from 'react-router-dom';
import ContactData from './ContactData/ContactData';

import {connect} from 'react-redux'

class CheckOut extends Component{
    // state={
    //     ingredients:null,
    //     price:0
    // }

    componentWillMount= () =>{
        // console.log(this.props.location.search);
        // const query=new URLSearchParams(this.props.location.search);
        // const ingredients={};
        // let price=0;
        // for(let param of query.entries()){
        //     if(param[0]==='price'){
        //         price=+param[1]
        //     }
        //     else{
        //         ingredients[param[0]]=+param[1];
        //     }
        // }
        // this.setState({ingredients:ingredients,price:price});
        // console.log(this.state.ingredients);
        // console.log((this.props));
    }

    purchaseCancledHendler=()=>{
        this.props.history.replace('/');
    }
    purchaseContinuedHandler=()=>{
        this.props.history.push('/checkout/contact-data')
    }
    render(){
        let summary=<Redirect to="/"/>
        if (this.props.ingr){
            summary=(
                <>
             <CheckoutSummery 
             ingredients={this.props.ingr}
                 purchaseCancled={this.purchaseCancledHendler}
                 purchaseContinued={this.purchaseContinuedHandler}
             />
             <Route path={this.props.match.path+'/contact-data'} 
             component={ContactData}/>
             </>

            )
        }
        return(
            <div>
            {summary}
            </div>
        );
    }
}

const mapStateToProps= state=>{
    return {
        ingr:state.ingredients
    }
}

export default connect(mapStateToProps)(CheckOut);