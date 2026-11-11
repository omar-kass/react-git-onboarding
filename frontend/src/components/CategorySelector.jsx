function CategorySelector({ categories, selectedCategory, onChange }) {
  return (
    <div>
      <label htmlFor="category">Kategorie:</label>

      <select
        id="category"
        value={selectedCategory}
        onChange={(event) => onChange(event.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CategorySelector