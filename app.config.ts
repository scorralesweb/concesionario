export default defineAppConfig({
  // Sección concesionario dedicada a los datos propios de la empresa, redes sociales, contactos, etc.
  concesionario: {
    id: 476,
    razonSocial: "ConcesionarioTest S.A.",

    social: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      youtube: "https://youtube.com",
      instagram: "https://instagram.com",
      x: "https://x.com",
    },

    sucursales: [
      {
        nombre: "Sucursal 1",
        ubicacion: "Ubicación 1, Provincia",
        direccion: "Calle 1",
        telefono: "1234-5678",
        mail: "sucursal1@concesionario.com.ar",
        horario: "Lunes a viernes de 8 a 17hs.",
      },
      {
        nombre: "Sucursal 2",
        ubicacion: "Ubicación 2, Provincia",
        direccion: "Calle 2",
        telefono: "1234-5678",
        mail: "sucursal2@concesionario.com.ar",
        horario: "Lunes a viernes de 8 a 17hs.",
      },
    ],

    // Botón de contacto flotante vía WhatsApp.
    // Definir "https://wa.me/12345678" o dejar vacío para no mostrar el botón.
    contactoFlotante: {
      autos: "https://wa.me/12345678",
      vans: "https://wa.me/12345678",
      camiones: "https://wa.me/12345678",
    },
  },

  // En la siguiente sección se configura la estructura de páginas y menúes de la web.
  unidadesNegocio: {
    autos: true,
    vans: true,
    camiones: true,
    buses: true,
  },
  legales: {
    razonSocial: "*** RAZÓN SOCIAL ***",
    domicilio: "*** DOMICILIO LEGAL, UBICACIÓN ***",
    email: "*** MAIL LEGAL ***",
    telefono: "*** TELÉFONO LEGAL ***",
    responsableDataProtection: "*** RESPONSABLE PROTECCIÓN DE DATOS ***",
    linkDirectrizProteccionDeDatos: "#",
  },
  pilot: {
    appkey: "4A390AF7-9056-42F3-AA07-53B7C02D23BF",
    action: "create",
    autos: {
      pilot_contact_type_id: "1",
      pilot_business_type_id: "6",
      pilot_suborigin_id: "FI0FA5R2CNBO5HSSG",
      pilot_notes: "Formulario de Contacto del sitio institucional",
    },
    vans: {
      pilot_contact_type_id: "1",
      pilot_business_type_id: "6",
      pilot_suborigin_id: "FI0FA5R2CNBO5HSSG",
      pilot_notes: "Formulario de Contacto del sitio institucional",
    },
    camiones: {
      pilot_contact_type_id: "1",
      pilot_business_type_id: "6",
      pilot_suborigin_id: "FI0FA5R2CNBO5HSSG",
      pilot_notes: "Formulario de Contacto del sitio institucional",
    },
  },
});
