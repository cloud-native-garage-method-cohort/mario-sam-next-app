const URI = process.env.PETSTORE_URL
export default function Home({ pets }) {
  
  return (
    <div>
      <h1>Found the following pets!</h1>
      <ul>
      {pets.map((pet) => (
        <li>{pet.name}</li>
      ))}
    </ul>
    </div>
    
  )
}

export async function getStaticProps() {
  const res = await fetch(URI)
  const pets = await res.json()
  return {
    props: {
      pets,
    },
  }
}
