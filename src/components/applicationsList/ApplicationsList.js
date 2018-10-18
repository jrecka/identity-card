import React from 'react';
import axios from 'axios';
import NavBar from '../navbar/NavBar';
import RequestModal from './requestModal/RequestModal';

export default class ApplicationsList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            applicationsList: [],
            showModal: false,
            currentRequest: ''
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

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }
    showModal = () => {
        this.toggleModal()
    }
    render(){
        return(<div>
            <NavBar/>
            <div className="container list-page">
                        <div className="row list">
                            <table className="col-md-12">
                                 <thead>
                                    <tr>
                                        <th scope="col">Date of application</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Surname</th>
                                        <th scope="col"></th>

                                        {/*<th scope="col"></th>*/}
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.applicationsList.map((data, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{data.dateOfApplication}</td>
                                                <td>{data.name}</td>
                                                <td>{data.surname}</td>
                                                <td>
                                                    <button>
                                                        <i class="fas fa-search-plus"></i>
                                                        onClick={this.showModal()}
                                                    </button>
                                                    {this.state.showModal ? <RequestModal
                                                        data={data.name}/> : null}

                                                </td>
                                            </tr>
                                        )
                                    }).reverse()
                                    }
                                    </tbody>
                                </table>
                        </div>
                    </div>
            </div>
        )
    }
    }
