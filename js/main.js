

var Main = {
    preload() {
        this.load.image('box', 'assets/box.png')
    },
    create() {
        this.matter.world.setBounds() // 월드 끝 충돌시 튕김
        var ring = this.add.group()
        for(var i = 0 ; i < 20;i++){
            ring.add(this.matter.add.image(10*i,100,'box').setScale(0.1))

            // ring = this.matter.add.stack(10, 200, 50, 1, 0, 0, function (x, y) { // 시작지점좌표xy,개수,몰라,마진xy
            //     return Phaser.Physics.Matter.Matter.Bodies.rectangle(x, y, 15, 15, { // 좌표xy,크기
            //         //collisionFilter: { group: group }, // 충돌 무시 여부
            //         chamfer: 5, // border radius
            //         density: 0.5, // 밀도
            //         frictionAir: 0.005, // 공기저항
            //     });
            // });
            // this.matter.add.chain(ring, 0.5, 0, -0.5, 0, { //체인생성 xy xy
            //     stiffness: 1, // 날카로움?
            //     length: 5, // 길이?
            //     render: { // 나도몰라
            //         visible: false
            //     }
            // });
        }
        this.matter.add.mouseSpring(); // 마우스로 당기면 움직임
        this.input.on('pointerdown', function (pointer) {
            //ring.body.setVelocity(0,10)
        });
    },
    update() {
    }
}

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'matter',
        matter: {
            debug: true,
            gravity: {
                y: 0.5
            },
            debugBodyColor: 0xffffff
        }
    },
    scene: [Main],
};
let game = new Phaser.Game(config);
