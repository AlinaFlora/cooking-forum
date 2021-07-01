import { Field, Form, Formik, FormikErrors } from "formik";
import React from "react"
import { Grid } from "@material-ui/core";
import { AddCurrentUserFormFormValues, AddCurrentUserSectionProps } from "./AddCurrentUserSection.utils";
import { CurrentUser } from "../../../../shared/types";
import { nanoid } from "@reduxjs/toolkit";
import { removeWhitespaces } from "../../../../shared/utils/helpers";
import { FormLabel, useFormStyles } from "../../../../shared/styles/FormElements.style";
import { ErrorMessage, StyledFormButton } from "../SearchForm/SearchForm.style";
import { Container, StyledFormInputVisible, useAddUserFormStyles } from "./AddCurrentUserSection.style";


const validate = ({ authorFirstName, authorLastName  }: AddCurrentUserFormFormValues) => {
  const errors: FormikErrors<AddCurrentUserFormFormValues> = {}
  const isFormEmpty = !authorFirstName || !authorLastName

  if (isFormEmpty) {
    errors.fieldsAreEmpty = 'Please enter the name and surname to be able submit the form and add new topic.'
  }
  return errors
}


const AddCurrentUserSection: React.FC<AddCurrentUserSectionProps> = ({
                                                              setIsCurrentUserExist
                                                            }) => {

  const classes = useFormStyles()
  const classes2 = useAddUserFormStyles()

const  saveCurrentUser =(values: AddCurrentUserFormFormValues)=> {
  const date =  new Date()
  const authorFirstName = removeWhitespaces(values.authorFirstName)
  const authorLastName = removeWhitespaces(values.authorLastName)

  const currentUser: CurrentUser = {
    authorFirstName: authorFirstName? authorFirstName : '',
    authorLastName: authorLastName? authorLastName : '',
    createdAt: date.toDateString(),
    authorId: nanoid(8)
  }
   localStorage.setItem('currentUser', JSON.stringify(currentUser))
  setIsCurrentUserExist(true)
  }

  const initialValues: AddCurrentUserFormFormValues = {
    authorFirstName: '',
    authorLastName: '',
    fieldsAreEmpty: 'Please enter the name and surname to be able submit the form and add new topic.'
  }

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          saveCurrentUser(values)
        }}
        validate={validate}
      >
        {({ values, errors }) => (
          <Form>
            <Grid container spacing={1}>
              <Grid
                className={classes2.addUserFormWrapper}
              >
                <FormLabel
                  htmlFor="authorFirstName"
                  className={classes2.searchFormLabel}
                >
                  First Name
                </FormLabel>
                <Field
                  id="authorFirstName"
                  name="authorFirstName"
                  type="text"
                  as={StyledFormInputVisible}
                  placeholder={''}
                  className={
                    ( classes.formInput,
                      errors.fieldsAreEmpty ? classes.borderError : '')
                  }
                />
              </Grid>
              <Grid  className={classes2.addUserFormWrapper}>
                <FormLabel
                  htmlFor="authorLastName"
                  className={classes2.searchFormLabel}
                >
                  Last Name
                </FormLabel>
                <Field
                  id="authorLastName"
                  name="authorLastName"
                  type="text"
                  as={StyledFormInputVisible}
                  placeholder={''}
                  className={
                    ( classes.formInput,
                      errors.fieldsAreEmpty ? classes.borderError : '')
                  }
                />
              </Grid>
              <Grid className={classes.searchFormWrapper}>
                <StyledFormButton
                  type="submit"
                  className={classes2.formButton}
                >
                  Submit
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

export default AddCurrentUserSection
