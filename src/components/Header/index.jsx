import logoImg from '../../assets/default-logo.png'
const Header = () => {
  return (
    <div className="container flex  justify-start  px-0 max-h-32">
     <img src={logoImg} alt="Nicepage Logo" className="h-16 px-48 "/>
    </div>
  )
}

export default Header