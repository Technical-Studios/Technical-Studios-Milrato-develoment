# Milrato
<a href="https://teamarcades.xyz/discord">
    <img src="https://discord.com/api/guilds/935157109761388554/widget.png?style=banner2">
</a>

Nuestra [**Comunidad**](https://teamarcades.xyz/discord) de discord nos dedicamos a codificar y a traer nuevos codigos fuentes [únase a mi servidor de Discord](https://teamarcades.xyz/discord) para obtener un Bot personalizado alojado para usted.

# 📑 Traducion

**NOTA:** Para las personas que quieren **traducir** este bot al 100% les e ayudó con un 50% si se puede decir, en **[`languages/sp.json`](./languages/sp.json)** esta el 90% **Traducido al Español** usando el **Traductor** de **Google** ya que pueden ver errores de ortografía y de textos, esto ustedes lo pueden solucionar solo se que fue de gran ayuda traducir +5000 lineas para este codigo!)
 
## ⚔ Emojis

**NOTA:** En este codigo todos los **Emojis** fueron cambiados por **Emojis** predeterminados de **Discord** esto fue echo con el fin de que fuera de mejor uso y ahorar mas tiempo en añadir emojis personalizados!)

# Guía de instalación 🔥

## ✅ Requisitos de alojamiento

<details>
  <summary>Haga clic para ampliar</summary>

  * [nodejs](https://nodejs.org) versión 16.6 o superior, recomiendo la última versión STABLE
  * [python](https://python.org) versión 3.8 o superior, para instalar la base de datos `enmap` (better-sqlite3)
  * Se recomienda un VPS, por lo que no necesita mantener su PC/portátil/RasPi en línea las 24 horas del día, los 7 días de la semana. [Haga clic aquí para una configuración de Debian](https://github.com/Tomato6966/Debian-Cheat-Sheet-Setup/wiki/).
  
</details>

## 🎶 Requisitos de música

<details>
  <summary>Haga clic para ampliar</summary>

  *¡Para permitir que su Bot reproduzca música, debe conectarlo a una estación LavaLink!*
  *Hay muchos públicos, por ejemplo, lava.link*
  A continuación se enumera un ejemplo de una configuración pública.
   
  1. ¡Asegúrese de que `Java 11` esté instalado en su sistema!
     * [Haga clic aquí para descargar para **Linux**](https://github.com/Tomato6966/Debian-Cheat-Sheet-Setup/wiki/3.5.2-java-11)
     * [Haga clic aquí para descargar para **Windows**](https://downloads.milrato.eu/windows/java/jdk-11.0.11.exe) ​
  2. Descargue [Lavalink.jar](https://github.com/freyacodes/Lavalink/releases/download/3.4/Lavalink.jar)
     * Aquí hay un enlace directo: https://github.com/freyacodes/Lavalink/releases/download/3.4/Lavalink.jar
     * Si está en Linux, haga esto: `wget https://github.com/freyacodes/Lavalink/releases/download/3.4/Lavalink.jar` (prep: `apt-get install -y wget`)
  3. Descarga [aplicación.yml](https://cdn.discordapp.com/attachments/734517910025928765/934084553751015475/aplicación.yml)
     * Descargue mi ejemplo, ¡es la configuración para el archivo lavalink.jar!
  4. Ahora coloque application.yml y Lavalink.jar en la misma carpeta e inícielo
     * Para iniciar LavaLink escriba: `java -jar Lavalink.jar`
     * ¡Asegúrate de mantener tu terminal abierta!
     * Si desea utilizar algo como `npm i -g pm2` para alojarlo sin mantener su terminal abierta, escriba: `pm2 start java -- -jar Lavalink.jar`
  5. Las configuraciones como **contraseña** en application.yml y **puerto** deben proporcionarse en `botconfig/config.json` del Bot
     * Si usó la configuración predeterminada, entonces no se necesitan ajustes y debería verse así:
     ```json
        {
            "clientsettings": {
                "nodes": [
                    {
                        "host": "localhost",
                        "port": 2333,
                        "password": "youshallnotpass"
                    }
                ]
            }
        }
     ```
  6. ¿No desea alojar su propio LavaLink?
     * [¡Aquí hay una lista de muchos servidores LavaLink de uso gratuito!](https://lavalink.darrennathanael.com/#how2host)
     * O simplemente usa algo como esto:
     ```json
        {
            "clientsettings": {
                "nodes": [
                    {
                        "host": "lava.link",
                        "port": 80,
                        "password": "Team_Arcades"
                    }
                ]
            }
        }
     ```

</details>

## 🤖 Configuración y puesta en marcha

<details>
  <summary>Haga clic para ampliar</summary>

  **NOTA:** *Puedes hacer exactamente la misma configuración dentro del archivo `example.env`, ¡solo asegúrate de cambiarle el nombre a `.env` o usar variables de entorno!*
 
   1. Verifique los `🎶 Requisitos de música` que inició lavalink / use una estación de lavalink pública válida.
   2. Complete todos los datos requeridos en `./botconfig/config.json` **NOTA:** *Si está en replit.com, ¡está expuesto a todos! (Use .env en su lugar)*
   3. Complete todos los datos requeridos en los archivos `.json` en `./social_log/` (`./social_log/streamconfig.json` & `./social_log/twitter.json`), si desea que los REGISTROS SOCIALES ¡trabajar! (¡No es necesario completar la clave `authToken` en streamconfig!)
   4. Puede ajustar algunas configuraciones en los otros archivos `./botconfig/*.json`, **PERO POR FAVOR __GUARDE__ MIS CRÉDITOS Y ANUNCIOS.** Esta es la única forma de "ingresar" mi arduo trabajo.
   5. Ahora inicie el bot abriendo una línea cmd en esa carpeta y escribiendo: `node index.js` o `npm start`
     * Si no desea mantener la terminal abierta o si está en Linux, consulte [pm2 (y mi tutorial)](https://github.com/Tomato6966/Debian-Cheat-Sheet-Setup/wiki/4-pm2-tutorial) y escriba: `pm2 start --name Bot_Name index.js`
  
</details>

## ❓ Dónde obtener qué Api-Key(s)

<details>
  <summary>Haga clic para ampliar</summary>

  **NOTA:** *Puedes hacer exactamente la misma configuración dentro del archivo `example.env`, ¡solo asegúrate de cambiarle el nombre a `.env` o usar variables de entorno!*
 
  1. `./botconfig/config.json`
     * `token` que puede obtener de: [discord-Developers](https://discord.com/developers/applications)
     * `memer_api` se puede obtener de: [Meme-Development DC](https://discord.gg/Mc2FudJkgP)
     * `spotify.clientSecret` se puede obtener de: [Spotify-Developer](https://developer.spotify.com)
     * `spotify.clientID` se puede obtener de: [Spotify-Developer](https://developer.spotify.com)
     * `fnbr` es un token FNBR, que puede obtener de [FNBRO.co](https://fnbr.co/api/docs) (necesario para fnshop)
     * `fortnitetracker` es un token FORTNITE TRACKER, que puede obtener de [fortnitetracker.com](https://fortnitetracker.com/site-api) (necesario para fnstats)
  2. `./social_log/streamconfig.json`
     * `twitch_clientID` se puede obtener de: [Twitch-Developer](https://dev.twitch.tv/docs/api) ([developer-console](https://dev.twitch.tv/console))
     * `twitch_secret` se puede obtener de: [Twitch-Developer](https://dev.twitch.tv/docs/api) ([developer-console](https://dev.twitch.tv/console))
     * No es necesario completar `authToken` --> se hará automáticamente
  3. `./social_log/twitter.json`
     * `consumer_key` que puede obtener de: [Desarrolladores de Twitter](https://developer.twitter.com)
     * `consumer_secret` se puede obtener de: [Desarrolladores de Twitter](https://developer.twitter.com)
     * `access_token` se puede obtener de: [Desarrolladores de Twitter](https://developer.twitter.com)
     * `access_token_secret` se puede obtener de: [Desarrolladores de Twitter](https://developer.twitter.com)
  
</details>

# Créditos

> Si consideras usar este Bot, ¡asegúrate de darme crédito!
> Ejemplo: `Bot creado por [Milrato](https://discord.gg/milrato) pero modificado por [modificador/tu nombre](https://discord.gg/)`
