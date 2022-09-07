import React, { useState } from 'react'
import ReminderList from './components/ReminderList'
import { Reminder } from './models/Reminder'

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([
    {
      id: 1,
      title: 'Reminder 1',
    },
  ])

  return (
    <div className="w-full min-h-screen px-12 py-20 bg-slate-900">
      <ReminderList items={reminders} />
    </div>
  )
}

export default App
