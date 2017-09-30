import React from 'react';
import pic03 from '../images/pic03.jpg';
import pic04 from '../images/pic04.jpg';
import pic05 from '../images/pic05.jpg';
import pic06 from '../images/pic06.jpg';

var TwoArticle = React.createClass({
  getInitialState: function() {
    return {
      detail:[
      {
        id:'TwoArticle1',
        img:pic03,
        h3:'Magna',
        p:'Cipdum dolor'
      },
      {
        id:'TwoArticle2',
        img:pic04,
        h3:'Ipsum',
        p:'Vestibulum comm'
      },
      {
        id:'TwoArticle3',
        img:pic05,
        h3:'Tempus',
        p:'Fusce pellentes'
      },
      {
        id:'TwoArticle4',
        img:pic06,
        h3:'Dolore',
        p:'Praesent placer'
      },
      ],
    };
  },
  add: function() {
    this.setState({personBox: [0].concat(this.state.detail)});
  },
  render: function() {
    var personBox = this.state.detail.map(function(result) {
      return  <div className="box person" key={result.id}>
      <div className="image round">
      <img src={result.img} alt="{result.h3}" />
      </div>
      <h3>{result.h3}</h3>
      <p>{result.p}</p>
      </div>

    });
    return (
     <section id="two" className="wrapper style1 special">
     <div className="inner" id="two-box">
     <div className="inner">
     <header>
     <h2>Ipsum Feugiat</h2>
     <p>Semper suscipit posuere apede</p>
     </header>
     <div className="flex flex-4">
     {personBox}
     </div>
     </div>
     </div>
     </section>
     );
  }
});

export default TwoArticle;



