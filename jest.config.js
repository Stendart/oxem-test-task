module.exports = {
  "moduleFileExtensions": [
    "js",
    "json",
    // сообщаем Jest что необходимо обрабатывать `*.vue` файлы
    "vue"
  ],
  "transform": {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "vue-jest"
  },
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1"
  }
}
