//? Componentler fonksiyonlarda oldugu gibi 3 farkli yontemle yazilabilir.
//? JSX icerisinde degiskenler {} icerisinde gosterilir.

//? Footer comp.

const Footer = () => {
    return <footer>My First Footer, {new Date().getFullYear()} </footer>;
  };
  
  export default Footer;
  