import React from 'react';

class RequestModal extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         requestData: []
    //
    //     }
    // }
    // componentDidMount(){
    //     this.setSate({
    //         requestData: [...this.state.requestData, this.props.data]
    //     })
    // }
    render(){
        return(
            <div>
                <p>{this.props.data}</p>
            </div>
        )
    }
 }
export default RequestModal;