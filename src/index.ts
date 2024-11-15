import { Hono } from 'hono'
import { prettyJSON } from 'hono/pretty-json'

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

app.use("*", prettyJSON());

app.get('/', (c) => {
  return c.text('hello hono')
})

app.get("/posts", (c) => c.json({posts:blogPosts}));

export default app
