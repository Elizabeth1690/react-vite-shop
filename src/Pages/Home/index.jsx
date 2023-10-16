import { useState, useEffect } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'

function Home() {
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setItems(data))

  }, [])



  return (
    <Layout>
      <div className='mt-4 grid gap-6 mx- grid-cols-4 max-w-screen-xl'>   {
        items?.map(item => (
          <Card key={item.id} data={item} />
        ))
      }</div>

    </Layout>
  )
}

export default Home

