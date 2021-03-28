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

  .btn {
    /*width: 100px;*/
    color: #42b983;
    position: relative;
    place-content: center;
    place-items: center;
    width: fit-content;
    border-radius: 99px;
    letter-spacing: 0.05em;
    border: 1px solid #42b983;
    text-decoration: none;
    text-transform: uppercase;
    /*margin-right: 10px;*/
    padding: 0.5rem 1.5rem;
    white-space: nowrap;
    font-weight: 700;
    outline: none;
    background: #fff;
    transition: all 0.22s;
  }

  .btn:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  .btn:disabled {
    cursor: not-allowed;
    opacity: 1;
    background: #eee;
    border-color: #ddd;
    color: #999;
  }

  .btn:active {
    box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
  }

  .form-control {
      position: relative;
      margin-bottom: 0.5rem;
  }

  .form-control input {
      margin: 0;
      outline: none;
      border: 2px solid #ccc;
      display: block;
      width: 70%;
      color: #2c3e50;
      padding: 0.5rem 1.5rem;
      border-radius: 3px;
      font-size: 1rem;
      resize: none;
  }

  .form-control label {
      display: block;
      margin: 0 0 0.3rem 0.3rem;
      font-weight: 500;
  }



  .form-control small {
    color: #e53935;
  }

  .form-control input:active,
  .form-control input:focus {
      transition: border 0.22s;
      border: 2px solid #42b983;
  }
</style>
