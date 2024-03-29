# Code with Grace

### Live at: [codewithgrace.org.au](https://codewithgrace.org.au/)

Official site of Code with Grace - A free Box Hill coding meetup run by Grace Christian Community church

## Project Structure 🗃

```bash
/
├── public/
│   ├── assets/
│   └── favicon.png
│   └── robots.txt
│   └── toggle-theme.js
├── src/
│   ├── assets/
│   │   └── socialIcons.ts
│   ├── components/
│   ├── contents/
│   │   └── some-event.md
│   ├── layouts/
│   └── pages/
│   └── styles/
│   └── utils/
│   └── config.ts
│   └── types.ts
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, are placed in the `public/` directory.

Content such as events are stored in the `src/contents/` directory.

## Tech 💻

**Main Framework** - [Astro](https://astro.build/)  
**Type Checking** - [TypeScript](https://www.typescriptlang.org/)  
**Component Framework** - [ReactJS](https://reactjs.org/)  
**Styling** - [TailwindCSS](https://tailwindcss.com/)  
**Icons** - [Boxicons](https://boxicons.com/) | [Tablers](https://tabler-icons.io/)  
**Code Formatting** - [Prettier](https://prettier.io/)  
**Markdown Linting** - [Markdown Lint](https://github.com/DavidAnson/vscode-markdownlint)  
**Starting Theme** - [AstroPaper](https://github.com/satnaing/astro-paper)  

## Commands 📣

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `yarn install`         | Installs dependencies                              |
| `yarn dev`             | Starts local dev server                            |
| `yarn build`           | Build your production site to `./dist/`            |
| `yarn preview`         | Preview your build locally, before deploying       |
| `yarn format:check`    | Check code format with Prettier                    |
| `yarn format`          | Format codes with Prettier                         |
| `yarn astro ...`       | Run CLI commands like `astro add`, `astro preview` |
| `yarn astro --help`    | Get help using the Astro CLI                       |

## License 📄

Licensed under the MIT License, Copyright © 2023
