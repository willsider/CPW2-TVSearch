import renderSearchForm from './components/SearchForm'
import './style.css'

const $ = document.querySelector.bind(document)

//Casting: Conversão explicita de tipos

const app = <HTMLDivElement>$('#app')
renderSearchForm( app)
const resulArea = document.createElement('div')
resulArea.id = 'result-area'
app.insertAdjacentElement('beforeend', resulArea)
