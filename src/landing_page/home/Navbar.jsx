export default function Navabar() {

    return <div className="p-1">
         <nav class="navbar   navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid ms-5 p-1">
                <a class="navbar-brand" href="#" > <img src="media/images/stock-logo.png" alt="stock-logo" style={{ width: "8%" }} /> StockStream</a>
    <div class="collapse navbar-collapse ms-5" id="navbarSupportedContent ">
      <ul class="navbar-nav me-5 mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/signup">SignUp</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/about">About</a>
                        </li>
                        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/products">Products</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/pricing">Pricing</a>
                        </li>
                        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/support">Suppport</a>
        </li>
        
        
        
        </ul>
    </div>
  </div>
</nav>
    </div>
}