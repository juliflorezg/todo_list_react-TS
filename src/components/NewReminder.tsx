import React, { useState } from 'react'

export default function NewReminder(): JSX.Element {
  const [title, setTitle] = useState('')

  return (
    <form className="max-w-2xl mx-auto p-5 flex flex-col justify-center items-center gap-4">
      <label htmlFor="title"></label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="min-w-[400px] py-3 px-2"
      />
      <button className="px-4 py-2 bg-teal-400 rounded-3xl">
        Add reminder
      </button>
    </form>
  )
}
