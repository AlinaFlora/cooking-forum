export interface AddTopicFormFormValues {
  title: string,
  content?: string,
  category: string,
  fieldsAreEmpty: string
}

export interface AddTopicFormProps {
  setIsSubmitted: (arg: boolean) => void
}