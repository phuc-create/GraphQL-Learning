import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../Layouts/Header'
import ListDebt from './ListDebt'
import ListBorrow from './ListBorrow'
import ListSave from './ListSave'

const OweUser: React.FC = () => {
  const { isAuthenticated, inforUser } = useSelector(
    (state: { user: any }) => state.user
  )
  return (
    <Router>
      <Header auth={isAuthenticated} infor={inforUser} />
      <div className='component-wrap'>
        {/* <CurrentInforSaved /> */}
        <Switch>
          <Route exact path='/' component={ListSave} />
          <Route exact path='/debt' component={ListDebt} />
          <Route exact path='/borrow' component={ListBorrow} />
        </Switch>
      </div>
    </Router>
  )
}

export default OweUser

