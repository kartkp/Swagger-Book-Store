let orders = []

exports.placeOrder = (req, res) => {
  const order = {
    id: orders.length + 1,
    bookId: req.body.bookId,
    quantity: req.body.quantity,
    status: 'placed',
  }
  orders.push(order)
  res.status(201).json(order)
}

exports.getOrder = (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.id))
  if (!order) return res.status(404).json({ message: 'Order not found' })
  res.json(order)
}

exports.deleteOrder = (req, res) => {
  orders = orders.filter(o => o.id !== parseInt(req.params.id))
  res.json({ message: 'Order deleted' })
}
