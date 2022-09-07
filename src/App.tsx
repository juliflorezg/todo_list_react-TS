import React from 'react'
import ReminderList from './components/ReminderList'
import { Reminder } from './models/Reminder'

const reminders: Reminder[] = [
  {
    id: 1,
    title: 'first reminder'
  },
  {
    id: 2,
    title: 'first reminder'
  }
]

function App() {
  return (
    <div className="w-full min-h-screen px-12 py-20 bg-slate-900">
      <ReminderList items={reminders}/>
    </div>
  )
}

export default App
