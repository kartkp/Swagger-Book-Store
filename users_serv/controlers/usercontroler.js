const User = require('../model/user')

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.status(201).json(user)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.getUserByUsername = async (req, res) => {
  const user = await User.findOne({ username: req.params.username })
  if (!user) return res.status(404).json({ message: 'User not found' })
  res.json(user)
}
