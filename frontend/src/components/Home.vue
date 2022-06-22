<template>
    <body>
        
        <div id = "tab">
            <h2>Home</h2>            
        </div>

        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://i.pinimg.com/originals/05/05/d4/0505d4dd2bd4b59d405f79337da4d17d.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://www.autoavance.co/wp-content/uploads/2021/10/taller-mecanico-productividad.jpeg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://www.infotaller.tv/2020/07/16/reparacion/armas-taller-mecanico-triunfe_1456364376_471879_660x372.jpg" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
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
