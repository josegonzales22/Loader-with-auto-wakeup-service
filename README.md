# Loader with auto wake-up service
<div align="start">
  <p>This project is a web loader application designed to make automatic GET requests to any web page. Its main objective is to check and wake up web services that may be inactive or asleep due to resource saving policies in hosting services. It is ideal for projects that require to automatically start a web service, keeping the user informed through a visual loader while the service is restarted. The project makes repeated requests at configurable time intervals, checking the status of the service until it is fully active. Once the web service is available, the loader redirects the user to the destination page.
</p>
</div>

## Important
It's very important that you set the target environment variable to netlify, this project does not use .env files, only netlify environment variables.

| Variable                | Value                                            |
| :---------------------- | :----------------------------------------------- |
| TARGET_URL              | Your url to wake up                              |

If you need to modify the page title or any else, you can modify the content.json in /public/json/content.json
<p>Note: The languages available is english and spanish.</p>

## Commands

| Command                | Action                                            |
| :--------------------- | :------------------------------------------------ |
| `npm install`          | Install dependencies                              |
| `npm run dev`          | Start local dev server at `localhost:4321`        |
| `npm run build`        | Build your production site to `./dist/`           |
| `npm run preview`      | Preview your build locally, before deploying      |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check`  |
| `npm run astro --help` | Get help using the Astro CLI                      |
| `npm run format`       | Format code with [Prettier](https://prettier.io/) |
| `npm run clean`        | Remove `node_modules` and build output            |

## Credits

- Jose Gonzales
  - Linkedin: https://josegonz.netlify.app/
  - Github: https://github.com/josegonzales22
- Astro
  - source: https://astro.build
- Tailwind CSS
  - source: https://tailwindcss.com/
- Netlify Hosting
  - source: https://www.netlify.com/
