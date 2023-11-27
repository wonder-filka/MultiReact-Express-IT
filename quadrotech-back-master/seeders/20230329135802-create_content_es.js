"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("content_es", [
      {
        keyi18n: "About p1",
        value_es:
          "En Quadrotech, somos un equipo de profesionales de la tecnología dedicados a resolver problemas complejos para nuestros clientes. Nos especializamos en la creación de sistemas altamente distribuidos que funcionan las 24 horas, así como en el desarrollo de soluciones para servidores y dispositivos móviles que abarcan desde la electrónica hasta los sistemas operativos y las aplicaciones.",
      },
      {
        keyi18n: "About p2",
        value_es:
          "Ofrecemos una amplia gama de servicios, que incluyen IoT, hogares inteligentes, BigData, IA, seguridad, criptomonedas, blockchain y FinTech. Nuestra experiencia en estas áreas nos permite abordar incluso los proyectos más desafiantes y ofrecer soluciones innovadoras que satisfacen las necesidades únicas de cada cliente.",
      },
      {
        keyi18n: "About p3",
        value_es:
          "Nuestro equipo está comprometido en brindar un servicio excepcional a cada cliente con el que trabajamos. Entendemos que cada proyecto es diferente y tomamos el tiempo para entender los objetivos y metas de nuestros clientes antes de proponer una solución. Este enfoque centrado en el cliente nos ha ganado una reputación como un socio confiable en la industria de la tecnología.",
      },
      { keyi18n: "About us", value_es: "Acerca de nosotros" },
      {
        keyi18n: "Artificial intelligence",
        value_es: "Inteligencia artificial",
      },
      { keyi18n: "BUSINESS NEED", value_es: "Necesidad empresarial" },
      {
        keyi18n: "BUSINESS NEED 1",
        value_es:
          "En el mundo de hoy, la seguridad y la vigilancia son cada vez más importantes tanto para las empresas como para las personas. La plataforma de Servicio de Video satisface esta necesidad al proporcionar un sistema confiable y fácil de usar para monitorear y grabar imágenes de video en tiempo real, con acceso desde cualquier lugar del mundo. Esto es esencial para garantizar la seguridad, prevenir el robo y el fraude y mejorar la eficiencia y la productividad en general.",
      },
      {
        keyi18n: "BUSINESS NEED 2",
        value_es:
          "En el mundo digital de hoy en día, las empresas requieren una plataforma de pago que ofrezca una variedad de instrumentos de pago para administrar las transacciones de manera efectiva. Necesitan una solución que pueda simplificar el proceso de pago, reducir el riesgo de fraude y proporcionar una forma eficiente de administrar pagos en diferentes canales.",
      },
      {
        keyi18n: "BUSINESS NEED 3",
        value_es:
          "Los sistemas de hogar inteligente son esenciales para la vida moderna. Permite a los usuarios administrar de forma remota los sistemas y dispositivos de su hogar con facilidad, ahorrando tiempo y energía.",
      },
      {
        keyi18n: "BUSINESS NEED 4",
        value_es:
          "En industrias como la salud, legal y financiera, mantener la confidencialidad y proteger la información del cliente es crucial. La Security Box proporciona una solución de comunicación segura para profesionales en estos campos, permitiéndoles comunicar información confidencial con clientes y colegas sin el riesgo de interceptación o escucha. El dispositivo asegura el cumplimiento de las regulaciones de privacidad y protege contra violaciones de datos, ayudando a los profesionales a mantener la confianza y la confidencia de sus clientes.",
      },
      {
        keyi18n: "BUSINESS NEED 5",
        value_es:
          "En un mundo donde la salud y el fitness son una prioridad para muchas personas, poseer un smartwatch se ha vuelto esencial. Sin embargo, gestionar múltiples smartwatches con diferentes características puede ser desafiante para los usuarios. Nuestra APLICACIÓN DE GESTIÓN DE SMARTWATCH aborda esta necesidad al proporcionar una sola plataforma para conectar y gestionar múltiples smartwatches.",
      },
      {
        keyi18n: "BUSINESS NEED 6",
        value_es:
          "La industria del servicio de taxis es altamente competitiva y los clientes exigen una experiencia de viaje conveniente, eficiente y segura. Los métodos tradicionales de asignación y procesamiento de pagos son ineficientes y lentos, lo que resulta en una baja satisfacción del cliente. Nuestro servicio de taxis tiene como objetivo abordar estos puntos dolorosos al automatizar todos los procesos, mejorar la precisión y mejorar la experiencia del cliente.",
      },
      { keyi18n: "Blockchain", value_es: "Blockchain" },
      { keyi18n: "Consulting", value_es: "Consultoría" },
      { keyi18n: "DE", value_es: "DE" },
      { keyi18n: "Data science", value_es: "Ciencia de datos" },
      { keyi18n: "EN", value_es: "EN" },
      { keyi18n: "ES", value_es: "ES" },
      { keyi18n: "FinTech", value_es: "FinTech" },
      { keyi18n: "FinTech li 1", value_es: "Servicios financieros/Banca" },
      {
        keyi18n: "FinTech li 2",
        value_es: "Estampillas fiscales electrónicas",
      },
      { keyi18n: "FinTech li 3", value_es: "Pasarela de pago" },
      { keyi18n: "KEY FACTS", value_es: "DATOS CLAVE" },
      {
        keyi18n: "KEY FACTS 1",
        value_es:
          "Video Service es una plataforma de vigilancia de video completa que ofrece una variedad de características y beneficios, que incluyen:",
      },
      {
        keyi18n: "KEY FACTS 1 1",
        value_es:
          "Monitoreo y grabación en tiempo real de imágenes de video de un número ilimitado de cámaras.",
      },
      {
        keyi18n: "KEY FACTS 1 2",
        value_es:
          "Acceso remoto desde cualquier parte del mundo mediante un navegador web o una aplicación móvil.",
      },
      {
        keyi18n: "KEY FACTS 1 3",
        value_es:
          "Interfaz fácil de usar con ajustes personalizables para el control de cámaras y condiciones de visualización.",
      },
      {
        keyi18n: "KEY FACTS 1 4",
        value_es:
          "Grabación de audio y video en archivo o archivo de registro, con la capacidad de ver y descargar el material de archivo en cualquier momento.",
      },
      {
        keyi18n: "KEY FACTS 1 5",
        value_es:
          "Notificaciones de alarma para alertas instantáneas de posibles violaciones de seguridad.",
      },
      {
        keyi18n: "KEY FACTS 1 6",
        value_es:
          "Transcodificación de video a formatos populares para compartir y reproducir fácilmente.",
      },
      {
        keyi18n: "KEY FACTS 1 7",
        value_es:
          "Almacenamiento y gestión seguros de datos, con opciones de gestión de cuotas y pagos.",
      },
      {
        keyi18n: "KEY FACTS 1 8",
        value_es:
          "Sistema de gestión de usuarios con acceso y permisos personalizables para diferentes niveles de usuarios.",
      },
      {
        keyi18n: "KEY FACTS 1 9",
        value_es:
          "Ya sea para fines personales o profesionales, Video Service es una herramienta poderosa para mejorar la seguridad, aumentar la eficiencia y garantizar la tranquilidad. Con sus características avanzadas y una interfaz fácil de usar, ofrece una solución integral para todas sus necesidades de videovigilancia.",
      },
      {
        keyi18n: "KEY FACTS 2",
        value_es:
          "Payment Gateway es una plataforma versátil que ofrece una variedad de instrumentos de pago, incluyendo adquisición de internet, pagos P2P, pagos transfronterizos B2B y un sistema de comercio. La plataforma proporciona una manera eficiente de gestionar pagos a través de diferentes canales y simplifica el proceso de pago para las empresas. Incluye módulos para la prevención de fraude, archivado, identificación, criptografía, optimización de comisiones y servicios, agregación de servicios, estadísticas y análisis, bonificaciones y descuentos, monederos electrónicos, módulo de garantías y cumplimiento y almacenamiento de tarjetas / tokens / claves. La interfaz de Payment Gateway ofrece interfaces web para diferentes roles de usuario, incluyendo la oficina del administrador y el gabinete del usuario. En general, Payment Gateway es una plataforma de pago robusta que ofrece una solución integral para las empresas que buscan gestionar sus pagos de manera efectiva.",
      },
      {
        keyi18n: "KEY FACTS 3",
        value_es:
          "Los sistemas de hogar inteligente permiten a los usuarios controlar y automatizar remotamente varios aspectos de sus hogares, incluyendo iluminación, calefacción, electrodomésticos, dispositivos multimedia, persianas y características de seguridad.",
      },
      {
        keyi18n: "KEY FACTS 3 1",
        value_es:
          "Estos sistemas suelen estar compuestos tanto de dispositivos de hardware como de aplicaciones de software que se comunican entre sí a través de internet u otras redes.",
      },
      {
        keyi18n: "KEY FACTS 3 2",
        value_es:
          "La gestión de la iluminación y los electrodomésticos del hogar puede ayudar a los usuarios a ahorrar dinero en sus facturas de energía, asegurando que los dispositivos solo se utilicen cuando sea necesario.",
      },
      {
        keyi18n: "KEY FACTS 3 3",
        value_es:
          "Los sistemas de hogar inteligente también pueden optimizar el uso de la calefacción y el agua para reducir el desperdicio y mejorar la eficiencia energética.",
      },
      {
        keyi18n: "KEY FACTS 3 4",
        value_es:
          "Al monitorear el consumo de energía y optimizar los pagos de servicios públicos, estos sistemas también pueden ayudar a los usuarios a ahorrar dinero en sus facturas mensuales.",
      },
      {
        keyi18n: "KEY FACTS 3 5",
        value_es:
          "Uno de los principales beneficios de los sistemas de hogar inteligente es una mayor seguridad, con características como detección de intrusos, prevención de fugas de agua y detección de incendios y fugas de gas.",
      },
      {
        keyi18n: "KEY FACTS 3 6",
        value_es:
          "La tecnología de hogar inteligente continúa evolucionando, con nuevas características e integraciones que se agregan regularmente para proporcionar aún más comodidad y automatización para los usuarios.",
      },
      {
        keyi18n: "KEY FACTS 4",
        value_es:
          "El Security Box es un dispositivo compacto que proporciona tráfico de voz cifrado para garantizar una comunicación segura.",
      },
      {
        keyi18n: "KEY FACTS 4 1",
        value_es:
          "Cada participante en una conversación segura utiliza su propia copia del dispositivo.",
      },
      {
        keyi18n: "KEY FACTS 4 2",
        value_es:
          "El dispositivo funciona como un auricular Bluetooth, y se conectan auriculares con cable y micrófono a él.",
      },
      {
        keyi18n: "KEY FACTS 4 3",
        value_es:
          "La Security Box se comunica a través de una interfaz Bluetooth con un teléfono móvil o una computadora portátil/tableta.",
      },
      {
        keyi18n: "KEY FACTS 4 4",
        value_es:
          "El flujo de audio en la entrada y salida atraviesa varias etapas de procesamiento para garantizar la transmisión de información cifrada de alta calidad.",
      },
      {
        keyi18n: "KEY FACTS 4 5",
        value_es:
          "Las técnicas de cifrado utilizadas en la Security Box impiden que terceros descifren datos al interceptar una conversación.",
      },
      {
        keyi18n: "KEY FACTS 4 6",
        value_es:
          'Si el flujo de audio es interceptado por terceros, sonará como un flujo continuo de "ruido" de crujidos y chirridos.',
      },
      {
        keyi18n: "KEY FACTS 4 7",
        value_es:
          "La Security Box ofrece una solución única para las empresas que buscan proteger su información confidencial de competidores y ciberdelincuentes.",
      },
      {
        keyi18n: "KEY FACTS 5",
        value_es:
          "Nuestra APP DE GESTIÓN DE SMART WATCH proporciona una experiencia sin interrupciones para que los usuarios administren múltiples relojes inteligentes en una sola plataforma.",
      },
      {
        keyi18n: "KEY FACTS 5 1",
        value_es:
          "Los usuarios pueden conectar y administrar más de 20 modelos de relojes con diferentes funcionalidades, incluyendo medición de la frecuencia cardíaca, índices de estrés, medición de temperatura, actividades deportivas y datos de sueño.",
      },
      {
        keyi18n: "KEY FACTS 5 2",
        value_es:
          "La aplicación está conectada a Strava, lo que permite a los usuarios realizar un seguimiento fácil de los entrenamientos y las calorías.",
      },
      {
        keyi18n: "KEY FACTS 5 3",
        value_es:
          "Nuestra aplicación se adapta a una amplia gama de usuarios, incluyendo personas mayores, entusiastas del fitness, niños y mujeres, con calendario y ajustes personales para mujeres.",
      },
      {
        keyi18n: "KEY FACTS 5 4",
        value_es:
          "El diseño intuitivo y la interfaz fácil de usar de la aplicación brindan a los usuarios una experiencia sin problemas para administrar sus relojes inteligentes.",
      },
      {
        keyi18n: "KEY FACTS 6",
        value_es:
          "Nuestro servicio de taxi está impulsado por un conjunto de aplicaciones de software, incluyendo aplicaciones para clientes y conductores, paneles de administración y un centro de llamadas. Utilizamos configuraciones personales y autenticación de dos factores para garantizar la seguridad. Nuestros sistemas de navegación y pago están integrados para hacer el proceso de llamar a un taxi simple y rápido. Con características como soporte de chat, noticias y notificaciones, servicio de SMS y análisis, estamos constantemente trabajando para mejorar nuestro servicio. Nuestro servicio de taxi se destaca de la competencia por sus características avanzadas, opciones de pago seguras y soporte al cliente superior.",
      },
      { keyi18n: "Life science ", value_es: "Ciencias de la vida" },
      {
        keyi18n: "Life science li 1",
        value_es:
          "Dispositivos inteligentes multifuncionales (relojes de pulsera, brazaletes inteligentes)",
      },
      {
        keyi18n: "Life science li 2",
        value_es: "Sistema domótico inteligente",
      },
      {
        keyi18n: "Life science li 3",
        value_es: "Software para accesorios de computadora",
      },
      { keyi18n: "Life science li 4", value_es: "Servicio de video" },
      { keyi18n: "Multimedia", value_es: "Multimedia" },
      { keyi18n: "Our team", value_es: "Nuestro equipo" },
      {
        keyi18n: "Quality Assurance (QA)",
        value_es: "Aseguramiento de la calidad (QA)",
      },
      { keyi18n: "RESULT", value_es: "RESULTADO: " },
      {
        keyi18n: "RESULT 1",
        value_es:
          "Con el servicio de video, los usuarios pueden estar tranquilos sabiendo que pueden vigilar sus propiedades o negocios en todo momento. Las características avanzadas de la plataforma, como el acceso remoto, la monitorización en tiempo real y la reproducción de archivos, lo convierten en una herramienta valiosa para mejorar la seguridad y el rendimiento en general. Ya sea para fines personales o profesionales, el servicio de video ofrece resultados confiables y una experiencia fácil de usar.",
      },
      {
        keyi18n: "RESULT 2",
        value_es:
          "En el mundo digital de hoy en día, las empresas necesitan una plataforma de pago que ofrezca una variedad de instrumentos de pago para gestionar transacciones de manera efectiva. Necesitan una solución que pueda simplificar el proceso de pago, reducir el riesgo de fraude y proporcionar una forma eficiente de gestionar los pagos en diferentes canales.",
      },
      {
        keyi18n: "RESULT 3",
        value_es:
          "La integración de los sistemas de hogar inteligente conduce a un mayor confort, comodidad y seguridad, al tiempo que proporciona a los usuarios información valiosa sobre su consumo de energía, optimiza las facturas de servicios públicos y reduce la huella de carbono.",
      },
      {
        keyi18n: "RESULT 4",
        value_es:
          "Con la Security Box, las empresas pueden estar completamente seguras sabiendo que sus conversaciones son completamente confidenciales y no pueden ser monitoreadas o interceptadas. Este dispositivo garantiza que la información confidencial permanezca segura y confidencial, ayudando a las empresas a proteger su propiedad intelectual y sus datos confidenciales de miradas indiscretas.",
      },
      {
        keyi18n: "RESULT 5",
        value_es:
          "Nuestra aplicación permite a los usuarios conectar y gestionar más de 20 modelos de relojes diferentes con diversas funcionalidades. Los usuarios pueden acceder a métricas completas de salud y fitness, incluyendo medición de la frecuencia cardíaca, índices de estrés, medición de la temperatura, actividades deportivas y datos de sueño. La aplicación también está conectada a Strava, lo que permite a los usuarios hacer un seguimiento fácil de sus entrenamientos y calorías. Con el calendario y las configuraciones",
      },
      {
        keyi18n: "RESULT 6",
        value_es:
          "Unser automatisierter Taxidienst ermöglicht es Kunden, Fahrten nahtlos über eine mobile App anzufordern und zu bezahlen, während die Fahrer in Echtzeit Fahrtanfragen und Anweisungen erhalten, was zu effizienten Abholungen und Absetzungen führt. Eine präzise Bestimmung von Koordinaten und eine intelligente Auftragsverteilung führen zu verkürzten Wartezeiten und erhöhter Sicherheit für die Passagiere. Fortgeschrittene Funktionen wie Bewertungssysteme, Bonus- und Empfehlungsprogramme und ein 24/7-Support helfen uns, die Erwartungen unserer Kunden zu übertreffen.",
      },
      { keyi18n: "Security", value_es: "Seguridad" },
      {
        keyi18n: "Security li 1",
        value_es: "Infraestructura de PKI, autoridad de certificación",
      },
      {
        keyi18n: "Security li 2",
        value_es:
          "AFIS, Sistema Automatizado de Identificación de Huellas Dactilares",
      },
      {
        keyi18n: "Service1 p",
        value_es:
          "Nuestro servicio de Software y Mantenimiento abarca todo el ciclo de vida del desarrollo de software, desde la recopilación de requisitos hasta la implementación y el mantenimiento continuo. Nuestro equipo de expertos puede diseñar y desarrollar soluciones de software personalizadas para satisfacer sus necesidades empresariales únicas, así como proporcionar soporte y mantenimiento continuo para garantizar un rendimiento y fiabilidad óptimos.",
      },
      {
        keyi18n: "Service2 p",
        value_es:
          "Nuestro servicio de Consultoría ofrece orientación estratégica y experiencia para ayudar a las empresas a optimizar sus soluciones tecnológicas y maximizar su retorno de inversión. Nuestro equipo de consultores puede proporcionar orientación en una amplia gama de temas, desde la estrategia y la arquitectura tecnológica hasta las mejores prácticas en el desarrollo de software y la gestión de proyectos.",
      },
      {
        keyi18n: "Service3 p",
        value_es:
          "Nuestro servicio de Garantía de Calidad (QA) asegura que su solución de software cumpla con los más altos estándares de calidad y rendimiento. Nuestro equipo de expertos en QA realizará pruebas rigurosas en su solución de software para identificar cualquier error o problema, y proporcionará informes detallados y recomendaciones para garantizar que su solución de software cumpla o supere las expectativas.",
      },
      { keyi18n: "Services We offer", value_es: "Servicios que ofrecemos:" },
      {
        keyi18n: "Software and maintenance",
        value_es: "Software y mantenimiento",
      },
      { keyi18n: "Transport", value_es: "Transporte" },
      { keyi18n: "Transport li 1", value_es: "Taxi" },
      { keyi18n: "Transport li 2", value_es: "Boletos electrónicos" },
      {
        keyi18n: "address",
        value_es:
          "registered office at 165 Spyrou Araouzou, LORDOS WATERFRONT COURT, Office 201A, 2nd floor, 3036 Limassol, Cyprus",
      },
      { keyi18n: "by", value_es: "by Emma Roberts" },
      {
        keyi18n: "case 1 description",
        value_es:
          "Video Service es una plataforma de vigilancia de video que ofrece monitoreo en tiempo real, grabación y reproducción de archivos de imágenes de un número ilimitado de cámaras, con acceso remoto desde cualquier parte del mundo.",
      },
      { keyi18n: "case 1 title", value_es: "Servicio de Video" },
      {
        keyi18n: "case 2 description",
        value_es:
          "Es una plataforma con un conjunto de instrumentos de pago que permite a los usuarios crear billeteras, realizar transferencias y gestionarlas, pagar facturas y servicios, actuar como comerciantes (ofrecer bienes y servicios) y agentes.",
      },
      { keyi18n: "case 2 title", value_es: "Pasarela de pago" },
      {
        keyi18n: "case 3 description",
        value_es:
          "Los sistemas de hogar inteligente ofrecen un cómodo control remoto de los sistemas y dispositivos del hogar, aumentando la comodidad, la seguridad y la eficiencia energética. Estos sistemas ayudan a los usuarios a ahorrar dinero en las facturas de servicios públicos, optimizar el uso de energía y reducir su huella de carbono.",
      },
      { keyi18n: "case 3 title", value_es: "Sistema de hogar inteligente" },
      {
        keyi18n: "case 4 description",
        value_es:
          "Security Box es un dispositivo de comunicación compacto y seguro que proporciona tráfico de voz cifrado para garantizar la comunicación confidencial, protegiendo a empresas y profesionales de la intercepción o el espionaje.",
      },
      { keyi18n: "case 4 title", value_es: "Caja de seguridad" },
      {
        keyi18n: "case 5 description",
        value_es:
          "La aplicación le permite conectar y administrar un conjunto de modelos de relojes (actualmente más de 20) con diferentes características y funcionalidades de relojes inteligentes, de fitness, para niños, para personas mayores, y brazaletes con medición de frecuencia cardíaca a través de una sola aplicación.",
      },
      {
        keyi18n: "case 5 title",
        value_es: "Aplicación de gestión de smartwatch",
      },
      {
        keyi18n: "case 6 description",
        value_es:
          "Nuestro servicio automatizado de taxi brinda una experiencia de viaje cómoda y segura para los clientes, con solicitudes de viaje en tiempo real y direcciones para los conductores, lo que resulta en tiempos de espera reducidos y una mayor precisión. Con características avanzadas como sistemas de calificación, programas de referidos y soporte 24/7, nuestro servicio de taxi supera las expectativas de los clientes y se destaca de la competencia.",
      },
      { keyi18n: "case 6 title", value_es: "Servicio de taxi" },
      {
        keyi18n: "case key 1",
        value_es:
          "Video Service es una plataforma de vigilancia de video completa que ofrece una variedad de características y beneficios, que incluyen:\n<ul>\n<li>Monitoreo y grabación en tiempo real de imágenes de video de un número ilimitado de cámaras.</li>\n<li>Acceso remoto desde cualquier parte del mundo mediante un navegador web o una aplicación móvil.</li>\n<li>Interfaz fácil de usar con ajustes personalizables para el control de cámaras y condiciones de visualización.</li>\n<li>Grabación de audio y video en archivo o archivo de registro, con la capacidad de ver y descargar el material de archivo en cualquier momento.</li>\n<li>Notificaciones de alarma para alertas instantáneas de posibles violaciones de seguridad.</li>\n<li>Transcodificación de video a formatos populares para compartir y reproducir fácilmente.</li>\n<li>Almacenamiento y gestión seguros de datos, con opciones de gestión de cuotas y pagos.</li>\n<li>Sistema de gestión de usuarios con acceso y permisos personalizables para diferentes niveles de usuarios.</li>\n</ul>\n",
      },
      {
        keyi18n: "case key 2",
        value_es:
          "Payment Gateway es una plataforma versátil que ofrece una variedad de instrumentos de pago, incluyendo adquisición de internet, pagos P2P, pagos transfronterizos B2B y un sistema de comercio. La plataforma proporciona una manera eficiente de gestionar pagos a través de diferentes canales y simplifica el proceso de pago para las empresas. Incluye módulos para la prevención de fraude, archivado, identificación, criptografía, optimización de comisiones y servicios, agregación de servicios, estadísticas y análisis, bonificaciones y descuentos, monederos electrónicos, módulo de garantías y cumplimiento y almacenamiento de tarjetas / tokens / claves. La interfaz de Payment Gateway ofrece interfaces web para diferentes roles de usuario, incluyendo la oficina del administrador y el gabinete del usuario. En general, Payment Gateway es una plataforma de pago robusta que ofrece una solución integral para las empresas que buscan gestionar sus pagos de manera efectiva.",
      },
      {
        keyi18n: "case key 3",
        value_es:
          "<ul>\n<li>Los sistemas de hogar inteligente permiten a los usuarios controlar y automatizar remotamente varios aspectos de sus hogares, incluyendo iluminación, calefacción, electrodomésticos, dispositivos multimedia, persianas y características de seguridad.</li>\n<li>Estos sistemas suelen estar compuestos tanto de dispositivos de hardware como de aplicaciones de software que se comunican entre sí a través de internet u otras redes.</li>\n<li>La gestión de la iluminación y los electrodomésticos del hogar puede ayudar a los usuarios a ahorrar dinero en sus facturas de energía, asegurando que los dispositivos solo se utilicen cuando sea necesario.</li>\n<li>Los sistemas de hogar inteligente también pueden optimizar el uso de la calefacción y el agua para reducir el desperdicio y mejorar la eficiencia energética.</li>\n<li>Al monitorear el consumo de energía y optimizar los pagos de servicios públicos, estos sistemas también pueden ayudar a los usuarios a ahorrar dinero en sus facturas mensuales.</li>\n<li>Uno de los principales beneficios de los sistemas de hogar inteligente es una mayor seguridad, con características como detección de intrusos, prevención de fugas de agua y detección de incendios y fugas de gas.</li>\n<li>La tecnología de hogar inteligente continúa evolucionando, con nuevas características e integraciones que se agregan regularmente para proporcionar aún más comodidad y automatización para los usuarios.</li>\n</ul>",
      },
      {
        keyi18n: "case key 4",
        value_es:
          '<ul>\n<li>El Security Box es un dispositivo compacto que proporciona tráfico de voz cifrado para garantizar una comunicación segura.</li>\n<li>Cada participante en una conversación segura utiliza su propia copia del dispositivo.</li>\n<li>El dispositivo funciona como un auricular Bluetooth, y se conectan auriculares con cable y micrófono a él.</li>\n<li>La Security Box se comunica a través de una interfaz Bluetooth con un teléfono móvil o una computadora portátil/tableta.</li>\n<li>El flujo de audio en la entrada y salida atraviesa varias etapas de procesamiento para garantizar la transmisión de información cifrada de alta calidad.</li>\n<li>Las técnicas de cifrado utilizadas en la Security Box impiden que terceros descifren datos al interceptar una conversación.</li>\n<li>Si el flujo de audio es interceptado por terceros, sonará como un flujo continuo de "ruido" de crujidos y chirridos.</li>\n<li>La Security Box ofrece una solución única para las empresas que buscan proteger su información confidencial de competidores y ciberdelincuentes.</li>\n</ul>',
      },
      {
        keyi18n: "case key 5",
        value_es:
          "<ul>\n<li>Nuestra APP DE GESTIÓN DE SMART WATCH proporciona una experiencia sin interrupciones para que los usuarios administren múltiples relojes inteligentes en una sola plataforma.</li>\n<li>Los usuarios pueden conectar y administrar más de 20 modelos de relojes con diferentes funcionalidades, incluyendo medición de la frecuencia cardíaca, índices de estrés, medición de temperatura, actividades deportivas y datos de sueño.</li>\n<li>La aplicación está conectada a Strava, lo que permite a los usuarios realizar un seguimiento fácil de los entrenamientos y las calorías.</li>\n<li>Nuestra aplicación se adapta a una amplia gama de usuarios, incluyendo personas mayores, entusiastas del fitness, niños y mujeres, con calendario y ajustes personales para mujeres.</li>\n<li>El diseño intuitivo y la interfaz fácil de usar de la aplicación brindan a los usuarios una experiencia sin problemas para administrar sus relojes inteligentes.</li>\n</ul>",
      },
      {
        keyi18n: "case key 6",
        value_es:
          "Nuestro servicio de taxi está impulsado por un conjunto de aplicaciones de software, incluyendo aplicaciones para clientes y conductores, paneles de administración y un centro de llamadas. Utilizamos configuraciones personales y autenticación de dos factores para garantizar la seguridad. Nuestros sistemas de navegación y pago están integrados para hacer el proceso de llamar a un taxi simple y rápido. Con características como soporte de chat, noticias y notificaciones, servicio de SMS y análisis, estamos constantemente trabajando para mejorar nuestro servicio. Nuestro servicio de taxi se destaca de la competencia por sus características avanzadas, opciones de pago seguras y soporte al cliente superior.",
      },
      { keyi18n: "case1", value_es: "Servicio de video" },
      {
        keyi18n: "case1 p",
        value_es:
          "Es una plataforma de videovigilancia que ofrece monitoreo en tiempo real, grabación y...",
      },
      { keyi18n: "case2", value_es: "Pasarela de pago" },
      {
        keyi18n: "case2 p",
        value_es:
          "Es una plataforma con un conjunto de instrumentos de pago que permite a los usuarios crear billeteras, hacer...",
      },
      { keyi18n: "case3", value_es: "Sistema de hogar inteligente" },
      {
        keyi18n: "case3 p",
        value_es:
          "'Smart Home' es un ecosistema de su hogar para su seguridad y comodidad...",
      },
      { keyi18n: "case4", value_es: "Caja de seguridad" },
      {
        keyi18n: "case4 p",
        value_es:
          "Es es un dispositivo de comunicación compacto y seguro que proporciona tráfico de voz cifrado para garantizar...",
      },
      { keyi18n: "case5", value_es: "Aplicación de gestión de smartwatch" },
      {
        keyi18n: "case5 p",
        value_es:
          "La aplicación le permite conectar y administrar un conjunto de modelos de reloj (actualmente más de 20) con diferentes características y funcionalidades de...",
      },
      { keyi18n: "case6", value_es: "Servicio de taxi" },
      {
        keyi18n: "case6 p",
        value_es:
          "Nuestro servicio de taxi es impulsado por una suite de aplicaciones de software, incluyendo...",
      },
      {
        keyi18n: "cases page p",
        value_es:
          "En esta sección, puede familiarizarse con el trabajo de nuestra empresa en el campo del desarrollo de software. Esto le ayudará a conocer más sobre nuestra experiencia y éxitos.",
      },
      { keyi18n: "contact btn", value_es: "Contáctanos" },
      { keyi18n: "contact form", value_es: "Formulario de contacto" },
      { keyi18n: "contacts", value_es: "Contactos" },
      {
        keyi18n: "discuss",
        value_es: "¿Listo para discutir tu proyecto con nosotros?",
      },
      { keyi18n: "form company placeholder", value_es: "Empresa *" },
      { keyi18n: "form email placeholder", value_es: "Correo electrónico *" },
      { keyi18n: "form last name placeholder", value_es: "Apellido *" },
      { keyi18n: "form message title", value_es: "Mensaje" },
      { keyi18n: "form name placeholder", value_es: "Nombre *" },
      { keyi18n: "form phone placeholder", value_es: "Teléfono *" },
      { keyi18n: "get more", value_es: "Obtener más" },
      {
        keyi18n: "home description",
        value_es:
          "Desarrollamos e implementamos soluciones innovadoras para ayudar a nuestros clientes a ser líderes en su industria.",
      },
      {
        keyi18n: "industries page p",
        value_es:
          "En Quadrotech entendemos que cada industria tiene desafíos y requisitos únicos. Explore los diversos sectores a los que servimos y descubra cómo Quadrotech puede ayudar a su negocio a prosperar.",
      },
      { keyi18n: "nav cases", value_es: "Casos" },
      { keyi18n: "nav contacts", value_es: "Contactos" },
      { keyi18n: "nav home", value_es: "Inicio" },
      { keyi18n: "nav industries", value_es: "Industrias" },
      { keyi18n: "nav reviews", value_es: "Reseñas" },
      { keyi18n: "nav services", value_es: "Servicios" },
      { keyi18n: "navigation", value_es: "Navegación" },
      {
        keyi18n: "p footer",
        value_es:
          "Desarrollamos e implementamos soluciones innovadoras para ayudar a nuestros clientes a ser líderes en su industria.",
      },
      {
        keyi18n: "review item",
        value_es:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      },
      {
        keyi18n: "reviews page p",
        value_es:
          "En esta sección, puedes revisar la retroalimentación de nuestros clientes. Los clientes satisfechos son nuestra máxima prioridad, y trabajamos todos los días para asegurarnos de que logren los resultados deseados.",
      },
      { keyi18n: "send", value_es: "Enviar" },
      { keyi18n: "sent", value_es: "¡Mensaje enviado!" },
      {
        keyi18n: "services page p",
        value_es:
          "Ofrecemos servicios de desarrollo de software de principio a fin que abarcan todo el ciclo de vida del proyecto, desde la conceptualización hasta la implementación y más allá. Nuestro equipo es capaz de crear soluciones de software personalizadas desde cero, o podemos brindar soporte en cualquier etapa de su proyecto.",
      },
      { keyi18n: "slide description 1", value_es: "" },
      { keyi18n: "slide description 2", value_es: "" },
      { keyi18n: "slide description 3", value_es: "" },
      { keyi18n: "slide title 1", value_es: "" },
      { keyi18n: "slide title 2", value_es: "" },
      { keyi18n: "slide title 3", value_es: "" },
      {
        keyi18n: "team p",
        value_es:
          "En Quadrotech creemos que nuestro éxito está directamente relacionado con el talento, dedicación y experiencia de nuestro equipo. Con una pasión por la tecnología y un compromiso con la innovación, nuestro diverso equipo de expertos aporta una gran cantidad de experiencia a cada proyecto. Conozca a las personas talentosas detrás de nuestra empresa y descubra cómo nuestro equipo puede ayudar a que su negocio prospere.",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("content_es", null, {});
  },
};
