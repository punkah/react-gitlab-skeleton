import { createRoot } from 'react-dom/client';
import Page from './Page';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Page />);
