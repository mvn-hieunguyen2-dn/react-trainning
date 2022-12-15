import React, { Component } from "react";
import Field from "../scence/Field";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        gender: 0,
        description: "",
        email: "",
        password: "",
        country: "vn",
        rememberMe: 0,
      },
      users: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((prev) => {
      return {
        users: [...prev.users, this.state.form],
        form: {
          gender: 0,
          description: "",
          email: "",
          password: "",
          country: "vn",
          rememberMe: 0,
        },
      };
    });
  }

  handleOnChange(e) {
    let key = e.target.name;
    let value = e.target.value;
    let type = e.target.type;
    let isCheckbox = type === "checkbox" || type === "radio";
    let checked = e.target.checked;
    this.setState((prev) => ({
      ...prev,
      form: {
        ...this.state.form,
        [key]: isCheckbox ? (checked ? 1 : 0) : value,
      },
    }));
  }

  render() {
    const { form, users } = this.state;
    return (
      <div style={{ display: "flex", margin: '20px 0'}}>
        <form
          ref={this.form_ref}
          onSubmit={this.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "30%",
            background: 'black',
            padding: '5px 10px',
            color: 'white'
          }}
        >
          <Field
            label="Email"
            type="input"
            id="email"
            name="email"
            required
            value={form.email}
            placeholder="Enter user email"
            onChange={this.handleOnChange}
          />
          <Field
            label="Password"
            type="input"
            required
            id="password"
            value={form.password}
            name="password"
            isPassword
            placeholder="Enter user password"
            onChange={this.handleOnChange}
          />
          <div
            style={{ display: "flex", alignItems: "center", margin: "10px 0" }}
          >
            <Field
              label="Male"
              type="radio"
              name="gender"
              defaultChecked={this.state.form.gender === 0}
              id="male"
              swapLabel
              onChange={this.handleOnChange}
            />
            <Field
              label="Female"
              type="radio"
              swapLabel
              name="gender"
              defaultChecked={this.state.form.gender === 1}
              id="female"
              onChange={this.handleOnChange}
            />
          </div>
          <Field
            type="checkbox"
            label="Remember me"
            name="rememberMe"
            swapLabel
            id="rememberMe"
            value={this.state.form.rememberMe}
            defaultChecked={this.state.form.rememberMe === 1}
            onChange={this.handleOnChange}
          />
          <Field
            type="textarea"
            label="Description"
            name="description"
            value={form.description}
            placeholder="Enter description for user"
            id="textarea"
            onChange={this.handleOnChange}
          />
          <Field
            label="Country"
            name="country"
            options={[
              {
                id: 1,
                value: 'vn',
                name: "Viet Nam",
              },
              {
                id: 2,
                value: 'cn',
                name: "Chinese",
              },
            ]}
            widthFull
            onChange={this.handleOnChange}
          />
          <button style={{ margin: "20px 0" }}>Add User</button>
        </form>
        <table style={{margin: '0 10px'}}>
          <thead>
            <tr>
              <th>Email</th>
              <th>Password</th>
              <th>Gender</th>
              <th>Remember me</th>
              <th>Description</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => {
              const {
                email,
                password,
                gender,
                description,
                country,
                rememberMe,
              } = user;
              return (
                <tr key={i}>
                  <td>{email}</td>
                  <td>{password}</td>
                  <td>{gender}</td>
                  <td>{rememberMe}</td>
                  <td>{description}</td>
                  <td>{country}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Form;
