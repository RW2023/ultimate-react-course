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
    { skill: 'Angular', icon: 'angular' },
    { skill: 'TypeScript', icon: 'typescript' },
    {skill: 'Tailwind', icon: 'tailwindcss' },
  ];

  const backendSkills = [
    { skill: 'Node.js', icon: 'node-js' },
    { skill: 'Express', icon: 'express' },
    { skill: 'Python', icon: 'python' },
    { skill: 'Ruby', icon: 'ruby' },
    { skill: 'PHP', icon: 'php' },
    { skill: 'Java', icon: 'java' },
    { skill: 'C#', icon: 'microsoft' },
    { skill: 'Go', icon: 'go' },
    { skill: 'Rust', icon: 'rust' },
    { skill: 'SQL', icon: 'database' },
  ];

  // State to track which list is active
  const [activeSkills, setActiveSkills] = useState(frontendSkills);

  return (
    <div>
      <div className="flex space-x-4 my-4 card-actions justify-start">
        <button className="btn btn-primary" onClick={() => setActiveSkills(frontendSkills)}>
          Front End
        </button>
        <button className="btn btn-secondary" onClick={() => setActiveSkills(backendSkills)}>
          Back End
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-base-100 border p-1 rounded-md">
        {activeSkills.map((skill, index) => (
          <Skill key={index} skill={skill.skill} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
