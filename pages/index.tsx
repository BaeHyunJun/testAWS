import type { NextPage } from 'next'
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react-v1";

const Home: NextPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from V2</h1>
      </header>
      <AmplifySignOut />
    </div>
  )
}

export default withAuthenticator(Home);
