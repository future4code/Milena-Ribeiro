import styled from 'styled-components'
import CardContent from '@material-ui/core/CardContent'

export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    margin-top: 10px;
    padding: 15px;
`

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  width: 60vw;
  max-width: 600px;
  min-width: 300px;
`

export const PostCardContent = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 20vh;
  margin-bottom: 10px;
  padding: 30px;
`