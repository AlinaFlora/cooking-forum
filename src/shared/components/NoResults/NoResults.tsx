import { NoResultsTabProps } from "./NoResults.utils";
import { Container, TabContentWrapper, useStyles } from './NoResults.style'

const NoResults: React.FC<NoResultsTabProps> = ({
  isError = false,
}) => {
  const classes = useStyles()

  return (
    <Container>
      <TabContentWrapper>
        <span
          className={
            isError ? `${classes.text} ${classes.errorMsg}` : classes.text
          }
        >
          {isError
            ? "Some error"
            : 'No data'
          }
        </span>
      </TabContentWrapper>
    </Container>
  )
}

export default NoResults
