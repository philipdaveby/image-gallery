import data from '../about.json';

const About = () => {
  return (
    <section>
      <h1 className="about__heading">{data.title}</h1>
      <p className="about__description">{data.description}</p>
    </section>
  );
};

export default About;
