import { makeStyles } from "@material-ui/core";
import { colors } from "../../../config";

export const useForumTopicStyles = makeStyles((theme) => ({
    topicTitle: {
      textAlign: "center",
      textTransform: "uppercase",
      fontWeight: 700,
      fontSize: 22,
      margin: 20,
      paddingBottom: 20,
      color: colors.font.darkBlue
    },
    topicAuthor: {
      width: '43%',
      float: 'left',
      marginLeft: '2%',
      paddingBottom: 20,
    },
    topicDate: {
      width: '41%',
      float: 'right',
      textAlign: 'right',
      marginRight: '2%',
      marginLeft: '2%',
      paddingBottom: 20,
    },
    topicContent: {
      float: 'left',
      textAlign: 'justify',
      textIndent: 50,
      marginRight: '2%',
      marginLeft: '2%',
      paddingBottom: 20,
    }
  })
)