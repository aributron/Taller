<template>
    <body>
        
        <div>
            <h2>Home</h2>            
        </div>

        <!-- <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="https://i.bstr.es/highmotor/2018/09/car-1751753_1920-880x660.jpg" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2018/03/12/5f15f3de2a610.jpeg" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fERoaUnH3kL5DvFLc8UHsEH4oE5Ve8Dy6g&usqp=CAU" alt="Third slide">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
        </div> -->

        <div id="demo" class="carousel slide" data-ride="carousel">

        <!-- Indicators -->
        <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <!-- The slideshow -->
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://i.pinimg.com/originals/05/05/d4/0505d4dd2bd4b59d405f79337da4d17d.jpg" alt="img1" width="1100" height="500">
            </div>
            <div class="carousel-item">
                <img src="https://www.autoavance.co/wp-content/uploads/2021/10/taller-mecanico-productividad.jpeg" alt="img2" width="1100" height="500">
            </div>
            <div class="carousel-item">
                <img src="https://www.infotaller.tv/2020/07/16/reparacion/armas-taller-mecanico-triunfe_1456364376_471879_660x372.jpg" alt="im3" width="1100" height="500">
            </div>
        </div>

        <!-- Left and right controls -->
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
        </a>
    </div>
    </body>
           
    
</template>

<script>
import Reparacion from './Reparacion.vue'
import Vehiculo from './Vehiculo.vue'
import Cliente from './Cliente.vue'
export default {
    components: {
        Reparacion, Vehiculo, Cliente
    }
}

</script>
