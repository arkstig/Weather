import type { NextPage } from 'next'
import Form from '../components/Form'
import StaticText from '../components/StaticText'
import Title from '../components/Title'

const Contact: NextPage = () => {
  return (
    <>
      <Title title={'Kontakt Oss'} />
      <StaticText />
      <Form />
    </>
  )
}

export default Contact
