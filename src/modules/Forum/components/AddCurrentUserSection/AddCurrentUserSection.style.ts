import { makeStyles, styled } from "@material-ui/core";
import { FormInput } from "../../../../shared/styles/FormElements.style";
import { colors } from "../../../../config";

export const Container = styled('div')({
  padding: '0 150px',
  marginTop: 20,
  maxWidth: '800px',
  '@media (min-width:1741px)': {
    padding: '0 10vw',
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

export const useAddUserFormStyles = makeStyles({
  formButton: {
    marginLeft: '60%',
    marginTop: 10,
    padding: '9.5px 30px',
    width: '40%'
  },
  addUserFormWrapper:{
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
