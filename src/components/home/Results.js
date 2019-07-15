import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultLine from './ResultLine';

class Results extends Component {
    state = {
        currentCity: '',
        price: '0',
        refine: '',
        result: []
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.refine || this.state.price !== '0') {
            const ref = this.state.refine ? this.state.refine.toLowerCase(): null;
            const result = this.props.restaurants.filter(e => {
                let cond = ref ? e.address.toLowerCase().includes(ref) 
                    || e.area.toLowerCase().includes(ref) 
                    || e.name.toLowerCase().includes(ref): true;
                cond = cond && e.price === +this.state.price;

                return cond;
            });

            this.setState({ result });
        } else {
            this.setState({ result: [] });
        }
    };

    getRestaurantList = (data) => {
        return data && data.length ? (
            data.map(r => {
                return (
                    <div key={ r.id }>
                        <ResultLine restaurant={r} />
                    </div>
                );
            })
        ) : (
            <span>No restaurants found.</span>
        );    
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.currentCity !== nextProps.city) {
            this.setState({ currentCity: nextProps.city, refine: '', result: [], price:'0' });
        }
    }

  render() {
    const restaurantsList = this.state.result && this.state.result.length ? 
        this.getRestaurantList(this.state.result) : 
        this.getRestaurantList(this.props.restaurants);

    return (
        <div className="container">
            <form className="refine " onSubmit={this.onSubmit}>
                <div className="row">
                    <div className="form-group col-md-7">     
                        <label className="field a-field a-field_a1 page__field" > Refine Search Results
                            <input className="field__input a-field__input" type="text" name="refine" onChange={this.onChange} value={this.state.refine} placeholder="name/area/address"/>
                        </label>
                        
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="priceRange">Price Point</label>
                        <select id="priceRange" className="form-control" onChange={this.onChange} value={this.state.price} name="price">
                            <option value='0' defaultValue>None</option>
                            <option value='1'>$</option>
                            <option value='2'>$$</option>
                            <option value='3'>$$$</option>
                            <option value='4'>$$$$</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <button type="submit" className="btn">SEARCH</button>
                    </div>
                </div>
            </form>
            <div>Checking for { this.props.city }</div>
            <div className="card-deck">
                { restaurantsList }
            </div>
        
        </div>
    );
}}

const mapStoreToProps = (state) => {
    return {
        restaurants: state.restaurants,
        city: state.city
    };
};

export default connect(mapStoreToProps)(Results);
