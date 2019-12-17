---
layout: post.njk
date: 2019-09-28
image: /img/data.jpg
title: ¿Cómo proteger tu organización de la filtración de información?
tags:
  - letteres
  - post
  - es
---
En los últimos años, muchas personas han dicho que los datos son el nuevo petróleo. Lo que quieren decir con esto es que los datos se están convirtiendo cada vez más en un recurso que puede ser muy valioso. Muchas empresas dependen principalmente de los datos, especialmente datos personales, como su principal fuente de ingresos. Otras organizaciones están obligadas a mantener datos personales, como instituciones gubernamentales de diversos tipos. Pero la analogía con el petróleo también tiene un lado más oscuro: cuando ocurre un derrame de petróleo, el petróleo se convierte en una responsabilidad para la organización que lo tenía, pero también daña el medio ambiente de varias maneras. Y lo mismo es cierto con los datos sobre individuos. La filtración de datos puede ser catastrófica para la organización de donde estos provienen, pero también causa daños incalculables a las personas en general.

A pesar de esto, las fugas masivas de datos personales se han convertido en un fenómeno regular en los últimos diez años. Seguimos escuchando sobre mega filtraciones de información con millones e incluso miles de millones de datos en ellas. ¿Por qué sigue sucediendo esto? ¿Podemos hacer algo para detenerlo?

Existen muchas formas en que los datos pueden filtrarse. A veces se hace de manera intencional, por delincuentes que entran y roban los datos. A veces la información es filtrada por personas que tienen acceso legítimo a ella. Pero con demasiada frecuencia, estas filtraciones ocurren debido a configuraciones incorrectas y errores técnicos.

La protección contra todo tipo de ataques es un tema importante y requiere mucho tiempo y recursos. Pero como primer paso, en esta publicación,quería dar algunas pautas básicas sobre lo que la mayoría de las organizaciones que manejan grandes cantidades de datos personales deberían hacer para proteger los mismos. Estas pautas son, por supuesto, sólo un punto de partida, pero si no se las implementa, es probable que ocurra una filtración de información de tu organización tarde o temprano.

Este consejo se divide a grandes rasgos en acciones técnicas y acciones relacionadas con políticas.

### Firewalls

Los firewalls son un componente necesario de la seguridad de la red. En general, cada red debe tener un firewall que proteja la entrada y la salida a la red. Pero esto no es suficiente, cada máquina también debe configurarse con su propio firewall. En general, lo ideal es que estas sean configuradas de la manera más conservadora posible. No se deben abrir puertos, excepto los necesarios. E incluso esos deberían restringirse únicamente a las direcciones IP con las que, se supone, deben hablar. Las únicas cosas a las que debería ser posible acceder desde el exterior de la red son servicios destinados a ser públicos. En general, esto quiere decir, sólo servidores web, y nada más.

Si ya tienes firewalls, asegúrate de revisar regularmente las reglas y asegúrate de que sean tan mínimas y cerradas como sea posible. A veces los errores suceden. Eso es normal, pero debes tener procedimientos establecidos para asegurarte de que puedas detectarlos y rectificarlos rápidamente.

Es importante no confiar completamente en los firewalls. A veces, las organizaciones ponen un firewall en el punto de entrada a su red y luego piensan que todo está bien, y que su red interna siempre está protegida. Pero en seguridad, debemos pensar en defensa de manera profunda. Entonces, si alguien logra entrar en la red, o si el firewall externo está mal configurado, es importante tener protecciones incluso en los sistemas internos.

### Sistemas de detección de intrusiones

En general, es una buena idea ejecutar sistemas de detección de intrusos (como Snort) en una red. Estos sistemas identificarán potenciales atacantes e intrusiones, y puede configurarse para apagar a los atacantes o notificar a los administradores del sistema. Estos sistemas también se pueden ejecutar en máquinas individuales, para que sea más probable que los intrusos sean descubiertos.

Este tipo de sistemas admite muchas opciones de configuración y permite muchas posibilidades. Empieza de a poco, configurando uno con las opciones predeterminadas, y luego mira cómo funciona y continúa configurándolo mientras vayas aprendiendo más sobre el sistema.

