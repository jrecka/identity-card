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
            <div className="container">
                        <div className="row">
                            <table className="col-md-12">
                                 <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Surname</th>
                                        <th scope="col">Date of submitting the application</th>
                                        <th scope="col"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.applicationsList.map((data, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{data.name}</td>
                                                <td>{data.surname}</td>
                                                {/* <td>{data.dateOfApplication.substring(0, 10)}</td> */}
                                                <td>
                                                </td>
                                            </tr>
                                        )
                                    }).reverse()
                                    }
                                    </tbody>
                                </table>
                        </div>
                    </div>
        )
    }
    }
