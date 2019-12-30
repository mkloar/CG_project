function initBuffersWalls() {

  // z and l are always 1 so we can simplify input
  let wallCoordinates = [
    { x: -13, y: -13, n: 26, d: 'x' }, // north wall
    { x: -13, y:  13, n: 26, d: 'x' }, // south wall
    { x:  13, y: -13, n: 26, d: 'y' }, // east wall
    { x: -13, y: -13, n: 26, d: 'y' }, // west wall
    { x:   3, y: -13, n:  2, d: 'y' }, 
    { x:   5, y: -13, n:  2, d: 'y' }, 
    { x: -11, y: -11, n:  8, d: 'x' },
    { x:  -1, y: -11, n:  4, d: 'x' },
    { x:   7, y: -11, n:  4, d: 'x' }, 
    { x:  -3, y: -11, n:  6, d: 'y' },
    { x:  -1, y: -11, n:  2, d: 'y' },
    { x:   7, y: -11, n:  2, d: 'y' }, 
    { x:  11, y: -11, n: 10, d: 'y' },
    { x: -11, y:  -9, n:  6, d: 'x' }, 
    { x:  -1, y:  -9, n:  2, d: 'x' },
    { x:   3, y:  -9, n:  6, d: 'x' }, 
    { x:  -9, y:  -9, n:  2, d: 'y' },
    { x:   5, y:  -9, n:  4, d: 'y' }, 
    { x:   9, y:  -9, n:  2, d: 'y' }, 
    { x: -13, y:  -7, n:  2, d: 'x' }, 
    { x:  -9, y:  -7, n:  8, d: 'x' }, 
    { x:   1, y:  -7, n:  4, d: 'x' }, 
    { x: -11, y:  -7, n:  8, d: 'y' }, 
    { x:  -1, y:  -7, n:  2, d: 'y' }, 
    { x:   7, y:  -7, n:  2, d: 'y' }, 
    { x: -11, y:  -5, n:  8, d: 'x' }, 
    { x:   1, y:  -5, n:  2, d: 'x' }, 
    { x:   5, y:  -5, n:  4, d: 'x' }, 
    { x:  -5, y:  -5, n:  2, d: 'y' }, 
    { x:   3, y:  -5, n:  2, d: 'y' },
    { x:   9, y:  -5, n:  2, d: 'y' },
    { x:  -9, y:  -3, n:  4, d: 'x' },
    { x:  -3, y:  -3, n:  2, d: 'x' },
    { x:   1, y:  -3, n:  6, d: 'x' },
    { x:  -7, y:  -3, n:  2, d: 'y' },
    { x:  -3, y:  -3, n:  2, d: 'y' },
    { x:  -1, y:  -3, n:  2, d: 'y' },
    { x:   1, y:  -3, n:  8, d: 'y' },
    { x:   7, y:  -3, n:  2, d: 'y' },
    { x:  -9, y:  -1, n:  2, d: 'x' },
    { x:  -3, y:  -1, n:  2, d: 'x' },
    { x:   5, y:  -1, n:  2, d: 'x' },
    { x:   9, y:  -1, n:  2, d: 'x' },
    { x:   3, y:  -1, n:  8, d: 'y' },
    { x:   5, y:  -1, n:  8, d: 'y' },
    { x:   9, y:  -1, n:  2, d: 'y' },
    { x: -11, y:   1, n:  2, d: 'x' },
    { x:  -7, y:   1, n:  4, d: 'x' },
    { x:  -1, y:   1, n:  2, d: 'x' },
    { x:   7, y:   1, n:  2, d: 'x' },
    { x:  11, y:   1, n:  2, d: 'x' },
    { x:  -9, y:   1, n:  2, d: 'y' },
    { x:  -7, y:   1, n:  2, d: 'y' },
    { x:  -3, y:   1, n: 10, d: 'y' },
    { x:   7, y:   1, n:  2, d: 'y' },
    { x:  11, y:   1, n:  2, d: 'y' },
    { x: -13, y:   3, n:  2, d: 'x' },
    { x: -13, y:   3, n:  2, d: 'x' },
    { x:  -7, y:   3, n:  2, d: 'x' },
    { x:  -1, y:   3, n:  2, d: 'x' },
    { x:   9, y:   3, n:  2, d: 'x' },
    { x: -11, y:   3, n:  4, d: 'y' },
    { x:  -5, y:   3, n:  4, d: 'y' },
    { x:   9, y:   3, n:  2, d: 'y' },
    { x: -11, y:   5, n:  4, d: 'x' },
    { x:   5, y:   5, n:  4, d: 'x' },
    { x:  11, y:   5, n:  2, d: 'x' },
    { x:  -1, y:   5, n:  4, d: 'y' },
    { x:  11, y:   5, n:  6, d: 'y' },
    { x:  -9, y:   7, n:  4, d: 'x' },
    { x:   1, y:   7, n:  4, d: 'x' },
    { x:   9, y:   7, n:  2, d: 'x' },
    { x:  -9, y:   7, n:  4, d: 'y' },
    { x:  -7, y:   7, n:  2, d: 'y' },
    { x:   7, y:   7, n:  6, d: 'y' },
    { x: -13, y:   9, n:  2, d: 'x' },
    { x:  -1, y:   9, n: 10, d: 'x' },
    { x:  -5, y:   9, n:  2, d: 'y' },
    { x:   3, y:   9, n:  2, d: 'y' },
    { x: -11, y:  11, n:  2, d: 'x' },
    { x:  -7, y:  11, n:  4, d: 'x' },
    { x:  -1, y:  11, n:  2, d: 'x' },
    { x:   3, y:  11, n:  2, d: 'x' },
    { x:   9, y:  11, n:  2, d: 'x' },
    { x:  -1, y:  11, n:  2, d: 'y' }
  ]

  let walls = [];

  // map all wall coordinates to proper structure so squares can be generated from them
  wallCoordinates.map(wall => walls.push(...generateSquares({ x: wall.x, y: wall.y, z: 1, l: 1, n: wall.n, m: 'w', d: wall.d })));

  var { vertexCoordinates, textureCoordinates, vertexCount } = filterCoordinates(walls);

  worldVertexPositionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, worldVertexPositionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexCoordinates), gl.STATIC_DRAW);
  worldVertexPositionBuffer.itemSize = 3;
  worldVertexPositionBuffer.numItems = vertexCount;

  worldVertexTextureCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, worldVertexTextureCoordBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates), gl.STATIC_DRAW);
  worldVertexTextureCoordBuffer.itemSize = 2;
  worldVertexTextureCoordBuffer.numItems = vertexCount;
}

