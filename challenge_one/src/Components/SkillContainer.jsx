// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Skill from './Skill';

const Skills = () => {
  const frontendSkills = [
    { skill: 'JavaScript', icon: 'js' },
    { skill: 'React', icon: 'react' },
    { skill: 'HTML5', icon: 'html5' },
    { skill: 'CSS3', icon: 'css3-alt' },
    { skill: 'Bootstrap', icon: 'bootstrap' },
    { skill: 'TypeScript', icon: 'typescript' },
    { skill: 'Tailwind', icon: 'tailwindcss' },
    {skill: 'Material UI', icon: 'material-ui'},
    {skill:'figma', icon:'figma'}
  ];

  const backendSkills = [
    { skill: 'Node.js', icon: 'node-js' },
    { skill: 'Express', icon: 'express' },
    { skill: 'SQL', icon: 'database' },
    { skill: 'MongoDB', icon: 'database' },
    { skill: 'Python', icon: 'python' },
    { skill: 'NextJS', icon: 'react' },
    { skill: 'GraphQL', icon: 'graphql' },
    {skill: 'git', icon: 'git'},
    {skill:'github', icon:'github'}
  ];

  // State to track which list is active
  const [activeSkills, setActiveSkills] = useState(frontendSkills);

  return (
    <div>
      <div className="flex space-x-4 my-4 card-actions justify-between p-3">
        <button
          className="btn btn-secondary"
          onClick={() => setActiveSkills(backendSkills)}
        >
          Back End
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setActiveSkills(frontendSkills)}
        >
          Front End
        </button>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-3 bg-base-300 border p-1 rounded-md">
        {activeSkills.map((skill, index) => (
          <Skill key={index} skill={skill.skill} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
