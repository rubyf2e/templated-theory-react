import React from 'react'
import ReactDOM from 'react-dom'
import Pagelist from './Pagelist'
import Footer from './Footer'
import './assets/css/main.css'

ReactDOM.render(
	<Pagelist/>,document.getElementById('pagelist')
	);
ReactDOM.render(
	<Footer/>,document.getElementById('footer')
	);