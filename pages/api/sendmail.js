import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, number, email, message } = req.body

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rodrigo.gandhi.oliveira@gmail.com',
          pass: 'iqqkvbnxhurwipmg'
        }
      })

      // Configurações do e-mail a ser enviado
      const mailOptions = {
        from: `${email}`,
        to: 'contato@waboo.com.br',
        subject: 'Contato site campanha waboo',
        text: `Nome: ${name}\nNúmero: ${number}\nMensagem: ${message}`
      }

      // Envia o e-mail
      const info = await transporter.sendMail(mailOptions)

      console.log('E-mail enviado:', info.response)

      res
        .status(200)
        .json({ success: true, message: 'Mensagem enviada com sucesso!' })
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error)
      res
        .status(500)
        .json({ success: false, message: 'Erro ao enviar a mensagem.' })
    }
  } else {
    res.status(405).json({ success: false, message: 'Método não permitido.' })
  }
}
