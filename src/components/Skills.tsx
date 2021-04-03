import React from 'react';
import SkillLogo from './SkillLogo';

// images
import angLogo from '../images/angular-logo.png';
import atlassianLogo from '../images/atlassian-logo.png';
import aureliaLogo from '../images/aurelia-logo.png';
import babelLogo from '../images/babel-logo.png';
import bashLogo from '../images/bash-logo.png';
import cSharpLogo from '../images/c-logo.png';
import cssLogo from '../images/css3-logo.png';
import esLogo from '../images/es6-logo.png';
import githubLogo from '../images/github-logo.png';
import gruntLogo from '../images/grunt-logo.png';
import gulpLogo from '../images/gulp-logo.png';
import htmlLogo from '../images/html5-logo.png';
import jsLogo from '../images/javascript-logo.png';
import jspmLogo from '../images/jspm-logo.png';
import laravelLogo from '../images/laravel-logo.png';
import mongoLogo from '../images/mongo-logo.png';
import nodeLogo from '../images/node.png';
import phpLogo from '../images/php-logo.png';
import postgresqlLogo from '../images/postgresql-logo.png';
import psLogo from '../images/ps-logo.png';
import pyLogo from '../images/python.png';
import reactLogo from '../images/react-logo.png';
import redisLogo from '../images/redis-logo.png';
import sassLogo from '../images/sass-logo.png';
import sqlLogo from '../images/sql-logo.png';
import tsLogo from '../images/typescript-logo.png';
import vsLogo from '../images/visual-studio-logo.png';
import webpackLogo from '../images/webpack-logo.png';
import yeomanLogo from '../images/yeoman-logo.png';

const Skills = () => (
  <section id="skills">
    <div className="container">
      <h1>Skills</h1>
      <div className="block" />
      <div className="row">
        <SkillLogo text="Angular" image={angLogo} />
        <SkillLogo text="Atlassian" image={atlassianLogo} />
        <SkillLogo text="Aurelia" image={aureliaLogo} />
        <SkillLogo text="Babel" image={babelLogo} />
        <SkillLogo text="Bash" image={bashLogo} />
        <SkillLogo text="C#" image={cSharpLogo} />
      </div>

      <div className="row">
        <SkillLogo text="CSS" image={cssLogo} />
        <SkillLogo text="ES6" image={esLogo} />
        <SkillLogo text="Github" image={githubLogo} />
        <SkillLogo text="Grunt" image={gruntLogo} />
        <SkillLogo text="Gulp" image={gulpLogo} />
        <SkillLogo text="HTML 5" image={htmlLogo} />
      </div>
      <div className="row">
        <SkillLogo text="JavaScript" image={jsLogo} />
        <SkillLogo text="JSPM" image={jspmLogo} />
        <SkillLogo text="Laravel" image={laravelLogo} />
        <SkillLogo text="Mongo DB" image={mongoLogo} />
        <SkillLogo text="Node" image={nodeLogo} />
        <SkillLogo text="PHP" image={phpLogo} />
      </div>

      <div className="row">
        <SkillLogo text="Postgresql" image={postgresqlLogo} />
        <SkillLogo text="PhotoShop" image={psLogo} />
        <SkillLogo text="Python" image={pyLogo} />
        <SkillLogo text="React" image={reactLogo} />
        <SkillLogo text="Redis" image={redisLogo} />
        <SkillLogo text="SASS" image={sassLogo} />
      </div>

      <div className="row">
        <SkillLogo text="SQL" image={sqlLogo} />
        <SkillLogo text="TypeScript" image={tsLogo} />
        <SkillLogo text="Visual Studio" image={vsLogo} />
        <SkillLogo text="Webpack" image={webpackLogo} />
        <SkillLogo text="Yeoman" image={yeomanLogo} />
      </div>
    </div>
  </section>
);

export default Skills;
