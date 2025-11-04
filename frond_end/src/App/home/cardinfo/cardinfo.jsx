import Evolution from './Evolution'
import TypeEffect from './TypeEffect'
import Logo from './Logo'

export default function CardInfo({ title }) {
  return (
    <div className="bg-white p-4 mt-4 rounded-xl shadow w-3/4 text-center">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <div className="flex flex-col md:flex-row justify-around gap-3">
        <Evolution title="Evolution" />
        <TypeEffect title="Type Effect" />
        <Logo title="Card Logo" />
      </div>
    </div>
  )
}
