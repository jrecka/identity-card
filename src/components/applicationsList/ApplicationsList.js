import React from 'react';
import axios from 'axios';

export default class ApplicationsList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            applicationsList: []
        }
    }
    componentDidMount() {
        this.getSelectedApplications();
    }

    getSelectedApplications = () => {
        axios.get('http://localhost:4000/tasks')
        .then( res => res.data.map(response => {
                  this.setState({
                applicationsList: [...this.state.applicationsList, response]
            });
            
        })
    )
    .catch(error => console.log(error));
    }
    render(){
        return(
            <div> jestem z toba :D</div>
        )
    }
    }
