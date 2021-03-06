import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export const FeedCardContainer = styled(Card)`
  width: 90vw;
  margin: 30px;
  margin-bottom: 10px;
`
export const FeedCardContent = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 20vh;
  margin-bottom: 10px;
  padding: 30px;
`