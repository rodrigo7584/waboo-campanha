'use client'
import { useState, useEffect } from 'react'

interface EnviarEmailProps {}

const EnviarEmail: React.FC<EnviarEmailProps> = () => {
  const [formData, setFormData] = useState({ name: '', number: '' })
  const [message, setMessage] = useState('') 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    } catch (error:any) {
      setMessage('Erro na solicitação: ' + error.message)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMessage('')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [message])

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Informe seu nome"
        onChange={handleChange}
      />
      <input
        type="text"
        name="number"
        placeholder="Informe seu número"
        onChange={handleChange}
      />
      <p>{message}</p> {/* Exibe a mensagem aqui */}
      <button type="submit" className="btn-green">
        Enviar
      </button>
    </form>
  )
}

export default EnviarEmail
