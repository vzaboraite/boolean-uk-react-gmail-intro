import Title from "./Title";
import Header from "./Header";
import EmailBodySection from "./EmailBodySection";
import EmailActionsSection from "./EmailActionsSection";

function Article() {
  return (
    <article className="email-content">
      <Title />
      <Header />
      <EmailBodySection />
      <EmailActionsSection />
    </article>
  );
}

export default Article;
