import "../../../css/emailContentHeader.css";

import Avatar from "./Avatar";
import DateInfo from "./DateInfo";
import EmailActionIcons from "./EmailActionIcons";
import EmailInfo from "./EmailInfo";

function Header() {
  return (
    <header className="email-content--header">
      <Avatar />
      <EmailInfo />
      <DateInfo />
      <EmailActionIcons />
    </header>
  );
}

export default Header;
