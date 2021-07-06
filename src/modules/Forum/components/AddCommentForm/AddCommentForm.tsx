import { Field, Form, Formik, FormikErrors } from "formik";
import React, { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Grid } from "@material-ui/core";
import { getCurrentUser } from "../../store/selectors";
import { addNewComment, fetchCategories } from "../../store/actions";
import { CommentItem } from "../../../../shared/types";
import { AddCommentFormFormValues, AddCommentFormProps } from "./AddCommentForm.utils";
import { FormLabel, useFormStyles } from "../../../../shared/styles/FormElements.style";
import {
  Container,
  StyledFormInputVisible,
} from "../AddTopicForm/AddTopicForm.style";
import { useAddCommentFormStyles } from "./AddCommentForm.style";
import { ErrorMessage, StyledFormButton } from "../SearchForm/SearchForm.style";


const validate = ({ comment }: AddCommentFormFormValues) => {
  const errors: FormikErrors<AddCommentFormFormValues> = {}
  const isFormEmpty = !comment
  if (isFormEmpty) {
    errors.fieldsAreEmpty = 'Please enter the comment.'
  }
  return errors
}

const AddCommentForm: React.FC<AddCommentFormProps> = ({
                                                         topicId,
                                                         setIsSubmitted
                                                       }) => {

  const dispatch = useDispatch()

  const classes = useFormStyles()
  const classes2 = useAddCommentFormStyles()

  const [addedComment, setAddedComment] = React.useState('');

  const currentUserStr = useSelector(getCurrentUser)

  useEffect(() => {
      dispatch(fetchCategories())
    }, []
  )

  const currentUser = currentUserStr ? JSON.parse(currentUserStr) : {}

  const saveNewComment = () => {
    const date = new Date()
    const id = nanoid(8)

    if (currentUser && typeof currentUser === 'object') {
      const newComment: CommentItem = {
        authorFirstName: currentUser['authorFirstName'] ? currentUser['authorFirstName'] : '',
        authorLastName: currentUser['authorLastName'] ? currentUser['authorLastName'] : '',
        authorId: currentUser['authorId'] ? currentUser['authorId'] : '',
        body: addedComment ? addedComment : '',
        createdAt: date.toDateString(),
        id: id,
        postId: topicId,
      }

      dispatch(addNewComment(newComment))
      setAddedComment('')
      setIsSubmitted(true)
    }

  }

  const initialValues: AddCommentFormFormValues = {
    comment: '',
    fieldsAreEmpty: 'Please enter the name and surname to be able submit the form and add new topic.'
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
          const { values, errors, submitForm } = props

          return (
            <Form>
              <Grid container spacing={1}>
                <Grid
                  className={classes2.addCommentFormWrapper}
                >
                  <FormLabel
                    htmlFor="comment"
                    className={classes2.searchFormLabel}
                  >
                    Add comment
                  </FormLabel>
                  <Field
                    id="comment"
                    name="comment"
                    type="text"
                    as={StyledFormInputVisible}
                    placeholder={''}
                    value={addedComment ? addedComment : ''}
                    onChange={(e: ChangeEvent<{ value: unknown }>) => {
                      setAddedComment(e.target.value as string)
                    }}
                    className={
                      (classes.formInput,
                        errors.fieldsAreEmpty ? classes.borderError : '')
                    }
                  />
                </Grid>

                <Grid className={classes.searchFormWrapper}>
                  <StyledFormButton
                    type="submit"
                    onClick={() => saveNewComment()}
                    className={classes2.formButton}
                    disabled={!addedComment}
                  >
                    Post
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

export default AddCommentForm