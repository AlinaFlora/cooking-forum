import { Grid } from '@material-ui/core'
import { useHistory, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { Formik, Form, Field, FormikErrors } from 'formik'
import { SearchFormFormValues, SearchFormPropTypes } from "./SearchForm.utils"
import { FormLabel, useFormStyles } from '../../../../shared/styles/FormElements.style'
import {
  Container,
  StyledFormInput,
  StyledFormButton,
  ErrorMessage,
} from './SearchForm.style'


const validate = ({ searchString  }: SearchFormFormValues) => {
  const errors: FormikErrors<SearchFormFormValues> = {}
  const isFormEmpty = !searchString

  if (isFormEmpty) {
    errors.fieldsAreEmpty = 'Please enter the search keywords'
  }

  return errors
}

const SearchForm: React.FC<SearchFormPropTypes> = ({ }) => {
  const history = useHistory()
  const classes = useFormStyles()
  const location = useLocation()

  const searchValues = queryString.parse(location.search)

  const initialValues: SearchFormFormValues = {
    searchString: searchValues.searchString ? searchValues.searchString : '',
    fieldsAreEmpty: 'Please enter the search keywords'
  }

  const removeWhitespaces = (searchStr: string | string[]) => {
    if (searchStr && typeof searchStr === 'string') {
      return searchStr.trim()
    }
  }


  return (
    <Container className={classes.container}>
        <Formik
          initialValues={initialValues}
          onSubmit={values => {
            const searchString = values.searchString
              ? removeWhitespaces(values.searchString)
              : ''

            let str = '?' + (searchString ? `searchString=${searchString}&` : '')
            if (str.endsWith('&')) {
              str = str.slice(0, -1)
            }

            const location = {
              pathname: `/recipes`,
              search: str,
            }
            history.push(location)
          }}
          validate={validate}
        >
          {({ values, setFieldValue, errors }) => (
            <Form>
              <Grid container spacing={1}>
                  <Grid
                    className={classes.searchFormWrapper}
                  >
                  <FormLabel
                    htmlFor="searchString"
                    className={classes.searchFormLabel}
                  >
                   Search receipts
                  </FormLabel>
                  <Field
                    id="searchString"
                    name="searchString"
                    type="text"
                    as={StyledFormInput}
                    placeholder={''}
                    className={
                      ( classes.formInput,
                      errors.fieldsAreEmpty ? classes.borderError : '')
                    }
                  />

                  <StyledFormButton
                    variant="contained"
                    type="submit"
                    className={classes.formButton}
                  >
                   Search
                  </StyledFormButton>
                </Grid>
              </Grid>
              <ErrorMessage
                className={errors.fieldsAreEmpty ? classes.errorVisible : ''}
              >
                {values.fieldsAreEmpty}
              </ErrorMessage>
            </Form>
          )}
        </Formik>
    </Container>
  )
}

export default SearchForm
