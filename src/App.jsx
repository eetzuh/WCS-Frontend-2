import Navigation from './components/navigation/Navigation'
import Introduction from './components/introduction/Introduction'
import Products from './components/products/Products'
import ContactUs from './components/contact_us/ContactUs'
import SeeMore from './components/see_more/SeeMore'
import Footer from './components/footer/Footer'

import './App.css'

function App() {
 
  return (
    <>
      <div className='navigation'>
        <Navigation/>
      </div>
      <div className='introduction'>
        <Introduction/>
      </div>
      <div className='products'>
        <Products/>
      </div>
        <ContactUs/>
      <div className='see_more'>
        <SeeMore/>
      </div>
      <Footer/>
    </>
  )
}

export default App
