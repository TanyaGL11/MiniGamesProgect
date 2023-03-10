export function validateEmail(value) {
    let error
    if (!value) {
      error = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address'
    }
    return error
  }

export function validateField(value) {
    let error
    if (!value) {
      error = 'Required'
    }
    return error
  }