import { Footer } from "flowbite-react";
import React from "react";
import Logo from "./Logo";
import {
  Tutor,
  About,
  Contact,
  Licensing,
  PrivacyPolicy,
  Home,
} from "../../api/link";

function FooterContent({ tutor = false }) {
  return (
    <Footer container={true}>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Logo size={1.5} tutor={tutor} />
          <Footer.LinkGroup>
            <Footer.Link href={About}>About</Footer.Link>
            <Footer.Link href={PrivacyPolicy}>Privacy Policy</Footer.Link>
            <Footer.Link href={Licensing}>Licensing</Footer.Link>
            <Footer.Link href={Contact}>Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright
          href={tutor ?  Tutor  : Home}
          by="LearnT Learning"
          year={new Date().getFullYear()}
        />
      </div>
    </Footer>
  );
}
export default React.memo(FooterContent);
