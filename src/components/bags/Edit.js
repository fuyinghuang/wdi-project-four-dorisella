import React from 'react';
import axios from 'axios';
import { getToken } from '../../lib/auth';


class BagUpdate extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      bag: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    axios.get(`/api/bags/${this.props.match.params.id}`)
      .then(result=> {
        this.setState({ bag: result.data});
        console.log('this is', this.state);
      });
  }
  handleSubmit(event) {
    event.preventDefault();
    axios.put(`/api/bags/${this.props.match.params.id}`, this.state.bag, {headers: {
      Authorization: `Bearer ${getToken()}`}})
      .then(()=> {
        this.props.history.push(`/bags/${this.props.match.params.id}`);
      });
  }

  handleChange({ target: {name, value}}) {
    this.setState({ bag: { ...this.state.bag, [name]: value }});
  }

  render() {
    return(
      <section className="hero is-light is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-mobile">
              <div className="column is-6 is-offset-3 is-mobile">
                <h3 className="title has-text-grey">Edit an item</h3>
                <div className="box">
                  <form onSubmit={this.handleSubmit}>
                    <div className="field">
                      <div className="control">
                        <input className="input " onChange={this.handleChange}  value={this.state.bag.name || ''}  name="name"  placeholder="name"/>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input" onChange={this.handleChange}   value={this.state.bag.brand || ''}  name="brand"  placeholder="brand"/>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input" onChange={this.handleChange}   value={this.state.bag.description || ''}  name="description"  placeholder="description"/>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input" onChange={this.handleChange}   value={this.state.bag.detail || ''}  name="detail"  placeholder="detail"/>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input" onChange={this.handleChange}   value= {this.state.bag.retailPrice || ''}  name="retailPrice"  placeholder="retailPrice"/>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input" onChange={this.handleChange}   value= { this.state.bag.stock }   name="stock"  placeholder="stock"/>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input" onChange={this.handleChange}   value= { this.state.bag.unitCost || ''}  name="unitCost"  placeholder="unitCost"/>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input" onChange={this.handleChange}   value={this.state.bag.image || ''}  name="image"  placeholder="imageUrl"/>
                      </div>
                    </div>
                    <button className="button is-light">Update</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


export default BagUpdate;
