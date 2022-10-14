import { useState } from 'react'
import { Tweet } from './components/Tweet'
import AppRoutes from './Routes'

function App() {
    // const [tweets, setTweets] = useState<string[]>([
    //     'Tweet 1',
    //     'Tweet 2',
    //     'Tweet 3',
    //     'Tweet 4',
    // ])

    // function createTweet() {
    //     setTweets([...tweets, 'New Tweet'])
    // };

    return (
        <AppRoutes />
        // <div>
        // {tweets.map(tweet =>{
        //     return <Tweet text={tweet} />
        // })}

        // <button 
        //     onClick={createTweet}
        //     className="bg-indigo-600"
        //     >Adicionar um Tweet</button>

        // </div>
    )
}

export default App

