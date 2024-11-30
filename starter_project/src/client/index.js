// js files
import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'


import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

//alert("I EXIST")
// console.log("CHANGE!!");

console.log('Environment:', process.env.NODE_ENV);

export {
    checkForName,
    handleSubmit
}