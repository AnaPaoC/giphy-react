import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(
        ['Scott Pilgrim']
    )

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return
        setCategories([newCategory, ...categories])
        /* setCategories(cat => [...cat, 'Rocket']) */
    }

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* input */}
        <AddCategory
            /* propCategory={ setCategories } */
            onNewCategory={ onAddCategory }
        />

        {/* listado de gif */}
        { categories.map(category => (
            <GifGrid key={ category }
            category={ category }/>
        ) ) }
    </>
  )
}
