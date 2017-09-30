import React from 'react';

var OneArticle = React.createClass({
  getInitialState: function() {
    return {
      memo:[
      {
        id:'OneArticle1',
        h3:"Magna tempus sed ametaliquam veroeros",
        p:'Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu.'
      },
      {
        id:'OneArticle2',
        h3:"Interdum lorem pulvinaradipiscing vitae",
        p:'Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu.'
      },
      {
        id:'OneArticle3',
        h3:"Libero purus magna sapiensed ullamcorper",
        p:'Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu.'
      },
      ],
    };
  },
  add: function() {
    this.setState({memo: [0].concat(this.state.memo)});
  },
  render: function() {
    var memo = this.state.memo.map(function(result) {
      return  <article key={result.id}>
      <header>
      <h3>{result.h3}</h3>
      <p>{result.p}</p>
      </header>
      <footer>
      <a href="#" className="button special">More</a>
      </footer>
      </article>
    });
    return (
      <section id="one" className="wrapper">
      <div className="inner" id="one-box">
      <div className="flex flex-3">
      {memo}
      </div>
      </div>
      </section>
      );
    }
  });

  export default OneArticle;
