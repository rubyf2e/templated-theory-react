import React from 'react'
import Banner from './Home/banner'
import OneArticle from './/Home/OneArticle'
import TwoArticle from './/Home/TwoArticle'
import ThreeArticle from './/Home/ThreeArticle'

var Home = React.createClass({
	render: function() {
		return (
			<div>
			<Banner/>
			<OneArticle/>
			<TwoArticle/>
			<ThreeArticle/>
			</div>
			);
		}
	});

export default Home