import HelpBox from './HelpBox';
import './HelpArea.css';

const HELP_ITEMS = [
  {
    id: 'h1',
    text: 'Acme Dog Walkers is a growing company that provides dog walking services. They have a web application running on AWS, primarily using EC2 instances for hosting. The development team uses GitHub for version control and collaboration.',
  }
];

function HelpArea() {
  return (
    <section data-testid="help-area" id="help-area">
      {HELP_ITEMS.map((item) => (
        <HelpBox key={item.id} title={item.title} text={item.text} />
      ))}
    </section>
  );
}

export default HelpArea;
