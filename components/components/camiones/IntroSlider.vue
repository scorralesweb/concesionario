<template>
  <div class="wrapperIntroSlider">
    <Splide
      :options="{
        type: 'fade',
        arrows: false,
        pauseOnHover: false,
        rewind: true,
        autoplay: true,
        interval: 4000,
        speed: 1000,
      }"
      aria-label="Información y productos destacados"
      id="introSlider"
    >
      <!-- Slide -->
      <!-- Definir clase "light" o "dark" para cada slide según corresponda -->
      <SplideSlide
        data-aos="fade"
        data-aos-duration="1200"
        data-aos-delay="0"
        class="dark"
      >
        <div class="pageWidth">
          <div class="content">
            <h3>Nosotros</h3>
            <h2>{{ appConfig.concesionario.razonSocial }}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              vulputate viverra orci sed gravida.
            </p>
            <NuxtLink to="/camiones/nosotros/nuestra-historia" class="btn"
              >Nuestra historia</NuxtLink
            >
          </div>
        </div>
        <picture>
          <source
            srcset="~/public/images/camiones/home/intro/concesionario-m.jpg"
            type="image/jpeg"
            media="(max-width: 767px)"
          />
          <source
            srcset="~/public/images/camiones/home/intro/concesionario-t.jpg"
            type="image/jpeg"
            media="(min-width: 768px) and (max-width:1023px)"
          />
          <source
            srcset="~/public/images/camiones/home/intro/concesionario.jpg"
            type="image/jpeg"
            media="(min-width: 1024px)"
          />

          <img
            src="~/public/images/camiones/home/intro/concesionario.jpg"
            alt="Sucursal"
          />
        </picture>
        <div class="fadeVertical"></div>
        <div class="fadeHorizontal"></div>
      </SplideSlide>

      <!-- Slide -->
      <!-- Definir clase "light" o "dark" para cada slide según corresponda -->
      <SplideSlide class="light">
        <div class="pageWidth">
          <div class="content">
            <h3>Nuestros camiones</h3>
            <h2>Axor.</h2>
            <p>Un especialista para el transporte pesado.</p>
            <NuxtLink to="/camiones/modelos/axor" class="btn"
              >Más información</NuxtLink
            >
          </div>
        </div>
        <picture>
          <source
            srcset="~/public/images/camiones/home/intro/axor-m.jpg"
            type="image/jpeg"
            media="(max-width: 767px)"
          />
          <source
            srcset="~/public/images/camiones/home/intro/axor-t.jpg"
            type="image/jpeg"
            media="(min-width: 768px) and (max-width:1023px)"
          />
          <source
            srcset="~/public/images/camiones/home/intro/axor.jpg"
            type="image/jpeg"
            media="(min-width: 1024px)"
          />

          <img
            srcset="~/public/images/camiones/home/intro/axor.jpg"
            alt="Axor"
          />
        </picture>
        <div class="fadeVertical"></div>
        <div class="fadeHorizontal"></div>
      </SplideSlide>

      <!-- Slide -->
      <!-- Definir clase "light" o "dark" para cada slide según corresponda -->
      <SplideSlide class="dark">
        <div class="pageWidth">
          <div class="content">
            <h3>Nosotros</h3>
            <h2>Novedad</h2>
            <p>
              Praesent fringilla ultrices congue. Mauris suscipit vulputate
              tortor, et vehicula dui placerat non.
            </p>
            <NuxtLink
              to="/camiones/nosotros/novedades/detalle-texto"
              class="btn"
              >Más información</NuxtLink
            >
          </div>
        </div>
        <picture>
          <source
            srcset="~/public/images/camiones/home/intro/novedad-m.jpg"
            type="image/jpeg"
            media="(max-width: 767px)"
          />
          <source
            srcset="~/public/images/camiones/home/intro/novedad-t.jpg"
            type="image/jpeg"
            media="(min-width: 768px) and (max-width:1023px)"
          />
          <source
            srcset="~/public/images/camiones/home/intro/novedad.jpg"
            type="image/jpeg"
            media="(min-width: 1024px)"
          />

          <img
            src="~/public/images/camiones/home/intro/novedad.jpg"
            alt="Inauguración de la sucursal Santa Rosa"
          />
        </picture>
        <div class="fadeVertical"></div>
        <div class="fadeHorizontal"></div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
</script>

<style scope>
@import "~/assets/css/camiones/intro-slider.css";
</style>
