class Light {
    constructor() {
        this.instances = {}
    }

    init() {
        //环境光
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
        //平行光
        const shadowLight = new THREE.DirectionalLight(0xffffff, 0.3)
        this.shadowLight = shadowLight
        this.shadowLight.position.set(10, 30, 10)
        this.shadowLight.lookAt(new THREE.Vector3(0.1, 0.1, 0.1))
        this.instances.ambientLight = ambientLight
        this.instances.shadowLight = shadowLight

    }

}

export default new Light()