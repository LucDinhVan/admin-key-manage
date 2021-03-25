import { Mock, Constant } from './_utils'

const { ApiPrefix } = Constant

const Dashboard = Mock.mock({
  quote: {
    name: 'Joho Doe',
    title: 'Graphic Designer',
    content:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    avatar:
      '/logo.svg',
  },
})

module.exports = {
  [`GET ${ApiPrefix}/dashboard`](req, res) {
    res.json(Dashboard)
  },
}