Si los datos están disponibles públicamente, implementa límites en la tasa de uso
Se pretende que algunos tipos de datos personales estén disponibles públicamente. Sin embargo, eso no significa que alguien pueda exponer una base de datos al mundo y permitir cualquiera obtenga todos los datos directamente. En cambio, cuando se trabaja con este tipo de datos, generalmente, es una muy buena idea implementar medidas que limiten la cantidad de datos a los que puede acceder un sólo cliente. Esto se puede hacer de diferentes maneras, dependiendo de qué tipo de datos estemos hablando. Un método simple es permitir únicamente el acceso a elementos independientes de datos a la vez, y luego limitar la frecuencia con la que el mismo cliente puede buscar información. Este tipo de limitación en la tasa de uso se puede hacer con temporizadores simples por dirección IP, o se pueden usar sistemas más complicados con tiempos de espera escalonados.

Otra forma de controlar el acceso a los datos es exigir a una persona que se registre y autentique antes de obtener acceso a los datos. De este modo, si alguien hace un mal uso de los datos, intenta descargar demasiado o automatiza el raspado de ellos, la cuenta puede ser limitada.

Finalmente, CAPTCHA también puede ser una técnica para asegurarse de que un cliente no descargue automáticamente demasiada información.

### Utiliza Shodan regularmente para todas tus direcciones IP

