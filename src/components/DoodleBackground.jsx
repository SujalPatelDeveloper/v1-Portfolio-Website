import React from 'react';
import './DoodleBackground.css';

// Import a selection of SVGs
import arrow1 from '../assets/doodles/arrow, hand drawn, scribble, doodle, 10.svg';
import spark from '../assets/doodles/spark, sparkle, 26.svg';
import circle from '../assets/doodles/circle, round, mark, 30.svg';
import cloud from '../assets/doodles/cloud, fluff, clouds, 32.svg';
import swirl from '../assets/doodles/swirl, arrow, hand drawn, scribble, doodle, 6.svg';
import abstract from '../assets/doodles/shape, abstract, blob, stars, spark, sparks, sparkle, shine, night, pattern, magic, dust, fairy.svg';
import emoji from '../assets/doodles/emoji, emoticon, smiley, smile, grin, happy, face, emotion, 2.svg';
import plant from '../assets/doodles/plant, leaves, leaf, branch, plants, nature, green, 52.svg';
import brace from '../assets/doodles/braces, curly braces, symbol, open, character, line.svg';
import letterX from '../assets/doodles/letter, capital x, letter x, x.svg';
import wavy from '../assets/doodles/arrow, hand drawn, scribble, doodle, curve, wavy, curvy, direction, up, ahead, 112.svg';
import heart from '../assets/doodles/arrow, hand drawn, scribble, doodle, heart, reload, refresh, loop, 65.svg';
import lightning from '../assets/doodles/arrow, hand drawn, scribble, doodle, thick, down, lightning, cautions, stress, 55.svg';
import wave from '../assets/doodles/beach, wave, doodle, water, sea, ocean, 2.svg';
import speech from '../assets/doodles/speech bubble, chat, chat bubble, talk, speak, message,  2.svg';

const doodles = [
  { src: arrow1, top: '5%', left: '5%', size: '80px', rotate: '15deg' },
  { src: spark, top: '15%', left: '85%', size: '60px', rotate: '-10deg' },
  { src: circle, top: '25%', left: '10%', size: '100px', rotate: '5deg' },
  { src: cloud, top: '35%', left: '75%', size: '120px', rotate: '0deg' },
  { src: swirl, top: '45%', left: '90%', size: '90px', rotate: '45deg' },
  { src: abstract, top: '55%', left: '40%', size: '150px', rotate: '-20deg' },
  { src: emoji, top: '65%', left: '60%', size: '70px', rotate: '10deg' },
  { src: plant, top: '75%', left: '2%', size: '110px', rotate: '-30deg' },
  { src: brace, top: '85%', left: '15%', size: '50px', rotate: '20deg' },
  { src: letterX, top: '95%', left: '80%', size: '60px', rotate: '-15deg' },
  { src: wavy, top: '8%', left: '50%', size: '100px', rotate: '-5deg' },
  { src: heart, top: '12%', left: '20%', size: '60px', rotate: '10deg' },
  { src: lightning, top: '28%', left: '40%', size: '50px', rotate: '0deg' },
  { src: wave, top: '42%', left: '15%', size: '130px', rotate: '5deg' },
  { src: speech, top: '58%', left: '80%', size: '70px', rotate: '-10deg' },
  { src: arrow1, top: '30%', left: '20%', size: '70px', rotate: '120deg' },
  { src: spark, top: '50%', left: '10%', size: '50px', rotate: '45deg' },
  { src: circle, top: '70%', left: '80%', size: '90px', rotate: '-45deg' },
  { src: plant, top: '20%', left: '40%', size: '100px', rotate: '180deg' },
  { src: abstract, top: '10%', left: '90%', size: '60px', rotate: '30deg' },
  { src: emoji, top: '90%', left: '50%', size: '80px', rotate: '-5deg' },
  { src: swirl, top: '38%', left: '5%', size: '70px', rotate: '15deg' },
  { src: cloud, top: '62%', left: '5%', size: '100px', rotate: '-10deg' },
  { src: brace, top: '48%', left: '85%', size: '40px', rotate: '90deg' },
  { src: letterX, top: '22%', left: '65%', size: '50px', rotate: '45deg' },
  { src: heart, top: '72%', left: '35%', size: '70px', rotate: '0deg' },
  { src: lightning, top: '82%', left: '65%', size: '60px', rotate: '20deg' },
  { src: wave, top: '18%', left: '30%', size: '90px', rotate: '-15deg' },
  { src: speech, top: '92%', left: '10%', size: '60px', rotate: '15deg' },
];

const DoodleBackground = () => {
  return (
    <div className="doodle-background">
      {doodles.map((doodle, index) => (
        <img
          key={index}
          src={doodle.src}
          alt="Doodle"
          className="doodle-item floating"
          style={{
            top: doodle.top,
            left: doodle.left,
            width: doodle.size,
            transform: `rotate(${doodle.rotate})`,
          }}
        />
      ))}
    </div>
  );
};

export default DoodleBackground;
