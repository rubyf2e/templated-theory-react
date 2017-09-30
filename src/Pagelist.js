import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Generic from './Generic'
import Topics from './Elements'
import Elements from './Elements'
import Home from './Home'


const Image          = () => <div style={{width: '100%',height: 100,background: 'purple'}}></div>
const ImageView      = () => <Link to={{pathname: '/img/ImageView',state: { modal: true }}}>Click Me!</Link>
const IndexThumbnail = () => <div style={{width: '100%',height: 50,margin: 100,background: 'blue'}}/>
const Purple         = () => <Link to={{pathname: '/img/Purple',state: { modal: true }}}><IndexThumbnail/></Link>
const Close          = () => <button type='button'>Close</button>
const NavPanel       = () => (
      <div id="navPanel" className="visible">
      <Link to="/Elements">Elements</Link>
      <Link to="/Generic">Generic</Link>
      <Link to="/Topics">Topics</Link>
      <Link to="/Purple">Purple</Link>
      <Link to="/Home" className="close"></Link>
      </div>
      )

const Pagelist       = () => (
      <header id="header">
      <div className="inner">
      <Link to="/Home" className="logo">Theory</Link>
      <nav id="nav">
      <Link to="/Elements">Elements</Link>
      <Link to="/Generic">Generic</Link>
      <Link to="/Topics">Topics</Link>
      <Link to="/Purple">Purple</Link>
      </nav>
      <Link to="/NavPanel" className="navPanelToggle"><span className="fa fa-bars"></span></Link>
      </div>
      </header>
      )



const Modal          = ({ match, history }) => {
          const back = (e) => {
            e.stopPropagation()
            history.goBack()
          }

          return (
          <div onClick={back} style={{border: '2px solid #444',float:'left'}}>
          <Image/>
          <Close/>
          </div>
          )
  }


  class PagelistBox extends React.Component {
    previousLocation = this.props.location
    componentWillUpdate(nextProps) {
      const { location } = this.props
      if (nextProps.history.action !== 'POP' && (!location.state || !location.state.modal)) {
        this.previousLocation = this.props.location
    }
  }


  render() {
    const { location } = this.props
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
      )

    const RoutePath = () => (
      <div>
      <Pagelist/>
      <Route exact path="/" component={Home}/>
      <Route path="/Home" component={Home}/>
      <Route path="/NavPanel" component={NavPanel}/>
      <Route path="/Elements" component={Elements}/>
      <Route path="/Generic" component={Generic}/>
      <Route path="/Topics" component={Topics}/>
      <Switch location={isModal ? this.previousLocation : location}>
      <Route path='/Purple' component={Purple}/>
      <Route path='/img/Purple' component={ImageView}/>
      </Switch>
      {isModal ? <Route path='/img/Purple' component={Modal} /> : null}
      </div>
      )

      return (
      <Router>
      <RoutePath/>
      </Router>
      )

    }

  }



  const ModalPurple = () => (
  <Router>
  <Route component={PagelistBox} />
  </Router>
  )


  export default ModalPurple;