Debes tener una lista de todas las direcciones IP públicas asignadas y utilizadas por tu organización. Con esta lista puedes hacer comprobaciones periódicas basadas en servicios públicos como Shodan (https://shodan.io). Estos servicios escanean regularmente todo el internet en busca de servicios en común. Es una buena idea ver si alguna de sus direcciones IP se muestra en sus escaneos, de esta manera sabrás si dejaste un servicio abierto sin querer, a manera de ejemplo.

También puedes buscar el nombre de tu organización con Shodan. A veces, esto muestra direcciones IP o servicios que puedes haber olvidado. y a veces te muestra otras entidades que están usando tu nombre por alguna razón.

Este tipo de búsqueda en Shodan debe hacerse regularmente, de preferencia cada mes, más o menos, para asegurarse de que no hayas dejado algo abierto que debería estar cerrado.

### Escanea tus redes usando nmap

Servicios como Shodan son útiles, porque te muestran lo que podría ver un posible intruso. Pero también debes acostumbrarte a hacer tus propios escaneos, utilizando herramientas como nmap. Al hacer esto, obtienes dos beneficios: puede escanear TODOS los servicios potenciales en tus direcciones IP, no sólo los más comunes que Shodan busca. Y también puedes escanear tus redes internas con direcciones privadas para asegurarte de que no hayas expuesto nada que debería estar protegido, internamente.

Dado que nmap es una herramienta disponible públicamente que cualquiera puede usar de forma gratuita, podría ser una buena idea simplemente escribir un script y programarlo para que se ejecute cada día. Puedes configurar las cosas para que, si algo cambia, se te notifique de inmediato. De esta manera, sabrás si hay errores o problemas lo más rápido posible.

### Separa servidores de logs

Herramientas como firewalls, sistemas de detección de intrusos y otros tipos de servicios generan registros. Si alguna vez ocurre un incidente, debes mirar lo que sucedió e intentar averiguar la extensión del daño, si hubo atacantes que ingresaron o si algo más sucedió. El problema es que todos los diferentes mecanismos generarán por defecto registros en sus propias máquinas. Recolectarlos a todos puede ser realmente problemático, y a veces los registros se rotan o eliminan, dependiendo de la configuración de la máquina. Si un atacante logra entrar, incluso podría modificar los registros.

Por todas estas razones, es muy importante tener servidores de logs separados configurados y que todos los servicios utilizados en tu red envíen sus logs a este servidor separado. Luego puedes proteger este servidor de logs, ejecutar análisis en todos los registros en un sólo lugar y configurar, asimismo, la rotación y eliminación de registros en un sólo lugar. Si alguna vez tienes que investigar un incidente, esta configuración hace una gran diferencia.

### Contrata penetration testers

No todas las organizaciones tienen las habilidades de seguridad necesarias para saber qué tan segura es su red. E incluso los que sí las poseen, pueden cometen errores Por estas razones, es una buena idea contratar firmas de seguridad externas para realizar pruebas de penetración. Estas pruebas te dirán en dónde están tus puntos débiles que deben mejorarse.

Al igual que muchas de estas pautas, esto no es algo que puedes hacer una sóla vez y no repetirlo jamás. Dependiendo de qué tipo de datos tengas y cómo se procesan, deberías programar pruebas de penetración como parte de su negocio habitual, y debería suceder de manera regular, probablemente al menos una vez al año.

### Ten un CISO y/o un oficial de privacidad

La seguridad de la información es una preocupación que casi ninguna organización puede darse el lujo de ignorar en estos días. Y cuando se trata de preocupaciones que son críticas para una organización, alguien debe ser responsable de ello. Este rol generalmente se llama Jefe de Seguridad de la Información Oficial (CISO). Para organizaciones más pequeñas, esta persona también podría tener otras responsabilidades y roles. Pero si estás manejando datos personales, debes asegurarte de que esta persona exista en tu organización. No importa si eres una empresa o una organización gubernamental o algo diferente, este rol tiene que existir, y debe tener absolutamente claro cuáles son sus responsabilidades.

En una organización más grande, y en organizaciones que manejan mucha información privada, también es una buena idea tener un Jefe de Privacidad Oficial. Esto a veces puede superponerse con el CISO, pero a veces las perspectivas son diferentes. El Director de Privacidad se centra en los riesgos relacionados con posibles intrusiones de privacidad, tanto desde el exterior, como también basado en las prácticas de las propias organizaciones.

Lo importante no es que existan exactamente estos jefes en una organización, sino que la organización tenga personas que estén explícitamente a cargo y tengan responsabilidad sobre estas inquietudes. Si estas personas también tienen otros roles, eso puede estar bien, siempre y cuando la responsabilidad sea clara. Para organizaciones más grandes, estos roles también pueden tener responsabilidad legal.

También es importante tener en cuenta que el CISO y el CPO deben conocer a los subcontratistas y proveedores que podrían tener acceso o procesar los datos. Estos oficiales deben asegurarse de que estos proveedores también sigan las mismas normas de protección para los datos, tanto legal como técnicamente.

### Sigue las regulaciones de protección de datos en todos los países aplicables
Los datos personales vienen con muchas regulaciones potenciales. En la mayoría de los países hay leyes y consideraciones que deben ser cuidadosamente seguidas dependiendo de qué tipo de datos generas y cómo los usas. También puede haber una regulación más específica con respecto a la información más sensible. En algunos países, la información de salud se trata de manera diferente. La información sobre los niños también requiere más protección. La información tarjetas de crédito generalmente se regula a nivel internacional y nacional. Y muchos países también tienen diferentes requisitos según la cantidad de información que posean sobre las personas, en comparación con la cantidad de personas sobre las que tiene datos. En algunos casos, entran en vigor diferentes leyes si se combinan dos bases de datos, en comparación con mantenerlas por separado.

Además, para determinar qué leyes son aplicables, es probable que tengas que mirar las regulaciones del país en el que existe su organización, además del país donde se almacenan físicamente los datos. Asimismo, algunos países tienen regulaciones que cubren a sus ciudadanos sin importar en qué país se manejan los datos. Y, por último, si estás procesando los datos en un país diferente de donde están almacenados, también podrías mirar las regulaciones de ese país. Como ejemplo, digamos que una organización brasileña tiene datos almacenados en servidores en Miami. Ellos tienen trabajos de procesamiento realizados por un centro de datos en Francia. Las personas cuyos datos se procesan son de Brasil y Argentina. Esto te implica que posiblemente deban asegurarse de cumplir con las reglamentaciones en Brasil, EE. UU. (y posiblemente en las reglamentaciones estatales de Florida), Francia y Argentina. Además, dado que la Unión Europea aprobó el GDPR, es posible que también deba asegurarse de que su procesamiento de datos cumpla con el GDPR.

El análisis de estas preguntas generalmente tiene que suceder bastante temprano en el proceso de una organización que decide administrar datos. Puede ser complicado, pero no hacerlo podría generar riesgos legales catastróficos para tu organización.

### Ten políticas en torno a quien tiene acceso a los datos
Si bien se pueden usar medios técnicos para proteger los datos, también es importante que tu organización tenga claro quién se supone que debe tener acceso a los datos. Cuando se trata de datos personales en grandes cantidades, tener políticas explícitas sobre cómo se gestionan esos datos, quién puede verlos y quién no, es imprescindible. Las decisiones técnicas sobre el acceso deben provenir de políticas que aclaren quién está autorizado o no.

### Segmenta/compartimenta tus datos

Para minimizar el riesgo de los datos, a veces puede ser una buena idea tratar de segmentarlos o dividirlos de diferentes maneras. Esto a veces tiene que hacerse para cumplir con las regulaciones, pero también es algo que puede facilitar el manejo de los datos. Puedes dividir los datos vertical u horizontalmente. Como se vio en el ejemplo anterior, se puede almacenar datos sobre personas de Brasil en un servicio, y datos sobre personas de Argentina en otro. O bien, se pueden mantener datos básicos sobre las personas en un solo lugar y luego mantener información más confidencial, como la relacionada con temas de salud en un sistema diferente. De esa manera, puede asegurarse de acceder solo a los datos más confidenciales cuando sea necesario. Y también puedes implementar políticas sobre el acceso a los diferentes tipos de datos.

### Anonimiza la información

A veces no necesitas conservar todos los datos en la forma en que fueron obtenidos. Dependiendo de las razones por las que necesitas los datos, a veces puede ser posible despersonalizarlos, o incluso anonimizarlos eliminando cualquier cosa que identifique a las personas de manera única. Esto puede servir como algo protección en caso de incidente.

Sin embargo, vale la pena tener en cuenta que anonimizar datos sobre individuos es extremadamente difícil. Los investigadores han demostrado que a menudo es posible anonimizar conjuntos de datos con información sorprendentemente pequeña en ellos.

### No tengas la información

La mejor manera de evitar incidentes con fugas de datos o robos es no tener los datos en primer lugar. Antes de comenzar a reunir información sobre las personas, piensa detenidamente por qué lo estás haciendo, qué propósito tiene almacenar dichos datos, si la potencial intrusión a la privacidad lo vale. En muchos casos, las organizaciones recopilan significativamente más información sobre individuos de la estrictamente necesaria para realizar sus operaciones, a veces esto se hace de manera intencional, ya que la información se puede vender a terceros para obtener ganancias significativas. Pero otras veces simplemente se hace porque nadie se detuvo a pensar en ello. Entonces, detente y piensa en ello. ¿Realmente necesitas reunir toda esa información? ¿Hay alguna razón por la que debas solicitar el género, la fecha de nacimiento o el número de identificación cuando alguien está creando una cuenta?

Muchas veces, la respuesta será no, y tendrás un riesgo mucho menor de un incidente potencialmente catastrófico. Recuerda, los únicos datos que se pueden filtrar son aquellos datos que en realidad posees.

### Conclusiones

La información puede ser muy valiosa, pero también es una responsabilidad y una amenaza potencial para tu organización. Hay muchas formas de manejar este riesgo, pero debe hacerse de manera intencional. Se deben adoptar medidas técnicas y políticas para este fin. En el entorno de hoy, no es aceptable que una organización recopile datos personales y no tenga una estrategia explícita sobre cómo proteger esos datos. Las brechas y filtraciones suceden todo el tiempo, y el costo de estos es pagado con demasiada frecuencia por personas inocentes y no por las organizaciones en cuestión.

Las pautas en esta publicación son un punto de partida. No te detengas aquí. Protege la información de manera intencional. El hecho de que a tu organización se le permita tener estos datos se basa en la confianza del resto de la sociedad. Esa confianza viene con la expectativa de que tu organización actúe responsablemente y proteja esos datos, de acuerdo con los riesgos y amenazas que existen. Este no es un estándar alto, es el más bajo nivel que se debería esperar. Traten nuestros datos con respeto.

Ola Bini, CAD
