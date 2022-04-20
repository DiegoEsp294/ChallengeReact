import { Formik } from 'formik';

import React from 'react';
import SearchForm from '../Presentationals/Home/SearchForm';
import DishList from '../Presentationals/Home/DishList';
import { getAutocompleteURL } from "../api/services";

import axios from 'axios';
import swal from 'sweetalert';

const validation = values => {
  let errors = {};
 
  if (!values.dish) {
    errors.dish = 'Dish name required!';
  } else if (values.dish.length <= 2) {
    errors.dish = 'Dish name has to be 2 character at less!';
  }
  return errors;
 }

const Search = (props) => (
  <>
    <Formik
      initialValues={{
        dish: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        props.handleSearchLoad(true)
        axios.get(getAutocompleteURL(true,10,values.dish))
        .then(res => {
          props.updateDataSearch(res.data.results);
          setSubmitting(false); //disabled
          props.handleSearchLoad(false); //update load
        })
        .catch(err => {
          setSubmitting(false);
          props.handleSearchLoad(false);
          swal(err.response.data.error)
        })
      }}
      validate={validation}
    >
      { props => 
        <SearchForm {...props} />
      }
    </Formik>
    <div className="back-list">
      <DishList
        data={props.data}
        is_Search={true}
        handleAddRecipie={props.handleAddRecipie}
        loading={props.loading}
      />
    </div>
  </>
 );

export default Search;
