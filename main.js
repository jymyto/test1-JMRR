import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera ( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );  

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild (renderer.domElement);

//cubo01
const geometry = new THREE.BoxGeometry (1,1,1);
const material = new THREE.MeshStandardMaterial ({color: 0X00ff00});
const cube = new THREE.Mesh ( geometry, material );

//cubo02
const geometry2 = new THREE.BoxGeometry (5,0.5,0.5);
const material2 = new THREE.MeshStandardMaterial ({color: 0X0000ff});
const cube2= new THREE.Mesh ( geometry2, material2 );
//plano 03
const geometry3 = new THREE.PlaneGeometry( 7, 7, );
const material3 = new THREE.MeshBasicMaterial( {color: 0xff00ff, side: THREE.DoubleSide} );
const cubo3 = new THREE.Mesh( geometry3, material3 );


const light = new THREE.AmbientLight( 0x404040 );
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5);

scene.add(cube);
scene.add(cube2);
scene.add(cubo3);
scene.add(light);
scene.add(directionalLight);

camera.position.set(1,1,1);
directionalLight.position.set(10,1,5);
camera.lookAt (cube.position);

cubo3.rotation.x = Math.PI / 2;
cubo3.position.y = -1;



function animate(){
  //cube.rotation.x += 0.01;
 //cube.rotation.y += 0.01;
  renderer.render( scene, camera );
}



