import React from 'react'
import './assets/css/main.css'

var Footer = React.createClass({
  render: function() {
    return (
     <div className="inner">
     <div className="flex">
     <div className="copyright">
     &copy; Untitled. Design: <a href="https://templated.co">TEMPLATED</a>. Images: <a href="https://unsplash.com">Unsplash</a>.
     </div>
     <ul className="icons">
     <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
     <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
     <li><a href="#" className="icon fa-linkedin"><span className="label">linkedIn</span></a></li>
     <li><a href="#" className="icon fa-pinterest-p"><span className="label">Pinterest</span></a></li>
     <li><a href="#" className="icon fa-vimeo"><span className="label">Vimeo</span></a></li>
     </ul>
     </div>
     </div>
     );
  }
});

export default Footer;
