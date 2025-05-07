<template>
  <NuxtLayout name="camiones">
    <CamionesIntro
      area="Nosotros"
      titulo="Asesores comerciales"
      descripcion="Contactanos para recibir asesoramiento personalizado"
      imagenURL="/images/camiones/nosotros/asesores-comerciales/"
    >
    </CamionesIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>Nuestros acesores</h3>
      </div>
    </section>

    <section id="asesores">
      <div class="pageWidth">
        <ul>
          <!-- Asesor comercial -->
          <CamionesCardsAsesorComercialCard
            nombre="Nombre Apellido"
            mail="mail@concesionario.com.ar"
            telefono="+54 11 1234-5678"
            zona="Sucursal, localidad"
          >
          </CamionesCardsAsesorComercialCard>

          <!-- Asesor comercial -->
          <CamionesCardsAsesorComercialCard
            nombre="Nombre Apellido"
            mail="mail@concesionario.com.ar"
            telefono="+54 11 1234-5678"
            zona="Sucursal, localidad"
          >
          </CamionesCardsAsesorComercialCard>

          <!-- Asesor comercial -->
          <CamionesCardsAsesorComercialCard
            nombre="Nombre Apellido"
            mail="mail@concesionario.com.ar"
            telefono="+54 11 1234-5678"
            zona="Sucursal, localidad"
          >
          </CamionesCardsAsesorComercialCard>

          <!-- Asesor comercial -->
          <CamionesCardsAsesorComercialCard
            nombre="Nombre Apellido"
            mail="mail@concesionario.com.ar"
            telefono="+54 11 1234-5678"
            zona="Sucursal, localidad"
          >
          </CamionesCardsAsesorComercialCard>

          <!-- Asesor comercial -->
          <CamionesCardsAsesorComercialCard
            nombre="Nombre Apellido"
            mail="mail@concesionario.com.ar"
            telefono="+54 11 1234-5678"
            zona="Sucursal, localidad"
          >
          </CamionesCardsAsesorComercialCard>
        </ul>
      </div>
    </section>

    <!-- Shortcuts-->
    <div id="shortcuts">
      <div class="pageWidth">
        <ul>
          <CamionesCardsShortcutCard
            titulo="Contacto"
            icon="/images/camiones/icons/phone.svg"
            link="/camiones/nosotros/contacto"
          >
          </CamionesCardsShortcutCard>

          <CamionesCardsShortcutCard
            titulo="Sucursales"
            icon="/images/camiones/icons/location.svg"
            link="/camiones/nosotros/sucursales"
          >
          </CamionesCardsShortcutCard>

          <CamionesCardsShortcutCard
            titulo="Novedades"
            icon="/images/camiones/icons/news.svg"
            link="/camiones/nosotros/novedades"
          >
          </CamionesCardsShortcutCard>

          <CamionesCardsShortcutCard
            titulo="Nuestra historia"
            icon="/images/camiones/icons/users.svg"
            link="/camiones/nosotros/nuestra-historia"
          >
          </CamionesCardsShortcutCard>
        </ul>
      </div>
    </div>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/camiones/resumen.css");
@import url("~/assets/css/camiones/asesores-comerciales.css");
</style>
