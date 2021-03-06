const { Organizations } = require('../models')
module.exports = {
  async findOrganization (id) {
    const organization = await Organizations.findByPk(id)
    return organization
  },
  async postOrganization (name, imageUrl, phone, adress, welcomeText, urlFacebook, urlLinkedin, urlInstagram) {
    await Organizations.create({
      name, imageUrl, phone, adress, welcomeText, urlFacebook, urlLinkedin, urlInstagram
    })
  },
  async putOrganization (id, data) {
    console.log(data)
    await Organizations.update(data, { where: { id } })
  }
}
