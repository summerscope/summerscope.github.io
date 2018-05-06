function draw(params) {
  var canvas = document.getElementById("weights-canvas")
  var context = canvas.getContext("2d")

  context.clearRect(0, 0, canvas.width, canvas.height)

  var grid_width = 20
  var grid_height = 25

  var width = 28
  var height = 28
  var depth = 4

  var rng = new Random(1234)

  canvas.width = grid_width*width
  canvas.height = grid_height*height

  var W = params.W
  var Wt = numeric.transpose(W)
  var hbias = params.h
  var vbias = params.v

  var hidden = new Array(hbias.length)
  var visible = new Array(vbias.length)

  var locked_value = new Array(visible.length)
  var locked_mask = new Array(visible.length)

  function initialize_units() {
    for(var i = 0; i < hidden.length; i++) {
      hidden[i] = 1
    }

    for(var i = 0; i < visible.length; i++) {
      visible[i] = 0
      locked_value[i] = 0
      locked_mask[i] = 0
    }
  }
  initialize_units()

  $(".run-button").click(function(event) {
    var n = $(this).data("iterations")
    for(var i = 0; i < n; i++) {
      sample_h_given_v()      
      sample_v_given_h()
    }
    draw_weight_grid()
    draw_output()
  })

  function sample_v_given_h() {
    visible = numeric.add(numeric.dot(W, hidden), vbias)
    sigmoid(visible)
    //binomial(visible)

    for(var i = 0; i < visible.length; i++) {
      if(locked_mask[i] > 0) {
        visible[i] = locked_value[i]
      }
    }
  }
  sample_v_given_h()

  function sample_h_given_v() {
    hidden = numeric.add(numeric.dot(Wt, visible), hbias)
    sigmoid(hidden)
    binomial(hidden)
  }

  function jiggle_noise(input) {
    for(var i = 0; i < input.length; i++) {
      input[i] += rng.normal(0, 0.01)
    }
  }

  function jiggle_flip(input) {
    for(var i = 0; i < input.length; i++) {
      input[i] = rng.random() < 0.01 ? (1 - input[i]) : input[i]
    }
  }

  function binomial(input) {
    for(var i = 0; i < input.length; i++) {
      input[i] = rng.random() < input[i] ? 1 : 0
    }
  }

  function sigmoid(input) {
    for(var i = 0; i < input.length; i++) {
      input[i] = 1 / (1 + Math.exp(-input[i]))
    }
  }

  function mouse_pos(canvas, event) {
    var rect = canvas.getBoundingClientRect()
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    }
  }

  var output = document.getElementById("output-canvas")
  output.width = 10*width
  output.height = 10*height
  var dragging = false

  function draw(event) {
    var scale = width / output.width
    var pos = mouse_pos(output, event)

    var i1 = Math.floor(scale * pos.x)
    var j1 = Math.floor(scale * pos.y)
    var i2 = Math.ceil(scale * pos.x)
    var j2 = Math.ceil(scale * pos.y)

    visible[j1 * height + i1] = 1
    visible[j1 * height + i2] = 1
    visible[j2 * height + i1] = 1
    visible[j2 * height + i2] = 1
    draw_output()
  }

  output.onmousedown = function(event) {
    output.onmousemove = draw
    draw(event)
  }
  output.onmouseup = function(event) {
    output.onmousemove = null
  }

  canvas.onclick = function(event) {
    var scalex = grid_width / canvas.width
    var scaley = grid_height / canvas.height
    var pos = mouse_pos(canvas, event)

    var i = Math.floor(scalex * pos.x)
    var j = Math.floor(scaley * pos.y)
    var k = i * grid_height + j
    hidden[k] = 1 - hidden[k]

    sample_v_given_h()
    draw_weight_grid()
    draw_output()
  }

  $(".lock-button").click(function(event) {
    for(var i = 0; i < visible.length; i++) {
      locked_mask[i]  = visible[i] > 0.01 ? 1 : 0
      locked_value[i] = visible[i]
    }

    draw_output()
  })

  $(".resample-button").click(function() {
    sample_v_given_h()
    draw_output()
  })

  $(".resample-hidden-button").click(function() {
    sample_h_given_v()
    draw_weight_grid()
  })

  $(".noise-button").click(function() {
    var sigma = +$(this).data("p") || 0.01

    for(var i = 0; i < visible.length; i++) {
      if(rng.random() < sigma) { visible[i] = rng.random() < 0.5 ? 0 : 1 }
    }

    draw_output()
  })


  function draw_output() {
    var canvas = output
    var context = canvas.getContext("2d")

    var backing = document.createElement("canvas")
    backing.width = width
    backing.height = height

    var backing_context = backing.getContext("2d")

    var img = numeric.mul(visible, 255)
    var locked_img = numeric.mul(locked_value, 255)

    var px = context.createImageData(width, height)
    draw_weights(backing_context, img, 0, 0, 1.0, 1.0, 1.0, px)
    draw_weights(backing_context, locked_img, 0, 0, 1.0, 0.0, 0.0, px, locked_mask)

    context.webkitImageSmoothingEnabled && (context.webkitImageSmoothingEnabled = false)
    context.drawImage(backing, 0, 0, canvas.width, canvas.height)
  }
  draw_output()

  function draw_weights(context, img, x, y, r, g, b, px, mask) {
    if(r === undefined) r = 1
    if(g === undefined) g = 1
    if(b === undefined) b = 1

    var px = px || context.createImageData(width, height)
    for(var i = 0; i < width; i++) {
      for(var j = 0; j < height; j++) {
        var idx = i*height + j
        var grey = img[idx]
        var chan_idx = idx*depth
        
        if(!mask || mask[idx] > 0.01) {
          px.data[chan_idx + 0] = grey * r
          px.data[chan_idx + 1] = grey * g
          px.data[chan_idx + 2] = grey * b
        }
        
        px.data[chan_idx + 3] = 255
      }
    }    

    context.putImageData(px, x, y)
  }

  function draw_weight_grid() {
    for(var i = 0; i < grid_width; i++) {
      for(var j = 0; j < grid_height; j++) {
        var k = i*grid_height + j
        draw_weights(context, numeric.dot(numeric.add(Wt[k], 1), hidden[k] * 100 + 100), i*width, j*height)
      }
    }
  }

  draw_weight_grid()

  $(".clear-button").click(function() {
    for(var i = 0; i < visible.length; i++) {
      visible[i] = 0.0
      locked_mask[i] = 0.0
    }
    draw_output()
  })
}

$.getJSON("data/rbm-params-500.json", function(params) {
  window.debug = {}
  window.debug.params = params
  draw(params)
})