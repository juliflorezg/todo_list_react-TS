import React from 'react'
import { Reminder } from '../models/Reminder'

interface ReminderListProps {
  items: Reminder[]
}

export default function ReminderList({ items }: ReminderListProps) {
  return (
    <ul className='max-w-2xl mx-auto text-white text-center'>
      {items.map(item => (
        <li className='mb-7 border-b-2 border-teal-200' key={item.id}>{item.title}</li>
      ))}
    </ul>
  )
}
