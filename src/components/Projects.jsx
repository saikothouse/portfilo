import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import axios from 'axios';

const ProjectsSection = styled.section`
  padding: 5rem 2rem;
  background: #f5f5f5;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`;

const ProjectDescription = styled.p`
  margin: 0;
  color: #666;
`;

const LoadingMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
`;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/saikothouse/repos');
        setProjects(response.data);
      } catch (error) {
        setError('Error fetching projects. Please try again later.');
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <ProjectsSection id="projects">
      <h2>My Projects</h2>
      {loading && <LoadingMessage>Loading projects...</LoadingMessage>}
      {error && <LoadingMessage>{error}</LoadingMessage>}
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectImage src={project.owner.avatar_url} alt={project.name} />
            <ProjectInfo>
              <ProjectTitle>
                <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
              </ProjectTitle>
              <ProjectDescription>{project.description || 'No description available.'}</ProjectDescription>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;
