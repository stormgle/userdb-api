"use strict"

class UserDB {

  constructor(driver = null) {
    if (driver) {
      this.use(driver);
    }
  }

  use(driver) {

    this.reset();
    
    for(let props in driver) {
      if (typeof driver[props] === 'function') {
        this[props] = driver[props].bind(driver)
      }
    }

  }

  reset() {
    for(let props in this) {
      if (/^_/.test(props)) return
      delete this[props]
    }
  }

}

module.exports = UserDB
