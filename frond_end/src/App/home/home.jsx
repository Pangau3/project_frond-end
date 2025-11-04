import Search from './Search'
import CardInfo from './CardInfo/CardInfo'

export default function Home({ title }) {
  return (
    <main className="flex flex-col items-center my-6 w-full">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <Search title="Search Component" />
      <CardInfo title="Card Info Section" />
    </main>
  )
}
