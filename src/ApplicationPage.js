'use strict';
import React, { Component } from 'react';
import logo from './logo.svg';
import './ApplicationPage.css';
import { Button } from 'react-bootstrap';
import Page1 from './Components/Page1';
import createFragment from 'react-addons-create-fragment';
import _ from 'underscore';
class ApplicationPage extends Component {

  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      advertisementDate: "",
      page1: {
        allValid: false,
        postAppliedFor: {
            expectedSalaryPerMonth: "",
            currentSalaryPerMonth: "",
        },
        personalParticulars: {
            fullname: {
                surname: "",
                middleName: "",
                firstName: ""
            },
            maidenName: "",
            dateOfBirth: "",
            maritalStatus: "",
            contactAddress: "",
            state: "",
            city: "",
            pinCode: "",
            primaryContactNo: "",
            altContactNo: "",
            email: "",
        },
        languageSkills: {
            speaking: {
              english: "",
              hindi: "",
              konkani: "",
              marathi: "",
              anyOther: ""
            },
            writing: {
              english: "",
              hindi: "",
              konkani: "",
              marathi: "",
              anyOther: ""
            },
            reading: {
              english: "",
              hindi: "",
              konkani: "",
              marathi: "",
              anyOther: ""
            },
        }
      }
    }
  }

  handleInput(pageName, pageData) {
    let state = {...this.state};
    state[pageName] = pageData;
    this.setState(state);
  }

  render() {
    return (
      <div className="App">
        <Page1 data={this.state.page1}
               handleInput={this.handleInput}/>
        <div>
          <Button bsStyle='primary'>Next Page</Button>
        </div>
      </div>
    );
  }
}

export default ApplicationPage;
