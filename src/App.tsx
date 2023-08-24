import Plugin from './components/Plugin';
import { AppProps } from './types';

import './App.css';

const App = ({ options }: AppProps) => <Plugin options={options} />;

export default App;
