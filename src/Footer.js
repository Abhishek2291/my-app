import SocialLinks from "./components/SocialLinks"

const Footer = (props) => {

  const links = ['Instgram','Twitter' ,'Linkedin' ,'Facebook']

  return (
    <div className="footer">
      <div>{props.name}</div>
      <SocialLinks name={props.name} sociallink={links} />
    </div>
  )
}

export default Footer