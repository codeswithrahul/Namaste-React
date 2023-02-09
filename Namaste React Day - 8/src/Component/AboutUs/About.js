import ProfileFunctionalCom from "../ProfileFunctionalCom";
import ProfileClass from "../ProfileClass";
import "./About.css";

const About = () => {
  return (
    <>
      <h1>I'm </h1>
      <ProfileFunctionalCom />
      <ProfileClass />
    </>
  );
};
export default About;

// const Section = ({ title, para }) => {
//   return (
//     <>
//       <div>
//         <h3>{title}</h3>
//         <p>{para}</p>
//       </div>
//     </>
//   );
// };
