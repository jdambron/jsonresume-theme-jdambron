# Julien Dambron's theme for jsonresume [![npm version](https://badge.fury.io/js/jsonresume-theme-jdambron.svg)](https://badge.fury.io/js/jsonresume-theme-jdambron)

A theme for my resume, freely inspired from the Stackoverflow theme.

## Usage

Install the theme and render with the [resume-cli](https://github.com/jsonresume/resume-cli):

```sh
npm install -g resume-cli
npm install jsonresume-theme-jdambron
resume export resume.pdf --theme jsonresume-theme-jdambron --format A4
```

The theme exports:

- `render(resume)` — returns a full HTML string (CSS is inlined; the Inter font is base64-embedded for PDF output).
- `pdfRenderOptions` — A4 page with 0.8 cm margins, passed to the PDF renderer.

## Non-standard fields

On top of the [JSON Resume schema](https://jsonresume.org/schema/), this theme supports:

- `basics.birth` — `{ place, state, date }`, rendered as "Born in …" in the header.
- `basics.degree` — free-form text rendered under the label in the header (e.g. "Master of Science in Engineering").
- `skills[].levelDisplay` — free-form text shown instead of the numeric/standard `level`.
- `languages[].fluencyDisplay` — free-form text shown instead of the standard `fluency` value.

## Notes

- Profile icons use Font Awesome brand icons: the `network` field must match a [Font Awesome brand slug](https://fontawesome.com/search?icons=brands) (e.g. `github`, `linkedin`). Only the brand icons listed in `scripts/build-icons.js` are bundled.
- Font Awesome fonts are subsetted to the icons the theme uses and embedded as base64 (`theme/icons.css`), so rendering works fully offline. To add or remove icons, edit the lists in `scripts/build-icons.js` and run `bun run build:icons`.
- Markdown is supported in `summary` / `highlights` fields (raw HTML is disabled, links are auto-linkified).

## Development

```sh
bun install        # install dependencies
bun run test       # run Jest tests with coverage
bun run updateTestSnapshots   # update the HTML snapshot after intentional changes
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgements

 - [jsonresume-theme-curzy](https://github.com/Curzy/jsonresume-theme-curzy)
 - [jsonresume-theme-stackoverflow](https://github.com/phoinixi/jsonresume-theme-stackoverflow)
 - [JSON Resume](https://jsonresume.org/)
 - [HackMyResume](https://github.com/hacksalot/HackMyResume)
