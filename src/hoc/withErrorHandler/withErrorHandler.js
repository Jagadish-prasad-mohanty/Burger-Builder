import React, { Component } from 'react';
import Auxilary from '../Auxilary/auxilary';
import Model from '../../UI/Model/Model';

const withErrorHandler = (WrappedComponent, axios) =>{
    return class extends Component {
        state={
            error:null
        }
        componentWillMount(){
            axios.interceptors.request.use(req=>{
                this.setState({error:null});
                return req;
            });

            axios.interceptors.response.use(res=>res
            ,error=>{
                this.setState({error:error});
                console.log("hii");
            });
        }
        errorConfirmHandler= ()=>{
            this.setState({error:null});
        }
        render(){
            return (
                <Auxilary>
                    <Model show={this.state.error} 
                    closeModel={this.errorConfirmHandler}>
                        {this.state.error?this.state.error.message:null}
                    </Model>
                    <WrappedComponent {...this.props}/>
                </Auxilary>
            );
        }
    }
}


export default withErrorHandler;