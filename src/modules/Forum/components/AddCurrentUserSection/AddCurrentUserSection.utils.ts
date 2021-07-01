export interface  AddCurrentUserFormFormValues  {
  authorFirstName: string,
  authorLastName: string,
  fieldsAreEmpty: string
}

export interface AddCurrentUserSectionProps {
  setIsCurrentUserExist:  (arg: boolean) => void
}