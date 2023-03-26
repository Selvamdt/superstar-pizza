import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PizzaCard from './Pizzacard';

function BasicExample() {
  return (
    <section class="product" id="Menu">
    <div class="container-fluid">
        <h4 class="heading text-left"> Special <span>Menu</span> </h4>
        <div class="row">
            <div class="col-lg-4 col-md-4 col-12">
                <div class="card text-center">
                <Card.Img variant="top" src={require("../assets/pexel.jpeg")} />
                    <span class="price"> <b>₹.349</b> </span>
                    <div class="card-body">
                      <h5 class="card-title text-center">Veg Extravaganza</h5>
                      <Button variant="primary">ORDER NOW!</Button>

                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-12">
                <div class="card text-center">
                <Card.Img variant="top" src={require("../assets/pexels9.jpeg")} />
                    <span class="price"><b>₹.459</b></span>
                    <div class="card-body">
                      <h5 class="card-title text-center">Farmhouse</h5>
                      <Button variant="primary">ORDER NOW!</Button>

                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-12">
                <div class="card text-center">
                <Card.Img variant="top" src={require("../assets/pexels3.jpeg")} />
                    <span class="price"><b>₹.449</b></span>
                    <div class="card-body">
                      <h5 class="card-title text-center">Pepper Barbecue Chicken</h5>
                      <Button variant="primary">ORDER NOW!</Button>

                    </div>
                </div>
            </div>
            
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-4 col-12">
                <div class="card text-center">
                <Card.Img variant="top" src={require("../assets/pexels4.jpeg")} />
                    <span class="price"> <b>₹.349</b></span>
                    <div class="card-body">
                      <h5 class="card-title text-center">Chicken Sausage</h5>
                    
                      <Button variant="primary">ORDER NOW!</Button>

                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-12">
                <div class="card text-center">
                <Card.Img variant="top" src={require("../assets/pexels5.jpeg")} />
                    <span class="price"> <b>₹.249</b></span>
                    <div class="card-body">
                      <h5 class="card-title text-center">Paneer Paratha Pizza</h5>
                      <Button variant="primary">ORDER NOW!</Button>

                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-12">
                <div class="card text-center">
                <Card.Img variant="top" src={require("../assets/pexels6.jpeg")} />
                    <span class="price"> <b>₹.699</b> </span>
                    <div class="card-body">
                      <h5 class="card-title text-center">The 5 Chicken Feast Pizza</h5>
                     
                      <Button variant="primary">ORDER NOW!</Button>

                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-12">
                <div class="card text-center">
                <Card.Img variant="top" src={require("../assets/pexels7.jpeg")} />
                    <span class="price"><b>₹.649</b></span>
                    <div class="card-body">
                      <h5 class="card-title text-center">Chicken Pepperoni Stuffed Garlic Bread</h5>
                   
                      <Button variant="primary">ORDER NOW!</Button>

                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-12">
                <div class="card text-center">
                <Card.Img variant="top" src={require("../assets/pexels10.jpeg")} />
                    <span class="price"> <b>₹.649</b> </span>
                    <div class="card-body">
                      <h5 class="card-title text-center">Indi Tandoori Paneer</h5>
                      
                      <Button variant="primary">ORDER NOW!</Button>

                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-12">
                <div class="card text-center">
                <Card.Img variant="top" src={require("../assets/pexels11.jpeg")} />
                    <span class="price"><b> ₹.379 </b></span>
                    <div class="card-body">
                      <h5 class="card-title text-center">Cheese n Tomato</h5>
                      <Button variant="primary">ORDER NOW!</Button>

                    </div>
                </div>
            </div>

          
            
        </div>

    </div>
   
</section>
  );
}

export default BasicExample;