


function consoleHook_initialize() {
  let output = [];
  let _cl_ = console.log;

  console.log = function(value) {
    output.push(value);
    _cl_(value);
  };

  return {
    read: function() {
      return output.shift();
    },

    bufferLength: function() {
      return output.length;
    },

    flush: function() {
      output = [];
    },

    terminate: function() {
      console.log = _cl_;
    }
  }
}