import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import TagManager from 'react-gtm-module';

import './App.scss';
import { Root } from './page/Root';
import { Contact } from './page/Contact';

const tagManagerArgs = {
    gtmId: 'GTM-KL92HB3Q'
};

TagManager.initialize(tagManagerArgs);

const router = createBrowserRouter([
    { path: '/', element: <Root /> },
    { path: '/home', element: <Root /> },
    { path: '/contact', element: <Contact /> },
    { path: '/new-page/contact', element: <Contact /> },
    { path: '*', element: <Root /> }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
