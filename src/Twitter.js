import React, { useEffect, useState, memo } from 'react';

const areEqual = (prevProps, nextProps) => {
  return prevProps.loading === nextProps.loading
}

function Twitter(props) {
  const { loading } = props
  const [tweet, setTweet] = useState('title')

  // componentDidMount
  useEffect(() => {
    const { posts, loading } = props
    console.log('componentDidMount', posts)
    console.log('componentDidMount:loading', loading)
  }, [])

  // componentDidUpdate
  useEffect(() => {
    console.log('componentDidUpdate', loading)
  }, [loading])

  // componentWillUnmount
    useEffect(() => {
      return () => {
        console.log('componentWillUnmount fui removido: :(')
      }
    }, [])

  // componentDidUpdate = (prevProps) => {
  //   const { loading } = props
  //   if(props.loading !== prevProps.loading){
  //     console.log('componentDidUpdate:loading', loading)
  //   }
  // }

  // componentWillUnmount = () => {
  //   console.log('componentWillUnmount fui removido: :(')
  // }

  // shouldComponentUpdate = (nextProps, nextState) => {
  //   return state.tweet !== nextState.tweet
  // }

  const handleTweet = () => {
    setTweet('Tweet atualizado')
  }

    console.log('Tweet atualizado: ', tweet)
    // console.log('render', posts)
    return (
      <div>
        <button onClick={handleTweet}>Re-render</button>
        Twitter
      </div>
    )
  
}

export default memo(Twitter, areEqual);