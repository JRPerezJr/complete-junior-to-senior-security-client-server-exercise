<h1 align="center">Security Server and Client Exercise 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-14.17.0-blue.svg" />
  <img src="https://img.shields.io/badge/npm-6.14.13-blue.svg" />
  <a href="https://github.com/JRPerezJr/complete-junior-to-senior-ssr-react#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/JRPerezJr/complete-junior-to-senior-ssr-react/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/JRPerezJr/complete-junior-to-senior-ssr-react/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> A learning exercise in client and server side security.

## 📐 Prerequisites

- node 14.17.0
- npm 6.14.13

## 🖥 📱 💽 Tech Stack

**Client:** HTML, CSS

**Server:** Node, Express

## 🛠 Install and Run Locally

Clone the project

```bash
  git clone https://github.com/JRPerezJr/complete-junior-to-senior-security-client-server-exercise.git
```

Go to the project directory

```bash
  cd complete-junior-to-senior-security-client-server-exercise
```

Install dependencies with yarn or npm

```sh
yarn
npm install
```

## 👩‍💻 👨‍💻 Usage

```sh
yarn start
npm run start
```

## ⚙️ Dev mode

```sh
yarn dev
npm run dev
```

## 🖊 Usage/Examples

To simulate an error, change the name of the returned object from `{userInput: input}` to `{userInput1: input}`

```javascript
const sendToServer = async () => {
  const input = document.querySelector('#userinput').value;
  userInputInHTML(input);

  try {
    return await fetch(`${API_URL}/secret`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // Change below
      body: JSON.stringify({ userInput: input }),
    });
  } catch (error) {
    return { ok: false };
  }
};
```

# 📺 Screenshots

Client

![Client](https://user-images.githubusercontent.com/19915910/121006786-4502cf80-c7cc-11eb-88fe-3b9cc1262845.png)

Backend

![Backend](https://user-images.githubusercontent.com/19915910/121008291-ce66d180-c7cd-11eb-8a28-78dd9d81b951.png)

## 📓 Author

![Logo](https://user-images.githubusercontent.com/19915910/120965966-81203b00-c7a0-11eb-8ef4-a42c0642db4c.png)

- Github: [@JRPerezJr](https://github.com/JRPerezJr)
- LinkedIn: [@devjperez](https://linkedin.com/in/devjperez)

## 📝 License

Copyright © 2021 [Juan Perez Jr.](https://github.com/JRPerezJr).<br />
This project is [MIT](https://github.com/JRPerezJr/complete-junior-to-senior-security-client-server-exercise/blob/main/LICENSE) licensed.

## 👏 Acknowledgements

This README was generated with ❤️ at [readme.so](https://readme.so) by [@katherinepeterson](https://www.github.com/octokatherine)

- [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [Awesome README](https://github.com/matiassingers/awesome-readme)
- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
