'use strict'

import Admin from "./Admin.js"
import User from "./User.js"

document.addEventListener("DOMContentLoaded", ()=>{

    let subscriber = new User("Théophile", "Soninhekpon");

    console.log(subscriber);

    let admin = new Admin();

    console.log(admin)

})