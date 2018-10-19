import axios from 'axios';
import config from '../config';

export default {
    findSelectedApplications() {
        return axios.get(`${config.domain.domainUrl}/tasks`);
    },
    createApplication(data) {
        return axios.post(`${config.domain.domainUrl}/tasks`, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
}