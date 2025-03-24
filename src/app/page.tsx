import Link from "next/link"

export default async function Home (){

  interface myBook{
    id: number,
    name: string,
    type: string,
    available: boolean
  }

  const res = await fetch('https://simple-books-api.glitch.me/books')
  const apis:myBook[] = await res.json()

  return(
    <>
    <div className="h-screen bg-black text-white text-center pt-10">
      <h2 className="text-5xl font-bold">Books</h2>

      {apis.map((book) => {
        return(
          <main key={book.id} className="bg-slate-300 hover:bg-slate-400 text-black text-2xl font-semibold mt-4 mx-96 py-2 rounded-xl transition-transform transform hover:scale-105">
            <Link href={`/books/${book.id}`}>
              <h2>{book.name}</h2>
            </Link>
          </main>
        )
      })}
      </div>
    </>
  )
}