
import { useState } from 'react'
import { categories } from './data/categories'
import CategorySelector from './components/CategorySelector'
import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  return (
    <div>
      <h1>Kategorie auswählen</h1>

      <CategorySelector
        categories={categories}
        selectedCategory={selectedCategory}
        onChange={setSelectedCategory}
      />

      <p>
        Ausgewählte Kategorie: {selectedCategory}
      </p>
    </div>
  )
}

export default App
