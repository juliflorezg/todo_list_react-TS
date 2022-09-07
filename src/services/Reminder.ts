import { Reminder } from '../models/Reminder'

class ReminderService {
  baseURL = 'https://jsonplaceholder.typicode.com'

  async getReminder() {
    const response = await fetch(`${this.baseURL}/todos`)
    const data: Array<Reminder> = await response.json()

    return data
  }

  async addReminder(title: string) {
    const response = await fetch(`${this.baseURL}/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({title}),
    })

    return response.body
  }

  async removeReminder (id: number){
    const response = await fetch(`${this.baseURL}/todos/${id}`, {
      method: 'DELETE',
      
    })

    return response.body
  }
}

export default new ReminderService()
