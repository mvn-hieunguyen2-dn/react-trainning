import React, { Component } from "react";

class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      label,
      type,
      name,
      id,
      placeholder,
      isPassword,
      swapLabel,
      options,
      widthFull,
      onChange,
      defaultChecked,
      defaultValue,
      value,
      required
    } = this.props;

    return (
      <div
        style={
          ["input", "textarea"].includes(type)
            ? { display: "flex", flexDirection: "column", margin: "10px 0" }
            : swapLabel
            ? {
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "start",
              }
            : {}
        }
      >
        <label htmlFor={id} style={{ fontWeight: "bold", fontSize: 14 }}>
          {label}
        </label>
        <InputField
          type={type}
          name={name}
          id={id}
          value={value}
          placeholder={placeholder}
          isPassword={isPassword}
          options={options}
          widthFull={widthFull}
          onChange={onChange}
          defaultChecked={defaultChecked}
          defaultValue={defaultValue}
          required={required}
        />
      </div>
    );
  }
}

export default Field;

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      type,
      isPassword,
      placeholder,
      name,
      id,
      options = [],
      value,
      widthFull,
      onChange,
      defaultChecked,
      defaultValue,
      required
    } = this.props;

    if (options.length > 1)
      return (
        <select style={{ width: widthFull ? "100%" : "" }} onChange={onChange} name={name} value={value} defaultValue={defaultValue}>
          {options.map((option, i) => {
            return (
              <option value={option.value} key={i} defaultChecked={value === option.value}>
                {option.name}
              </option>
            );
          })}
        </select>
      );

    switch (type) {
      case "input":
        return (
          <input
            type={isPassword ? "password" : "text"}
            id={id}
            name={name}
            required={required}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            defaultValue={defaultValue}
          />
        );
      case "checkbox":
        return (
          <input
            type="checkbox"
            id={id}
            name={name}
            value={defaultChecked ? 1 : 0}
            placeholder={placeholder}
            onChange={onChange}
            checked={defaultChecked ? true: false}
          />
        );
      case "radio":
        return (
          <input
            type="radio"
            id={id}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            checked={defaultChecked ? true: false}
          />
        );
      case "textarea":
        return (
          <textarea
            value={value}
            id={id}
            required={required}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            defaultValue={defaultValue}
          />
        );
      default:
        return null;
    }
  }
}
