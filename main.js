let three;
let controls;

function setup() {
  noCanvas();
  three = new Three();
  three.skybox();
  controls = new THREE.OrbitControls(three.cam, three.renderer.domElement);
}

function draw() {
  var speed = Date.now() * 0.00025;
  three.renderer.render(three.scene, three.cam);
  // three.cam.position.x = Math.cos(speed) * 5;
  // three.cam.position.z = Math.sin(speed) * 5;
  // // three.cam.lookAt(0,0,0)
  // three.cam.lookAt(three.scene.position)
}

class Three {
  constructor() {
    this.scene = new THREE.Scene();
    this.cam = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      45,
      30000
    );
    this.cam.position.set(1200, -250, 20000);
    this.renderer = new THREE.WebGLRenderer({
      antialias: true
    });
    this.renderer.setClearColor("#e5e5e5");
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    window.addEventListener("resize", () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.cam.aspect = window.innerWidth / window.innerHeight;
      this.cam.updateProjectionMatrix();
    });
    var sun = new THREE.DirectionalLight(0xffffff, 1);
    sun.position.set(-0.5, 0.5, 1);
    this.scene.add(sun);
  }

  skybox() {
    // let loader = new THREE.TextureLoader(THREE.DefaultLoadingManager)
    // loader.crossOrigin = "anonymous"
    // loader.withCredentials = true

    //     let materialArray = []
    //     let left = loader.load('https://i.imgur.com/zmb9uS7.jpg')
    //     let right = loader.load('https://i.imgur.com/eAtRu4C.jpg')
    //     let up = loader.load('https://i.imgur.com/CDOy9JA.jpg')
    //     let down = loader.load('https://i.imgur.com/Nol1uUe.jpg')
    //     let back = loader.load('https://i.imgur.com/sD7wmTx.jpg')
    //     let front = loader.load('https://i.imgur.com/27mvm3G.jpg')

    //     let left_tx = new THREE.MeshBasicMaterial({map:left})
    //     let right_tx = new THREE.MeshBasicMaterial({map:right})
    //     let up_tx = new THREE.MeshBasicMaterial({map:up})
    //     let down_tx = new THREE.MeshBasicMaterial({map:down})
    //     let back_tx = new THREE.MeshBasicMaterial({map:back})
    //     let front_tx = new THREE.MeshBasicMaterial({map:front})

    //     materialArray.push(new THREE.MeshBasicMaterial({
    //       map: left
    //     }))
    //     materialArray.push(new THREE.MeshBasicMaterial({
    //       map: right
    //     }))
    //     materialArray.push(new THREE.MeshBasicMaterial({
    //       map: up
    //     }))
    //     materialArray.push(new THREE.MeshBasicMaterial({
    //       map: down
    //     }))
    //     materialArray.push(new THREE.MeshBasicMaterial({
    //       map: back
    //     }))
    //     materialArray.push(new THREE.MeshBasicMaterial({
    //       map: front
    //     }))

    this.scene.background = new THREE.CubeTextureLoader().load(['https://raw.githubusercontent.com/Saathvik-s/three-game-testing/main/skybox_lf.png','https://raw.githubusercontent.com/Saathvik-s/three-game-testing/main/skybox_lf.png','https://raw.githubusercontent.com/Saathvik-s/three-game-testing/main/skybox_lf.png','https://raw.githubusercontent.com/Saathvik-s/three-game-testing/main/skybox_lf.png','https://raw.githubusercontent.com/Saathvik-s/three-game-testing/main/skybox_lf.png','https://raw.githubusercontent.com/Saathvik-s/three-game-testing/main/skybox_lf.png'])
    //let skybox = new THREE.Mesh(skyboxGeo, eAtRu4C.jpg[left_tx,right_tx,up_tx,down_tx,back_tx,front_tx]);
    //skybox.material.needsUpdate = true
    //this.scene.add(skybox);
  }
}
