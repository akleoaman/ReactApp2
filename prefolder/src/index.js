import React from 'react'
import { render } from 'react-dom'
import routes from './routes'
import  Member from './components/ui/Member';



window.React = React

render(
	<Member admin={true}
			name="Amandeep Kaur"
			email="akleoaman@gmail.com"
			thumbnail="http://localhost:3000/assets/img/aman.jpg"
			makeAdmin={(email) => console.log(email)}/>, 
	document.getElementById('react-container')
)
