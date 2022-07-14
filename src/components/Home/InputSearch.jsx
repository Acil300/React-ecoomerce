import React from 'react'
import { useForm } from 'react-hook-form'

const InputSearch = () => {
  const {handleSubmit,reset,register}=useForm()

const submit = data =>{
  console.log(data)
}

  return (
    <form onSubmit={handleSubmit(submit)} id="form-home">
      <div className="input-container">
        <input
          className="input__search"
          placeholder="what are you looking for"
          type="text"
          {...register("searchText")}
        />
        <button className="input__btn-search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </form>
  );
}

export default InputSearch