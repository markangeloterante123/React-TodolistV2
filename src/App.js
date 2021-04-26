
import { Switch, Route } from 'react-router-dom'

import Home from './components/view/Index'

const App = () => {
	

	return (
		<Switch>
			<Route exact path="/" component={Home} />
		</Switch>
	)
}

export default App