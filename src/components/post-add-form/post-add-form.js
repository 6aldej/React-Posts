import React, { Component } from 'react';
import { Button } from 'reactstrap';
import addPost from "../../img/plus.svg";
import './post-add-form.css'

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            active: true
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(event) {
        let enter = event.target.value;
        if (enter) {
            this.setState({
                text: event.target.value,
                active: false,
            })
        }
        if (!enter) {
            this.setState({
                text:event.target.value,
                active:true
            })
        }
    }

    onSubmit(event){
        event.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        });
    }

    render() {
        return (
            <form 
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}
            >
                <input
                    type="text"
                    placeholder="О чём вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <Button
                    className="button"
                    type="submit"
                    outline  
                    color="info"
                    disabled={this.state.active}>
                    <img className="addPost" src={addPost} alt="добавить"/>
                </Button>
            </form>
        )
    }
}

