'use strict'

import Admin from "./Admin"
import User from "./User"

document.addEventListener("DOMContentLoaded", ()=>{

    let subscriber = new User();

    console.log(subscriber.fullName("Théophile", "Soninhekpon"));

    let admin = new Admin();

    console.log(admin)

})