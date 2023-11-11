import ComponentsImg from './assets/components.png';
import PropsImg from './assets/config.png';
import JSXImg from './assets/jsx-ui.png';
import StateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
  {
    image: ComponentsImg,
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple Components.',
  },
  {
    image: JSXImg,
    title: 'JSX',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    image: PropsImg,
    title: 'Props',
    description:
      'Make Components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    image: StateImg,
    title: 'State',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];

export const EXAMPLES = {
  Components: {
    title: 'Components',
    description:
      'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  JSX: {
    title: 'JSX',
    description:
      'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  Props: {
    title: 'Props',
    description:
      'Components accept arbitrary inputs called Props. They are like function arguments.',
    code: `
function Welcome(Props) {
  return <h1>Hello, {Props.name}</h1>;
}`,
  },
  State: {
    title: 'State',
    description:
      'State allows React Components to change their output over time in response to user actions, network responses, and anything else.',
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};