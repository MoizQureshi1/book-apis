
interface params{
    params:{
        id:string
    }
}
interface IBook{
    id: number,
    name: string,
    author: string,
    isbn: string,
    type: string,
    price: number,
    'current-stock': number,
    available: boolean
  }

const page = async ({params}:params) => {
    const { id } = await params
    
    const res = await fetch(`https://simple-books-api.glitch.me/books/${id}`);
    const data:IBook = await res.json();
    console.log(data);
    
    return(
        <>
        <main className="h-screen bg-black text-white text-center text-3xl font-bold pt-16">
            <h2 className="mb-5 text-4xl">Book Details {data.name}</h2>
            <div className="bg-slate-950 mx-80 py-8">
                <h1 className="mt-3">Id: {id}</h1>
                <h2 className="mt-3">Name: {data.name}</h2>
                <h2 className="mt-3">Author: {data.author}</h2>
                <h2 className="mt-3">Isbn: {data.isbn}</h2>
                <h2 className="mt-3">Type: {data.type}</h2>
                <h2 className="mt-3">Price: {data.price}</h2>
                <h2 className="mt-3">Current-Stock: {data["current-stock"]}</h2>
                <h2 className="mt-3">Available: {data.available}</h2>
            </div>
        </main>
        </>
    )
}

export default page