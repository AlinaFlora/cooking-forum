import { styled, Button, Select, makeStyles } from '@material-ui/core'
import { colors } from "../../config";

export const FormLabel = styled('label')({
  display: 'block',
  color: colors.font.black,
  fontWeight: 'bold',
  fontSize: 14,
  paddingLeft: 15,
  marginBottom: 5,
})

export const FormInput = styled('input')({
  display: 'block',
  width: '100%',
  padding: '16px 27px',
  borderRadius: 15,
  fontSize: 18,
  border: '1px solid transparent',
  transition: 'border-color .3s',
  fontWeight: 600,
  letterSpacing: 1,
  '&:focus': {
    outline: 'none',
    borderColor: colors.decoration.primary,
  },
  '&::placeholder': {
    fontWeight: 400,
    color: colors.font.black,
    opacity: 0.6,
  },
})

export const FormButton = styled(Button)({
  width: '100%',
  padding: '9.5px 30px',
  borderRadius: 15,
  backgroundColor: colors.button.root,
  color: colors.font.white,
  textTransform: 'none',
  fontSize: 22,
  transition: '.3s',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: colors.button.hover,
    boxShadow: 'none',
  },
})

export const useFormStyles = makeStyles({
  container: {
    margin: 0,
    padding: 43,
    paddingBottom: 20,
    zIndex: 2,
    '@media (min-width:1741px)': {
      left: '10vw',
    },
  },
  searchFormWrapper:{
    display: "flex",
    flexWrap: 'nowrap',
    alignContent:'center',
    justifyContent:'space - around',
    alignItems:'center',
    width:'100%'
  },
  searchFormLabel:{
    width: '30%',
    marginRight: '15px',
  },
  formInput: {
    padding: '16px 27px',
    fontSize: 18,
  },
  formSelect: {
    width: '100%',
  },
  formTextArea: {
    padding: '16px 17px',
    fontSize: 16,
    width: '100%',
    borderColor: colors.decoration.darkGrey,
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
    },
    '&::placeholder': {
      fontWeight: 400,
      color: colors.font.black,
      opacity: 0.6,
    },
  },
  formButton: {
    marginLeft: '15px',
    padding: '9.5px 30px',
    width: '30%'
  },

  borderError: {
    borderColor: colors.error,
    '&:focus': {
      borderColor: colors.error,
    },
    '& .MuiOutlinedInput-root': {
      border: `1px solid ${colors.error}`,
    },
    '& .Mui-focused.Mui-focused.Mui-focused': {
      borderColor: colors.error,
    },
  },
  labelError: {
    color: colors.error,
  },

  errorVisible: {
    opacity: 1,
    transition: 'opacity .3s',
  },
})
