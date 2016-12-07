import React, { Component } from 'react';
import Link from 'react-router';
import { Form, Input, Tooltip, Icon, Row, Button } from 'antd';
const FormItem = Form.Item;

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordDirty: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkPassowrd = this.checkPassowrd.bind(this);
    this.checkConfirm = this.checkConfirm.bind(this);
    this.handlePasswordBlur = this.handlePasswordBlur.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  handlePasswordBlur(e) {
    const value = e.target.value;
    this.setState({ passwordDirty: this.state.passwordDirty || !!value });
  }
  checkPassowrd(rule, value, callback) {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  checkConfirm(rule, value, callback) {
    const form = this.props.form;
    if (value && this.state.passwordDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        span: 14,
        offset: 6,
      },
    };
    return (
        <div className="form-wrap">
          <Row type="flex" justify="center">
            <h2> Sign Up</h2>
          </Row>
          <Form horizontal onSubmit={this.handleSubmit}>
            <FormItem
              {...formItemLayout}
              label="E-mail"
              hasFeedback
            >
              {getFieldDecorator('email', {
                rules: [{
                  type: 'email', message: 'The input is not valid E-mail!',
                }, {
                  required: true, message: 'Please input your E-mail!',
                }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Password"
              hasFeedback
            >
              {getFieldDecorator('password', {
                rules: [{
                  required: true, message: 'Please input your password!',
                }, {
                  validator: this.checkConfirm,
                }],
              })(
                <Input type="password" onBlur={this.handlePasswordBlur} />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Confirm Password"
              hasFeedback
            >
              {getFieldDecorator('confirm', {
                rules: [{
                  required: true, message: 'Please confirm your password!',
                }, {
                  validator: this.checkPassowrd,
                }],
              })(
                <Input type="password" />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={(
                <span>
                  Nickname&nbsp;
                  <Tooltip title="What do you want other to call you?">
                    <Icon type="question-circle-o" />
                  </Tooltip>
                </span>
              )}
              hasFeedback
            >
              {getFieldDecorator('nickname', {
                rules: [{ required: true, message: 'Please input your nickname!' }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Phone Number"
            >
              {getFieldDecorator('phone', {
                rules: [{required: true, message: 'Please input your phone number!' }],
              })(
                <Input type="number"/>
              )}
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" size="large">Sign Up</Button>
            </FormItem>
          </Form>
          </div>
        );
  }
}

export default Form.create()(SignUp);
