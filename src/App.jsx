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
      <div className={styles.navigation}>
        <Navigation/>
      </div>
      <div className={styles.introduction}>
        <Introduction/>
      </div>
      <div className={styles.products}>
        <Products/>
      </div>
        <ContactUs/>
      <div className={styles.see_more}>
        <SeeMore/>
      </div>
      <Footer/>
    </>
  )
}

export default App
