import { Container as BaseContainer, styled } from "@material-ui/core";
import { colors } from "../../config";

export const Container = styled(BaseContainer)({
  display: 'flex',
  backgroundColor: colors.background.primary,
  minHeight: '100vh',
  padding: 0,
  flexWrap: 'wrap',
  maxWidth: '100vw',
})

export const Wrapper = styled('div')({
  display: 'flex',
  position: 'relative',
  width: '100%',
})

export const Main = styled('main')({
  flexGrow: 1,
  position: 'relative',
  paddingBottom: 150,
})

export const InformationSection = styled('div')({
  width: '100%',
  padding: 20,
  margin: 20,
  marginBottom: 0,
  fontSize: 18,
  color: colors.font.black
})