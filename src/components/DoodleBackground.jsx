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

// New Doodles
import arrow9 from '../assets/doodles/arrow, hand drawn, scribble, doodle, 9.svg';
import arrow7 from '../assets/doodles/arrow, hand drawn, scribble, doodle, arrows, 7.svg';
import arrow33 from '../assets/doodles/arrow, hand drawn, scribble, doodle, down, 33.svg';
import spiral from '../assets/doodles/arrow, hand drawn, scribble, doodle, spiral, snail, roll, twist, whirl, 120.svg';
import cloud35 from '../assets/doodles/cloud, fluff, clouds, 35.svg';
import eggplant from '../assets/doodles/eggplant, cucumber, vegetable, plant, fruit, food, groceries, zucchini.svg';
import emojiConfused from '../assets/doodles/emoji, emoticon, smiley, confused, huh, grumpy, unhappy, mad, annoyed.svg';
import letterY from '../assets/doodles/letter, capital y, letter y, y.svg';
import letterZ from '../assets/doodles/letter, capital z, letter z, z.svg';
import pulse from '../assets/doodles/pulse, heart rate,.svg';
import semicolon from '../assets/doodles/semicolon, colon, symbol, filled.svg';
import spark30 from '../assets/doodles/spark, sparks, sparkle, stars, 30.svg';
import speech4 from '../assets/doodles/speech bubble, chat, chat bubble, talk, speak, message,  4.svg';
import thoughts from '../assets/doodles/thoughts, dreams, clouds, thought bubble, 11.svg';
import triangle from '../assets/doodles/triangle, outline, border, frame, 47.svg';
import undo from '../assets/doodles/arrow, hand drawn, scribble, doodle, undo, return, 15.svg';
import zoom from '../assets/doodles/arrow, hand drawn, scribble, doodle, zoom out, zoom in, expand, 115.svg';
import plant58 from '../assets/doodles/plant, leaves, leaf, plants, nature, green, 58.svg';
import swirl97 from '../assets/doodles/swirl, loops, doodle, scribble, 97.svg';

