import React from 'react';
import _ from 'lodash';

import * as ParticleLines from '@rodikh/particle-lines';
import { ParticleEngine, ParticleExploder, ParticleEmitter, Field, MouseField } from '@rodikh/particles';

export default class CanvasSection extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.drawQueue = [];
        this.interval = null;
        this.ctx = null;
    }

    componentDidMount() {
        const section = _.get(this.props, 'section');
        const demoType = section.demo_type;

        this.canvasRef.current.width = this.canvasRef.current.parentNode.clientWidth;
        this.canvasRef.current.height = 600;
        this.ctx = this.canvasRef.current.getContext('2d');

        console.log('section', section);
        let options = {};
        try {
            options = JSON.parse(_.get(section, 'options.demo_configuration', '{}'));
        } catch (e) {
            console.log('error parsing json options', section.options)
        }

        if (this.demoTypes[demoType]) {
            this.demoTypes[demoType].up(this.canvasRef.current, options);
        }

        this.interval = setInterval(this.tick.bind(this), 1000 / 60);
    }

    demoTypes = {
        'particle-lines': {
            up: (canvas, options) => {
                const engine = new ParticleEngine(canvas, { color: '0,0,0', particleLines: true, particlesAmount: options.particle_count, maxLineDistance: 150, fps: 30 });
                this.drawQueue.push(engine);
            },
            down: () => { }
        },
        'particles': {
            up: (canvas, options) => {
                const exploder = new ParticleExploder(canvas, canvas, { gravity: 0.02, color: '255,0,0', fps: 30 });
                const emitter1 = new ParticleEmitter({ x: 50, y: 50 }, { x: 3, y: 0 }, canvas, { color: '255,255,255', isDecaying: true, fps: 30 });
                const emitter2 = new ParticleEmitter({ x: 50, y: 100 }, { x: 3, y: 0 }, canvas, { color: '0,255,0', isDecaying: true, fps: 30 });
                const emitter3 = new ParticleEmitter({ x: 50, y: 150 }, { x: 3, y: 0 }, canvas, { color: '0,0,255', isDecaying: true, fps: 30 });
                this.drawQueue.push(exploder, emitter1, emitter2, emitter3);
            },
            down: () => { }
        },
        'forces': {
            up: (canvas, options) => {
                const emitter1 = new ParticleEmitter({ x: 150, y: 150 }, { x: 3, y: 0 }, canvas, { color: '255,255,255', isDecaying: false, fps: 30 });
                const field = new Field({ x: 600, y: 150 }, { mass: -400 });
                const mouseField = new MouseField(canvas, {});
                this.drawQueue.push(emitter1, field, mouseField.field);
            },
            down: () => { }
        },
        'quadtree': {
            up: (canvas, options) => {
                const engine = new ParticleEngine(canvas, { color: '255,255,255', particlesAmount: 50, maxLineDistance: 50, useTree: true, gridLines: true, nodeConnections: true, fps: 30 });
                this.drawQueue.push(engine);
            },
            down: () => { }
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval)
        this.ctx = null;
        this.drawQueue = [];
    }

    tick() {
        this.ctx.clearRect(0, 0, this.canvasRef.current.width, this.canvasRef.current.height);
        this.drawQueue.forEach(item => item.draw(this.ctx))
    }

    render() {
        console.log("render canvas", section)
        const section = _.get(this.props, 'section');

        return (
            <div className="embed-block container container--md">
                <div className="canvas-wrapper">
                    <canvas id={section.canvas_id} ref={this.canvasRef} />
                </div>
            </div>

        );
    }
}
