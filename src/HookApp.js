import React, { useState, useEffect } from 'react'

function getTime() {
  const time = new Date()
  const hour = time.getHours()
  const minute = time.getMinutes()
  const second = time.getSeconds()
  return `${hour}：${minute}：${second}`
}

const HookApp = () => {
  const [ time, setTime ] = useState('')

  // replace componentdidmount and componentwillmount
  useEffect(() => {
    const DateTimeNow = getTime()
    const id = setInterval(() => setTime(DateTimeNow), 1000)
    return () => clearInterval(id)
  })

  return (
    <h4>{time}</h4>
  )
}

export default HookApp;