// More new doodles
import arrowFork from '../assets/doodles/arrow, hand drawn, scribble, doodle, arrows, up, right, direction, path, fork, 110.svg';
import arrowCurvyDown from '../assets/doodles/arrow, hand drawn, scribble, doodle, down, curvy, curly, down, right, 71.svg';
import arrowLoop from '../assets/doodles/arrow, hand drawn, scribble, doodle, down, curvy, curly, up, right, loop, swirl, 73.svg';
import arrowReload from '../assets/doodles/arrow, hand drawn, scribble, doodle, reload, replay, 3.svg';
import arrowShaded from '../assets/doodles/arrow, hand drawn, scribble, doodle, shaded, thick, arrows, reload, refresh, load, repeat, 89.svg';
import arrowSwirl from '../assets/doodles/arrow, hand drawn, scribble, doodle, swirl, curvy, wavy, 28.svg';
import arrowRedo from '../assets/doodles/arrow, hand drawn, scribble, doodle, swirl, reload, refresh, redo, 36.svg';
import arrowThickDown from '../assets/doodles/arrow, hand drawn, scribble, doodle, thick, arrows, down, 53.svg';
import arrowPinch from '../assets/doodles/arrow, hand drawn, scribble, doodle, thick, arrows, inward, pinch, narrow, 56.svg';
import arrowDownLeft from '../assets/doodles/arrow, hand drawn, scribble, doodle, thick, down, left, 48.svg';
import arrowReturn from '../assets/doodles/arrow, hand drawn, scribble, doodle, thick, lightning, reload, return, refresh, rounded, arrows, 63.svg';
import arrowUpRight from '../assets/doodles/arrow, hand drawn, scribble, doodle, thick, up, right, 47.svg';
import arrowUpRight52 from '../assets/doodles/arrow, hand drawn, scribble, doodle, thick, up, right, 52.svg';
import arrowUpRounded from '../assets/doodles/arrow, hand drawn, scribble, doodle, thick, up, rounded, 59.svg';
import arrowUp45 from '../assets/doodles/arrow, hand drawn, scribble, doodle, up, 45.svg';
import arrowTwoWays from '../assets/doodles/arrow, hand drawn, scribble, doodle, up, down, two ways, each way, 119.svg';
import arrowUpShaded from '../assets/doodles/arrow, hand drawn, scribble, doodle, up, shaded, thick, 81.svg';
import arrowsPointing from '../assets/doodles/arrows, down, thick, pointing, downward, here, emphazise, point, filled.svg';
import braceClose from '../assets/doodles/braces, curly braces, symbol, close, character, line.svg';
import braceClosedFilled from '../assets/doodles/braces, curly braces, symbol, closed, close, character, filled.svg';
import braceOpenFilled from '../assets/doodles/braces, curly braces, symbol, open, character, filled.svg';
import cloudAbstract from '../assets/doodles/cloud, shape, abstract, 36.svg';
import curveLoop from '../assets/doodles/curve, loop, curl, doodle, scribble, 110.svg';
import curveLoop114 from '../assets/doodles/curve, loop, curl, doodle, scribble, 114.svg';
import restaurant from '../assets/doodles/restaurant, food, cutlery, fork. spoon, eat, meal, cross_1.svg';
import scribbleLoop from '../assets/doodles/scribble, loop, outline, 90.svg';
import shapeLoops from '../assets/doodles/shape, doodle, swirl, scribble, loops, 4.svg';
import shapeMaze from '../assets/doodles/shape, doodle, swirl, spiral, snail, scribble, maze, lapyrinth.svg';
import snow from '../assets/doodles/snow, rain, drops, weather, sparkle, pattern.svg';
import swirl117 from '../assets/doodles/swirl, spiral, doodle, scribble, 117.svg';
import swirl23 from '../assets/doodles/swirl, spiral, twist, loops, doodles, doodle, 23.svg';

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
  
  // Newly added doodles
  { src: arrow9, top: '3%', left: '35%', size: '70px', rotate: '-20deg' },
  { src: arrow7, top: '18%', left: '70%', size: '90px', rotate: '10deg' },
  { src: arrow33, top: '32%', left: '55%', size: '60px', rotate: '180deg' },
  { src: spiral, top: '48%', left: '25%', size: '80px', rotate: '15deg' },
  { src: cloud35, top: '68%', left: '45%', size: '110px', rotate: '-5deg' },
  { src: eggplant, top: '85%', left: '92%', size: '70px', rotate: '45deg' },
  { src: emojiConfused, top: '78%', left: '20%', size: '80px', rotate: '-15deg' },
  { src: letterY, top: '52%', left: '68%', size: '50px', rotate: '30deg' },
  { src: letterZ, top: '7%', left: '78%', size: '50px', rotate: '-10deg' },
  { src: pulse, top: '41%', left: '45%', size: '120px', rotate: '0deg' },
  { src: semicolon, top: '55%', left: '12%', size: '40px', rotate: '10deg' },
  { src: spark30, top: '22%', left: '93%', size: '70px', rotate: '45deg' },
  { src: speech4, top: '65%', left: '88%', size: '90px', rotate: '20deg' },
  { src: thoughts, top: '35%', left: '30%', size: '130px', rotate: '-10deg' },
  { src: triangle, top: '15%', left: '2%', size: '100px', rotate: '15deg' },
  { src: undo, top: '88%', left: '30%', size: '60px', rotate: '-45deg' },
  { src: zoom, top: '5%', left: '60%', size: '80px', rotate: '10deg' },
  { src: plant58, top: '45%', left: '75%', size: '120px', rotate: '160deg' },
  { src: swirl97, top: '25%', left: '25%', size: '100px', rotate: '0deg' },
  { src: arrowFork, top: '2%', left: '15%', size: '80px', rotate: '30deg' },
  { src: arrowCurvyDown, top: '15%', left: '35%', size: '70px', rotate: '-15deg' },
  { src: arrowLoop, top: '28%', left: '85%', size: '90px', rotate: '10deg' },
  { src: arrowReload, top: '42%', left: '60%', size: '60px', rotate: '45deg' },
  { src: arrowShaded, top: '55%', left: '2%', size: '120px', rotate: '-20deg' },
  { src: arrowSwirl, top: '68%', left: '15%', size: '80px', rotate: '15deg' },
  { src: arrowRedo, top: '82%', left: '40%', size: '70px', rotate: '0deg' },
  { src: arrowThickDown, top: '95%', left: '20%', size: '100px', rotate: '-10deg' },
  { src: arrowPinch, top: '5%', left: '95%', size: '60px', rotate: '20deg' },
  { src: arrowDownLeft, top: '18%', left: '10%', size: '70px', rotate: '-30deg' },
  { src: arrowReturn, top: '32%', left: '75%', size: '90px', rotate: '10deg' },
  { src: arrowUpRight, top: '48%', left: '50%', size: '80px', rotate: '-5deg' },
  { src: arrowUpRight52, top: '62%', left: '30%', size: '70px', rotate: '15deg' },
  { src: arrowUpRounded, top: '75%', left: '85%', size: '110px', rotate: '-10deg' },
  { src: arrowUp45, top: '88%', left: '55%', size: '50px', rotate: '0deg' },
  { src: arrowTwoWays, top: '10%', left: '45%', size: '80px', rotate: '20deg' },
  { src: arrowUpShaded, top: '22%', left: '5%', size: '90px', rotate: '-45deg' },
  { src: arrowsPointing, top: '38%', left: '92%', size: '100px', rotate: '0deg' },
  { src: braceClose, top: '52%', left: '25%', size: '40px', rotate: '15deg' },
  { src: braceClosedFilled, top: '65%', left: '70%', size: '50px', rotate: '-10deg' },
  { src: braceOpenFilled, top: '78%', left: '35%', size: '50px', rotate: '20deg' },
  { src: cloudAbstract, top: '92%', left: '80%', size: '150px', rotate: '0deg' },
  { src: curveLoop, top: '12%', left: '90%', size: '100px', rotate: '45deg' },
  { src: curveLoop114, top: '25%', left: '55%', size: '70px', rotate: '-20deg' },
  { src: restaurant, top: '41%', left: '10%', size: '110px', rotate: '10deg' },
  { src: scribbleLoop, top: '58%', left: '85%', size: '60px', rotate: '30deg' },
  { src: shapeLoops, top: '72%', left: '5%', size: '130px', rotate: '-15deg' },
  { src: shapeMaze, top: '85%', left: '45%', size: '90px', rotate: '5deg' },
  { src: snow, top: '18%', left: '55%', size: '140px', rotate: '0deg' },
  { src: swirl117, top: '35%', left: '5%', size: '120px', rotate: '10deg' },
  { src: swirl23, top: '50%', left: '95%', size: '110px', rotate: '-10deg' },
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
