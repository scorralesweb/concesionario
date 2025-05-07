<template>
  <div class="map">
    <div class="wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168909444715!2d-58.386441309168774!3d-34.6037343877542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1722353939451!5m2!1ses-419!2sar"
        style="border: 0"
        allowfullscreen="false"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
  <div class="content">
    <h3>{{ sucursal.nombre }}</h3>
    <p class="ubicacion">{{ sucursal.ubicacion }}</p>
    <div class="contact">
      <div>
        <img
          src="~/public/images/camiones/icons/location.svg"
          alt="Dirección"
        />
        <span>{{ sucursal.direccion }}</span>
      </div>
      <div>
        <img
          src="~/public/images/camiones/icons/phone.svg"
          alt="Teléfono"
        />
        <span>{{ sucursal.telefono }}</span>
      </div>
      <div>
        <img
          src="~/public/images/camiones/icons/mail.svg"
          alt="Mail"
        />
        <span>
          <NuxtLink to="#">{{ sucursal.mail }}</NuxtLink>
        </span>
      </div>
      <div>
        <img
          src="~/public/images/camiones/icons/clock.svg"
          alt="Horario"
        />
        <span>
          <strong>Horario de atención</strong><br />
          {{ sucursal.horario }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  sucursal: {
    type: Object,
    required: true
  }
});
const { sucursal } = props;
</script>
