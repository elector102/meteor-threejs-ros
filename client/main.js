
import '../imports/api/three.js';

var cuadradoPosicionX = 1.5;
var cuadradoPosicionY =0;
Template.three.rendered = function(){

function webGLStart() {
    iniciarEscena();
    animarEscena();
}


var escena;
var camara;
var render;
var cuadrado;
var triangulo;

webGLStart();
function iniciarEscena(){
    //Render
    render = new THREE.WebGLRenderer();

    render.setClearColor(0xF50000, 1);

    var canvasWidth = 500;
    var canvasHeight = 500;
    render.setSize(canvasWidth, canvasHeight);

    document.getElementById("canvas").appendChild(render.domElement);

    //Escena
    escena = new THREE.Scene();

    //Camara
    camara = new THREE.PerspectiveCamera(45, canvasWidth / canvasHeight, 0.1, 100);
    camara.position.set(0, 0, 0);
    camara.lookAt(escena.position);
    escena.add(camara);

    //Material
    var material = new THREE.MeshBasicMaterial({
        color:0xFFFFFF,
        side:THREE.DoubleSide
    });

    //Triángulo
    var trianguloGeometria = new THREE.Geometry();
    trianguloGeometria.vertices.push(new THREE.Vector3( 0.0,  0.5, 0.0));
    trianguloGeometria.vertices.push(new THREE.Vector3(-0.5, -0.5, 0.0));
    trianguloGeometria.vertices.push(new THREE.Vector3( 0.5, -0.5, 0.0));
    trianguloGeometria.faces.push(new THREE.Face3(0, 1, 2));

    triangulo = new THREE.Mesh(trianguloGeometria, material);
    triangulo.position.set(0, 0.0, -7.0);
    escena.add(triangulo);

    //Cuadrado
    var cuadradoGeometria = new THREE.Geometry();
    cuadradoGeometria.vertices.push(new THREE.Vector3(-1.0,  1.0, 0.0));
    cuadradoGeometria.vertices.push(new THREE.Vector3( 1.0,  1.0, 0.0));
    cuadradoGeometria.vertices.push(new THREE.Vector3( 1.0, -1.0, 0.0));
    cuadradoGeometria.vertices.push(new THREE.Vector3(-1.0, -1.0, 0.0));
    cuadradoGeometria.faces.push(new THREE.Face4(0, 1, 2, 3));

    cuadrado = new THREE.Mesh(cuadradoGeometria, material);
    cuadrado.position.set(cuadradoPosicionX, cuadradoPosicionY, -7.0);
    escena.add(cuadrado);
}
function renderEscena(){
    render.render(escena, camara);

}

function animarEscena(){
   requestAnimationFrame(animarEscena);
   cuadradoPosicionX +=0.1;
   cuadrado.position.set(cuadradoPosicionX, cuadradoPosicionY, -7.0);

   renderEscena();

}

  
}


/*
Template.three.rendered = function() {

	/// ******mrdoob*************
	var camera, scene, renderer, geometry, material, mesh;

	init();
	animate();

	function init() {
	    scene = new THREE.Scene();
	    
	    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
	    camera.position.z = 900;

	    scene.add(camera);

	    geometry = new THREE.CubeGeometry(200, 200, 200);
	    material = new THREE.MeshNormalMaterial();

	    mesh = new THREE.Mesh(geometry, material);
	    scene.add(mesh);

	    renderer = new THREE.CanvasRenderer();
	    renderer.setSize(window.innerWidth/2, window.innerHeight/2);

	    document.body.appendChild(renderer.domElement);
	}

	function animate() {
	    requestAnimationFrame(animate);
	    render();
	}

	function render() {
	    mesh.rotation.x += 0.01;
	    mesh.rotation.y += 0.02;

	    renderer.render(scene, camera);
	}

      //**end mrdoob***************
}

*/

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
//import '../imports/ui/body.js';
/*

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

*/
