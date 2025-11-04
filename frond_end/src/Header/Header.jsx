import React from 'react'
import Logo from './Logo'
import Generations from './Generations/Generations'

export default function Header({ title }) {
  return (
    <header className="w-full bg-green-600 text-white p-4 rounded-b-2xl shadow-md text-center">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <div className="flex flex-col items-center gap-3">
        <Logo title="Header Logo" />
        <Generations title="Generations" />
      </div>
    </header>
  )
}
