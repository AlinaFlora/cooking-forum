import { styled } from '@material-ui/core'
import { colors } from "../../../../config";
import {
  FormInput,
  FormButton,
}  from '../../../../shared/styles/FormElements.style'

export const Container = styled('div')({
  position: 'static',
  margin: '19px 0 0 0',
  backgroundColor: colors.background.secondary,
  borderRadius: 10,
  padding: 35,
  paddingTop: 45,
  paddingBottom: 15,
})

export const StyledFormInput = styled(FormInput)({
  padding: '16px 17px',
  fontSize: 16,
  '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active': {
    boxShadow: '0 0 0 30px white inset',
  },
})

export const ErrorMessage = styled('span')({
  display: 'block',
  color: colors.error,
  marginTop: 25,
  fontSize: 16,
  opacity: 0,
  transition: 'opacity .3s',
  textAlign: 'right',
})

export const StyledFormButton = styled(FormButton)({
  padding: '7.5px 30px',
})


