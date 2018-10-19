import React from 'react';
import RequestModal from './requestModal/RequestModal';
import RestApiService from '../../service/restApiService';

export default class ApplicationsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            applicationsList: [],
            showModal: false,
            currentRequest: ''
        }
    }

    componentDidMount() {
        this.getSelectedApplications();
    }

    getSelectedApplications = () => {
        RestApiService.findSelectedApplications()
            .then(response => {
                this.setState({
                    applicationsList: response.data
                });
            })
            .catch(error => console.log(error));
    };

    toggleModalAndSetName = data => {
        this.state.userData = data;
        this.toggleModal();
    };

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal,
        });
    };

    render() {
        return (
            <React.Fragment>
                {this.state.showModal ? <RequestModal
                    userData={this.state.userData}
                    closeModal={this.toggleModal}/> : null}
                <div className="container list-page">
                    <div className="row list">
                        <table className="col-md-12">
                            <thead>
                            <tr>
                                <th scope="col">Date of application</th>
                                <th scope="col">Name</th>
                                <th scope="col">Surname</th>
                                <th scope="col"></th>
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
                                            <button onClick={() => this.toggleModalAndSetName(data)}>
                                                <i className="fas fa-search-plus"></i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }).reverse()
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
