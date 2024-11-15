import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('developブランチ作成')
})

export default app
