# ghana-phone-number-validator
A lightweight phone number verification package for Ghanaian phone numbers

## Demo
View sample code on [codesandbox](https://codesandbox.io/s/ghana-phone-number-validator-qxsyx).

## How to use

### Install
```
1. npm i ghana-phone-number-validator --save
```

### 2. Import validator function inside react
```
import phoneValidate from 'ghana-phone-number-validator'
```

### 3. Call the validator function
 
 Inside your render or return

```
phoneValidate("+233244444444")
```
phone number provided must be a string.

### 4. Optional parameters
There is support for custom error messages by way of a secong parameter.

```
phoneValidate("+23324000000", "This phone number is wrong")

```

This package is primarily for Ghanaian phone numbers, but can be extended to use with international phone numbers in general.
To do this, we pass a third parameter as INT.


```
phoneValidate("+23324000000", "This phone number is wrong", "INT")

```

### 5. Sample code

```
import phoneValidate from "ghana-phone-number-validator";

export default function App() {
  return (
    <>
      <h1>Result:</h1>
      <h2>{phoneValidate("+23324000000")}</h2>
    </>
  );
}

```

### 6. The RegEx used
For Ghana
```
/^((\+[2][3][3]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/

```

For International
```
/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/
```
