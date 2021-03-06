import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);