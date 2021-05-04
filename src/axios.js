import axios from 'axios';

const instance=axios.create({
    baseURL:"https://burgerbuilder-3193f-default-rtdb.firebaseio.com/"
});

export default instance;