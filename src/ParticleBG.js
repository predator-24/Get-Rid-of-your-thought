import React from 'react';
import Particles from 'react-particles-js'
import ParticleConfig from './config/ParticleConfig';

export default function ParticleBG(){
    return (
        <Particles height="2000px" params={ParticleConfig}></Particles>
    )
}