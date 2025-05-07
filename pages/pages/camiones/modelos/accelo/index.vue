<template>
  <NuxtLayout name="camiones">
    <CamionesIntro
      area="Nuestros camiones"
      titulo="Accelo."
      descripcion="Lo seguimos produciendo acá. En eso tampoco se hacen cambios."
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/camiones/modelos/accelo/"
    >
    </CamionesIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>Accelo, hecho en Argentina y con caja Automatizada.</h3>
        <p>El Accelo, compacto y eficiente. Ideal para la distribución urbana.</p>
      </div>
    </section>

    <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/accelo/seguridad.jpg"
              titulo="Seguridad."
              :lista="['ABS', 'EBD', 'ASR', 'Asistente de arranque en pendiente']"
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/accelo/confort.jpg"
              titulo="Confort."
              :lista="['Asiento de conductor neumático.']"
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/accelo/tecnologia.jpg"
              titulo="Tecnología"
              :lista="['Sistema de Gestión de Flotas Fleetboard ']"
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/accelo/datos-tecnicos.jpg"
              titulo="Datos técnicos."
              :lista="['Caja de velocidades automatizada de 6 marchas.', '2 modos de conducción: Eco-Roll y Power.']"
            >
            </CamionesCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <CamionesExternalLink
      cta="Más información en el sitio de Mercedes-Benz Camiones y Buses Argentina"
      ctaLink="https://www.mercedes-benz-trucks.com/es_AR/models/accelo.html"
    >
    </CamionesExternalLink>

    <CamionesContactForm></CamionesContactForm>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/camiones/resumen.css");
</style>
