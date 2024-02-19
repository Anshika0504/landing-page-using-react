
import './App.css';

function App() {
  return (
    <div className="container">
<nav>
  <img src="images/logo.png" alt="logo" className='logo' />
  <ul>
    <li>
      <a href="www.google.com">Travel Guide</a>
    </li>
    <li>
      <a href="www.google.com">Famous Places</a>
    </li>
    <li>
      <a href="www.google.com">Contact Us</a>
    </li>
  </ul>
  <button className='button'>
    <img src="images/aero.png" alt="aero" className='aero'/>
    Bookings
  </button>
</nav>

{/*header*/}
<div className="content">
  <h1>Beautiful <br/> Places To Explore</h1>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet alias fugit nulla impedit ut sint porro, molestiae ab numquam similique sed maiores, tempore placeat ipsum laudantium! Reiciendis iure perferendis corrupti!
  Provident doloremque aperiam, repellat culpa saepe fugiat delectus tempora ea voluptatem fugit quidem asperiores non accusamus doloribus nemo. Adipisci doloremque itaque beatae ab animi delectus ratione nesciunt quae illo distinctio.

</p>
{/*form*/}
<form>
<input type="text" placeholder='Country Name' />
<button type="submit" className='btn'>Search</button>

</form>

</div>
    </div>
  );
}

export default App;
