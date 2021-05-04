import React,{Component} from 'react';
import Auxilary from '../../hoc/Auxilary/auxilary';
import classes from "./Layout.module.css";
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state={
        showSideDrawer:false
    }

    sideDrawerOpenHandler= () =>{
        this.setState({showSideDrawer:true})
    }
    sideDrawerCloseHandler= () =>{
        this.setState((prevState)=>{
            return {showSideDrawer:!prevState.showSideDrawer}
        })
    }
    render(){
        return(
            <Auxilary>
                <Toolbar openDrawer={this.sideDrawerOpenHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHandler}/>
                <main className={classes.layout}>
                    {this.props.children}
                </main>
            </Auxilary>

        )
    }
}

export default Layout;