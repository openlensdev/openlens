import { useParams } from 'react-router-dom'
import { services } from '../data'

export default function ServiceDetail({ dark }) {
  const { slug } = useParams()
  const service = services.find(s => s.t.toLowerCase().replace(/[^a-z0-9]+/g,'-') === slug)
  
  return (
    <div className="min-h-screen pt-32 px-6">
      <h1 className="text-4xl font-black">{service?.t}</h1>
      <p className={`mt-4 ${dark?'text-white/70':'text-gray-600'}`}>{service?.l.join(' • ')}</p>
    </div>
  )
}