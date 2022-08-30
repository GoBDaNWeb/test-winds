import ReactDOM from 'react-dom/client';
import '@styles/index.scss';
import App from './App';
import { RowProvider } from './context/AppContext';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <RowProvider>
        <App />
    </RowProvider>,
);
