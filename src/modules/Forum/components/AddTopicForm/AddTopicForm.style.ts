import { makeStyles, styled } from "@material-ui/core";
import { FormInput } from "../../../../shared/styles/FormElements.style";
import { colors } from "../../../../config";
import Select from "@material-ui/core/Select";

export const Container = styled('div')({
  padding: '0 150px',
  marginTop: 20,
  maxWidth: '800px',
  '@media (min-width:1741px)': {
    padding: '0 10vw',
  },
})

export const FormSelect = styled(Select)({
  width: '100%',
  fontSize: 18,
  '& div': {
    padding: '12px 17px',
    borderRadius: 15,
    fontSize: 14,
    width:'100%',

    border: '1px solid transparent',
    transition: 'border-color .3s',
    fontWeight: 400,
    letterSpacing: 1,
    cursor: 'pointer',
    borderColor: colors.decoration.darkGrey,
    backgroundColor: colors.background.primary,
    '&:focus': {
      borderRadius: 15,
      outline: 'none',
    },
    '&::placeholder': {
      fontWeight: 400,
      color: colors.font.black,
      opacity: 0.6,
    }
  },

  '&::before, &::after': {
    display: 'none',
  },
})

export const StyledFormInputVisible = styled(FormInput)({
  padding: '16px 17px',
  fontSize: 16,
  width: '100%',
  borderColor: colors.decoration.darkGrey,
  '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active': {
    boxShadow: '0 0 0 30px white inset',
  },
})

export const StyledFormTextareaVisible = styled('textarea')({
  padding: '16px 17px',
  fontSize: 16,
  width: '100%',
  borderColor: colors.decoration.primary,
  '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active': {
    boxShadow: '0 0 0 30px white inset',
  },
  borderRadius: 15,
  border: '1px solid transparent',
  transition: 'border-color .3s',
  fontWeight: 600,
  letterSpacing: 1,
  '&:focus': {
    outline: 'none',
    borderColor: colors.decoration.darkGrey,
  },
  '&::placeholder': {
    fontWeight: 400,
    color: colors.font.black,
    opacity: 0.6,
  },

})



export const useAddTopicFormStyles = makeStyles({
  formButton: {
    marginLeft: '60%',
    marginTop: 10,
    padding: '9.5px 30px',
    width: '40%'
  },
  addTopicFormWrapper:{
    display: "flex",
    flexWrap: 'nowrap',
    alignContent:'center',
    justifyContent:'space - around',
    alignItems:'center',
    width:'100%',
    marginTop: 10,
    marginBottom: 10,
  },
  searchFormLabel:{
    width: '40%',
    marginRight: '15px',
  },

})
