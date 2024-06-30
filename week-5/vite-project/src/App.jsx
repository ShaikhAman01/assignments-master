import { BusinessCard } from './components/businessCard';

function App() {

  return (
    <>
    <BusinessCard
  name="John Doe"
  description="Full Stack Developer"
  interests={['Coding', 'Music', 'Travel']}
  linkedin="https://www.linkedin.com/in/johndoe"
  twitter="https://twitter.com/johndoe"
  otherSocialMedia={{ label: 'GitHub', url: 'https://github.com/johndoe' }}
/>

<BusinessCard
  name="John Doe"
  description="Full Stack Developer"
  interests={['Coding', 'Music', 'Travel']}
  linkedin="https://www.linkedin.com/in/johndoe"
  twitter="https://twitter.com/johndoe"
  otherSocialMedia={{ label: 'GitHub', url: 'https://github.com/johndoe' }}
/>
    </>
  )
}

export default App
