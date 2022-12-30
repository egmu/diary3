let handler = function (m) {
  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  conn.sendContact(m.chat, '6289519240209', 'Bang DO I CARE?', m)
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(kontak)$/i

module.exports = handler
