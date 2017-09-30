import React from 'react';
import pic01 from '../images/pic01.jpg';
import pic02 from '../images/pic02.jpg';

var ThreeArticle = React.createClass({
  getInitialState: function() {
    return {
      detail:[
      {
        id:'ThreeArticle1',
        img:pic01,
        h3:'Praesent placerat magna',
        p:'Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor lorem ipsum.'
      },
      {
        id:'ThreeArticle2',
        img:pic02,
        h3:'Fusce pellentesque tempus',
        p:'Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. Pellentesque egestas sem. Suspendisse commodo ullamcorper magna non comodo sodales tempus.'
      },
      ],
    };
  },
  add: function() {
    this.setState({article: [0].concat(this.state.detail)});
  },
  render: function() {
    var article = this.state.detail.map(function(result) {
      return    <article key={result.id}>
      <div className="image fit">
      <img src={result.img} alt={result.h3} />
      </div>
      <header>
      <h3>{result.h3}</h3>
      </header>
      <p>{result.p}</p>
      <footer>
      <a href="#" className="button special">More</a>
      </footer>
      </article>
    });
    return (
     <section id="three" className="wrapper special">
     <div className="inner" id="three-box">
     <div className="inner">
     <header className="align-center">
     <h2>Nunc Dignissim</h2>
     <p>Aliquam erat volutpat nam dui </p>
     </header>
     <div className="flex flex-2">
     {article}
     </div>
     </div>
     </div>
     </section>
     );
  }
});

export default ThreeArticle;