import { makeStyles } from "@material-ui/core";

export const useAddCommentFormStyles = makeStyles({
  formButton: {
    marginLeft: '60%',
    marginTop: 10,
    padding: '9.5px 30px',
    width: '40%'
  },
  addCommentFormWrapper:{
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
