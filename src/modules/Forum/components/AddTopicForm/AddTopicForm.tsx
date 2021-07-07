import { Field, Form, Formik, FormikErrors } from "formik";
import React, { ChangeEvent, useEffect } from "react";
import { Grid } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getCurrentUser } from "../../store/selectors";
import { removeWhitespaces } from "../../../../shared/utils/helpers";
import { addNewPost, fetchCategories } from "../../store/actions";
import { AddTopicFormFormValues, AddTopicFormProps } from "./AddTopicForm.utils";
import { PostItem, TopicCategory } from "../../../../shared/types";
import { FormLabel, useFormStyles } from "../../../../shared/styles/FormElements.style";
import { ErrorMessage, StyledFormButton } from "../SearchForm/SearchForm.style";
import { Container, FormSelect, StyledFormInputVisible, StyledFormTextareaVisible, useAddTopicFormStyles } from "./AddTopicForm.style";

const validate = ({ title, content, category  }: AddTopicFormFormValues) => {
  const errors: FormikErrors<AddTopicFormFormValues> = {}
   const isFormEmpty = !title || !category
  if (isFormEmpty) {
    errors.fieldsAreEmpty = 'Please enter the name and surname to be able submit the form and add new topic.'
  }
  return errors
}

  const AddTopicForm: React.FC<AddTopicFormProps> = ({
                                                       setIsSubmitted
                                                     }) => {

  const dispatch = useDispatch()

  const classes = useFormStyles()
  const classes2 = useAddTopicFormStyles()

  const [selectedCategory, setCategory] = React.useState('Other');
  const [addedTitle, setAddedTitle] = React.useState('');
  const [addedContent, setAddedContent] = React.useState('');

  const currentUserStr = useSelector(getCurrentUser)
  const categories = useSelector(getCategories)

  useEffect(() => {
      dispatch(fetchCategories())
    }, []
  )

  const currentUser = currentUserStr? JSON.parse(currentUserStr) : {}

  const saveNewPost = ()=> {
    const date =  new Date()
    const title = removeWhitespaces(addedTitle)
    const postContent = addedContent
    const id = nanoid(8)

    if(currentUser && typeof currentUser === 'object'){
      const newPost : PostItem = {
        authorFirstName: currentUser['authorFirstName']? currentUser['authorFirstName']: '',
        authorLastName: currentUser['authorLastName']? currentUser['authorLastName'] : '',
        authorId: currentUser['authorId']? currentUser['authorId'] : '',
        content: postContent? postContent : '',
        title: title? title : '',
        category: selectedCategory? selectedCategory : '',
        createdAt: date.toDateString(),
        id: id,
        likesCount: 0
      }

      dispatch(addNewPost(newPost))
      setAddedContent('')
      setAddedTitle('')
      setCategory('')
      setIsSubmitted(true)
    }


  }

  const initialValues: AddTopicFormFormValues = {
    content: '',
    title: '',
    category: '',
    fieldsAreEmpty: 'Please enter the name and surname to be able submit the form and add new topic.'
  }

  const categoryList = () =>
    {
      const menuItems = categories.map((category: TopicCategory)=> {
        return (<MenuItem key = {category.title} value={category.title}>{category.title}</MenuItem>)
      })
      return [...menuItems]
    }

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={() => {
        }}
        validate={validate}
      >
        {props => {
          const { values, errors, submitForm} = props

          return (
            <Form>
              <Grid container spacing={1}>
                <Grid
                  className={classes2.addTopicFormWrapper}
                >
                  <FormLabel
                    htmlFor="title"
                    className={classes2.searchFormLabel}
                  >
                    Title
                  </FormLabel>
                  <Field
                    id="title"
                    name="title"
                    type="text"
                    as={StyledFormInputVisible}
                    placeholder={''}
                    value={addedTitle? addedTitle : ''}
                    onChange={(e: ChangeEvent<{ value: unknown }>) => {
                      setAddedTitle(e.target.value as string)
                    }}
                    className={
                      (classes.formInput,
                        errors.fieldsAreEmpty ? classes.borderError : '')
                    }
                  />
                </Grid>
                <Grid className={classes2.addTopicFormWrapper}>
                  <FormLabel
                    htmlFor="category"
                    className={classes2.searchFormLabel}
                  >
                    Category
                  </FormLabel>
                  <div className={classes.formSelect}>
                    <FormSelect
                      id="category"
                      name="category"
                      displayEmpty
                      className={
                        errors.fieldsAreEmpty ? classes.borderError : ''
                      }
                      value={selectedCategory ? selectedCategory : ''}
                      onChange={(e: ChangeEvent<{ value: unknown }>) => {
                        setCategory(e.target.value as string)
                      }}
                    >
                      {categoryList()}
                    </FormSelect>
                  </div>
                </Grid>
                <Grid className={classes2.addTopicFormWrapper}>
                  <FormLabel
                    htmlFor="content"
                    className={classes2.searchFormLabel}
                  >
                    Content
                  </FormLabel>
                  <Field
                    id="content"
                    name="content"
                    component="textarea"
                    rows="4"
                    as={StyledFormTextareaVisible}
                    cols={70}
                    value={addedContent? addedContent : ''}
                    onChange={(e: ChangeEvent<{ value: unknown }>) => {
                      setAddedContent(e.target.value as string)
                    }}
                    placeholder={''}
                    className={
                      classes.formTextArea
                    }
                  />
                </Grid>
                <Grid className={classes.searchFormWrapper}>
                  <StyledFormButton
                    type="submit"
                    onClick={ () => saveNewPost()}
                    className={classes2.formButton}
                    disabled={!addedContent || !addedTitle || !selectedCategory}
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
          )
        }
        }
      </Formik>
    </Container>
  )
}

export default AddTopicForm
