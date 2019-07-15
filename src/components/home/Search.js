import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncByCity } from '../../store/actions/search';

class Search extends Component {
  state = {
    city: ''
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.setCity(this.state.city);
  };

  render() {
    return (
        <div>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label className="field a-field a-field_a1 page__field" >
                  <input className="field__input a-field__input" id="city" placeholder="enter a city" name="city" type="text" onChange={this.onChange} required/>
                </label>
                <button type="submit" className="btn btn-white btn-animation-1">Submit</button>
              </div>
            </form>
        </div>
    );
}}

const mapDispatchToProps = (dispatch) => {
    return {
        setCity: (city) => {dispatch(asyncByCity(city))}
    };
};

export default connect(null, mapDispatchToProps)(Search);
