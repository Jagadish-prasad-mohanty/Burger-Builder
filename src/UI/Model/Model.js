import React,{Component} from 'react';
import classes from './Model.module.css';
import Auxilary from '../../hoc/Auxilary/auxilary';
import BackDrop from '../BackDrop/BackDrop';


class Model extends Component{
    shouldComponentUpdate(nextProps,nextState){
        return ((nextProps.show!==this.props.show) || nextProps.children !== this.props.children);
    }
    componentDidUpdate(){
        console.log("[model.js] component update");
    }
    render(){
        let myclasses= classes.Model+" ";
        myclasses+=(this.props.show)?classes.Show:'';
        return (
            <Auxilary>
                <BackDrop show={this.props.show} clicked={this.props.closeModel}></BackDrop>
                <div className={myclasses}>
                    {this.props.children}
                </div>
            </Auxilary>
        );
    }
}



export default Model;