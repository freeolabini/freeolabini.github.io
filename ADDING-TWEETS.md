# Adding a tweet to the website

These are instructions for adding a tweet to the website.

## Steps to follow

* Fork this repo and clone locally.

* The tweets are in the `_src/tweets` directory, using markdown.
  
  NOTE: Individual tweets put in a file. The file called `tweet-NNNNN.md` where `NNNNN` is greater than the largest number found in the folder. For example `tweet-00005.md`.

* The images are in the `_src/img/tweets` directory

* Markdown format for tweets

    Format of markdown
    ```
    ---
    author: User Name
    handle: username
    date: YYYY-MM-DD
    url: https://twitter.com/username/status/statusid
    thumbnail: twitter.username.statusid.png
    ---
    ```

    Example tweet
    ```
    ---
    author: David Kaye
    date: 2019-04-14
    handle: davidakaye
    url: https://twitter.com/davidakaye/status/1117489081397547008
    thumbnail: twitter.davidakaye.1117489081397547008.png
    ---
    ```

* In addition to this if possible re-build the website in your local machine and
  see if the tweets show up correctly before creating a pull request.

  Detailed instructions for building the Website can be found in README.md.
  
* Then git commit and push your changes, and make a pull request

  NOTE: Do *NOT* forget to add **both** the tweet and the respective image, before you commit.
  
  Always start new work by merging upstream.

  An explanation of the GitHub Standard Fork & Pull Request Workflow: https://gist.github.com/Chaser324/ce0505fbed06b947d962
