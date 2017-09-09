'use strict';
import React, { Component } from 'react';
import '../css/formPage.css';
import _ from 'underscore';
import { Form, FormGroup, FormControl, Radio, Checkbox,
         Button,
         Table,
         Grid, Row, Col } from 'react-bootstrap';
var eh = require('ehmutable').init({isEqual: _.isEqual});

class Page1 extends Component {

  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(key, [...path]) {
    let data = eh.assocIn(this.props.data, [...path], this[key].value);
    this.props.handleInput('page1', data);
  }

  handleCheckboxChange(key, [...path]) {
    let data = eh.assocIn(this.props.data, [...path], this[key].checked);
    this.props.handleInput('page1', data);
  }

  table() {
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>Name of language</th>
            <th>English</th>
            <th>Hindi</th>
            <th>Konkani</th>
            <th>Marathi</th>
            <th>Any Other</th>
          </tr>
        </thead>
        <tbody style={{textAlign: "left"}}>
          <tr>
            <td>Speaking</td>
            <td><Checkbox inputRef = {ref => { this.senglish = ref}} inline
                          onChange={() => this.handleCheckboxChange('senglish', ['languageSkills', 'speaking', 'english'])}></Checkbox></td>
            <td><Checkbox inputRef = {ref => { this.shindi = ref}} inline
                          onChange={() => this.handleCheckboxChange('shindi', ['languageSkills', 'speaking', 'hindi'])}></Checkbox></td>
            <td><Checkbox inputRef = {ref => { this.skonkani = ref}} inline
                          onChange={() => this.handleCheckboxChange('skonkani', ['languageSkills', 'speaking', 'konkani'])}></Checkbox></td>
            <td><Checkbox inputRef = {ref => { this.smarathi = ref}} inline
                          onChange={() => this.handleCheckboxChange('smarathi', ['languageSkills', 'speaking', 'marathi'])}></Checkbox></td>
            <td><FormControl inputRef = {ref => { this.sanyOther = ref}} type='text'
                             onChange={() => this.handleInput('sanyOther', ['languageSkills', 'speaking', 'anyOther'])}/></td>
          </tr>
          <tr>
            <td>Writing</td>
            <td><Checkbox inputRef = {ref => { this.wenglish = ref}} inline
                          onChange={() => this.handleCheckboxChange('wenglish', ['languageSkills', 'writing', 'english'])}></Checkbox></td>
            <td><Checkbox inputRef = {ref => { this.whindi = ref}} inline
                          onChange={() => this.handleCheckboxChange('whindi', ['languageSkills', 'writing', 'hindi'])}></Checkbox></td>
            <td><Checkbox inputRef = {ref => { this.wkonkani = ref}} inline
                          onChange={() => this.handleCheckboxChange('wkonkani', ['languageSkills', 'writing', 'konkani'])}></Checkbox></td>
            <td><Checkbox inputRef = {ref => { this.wmarathi = ref}} inline
                          onChange={() => this.handleCheckboxChange('wmarathi', ['languageSkills', 'writing', 'marathi'])}></Checkbox></td>
            <td><FormControl inputRef = {ref => { this.wanyOther = ref}} type='text'
                             onChange={() => this.handleInput('wanyOther', ['languageSkills', 'writing', 'anyOther'])}/></td>
          </tr>
          <tr>
            <td>Reading</td>
            <td><Checkbox inputRef = {ref => { this.renglish = ref}} inline
                          onChange={() => this.handleCheckboxChange('renglish', ['languageSkills', 'reading', 'english'])}></Checkbox></td>
            <td><Checkbox inputRef = {ref => { this.rhindi = ref}} inline
                          onChange={() => this.handleCheckboxChange('rhindi', ['languageSkills', 'reading', 'hindi'])}></Checkbox></td>
            <td><Checkbox inputRef = {ref => { this.rkonkani = ref}} inline
                          onChange={() => this.handleCheckboxChange('rkonkani', ['languageSkills', 'reading', 'konkani'])}></Checkbox></td>
            <td><Checkbox inputRef = {ref => { this.rmarathi = ref}} inline
                          onChange={() => this.handleCheckboxChange('rmarathi', ['languageSkills', 'reading', 'marathi'])}></Checkbox></td>
            <td><FormControl inputRef = {ref => { this.ranyOther = ref}} type='text'
                             onChange={() => this.handleInput('ranyOther', ['languageSkills', 'reading', 'anyOther'])}/></td>
          </tr>
        </tbody>
      </Table>
    );
  }

  render() {
    let {postAppliedFor, personalParticulars, languageSkills} = this.props.data;
    let subSectionNames;
    return (
      <div className='page'>
        <Form>
          <div>
            <Col md={12} style={{backgroundColor: 'cornflowerblue'}}>
              <div className='section-header'>
                A: POST APPLIED FOR
              </div>
            </Col>

            {
              _.map(postAppliedFor, (value, key) => {
                return <div className='sub-section'>
                        <Col md={3}>
                          {key.replace(/([A-Z])/g, ' $1')
                                .replace(/^./, function(str){ return str.toUpperCase() })}
                        </Col>
                        <Col md={9}>
                          <FormGroup>
                            <FormControl inputRef={ref => {this[key] = ref}} type="text" onChange={() => this.handleInput(key, ['postAppliedFor', key])}/>
                          </FormGroup>
                        </Col>

                      </div>
              })
            }
            <Col md={12} style={{backgroundColor: 'cornflowerblue'}}>
              <div className='section-header'>
                B: PERSONAL PARTICULARS
              </div>
            </Col>
            {
              _.map(personalParticulars, (value, key) => {
                return <div className='sub-section'>
                        <Col md={3}>
                          {key.replace(/([A-Z])/g, ' $1')
                                .replace(/^./, function(str){ return str.toUpperCase() })}
                        </Col>
                        <div>
                          {
                            key === 'fullname' ?
                                                    <FormGroup>
                                                      <Col md = {3}><FormControl type = "text" inputRef = {ref => {this.surname = ref}} onChange = {() => this.handleInput('surname', ['personalParticulars', 'fullname', 'surname'])}/></Col>
                                                      <Col md = {3}><FormControl type = "text" inputRef = {ref => {this.middleName = ref}} onChange = {() => this.handleInput('middleName', ['personalParticulars', 'fullname', 'middleName'])}/></Col>
                                                      <Col md = {3}><FormControl type = "text" inputRef = {ref => {this.firstName = ref}} onChange = {() => this.handleInput('firstName', ['personalParticulars', 'fullname', 'firstName'])}/></Col>
                                                    </FormGroup>

                            :
                            key === 'maritalStatus' ? <FormGroup style={{display: "inline-block"}}>
                                                        <Col md={6}><Radio name='radioGroup' inline inputRef = {() => {this.married = {value: 'married'}}} onClick = {() => this.handleInput('married', ['personalParticulars', 'maritalStatus'])}>Married</Radio></Col>
                                                        <Col md={6}><Radio name='radioGroup' inline inputRef = {() => {this.unmarried = {value: 'unmarried'}}} onClick = {() => this.handleInput('unmarried', ['personalParticulars', 'maritalStatus'])}>Unmarrried</Radio></Col>
                                                      </FormGroup>
                            : <FormGroup>
                                <Col md={9}><FormControl type="text" inputRef = {ref => {this[key] = ref}} onChange = {() => this.handleInput(key, ['personalParticulars', key])}/></Col>
                              </FormGroup>
                          }
                        </div>
                      </div>
              })
            }
            <Col md={12} style={{backgroundColor: 'cornflowerblue'}}>
              <div className='section-header'>
                C: LANGUAGE SKILLS
              </div>
            </Col>
            <Col md={12}>
              {
                this.table()
              }
            </Col>
          </div>
        </Form>
      </div>
    );
  }
}

export default Page1;
