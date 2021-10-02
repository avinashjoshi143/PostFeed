
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import PostEditPage from './pages/posteditpage/posteditpage.component';



function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/formeditpage' component={PostEditPage} />
      </Switch>
    </>
  )
}

export default App;