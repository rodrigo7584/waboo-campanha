'use client'
// Importe o useState e useEffect se ainda não estiverem importados
import { useState, useEffect } from 'react'

const EnviarEmail = () => {
  const [formData, setFormData] = useState({ name: '', number: '' })
  const [message, setMessage] = useState('') // Estado para armazenar a mensagem

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await fetch('/api/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (data.success) {
        setMessage('Mensagem enviada com sucesso!')
      } else {
        setMessage(`Erro ao enviar mensagem: ${data.message}`)
      }
    } catch (error) {
      setMessage('Erro na solicitação: ' + error.message)
    }
  }

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    // Limpa a mensagem após 3 segundos
    const timeoutId = setTimeout(() => {
      setMessage('')
    }, 3000)

    return () => clearTimeout(timeoutId) // Limpa o timeout ao desmontar o componente
  }, [message])

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Informe seu nome" onChange={handleChange} />
      <input type="text" name="number" placeholder="Informe seu número" onChange={handleChange} />
      <p>{message}</p> {/* Exibe a mensagem aqui */}
      <button type="submit" className="btn-green">
        Enviar
      </button>
    </form>
  )
}

export default EnviarEmail
