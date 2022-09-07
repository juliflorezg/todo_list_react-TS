import React from 'react'
import { Reminder } from '../models/Reminder'

interface ReminderListProps {
  items: Reminder[]
  onRemoveReminder: (id:number) => void
}

export default function ReminderList({ items, onRemoveReminder }: ReminderListProps) {
  return (
    <ul className="max-w-2xl mx-auto text-white text-center">
      {items.map(item => (
        <li className="flex justify-between items-center mb-7 border-b-2 border-teal-200" key={item.id}>
          {item.title}
          <button className="px-5 py-2 border-2 border-red-500 rounded-xl" onClick={()=>{onRemoveReminder(item.id)}}>Delete</button>
        </li>
      ))}
    </ul>
  )
}
