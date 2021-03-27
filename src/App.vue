<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background: #b3e8cc;
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

  .card {
      width: 90%;
      padding: 1rem;
      margin-bottom: 1rem;
      border-radius: 10px;
      box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
      background: #fff;
  }

  .card.center {
      display: flex;
      flex-direction: column;
      align-items: center;
  }
</style>