function drawScene() {

  // set the rendering environment to full canvas size
  gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
  // Clear the canvas before we start drawing on it.
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // If buffers are empty we stop loading the application.
  if (worldVertexTextureCoordBuffer == null || worldVertexPositionBuffer == null) {
    return;
  }

  // Establish the perspective with which we want to view the
  // scene. Our field of view is 45 degrees, with a width/height
  // ratio of 640:480, and we only want to see objects between 0.1 units
  // and 100 units away from the camera.
  mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.5, 100.0, pMatrix);

  // Set the drawing position to the "identity" point, which is
  // the center of the scene.
  mat4.identity(mvMatrix);

  // Now move the drawing position a bit to where we want to start
  // drawing the world.
  mat4.rotate(mvMatrix, degToRad(-pitch), [1, 0, 0]);
  mat4.rotate(mvMatrix, degToRad(-yaw), [0, 1, 0]);
  mat4.translate(mvMatrix, [-xPosition, -zPosition, -yPosition]);

  // Activate textures
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, wallTexture);
  gl.uniform1i(shaderProgram.samplerUniform, 0);

  // Set the texture coordinates attribute for the vertices.
  gl.bindBuffer(gl.ARRAY_BUFFER, worldVertexTextureCoordBuffer);
  gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, worldVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

  // Draw the world by binding the array buffer to the world's vertices
  // array, setting attributes, and pushing it to GL.
  gl.bindBuffer(gl.ARRAY_BUFFER, worldVertexPositionBuffer);
  gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, worldVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

  // Draw the cube.
  setMatrixUniforms();
  gl.drawArrays(gl.TRIANGLES, 0, worldVertexPositionBuffer.numItems);

}