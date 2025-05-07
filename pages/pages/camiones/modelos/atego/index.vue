<template>
  <NuxtLayout name="camiones">
    <CamionesIntro
      area="Nuestros camiones"
      titulo="Atego."
      descripcion="Versatilidad y productividad, en la ciudad y en la ruta."
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/camiones/modelos/atego/"
    >
    </CamionesIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>ATEGO, LO PRODUCIMOS ACÁ PARA QUE LLEGUES MUCHO MAS ALLÁ.</h3>
        <p>
          El Atego, con caja de velocidades automatizada Mercedes PowerShift de
          12 marchas.
        </p>
      </div>
    </section>

    <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/atego/seguridad.jpg"
              titulo="Seguridad."
              :lista="[
                'ABS',
                'EBD',
                'ASR',
                'Asistente de arranque en pendiente',
              ]"
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/atego/confort.jpg"
              titulo="Confort."
              :lista="[
                'Control de velocidades crucerto Tempomat.',
                'Volante multifunción',
                'Espejos calefaccionados con regulación eléctrica y climatizador de techo.',
              ]"
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/atego/tecnologia.jpg"
              titulo="Tecnología"
              :lista="['Sistema de Gestión de Flotas Fleetboard']"
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/atego/datos-tecnicos.jpg"
              titulo="Datos técnicos."
              :lista="[
                'Caja de velocidades automatizada Mercedes-Benz PowerShift de 12 marchas.',
                '2 modos de conducción: Eco-Roll y Power.',
              ]"
            >
            </CamionesCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <CamionesExternalLink
      cta="Más información en el sitio de Mercedes-Benz Camiones y Buses Argentina"
      ctaLink="https://www.mercedes-benz-trucks.com/es_AR/models/atego-distribucion-larga-distancia.html"
    >
    </CamionesExternalLink>

    <CamionesContactForm modelo="Atego"></CamionesContactForm>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/camiones/resumen.css");
</style>
