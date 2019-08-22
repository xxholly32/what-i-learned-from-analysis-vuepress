<template>
  <mark-display
    :src="welcome"
    @title="setTitle"
    keyboard-ctrl
    url-hash-ctrl
    auto-font-size
    auto-blank-target
  ></mark-display>
</template>

<script>
import MarkDisplay from "vue-mark-display";
import welcome from "./welcome.md";

export default {
  components: { MarkDisplay },
  data() {
    return { welcome };
  },
  methods: {
    setTitle({ title }) {
      document.title = title;
    }
  }
};
</script>


<style>
body {
  margin: 0;
  overflow: hidden;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f5f5f5;
  text-shadow: 0 0 0.25em #ccc;
  line-height: 1.25;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0.25em 0;
}

p {
  margin: 0.25em 0;
  font-weight: 500;
}
li {
  text-align: initial;
  font-weight: 300;
}
blockquote {
  font-size: 0.6em;
  text-align: initial;
  background-color: rgba(127, 127, 127, 0.2);
  padding: 0.25em 1em;
  border-radius: 0.25em;
}
pre {
  text-align: initial;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 0.5vw;
  padding: 0 0.125em;
}
img {
  max-width: 100%;
  max-height: 80vh;
}
a {
  font-size: 0.75em;
  padding: 0.125em 0.25em;
  background-color: #2b303b;
  color: white;
  border-radius: 0.25em;
  transition: all 0.3s;
  text-decoration: none;
}
a:hover {
  background-color: #00af83;
  color: white;
}
small {
  font-size: 0.6em;
}
strong {
  color: red;
}
em {
  color: blue;
}
s,
strike {
  color: gray;
}
code {
  font-size: 0.75em;
}
mark {
  border-radius: 0.5vw;
  padding: 0 0.125em;
}
table {
  border-collapse: collapse;
  margin: 0.25em 0;
  background-color: white;
  font-size: inherit;
}
th,
td {
  border: 1px solid gray;
  padding: 0.25em;
}
thead {
  background-color: #f0f0f0;
}
tbody > tr:nth-child(2n) {
  background-color: #f0f0f0;
}
hr {
  width: 90%;
  border-width: 2px;
  border-style: dashed;
}

top {
  display: block;
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000;
  font-weight: bold;
  font-size: 6vh;
}
comment {
  display: block;
  position: absolute;
  bottom: 5%;
  right: 5%;
  color: grey;
  font-size: 3.5vh;
}
</style>