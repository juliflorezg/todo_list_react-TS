import React, { useEffect, useState } from 'react'
import NewReminder from './components/NewReminder'
import ReminderList from './components/ReminderList'
import { Reminder } from './models/Reminder'
import ReminderService from './services/Reminder'

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([])

  const loadReminders = async () => {
    const reminders = await ReminderService.getReminder()

    setReminders(reminders)
  }
  useEffect(() => {
    loadReminders()
  }, [])

  const removeReminder = (id: number) => {
    setReminders(reminders.filter(item => item.id !== id))
  }

  return (
    <div className="w-full min-h-screen px-12 py-20 bg-slate-900">
      <NewReminder/>
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  )
}

export default App
