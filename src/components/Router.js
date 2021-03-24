import React from 'react'
import {BrowserRouter as Router,Route,Link,Switch,} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
function Routers() {
    return (
        <div>
            <Router>
                <main>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/about" component={About} />
                    </Switch>
                </main>
            </Router>
        </div>
    )
}

export default Routers
