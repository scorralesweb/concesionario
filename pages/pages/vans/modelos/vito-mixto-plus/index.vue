<template>
  <NuxtLayout name="vans">
    <VansIntro
      tema="dark"
      titulo="Vito Mixto Plus"
      descripcion=""
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/vans/modelos/vito-mixto-plus/"
    >
    </VansIntro>

    <section id="caracteristicas">
      <div class="pageWidth">
        <h3>Una van multiusos, que se adapta a las tareas más exigentes</h3>

        <ul>
          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/modelos/vito-mixto-plus/exterior.jpg"
              titulo="Exterior"
              descripcion="Con la Vito Mixto Plus, estás eligiendo calidad y todo el respaldo de la estrella."
            >
            </VansCardsCaracteristicaCard>
          </li>

          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/modelos/vito-mixto-plus/interior.jpg"
              titulo="Interior"
              :lista="['Asientos 4+1', 'Banco de 3 asientos con asiento lateral abatible.', 'Sistema de Anclaje de carga']"
            >
            </VansCardsCaracteristicaCard>
          </li>

          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/modelos/vito-mixto-plus/confort.jpg"
              titulo="Confort"
              descripcion="Cámara de retroceso: ayuda al conductor al dar marcha atrás, estacionar y maniobrar."
            >
            </VansCardsCaracteristicaCard>
          </li>

          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/modelos/vito-mixto-plus/seguridad.jpg"
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
      ctaLink="https://www.mercedes-benz.com.ar/vans/models/vito/mixto/overview.html"
    >
    </VansExternalLink>

    <VansContactForm></VansContactForm>
    <VansLegal></VansLegal>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/vans/resumen.css");
</style>
