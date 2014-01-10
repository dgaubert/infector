function Car(Engine) {

  function start () {
    console.log(Engine.start());
  }

  return {
    'start': start
  };
}

module.exports = Car;