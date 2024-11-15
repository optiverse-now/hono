import { Hono } from 'hono'

const app = new Hono()

let blogPosts = [
  {
    id:"1",
    title:"blog1",
    content:"blogblog1"
  },
  {
    id:"2",
    title:"blog2",
    content:"blogblog2"
  },
  {
    id:"3",
    title:"blog3",
    content:"blogblog3"
  }
]

app.get('/', (c) => {
  return c.text('hello hono')
})

export default app
