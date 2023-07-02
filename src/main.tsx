import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/common/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <React.Suspense fallback="Loading...">
            <App />
        </React.Suspense>
    </React.StrictMode>
);
