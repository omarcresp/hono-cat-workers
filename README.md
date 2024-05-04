# Hono minimal project

This is a minimal project with [Hono](https://github.com/honojs/hono/) for Cloudflare Workers.

## Features

- Minimal
- TypeScript
- Wrangler to develop and deploy.
- [Jest](https://jestjs.io/ja/) for testing.

## Usage

Initialize

```
npx create-cloudflare my-app https://github.com/honojs/hono-minimal
```

Install

```
yarn install
```

Develop

```
yarn dev
```

Test

```
yarn test
```

Deploy

```
yarn deploy
```

## Examples

See: <https://github.com/honojs/examples>

## For more information

See: <https://honojs.dev>

## Author

Omar Crespo <https://github.com/omarcresp>
Yusuke Wada <https://github.com/yusukebe>

## TODO

#### For template
- [X] Add vitest
- [ ] Improve error handling
- [ ] EH: htmx shows errors
- [ ] EH: StatusCodes
- [ ] EH: DTO middleware json parsing error
- [ ] Eslint + prettier
- [ ] Modules segment
- [ ] Document

#### For big project ussage
- [ ] JWT
- [ ] R2
- [ ] MQ System to connect services
- [ ] Auth middleware that injects user
- [ ] Development server flow

## License

MIT
