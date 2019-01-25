import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import Paper from 'material-ui/Paper';
import { Field, reduxForm } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton';

import { validate } from './validate';
import renderField from './renderField';

const styles = {
  formStyle: {
    padding: 10
  },
  paperStyle: {
    marginBottom:10,
    background: "#ffffff6e"
  },
  buttonPlace: {
    textAlign: "center"
  },
  rowStyle: {
    marginBottom: "-10px"
  }
};
class ContactForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return(
      <Paper zDepth={2} style={styles.paperStyle}>
        <form onSubmit={handleSubmit} style={styles.formStyle}>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} style={styles.rowStyle}>
              <Field name="fullName" component={renderField} label="Your Name"/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} style={styles.rowStyle}>
              <Field name="email" component={renderField} label="Your Email"/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} style={styles.rowStyle}>
              <Field name="subject" component={renderField} label="Subject"/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <Field name="message" component={renderField} label="Your Message" multiLine={true} rows={5}/>
            </Col>
          </Row>
          <Row style={styles.buttonPlace}>
            <Col xs={6} sm={6} md={6} lg={6}>
              <RaisedButton type="submit" label="Submit" primary={true} disabled={pristine || submitting}/>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6}>
              <RaisedButton type="button" label="Reset" disabled={pristine || submitting} onClick={reset}/>
            </Col>
          </Row>
        </form>
      </Paper>
    )
  }
}

export default reduxForm({
  form: 'contactForm',  // a unique identifier for this form
  validate                 // <--- warning function given to redux-form
})(ContactForm);