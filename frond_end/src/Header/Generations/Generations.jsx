import Gen1 from './Gen1'
import Gen2 from './Gen2'
import Gen3 from './Gen3'
import Gen4 from './Gen4'

export default function Generations({ title }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 w-3/4 text-center">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="grid grid-cols-2 gap-2">
        <Gen1 title="Generation 1" />
        <Gen2 title="Generation 2" />
        <Gen3 title="Generation 3" />
        <Gen4 title="Generation 4" />
      </div>
    </div>
  )
}

