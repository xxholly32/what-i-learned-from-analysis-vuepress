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
import MarkDisplay from 'vue-mark-display';
import welcome from './welcome.md';

export default {
  components: { MarkDisplay },
  data() {
    return { welcome };
  },
  methods: {
    setTitle({ title }) {
      document.title = title;
    },
  },
};
</script>


<style>
.slide {
  background-color: #4d4a4a; /* 浏览器不支持时显示 */
  background-image: linear-gradient(#000000, #4d4a4a);
  margin: 0;
  overflow: hidden;
  font-family: PingFang SC, STHeiti, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  line-height: 1.25;
}
body {
  margin: 0;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
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
  font-weight: 500;
}
p {
  margin: 0.25em 0;
}
li {
  text-align: initial;
}
blockquote {
  font-size: 0.6em;
  text-align: initial;
  background-color: rgba(127, 127, 127, 0.2);
  padding: 0.25em 1em;
  border-radius: 0.25em;
}
pre {
  font-size: 50px;
  text-align: initial;
  background-color: #232323;
  border-radius: 0.5vw;
  padding: 0 0.125em;
}
img {
  max-width: 100%;
  max-height: 80vh;
}
a {
  font-size: 0.75em;
  font-weight: bold;
  padding: 0.125em 0.25em;
  color: white;
  border-radius: 0.25em;
  transition: all 0.3s;
}
a:hover {
  background-color: blue;
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
  transform: translate(-50%, 0);
  color: #fff;
  font-weight: bold;
  font-size: 8vh;
}
comment {
  display: block;
  position: absolute;
  bottom: 5%;
  right: 5%;
  font-size: 3.5vh;
}

.title-img {
  height: 10rem;
}

.slide-content {
  text-align: center;
}

.flex-row-box {
  display: flex;
  flex-direction: row;
}
.left,
.right {
  width: 50%;
  margin: 20px;
  display: flex;
}
</style>