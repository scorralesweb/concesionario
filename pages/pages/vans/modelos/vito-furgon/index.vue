<template>
  <NuxtLayout name="vans">
    <VansIntro
      tema="dark"
      titulo="Vito Furgón"
      descripcion=""
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/vans/modelos/vito-furgon/"
    >
    </VansIntro>

    <section id="caracteristicas">
      <div class="pageWidth">
        <h3>Un imponente diseño exterior, una gran funcionalidad por dentro</h3>

        <ul>
          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/modelos/vito-furgon/exterior.jpg"
              titulo="Exterior"
              descripcion="Con la Vito Furgón, elegís calidad. Porque es extremadamente robusta y está preparada para cualquier desafío."
            >
            </VansCardsCaracteristicaCard>
          </li>

          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/modelos/vito-furgon/interior.jpg"
              titulo="Interior - Carga"
              :lista="['Volumen de carga: 6 m3', 'Carga útil: 965 kg', 'Sistema de anclaje de carga']"
            >
            </VansCardsCaracteristicaCard>
          </li>

          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/modelos/vito-furgon/confort.jpg"
              titulo="Confort"
              descripcion="El espacio de carga de la Vito Furgón es espacioso, robusto y de fácil acceso. Gracias a las amplias aperturas de las puertas y el bajo borde de carga, es fácil cargarlo. Su diseño aprovecha al máximo el espacio disponible."
            >
            </VansCardsCaracteristicaCard>
          </li>

          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/modelos/vito-furgon/seguridad.jpg"
              titulo="Seguridad"
              :lista="['Asistente viento lateral y arranque en pendientes', 'Airbag de conductor y acompañante']"
            >
            </VansCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <VansExternalLink
      cta="Más información en el sitio de Mercedes-Benz Argentina"
      ctaLink="https://www.mercedes-benz.com.ar/vans/models/vito/panel-van/overview.html"
    >
    </VansExternalLink>

    <VansContactForm></VansContactForm>
    <VansLegal></VansLegal>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/vans/resumen.css");
</style>
