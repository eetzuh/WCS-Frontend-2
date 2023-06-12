import Navigation from './components/navigation/Navigation'
import Introduction from './components/introduction/Introduction'
import Products from './components/products/Products'
import ContactUs from './components/contact_us/ContactUs'
import SeeMore from './components/see_more/SeeMore'
import Footer from './components/footer/Footer'

import styles from './App.module.scss'

function App() {
 
  return (
    <>
        <Navigation className={styles.navigation}/>
        <Introduction className={styles.introduction}/>
        <Products className={styles.products}/>
        <ContactUs/>
        <SeeMore className={styles.see_more}/>
      <Footer/>
    </>
  )
}

export default App
