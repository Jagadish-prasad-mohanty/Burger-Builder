import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import classes from './Orders.module.css';
import axios from '../../axios';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../UI/Spinner/Spinner';

class Orders extends Component{
    state={
        orders:[],
        loading:true
    }
    componentDidMount(){
        axios.get('/orders.json')
        .then(res=>{
            console.log(res.data);
            const orderedData=[]
            for (let key in res.data){
                orderedData.push({
                    ...res.data[key],
                    id:key
                })
            }
            this.setState({loading:false,orders:orderedData});
        })
        .catch(err=>{
            this.setState({loading:false})
        })
    }
    render(){
        let orders=(<div><Spinner/></div>); 
        if(!this.state.loading){
        orders=(this.state.orders.map(elem=>{
            // console.log(elem.ingredients);
            return <Order key={elem.id} 
            ingredients={elem.ingredients}
            price={elem.price} />
        }))}
        return(
            <div className={classes.Orders}>
                {orders}
            </div>
        );
    }
}

export default withErrorHandler(Orders,axios);