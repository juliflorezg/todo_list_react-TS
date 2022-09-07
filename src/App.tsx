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

  const addReminder = async (title: string) => {
    const newReminder: Reminder = await ReminderService.addReminder(title)

    if (newReminder) {
      setReminders((existingReminders): Reminder[] => {
        return [newReminder as Reminder, ...existingReminders]
      })
    }
  }

  return (
    <div className="w-full min-h-screen px-12 py-20 bg-slate-900">
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  )
}

export default App
