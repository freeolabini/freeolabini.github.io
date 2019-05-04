# #FreeOlaBini

**This repo is for the FreeOlaBini Website**

https://freeolabini.org


Our esteemed colleague, Ola Bini, is being detained as a political prisoner in Ecuador. Please take action to show your support:

 - Follow [@FreeOlaBini], tweet [#FreeOlaBini] and visit freeolabini.org for updates
 - Help support the family and legal effors by [donating to the crowd funding campaign][donate].
 - [Send an email][codepink] to the president of Ecuador via Code Pink's Campaign site
 - Email [support@freeolabini.org] if you want to help with these campaign efforts
 - Sign our [solidarity letter][statement] from the tech community
 - [Join][newsletter] our newsletter for updates

[@FreeOlaBini]: http://twitter.com/FreeOlaBini
[#FreeOlaBini]: https://twitter.com/intent/tweet?url=https://freeolabini.org&text=Digital+rights+defender+Ola+Bini+has+been+imprisoned+in+Ecuador.+Please+follow+@FreeOlaBini+%23FreeOlaBini&hashtags=FreeOlaBini
[donate]: https://www.gofundme.com/freeolabini
[codepink]: https://www.codepink.org/free-ola-bini
[support@freeolabini.org]: mailto:support@freeolabini.org
[statement]: https://freeolabini.org/en/statement/
[newsletter]: https://freeolabini.org/en/subscribe/

## Contributing


### Chat Room`
Join our [Wire Guest Room](/JOIN-CHAT.md) if you want to help or have any questions.


### Issues

Add an [Issue](https://github.com/freeolabini/freeolabini.github.io/issues) if you have any suggestions or find any problems with the site

### Help with the Website and Translations

Fork this repo and clone locally.

run npm install

```bash
npm install
```

The pages are in the `_src` directory, using markdown wiht yaml frontmatter

The site is built using http://11ty.io

The css is http://tachyons.io/docs/

Icons are https://icons8.com/line-awesome

When working locally on the site, start a dev server with

```bash
npm start
```
You now have a local webserver serving the site, as well as a browsersync for testing

When you are ready to submit your site for publication, run:

```bash
npm run build
```

Then git commit and push your changes, and make a pull request

Always start new work by merging upstream.

An explanation of the GitHub Standard Fork & Pull Request Workflow: https://gist.github.com/Chaser324/ce0505fbed06b947d962

### License

This website is licensed under the [GNU AGPLv3 license](LICENSE). The textual content is under the [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.en).
