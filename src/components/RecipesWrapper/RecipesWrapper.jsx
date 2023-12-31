import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Search from '../Search/Search'
import Loading from '../Loading/Loading'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import Empty from '../Empty/Empty'
import RecipesList from '../RecipesLIst/RecipesList'
import useFilteredRecipes from '../../hooks/useFilteredRecipes'

const RecipesWrapper = ({children}) => {
  const {
    status, error, 
    filteredRecipes, 
    setFilteredResipes, recipes} = useFilteredRecipes()

  return (
  <div className="dishes__container container">
    {status === 'success' && 
      <>
        {children}
        <Search recipes={recipes} setFilteredResipes={setFilteredResipes}/>
        <div className="dishes__cards">
          {filteredRecipes.length !== 0
          ? <RecipesList recipes={filteredRecipes}/>
          : <Empty />
          }
        </div>
      </>
    }
    {status === 'loading' && <Loading />}
    {status === 'error' && <ErrorMessage error={error}/>}
  </div>
  )
}

export default RecipesWrapper