import * as actionTypes from './actionTypes';
import axios from 'axios';
//import axios from '../../axios';

export const asyncByCity = (city) => {
    return dispatch => {
        axios.get('https://opentable.herokuapp.com/api/restaurants', { params: { city, per_page: 100 } })
            .then(res => {
                if (res.data.total_entries > 100) {
                    const promises = [];
                    const pagesCount = Math.ceil(res.data.total_entries / 100);
                    for (let i = 2; i <= pagesCount; i++) {
                        const p = axios.get('https://opentable.herokuapp.com/api/restaurants', { params: { city, per_page: 100, page: i } });
                        promises.push(p);
                    }

                    axios
                        .all(promises)
                        .then(resArray => {
                            const restaurants = resArray.map(r => r.data.restaurants);
                            console.log(restaurants);
                            restaurants.unshift(res.data.restaurants);
                            dispatch(prepareStoreDataFromArray(city, restaurants));
                        })
                        .catch(err => {
                            console.error('Array request failed:');
                            console.error(err);
                        });
                }
                else {
                    dispatch(prepareStoreData(city, res.data.restaurants));
                }
            })
            .catch(err => {
                console.error(err);
            });
    };
};

const prepareStoreDataFromArray = (city, data) => {
    const allData = [].concat(...data);

    return prepareStoreData(city, allData);
};

const prepareStoreData = (city, data) => {
    return {
        type: actionTypes.SEARCH_RESTAURANTS,
        data: {
            city,
            restaurants: data
        }
    }
};