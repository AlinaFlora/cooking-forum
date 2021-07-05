export interface AddCommentFormProps {
  topicId: string,
  setIsSubmitted: (arg: boolean) => void
}
export interface AddCommentFormFormValues {
  comment: string,
  fieldsAreEmpty: string
}